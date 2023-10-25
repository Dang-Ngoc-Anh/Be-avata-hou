const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../connection/connection.js");
const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
  },
});
sequelize.sync();
module.exports = User;
