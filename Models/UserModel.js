const mongoose = require('mongoose')  ;


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        requried:true,
        
    },
    role:{
              type:String,
              requried:true,
              default:"NORMAL",
    },
    password:{
        type:String,
        requried:true,
        
    }
},{timestamps:true})


const USER = mongoose.model('users',userSchema) ;

module.exports = USER;