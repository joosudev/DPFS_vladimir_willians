const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Formulario de creación
router.get('/create', productController.create);

// Acción de creación
router.post('/create', productController.store);

// Formulario de edición
router.get('/:id/edit', productController.edit); // Poner esta antes

// Acción de edición
router.put('/:id', productController.update);

// Acción de borrado
router.delete('/:id', productController.delete);

// Detalle de producto
router.get('/:id', productController.detail); // Esta debe estar al final

// Listado de productos
router.get('/', productController.list);

module.exports = router;
