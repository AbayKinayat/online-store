const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  // process.env.DB_NAME, // Название БД
  // process.env.DB_USER, // Пользователь
  // process.env.DB_PASSWORD, // Пароль
  process.env.DATABASE_URL,
  {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
)