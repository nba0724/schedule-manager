"use strict";
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    "Reservation",
    {
      evnet_id: DataTypes.STRING,
      member_id: DataTypes.STRING,
      status: DataTypes.STRING
    },
    {
      underscored: true
    }
  );
  Reservation.associate = function() {
    // associations can be defined here
  };
  return Reservation;
};
