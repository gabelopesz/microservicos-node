const axios = require('axios');
const URL_RESERVAS_SERVICE = 'http://localhost:3000/reservas';

exports.cancelarReserva = async (req, res) => {
    const { id } = req.params;

    try {
       
        await axios.delete(`${URL_RESERVAS_SERVICE}/${id}`);
        
        res.status(200).send({ sucesso: true, mensagem: 'Reserva deletada com sucesso.' });
    } catch (error) {
        if (error.response && error.response.status === 404) {
            res.status(404).send({ sucesso: false, mensagem: 'Reserva não encontrada.' });
        } else {
            res.status(500).send({ sucesso: false, mensagem: 'Erro ao acessar o serviço de reservas.', erro: error.message });
        }
    }
};
