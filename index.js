const express = require('express') ; 
const dotenv = require('dotenv') ; 
const {connectMongoDB} = require('./Connection');
const userRouter = require('./Routes/User') ; 
const staticRouter = require('./Routes/staticRoute/PageRoutes')
const path = require('path') ; 
const cookieParser = require('cookie-parser') ; 

dotenv.config() ; 

//variable declarations
const app = express() ; 
const PORT  = process.env.PORT_NUMBER ; 
const MONGODB_URL = process.env.MONGOURL;

//database connection
connectMongoDB(MONGODB_URL)
.then(res=>console.log("mongodb connected"))
.catch(err=>console.log("error in connection"))

//middle wares 
app.use(express.json()) ; 
app.use(express.urlencoded({extended:false})) ; 
app.use(cookieParser()) ; 

//template engine
app.set("view engine","ejs") ; 
app.set('Views',path.resolve('./Views')) ; 


// app.use('/url',restricttologgin,handlers)--> if you want to access the url shortener u have to be logged !
//Routes for user
app.use('/api/user',userRouter);
app.use('/',staticRouter) ; 



app.listen(PORT,()=>{
    console.log(`Server is running on port number ${PORT}`) ; 
})