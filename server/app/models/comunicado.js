module.exports = (sequelize, DataTypes) => {
    const Comunicado = sequelize.define('Comunicado', {
        /*cod_comunicado integer PRIMARY KEY AUTOINCREMENT,
        data_comunicado DATETIME,
        responsavel_comunicado varchar(100),
        email_comunicado varchar(100),
        data_criado DATETIME,
        data_atualizado DATETIME*/

        id_comunicado: DataTypes.INTEGER,
        responsavel_comunicado: DataTypes.STRING,
        email_comunicado: DataTypes.DATE,
        data_comunicado: DataTypes.DATE,
        data_criado: DataTypes.DATE,
        data_atualizado: DataTypes.DATE,
    });

    return Comunicado;
}