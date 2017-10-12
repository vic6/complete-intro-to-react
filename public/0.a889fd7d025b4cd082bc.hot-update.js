webpackHotUpdate(0,{

/***/ "./js/ClientApp.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyTitle = function title(props) {
  // return ce(
  //   "div",
  //   null,
  //   ce("h1", { style: { color: props.color } }, props.title),
  // );
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      { style: { color: props.color } },
      props.title
    )
  );
};

var MyFirstComponent = function firstComponent() {
  return _react2.default.createElement(
    "div",
    { id: "my-first-component" },
    _react2.default.createElement(MyTitle, { title: "Pootie Tang", color: "Orange" }),
    _react2.default.createElement(MyTitle, { title: "Dae Dae the Clown", color: "Purple" }),
    _react2.default.createElement(MyTitle, { title: "Ice Cream VENGENCE", color: "Blue" }),
    _react2.default.createElement(MyTitle, { title: "Joe Dirt", color: "Brown" }),
    _react2.default.createElement(MyTitle, { title: "Two Brothers", color: "Pink" }),
    _react2.default.createElement(MyTitle, { title: "Jan Quadrant Vincent 16", color: "Grey" })
  );
};
(0, _reactDom.render)(_react2.default.createElement(MyFirstComponent, null), document.getElementById("app"));
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MyTitle, "MyTitle", "/Users/Victor/Development/front_end_masters/complete-intro-to-react/js/ClientApp.jsx");

  __REACT_HOT_LOADER__.register(MyFirstComponent, "MyFirstComponent", "/Users/Victor/Development/front_end_masters/complete-intro-to-react/js/ClientApp.jsx");
}();

;

/***/ })

})