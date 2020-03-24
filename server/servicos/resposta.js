const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/AppDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
});

function insertQuery(conteudo, autor, id_comunicado) {
    return db.run('INSERT INTO resposta (conteudo_resposta, autor_resposta, data_resposta, data_resposta_atualizado, cod_comunicado) ' +
        'values ("' + conteudo + '","' + autor + '",DATETIME(),DATETIME(),' + id_comunicado + ');',
        function (err) {
            if (err) {
                return console.log(err.message);
            }
        });

}

function selectQuery(){
    
    db.all("SELECT * FROM resposta;",
        function(err, result, fields){
            if(err){
                return console.log(err.message);
            }
            return result;
    });

    return a;
}

module.exports = {
    insertQuery,
    selectQuery
};