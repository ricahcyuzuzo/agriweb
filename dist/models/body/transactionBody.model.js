"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var transactionBodyModel = /*#__PURE__*/function () {
  function transactionBodyModel() {
    _classCallCheck(this, transactionBodyModel);
  }

  _createClass(transactionBodyModel, null, [{
    key: "transactionModel",
    value: function transactionModel(req) {
      var transaction = {
        customerName: req.body.customerName,
        customerAddress: req.body.customerAddress,
        phoneNumber: req.body.phoneNumber,
        sellerIdentifier: req.body.sellerIdentifier,
        products: req.body.products,
        email: req.body.email
      };
      return transaction;
    }
  }]);

  return transactionBodyModel;
}();

var _default = transactionBodyModel;
exports["default"] = _default;