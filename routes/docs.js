const router = require('express').Router()
const swaggerUi = require('swagger-ui-express');


router.get('/json', (req, res)=>{
    res.status(200).json(require('../swagger.json'))
})

// swagger documentation
router.use('/swagger', swaggerUi.serve, swaggerUi.setup(require('../swagger.json')))

// redoc 
const redoc = require('redoc-express')
router.use('/redoc', redoc({specUrl:'/api/docs/json'}))

module.exports = router;