const express = require('express');
const app = express();

const comunicado = require("./routes/comunicado");
const resposta = require("./routes/reposta")
const bodyParser = require('body-parser')

app.use(express.json());

//Rotas
app.use('/comunicado', comunicado.route);
app.use('/resposta', resposta.router);

app.get('/', (req, res) => {
  res.send('Salve KKKKKKKKKKKK!');
});

<<<<<<< HEAD
app.listen(8010, () =>{
  console.log("Servidor rodando.")
=======


app.listen(8020, () =>{
  console.log("Servidor rodando na porta 8020!")
>>>>>>> a260d3b0a3baa5ca40a21620cb74d955ea4b0c8b
});
