"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validateAddProduct = function validateAddProduct(user) {
  var schema = _joi["default"].object().keys({
    productName: _joi["default"].string().required().min(3),
    pricePerUnit: _joi["default"].string().required(),
    availableQuantity: _joi["default"].string().required(),
    description: _joi["default"].string().required(),
    sellerIdentifier: _joi["default"].string().required(),
    productCategory: _joi["default"].string().required(),
    image: _joi["default"].string().required()
  });

  return schema.validate(user);
};

var _default = {
  validateAddProduct: validateAddProduct
};
exports["default"] = _default;