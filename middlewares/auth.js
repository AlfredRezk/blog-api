const ErrorResponse = require('../utils/ErrorResponse')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.protect = async(req, res, next)=>{
    let token; 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
        token = req.headers.authorization.split(' ')[1]
     if(!token)
        throw new ErrorResponse(401, 'Not authorize to access this route')
    //  verify token 
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decode.id)
    next()
}

exports.admin = (req, res, next)=>{

    if(!req.user.isAdmin)
        throw new ErrorResponse(403, 'User role is not authorized to access this route')
    next()
}