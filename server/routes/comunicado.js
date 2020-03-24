const express = require("express");
const router = express.Router();
const controller = require('../controllers/')

// FAZER ISSO PORPS, DEIXEI MEIO PRONTO JÁ
router.get('/', controller.comunicado.index);

router.post('/', controller.comunicado.criarComunicado);

module.exports = router;


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