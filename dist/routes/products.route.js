"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _seller = _interopRequireDefault(require("../controllers/seller.controller"));

var _store = _interopRequireDefault(require("../controllers/store.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = (0, _express["default"])();
routes.post('/product', _seller["default"].addProduct);
routes.post('/user', UserController.signup);
routes.get('/products_approved', _store["default"].getAllProductsByCategories);
var _default = routes;
exports["default"] = _default;