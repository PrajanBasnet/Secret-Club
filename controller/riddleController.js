const db = require("../db/db");

function riddle(req,res){
    res.render("riddle");
}

async function riddlePost(req,res){
    const {riddle} = req.body;
    if(riddle !== "osho") {
        res.redirect("/riddle")
    }
    const updateStatus =  await db.query(`UPDATE users SET member_status = true WHERE id = $1`,[req.user.id]);

    res.redirect("/post/all");
}
module.exports = {
    riddle,
    riddlePost
}