// models/subject.js
module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define('Subject', {
      subjectID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      subjectCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      subjectName: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Subject.associate = (models) => {
      Subject.hasMany(models.Question, {
        foreignKey: 'subjectId',
        as: 'questions'
      });
    };
  
    return Subject;
  };
  