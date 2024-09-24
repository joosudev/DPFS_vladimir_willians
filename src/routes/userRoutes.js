const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');  // Ruta correcta hacia el controlador
const upload = require('./middlewares/multerConfig');  // Middleware de subida de archivos ajustado
const authMiddleware = require('./middlewares/authmiddleware');  // Middleware de autenticación
const db = require('../../models'); // Ajusta la ruta para asegurarte que apunta a la carpeta models correctamente

// Rutas de usuario
router.get('/register', userController.registerForm);
router.post('/register', upload.single('profileImage'), userController.register);  // Incluida la subida de imagen
router.get('/login', userController.loginForm);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/profile', authMiddleware, userController.profile);

// Nueva ruta para consultar todos los usuarios (ruta de prueba)
router.get('/test-users', async (req, res) => {
  try {
    const users = await db.User.findAll();  // Consulta a todos los usuarios en la base de datos
    res.json(users);  // Devuelve los usuarios en formato JSON
  } catch (error) {
    console.error(error);  // Muestra el error en la consola para depuración
    res.status(500).json({ error: 'Error al obtener los usuarios' });  // Devuelve un error si falla
  }
});

module.exports = router;
