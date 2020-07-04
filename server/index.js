const express = require('express');
const cors = require('cors');
const app = express();

const comunicado = require("./routes/comunicado");
const validacao = require("./routes/validacao");
const resposta = require("./routes/resposta");
const login = require("./routes/login");
const dpo = require("./routes/dpo");
const log = require("./routes/log");
const cripto = require('./servicos/criptografia');
const logao = require('./servicos/logger');


app.use(express.json());

app.use(cors());

//Rotas
app.use('/comunicado', comunicado);
app.use('/resposta', resposta);
app.use('/validar', validacao);
app.use('/login', login);
app.use('/dpo', dpo);

app.get('/', (req, res) => {
  res.send('Rota principal');
});


// logao.sendLog('info', 'TESTE LOGaO');

app.listen(8020, () =>{
  console.log("Servidor rodando na porta 8020!")
});