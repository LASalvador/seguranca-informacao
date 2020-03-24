const servicoResposta = require('../servicos/resposta');

function insert(conteudo, autor, id_comunicado){
    const insertResposta = servicoRespsota.insertQuery(conteudo, autor, id_comunicado);
    return insertResposta;
}

function select (){
    return servicoResposta.selectQuery();
 }

module.exports = {insert, select};