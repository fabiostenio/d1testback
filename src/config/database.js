require('dotenv').config()

module.exports = {
  development: {
    dialect: 'mysql',
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: 3306
  },

};
