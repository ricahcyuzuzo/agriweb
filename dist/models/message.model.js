"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var messageSchema = _mongoose["default"].Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  name: String,
  clientPhone: String,
  sellerPhone: String,
  message: String
});

var messageModel = _mongoose["default"].model('messages', messageSchema);

var _default = messageModel;
exports["default"] = _default;