module.exports = {

  env: process.env.NODE_ENV || 'development',
  host: process.env.HOST || 'https://localhost',
  port: process.env.PORT || 4000,

  database: {

      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'service_name_db',
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      port: 5432,
      timestamps: false,

  },

  corsOptions : {
      credentials: true,
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE']
  }

};