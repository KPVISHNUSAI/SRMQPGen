// user.js

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Role',
          key: 'id'
        }
      },
      dob: {
        type: DataTypes.DATEONLY,
        allowNull: true
      }
    });
  
    User.associate = function(models) {
      User.belongsTo(models.Role, { foreignKey: 'roleId', as: 'role' });
    };
  
    return User;
  };
  