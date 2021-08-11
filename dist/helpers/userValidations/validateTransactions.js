"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validateTransactions = function validateTransactions(user) {
  var schema = _joi["default"].object().keys({
    customerName: _joi["default"].string().required(),
    customerAddress: _joi["default"].string().required(),
    phoneNumber: _joi["default"].string().required().min(10).max(10),
    sellerIdentifier: _joi["default"].string().required().min(10).max(10),
    products: _joi["default"].array().required(),
    email: _joi["default"].string().required()
  });

  return schema.validate(user);
};

var _default = {
  validateTransactions: validateTransactions
};
exports["default"] = _default;