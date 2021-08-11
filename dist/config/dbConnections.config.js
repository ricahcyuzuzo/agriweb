"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mongoConnect = function mongoConnect() {
  _mongoose["default"].connect("mongodb://a78776c4adb7d1da05a68376ac6bff10:".concat(encodeURIComponent('Betterlife123!'), "@11a.mongo.evennode.com:27018,11b.mongo.evennode.com:27018/a78776c4adb7d1da05a68376ac6bff10?replicaSet=eu-11"), {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  _mongoose["default"].connection.once('open', function () {
    return console.log('Database Connected :-)');
  }).on('error', function (error) {
    console.log('Error ', error);
  });
};

var _default = mongoConnect;
exports["default"] = _default;