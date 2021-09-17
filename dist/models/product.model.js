"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usersSchema = _mongoose["default"].Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  productName: String,
  pricePerUnit: String,
  availableQuantity: String,
  description: String,
  sellerIdentifier: String,
  sellingApproved: Boolean,
  productCategory: String,
  image: String
});

var userModel = _mongoose["default"].model('products', usersSchema);

var _default = userModel;
exports["default"] = _default;