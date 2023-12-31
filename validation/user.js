const { body } = require("express-validator");
module.exports.register = () => {
  return [
    body("username")
      .trim()
      .not()
      .isEmpty()
      .withMessage("username is required")
      .isLength({ min: 3 })
      .withMessage("Title min 3 charatcters"),
    body("password")
      .trim()
      .not()
      .isEmpty()
      .withMessage("password is required")
      .isLength({ min: 5 })
      .withMessage("password min 5 charatcters"),
      body('email').trim()
      .not()
      .isEmpty()
      .withMessage("Email is required")
      .isLength({ min: 5 })
      .withMessage("email min 5 charatcters")
      .isEmail()
      .withMessage("Provide valid email ")
  ];
};
module.exports.login = () => {
  return [

    body("password")
      .trim()
      .not()
      .isEmpty()
      .withMessage("password is required")
      .isLength({ min: 5 })
      .withMessage("password min 5 charatcters"),
      body('email').trim()
      .not()
      .isEmpty()
      .withMessage("password is required")
      .isLength({ min: 5 })
      .withMessage("email min 5 charatcters")
      .isEmail()
      .withMessage("Provide valid email ")
  ];
};
