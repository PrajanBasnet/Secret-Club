const db = require("../db/db");

function viewAddPost(req,res){
    res.render("post");
}

function addPost(req,res){
    const {title,description} = req.body;
    console.log(req.user);
    const data = db.query(`INSERT INTO message (user_id,title,description) VALUES ($1,$2,$3)`,[req.user.id,title,description]);
    res.redirect("/dashboard");
    
}


module.exports ={
    addPost,
    viewAddPost
}