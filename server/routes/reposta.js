/*
    POST /resposta
        body [conteudo, autor, id_comunicado]
    GET /comunicado/id
        res 200
        dados do comunicado +
        respostas do comunicado
*/
const config = require('../config/database.js');
const express = require("express");
const router = express.Router();
const controllerResposta = require('../controller/resposta');

router.post('/', controllerResposta.insert);

router.get('/', controllerResposta.index);


module.exports = router