//const express = require('express');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employeeSchema = new schema({
    name : {type:String},
    designation : {type:String},
    email : {type:String},
    phone :{type:String},
    age : {type:Number} 
},{timestamps:true});

module.exports = mongoose.model('employees',employeeSchema);