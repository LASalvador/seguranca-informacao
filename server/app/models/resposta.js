import {sequelize, Sequelize} from ".";

module.exports = (sequelize, DataTypes) => {
    const Resposta = sequelize.define('Resposta', {
        /* cod_resposta INTEGER PRIMARY KEY AUTOINCREMENT,
        conteudo_resposta TEXT,
        autor_resposta varchar(100),
        data_criado DATETIME,
        data_atualizado DATETIME */

        id_resposta: Sequelize.INTEGER,
        conteudo_resposta: Sequelize.STRING,
        autor_resposta: Sequelize.STRING,
        data_criado: Sequelize.DATE,
        data_atualizado: Sequelize.DATE,
    });

    return Resposta;
}