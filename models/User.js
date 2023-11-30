module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    location: {
      type: DataTypes.STRING,
    },
  });

  return User;
};
