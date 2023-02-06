const User = require('./User');
const Gallery = require('./Gallery');
const Book = require('./Book');
const Comment = require('./Comment');

Gallery.hasMany(Book, {
  foreignKey: 'gallery_id',
});

Book.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

Book.hasMany(Comment, {
  foreignKey: 'book_id',
});

Comment.belongsTo(Book, {
  foreignKey: 'book_id',
})

module.exports = { User, Gallery, Book, Comment };

