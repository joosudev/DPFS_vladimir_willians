module.exports = {
    registerForm: (req, res) => {
      res.render('users/register');
    },
    register: (req, res) => {
      // Aquí se agregaría la lógica de registro
      res.redirect('/users/login');
    },
    loginForm: (req, res) => {
      res.render('users/login');
    },
    login: (req, res) => {
      // Aquí se agregaría la lógica de login
      res.redirect('/');
    }
  };
  