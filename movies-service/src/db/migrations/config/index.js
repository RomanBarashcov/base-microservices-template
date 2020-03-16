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
        seederStorage: "sequelize",
        seederStorageTableName: "SequelizeSeederMeta"
    }
};