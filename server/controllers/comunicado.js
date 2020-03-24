const modelComunicado = require('../models/comunicado');

function index(req, res) {
    const lista_comunicados = modelComunicado.listar();
    res.json({
        lista_comunicados: lista_comunicados
    });
}

function criarComunicado(req, res) {
    const {
        cod_comunicado,
        data_comunicado,
        responsavel_comunicado,
        email_comunicado,
        data_comunicado_criado,
        data_comunicado_atualizado 
    } = req.body;
    const comunicado = modelComunicado.criar(
        cod_comunicado,
        data_comunicado,
        responsavel_comunicado,
        email_comunicado,
        data_comunicado_criado,
        data_comunicado_atualizado
    );
    res.json({
        comunicado: comunicado
    });
}

module.exports = {
    index,
    criarComunicado
}