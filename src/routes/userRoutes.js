const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Registro de usuario
router.get('/register', userController.registerForm);
router.post('/register', userController.register);

// Login de usuario
router.get('/login', userController.loginForm);
router.post('/login', userController.login);

module.exports = router;
