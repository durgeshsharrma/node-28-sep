const express = require('express');
const app = express();
const path = require('path');
const mongoose  =require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

// Routers
const studentRouter = require('./routes/student');
const userRouter = require('./routes/user')


app.use(express.static(path.join(__dirname , '/public')));  //for static file like css and js
app.use(methodOverride('_method'))//for put and delete 


//views folder requirements
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"));
app.use(express.urlencoded({extended : false})); //url ko encode karne ka kam karta hai 

app.engine("ejs" , ejsMate); //this is used for to create boilerplate


const sessionOptions = {
    secret : "mysupersecretcode",
    resave  :  false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly  : true,
    }
}

app.use(session(sessionOptions));
app.use(flash());



app.use((req , res , next) => {
    res.locals.succMsg = req.flash('success');
    res.locals.errMsg = req.flash('error');
    next();
})



// connection with db
connection().then((err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("connection successful");
    }
})

async function connection(){
   await mongoose.connect("mongodb://127.0.0.1:27017/RdecProject");
} 


//Routers on which req come
app.use(studentRouter);
app.use(userRouter);

// app.use((err , req , res , next) => {
//     let {status = 401  , message = "some Error Occured"} = err;
//     res.status(status).render('error' , {message});
// })



app.listen(3000 , (err) => {
    if(err){
        console.log(err);
    }
    else { 
        console.log("server has started on port 3000");
    }
})