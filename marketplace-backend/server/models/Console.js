const mongoose = require('mongoose');

const consoleSchema = new mongoose.Schema({
  name: String,
  id: Number,
  description: String,
  price: Number,
  category: String,
  image: String
});

module.exports = mongoose.model('Console', consoleSchema);
