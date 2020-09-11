
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoClient  = require('./config/db.config');
const employeeRoute = require('./routes/employees.route');
const bookRoute = require('./routes/books.route');

const cors = require('cors');
//var corOptions = {
//    origin:"http://localhost:3000"
//}

//app.use(cors(corOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000, function() {
    console.log('listening on 3000')
  })

app.get('/', (req, res)=> {
// do something here
//res.send("Hello World");
res.sendFile(__dirname + '/index.html')
})

app.use('/employee',employeeRoute);
app.use('/book',bookRoute);
