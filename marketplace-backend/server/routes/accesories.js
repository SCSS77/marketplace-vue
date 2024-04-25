const express = require('express');
const router = express.Router();
const Accessory = require('../models/Accesory');

router.get('/', async (req, res) => {
  try {
    const accessories = await Accessory.find();
    res.json(accessories);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
