const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const app = express();

// Rutas de productos y usuarios
const productRoutes = require('./src/routes/productRoutes');
const userRoutes = require('./src/routes/userRoutes');

// Configuraciones
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Usar method-override para soportar PUT y DELETE desde los formularios
app.use(methodOverride('_method'));

// Rutas
app.use('/products', productRoutes);
app.use('/users', userRoutes);

// Ruta Home
app.get('/', (req, res) => {
  res.render('home');
});

// Servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
