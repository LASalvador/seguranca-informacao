const modelResposta = require('../models/resposta');

function criar(req, res) {
    const { conteudo, autor, id_comunicado } = req.body;
    const resposta = modelResposta.criar(conteudo, autor, id_comunicado)
    res.status(200).json({ resposta: resposta });
}

module.exports = {
    criar
};