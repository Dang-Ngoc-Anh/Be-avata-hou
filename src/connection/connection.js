const dotEnv = require("dotenv");
const { Sequelize, DataTypes } = require("sequelize");
dotEnv.config();

var sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,

  {
    host: process.env.HOST,
    port: process.env.PORT_DB,
    dialect: "mysql",

    pool: {
      max: 20,
      min: 0,
      idle: 10000,
    },
  }
);

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection successfully");
  } catch (error) {
    console.log("No want to connection successfully");
  }
};

module.exports = { sequelize, connection };
