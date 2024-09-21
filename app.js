const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const session = require('express-session');
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

// Configurar method-override para usar métodos HTTP como PUT y DELETE
app.use(methodOverride('_method'));

app.use(session({
  secret: 'mi-secreto',
  resave: false,
  saveUninitialized: true
}));

// Rutas
app.use('/products', productRoutes);
app.use('/users', userRoutes);

// Ruta Home - Aquí pasamos 'req' a la vista
app.get('/', (req, res) => {
  res.render('home', { req });  // Pasamos el objeto 'req' a la vista
});

// Servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
