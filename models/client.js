module.exports = (sequelize, DataTypes) => {
   const Client = sequelize.define('Client', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    soundcloud_url: DataTypes.TEXT
  });
  return Client;
};
