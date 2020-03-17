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
    console.log('Conectado ao banco.');
  });

  router.get("/id/:id", (req, res) =>{
    let codComunicado = req.params.id;
    //http://localhost:8020/comunicado/id/3


    db.all('select r.cod_resposta, '+
                  'r.conteudo_resposta, '+
                  'r.autor_resposta, '+
                  'r.data_criado, '+
                  'r.data_atualizado, '+
                  'c.data_comunicado, '+
                  'c.responsavel_comunicado, '+
                  'c.email_comunicado, '+
                  'c.data_criado, '+
                  'c.data_atualizado '+
                  'FROM resposta r  '+
                  'LEFT JOIN comunicado c on c.cod_comunicado = r.cod_comunicado '+
                  'WHERE r.cod_comunicado = '+codComunicado, (err, row) => {
        if (err) {
          console.error(err.message);
        }
        var resposta = [];
        row.forEach((row) => {
          resposta.push({ username: row.autor_resposta });
        });
        res.json(resposta);
        //console.log(row.autor_resposta + "\t");
      });

    






    //precisa retornar os dados do comunicado mais as respostas
  });


router.post("/", (req, res) => {
    let responsavel = req.body.responsavel;
    let email       = req.body.email;

    res.send("Responsavel: "+responsavel+"\n"+
             "Email: "+email);

    db.run('INSERT INTO comunicado (data_comunicado, responsavel_comunicado, email_comunicado, data_criado, data_atualizado) '+
    'values (DATETIME(),"'+responsavel+'","'+email+'",DATETIME(),DATETIME());', function(err) {
      //console.log(this.lastId)
      if (err) {
        return console.log(err.message);
      }
      else{
        return console.log("gravou");
      }

      /*//pega o ultimo ID
      db.each('SELECT c.cod_comunicado '+
      'FROM comunicado c '+
      'ORDER BY c.cod_comunicado desc limit 1', (err, row) => {
        if (err) {
          console.error(err.message);
        }
        console.log(row.cod_comunicado + "\t");
      });*/
    });
  });

  module.exports = router;
              
/*
             db.serialize(() => {
                db.run('INSERT INTO comunicado (data_comunicado, responsavel_comunicado, email_comunicado, data_criado, data_atualizado) '+
                'values (DATETIME(),"'+responsavel+'","'+email+'",DATETIME(),DATETIME());',['C'], function(err){
                    if (err){
                        return console.log(err.message);
                    }
                  console.log('A row has been inserted with rowid '+this.lastID);
                  //console.log(row.nome_usuario + "\t");
                });
              });*/

    //acho que tem que retornar o cod do comunicado