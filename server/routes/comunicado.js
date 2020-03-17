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

var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))

/*router.get("/", (req, res) =>{
    res.send('Página de comunicados.');
})*/


// open the database
let db = new sqlite3.Database('db/AppDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  router.get("/:id", (req, res) =>{
    let codComunicado = req.params.id;

    db.all('select r.cod_resposta, '+
                  'r.conteudo_resposta, '+
                  'r.autor_resposta, '+
                  'r.data_resposta_criado, '+
                  'r.data_resposta_atualizado, '+
                  'c.data_comunicado, '+
                  'c.responsavel_comunicado, '+
                  'c.email_comunicado, '+
                  'c.data_comunicado_criado, '+
                  'c.data_comunicado_atualizado '+
                  'FROM resposta r  '+
                  'LEFT JOIN comunicado c on c.cod_comunicado = r.cod_comunicado '+
                  'WHERE r.cod_comunicado = '+codComunicado, (err, row) => {
        if (err) {
          console.error(err.message);
        }
        var resposta = [];
        row.forEach((row) => {
          resposta.push({ autor_resposta: row.autor_resposta,
                          conteudo_resposta: row.conteudo_resposta,
                          responsavel_comunicado: row.responsavel_comunicado,
                          email_comunucado: row.email_comunucado,
                          data_comunicado: row.data_comunicado
                        });
        });

        res.json(resposta);
      
      });
  });

router.post("/", (req, res) => {
    let responsavel = req.body.responsavel;
    let email = req.body.email;
    let dataComunicado =  req.body.dataComunicado;

    res.send("Responsavel: "+responsavel+"\n"+
             "Email: "+email );

    db.run('INSERT INTO comunicado '+
    '(data_comunicado, responsavel_comunicado, email_comunicado, data_comunicado_criado, data_comunicado_atualizado) '+
    'values (DATETIME(),"'+responsavel+'","'+email+'",DATETIME(),DATETIME());', function(err) {
      //console.log(this.lastId)
      if (err) {
        return console.log(err.message);
      }
      else{
        return console.log("gravou");
      }
    });
  });

  module.exports = router;