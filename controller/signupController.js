const bcrypt = require("bcrypt");
const db = require("../db/db");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { body, validationResult } = require("express-validator");

//login section
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const { rows } = await db.query("SELECT * FROM users WHERE username = $1", [username]);
        if (rows.length === 0) {
            return done(null, false, { message: "No user found" });
        }
        const user = rows[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return done(null, false, { message: "Incorrect passowrd " });
        }
        return done(null, user);

    } catch (error) {
        return done(error);
    }
}))
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    try {
        const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [id]);
        done(null, rows[0]);
    } catch (error) {
        done(error);
    }
})

function login(req, res, next) {
    res.render("login", { error: req.flash("error") });
}
//signup section
function signup(req, res, next) {
    res.render("signup");
}

async function signupPost(req, res, next) {
    const { firstname, lastname, username, password } = req.body;

    let hasedPassword = await bcrypt.hash(password, 10);
    await db.query(`INSERT INTO  users (firstname,lastname,username,password) 
    VALUES ($1,$2,$3,$4)`, [firstname, lastname, username, hasedPassword]);
    res.send("/auth/login");
}

module.exports = {
    signup,
    signupPost,
    login,
    
}