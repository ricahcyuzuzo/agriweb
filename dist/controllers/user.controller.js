"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _authenticate = _interopRequireDefault(require("../helpers/authenticate"));

var _validateUser = _interopRequireDefault(require("../helpers/userValidations/validateUser"));

var _userBody = _interopRequireDefault(require("../models/body/userBody.model"));

var _users = _interopRequireDefault(require("../models/db/users.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController = /*#__PURE__*/function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: "signup",
    value: function signup(req, res) {
      var _req$body = req.body,
          fullNames = _req$body.fullNames,
          phoneNumber = _req$body.phoneNumber,
          password = _req$body.password,
          userType = _req$body.userType;

      var _validateUser$validat = _validateUser["default"].validateUserSignup(_userBody["default"].userSignupBody(req)),
          error = _validateUser$validat.error;

      if (error) {
        return res.status(400).json({
          status: 400,
          message: error.details[0].message.replace(/"/g, '')
        });
      }

      if (_validateUser["default"].validatePassword(password) === true) {
        _users["default"].find({
          phoneNumber: phoneNumber
        }, function (err, docs) {
          if (docs.length) {
            return res.status(409).json({
              status: 409,
              message: "Phone number is already used, please try with another phone number"
            });
          } // console.log('posted')


          var hashedPassword = _authenticate["default"].hashPassword(password);

          var user = new _users["default"]({
            _id: new _mongoose["default"].Types.ObjectId(),
            fullNames: fullNames,
            phoneNumber: phoneNumber,
            password: hashedPassword,
            type: userType
          });
          user.save().then(function (result) {
            console.log(result);
          })["catch"](function (error) {
            console.log(error);
          });
          res.status(201).json({
            status: 201,
            message: 'You have been registed successfull',
            createdUser: user,
            token: _authenticate["default"].generateToken(user)
          });
        });
      } else {
        return res.status(400).json({
          status: 400,
          message: "Password incorrect"
        });
      }
    }
  }, {
    key: "signin",
    value: function signin(req, res) {
      var _req$body2 = req.body,
          phoneNumber = _req$body2.phoneNumber,
          password = _req$body2.password;

      var _validateUser$validat2 = _validateUser["default"].validateUserSignIn(_userBody["default"].userSigninBody(req)),
          error = _validateUser$validat2.error;

      if (error) {
        return res.status(400).json({
          status: 400,
          message: error.details[0].message.replace(/"/g, '')
        });
      }

      _users["default"].findOne({
        phoneNumber: phoneNumber
      }).exec().then(function (doc) {
        console.log('From Database: ', doc);

        var compare = _authenticate["default"].checkPassword(password, doc.password);

        if (compare) {
          if (doc) {
            res.status(201).json({
              status: 201,
              message: 'Logged In successful',
              token: _authenticate["default"].generateToken(doc),
              phone: doc.phoneNumber
            });
          } else {
            res.status(401).json({
              status: 401,
              message: 'Wrong Phone number or password'
            });
          }
        } else {
          res.status(401).json({
            status: 401,
            message: 'Wrong Phone number or password'
          });
        }
      })["catch"](function (err) {
        res.status(500).json({
          status: 500,
          error: err
        });
      });
    }
  }]);

  return UserController;
}();

var _default = UserController;
exports["default"] = _default;