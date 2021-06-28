const User = require('../models/User');


const userData = [
    {
        f_name: "Sam",
        l_name: 'Em',
        email: "sam@email.com",
        username: "Gamgee",
        password: "Password!2345"
    },
    {
        f_name: "Thao",
        l_name: 'Scap',
        email: "thao@email.com",
        username: "Babalonica",
        password: "Password!2345"
    },
    {
        f_name: "Bernie",
        l_name: 'Lai',
        email: "bernie@email.com",
        username: "Bern",
        password: "Password!2345"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;