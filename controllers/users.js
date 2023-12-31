const Model = require('../models/User');

// @url     GET /api/users
// @dec     Fetch all users
exports.list = async(req, res)=>{
    const data = await Model.find();
    res.status(200).json({success: true, count: data.length, data})    

}

// @url     POST /api/users
// @dec     create a new user
exports.create = async(req, res)=>{
    const data = await Model.create(req.body)
    res.status(201).json({success: true, data})
}

// @url     GET /api/users/:id
// @dec     read a single user
exports.read = async(req, res)=>{
    const data = await Model.findById(req.params.id)
    res.status(200).json({success: true, data})
}

// @url     PUT /api/users/:id
// @dec     update a single user
exports.update = async(req, res)=>{
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    res.status(202).json({success: true, data})
}

// @url     DELETE /api/users/:id
// @dec     delete a single user
exports.remove = async(req, res)=>{
    await Model.findByIdAndDelete(req.params.id);
    res.status(204).json({success: true, data:{}})
}
