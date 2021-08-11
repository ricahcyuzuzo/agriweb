"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var transactionSchema = _mongoose["default"].Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  customerName: String,
  customerAddress: String,
  phoneNumber: String,
  sellerIdentifier: String,
  paid: Boolean,
  transactionId: String,
  products: Array,
  email: String
});

var transactioModel = _mongoose["default"].model('transactions', transactionSchema);

var _default = transactioModel;
exports["default"] = _default;