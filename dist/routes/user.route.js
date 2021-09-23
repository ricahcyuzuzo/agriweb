"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _seller = _interopRequireDefault(require("../controllers/seller.controller"));

var _user = _interopRequireDefault(require("../controllers/user.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = (0, _express["default"])();
routes.post('/login', _user["default"].signin);
routes.post('/user', _user["default"].signup);
routes.get('/users', _seller["default"].getProfile);
routes.patch('/profile', _user["default"].updateProfile);
var _default = routes;
exports["default"] = _default;