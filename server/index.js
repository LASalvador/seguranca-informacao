const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Salve KKKKKKKKKKKK!');
});

console.log('Rodando na porta 8020');
app.listen(8020);