const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Serviço de Cancelamento de Reservas',
            version: '1.0.0',
            description: 'API para cancelamento de reservas de hotel',
        },
        servers: [
            {
                url: 'http://localhost:3002',
                description: 'Servidor de Desenvolvimento'
            },
        ],
    },
    apis: ['./src/routes.js'], 
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
