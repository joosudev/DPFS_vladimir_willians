const express = require('express');
const app = express();
const productRoutes = require('./src/routes/productRoutes');
const userRoutes = require('./src/routes/userRoutes');
const path = require('path');

// Configuraciones
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/products', productRoutes);
app.use('/users', userRoutes);

// Ruta Home
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
