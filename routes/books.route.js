const express = require('express');
const route = express.Router();

const books = require('../controllers/books.controller');

route.post('/create',books.create);
route.get('/',books.findAll);
route.get('/:id',books.findOne);
route.put('/:id',books.update);
route.delete('/:id',books.deleteBook);


module.exports = route;