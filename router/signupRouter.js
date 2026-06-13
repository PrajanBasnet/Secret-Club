const express = require("express");
const router = express.Router();
const signupController = require("../controller/signupController");
const { validateSignup } = require("../config/postValidator");

const passport = require("passport");
const { isGuest }= require("../config/isAuth");

router.get("/signup",signupController.signup);
router.post("/signup",validateSignup,signupController.signupPost);
router.get("/login",isGuest,signupController.login);

router.post("/login",passport.authenticate("local",{
    successRedirect:"/dashboard",
    failureRedirect:"/auth/login",
    failureFlash:true
}));

module.exports = router;