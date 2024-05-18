const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      questionString: {
        type: DataTypes.STRING,
        allowNull: false
      },
      images: {
        type: DataTypes.JSON,
        allowNull: true
      },
      subjectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Subjects',
          key: 'subjectID'
        }
      },
      typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Hardnesses',
          key: 'id'
        }
      },
      unitId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Units',
          key: 'id'
        }
      },
      createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
      },
      updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
      }
  });

  Question.associate = (models) => {
    Question.belongsTo(models.Subject, {
      foreignKey: 'subjectId',
      as: 'subject'
    });
    Question.belongsTo(models.Hardness, {
      foreignKey: 'typeId',
      as: 'hardness'
    });
    Question.belongsTo(models.Unit, {
      foreignKey: 'unitId',
      as: 'unit'
    });
  };

  return Question;
};
