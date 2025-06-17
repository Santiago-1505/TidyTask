// config/swaggerConfig.js
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'TidyTask API',
            version: '1.0.0',
            description: 'Documentación de la API de TidyTask',
        },
        servers: [
            {
                url: 'http://localhost:3000', // Cambia esto según tu entorno
            },
        ],
    },
    apis: ['./src/routes/*.js'], // rutas documentadas con Swagger
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
