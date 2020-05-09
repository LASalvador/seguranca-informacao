const sqlite3 = require('sqlite3').verbose();
const servicoDPO = require('../servicos/dpo')
const db = new sqlite3.Database('db/AppDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
});

function criar(nome_dpo, email_dpo, senha, desc_dpo, telefone_dpo) {
    const dpo = {
        nome_dpo: nome_dpo,
        email_dpo: email_dpo,
        senha: senha,
        desc_dpo: desc_dpo,
        telefone_dpo: telefone_dpo
    };
    console.log(nome_dpo+'-'+email_dpo+'-'+senha+'-'+desc_dpo+'-'+telefone_dpo);
    db.run('INSERT INTO dpo (nome_dpo, email_dpo, senha, desc_dpo, telefone_dpo) '+
    'VALUES ("'+nome_dpo+'","'+email_dpo+'","'+senha+'","'+desc_dpo+'","'+telefone_dpo+'"');
    return dpo;
}

async function listar(cod_dpo) {
    return (await servicoDPO.selectDPO(cod_dpo));
}

async function listarTodosDPO(){
    return (await servicoDPO.selectTodosDPO());
}

module.exports = {
    criar,
    listar,
    listarTodosDPO
};