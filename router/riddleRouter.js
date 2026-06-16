const express = require("express");
const riddleController = require("../controller/riddleController");
const { validateRiddle } = require("../config/postValidator");
const { isAuthenticated } = require("../config/isAuth");
const router = express.Router();

router.get("/",isAuthenticated, riddleController.riddle);
router.post("/",validateRiddle, riddleController.riddlePost);


module.exports = router;