const fs = require('fs');
const path = require('path');
const config = require('../../config/database.js');
const { comunicado } = require('./comunicado');
const { resposta } = require('./resposta');
const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('../../db/AppDB.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado ao banco.');
});

db.serialize(() => {
  db.all('CREATE TABLE if not EXISTS comunicado( ' +
    'cod_comunicado integer PRIMARY KEY AUTOINCREMENT, ' +
    'data_comunicado DATETIME, ' +
    'responsavel_comunicado varchar(100), ' +
    'email_comunicado varchar(100), '+
    'hash varchar(255), ' +
    'data_comunicado_criado DATETIME, ' +
    'data_comunicado_atualizado DATETIME ' +
    '); ', (err, row) => {
      if (err) {
        console.error(err.message);
      }
    });
});
db.serialize(() => {
  db.all('CREATE TABLE if not EXISTS resposta( ' +
    'cod_resposta INTEGER PRIMARY KEY AUTOINCREMENT, ' +
    'conteudo_resposta TEXT, ' +
    'autor_resposta varchar(100), ' +
    'data_resposta DATETIME,' +
    'data_resposta_criado DATETIME, ' +
    'data_resposta_atualizado DATETIME, ' +
    'cod_comunicado INtEGER NOT NULL, ' +
    'FOREIGN KEY (cod_comunicado) ' +
    'REFERENCES comunicado(cod_comunicado) ); ', (err, row) => {
      if (err) {
        console.error(err.message);
      }
    });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});