# TidyTasks

**TidyTasks** es una aplicación web para gestionar tareas de manera eficiente. Permite a los usuarios registrarse, iniciar sesión, agregar, editar y eliminar tareas, todo con autenticación mediante JWT y una interfaz construida con React.

## Tecnologías usadas

- **Node.js**: v22.14.0
- **Express.js** para el servidor backend
- **MongoDB**: v8.0.8 como base de datos
- **React**: ^19.0.0 para la interfaz de usuario
- **Vite** como bundler para React
- **Tailwind CSS** para los estilos
- **JWT** para autenticación segura

## Estructura del proyecto

TidyTasks/
│
├── client/                   # Frontend en React
│   ├── public/
│   ├── src/
│   │   └── pages/            # Páginas de login, register, tasks, home, profile.
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── README.md
│
├── src/                      # Backend en Node.js
│   ├── controllers/          # Lógica de cada ruta
│   ├── libs/                 # generación de tokens
│   ├── middlewares/          # Validaciones, auth.
│   ├── models/               # Modelos de Mongoose
│   ├── routes/               # Rutas Express
│   ├── schemas/              # Validaciones con Zod
│   ├── app.js                # Configuración del servidor
│   ├── config.js             # Variables de entorno y configuración
│   ├── db.js                 # Conexión a la base de datos
│   └── index.js              # Entrada principal del backend
│
├── .gitignore
├── package.json
└── README.md
