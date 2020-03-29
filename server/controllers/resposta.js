const modelResposta = require('../models/resposta');

function criar(req, res) {
    const { conteudo, autor, cod_comunicado } = req.body;
    
    const resposta = modelResposta.criar(conteudo, autor, cod_comunicado);

    modelResposta.updateTableComunicado(cod_comunicado);
    
    res.status(200).json({ resposta: resposta });
}

module.exports = {
    criar,
};