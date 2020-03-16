'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('Comunicado', {
      /*cod_comunicado integer PRIMARY KEY AUTOINCREMENT,
        data_comunicado DATETIME,
        responsavel_comunicado varchar(100),
        email_comunicado varchar(100),
        data_criado DATETIME,
        data_atualizado DATETIME*/
      id_comunicado:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      
      data_comunicado:{
        allowNull: false,
        type: Sequelize.DATE,
      },

      responsavel_comunicado:{
        allowNull: false,
        type: Sequelize.STRING,
      },

      email_comunicado:{
        allowNull: false,
        type: Sequelize.STRING,
      },

      data_criado:{
        allowNull: false,
        type: Sequelize.DATE,
      },

      data_atualizado:{
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('Comunicado');

  }
};
