const express = require('express');
const app = express();
const path = require("path");
const comunicado = require("./routes/comunicado");
const resposta = require("./routes/reposta")

//Rotas
  app.use('/comunicado', comunicado);
  app.use('/resposta', resposta);

app.get('/', (req, res) => {
  res.send('Salve KKKKKKKKKKKK!');
});



app.listen(8020, () =>{
  console.log("Servidor rodando.")
});

module.exports = app;