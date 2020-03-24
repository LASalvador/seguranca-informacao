const express = require('express');
const app = express();

const comunicado = require("./routes/comunicado");
const resposta = require("./routes/reposta")

app.use(express.json());

//Rotas
app.use('/comunicado', comunicado);
//app.use('/resposta', resposta.router);

app.get('/', (req, res) => {
  res.send('Salve KKKKKKKKKKKK!');
});

app.listen(8020, () =>{
  console.log("Servidor rodando na porta 8020!")
});
