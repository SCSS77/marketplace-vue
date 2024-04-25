const express = require('express');
const router = express.Router();
const Merchandise = require('../models/Merchandise');

router.get('/', async (req, res) => {
  try {
    const merchandise = await Merchandise.find();
    res.json(merchandise);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
