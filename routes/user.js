const express = require('express');
const router = express.Router();
const users = require('../models/user');


router.get("/signup" , (req , res) => {
    res.render("user/signup");
})


router.post("/users" ,async(req ,  res) => {
    
      let allusers = new users(req.body);
      await allusers.save().then((res) => {
        console.log(res);
      })
      req.flash("success" , "User added successfuly");
      res.redirect("/allusers")
})

router.get("/allusers" , async(req , res) => {
    let allusers =await users.find({});
    res.render('user/allusers.ejs' , {student : allusers});


})


module.exports = router;


