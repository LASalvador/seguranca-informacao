const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Salve KKKKKKKKKKKK!');
});

app.listen(8020);