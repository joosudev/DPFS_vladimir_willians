const express = require('express');
const router = express.Router();
const db = require('../../models'); // Asegúrate de apuntar al archivo correcto

// Endpoint para listar todos los productos
router.get('/', async (req, res) => {
    try {
        const products = await db.Product.findAll(); // Ajusta según el nombre de tu modelo
        res.json({
            count: products.length,
            products: products.map(product => ({
                id: product.id,
                name: product.name,
                description: product.description,
                detail: `/api/products/${product.id}` // Ruta de detalle del producto
            }))
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});

// Endpoint para el detalle de un producto
router.get('/:id', async (req, res) => {
    try {
        const product = await db.Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json({
            id: product.id,
            name: product.name,
            description: product.description,
            categories: product.categories, // Si tienes relaciones como categorías
            imageUrl: `/images/products/${product.image}` // Ajusta según tu estructura
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
});

module.exports = router;
