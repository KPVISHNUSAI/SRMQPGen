// models/unit.js
module.exports = (sequelize, DataTypes) => {
    const Unit = sequelize.define('Unit', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      unitNo: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Unit.associate = (models) => {
      Unit.hasMany(models.Question, {
        foreignKey: 'unitId',
        as: 'questions'
      });
    };
  
    return Unit;
  };
  