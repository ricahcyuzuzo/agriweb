"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _authenticate = _interopRequireDefault(require("../../helpers/authenticate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserBodyModels = /*#__PURE__*/function () {
  function UserBodyModels() {
    _classCallCheck(this, UserBodyModels);
  }

  _createClass(UserBodyModels, null, [{
    key: "userSignupBody",
    value: function userSignupBody(req) {
      var user = {
        fullNames: req.body.fullNames,
        phoneNumber: req.body.phoneNumber,
        password: _authenticate["default"].hashPassword(req.body.password),
        userType: req.body.userType
      };
      return user;
    }
  }, {
    key: "userSigninBody",
    value: function userSigninBody(req) {
      var user = {
        phoneNumber: req.body.phoneNumber,
        password: _authenticate["default"].hashPassword(req.body.password)
      };
      return user;
    }
  }]);

  return UserBodyModels;
}();

var _default = UserBodyModels;
exports["default"] = _default;