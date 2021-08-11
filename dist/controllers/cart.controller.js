"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cart = _interopRequireDefault(require("../models/db/cart.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CartController = /*#__PURE__*/function () {
  function CartController() {
    _classCallCheck(this, CartController);
  }

  _createClass(CartController, null, [{
    key: "addQuantity",
    value: function addQuantity(req, res) {
      var _req$body = req.body,
          quantity = _req$body.quantity,
          price = _req$body.price,
          cartId = _req$body.cartId;
      var totalPrice = quantity * price;

      _cart["default"].findByIdAndUpdate(cartId, {
        quantity: quantity,
        price: totalPrice
      }, function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          res.status(201).json({
            statuc: 201,
            message: 'Quantity added successful'
          });
        }
      });
    }
  }, {
    key: "payWithMobileMoney",
    value: function payWithMobileMoney(req, res) {
      var _req$body2 = req.body,
          phoneNumber = _req$body2.phoneNumber,
          amount = _req$body2.amount;
    }
  }]);

  return CartController;
}();

var _default = CartController;
exports["default"] = _default;