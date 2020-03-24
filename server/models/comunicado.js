const sqlite3 = require('sqlite3').verbose();

// open the database
var db = new sqlite3.Database('db/AppDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
  }
);

// POST
function criar(cod_comunicado, data_comunicado, responsavel_comunicado, email_comunicado, data_comunicado_criado, data_comunicado_atualizado) {
    const comunicado = {
        cod_comunicado: cod_comunicado,
        data_comunicado: data_comunicado,
        responsavel_comunicado: responsavel_comunicado,
        email_comunicado: email_comunicado,
        data_comunicado_criado: data_comunicado_criado,
        data_comunicado_atualizado: data_comunicado_atualizado
    };
    db.run('INSERT INTO comunicado (cod_comunicado, data_comunicado, responsavel_comunicado, email_comunicado, data_comunicado_criado, data_comunicado_atualizado) VALUES ('+cod_comunicado+',"'+data_comunicado+'","'+responsavel_comunicado+'","'+email_comunicado+'","'+data_comunicado_criado+'","'+data_comunicado_atualizado+'")');

    return comunicado;
}

// GET
function listar() {
    db.run('SELECT * FROM comunicado');
}


module.exports = {
    criar,
    listar
}