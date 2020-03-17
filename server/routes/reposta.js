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

let db = new sqlite3.Database('db/AppDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Conectado ao banco.');
  });


router.post("/", (req, res) =>{
    let conteudo        = req.body.conteudo;
    let autor           = req.body.autor;
    let idComunicado    = req.body.id_comunicado;


    res.send('conteudo: '+conteudo+"\n"+
             "autor: "+autor+"\n"+
             "cod comunicado: "+idComunicado);
    db.run('INSERT INTO resposta (conteudo_resposta, autor_resposta, data_criado, data_atualizado, cod_comunicado) '+
           'values ("'+conteudo+'","'+autor+'",DATETIME(),DATETIME(),'+idComunicado+');', function(err) {
               if (err) {
                 return console.log(err.message);
               } 
               else{
                   return console.log("gravou a resposta");
               }
        
    });
    
    
    
             

    //res.send('Página de repostas.');
})


module.exports = router;