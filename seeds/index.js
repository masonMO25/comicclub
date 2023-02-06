const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedBooks = require('./bookData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedBooks();

  process.exit(0);
};

seedAll();

