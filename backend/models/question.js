module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('Question', {
      questionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      questionString: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      images: {
        type: DataTypes.JSON
      },
      subject: {
        type: DataTypes.STRING
      },
      subjectCode: {
        type: DataTypes.STRING
      },
      examName: {
        type: DataTypes.STRING
      },
      unitName: {
        type: DataTypes.STRING
      }
    });
  
    return Question;
  };
  