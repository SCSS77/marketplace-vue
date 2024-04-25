const express = require('express');
const router = express.Router();
const Console = require('../models/Console');

router.get('/', async (req, res) => {
  try {
    const consoles = await Console.find();
    res.json(consoles);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
