const { Gallery } = require('../models');

const gallerydata = [
  {
    name: 'Febuary',
    starting_date: 'Febuary 1, 2023',
    ending_date: 'Febuary 28, 2023',
  },
  {
    name: 'March',
    starting_date: 'March 1, 2023',
    ending_date: 'March 31, 2023',
  },
  {
    name: 'April',
    starting_date: 'April 1,2023',
    ending_date: 'April 30, 2023',
  },
  {
    name: 'May',
    starting_date: 'May 1, 2023',
    ending_date: 'May 31, 2023',
  },
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;
