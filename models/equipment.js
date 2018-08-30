module.exports = (sequelize, DataTypes) => {
  const Equipment = sequelize.define('Equipment', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    interface: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    mic_preamp: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    monitor: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    headphone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    plugin_effects: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    plugin_package: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    plugin_waves: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    plugin_slate_digital: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    plugin_fab_filter: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    plugin_izotope: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    plugin_soundtoys: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    microphone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    cable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    instrument_guitar: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    instrument_bass: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    instrument_drum: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    instrument_midi: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    amp: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    cab: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    pedal: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });
  return Equipment;
};