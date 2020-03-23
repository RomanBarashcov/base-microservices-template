const config = require('../../config/index');

module.exports = {
    [config.env]: {
        username: config.database.username,
        password: config.database.password,
        database: config.database.database,
        host: config.database.host,
        dialect: config.database.dialect,
        timestamps: config.database.timestamps,
        dialectOptions: config.database.dialectOptions,
        operatorsAliases: config.database.operatorsAliases,
        seederStorage: "sequelize",
        seederStorageTableName: "SequelizeSeederMeta"
    }
};