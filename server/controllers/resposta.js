const modelResposta = require('../models/resposta');
const cripto = require('../servicos/criptografia');


function criar(req, res) {
    var { conteudo, autor, cod_comunicado, hash_comunicado } = req.body;

    conteudo = cripto.criptografar(conteudo, hash_comunicado);
    

    const resposta = modelResposta.criar(conteudo, autor, cod_comunicado, hash_comunicado);

    modelResposta.updateTableComunicado(cod_comunicado);
    
    res.status(200).json({ resposta: resposta });
}

module.exports = {
    criar,
};