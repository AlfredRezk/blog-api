const Model = require('../models/Category');

// @url     GET /api/categories
// @dec     Fetch all categories
exports.list = async(req, res)=>{
    const data = await Model.find();
    res.status(200).json({success: true, count: data.length, data})    

}

// @url     POST /api/categories
// @dec     create a new category
exports.create = async(req, res)=>{
    const data = await Model.create(req.body)
    res.status(201).json({success: true, data})
}

// @url     GET /api/categories/:id
// @dec     read a single category
exports.read = async(req, res)=>{
    const data = await Model.findById(req.params.id)
    res.status(200).json({success: true, data})
}

// @url     PUT /api/categories/:id
// @dec     update a single category
exports.update = async(req, res)=>{
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    res.status(202).json({success: true, data})
}

// @url     DELETE /api/categories/:id
// @dec     delete a single category
exports.remove = async(req, res)=>{
    await Model.findByIdAndDelete(req.params.id);
    res.status(204).json({success: true, data:{}})
}
