"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _passwordValidator = _interopRequireDefault(require("password-validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validateUserSignup = function validateUserSignup(user) {
  var schema = _joi["default"].object().keys({
    fullNames: _joi["default"].string().min(2).required(),
    phoneNumber: _joi["default"].string().required(),
    password: _joi["default"].string().required(),
    userType: _joi["default"].string().required()
  });

  return schema.validate(user);
};

var validatePassword = function validatePassword(password) {
  var schema = new _passwordValidator["default"]();
  schema.is().min(8).is().max(100).has().lowercase().has().uppercase().has().digits().has().not().spaces().has().symbols();
  return schema.validate(password);
};

var validateUserSignIn = function validateUserSignIn(user) {
  var schema = _joi["default"].object().keys({
    phoneNumber: _joi["default"].string().min(10).max(10).required(),
    password: _joi["default"].string().required()
  });

  return schema.validate(user);
};

var _default = {
  validateUserSignup: validateUserSignup,
  validateUserSignIn: validateUserSignIn,
  validatePassword: validatePassword
};
exports["default"] = _default;