const mongoose = require('mongoose');
const Book = require('./book-schema.js');
const BookModel = mongoose.model('book', Book)


module.exports = BookModel;