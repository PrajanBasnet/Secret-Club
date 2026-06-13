const express = require("express");
const router = express.Router();
const postController = require("../controller/postController");
const { postValidator } = require("../config/postValidator");
const { isAuthenticated } = require("../config/isAuth");

router.get("/all",isAuthenticated,postController.viewAddPost);
router.post("/all",postValidator,isAuthenticated,postController.addPost);


module.exports = router;