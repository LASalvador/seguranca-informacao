const sqlite3 = require('sqlite3').verbose();
const servicoComunicado = require('../servicos/comunicado')
const db = new sqlite3.Database('db/AppDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
});

function criar(cod_comunicado, data_comunicado, responsavel_comunicado, email_comunicado, data_comunicado_criado, data_comunicado_atualizado, hash_comunicado) {
    const comunicado = {
        cod_comunicado: cod_comunicado,
        data_comunicado: data_comunicado,
        responsavel_comunicado: responsavel_comunicado,
        email_comunicado: email_comunicado,
        data_comunicado_criado: data_comunicado_criado,
        data_comunicado_atualizado: data_comunicado_atualizado,
        hash_comunicado: hash_comunicado
    };
    db.run('INSERT INTO comunicado (cod_comunicado, data_comunicado, responsavel_comunicado, email_comunicado, data_comunicado_criado, data_comunicado_atualizado, hash_comunicado) VALUES ('+cod_comunicado+',"'+data_comunicado+'","'+responsavel_comunicado+'","'+email_comunicado+'","'+data_comunicado_criado+'","'+data_comunicado_atualizado+'","'+hash_comunicado+'")');
    return comunicado;
}

async function listar(cod_comunicado) {
    return (await servicoComunicado.selectComunicado(cod_comunicado));
}

module.exports = {
    criar,
    listar
};