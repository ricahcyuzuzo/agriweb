"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _authenticate = _interopRequireDefault(require("../helpers/authenticate"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _message = _interopRequireDefault(require("../models/message.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController = /*#__PURE__*/function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: "getOne",
    value: function getOne(req, res) {
      var phone = req.query.phone;

      _user["default"].findOne({
        phoneNumber: phone
      }, function (err, docs) {
        res.status(200).json({
          status: 200,
          data: docs
        });
      });
    }
  }, {
    key: "signup",
    value: function signup(req, res) {
      var _req$body = req.body,
          fullNames = _req$body.fullNames,
          phoneNumber = _req$body.phoneNumber,
          password = _req$body.password,
          userType = _req$body.userType;

      _user["default"].find({
        phoneNumber: phoneNumber
      }, function (err, docs) {
        if (docs.length) {
          return res.status(409).json({
            status: 409,
            message: "Phone number is already used, please try with another phone number"
          });
        } // console.log('posted')


        var hashedPassword = _authenticate["default"].hashPassword(password);

        var user = new _user["default"]({
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
    }
  }, {
    key: "signin",
    value: function signin(req, res) {
      var _req$body2 = req.body,
          phoneNumber = _req$body2.phoneNumber,
          password = _req$body2.password;

      _user["default"].findOne({
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
      })["catch"](function () {
        res.status(401).json({
          status: 401,
          message: 'Wrong Phone number or password'
        });
      });
    }
  }, {
    key: "updateProfile",
    value: function updateProfile(req, res) {
      var phone = req.query.phone;
      var _req$body3 = req.body,
          idNumber = _req$body3.idNumber,
          image = _req$body3.image,
          address = _req$body3.address;

      _user["default"].findOneAndUpdate({
        phoneNumber: phone
      }, {
        idNumber: idNumber,
        image: image,
        address: {
          province: address.province,
          district: address.district,
          sector: address.sector,
          cell: address.cell,
          village: address.village
        }
      }).then(function () {
        res.status(201).json({
          status: 201,
          message: 'Profile Updated'
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "contactSeller",
    value: function contactSeller(req, res) {
      var phone = req.query.phone;
      var _req$body4 = req.body,
          clientPhone = _req$body4.clientPhone,
          names = _req$body4.names,
          message = _req$body4.message;
      var messages = new _message["default"]({
        _id: new _mongoose["default"].Types.ObjectId(),
        name: names,
        clientPhone: clientPhone,
        sellerPhone: phone,
        message: message
      });
      messages.save().then(function () {
        res.status(201).json({
          status: 201,
          message: 'Message sent successfully'
        });
      })["catch"](function (error) {
        res.status(500).json({
          status: 500,
          error: error
        });
      });
    }
  }, {
    key: "getAllMessages",
    value: function getAllMessages(req, res) {
      var phone = req.query.phone;
      console.log(phone);

      _message["default"].find({
        sellerPhone: phone
      }, function (err, docs) {
        res.status(200).json({
          status: 200,
          data: docs
        });
      });
    }
  }]);

  return UserController;
}();

var _default = UserController;
exports["default"] = _default;