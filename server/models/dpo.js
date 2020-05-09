const servicoDPO = require('../servicos/dpo')

function criar(nome_dpo, email_dpo, senha, desc_dpo, telefone_dpo) {
    const dpo = {
        nome_dpo: nome_dpo,
        email_dpo: email_dpo,
        senha: senha,
        desc_dpo: desc_dpo,
        telefone_dpo: telefone_dpo
    };

    servicoDPO.createDPO(nome_dpo, email_dpo, senha, desc_dpo, telefone_dpo);

    return dpo;
}

async function listar(cod_dpo) {
    return (await servicoDPO.selectDPO(cod_dpo));
}

function alterar(cod_dpo, nome_dpo, email_dpo, senha, desc_dpo, telefone_dpo){
    return servicoDPO.updateDPO(cod_dpo, nome_dpo, email_dpo, senha, desc_dpo, telefone_dpo)
}

async function listarTodosDPO(){
    return (await servicoDPO.selectTodosDPO());
}

function deletar(cod_dpo){
    return servicoDPO.deleteDPO(cod_dpo);
}

module.exports = {
    criar,
    listar,
    alterar,
    deletar,
    listarTodosDPO
};