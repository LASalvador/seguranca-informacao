const express = require("express");
const router = express.Router();
const controller = require('../controllers/')

router.get('/:cod_dpo', controller.dpo.index);
router.get('/', controller.dpo.retornarTodosDPO);

router.post('/', controller.dpo.criarDPO);

module.exports = router;