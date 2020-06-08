"use strict";
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define(
    "Group",
    {
      group_id: DataTypes.STRING,
      group_name: DataTypes.STRING
    },
    {
      underscored: true
    }
  );
  Group.associate = function() {
    // associations can be defined here
  };
  return Group;
};
