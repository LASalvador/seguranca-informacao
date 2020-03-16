module.exports = (sequelize, DataTypes) => {
    const Resposta = sequelize.define('Resposta', {
        /* cod_resposta INTEGER PRIMARY KEY AUTOINCREMENT,
        conteudo_resposta TEXT,
        autor_resposta varchar(100),
        data_criado DATETIME,
        data_atualizado DATETIME */

        id_resposta: DataTypes.INTEGER,
        DataTypes: DataTypes.STRING,
        autor_resposta: DataTypes.STRING,
        data_criado: DataTypes.DATE,
        data_atualizado: DataTypes.DATE,
    });

    return Resposta;
}