"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _product = _interopRequireDefault(require("../models/product.model"));

var _user = _interopRequireDefault(require("../models/user.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AdminController = /*#__PURE__*/function () {
  function AdminController() {
    _classCallCheck(this, AdminController);
  }

  _createClass(AdminController, null, [{
    key: "approveProduct",
    value: function approveProduct(req, res) {
      var sellingApproved = req.body.sellingApproved;
      var product_id = req.query.product_id;

      _product["default"].findByIdAndUpdate(product_id, {
        sellingApproved: sellingApproved
      }, function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          res.status(201).json({
            status: 201,
            message: 'The product is approved!'
          });
        }
      });
    }
  }, {
    key: "getAllUsersByType",
    value: function getAllUsersByType(req, res) {
      _user["default"].find(function (err, docs) {
        if (docs.length) {
          res.status(200).json({
            status: 200,
            message: 'Ok',
            data: docs
          });
        } else {
          res.status(404).json({
            status: 404,
            message: 'No Users Found here'
          });
        }
      });
    }
  }, {
    key: "getAllProducts",
    value: function getAllProducts(req, res) {
      _product["default"].find().exec().then(function (docs) {
        if (docs.length) {
          res.status(200).json({
            status: 200,
            message: 'Ok',
            data: docs
          });
        } else {
          res.status(200).json({
            status: 200,
            message: 'Products isn\'t added yet'
          });
        }
      });
    }
  }]);

  return AdminController;
}();

var _default = AdminController;
exports["default"] = _default;