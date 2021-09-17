"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usersSchema = _mongoose["default"].Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  topic: String,
  description: String,
  names: String,
  comment: [{
    sender: String,
    message: String
  }]
});

var userModel = _mongoose["default"].model('forum', usersSchema);

var _default = userModel;
exports["default"] = _default;