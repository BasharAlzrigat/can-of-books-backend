const mongoose = require('mongoose');

const Book = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
})

 module.exports = Book;