
const USER = require('../Models/UserModel') ; 


async function handleSignup(req,res){
    const {name,email,password} = req.body ; 

    await USER.create({
        name,
        email,
        password,
    })

    return res.render("login") ; 
    
}

module.exports={
    handleSignup,
}