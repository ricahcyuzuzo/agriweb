"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _forum = _interopRequireDefault(require("../controllers/forum.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = (0, _express["default"])();
routes.post('/post_topic', _forum["default"].AddTopic);
routes.get('/all_posts', _forum["default"].getAllTopics);
routes.get('/one_topic', _forum["default"].getOneTopic);
routes.post('/comment', _forum["default"].addComment);
var _default = routes;
exports["default"] = _default;