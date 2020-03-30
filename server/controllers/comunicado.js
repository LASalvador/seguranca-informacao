const modelComunicado = require('../models/comunicado');

async function index(req, res) {
    const cod_comunicado = req.params.cod_comunicado;
    const comunicados = await modelComunicado.listar(cod_comunicado);
    
    var lista_comunicados = {};

    lista_comunicados.responsavel_comunicado = comunicados[0].responsavel_comunicado
    lista_comunicados.email_comunicado = comunicados[0].email_comunicado
    lista_comunicados.hash_comunicado = comunicados[0].hash_comunicado
    lista_comunicados.respostas = []

    comunicados.forEach(resposta => {
        lista_comunicados.respostas.push({
            author: resposta.autor_resposta,
            conteudo: resposta.conteudo_resposta,
            data: resposta.data_resposta
        })
    });

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