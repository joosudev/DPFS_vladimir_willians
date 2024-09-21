const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Listado de productos
router.get('/', productController.list);

// Detalle de producto
router.get('/:id', productController.detail);

// Formulario de creación
router.get('/create', productController.create);

// Acción de creación
router.post('/create', productController.store);

// Formulario de edición
router.get('/:id/edit', productController.edit);

// Acción de edición
router.put('/:id', productController.update);

// Acción de borrado
router.delete('/:id', productController.delete);

module.exports = router;
