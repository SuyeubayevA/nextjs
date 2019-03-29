webpackHotUpdate(1,{

/***/ "./components/Body/index.js":
/*!**********************************!*\
  !*** ./components/Body/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./components/Body/styles.js");







var _jsxFileName = "/Users/aidar/Desktop/Work/1/nextjs/components/Body/index.js";

// import Link from 'next/link'


var Body =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Body, _React$Component);

  function Body() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Body);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Body).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changeCategoryField", function () {
      _this.setState({
        category: !_this.state.category
      });
    });

    _this.state = {
      category: false
    };
    _this.changeCategoryField = _this.changeCategoryField.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Body, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["BodyStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["LeftSideMenu"], {
        onClick: this.changeCategoryField,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["MenuTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "\u0410\u041A\u0426\u0418\u0418 \u0418 \u041F\u0420\u0415\u0414\u041B\u041E\u0416\u0415\u041D\u0418\u042F"), this.state.category ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MenuUl, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MenuLiF, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "\u0422\u0415\u041B\u0415\u0424\u041E\u041D\u042B \u0418 \u0410\u041A\u0421\u0415\u0421\u0421\u0423\u0410\u0420\u042B"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MenuLi, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MenuLi, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MenuLi, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MenuLi, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B")) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["Items"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["Banner"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["Title"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "\u042D\u041B\u0415\u041A\u0422\u0420\u041E\u041D\u0418\u041A\u0410"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Apple AirPods ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), "\u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 25%"))));
    }
  }]);

  return Body;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./components/Body/styles.js":
/*!***********************************!*\
  !*** ./components/Body/styles.js ***!
  \***********************************/
/*! exports provided: BodyStyle, LeftSideMenu, MenuTitle, MenuTitleItem, MenuUl, MenuLiF, MenuLi, Items, Banner, Title, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyStyle", function() { return BodyStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSideMenu", function() { return LeftSideMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTitle", function() { return MenuTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTitleItem", function() { return MenuTitleItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuUl", function() { return MenuUl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLiF", function() { return MenuLiF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLi", function() { return MenuLi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    box-sizing:border-box;\n    height: 200px;\n    width: 100%;\n    border-radius: 10px;\n    font-size:25px;\n    font-family: 'Roboto', sans-serif;\n    background: gray;\n    color: white;\n    padding: 25px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-family: 'Roboto', sans-serif;\n    font-weight: bold;\n    font-size: 25px;\n    margin: 20px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    flex-direction: column;\n    height: 350px;\n    width: 100%;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 1500px;\n    width: 650px;\n    margin-top: 50px;\n    border-radius:10px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 8px 16px;\n    border-bottom: 1px solid #e5e5e5;\n\n    &:hover {\n        background-color: #e5e5e5;\n        color: white;\n    }\n\n    &:last-child{\n        border-bottom: none;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 8px 16px;\n    border-bottom: 1px solid #e5e5e5;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    top:45px;\n    right:0px;\n    width: 100%;\n    background-color: white;\n    font-weight:bold;\n    position: absolute;\n\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 24px;\n    font-family: 'Roboto', san-serif;\n    font-weight: bold;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 24px;\n    font-family: 'Roboto', san-serif;\n    color: #3572b2;\n    font-weight: bold;\n    width:178px;\n    height:18px;\n    background-color:#ff3232 ;\n    padding:12px;\n    border-radius:5px;\n\n    &:before{\n        content:\"\";\n        position:absolute;\n        width:0px;\n        height:0px;\n        border: 10px solid;\n        border-color: white transparent transparent transparent;\n        right:6px;\n        top:18px;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: red;\n    min-height: 100px;\n    width: 250px;\n    border-radius: 10px;\n    position: relative;\n    display: inline-block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    background: #f2f3f4;\n    padding:0 110px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var BodyStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "BodyStyle"
})(_templateObject()); //// LEFT SIDE DROP DOWN MENU

var LeftSideMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "LeftSideMenu"
})(_templateObject2());
var MenuTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "MenuTitle"
})(_templateObject3());
var MenuTitleItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "MenuTitleItem"
})(_templateObject4());
var MenuUl = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.attrs({
  className: "MenuUl"
})(_templateObject5());
var MenuLiF = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.attrs({
  className: "MenuLiF"
})(_templateObject6());
var MenuLi = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.attrs({
  className: "MenuLi"
})(_templateObject7()); //// RIGHT SIDE BODY

var Items = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "Items"
})(_templateObject8());
var Banner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "Banner"
})(_templateObject9());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "Title"
})(_templateObject10());
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "Image"
})(_templateObject11());

/***/ })

})
//# sourceMappingURL=1.de82ad9a385ff0c5cdd9.hot-update.js.map