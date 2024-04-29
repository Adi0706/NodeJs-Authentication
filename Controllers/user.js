
const USER = require('../Models/UserModel') ; 
const {v4:uuid} = require('uuid');
const {setUser} = require('../Service/auth')
async function handleSignup(req,res){
    const {name,email,password} = req.body ; 

    await USER.create({
        name,
        email,
        password,
    })

    return res.render("login") ; 
    
}

async function handleLogin(req,res){
  const  {name,password} = req.body ; 

    const user = await USER.findOne({name,password}) ; 
    if(!user){
        return res.render("errorpage");
    }

    //setting cookies / sessions for logins
    const sessionid = uuid() ; 
   setUser(sessionid,user) ; 
   res.cookie("uid",sessionid);


    return res.render("Home") ; 
}

module.exports={
    handleSignup,
    handleLogin
}