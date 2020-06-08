"use strict";
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define(
    "Member",
    {
      group_id: DataTypes.STRING,
      line_id: DataTypes.STRING
    },
    {
      underscored: true
    }
  );
  Member.associate = function() {
    // associations can be defined here
  };
  return Member;
};
