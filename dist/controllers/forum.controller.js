"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _forum = _interopRequireDefault(require("../models/db/forum.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ForumController = /*#__PURE__*/function () {
  function ForumController() {
    _classCallCheck(this, ForumController);
  }

  _createClass(ForumController, null, [{
    key: "AddTopic",
    value: function AddTopic(req, res) {
      var _req$body = req.body,
          topic = _req$body.topic,
          names = _req$body.names,
          description = _req$body.description;
      var Topic = new _forum["default"]({
        _id: new _mongoose["default"].Types.ObjectId(),
        topic: topic,
        description: description,
        names: names,
        comment: []
      });
      Topic.save().then(function () {
        res.status(201).json({
          status: 201,
          message: 'Topic Posted successful'
        });
      });
    }
  }, {
    key: "addComment",
    value: function addComment(req, res) {
      var topic_id = req.query.topic_id;
      var _req$body2 = req.body,
          names = _req$body2.names,
          message = _req$body2.message;

      _forum["default"].findOneAndUpdate({
        _id: topic_id
      }, {
        $push: {
          comment: {
            sender: names,
            message: message
          }
        }
      }, function (err, docs) {
        res.status(201).json({
          status: 201,
          message: 'Comment Added'
        });
      });
    }
  }, {
    key: "getAllTopics",
    value: function getAllTopics(req, res) {
      _forum["default"].find().exec().then(function (docs) {
        res.status(200).json({
          status: 200,
          data: docs
        });
      });
    }
  }, {
    key: "getOneTopic",
    value: function getOneTopic(req, res) {
      _forum["default"].findOne({
        _id: req.query.topic_id
      }).exec().then(function (docs) {
        res.status(200).json({
          status: 200,
          data: docs
        });
      });
    }
  }]);

  return ForumController;
}();

var _default = ForumController;
exports["default"] = _default;