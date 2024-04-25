const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
  name: String,
  id: Number,
  description: String,
  price: Number,
  category: String,
  image: String
});

module.exports = mongoose.model('Accessory', accessorySchema);
