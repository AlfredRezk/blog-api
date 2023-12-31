const User = require('../models/User')
const ErrorResponse = require('../utils/ErrorResponse');
const {validationResult} = require('express-validator')

// @URL     POST  /api/auth/register
exports.register = async(req, res)=>{
    const err = validationResult(req)
    if(!err.isEmpty())
        throw new ErrorResponse(403, err.errors[0].msg)



    const user = await User.create(req.body)
    res.status(200).json({
        success: true, 
        token: user.getToken(), 
        message: 'User registered successfully !'
    })
}


// @URL     POST  /api/auth/login
exports.login = async(req, res)=>{
    const err = validationResult(req)
    if(!err.isEmpty())
        throw new ErrorResponse(403, err.errors[0].msg)
    // check for user 
    const {email, password} = req.body 
    const user  = await User.findOne({email})
    if(!user) throw new ErrorResponse(401, 'Invalid credentials')
    // Check the password 
    const isMatch = await user.matchPassword(password)
    if(!isMatch) throw new ErrorResponse(401, 'Invalid credentials')
    res.status(200).json({
        success: true, 
        token: user.getToken(), 
        message: 'User Loggedin successfully !'
    })
}

// @URL     POST  /api/auth/logout
exports.logout = async(req, res)=>{
    res.status(200).json({
        success: true, 
        message: 'Remove token from browser data'
    })
}