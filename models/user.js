module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    google_id: {
      type: DataTypes.INTEGER,
    },
    display_name: {
      type: DataTypes.STRING
    }
  });
  return User;
}