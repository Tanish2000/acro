var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var url = "mongodb+srv://Tanish:tanish@cluster0.v1a3sps.mongodb.net/?retryWrites=true&w=majority/stuDB";
mongoose.connect(url , ()=> console.log("DB connected"));
var User = require("../model/userModel");

/* Register */
router.post('/register', function(req, res) {
  let newUser = new User(req.body);
  newUser.save();
  res.json({ message : "User Registered"});
});

router.post('/checklogin' , (req,res)=> {
  User.find(req.body , (err, result)=> {
    if(result.length == 1)
    {
      res.json({message : "Login Successful"})
    }
    else 
    {
      res.json({message : "Invalid Credentials"});
    }
  })
})

module.exports = router;
