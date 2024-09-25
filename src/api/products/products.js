const express = require('express');
const router = express.Router();

// Simulación de base de datos de productos
const products = [
  { id: 1, name: 'Laptop', description: 'High performance laptop' },
  { id: 2, name: 'Smartphone', description: 'Latest model smartphone' }
];

// Endpoint para obtener todos los productos
router.get('/', (req, res) => {
  res.json({
    count: products.length,
    products: products.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      detail: `/api/products/${product.id}`
    }))
  });
});

// Endpoint para obtener el detalle de un producto por ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json({
    id: product.id,
    name: product.name,
    description: product.description,
    imageURL: `/images/products/${product.image}`
  });
});

module.exports = router;
