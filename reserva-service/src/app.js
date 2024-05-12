const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/reservas', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serviço de Reservas rodando na porta ${PORT}`);
});
