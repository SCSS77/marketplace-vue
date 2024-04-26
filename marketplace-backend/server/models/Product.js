const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  games: [Object],
  consoles: [Object],
  accessories: [Object],
  merchandising: [Object]
});

module.exports = mongoose.model('Product', productSchema);
