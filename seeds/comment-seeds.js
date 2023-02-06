const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        book_id: 4,
        comment_text: "This is amazing!"
    },
    {
        user_id: 4,
        book_id: 4,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 1,
        book_id: 2,
        comment_text: "Awesome! kudos to everyone who have contributed"
    },
    {
        user_id: 3,
        book_id: 3,
        comment_text: "We just reached a million subscribers! Fantastic!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;