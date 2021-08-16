"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _products = _interopRequireDefault(require("../models/db/products.model"));

var _cartBody = _interopRequireDefault(require("../models/body/cartBody.model"));

var _validateCart = _interopRequireDefault(require("../helpers/userValidations/validateCart"));

var _users = _interopRequireDefault(require("../models/db/users.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StoreController = /*#__PURE__*/function () {
  function StoreController() {
    _classCallCheck(this, StoreController);
  }

  _createClass(StoreController, null, [{
    key: "getAllProductsByCategories",
    value: function getAllProductsByCategories(req, res) {
      _products["default"].find({
        sellingApproved: true
      }, function (err, docs) {
        if (docs.length) {
          _products["default"].find(function (err, docs) {
            if (docs.length) {
              res.status(200).json({
                status: 200,
                message: 'Ok',
                data: docs
              });
            } else {
              res.status(404).json({
                status: 404,
                message: 'Products of this category is not found!'
              });
            }
          });
        } else {
          res.status(404).json({
            status: 404,
            message: 'Products not found!'
          });
        }
      });
    }
  }, {
    key: "getAllProductByName",
    value: function getAllProductByName(req, res) {
      var name = req.query.name;

      _products["default"].find({
        productName: name
      }, function (err, docs) {
        if (docs) {
          res.status(200).json({
            status: 200,
            message: 'Ok',
            data: docs
          });
        } else {
          res.status(404).json({
            status: 404,
            message: 'Not Found'
          });
        }
      });
    }
  }, {
    key: "getOneProduct",
    value: function getOneProduct(req, res) {
      var product_id = req.body.product_id;

      _products["default"].findById(product_id, function (err, docs) {
        if (docs) {
          res.status(200).json({
            status: 200,
            message: 'Ok',
            data: docs
          });
        } else {
          res.status(404).json({
            status: 404,
            message: 'The product of the provided Id is not found!'
          });
        }
      });
    }
  }, {
    key: "addToCart",
    value: function addToCart(req, res) {
      var _req$body = req.body,
          productId = _req$body.productId,
          productName = _req$body.productName,
          productUnit = _req$body.productUnit,
          price = _req$body.price;
      var user_id = req.query.user_id;

      var _validateCart$validat = _validateCart["default"].validateCart(_cartBody["default"].addToCartBodyModel(req)),
          error = _validateCart$validat.error;

      if (error) {
        return res.status(400).json({
          status: 400,
          message: error.details[0].message.replace(/"/g, '')
        });
      }

      _users["default"].findByIdAndUpdate(user_id, {
        $push: {
          cart: {
            productId: productId,
            productName: productName,
            productUnit: productUnit,
            price: price
          }
        }
      }, function (err, docs) {
        res.status(201).json({
          status: 201,
          message: 'product added to cart successful',
          data: docs
        });
      });
    }
  }, {
    key: "getCartbyUserId",
    value: function getCartbyUserId(req, res) {
      var user_id = req.query.user_id;

      _users["default"].findById(user_id, function (err, docs) {
        if (err) {
          res.status(500).json({
            status: 500,
            error: err
          });
        } else {
          res.status(200).json({
            status: 200,
            data: docs.cart
          });
        }
      });
    }
  }]);

  return StoreController;
}();

var _default = StoreController;
exports["default"] = _default;