const router = require('express').Router()

router.use('/auth', require('./auth'))
router.use('/categories', require('./category'))
router.use('/posts', require('./post'))
router.use('/users', require('./user'))
router.use('/docs', require('./docs'))



module.exports = router;