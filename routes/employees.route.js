//const mongoose = require('mongoose');
//const employee = mongoose.model('employee');
const express = require('express');
const router = express.Router();
const employees = require('../controllers/employees.controller');

/*
route.get('/',(req,res)=>{
    employee.findAll();
    //res.send("Get Employee List");
    //console.log("get employee list ");
});
*/

//get all employees
router.get('/',employees.index);
//create new employee
router.post('/create',employees.create);
router.post('/update',employees.update);

module.exports = router;