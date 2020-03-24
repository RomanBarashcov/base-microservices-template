module.exports = {

  env: process.env.NODE_ENV || 'development',
  host: process.env.HOST || 'https://localhost',
  port: process.env.PORT || 4000,
  movieServiceContainer: process.env.MOVIE_SERVICE_CONTAINER,

  database: {

      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'cinema-catalog-db',
      host: process.env.DB_HOST || 'cinema-catalog-service-db',
      dialect: 'postgres',
      port: 5432,
      timestamps: false,

  },

  corsOptions : {
      credentials: true,
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE']
  }

};