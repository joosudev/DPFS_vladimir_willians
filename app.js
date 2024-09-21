const express = require('express');
const path = require('path');

const app = express();

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Archivos estáticos (CSS, imágenes, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para formularios
app.use(express.urlencoded({ extended: false }));

// Importación de rutas
const productRoutes = require('./src/routes/productRoutes');
const userRoutes = require('./src/routes/userRoutes');

// Uso de rutas
app.use('/products', productRoutes);
app.use('/users', userRoutes);

// Ruta para el home
app.get('/', (req, res) => {
  res.render('home');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
