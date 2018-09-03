module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    google_id: {
      type: DataTypes.CHAR,
    },
    display_name: {
      type: DataTypes.STRING
    }
  });
  return User;
}