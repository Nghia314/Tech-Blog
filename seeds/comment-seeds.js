const { Comment } = require('../models/User');

const commentData = [{
    comment_text: 'How How How How How How How How How',
    user_id: 1,
    post_id: 1
},
{
    comment_text: 'Show me How How How How How How',
    user_id: 2,
    post_id: 2
},
{
    comment_text: 'What, How',
    user_id: 3,
    post_id: 3
}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;