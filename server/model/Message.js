const { sequelize } = require('./sequelize');

const Message = sequelize.define('Message', {
  from: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  roomId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync().then(() => {
  console.log("Entity created");
});

module.exports = {
  Message,
}