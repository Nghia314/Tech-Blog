const { User } = require('../models');

const userData = [{
    username: 'Jun',
    password: 'Jun123'

},
{
    username: 'David',
    password:'David123'
},
{
    username: 'Michael',
    password:'Michael123'
},
{
    username: 'Bob',
    password:'Bob123'
},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;