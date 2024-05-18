// models/hardness.js
module.exports = (sequelize, DataTypes) => {
    const Hardness = sequelize.define('Hardness', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Hardness.associate = (models) => {
      Hardness.hasMany(models.Question, {
        foreignKey: 'typeId',
        as: 'questions'
      });
    };
  
    return Hardness;
  };
  