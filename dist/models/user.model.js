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
  image: String,
  idNumber: String,
  address: [{
    province: String,
    district: String,
    sector: String,
    cell: String,
    village: String
  }]
});

var userModel = _mongoose["default"].model('users', usersSchema);

var _default = userModel;
exports["default"] = _default;