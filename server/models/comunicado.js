const sqlite3 = require('sqlite3').verbose();
const selectPromise = require('../servicos/select');
const insertPromise = require('../servicos/insert');
const servicoComunicado = require('../servicos/comunicado');
const dataService = require('../servicos/data');
const logService = require('../servicos/logger');

const db = new sqlite3.Database('db/AppDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
});

async function criar(responsavel_comunicado, email_comunicado, hash_comunicado, cod_dpo) {
    const data_atual = dataService()

    await insertPromise('INSERT INTO comunicado (data_comunicado, responsavel_comunicado, email_comunicado, data_comunicado_criado, data_comunicado_atualizado, hash_comunicado, cod_dpo) VALUES ("'+data_atual+'","'+responsavel_comunicado+'","'+email_comunicado+'","'+data_atual+'","'+data_atual+'","'+hash_comunicado+'", "'+ cod_dpo +'")');
    
    const [result] = await selectPromise('SELECT cod_comunicado from comunicado order by 1 desc limit 1');

    const comunicado = {
        cod_comunicado: result.cod_comunicado,
        data_comunicado: data_atual,
        responsavel_comunicado: responsavel_comunicado,
        email_comunicado: email_comunicado,
        data_comunicado_criado: data_atual,
        data_comunicado_atualizado: data_atual,
        hash_comunicado: hash_comunicado,
        cod_dpo: cod_dpo
    };

    logService.sendLog('info', 'log comunicado criado!',
     comunicado.hash_comunicado, comunicado.cod_comunicado);

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