const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/database.js');
const Comunicado = require('comunicado');
const Resposta = require('resposta');

const db = {};
const sequelize = new Sequelize(config);

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//CRIANDO TESTE COMUNICADO
Comunicado.create({responsavel_comunicado: 'Teste1',
                  email_comunicado: 'teste@gmail.com',
                  data_comunicado: '2020-01-22',
                  data_criado: '2020-01-20',
                  data_atualizado: '2020-01-30'});


//CRIANDO TESTE RESPOSTA
Resposta.create({conteudo_resposta: 'Teste2',
                autor_resposta: 'tester2',
                data_criado: '2019-08-11',
                data_atualizado: '2020-01-01'});

module.exports = db;