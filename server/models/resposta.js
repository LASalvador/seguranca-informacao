module.exports = (sequelize, DataTypes) => {
    const Resposta = sequelize.define('Resposta', {
        /* cod_resposta INTEGER PRIMARY KEY AUTOINCREMENT,
        conteudo_resposta TEXT,
        autor_resposta varchar(100),
        data_criado DATETIME,
        data_atualizado DATETIME */

        id_resposta: DataTypes.INTEGER,
        conteudo_resposta: DataTypes.STRING,
        autor_resposta: DataTypes.STRING,
        data_criado: DataTypes.DATE,
        data_atualizado: DataTypes.DATE,
    });

    Resposta.sync({force: true}).then(function () {
        return Resposta.create({
            conteudo_resposta: 'Teste2',
            autor_resposta: 'tester2',
            data_criado: '2019-08-11',
            data_atualizado: '2020-01-01'
        });
    });
}