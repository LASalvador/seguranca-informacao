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
    db.all('CREATE TABLE if not EXISTS comunicado( '+
    'cod_comunicado integer PRIMARY KEY AUTOINCREMENT, '+
    'data_comunicado DATETIME, '+
    'responsavel_comunicado varchar(100), '+
    'email_comunicado varchar(100), '+
    'data_criado DATETIME, '+
    'data_atualizado DATETIME '+
  '); ', (err, row) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(row.nome_usuario + "\t");
  });
});
db.serialize(() => {
  
  db.all('CREATE TABLE if not EXISTS resposta( '+
    'cod_resposta INTEGER PRIMARY KEY AUTOINCREMENT, '+
    'conteudo_resposta TEXT, '+
    'autor_resposta varchar(100), '+
    'data_criado DATETIME, '+
    'data_atualizado DATETIME, '+
    'cod_comunicado INtEGER NOT NULL, '+
    'FOREIGN KEY (cod_comunicado) '+
     'REFERENCES comunicado(cod_comunicado) ); ', (err, row) => {
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