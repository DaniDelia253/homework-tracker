const router = require('express').Router();
const apiRoutes = require('./api/index');
<<<<<<< HEAD
const homeRoutes = require('./homeRoutes');
=======
>>>>>>> feature/routes

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;