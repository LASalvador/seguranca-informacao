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
const express = require("express");
const router = express.Router();
const controller = require('../controllers/')

router.get('/', controller.comunicado.index);

router.post('/', controller.comunicado.criarComunicado);

/*
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
*/

module.exports = router;