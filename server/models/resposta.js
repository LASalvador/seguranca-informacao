const servicoResposta = require('../servicos/resposta')
function criar(conteudo, autor, id_comunicado){
    const resposta = {
        conteudo: conteudo,
        autor: autor,
        id_comunicado: id_comunicado
    };
    
    servicoResposta.insertQuery(conteudo, autor, id_comunicado);
    
    return resposta;
}

module.exports = {criar};