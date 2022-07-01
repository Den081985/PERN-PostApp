const sequelize = require("../db");

const { DataTypes } = require("sequelize");

const Post = sequelize.define("post", {
  author: { type: DataTypes.STRING, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.STRING, allowNull: false },
  picture: { type: DataTypes.STRING },
});

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

User.hasMany(Post);
Post.belongsTo(User);

module.exports = { Post, User };
