const express = require('express');

const app = express();

/* const { comunicado } = require('./app/models/comunicado');
const { resposta } = require('./app/models/resposta');


//CRIANDO TESTE COMUNICADO
comunicado.create ({responsavel_comunicado: 'Teste1',
                  email_comunicado: 'teste@gmail.com',
                  data_comunicado: '2020-01-22',
                  data_criado: '2020-01-20',
                  data_atualizado: '2020-01-30'});

//CRIANDO TESTE RESPOSTA
resposta.create({conteudo_resposta: 'Teste2',
                autor_resposta: 'tester2',
                data_criado: '2019-08-11',
                data_atualizado: '2020-01-01'}); */


app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Salve KKKKKKKKKKKK!');
});

console.log('Rodando na porta 8020');
app.listen(8020);