const router = require('express').Router()
const ctrl = require('../controllers/categories');
const {admin, protect} = require('../middlewares/auth')

router.use(protect)
router.use(admin)

router.route('/')
.get(ctrl.list)
.post(ctrl.create)

router.route('/:id')
.get(ctrl.read)
.put(ctrl.update)
.patch(ctrl.update)
.delete(ctrl.remove);


module.exports = router;