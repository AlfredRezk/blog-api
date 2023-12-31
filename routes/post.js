const router = require('express').Router()
const ctrl = require('../controllers/posts');
const {admin, protect} = require('../middlewares/auth')
const postValidation = require('../validation/post')
const upload = require('../middlewares/upload')

router.route('/')
.get(ctrl.list)
.post(protect, postValidation(), upload.single('image'), ctrl.create)

router.route('/:id')
.get(ctrl.read)
.put(protect, ctrl.update)
.patch(protect, ctrl.update)
.delete(protect, ctrl.remove);


module.exports = router;