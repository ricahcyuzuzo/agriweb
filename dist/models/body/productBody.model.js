"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var productsBodyModels = /*#__PURE__*/function () {
  function productsBodyModels() {
    _classCallCheck(this, productsBodyModels);
  }

  _createClass(productsBodyModels, null, [{
    key: "productsBodymodel",
    value: function productsBodymodel(req) {
      var products = {
        productName: req.body.productName,
        pricePerUnit: req.body.pricePerUnit,
        availableQuantity: req.body.availableQuantity,
        description: req.body.description,
        sellerIdentifier: req.body.sellerIdentifier,
        productCategory: req.body.productCategory,
        image: req.body.image
      };
      return products;
    }
  }]);

  return productsBodyModels;
}();

var _default = productsBodyModels;
exports["default"] = _default;