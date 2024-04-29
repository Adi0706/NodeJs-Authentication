
const {getUser} = require('../Service/auth');


async function restricttologgedinuser(req,res,next){
    const userID = req.cookies.uid;

    if(!userID) return res.redirect('/login') ; 
    const user =getUser(userID)
    if(!user) return res.redirect('/login') ; 

    req.user = user ; 
    next() ; 
}

module.exports= {
    restricttologgedinuser ,
}; 