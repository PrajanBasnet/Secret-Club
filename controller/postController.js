const db = require("../db/db");

function viewAddPost(req,res){
    if(req.user.member_status !== true){
        return res.redirect("/dashboard");
    }
    return res.render("post",{firstname:req.user.firstname});
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