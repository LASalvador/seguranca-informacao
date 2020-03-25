/*
    POST /resposta
        body [conteudo, autor, id_comunicado]
    GET /comunicado/id
        res 200
        dados do comunicado +
        respostas do comunicado
*/
const express = require("express");
const router = express.Router();
const controller = require('../controllers/');

router.post('/', controller.resposta.criar);

module.exports = router;