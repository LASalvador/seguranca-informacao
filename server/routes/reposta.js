/*
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
const controllerResposta = require('../controller/resposta');
const servicoResposta = require('../servicos/resposta');

router.post('/', controllerResposta.insert);

router.get('/', controllerResposta.index);


module.exports = 
  {
    router
  };