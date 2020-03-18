/*
    POST /comunicado
        body [responsavel, email]
        res 200
        id_comunicado
    POST /resposta
        body [conteudo, autor, id_comunicado]
    GET /comunicado/id
        res 200
        dados do comunicado +
        respostas do comunicado
*/
const config = require('../config/database.js');
const sqlite3 = require('sqlite3').verbose();
const express = require("express");
const router = express.Router();

// open the database
let db = new sqlite3.Database('db/AppDB.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
});

router.get("/:id", (req, res) => {
  let codComunicado = req.params.id;
  db.all('select c.cod_comunicado, ' +
    'c.responsavel_comunicado, ' +
    'c.email_comunicado,' +
    'r.autor_resposta, ' +
    'r.conteudo_resposta, ' +
    'r.data_resposta ' +
    'from comunicado as c  ' +
    'LEFT JOIN resposta r  on r.cod_comunicado = c.cod_comunicado ' +
    'where c.cod_comunicado = ' + codComunicado, (err, rows) => {
      if (err) {
        console.error(err.message);
      }
      var resposta = {};
      resposta.codComunicado = rows[0].cod_comunicado;
      resposta.responsavel = rows[0].responsavel_comunicado;
      resposta.email = rows[0].email_comunicado;
      resposta.conversas = []
      rows.forEach((row) => {
        resposta.conversas.push({
          author: row.autor_resposta,
          content: row.conteudo_resposta,
          date: row.data_resposta,
        })
      });

      res.status(200).json(resposta);
    });
});

router.post("/", (req, res) => {
  let responsavel = req.body.responsavel;
  let email = req.body.email;
  
  db.run('INSERT INTO comunicado ' +
  '(data_comunicado, responsavel_comunicado, email_comunicado, data_comunicado_criado, data_comunicado_atualizado) ' +
  'values (DATETIME(),"' + responsavel + '","' + email + '",DATETIME(),DATETIME());',
  function (err) {
    //console.log(this.lastId)
      if (err) {
        return console.log(err.message);
      }
    });

  res.status(200).json({responsavel: responsavel, email: email});
});

module.exports = router;