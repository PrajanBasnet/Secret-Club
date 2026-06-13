// const db = require("../db/db");
const { viewPostQuery } = require("../db/postDb");

async  function dashboard(req,res,next){
    const data = await viewPostQuery();
    console.log("User ID:", req.user);
    const userid =  req?.user || null;
    
    res.render("dashboard",{data:data, userid: userid });
}


module.exports = {
    dashboard
}