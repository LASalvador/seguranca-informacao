const selectPromise = require('./select');


async function selectDPO(cod_dpo) {
  var resposta  = await selectPromise('SELECT d.cod_dpo, '+
  'd.nome_dpo, '+
  'd.email_dpo, '+
  'd.senha, '+
  'd.desc_dpo, '+
  'telefone_dpo, '+
  'd.data_criado, '+
  'd.data_atualizado '+
  'from dpo d '+
  'where d.cod_dpo = '+cod_dpo+';');
    return resposta;
  }

  async function selectTodosDPO(){
    var resposta  = await selectPromise('SELECT d.cod_dpo, '+
        'd.nome_dpo, '+
        'd.email_dpo, '+
        'd.senha, '+
        'd.desc_dpo, '+
        'telefone_dpo, '+
        'd.data_criado, '+
        'd.data_atualizado '+
        'from dpo d '+
        'order by d.cod_dpo ');
    return resposta;
  }

module.exports = {
    selectDPO, 
    selectTodosDPO
};