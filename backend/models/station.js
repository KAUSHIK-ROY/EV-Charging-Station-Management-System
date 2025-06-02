const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('Station', {
    name: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    status: {
      type: DataTypes.ENUM('Active', 'Inactive'),
      defaultValue: 'Active'
    },
    powerOutput: DataTypes.FLOAT,
    connectorType: DataTypes.STRING
  });
