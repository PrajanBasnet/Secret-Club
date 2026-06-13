const db = require("../db/db");

function viewAddPost(req,res){
    res.render("post",{firstname:req.user.firstname});
}

function addPost(req,res){
    const {title,description} = req.body;
    const data = db.query(`INSERT INTO message (user_id,title,description) VALUES ($1,$2,$3)`,[req.user.id,title,description]);
    res.redirect("/dashboard");
    
}


module.exports ={
    addPost,
    viewAddPost
}