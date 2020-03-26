const modelComunicado = require('../models/comunicado');

async function index(req, res) {
    const cod_comunicado = req.params.cod_comunicado;
    const lista_comunicados = await modelComunicado.listar(cod_comunicado);
    res.json({lista_comunicados: lista_comunicados});
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
    res.json({comunicado: comunicado});
}

module.exports = {
    index,
    criarComunicado
}