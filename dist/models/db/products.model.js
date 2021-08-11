"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productsSchema = _mongoose["default"].Schema({
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

var productsModel = _mongoose["default"].model('products', productsSchema);

var _default = productsModel;
exports["default"] = _default;