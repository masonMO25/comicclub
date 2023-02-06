const { User } = require('../models');

const userData = [
    {
        username: "Claudia A",
        email: "claudzgmail.com",
        password: "p@ssword1"
    },
    {
        username: "Chris B",
        email: "chrisb@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "andy c",
        email: "andy@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "yitee d",
        email: "yitee@gmail.com",
        password: "p@ssword4"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;