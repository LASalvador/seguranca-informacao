const sqlite3 = require('sqlite3').verbose();
const selectPromise = require('../servicos/select');
const servicoComunicado = require('../servicos/comunicado');
const dataService = require('../servicos/data');
const db = new sqlite3.Database('db/AppDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
});

function criar(responsavel_comunicado, email_comunicado, hash_comunicado, cod_dpo) {
    const data_atual = dataService()
    const comunicado = {
        data_comunicado: data_atual,
        responsavel_comunicado: responsavel_comunicado,
        email_comunicado: email_comunicado,
        data_comunicado_criado: data_atual,
        data_comunicado_atualizado: data_atual,
        hash_comunicado: hash_comunicado,
        cod_dpo: cod_dpo
    };
    db.run('INSERT INTO comunicado (data_comunicado, responsavel_comunicado, email_comunicado, data_comunicado_criado, data_comunicado_atualizado, hash_comunicado, cod_dpo) VALUES ("'+data_atual+'","'+responsavel_comunicado+'","'+email_comunicado+'","'+data_atual+'","'+data_atual+'","'+hash_comunicado+'", "'+ cod_dpo +'")');
    return comunicado;
}

async function listar(cod_comunicado) {
    return (await servicoComunicado.selectComunicado(cod_comunicado));
}

async function listarTodosComunicado(){
    return (await servicoComunicado.selectTodosComunicado());
}

async function validarComunicado(token, id_comunicado){
    tableHash = await selectPromise('select hash_comunicado from comunicado where cod_comunicado = '+id_comunicado);
    hash = tableHash[0].hash_comunicado;
    if (token == hash)
        return true;
        
    return false;
}

module.exports = {
    criar,
    listar,
    listarTodosComunicado,
    validarComunicado
};