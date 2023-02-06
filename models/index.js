const User = require('./User');
const Gallery = require('./Gallery');
const Book = require('./Book');

Gallery.hasMany(Book, {
  foreignKey: 'gallery_id',
});

Book.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Book };

