const sqlite3 = require('sqlite3').verbose();
const selectPromise = require('../servicos/select');
const servicoDPO = require('../servicos/dpo');
const jwt = require('jsonwebtoken');
const authConfig = require('./config/auth.json');

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

async function login(email, senha){
    try{
        let currentDPO = await selectPromise('select * from dpo where email_dpo = "'+email+'" and senha = "'+senha+'"');

        if (currentDPO) {
            const token = jwt.sign({
                id_user: currentDPO[0].cod_dpo,
                email: currentDPO[0].email_dpo
            }, authConfig.secret, {
                expiresIn: "1h"
            });
            return token;
        }
    } catch(err){
        console.log(err);
        return false;
    }

    

}

module.exports = {
    criar,
    listar,
    alterar,
    deletar,
    listarTodosDPO,
    login
};