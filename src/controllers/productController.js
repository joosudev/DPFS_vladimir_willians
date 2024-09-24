const db = require('../../models'); // Asegúrate de que Sequelize esté conectado

const productController = {
  list: async (req, res) => {
    const products = await db.Product.findAll();
    res.render('products/list', { products });
  },
  detail: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    res.render('products/detail', { product });
  },
  create: (req, res) => {
    res.render('products/create');
  },
  store: async (req, res) => {
    const newProduct = await db.Product.create(req.body);
    res.redirect('/products');
  },
  edit: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    res.render('products/edit', { product });
  },
  update: async (req, res) => {
    const product = await db.Product.update(req.body, {
      where: { id: req.params.id }
    });
    res.redirect('/products');
  },
  delete: async (req, res) => {
    await db.Product.destroy({ where: { id: req.params.id } });
    res.redirect('/products');
  }
};

module.exports = productController;
