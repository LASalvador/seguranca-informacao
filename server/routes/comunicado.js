const express = require("express");
const router = express.Router();
const controller = require('../controllers/')

router.get('/:cod_comunicado', controller.comunicado.index);

router.post('/', controller.comunicado.criarComunicado);

module.exports = router;


/*
    POST /comunicado
        body [responsavel, email]
        res 200
        id_comunicado
        
    GET /comunicado/id
        res 200
        dados do comunicado +
        respostas do comunicado
*/