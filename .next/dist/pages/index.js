"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx\\style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function (_React$Component) {
  (0, _inherits3.default)(HomePage, _React$Component);

  function HomePage() {
    (0, _classCallCheck3.default)(this, HomePage);

    return (0, _possibleConstructorReturn3.default)(this, (HomePage.__proto__ || (0, _getPrototypeOf2.default)(HomePage)).apply(this, arguments));
  }

  (0, _createClass3.default)(HomePage, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("section", {
        className: "jsx-4123919431"
      }, _react2.default.createElement(_style2.default, {
        styleId: "4123919431",
        css: ["section.jsx-4123919431{position:absolute;top:0;bottom:0;left:0;right:0;}", ".menu.jsx-4123919431{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;top:0;right:10px;width:50%;}", ".menu.jsx-4123919431 p.jsx-4123919431{-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1;-webkit-flex-basis:25%;-ms-flex-basis:25%;flex-basis:25%;text-align:center;}", ".menu.jsx-4123919431 p.jsx-4123919431:hover{border:1px solid black;border-radius:10px;background:black;color:white;}", ".container.jsx-4123919431{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:50%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}", ".bg-img.jsx-4123919431{display:block;width:100%;height:100%;background:url(\"./static/IMG_3095.JPG\") no-repeat center;background-size:cover;z-index:-100;}", ".info.jsx-4123919431{text-align:center;-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1;}"]
      }), _react2.default.createElement("div", {
        className: "jsx-4123919431" + " " + "container"
      }, _react2.default.createElement("div", {
        className: "jsx-4123919431" + " " + "menu"
      }, _react2.default.createElement("p", {
        className: "jsx-4123919431"
      }, "Home"), _react2.default.createElement("p", {
        className: "jsx-4123919431"
      }, "About"), _react2.default.createElement("p", {
        className: "jsx-4123919431"
      }, "Collection"), _react2.default.createElement("p", {
        className: "jsx-4123919431"
      }, "Blog")), _react2.default.createElement("div", { style: {
          width: '100%',
          height: '100%',
          flexGrow: 1
        }, className: "jsx-4123919431"
      }, _react2.default.createElement("div", {
        className: "jsx-4123919431" + " " + "bg-img"
      })), _react2.default.createElement("div", {
        className: "jsx-4123919431" + " " + "info"
      }, _react2.default.createElement("p", {
        className: "jsx-4123919431"
      }, "Nguyen Thanh Mai"), _react2.default.createElement("p", {
        className: "jsx-4123919431"
      }, "26/10/1996"), _react2.default.createElement("p", {
        className: "jsx-4123919431"
      }, "74-60-90"), _react2.default.createElement("p", {
        className: "jsx-4123919431"
      }, "Yen Phong, Bac Ninh"), _react2.default.createElement("p", {
        className: "jsx-4123919431"
      }, "Japanese - Hanu"))));
    }
  }]);

  return HomePage;
}(_react2.default.Component);

exports.default = HomePage;