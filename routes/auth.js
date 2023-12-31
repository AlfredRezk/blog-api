const router = require('express').Router()

const ctrl = require('../controllers/auth')
const {login, register}  =require('../validation/user') 
const {protect}  =require('../middlewares/auth') 

router.post('/register', register(),  ctrl.register);
router.post('/login', login(), ctrl.login);
router.all('/logout', protect, ctrl.logout);



module.exports = router;