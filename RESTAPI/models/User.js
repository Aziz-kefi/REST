const mongoose=require('mongoose');
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

module.exports=mongoose.model('User',User)