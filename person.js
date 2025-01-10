const mongoose = require('mongoose');
// =============define the person schema=================================================================
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['chef', 'waiter', 'manager'],
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    addresh:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    }  
});
//cretate a person models in mongodb=============================
const Person=mongoose.model('Person',personSchema);
module.exports=Person;