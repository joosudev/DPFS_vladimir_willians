const products = [
    { id: 1, name: "Laptop A", description: "Laptop potente", price: 1000 },
    { id: 2, name: "Laptop B", description: "Laptop básica", price: 500 }
  ];
  
  module.exports = {
    list: (req, res) => {
      res.render('products/list', { products });
    },
    detail: (req, res) => {
      const product = products.find(p => p.id == req.params.id);
      res.render('products/detail', { product });
    },
    createForm: (req, res) => {
      res.render('products/create');
    },
    create: (req, res) => {
      // Aquí se agregaría lógica para guardar el producto
      res.redirect('/products');
    },
    editForm: (req, res) => {
      const product = products.find(p => p.id == req.params.id);
      res.render('products/edit', { product });
    },
    edit: (req, res) => {
      // Aquí se agregaría lógica para editar el producto
      res.redirect('/products');
    }
  };
  