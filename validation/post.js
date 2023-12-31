const { body } = require("express-validator");
module.exports = () => {
  return [
    body("title")
      .trim()
      .isEmpty()
      .not()
      .withMessage("Title is required")
      .isLength({ min: 5 })
      .withMessage("Title min 5 charatcters"),
    body("content")
      .trim()
    
      .isEmpty()
      .not()
      .withMessage("content is required")
      .isLength({ min: 5 })
      .withMessage("content min 5 charatcters"),
  ];
};
