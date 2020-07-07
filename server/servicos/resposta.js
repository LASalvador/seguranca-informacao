const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/AppDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
});

function insertQuery(conteudo, autor, cod_comunicado) {

    return db.run('INSERT INTO resposta (conteudo_resposta, autor_resposta, data_resposta, data_resposta_atualizado, cod_comunicado) ' +
        'values ("' + conteudo + '","' + autor + '",DATETIME(),DATETIME(),' + cod_comunicado + ');',
        function (err) {
            if (err) {
                return console.log(err.message);
            }
        });
}

function updateComunicado(cod_comunicado){
    return db.run('UPDATE comunicado SET data_comunicado_atualizado = DATETIME() WHERE cod_comunicado = '+cod_comunicado);
}

module.exports = {
    insertQuery,
    updateComunicado
};