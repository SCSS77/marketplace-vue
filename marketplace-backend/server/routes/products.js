const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/games', async (req, res) => {
  try {
    const games = await Product.find({ category: 'Video Games' });
    res.json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
