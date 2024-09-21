const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Verificar y crear la carpeta si no existe
const dir = path.join(__dirname, '../../public/images/users');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true }); // Crear la carpeta si no existe
}

// Configuración del almacenamiento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, dir);  // Usamos la ruta asegurada
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'profileImage-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// Middleware de multer
const upload = multer({ storage: storage });

module.exports = upload;
