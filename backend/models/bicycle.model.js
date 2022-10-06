module.exports = (sequelize, Sequelize) => {
  const Manga = sequelize.define("manga", {
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

  return Manga;
}