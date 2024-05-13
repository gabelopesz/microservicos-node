const path = require('path');

// Mock de dados dos hotéis
const hoteis = [
    { nome: 'Hotel Alphavile', disponibilidade: true, cidade: 'Quirinopolis' },
    { nome: 'Hotel Belo', disponibilidade: true, cidade: 'Rio Verde' },
    { nome: 'Hotel Citrus', disponibilidade: false, cidade: 'Tangamandapio' },
    { nome: 'Hotel Maravilha', disponibilidade: true, cidade: 'Quirinopolis' }
];

exports.buscarHoteis = (req, res) => {
    const { data, localizacao } = req.query;

    const hoje = new Date();
    const dataSelecionada = new Date(data);
    if (dataSelecionada < hoje) {
        return res.status(400).send('Por favor, selecione uma data igual ou posterior ao dia atual.');
    }


    const hoteisDisponiveis = hoteis.filter(hotel => hotel.disponibilidade && hotel.cidade === localizacao);

    
    res.json(hoteisDisponiveis);
};

exports.listaCidades = (req, res) => {
  
    const cidadesUnicas = [...new Set(hoteis.map(hotel => hotel.cidade))];

    res.json(cidadesUnicas);
};

exports.disponibilidadePorLocalizacao = (req, res) => {
    const { localizacao } = req.query;


    const hoteisNaLocalizacao = hoteis.filter(hotel => hotel.cidade === localizacao);
    const todosDisponiveis = hoteisNaLocalizacao.every(hotel => hotel.disponibilidade);
    const algumDisponivel = hoteisNaLocalizacao.some(hotel => hotel.disponibilidade);

    let estadoDisponibilidade = 'Indisponível';
    if (todosDisponiveis) {
        estadoDisponibilidade = 'Disponível';
    } else if (algumDisponivel) {
        estadoDisponibilidade = 'Parcialmente disponível';
    }

    res.json({ disponibilidade: estadoDisponibilidade });
};
