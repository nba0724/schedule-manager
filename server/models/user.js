"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      line_id: DataTypes.STRING,
      line_name: DataTypes.STRING,
      line_image_url: DataTypes.STRING
    },
    {
      underscored: true
    }
  );
  User.associate = function() {
    // associations can be defined here
  };
  return User;
};
