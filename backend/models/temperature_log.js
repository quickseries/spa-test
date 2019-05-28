'use strict';
module.exports = (sequelize, DataTypes) => {
  const temperature_log = sequelize.define('temperature_log', {
    temperature: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{ paranoid: true });

  temperature_log.associate = (models) => {

  };

  return temperature_log;
};
