"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validateCart = function validateCart(user) {
  var schema = _joi["default"].object().keys({
    productId: _joi["default"].string().required(),
    productName: _joi["default"].string().required(),
    productUnit: _joi["default"].string().required(),
    price: _joi["default"].number().required()
  });

  return schema.validate(user);
};

var _default = {
  validateCart: validateCart
};
exports["default"] = _default;