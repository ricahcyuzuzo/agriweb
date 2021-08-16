"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _store = _interopRequireDefault(require("../controllers/store.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = (0, _express["default"])();
routes.get('/products_approved', _store["default"].getAllProductsByCategories);
routes.get('/product', _store["default"].getOneProduct);
routes.post('/add_to_cart', _store["default"].addToCart);
routes.get('/getname', _store["default"].getAllProductByName);
var _default = routes;
exports["default"] = _default;