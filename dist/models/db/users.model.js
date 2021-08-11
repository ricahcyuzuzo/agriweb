"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usersSchema = _mongoose["default"].Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  fullNames: String,
  phoneNumber: String,
  password: String,
  type: String,
  active: Boolean
});

var usersModel = _mongoose["default"].model('users', usersSchema);

var _default = usersModel;
exports["default"] = _default;