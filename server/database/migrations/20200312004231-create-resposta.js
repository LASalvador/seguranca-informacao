'use strict';
module.exports = {
  /* cod_resposta INTEGER PRIMARY KEY AUTOINCREMENT,
  conteudo_resposta TEXT,
  autor_resposta varchar(100),
  data_criado DATETIME,
  data_atualizado DATETIME */

  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Resposta', {
      id_resposta: {
        allowNull: false,
        auto_increment: true,
        primaryKey: true,
        type: DataType.INTEGER,
      },

      conteudo_resposta: {
        allowNull: false,
        type: Sequelize.String(100),
      },

      autor_resposta: {
        allowNull: false,
        type: Sequelize.String(100),
      },

      data_criado: {
        allowNull: false,
        type: Date,
      },

      data_atualizado: {
        allowNull: false,
        type: Date,
      },

    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Resposta');
  }
};