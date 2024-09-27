# DPFS_vladimir_willians

## Proyecto de E-Commerce Fullstack (Node.js + Express + React)

## Descripción del proyecto

Este proyecto es un sitio de e-commerce completo que utiliza **Node.js** y **Express** en el back-end, con **EJS** como motor de plantillas para las vistas iniciales y **React** para el front-end de administración del dashboard. También integra APIs para usuarios y productos y sigue el patrón **MVC (Modelo, Vista, Controlador)**.

## Tecnologías principales utilizadas

- **Node.js**: Plataforma para el back-end.
- **Express**: Framework para manejar rutas, APIs y middlewares.
- **EJS**: Motor de plantillas para la renderización de vistas en la parte inicial del proyecto.
- **React**: Biblioteca para la creación de la interfaz del dashboard en el front-end.
- **Sequelize**: ORM para interactuar con la base de datos.
- **MySQL**: Base de datos utilizada en el proyecto.
- **Multer**: Middleware para la carga de archivos (imágenes de perfil).
- **Axios**: Cliente HTTP para consumir las APIs desde React.
- **Express-validator**: Validación de formularios en el servidor.
- **CORS**: Permitir la comunicación entre el back-end y el front-end en servidores diferentes.

## Estructura del proyecto

El proyecto sigue el patrón **MVC**:
- **Modelos**: Representación de las tablas en la base de datos.
- **Vistas (View)**: Se utilizan plantillas **EJS** en el servidor para las páginas de registro, login y detalles de productos/usuarios.
- **Controladores (Controller)**: Lógica de la aplicación que responde a las rutas, interactúa con los modelos y las vistas.

### Directorios principales

```
├── src
│   ├── controllers
│   ├── models
│   ├── views
│   ├── routes
│   ├── api
│   ├── public
│   ├── services
├── dashboard (carpeta de React para el dashboard de administración)
```

- **controllers**: Contiene la lógica de las rutas y API. Maneja las interacciones con la base de datos.
- **models**: Define los modelos de la base de datos usando Sequelize.
- **views**: Plantillas **EJS** para las páginas del sitio antes de migrar a React.
- **routes**: Define las rutas para las APIs y las vistas.
- **api**: Rutas para las APIs de usuarios y productos.
- **dashboard**: Carpeta de React para el panel de administración.

## Funcionalidades

### Parte 1: Node.js + Express + EJS

- **Autenticación de usuarios**:
  - Registro con validación de datos (nombre, apellido, correo, imagen de perfil).
  - Inicio de sesión y manejo de sesiones.
  - **EJS** para renderizar formularios y vistas (registro, login, perfil de usuario).
  - **Multer** para manejar la subida de imágenes de perfil.
  - Implementación de controladores para manejar lógica de usuarios y productos.
  - Implementación de middleware para proteger rutas con autenticación.

### Parte 2: API RESTful

- Creación de una **API RESTful** con los siguientes endpoints:
  - **Usuarios**: Listado de usuarios (`/api/users`) y detalle de usuario (`/api/users/:id`).
  - **Productos**: Listado de productos (`/api/products`) y detalle de producto (`/api/products/:id`).
  - **Paginación** opcional para los listados de usuarios y productos.
  - Validaciones con **Express-validator** para asegurar la integridad de los datos.

### Parte 3: React + Dashboard

- Desarrollo de un **Dashboard en React** que consume la API de productos y usuarios.
- Utilización de **Axios** para realizar las llamadas a la API.
- Mostrar el **total de productos**, **total de usuarios**, y el **último usuario registrado** en el dashboard.
- Estructura modular con **componentes** en React.
- Estilización básica para el dashboard.

## Instalación y ejecución del proyecto

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/joosudev/DPFS_vladimir_willians.git
cd mitienda
```

### Paso 2: Instalar las dependencias

```bash
npm install
```

### Paso 3: Configurar la base de datos

1. Configura el archivo `config/config.json` con tus credenciales de MySQL.
2. Ejecuta las migraciones para crear las tablas en la base de datos.

```bash
npx sequelize-cli db:migrate
```

### Paso 4: Ejecutar el proyecto

```bash
npm start
```

### Paso 5: Acceder al dashboard

Abre un navegador y visita:

```
http://localhost:3000
```

## API Endpoints

### Usuarios

- **GET /api/users**: Retorna el listado de usuarios.
- **GET /api/users/:id**: Retorna el detalle de un usuario.

### Productos

- **GET /api/products**: Retorna el listado de productos.
- **GET /api/products/:id**: Retorna el detalle de un producto.

### Notas adicionales

- **CORS**: Asegúrate de tener configurado correctamente CORS en tu servidor para permitir el acceso desde el front-end en React.
- **React**: El dashboard en React utiliza **Axios** para consumir los datos de las APIs de usuarios y productos.

## Contribuciones

Si deseas contribuir a este proyecto, por favor abre un pull request o crea un issue en el repositorio.

# Sitios de Referencia

Este proyecto toma como inspiración varios sitios de referencia de e-commerce, los cuales son ejemplos de cómo se puede estructurar y diseñar una tienda en línea de manera profesional. A continuación, puedes visitar estos sitios:

1. [Amazon](https://www.amazon.com/-/es/)
2. [Shein](https://us.shein.com/)
3. [eBay](https://www.ebay.com/)
4. [Walmart](https://www.walmart.com/)
5. [Mercado Libre](https://www.mercadolibre.com.pa/#from=homecom)

Cada uno de estos sitios tiene su propio enfoque en cuanto a diseño, usabilidad y estructura de navegación, lo que ofrece una perspectiva amplia para el desarrollo de proyectos de e-commerce.

## Propósito

Estos sitios sirven como guía y fuente de inspiración para mejorar la experiencia de usuario, diseño de interfaz y las mejores prácticas en tiendas online.

### Tablero Digitial

[Padlet](https://padlet.com/vwillians22/kuswe-626cre6ut7bg1da7)

### Autor

Proyecto desarrollado por Vladimir Willians
