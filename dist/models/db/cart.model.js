"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cartSchema = _mongoose["default"].Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  productId: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  productUnit: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
});

var cartModel = _mongoose["default"].model('Cart', cartSchema);

var _default = cartModel;
exports["default"] = _default;