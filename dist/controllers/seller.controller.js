"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _product = _interopRequireDefault(require("../models/product.model"));

var _users = _interopRequireDefault(require("../models/users.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SellerController = /*#__PURE__*/function () {
  function SellerController() {
    _classCallCheck(this, SellerController);
  }

  _createClass(SellerController, null, [{
    key: "addProduct",
    value: function addProduct(req, res) {
      var _req$body = req.body,
          productName = _req$body.productName,
          pricePerUnit = _req$body.pricePerUnit,
          availableQuantity = _req$body.availableQuantity,
          description = _req$body.description,
          sellerIdentifier = _req$body.sellerIdentifier,
          productCategory = _req$body.productCategory,
          image = _req$body.image;
      var product = new _product["default"]({
        _id: new _mongoose["default"].Types.ObjectId(),
        productName: productName,
        pricePerUnit: pricePerUnit,
        availableQuantity: availableQuantity,
        description: description,
        sellerIdentifier: sellerIdentifier,
        sellingApproved: true,
        productCategory: productCategory,
        image: image
      });
      product.save().then(function (result) {
        console.log(result);
      })["catch"](function (err) {
        console.log(err);
      });
      res.status(201).json({
        status: 201,
        message: 'Product Added successfully',
        data: product
      });
    }
  }, {
    key: "getAllClientsProducts",
    value: function getAllClientsProducts(req, res) {
      var phoneNumber = req.query.phoneNumber;

      _product["default"].find({
        sellerIdentifier: phoneNumber
      }, function (err, docs) {
        if (docs.length) {
          res.status(200).json({
            status: 200,
            data: docs
          });
        } else {
          res.status(404).json({
            status: 404,
            message: 'No Products found!'
          });
        }
      });
    }
  }, {
    key: "getOneClientProducts",
    value: function getOneClientProducts(req, res) {
      var product_id = req.query.product_id;

      _product["default"].findById(product_id).exec().then(function (doc) {
        if (doc) {
          res.status(200).json({
            status: 200,
            data: doc
          });
        } else {
          res.status(404).json({
            status: 404,
            message: 'Product Not found!'
          });
        }
      })["catch"](function (err) {
        res.status(500).json({
          status: 500,
          error: err
        });
      });
    }
  }, {
    key: "getProfile",
    value: function getProfile(req, res) {
      var telephone = req.query.telephone;

      _users["default"].find({
        phoneNumber: telephone
      }, function (err, docs) {
        console.log(docs);

        if (docs.length) {
          res.status(200).json({
            status: 200,
            data: docs
          });
        } else {
          res.status(404).json({
            status: 404,
            message: 'User not found'
          });
        }
      });
    }
  }]);

  return SellerController;
}();

var _default = SellerController;
exports["default"] = _default;