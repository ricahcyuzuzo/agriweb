"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _seller = _interopRequireDefault(require("../controllers/seller.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = (0, _express["default"])();
routes.get('/seller_products', _seller["default"].getAllClientsProducts);
var _default = routes;
exports["default"] = _default;