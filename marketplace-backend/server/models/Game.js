const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: String,
  id: Number,
  description: String,
  price: Number,
  category: String,
  image: String
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
