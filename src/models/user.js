// Hash password before saving or updating

module.exports = User;

import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";
import bcrypt from "bcrypt";
const User = sequelize.define("User", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  create_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  create_by: {
    type: DataTypes.STRING,
  },
  update_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  update_by: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.INTEGER,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
User.beforeCreate(async (user) => {
  if (user.password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});
User.beforeUpdate(async (user) => {
  if (user.password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

export default User;
