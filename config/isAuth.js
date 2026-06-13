function isAuthenticated (req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("Error","You must be logged in to access the page");
    res.redirect('/auth/login');
}

function isGuest (req,res,next){
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect("/dashboard");
}

module.exports = {
    isAuthenticated,
    isGuest
}