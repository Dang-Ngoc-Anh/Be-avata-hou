const { Sequelize, DataTypes, DATE } = require("sequelize");
const { sequelize } = require("../connection/connection.js");
const Frame = sequelize.define("Frame", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
  },
  image: {
    type: DataTypes.TEXT,
  },
  description: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DATE,
  },
});
sequelize.sync();
module.exports = Frame;
