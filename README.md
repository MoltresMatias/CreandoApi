# CreandoApi

Este proyecto es una API RESTful desarrollada en Node.js que implementa autenticación, gestión de usuarios, clientes y módulos relacionados. Utiliza una arquitectura modular para facilitar la escalabilidad y el mantenimiento del código. Incluye manejo de errores, autenticación y conexión a base de datos MySQL.

## Estructura principal

- **src/**: Código fuente principal
  - **auth/**: Lógica de autenticación
  - **db/**: Conexión a la base de datos
  - **middleware/**: Middlewares personalizados
  - **modulos/**: Módulos de negocio (usuarios, clientes, etc.)
  - **red/**: Manejo de respuestas y errores

## Uso

1. Instala las dependencias con `npm install`.
2. Configura la base de datos en `src/db/mysql.js`.
3. Inicia el servidor con `npm start` o `node src/index.js`.

## Autor

MoltresMatias
