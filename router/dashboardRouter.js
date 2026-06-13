const express = require("express");
const router = express.Router();
const dashboardController = require("../controller/dashbaordController");
const { isAuthenticated }= require("../config/isAuth");

router.get("/",isAuthenticated, dashboardController.dashboard);

module.exports = router;