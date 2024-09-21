const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');  // Ruta correcta hacia el controlador
const upload = require('./middlewares/multerConfig');  // Middleware de subida de archivos ajustado
const authMiddleware = require('./middlewares/authmiddleware');  // Middleware de autenticación

// Rutas de usuario
router.get('/register', userController.registerForm);
router.post('/register', upload.single('profileImage'), userController.register);  // Incluida la subida de imagen
router.get('/login', userController.loginForm);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/profile', authMiddleware, userController.profile);

module.exports = router;
