const express = require('express');
const cors = require('cors');
const app = express();

const comunicado = require("./routes/comunicado");
const resposta = require("./routes/resposta");
const dpo = require("./routes/dpo");
app.use(cors());
app.use(express.json());

//Rotas
app.use('/comunicado', comunicado);
app.use('/resposta', resposta);
app.use('/dpo',dpo);

app.get('/', (req, res) => {
  res.send('Rota principal');
});

app.listen(8020, () =>{
  console.log("Servidor rodando na porta 8020!")
});
