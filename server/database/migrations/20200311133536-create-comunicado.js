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
        type: DataTypes.INTEGER,
      },
      
      data_comunicado:{
        allowNull: false,
        type: DataType.Date,
      },

      responsavel_comunicado:{
        allowNull: false,
        type: Sequelize.String(100),
      },

      email_comunicado:{
        allowNull: false,
        type: Sequelize.String(100),
      },

      data_criado:{
        allowNull: false,
        type: DataType.Date,
      },

      data_atualizado:{
        allowNull: false,
        type: DataType.Date,
      },
    });


  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('Comunicado');

  }
};
