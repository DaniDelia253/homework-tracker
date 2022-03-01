const router = require('express').Router();
const homeworkRoutes = require('./homework-routes');
const userRoutes = require('./user-routes');

router.use('/homework', homeworkRoutes);
router.use('/user', userRoutes);

module.exports = router;
