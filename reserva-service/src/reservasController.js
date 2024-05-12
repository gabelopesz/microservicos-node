let reservations = []; // Armazenamento em memória

exports.criarReserva = (req, res) => {
    const { usuarioId, quartoId, dataInicio, dataFim } = req.body;
    const reservaId = reservations.length + 1;
    reservations.push({ reservaId, usuarioId, quartoId, dataInicio, dataFim });
    res.status(201).send({ sucesso: true, mensagem: 'Reserva criada com sucesso.', reservaId });
};

exports.listarReserva = (req, res) => {
    res.status(200).send(reservations);
};

exports.getReserva= (req, res) => {
    const reserva = reservations.find(r => r.reservaId === parseInt(req.params.id));
    if (reserva) {
        res.status(200).send(reserva);
    } else {
        res.status(404).send({ sucesso: false, mensagem: 'Reserva não encontrada.' });
    }
};

exports.deletarReserva = (req, res) => {
    const { id } = req.params;
    const index = reservations.findIndex(r => r.reservaId === parseInt(id));
    if (index !== -1) {
        reservations.splice(index, 1); 
        res.status(200).send({ sucesso: true, mensagem: 'Reserva deletada com sucesso.' });
    } else {
        res.status(404).send({ sucesso: false, mensagem: 'Reserva não encontrada.' });
    }
};

