"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _express = _interopRequireDefault(require("express"));
var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var app = (0, _express.default)();
var hbs = _expressHandlebars.default.create({ defaultLayout: 'main' });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (_, res) {
  res.render('home');
});var _default =

app;exports.default = _default;
//# sourceMappingURL=server.js.map