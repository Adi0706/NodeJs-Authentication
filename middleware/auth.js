
const {getUser} = require('../Service/auth');


function checkforAuthentication(req,res,next){
    const authorizationHeaderValue = req.headers['authorization']
    req.user = null ;

    if(!authorizationHeaderValue || !authorizationHeaderValue.startswith("Bearer")){
        return next() ; 
    }


    const token = authorizationHeaderValue.split("Bearer")[1] ;
const user =    getUser(token) ;

req.user = user ;
return next() ; 

}


function restrictTo(role=[]){

    return function(req,res,next){
        if(!req.user) return res.redirect('/login') ; 

        if(!role.includes(req.user.roles)) return res.end('unauthorized') ; 


        return next() ; 
    
    }

}



module.exports= {
    checkforAuthentication ,
    restrictTo
}; 