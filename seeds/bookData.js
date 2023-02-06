const { Book } = require('../models');

const bookdata = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    exhibition_date: 'Febuary 1, 2023',
    gallery_id: 1,
    filename: 'the_hobbit.jpg',
    description:
      'its the hobbit.',
  },
  {
    title: 'The Stand',
    author: 'Stephen King',
    exhibition_date: 'March 1, 2023',
    gallery_id: 2,
    filename: 'the_stand.jpg',
    description: 'yup.',
  },
  {
    title: 'Sexual Personae',
    author: 'Camille Paglia',
    exhibition_date: 'April 1, 2023',
    gallery_id: 3,
    filename: 'sexual_personae.jpg',
    description: 'oof.',
  },
  {
    title: 'The Adventures of Tom Sawyer',
    author: 'Mark Twain',
    exhibition_date: 'May 1, 2023',
    gallery_id: 4,
    filename: 'tom_sawyer.jpg',
    description: 'fence painters.',
  }
];

const seedBooks = () => Book.bulkCreate(bookdata);

module.exports = seedBooks;

