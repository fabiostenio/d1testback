const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    `${process.env.DATABASE_NAME}`,
    `${process.env.DATABASE_USER}`,
    `${process.env.DATABASE_PASSWORD}`,
    {
      host: `${process.env.DATABASE_HOST}`,
      dialect: 'mysql',
      logging: false,
    },
  );
const connect = () => {
  sequelize.authenticate()
    .then(() => {
      console.log('DB connected');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
};
module.exports = { connect, sequelize };
