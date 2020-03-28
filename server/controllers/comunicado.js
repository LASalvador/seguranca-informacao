const modelComunicado = require('../models/comunicado');

async function index(req, res) {
    const cod_comunicado = req.params.cod_comunicado;
    const lista_comunicados = await modelComunicado.listar(cod_comunicado);
    res.json({lista_comunicados: lista_comunicados});
}

async function retornarTodosComunicados(req, res){
    const retorno = await modelComunicado.listarTodosComunicado();
    res.json({retorno:retorno});
}

function criarComunicado(req, res) {
    const {
        cod_comunicado,
        data_comunicado,
        responsavel_comunicado,
        email_comunicado,
        data_comunicado_criado,
        data_comunicado_atualizado,
        hash_comunicado
    } = req.body;
    const comunicado = modelComunicado.criar(
        cod_comunicado,
        data_comunicado,
        responsavel_comunicado,
        email_comunicado,
        data_comunicado_criado,
        data_comunicado_atualizado,
        hash_comunicado
    );
    res.json({comunicado: comunicado});
}

module.exports = {
    index,
    criarComunicado,
    retornarTodosComunicados
}