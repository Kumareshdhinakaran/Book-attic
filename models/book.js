const mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  rating: String,
  cost: String,
  description: String,
  image: String,
  category: String,
  reviews: Array,
});

module.exports = mongoose.model("Book", bookSchema);
