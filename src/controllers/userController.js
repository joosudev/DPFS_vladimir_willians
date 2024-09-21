const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../../data/users.json'); // Ajusta la ruta si es necesario
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

module.exports = {
    registerForm: (req, res) => {
        res.render('users/register', { error: null });
    },

    register: (req, res) => {
        const { firstName, lastName, email, password } = req.body;

        // Verificar si el email ya está registrado
        const userExists = users.find(user => user.email === email);
        if (userExists) {
            return res.render('users/register', {
                error: 'El email ya está registrado.'
            });
        }

        // Encriptar la contraseña
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Crear nuevo usuario
        const newUser = {
            id: users.length + 1,
            firstName,
            lastName,
            email,
            password: hashedPassword,
            image: req.file ? req.file.filename : 'default.jpg'  // Manejar imagen de perfil
        };

        // Agregar el nuevo usuario al archivo JSON
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

        // Redirigir al login después del registro
        res.redirect('/users/login');
    },

    loginForm: (req, res) => {
        res.render('users/login', { error: null });
    },

    login: (req, res) => {
        const { email, password } = req.body;
        const user = users.find(user => user.email === email);

        if (!user) {
            return res.render('users/login', { error: 'Credenciales incorrectas.' });
        }

        const passwordMatches = bcrypt.compareSync(password, user.password);
        if (!passwordMatches) {
            return res.render('users/login', { error: 'Credenciales incorrectas.' });
        }

        // Guardar el usuario en la sesión
        req.session.user = user;
        res.redirect('/');
    },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },

    profile: (req, res) => {
        res.render('users/profile', { user: req.session.user });
    }
};
