const sqlite3 = require('sqlite3').verbose();
const modelResposta = require('../models/resposta');
const servicoResposta = require('../servicos/resposta');

function insert(req, res) {
    const { conteudo, autor, id_comunicado } = req.body;
    const insertResposta = modelResposta.insert(conteudo, autor, id_comunicado)
    res.json({
        insertResposta: insertResposta
    });
}

function index(req, res) {
    let listaResposta = servicoResposta.selectQuery();
    
    return res.json({listaResposta:listaResposta});
}

module.exports = {
    insert,
    index
};