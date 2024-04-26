const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const Game = require('../models/Game');

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.get('/games', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
