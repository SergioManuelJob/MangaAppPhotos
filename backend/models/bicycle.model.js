module.exports = (sequelize, Sequelize) => {
  const Bicycle = sequelize.define("bicycle", {
    title: {
      type: Sequelize.STRING
    },
    pages: {
      type: Sequelize.INTEGER
    },
    volume: {
      type: Sequelize.INTEGER
    },
    genre: {
      type: Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    }
  });

  return Bicycle;
}