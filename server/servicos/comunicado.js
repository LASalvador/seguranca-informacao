const selectPromise = require('./select');


async function selectComunicado(cod_comunicado) {
  var resposta  = await selectPromise('SELECT r.cod_resposta, ' +
                         'r.conteudo_resposta, ' +
                         'r.autor_resposta, ' +
                         'r.data_resposta_criado, ' +
                         'r.data_resposta_atualizado, ' +
                         'c.data_comunicado, ' +
                         'c.responsavel_comunicado, ' +
                         'c.email_comunicado, ' +
                         'c.data_comunicado_criado, ' +
                         'c.data_comunicado_atualizado, '+
                         'c.hash_comunicado ' +
                  'FROM resposta r  ' +
                  'LEFT JOIN comunicado c on c.cod_comunicado = r.cod_comunicado ' +
                  'WHERE r.cod_comunicado = ' +cod_comunicado);
    return resposta;
  }

  async function selectTodosComunicado(){
    var resposta = await selectPromise('SELECT c.cod_comunicado, '+
            'c.responsavel_comunicado, '+
            'c.data_comunicado_atualizado as data_atualizacao '+
            'FROM comunicado c '+
            'ORDER BY c.data_comunicado_atualizado, c.cod_comunicado ');
    return resposta;
  }

module.exports = {
    selectComunicado, 
    selectTodosComunicado
};