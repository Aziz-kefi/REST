import mongoose from 'mongoose';
const { Schema } = mongoose;

const User= new Schema({
    FirstName:{
        type:String,
        required:true
    },
LastName:{
    type:String,
    required:true
},
age:Number
})

module.exports=Schema.model('User',User)