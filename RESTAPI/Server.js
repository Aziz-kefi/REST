const express = require('express')
const app=express()
const port=3000;
const Database= require("./Database");
let mongoose = require('mongoose')

const User= require('./models/User');
const { json } = require('express');
DB();

//api http:localhost:${port}/api/user
// get user

app.get('/api/user', (req, res) => {
    User.find()
    .then((user)=> res.status(200).json(user))
    .catch((err)=>res.send(err));
});
//api:http:localhost:${port}/api/user
//adding newUsers
app.post("/api/user",(req,res)=>{
    const newUser= new User({...req.body});
    newUser.save().then((user=>res.status(200).json(user)))
    .catch((err)=>res.send(err))

});

//api http:localhost:${user}/api/users/:_id
// Update User By Id

app.put("/api/user/:_id", (req, res) => {
    let { _id } = req.params;
    User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
      .then(() => res.send("User has been updated"))
      .catch((err) => res.send(err));
  });
  

//api http:localhost:${port}/api/user/:_id
// Delete User By Id
app.delete("/api/user/:_id", (req, res) => {
  let { _id } = req.params;
  User.findByIdAndDelete({ _id })
    .then(() => res.send("Contact has been deleted"))
    .catch((err) => res.send(err));
});
