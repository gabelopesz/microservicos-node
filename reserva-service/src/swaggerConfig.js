const swaggerJsdoc = require('swagger-jsdoc');


const options = {
    definition: {
        openapi: '3.0.0',  
        info: {
            title: 'API de Reservas',  
            version: '1.0.0',  
            description: 'API para gerenciamento de reservas de hotel.',  
        },
        servers: [
            {
                url: 'http://localhost:3001', 
                description: 'Servidor de Desenvolvimento'
            },
        
        ],
    },

    apis: ['./src/routes.js'],  
};

const specs = swaggerJsdoc(options);
module.exports = specs;
