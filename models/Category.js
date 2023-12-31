const {Schema, model} = require('mongoose');

const categorySchema = new Schema({

    name:{
        type: String, 
        required:[true, 'Category name is required'],
        trim: true
    }

}, {timestamps: true})

module.exports = model('Category', categorySchema)