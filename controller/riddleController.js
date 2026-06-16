const db = require("../db/db");

function riddle(req,res){
    res.render("riddle");
}

async function riddlePost(req,res){
    const {riddle} = req.body;
    if(riddle !== "osho") {
        return res.redirect("/riddle");
    }
    const updateStatus =  await db.query(`UPDATE users SET member_status = true WHERE id = $1`,[req.user.id]);

    return res.redirect("/post/all");
}
module.exports = {
    riddle,
    riddlePost
}