const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
  list: (req, res) => {
    res.render('products/list', { products });
  },
  detail: (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    res.render('products/detail', { product });
  },
  create: (req, res) => {
    res.render('products/create');
  },
  store: (req, res) => {
    const newProduct = {
      id: products.length + 1,
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
      colors: req.body.colors.split(','),
      price: req.body.price
    };
    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    res.redirect('/products');
  },
  edit: (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    res.render('products/edit', { product });
  },
  update: (req, res) => {
    const productIndex = products.findIndex(p => p.id == req.params.id);
    products[productIndex] = {
      id: products[productIndex].id,
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
      colors: req.body.colors.split(','),
      price: req.body.price
    };
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    res.redirect('/products');
  },
  delete: (req, res) => {
    products = products.filter(p => p.id != req.params.id);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    res.redirect('/products');
  }
};

module.exports = productController;
