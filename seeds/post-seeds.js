const { Post } = require('../models/User');

const postData = [{
    title: 'King the I',
    content: 'How to become King',
    user_id: 1

},
{
    title: 'King the II',
    content: 'How to rule the kingdom',
    user_id: 2
},
{
    title: 'King the III',
    content: 'How to train warrior',
    user_id: 3
},
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;