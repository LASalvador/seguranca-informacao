const selectPromise = require('./select');


async function selectComunicado(cod_comunicado) {
  var resposta  = await selectPromise('SELECT c.responsavel_comunicado, ' +
  'c.email_comunicado, ' + 
  'c.hash_comunicado, ' + 
  'r.conteudo_resposta, ' + 
  'r.autor_resposta, '+  
  'r.data_resposta ' + 
  'from comunicado c ' + 
  'INNER JOIN resposta r on c.cod_comunicado = r.cod_comunicado ' + 
  'where c.cod_comunicado = 1;');
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