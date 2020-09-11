const employee = require('../models/employees.model');

exports.index = (req,res,next)=>{

    employee.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        message :'An error Occured'
    })

}

// Create and Save a new Note
exports.create = (req, res) => {

    let Employee = new employee(
        {
            name : req.body.name,
            designation : req.body.designation,
            email : req.body.email,
            mobileNo :req.body.mobileNo,
            age : req.body.age 
        }
    ); 

    Employee.save(function(err){
        if(err){
            return next(err);
        }
        res.send("employee save successfully !!");
        //res.redirect('/');
    });

};



// Find a single note with a noteId
exports.findOne = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};


function getNextSequenceValue(sequenceName){
    var sequenceDocument = db.counters.findAndModify({
       query:{_id: sequenceName },
       update: {$inc:{sequence_value:1}},
       new:true
    });
    return sequenceDocument.sequence_value;
 }