const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);
router.get('/create', productController.createProduct);
router.post('/create', productController.saveProduct);
router.get('/:id', productController.getProductDetail);
router.get('/edit/:id', productController.editProduct);
router.post('/edit/:id', productController.updateProduct);

module.exports = router;
