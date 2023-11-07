
const { sequelize } = require('./sequelize');

const Room = sequelize.define('Room', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Defina o relacionamento para que uma sala possua dois usuários
Room.belongsToMany(User, { through: 'RoomUser' });

// Defina o relacionamento para que uma sala tenha várias mensagens
Room.hasMany(Message);

sequelize.sync().then(() => {
  console.log("Entity created");
});

module.exports = {
  Room,
}