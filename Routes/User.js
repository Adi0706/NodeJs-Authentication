const express = require('express') ; 
const {handleSignup} = require('../Controllers/user') ; 

const router = express.Router() ; 

router.post('/Register',handleSignup) ; 






module.exports = router ; 