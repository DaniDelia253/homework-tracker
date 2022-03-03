const User = require('./User');
const Homework = require('./Homework');
const Task = require('./Task');

// Create Associations
User.hasMany(Homework, {
    foreignKey: 'user_id'
});

Homework.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Task.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Task.belongsTo(Homework, {
    foreignKey: 'homework_id',
    onDelete: 'SET NULL'
});

User.hasMany(Task, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Homework.hasMany(Task, {
    foreignKey: 'homework_id'
});

module.exports = { User, Homework, Task };