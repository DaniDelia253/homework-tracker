const router = require('express').Router();
const homeworkRoutes = require('./homework-routes');
const userRoutes = require('./user-routes');
const taskRoutes = require('./task-routes');

router.use('/homework', homeworkRoutes);
router.use('/user', userRoutes);
router.use('/task', taskRoutes);

module.exports = router;
