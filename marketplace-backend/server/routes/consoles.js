const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findOne();
    res.json(products.consoles);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
