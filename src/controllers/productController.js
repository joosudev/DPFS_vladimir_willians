const products = [
 
  { id: 1, name: 'Laptop HP', description: 'Potente laptop HP', price: 800, image: 'hp1.webp', category: 'Electrónica' },
  
  { id: 2, name: 'MacBook Pro', description: 'MacBook Pro de última generación', price: 1200, image: 'macbook1.png', category: 'Electrónica' },

  { id: 3, name: 'Laptop Dell ', description: 'Dell Ultima Generación', price: 1100, image: 'dell1.png', category: 'Electrónica' },
];

exports.getProducts = (req, res) => {
  res.render('products/list', { products });
};

exports.getProductDetail = (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  res.render('products/detail', { product });
};

exports.createProduct = (req, res) => {
  res.render('products/create');
};

exports.saveProduct = (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    category: req.body.category
  };
  products.push(newProduct);
  res.redirect('/products');
};

exports.editProduct = (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  res.render('products/edit', { product });
};

exports.updateProduct = (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  product.name = req.body.name;
  product.description = req.body.description;
  product.price = req.body.price;
  product.image = req.body.image;
  product.category = req.body.category;
  res.redirect('/products');
};
