const swaggerJsdoc = require('swagger-jsdoc');
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Busca Hotel API',
            version: '1.0.0',
            description: 'API para buscar hoteis com os dados manipulados na memória.'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server'
            },
        ],
    },
    apis: ['./src/routes.js'],
};

const specs = swaggerJsdoc(options);
module.exports = specs;
