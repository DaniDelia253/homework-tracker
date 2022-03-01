const User = require('./User');
const Homework = require('./Homework');

// Create Associations
User.hasMany(Homework, {
    foreignKey: 'user_id'
});

Homework.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Homework };