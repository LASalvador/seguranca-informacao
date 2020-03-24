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

app.listen(8010, () =>{
  console.log("Servidor rodando.")
});
