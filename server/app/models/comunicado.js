import {sequelize, Sequelize} from ".";
import {DataTypes} from "sequelize/types";

module.exports = (sequelize, DataTypes) => {
    const Comunicado = sequelize.define('Comunicado', {
        /*cod_comunicado integer PRIMARY KEY AUTOINCREMENT,
        data_comunicado DATETIME,
        responsavel_comunicado varchar(100),
        email_comunicado varchar(100),
        data_criado DATETIME,
        data_atualizado DATETIME*/

        id_comunicado: Sequelize.INTEGER,
        responsavel_comunicado: Sequelize.STRING,
        email_comunicado: Sequelize.DATE,
        data_comunicado: Sequelize.DATE,
        data_criado: Sequelize.DATE,
        data_atualizado: Sequelize.DATE,
    });

    return Comunicado;
}