const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedBooks = require('./bookData');
const seedComment = require('./commentData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedBooks();

  await seedComment();

  process.exit(0);
};

seedAll();

