const mongoose = require("mongoose");
const schema = mongoose.Schema;
//const autoIncement = require('mongoose-auto-increment');
//const mongoClient  = require('../config/db.config');

//autoIncement.initialize();

const bookSchema = new schema({

    bookTitle : {type:String},
    bookEdition : {type:String}, 
    //bookAuthor : { type: Schema.Types.ObjectId, ref: 'Author' },
    bookAuthor : {type:String},
    bookPublisher : {type:String},
    bookCopies : {type:Number},
    bookCost : {type:String},
},{timestamps:true});

//bookSchema.plugin(autoIncrement.plugin, 'book');
module.exports = mongoose.model('book',bookSchema);