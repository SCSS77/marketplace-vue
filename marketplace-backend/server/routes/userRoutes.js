const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Define routes
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
// Add more routes as needed

module.exports = router;
