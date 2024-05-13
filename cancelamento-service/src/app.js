const express = require('express');
const app = express();
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swaggerConfig');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(express.json());
app.use('/reservas', routes); 

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Serviço de Cancelamento rodando na porta ${PORT}`);
});
