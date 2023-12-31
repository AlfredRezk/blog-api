const Model = require("../models/Post");
const ErrorResponse = require("../utils/ErrorResponse");
const {validationResult} = require('express-validator')

// @url     GET /api/posts
// @dec     Fetch all posts
exports.list = async (req, res) => {
  const data = await Model.find();
  res.status(200).json({ success: true, count: data.length, data });
};

// @url     POST /api/posts
// @dec     create a new post
exports.create = async (req, res) => {
  console.log(req.body)
  const err = validationResult(req);
  if (!err.isEmpty()) throw new ErrorResponse(403, err.errors[0].msg);
  // automatically add userId to req.body
  req.body.userId = req.user._id;

  if(req.file)
    req.body.image = req.file.orginialname;
  
  const data = await Model.create(req.body);
  res.status(201).json({ success: true, data });
};

// @url     GET /api/posts/:id
// @dec     read a single post
exports.read = async (req, res) => {
  const data = await Model.findById(req.params.id);
  res.status(200).json({ success: true, data });
};

// @url     PUT /api/posts/:id
// @dec     update a single post
exports.update = async (req, res) => {
  // check authorization
  const post = await Model.findById(req.params.id);
  if (!req.user.isAdmin || req.user._id.toString() != post.userId)
    throw new ErrorResponse(403, "Not Authorized");
  const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(202).json({ success: true, data });
};

// @url     DELETE /api/posts/:id
// @dec     delete a single post
exports.remove = async (req, res) => {
  // check authorization
  const post = await Model.findById(req.params.id);
  if (!req.user.isAdmin || req.user._id.toString() != post.userId)
    throw new ErrorResponse(403, "Not Authorized");
  await Model.findByIdAndDelete(req.params.id);
  res.status(204).json({ success: true, data: {} });
};
