const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['Accommodations', 'Restaurants', 'Activities', 'Veterinary Services'],
    required: true
  },
});

module.exports = mongoose.model('Category', categorySchema);

