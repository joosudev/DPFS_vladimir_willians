Retro.md: Retrospectiva del Proyecto
Resumen del Proyecto
Este proyecto consistió en el desarrollo de un e-commerce completo utilizando las siguientes tecnologías:

Backend: Node.js, Express, Sequelize (con MySQL), y EJS para la creación de vistas dinámicas.
Frontend: Dashboard desarrollado en React para la visualización de datos importantes a través de APIs RESTful.
Gestión de archivos: Multer para el manejo de imágenes de usuario.
Autenticación: Módulos como bcrypt.js y express-session para la gestión de usuarios, autenticación y protección de rutas.
Lo que aprendimos:
1. Arquitectura MVC (Model-View-Controller)
Implementamos el patrón MVC para estructurar el código de manera clara y escalable. Separando la lógica en:

Modelos: Para gestionar la interacción con la base de datos a través de Sequelize.
Controladores: Para manejar la lógica del negocio y los endpoints de las APIs.
Vistas: Utilizando EJS para renderizar las páginas del frontend de manera dinámica.
2. Rutas y APIs RESTful
Creamos una API para usuarios y productos con endpoints como:

/api/users: Devuelve el listado de usuarios.
/api/products: Devuelve el listado de productos.
Implementación de paginación para mejorar el rendimiento en el manejo de grandes cantidades de datos.
3. Manejo de Sesiones y Cookies
Implementamos autenticación y sesiones utilizando express-session, bcrypt para el hash de contraseñas, y protección de rutas para controlar el acceso a ciertas funcionalidades del sitio.

4. Subida de Archivos
Usamos Multer para la gestión de imágenes de perfil de usuario, guardándolas en una carpeta pública y vinculando su acceso desde la base de datos.

5. Desarrollo de un Dashboard en React
En la última etapa del proyecto, desarrollamos un dashboard en React que consume datos de las APIs para mostrar:

Total de productos y usuarios.
Último usuario creado.
Paneles con totales y listados de productos. Usamos axios para consumir las APIs y actualizar el estado en React.
6. Despliegue en Vercel
Finalmente, preparamos el proyecto para ser desplegado en Vercel, configurando correctamente el package.json y el archivo vercel.json para ejecutar en la versión 20.x de Node.js.

Desafíos
Integración del frontend con backend: Lograr que el dashboard en React consuma correctamente los datos de las APIs en el servidor backend.
Manejo de CORS: Fue necesario configurar correctamente CORS para permitir el acceso a las APIs desde diferentes orígenes.
Conclusión
Este proyecto nos permitió abarcar múltiples aspectos de desarrollo web full stack, desde la creación de una API robusta y segura, hasta la integración de un frontend dinámico con React. Además, la organización en MVC nos permitió estructurar el código de forma clara y mantenerlo escalable para futuras mejoras.