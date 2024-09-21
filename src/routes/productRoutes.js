const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Listado de productos
router.get('/', productController.list);

// Detalle de producto
router.get('/detail/:id', productController.detail);

// Crear producto
router.get('/create', productController.createForm);
router.post('/create', productController.create);

// Editar producto
router.get('/edit/:id', productController.editForm);
router.post('/edit/:id', productController.edit);

module.exports = router;
