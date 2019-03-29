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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./components/Body/styles.js");






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
    _this.state = {
      displayMenu: false
    };
    _this.showDropdownMenu = _this.showDropdownMenu.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.hideDropdownMenu = _this.hideDropdownMenu.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Body, [{
    key: "showDropdownMenu",
    value: function showDropdownMenu(event) {
      var _this2 = this;

      event.preventDefault();
      this.setState({
        displayMenu: true
      }, function () {
        document.addEventListener('click', _this2.hideDropdownMenu);
      });
    }
  }, {
    key: "hideDropdownMenu",
    value: function hideDropdownMenu() {
      var _this3 = this;

      this.setState({
        displayMenu: false
      }, function () {
        document.removeEventListener('click', _this3.hideDropdownMenu);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["BodyStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["LeftSideMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuTitle"], {
        onClick: this.showDropdownMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\u0410\u041A\u0426\u0418\u0418 \u0418 \u041F\u0420\u0415\u0414\u041B\u041E\u0416\u0415\u041D\u0418\u042F"), this.state.displayMenu ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuUl"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLiF"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "\u0422\u0415\u041B\u0415\u0424\u041E\u041D\u042B \u0418 \u0410\u041A\u0421\u0415\u0421\u0421\u0423\u0410\u0420\u042B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLiF"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "\u0422\u0415\u041B\u0415\u0424\u041E\u041D\u042B \u0418 \u0410\u041A\u0421\u0415\u0421\u0421\u0423\u0410\u0420\u042B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLiF"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\u0422\u0415\u041B\u0415\u0424\u041E\u041D\u042B \u0418 \u0410\u041A\u0421\u0415\u0421\u0421\u0423\u0410\u0420\u042B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["MenuLi"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B")) : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Items"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Banner"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Title"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "\u042D\u041B\u0415\u041A\u0422\u0420\u041E\u041D\u0418\u041A\u0410"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Image"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Apple AirPods ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), "\u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 25%"))));
    }
  }]);

  return Body;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ })

})
//# sourceMappingURL=1.3a66a79c6cb168899d73.hot-update.js.map