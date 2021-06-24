const { User } = require('../models');


const userData = [
    {
        name: "Sam Em",
        user_name: "Gamgee",
        email: "sam@email.com",
        password: "Password!2345"
    },
    {
        name: "Thao Scap",
        user_name: "Weeping Babalonica",
        email: "thao@email.com",
        password: "Password!2345"
    },
    {
        name: "Bernie Lai",
        user_name: "Bern",
        email: "bernie@email.com",
        password: "Password!2345"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;