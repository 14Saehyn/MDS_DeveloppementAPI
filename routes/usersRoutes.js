const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/signup', usersController.signupUser);
router.post('/login', usersController.loginUser);

module.exports = router;
