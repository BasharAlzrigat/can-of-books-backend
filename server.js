'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const BookModel = require('./book-model.js');
const booksHandler = require('./books-route.js');
app.use(cors());
mongoose.connect(process.env.MONGODB_URI)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.get('/books',booksHandler);

const book1 = new BookModel({
  title: "book1 title",
  description: "book1 description",
  status: "book1 status",
})
book1.save();
const book2 = new BookModel({
  title: "book2 title",
  description: "book2 description",
  status: "book2 status",
})
book2.save();
const book3 = new BookModel({
  title: "book3 title",
  description: "book3 description",
  status: "book3 status",
})
book3.save();