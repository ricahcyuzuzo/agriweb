"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dbConnections = _interopRequireDefault(require("./config/dbConnections.config"));

var _user = _interopRequireDefault(require("./routes/user.route"));

var _seller = _interopRequireDefault(require("./routes/seller.route"));

var _admin = _interopRequireDefault(require("./routes/admin.route"));

var _store = _interopRequireDefault(require("./routes/store.route"));

var _transaction = _interopRequireDefault(require("./routes/transaction.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 7000;
app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json({
  type: '*/*'
}));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  return next();
});
app.use('/api', _user["default"]);
app.use('/api', _seller["default"]);
app.use('/api', _admin["default"]);
app.use('/api', _store["default"]);
app.use('/api', _transaction["default"]);
app.get('/', function (req, res) {
  res.status(200).json({
    message: 'Welcome on Agri shop api',
    status: 200
  });
});
app.use(function (req, res) {
  res.type('json').status(404).json({
    message: '404 Endpoint not found',
    status: 404
  });
});
app.listen(port, console.log("The app is running at 127.0.0.1:".concat(port)));
(0, _dbConnections["default"])();
var _default = app;
exports["default"] = _default;