const {Schema, model} = require('mongoose');

const postSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId, 
        ref:'User', 
        required: true
    }, 
    categoryId: {
        type: Schema.Types.ObjectId, 
        ref:'Category', 
        required: true
    }, 
    
    title:{
        type: String, 
        required:[true, 'Post title is required'],
        trim: true,
    }, 
    content: {
        type: String, 
        required:[true, 'Post content is required'],
        trim: true,  
    }, 
    image:{
        type: String, 
        default:'no-image.jpg'
    }


}, {timestamps: true})

module.exports = model('Post', postSchema)