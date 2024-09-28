const express = require('express');
const router = express.Router();
const users = require('../models/user');


router.get("/signup" , (req , res) => {
    try{
      res.render("user/signup");
    }
    catch(err){
      console.log(err);
    }
})


router.post("/users" ,async(req ,  res) => {
    
      try{
        let allusers = new users(req.body);
      await allusers.save().then((res) => {
        console.log(res);
      })
      req.flash("success" , "User added successfuly");
      res.redirect("/allusers")
      }
      catch(err){
        console.log(err)
      }
})

router.get("/allusers" , async(req , res) => {
   try{
    let allusers =await users.find({});
    res.render('user/allusers.ejs' , {student : allusers});
   }

   catch(err){
    console.log(err)
  }

})


module.exports = router;


