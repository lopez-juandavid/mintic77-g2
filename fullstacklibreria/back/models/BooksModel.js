const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
    book_name: String,
    book_author: String,
    book_description: String,
    book_price: Number
})

module.exports = mongoose.model('books', booksSchema);
