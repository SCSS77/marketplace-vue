const express = require('express');
const router = express.Router();
const SearchResult = require('../models/SearchResult');

router.get('/', async (req, res, next) => {
  try {
    const searchResults = await SearchResult.find();
    res.json(searchResults);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
