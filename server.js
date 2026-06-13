const express = require("express");
const path = require('path');
const signupRouter = require("./router/signupRouter");
const dashboard = require("./router/dashboardRouter");
const riddle  = require("./router/riddleRouter");
const post = require("./router/postRouter");


const passport = require("passport");
const session = require("express-session");
const app = express();
require("dotenv").config();
require("./controller/signupController");
const flash = require("connect-flash");

//middle ware

app.use(session({
    secret: "secret",
    resave:false,
    saveUninitialized: false,
    cookie: {
        maxAge:24 * 60 * 60 * 1000
    }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public")));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/auth/",signupRouter);
app.use('/dashboard',dashboard);
app.use('/post',post);
app.use("/riddle",riddle);


app.listen(process.env.PORT,()=>{
    console.log("Server running on PORT 300");
})