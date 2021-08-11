"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _validateTransactions2 = _interopRequireDefault(require("../helpers/userValidations/validateTransactions"));

var _transactionBody = _interopRequireDefault(require("../models/body/transactionBody.model"));

var _transactions = _interopRequireDefault(require("../models/db/transactions.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TransactionController = /*#__PURE__*/function () {
  function TransactionController() {
    _classCallCheck(this, TransactionController);
  }

  _createClass(TransactionController, null, [{
    key: "addTransaction",
    value: function addTransaction(req, res) {
      var _req$body = req.body,
          products = _req$body.products,
          customerName = _req$body.customerName,
          customerAddress = _req$body.customerAddress,
          phoneNumber = _req$body.phoneNumber,
          sellerIdentifier = _req$body.sellerIdentifier,
          email = _req$body.email;

      var _validateTransactions = _validateTransactions2["default"].validateTransactions(_transactionBody["default"].transactionModel(req)),
          error = _validateTransactions.error;

      if (error) {
        return res.status(400).json({
          status: 400,
          message: error.details[0].message.replace(/"/g, '')
        });
      }

      var randomNumber = function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      };

      var randomNumber1 = function randomNumber1(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      };

      var txRef = randomNumber(111111, 999999);
      var orderId = randomNumber1(111111, 999999);
      var transaction = new _transactions["default"]({
        _id: new _mongoose["default"].Types.ObjectId(),
        products: products,
        customerName: customerName,
        customerAddress: customerAddress,
        phoneNumber: phoneNumber,
        sellerIdentifier: sellerIdentifier,
        email: email,
        paid: false,
        transactionId: txRef
      });
      transaction.save().then(function () {
        res.status(201).json({
          status: 201,
          message: 'You have placed an order, please confirm your payment dialing *182*7*1#'
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }]);

  return TransactionController;
}();

var _default = TransactionController;
exports["default"] = _default;