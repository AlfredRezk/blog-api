const { hash, genSalt, compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const {Schema, model} = require('mongoose');

const userSchema = new Schema({

    username:{
        type: String, 
        required:[true, 'username is required'],
        trim: true, 
        unique: [true, 'Username already exists']
    }, 
    email: {
        type: String, 
        required:[true, 'email is required'],
        trim: true, 
        unique: [true, 'Email already exists']
    }, 
    password: {
        type: String, 
        required:[true, 'Password is required'],
        trim: true, 
    }, 
    isAdmin:{
        type: Boolean, 
        default: false
    }

}, {timestamps: true})

// Hash user password
userSchema.pre('save', async function(next){
    const salt = await genSalt(12)
    this.password = await hash(this.password, salt)
    next()
})

// Compare user password 
userSchema.methods.matchPassword = async function(enteredPassword){
    return compare(enteredPassword, this.password);
}

// generate token 
userSchema.methods.getToken = function(){
    return sign({id: this._id}, process.env.JWT_SECRET, {expiresIn:'1d'})
}

module.exports = model('User', userSchema)