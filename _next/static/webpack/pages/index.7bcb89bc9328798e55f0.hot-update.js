webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation.js\");\n/* harmony import */ var _components_Masthead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Masthead */ \"./components/Masthead.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/About */ \"./components/About.js\");\n/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Services */ \"./components/Services.js\");\n/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Gallery */ \"./components/Gallery.js\");\n/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CallToAction */ \"./components/CallToAction.js\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Contact */ \"./components/Contact.js\");\n/* harmony import */ var _components_Franchise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Franchise */ \"./components/Franchise.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_ShuffleMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ShuffleMenu */ \"./components/ShuffleMenu.js\");\n/* harmony import */ var _components_Location__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Location */ \"./components/Location.js\");\n/* harmony import */ var _components_Job__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Job */ \"./components/Job.js\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../api/api */ \"./api/api.js\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_api_api__WEBPACK_IMPORTED_MODULE_14__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar HomePage = /*#__PURE__*/function (_React$Component) {\n  _inherits(HomePage, _React$Component);\n\n  var _super = _createSuper(HomePage);\n\n  function HomePage(props) {\n    var _this;\n\n    _classCallCheck(this, HomePage);\n\n    _this = _super.call(this);\n    _this.state = {\n      store: _api_api__WEBPACK_IMPORTED_MODULE_14___default.a.get_full_site_data()\n    };\n    return _this;\n  }\n\n  _createClass(HomePage, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Masthead__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        data: this.props.data\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ShuffleMenu__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        data: this.props.data\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        data: this.props.data\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Gallery__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        data: store\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Job__WEBPACK_IMPORTED_MODULE_13__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Franchise__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null)));\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwic3RhdGUiLCJzdG9yZSIsImFwaSIsImdldF9mdWxsX3NpdGVfZGF0YSIsImRhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUEsUTs7Ozs7QUFDRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBR0MsZ0RBQUcsQ0FBQ0Msa0JBQUo7QUFEQyxLQUFiO0FBRmU7QUFLbEI7Ozs7NkJBQ087QUFDSiwwQkFDSSxxSUFDQSwyREFBQywwREFBRCxxQkFDQSwyREFBQyw4REFBRCxPQURBLGVBRUEsMkRBQUMsNERBQUQ7QUFBVSxZQUFJLEVBQUcsS0FBS0osS0FBTCxDQUFXSztBQUE1QixRQUZBLGVBR0EsMkRBQUMseURBQUQsT0FIQSxlQUlBLDJEQUFDLGdFQUFEO0FBQWEsWUFBSSxFQUFHLEtBQUtMLEtBQUwsQ0FBV0s7QUFBL0IsUUFKQSxlQUtBLDJEQUFDLDZEQUFEO0FBQVUsWUFBSSxFQUFHLEtBQUtMLEtBQUwsQ0FBV0s7QUFBNUIsUUFMQSxlQU9BLDJEQUFDLDJEQUFEO0FBQVMsWUFBSSxFQUFHSDtBQUFoQixRQVBBLGVBU0EsMkRBQUMsMkRBQUQsT0FUQSxlQVdBLDJEQUFDLHdEQUFELE9BWEEsZUFZQSwyREFBQyw2REFBRCxPQVpBLGVBYUEsMkRBQUMsMkRBQUQsT0FiQSxDQURBLENBREo7QUFtQkg7Ozs7RUEzQmtCSSw0Q0FBSyxDQUFDQyxTOztBQThCZFIsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgTWFzdGhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9NYXN0aGVhZCc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BYm91dCc7XG5pbXBvcnQgU2VydmljZXMgZnJvbSAnLi4vY29tcG9uZW50cy9TZXJ2aWNlcyc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuLi9jb21wb25lbnRzL0dhbGxlcnknO1xuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0NhbGxUb0FjdGlvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3QnO1xuaW1wb3J0IEZyYW5jaGlzZSBmcm9tICcuLi9jb21wb25lbnRzL0ZyYW5jaGlzZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBTaHVmZmxlTWVudSBmcm9tICcuLi9jb21wb25lbnRzL1NodWZmbGVNZW51JztcbmltcG9ydCBMb2NhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0xvY2F0aW9uJztcbmltcG9ydCBKb2IgZnJvbSAnLi4vY29tcG9uZW50cy9Kb2InO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpJztcblxuXG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0b3JlIDogYXBpLmdldF9mdWxsX3NpdGVfZGF0YSgpXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICAgICAgPE1hc3RoZWFkIGRhdGE9eyB0aGlzLnByb3BzLmRhdGEgfSAvPlxuICAgICAgICAgICAgPEFib3V0IC8+XG4gICAgICAgICAgICA8U2h1ZmZsZU1lbnUgZGF0YT17IHRoaXMucHJvcHMuZGF0YSB9IC8+XG4gICAgICAgICAgICA8TG9jYXRpb24gZGF0YT17IHRoaXMucHJvcHMuZGF0YSB9IC8+XG4gICAgICAgICAgICB7LyogPFNlcnZpY2VzIC8+ICovfVxuICAgICAgICAgICAgPEdhbGxlcnkgZGF0YT17IHN0b3JlIH0gLz5cbiAgICAgICAgICAgIHsvKiA8R2FsbGVyeSBkYXRhPXsgdGhpcy5wcm9wcy5kYXRhIH0gLz4gKi99XG4gICAgICAgICAgICA8Q29udGFjdCAvPlxuICAgICAgICAgICAgey8qIDxDYWxsVG9BY3Rpb24gLz4gKi99XG4gICAgICAgICAgICA8Sm9iIC8+XG4gICAgICAgICAgICA8RnJhbmNoaXNlIC8+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})