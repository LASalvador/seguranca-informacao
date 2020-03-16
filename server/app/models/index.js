const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/database.js');
const { comunicado } = require('./comunicado');
const { resposta } = require('./resposta');
/* const db = {};
 */const sequelize = new Sequelize(config);

/* fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
}); */

/* db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db; */

const sqlite3 = require('sqlite3').verbose();
 
// open the database
let db = new sqlite3.Database('../../db/AppDB.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado ao banco.');
});

db.serialize(() => {
    db.run('CREATE TABLE if not EXISTS comunicado( '+
    'cod_comunicado integer PRIMARY KEY AUTOINCREMENT, '+
    'data_comunicado DATETIME, '+
    'responsavel_comunicado varchar(100), '+
    'email_comunicado varchar(100), '+
    'data_criado DATETIME, '+
    'data_atualizado DATETIME '+
  '); '+
  
  'CREATE TABLE if not EXISTS resposta( '+
    'cod_resposta INTEGER PRIMARY KEY AUTOINCREMENT, '+
    'conteudo_resposta TEXT, '+
    'autor_resposta varchar(100), '+
    'data_criado DATETIME, '+
    'data_atualizado DATETIME '+
  '); ', (err, row) => {
      if (err) {
        console.error(err.message);
      }
      //console.log(row.nome_usuario + "\t");
    });
  });
 

 /* 
db.serialize(() => {
  db.each(`SELECT u.cod_comunicado
           FROM comunicado u`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.cod_comunicado + "\t");
  });
});*/
 
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});