const User = require('./User');
const Gallery = require('./Gallery');
const Book = require('./Book');
const Comment = require('./Comment');

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Book, {
  foreignKey: 'book_id',
});

Book.hasMany(Comment, {
  foreignKey: 'book_id',
});

Gallery.hasMany(Book, {
  foreignKey: 'gallery_id',
});

Book.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});


module.exports = { User, Gallery, Book, Comment };

