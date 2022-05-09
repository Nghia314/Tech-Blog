const User = require('.');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasmany(Post, {
    foreignKey: 'user_id'
});
Post.belongsto(User, {
    foreignKey: 'user_id',
    onDelete: "casade"
});

Comment.belongsto(User, {
    foreignKey: 'user_id',
    onDelete: "casade"
});

Comment.belongsto(Post, {
    foreignKey: 'user_id',
    onDelete: "casade"
});

Post.hasmany(Comment, {
    foreignKey: 'user_id',
    onDelete: "casade"
});

User.hasmany(Comment, {
    foreignKey: 'user_id',
    onDelete: "casade"
});

module.exports = { User, Post, Comment };