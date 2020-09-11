//var MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//const url = "mongodb://admin:admin%40123@localhost:27017/?authSource=lms&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";

const url ="mongodb+srv://admin:admin@123@cluster0.k75ue.mongodb.net/lms"

/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database connected!");
  db.close();
});
*/

mongoose.connect(url, { useUnifiedTopology: true,useNewUrlParser: true, useFindAndModify: false,
  useCreateIndex: true })
  .then(client => {
    console.log('Connected to MongoDB Database');
  });


