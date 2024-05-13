
const jwt = require('jsonwebtoken') ; 
const dotenv = require('dotenv') ;

dotenv.config()
const secret = process.env.SECRET_JWT

function setUser(user){
    //creating tokens 
return jwt.sign({
    _id:user.id,
    email:user.email,
},secret)
}

function getUser(token){
try{
    return jwt.verify(token,secret) ; 
}catch(err){
    return null ;
}
}


module.exports={
    setUser,
    getUser,
}