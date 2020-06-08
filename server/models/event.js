"use strict";
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "Event",
    {
      group_id: DataTypes.STRING,
      subject: DataTypes.STRING,
      content: DataTypes.STRING,
      place: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      capacity: DataTypes.INTEGER,
      is_released: DataTypes.BOOLEAN
    },
    {
      underscored: true
    }
  );
  Event.associate = function() {
    // associations can be defined here
  };
  return Event;
};
