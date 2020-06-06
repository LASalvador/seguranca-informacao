const express = require('express');
const cors = require('cors');
const app = express();

const comunicado = require("./routes/comunicado");
const validacao = require("./routes/validacao");
const resposta = require("./routes/resposta");
const login = require("./routes/login");
<<<<<<< HEAD
const email = require("./servicos/email");
=======
const dpo = require("./routes/dpo");
>>>>>>> 7006e580cb7f8bbb1cbf2f0e96eabe53ff64ee45

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

email.enviarEmail('assunto bom', 'corpo da mensagem', 'paulohenrique7010@gmail.com');

app.listen(8020, () =>{
  console.log("Servidor rodando na porta 8020!")
});
