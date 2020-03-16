'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Resposta', {
      id_resposta: {
        allowNull: false,
        auto_increment: true,
        primaryKey: 'id_resposta',
        type: Sequelize.INTEGER,
      },

      conteudo_resposta: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      autor_resposta: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      data_criado: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      data_atualizado: {
        allowNull: false,
        type: Sequelize.DATE,
      },

    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Resposta');
  }
};