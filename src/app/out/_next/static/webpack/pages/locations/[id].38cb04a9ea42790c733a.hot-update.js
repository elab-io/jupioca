webpackHotUpdate_N_E("pages/locations/[id]",{

/***/ "./pages/locations/[id]/index.js":
/*!***************************************!*\
  !*** ./pages/locations/[id]/index.js ***!
  \***************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ \"./node_modules/html-react-parser/index.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_StoreNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/StoreNavigation */ \"./components/StoreNavigation.js\");\n/* harmony import */ var _components_Masthead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Masthead */ \"./components/Masthead.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/About */ \"./components/About.js\");\n/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Services */ \"./components/Services.js\");\n/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Gallery */ \"./components/Gallery.js\");\n/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/CallToAction */ \"./components/CallToAction.js\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Contact */ \"./components/Contact.js\");\n/* harmony import */ var _components_Franchise__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/Franchise */ \"./components/Franchise.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_ShuffleMenu2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/ShuffleMenu2 */ \"./components/ShuffleMenu2.js\");\n/* harmony import */ var _components_ShuffleMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/ShuffleMenu */ \"./components/ShuffleMenu.js\");\n/* harmony import */ var _components_Location__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/Location */ \"./components/Location.js\");\n/* harmony import */ var _components_Job__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/Job */ \"./components/Job.js\");\n/* harmony import */ var _components_StoreInfo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/StoreInfo */ \"./components/StoreInfo.js\");\n/* harmony import */ var _components_AppInfo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../components/AppInfo */ \"./components/AppInfo.js\");\n/* harmony import */ var _data_moge_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../data/moge.json */ \"./data/moge.json\");\nvar _data_moge_json__WEBPACK_IMPORTED_MODULE_21___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/moge.json */ \"./data/moge.json\", 1);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_22__);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import local data\n\n\n\n\nfunction Store(_ref) {\n  _s();\n\n  var store = _ref.store,\n      site_data = _ref.site_data;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id; // console.log(site_data);\n\n  function UpdateMasterHeadBackground() {\n    if (store.store_pic) {\n      var master_head = document.getElementsByClassName('masthead')[0];\n      master_head.style.backgroundImage = \"url(\" + store.store_pic + \")\";\n    }\n  }\n\n  function MakeNavScrolledEffect() {\n    var main_nav = document.getElementById('mainNav');\n    main_nav.style.backgroundColor = \"#fff\";\n    var nav_items = document.querySelectorAll(\".navbar-nav .nav-item a\");\n\n    for (var i = 0; i < nav_items.length; i++) {\n      nav_items[i].style.color = \"black\";\n    }\n  }\n\n  function AddOperationInfo() {\n    var about_section = document.getElementById('about');\n\n    if (about_section) {\n      var hour_list = Object.keys(store.hours).map(function (index) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: index\n        }, index, \": \", store.hours[index]);\n      });\n      var store_description = null;\n\n      if (store.description) {\n        console.log(store.description);\n        store_description = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"description\"\n        }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(store.description));\n      }\n\n      var operate_hours = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"hours\"\n      }, \"Open Hours:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"hours\"\n      }, hour_list), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null));\n      var store_address = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"storeAddress\"\n      }, store.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), store.address, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), store.phone, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null));\n      var socials = null;\n\n      if (Object.keys(store.social).length > 0) {\n        var social_list = Object.keys(store.social).map(function (index) {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n            key: index\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n            target: \"_blank\",\n            \"aria-label\": \"Link to social media\",\n            href: store.social[index]\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n            className: \"fab fa-\" + index\n          })));\n        });\n        socials = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n          className: \"socials-links\"\n        }, social_list);\n      }\n\n      var order_now = null;\n\n      if (store.order_now) {\n        order_now = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: store.order,\n          rel: \"noopener\",\n          className: \"btn btn-primary btn-lg\",\n          role: \"button\"\n        }, \"Order Now\");\n      }\n\n      var content_markup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"text-dark\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-12 text-center\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: \"text-dark mt-0\"\n      }, \"About\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", {\n        className: \"divider dark my-4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-lg-6 col-md-12 col-sm-12\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"/img/moge/about-us.jpg\",\n        alt: \"About Us\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-lg-6 col-md-12 col-sm-12 text-dark text-left about-text\"\n      }, store_description, store_address, operate_hours, socials, order_now))))));\n      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(content_markup, document.getElementById('about'));\n    }\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // UpdateMasterHeadBackground();\n    // AddOperationInfo();\n    MakeNavScrolledEffect();\n    return function () {// Clean up the subscription\n      // subscription.unsubscribe();\n    };\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StoreNavigation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StoreInfo__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n    data: store\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ShuffleMenu__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n    data: store\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Job__WEBPACK_IMPORTED_MODULE_18__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Franchise__WEBPACK_IMPORTED_MODULE_13__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n    data: site_data\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_14__[\"default\"], null)));\n} // See: https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation\n// This function gets called at build time\n\n\n_s(Store, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Store;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Store);\n\nvar _c;\n\n$RefreshReg$(_c, \"Store\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9jYXRpb25zLy9pbmRleC5qcz9jOTBiIl0sIm5hbWVzIjpbIlN0b3JlIiwic3RvcmUiLCJzaXRlX2RhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiVXBkYXRlTWFzdGVySGVhZEJhY2tncm91bmQiLCJzdG9yZV9waWMiLCJtYXN0ZXJfaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiTWFrZU5hdlNjcm9sbGVkRWZmZWN0IiwibWFpbl9uYXYiLCJnZXRFbGVtZW50QnlJZCIsImJhY2tncm91bmRDb2xvciIsIm5hdl9pdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiY29sb3IiLCJBZGRPcGVyYXRpb25JbmZvIiwiYWJvdXRfc2VjdGlvbiIsImhvdXJfbGlzdCIsIk9iamVjdCIsImtleXMiLCJob3VycyIsIm1hcCIsImluZGV4Iiwic3RvcmVfZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZSIsIm9wZXJhdGVfaG91cnMiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdG9yZV9hZGRyZXNzIiwidGl0bGUiLCJhZGRyZXNzIiwicGhvbmUiLCJzb2NpYWxzIiwic29jaWFsIiwic29jaWFsX2xpc3QiLCJvcmRlcl9ub3ciLCJvcmRlciIsImNvbnRlbnRfbWFya3VwIiwiUmVhY3RET00iLCJyZW5kZXIiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFFQTs7QUFJQSxTQUFTQSxL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QUNDLE1BQVQsQ0FDRUYsY0FERixFQUVFdkMsUUFBUSxDQUFDTSxjQUFULENBQXdCLE9BQXhCLENBRkY7QUFJRDtBQUlGOztBQUVEb0MseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQTtBQUNBdEMseUJBQXFCO0FBQ3JCLFdBQU8sWUFBTSxDQUNYO0FBQ0E7QUFDRCxLQUhEO0FBSUQsR0FSUSxDQUFUO0FBVUEsc0JBQ0UscUlBQ0ksMkRBQUMsMERBQUQscUJBQ0EsMkRBQUMsbUVBQUQsT0FEQSxlQUlBLDJEQUFDLDhEQUFEO0FBQVcsUUFBSSxFQUFFYjtBQUFqQixJQUpBLGVBS0EsMkRBQUMsZ0VBQUQ7QUFBYSxRQUFJLEVBQUdBO0FBQXBCLElBTEEsZUFVQSwyREFBQyw0REFBRCxPQVZBLGVBWUEsMkRBQUMsd0RBQUQsT0FaQSxlQWFBLDJEQUFDLDhEQUFELE9BYkEsZUFjQSwyREFBQyw2REFBRDtBQUFVLFFBQUksRUFBR0M7QUFBakIsSUFkQSxlQWVBLDJEQUFDLDJEQUFELE9BZkEsQ0FESixDQURGO0FBcUJELEMsQ0FHRDtBQUNBOzs7R0F6SlNGLEs7VUFDUUkscUQ7OztLQURSSixLOztBQW9MTUEsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9sb2NhdGlvbnMvW2lkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgU3RvcmVOYXZpZ2F0aW9uIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvU3RvcmVOYXZpZ2F0aW9uJztcbmltcG9ydCBNYXN0aGVhZCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL01hc3RoZWFkJztcbmltcG9ydCBBYm91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0Fib3V0JztcbmltcG9ydCBTZXJ2aWNlcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1NlcnZpY2VzJztcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvR2FsbGVyeSc7XG5pbXBvcnQgQ2FsbFRvQWN0aW9uIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQ2FsbFRvQWN0aW9uJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQ29udGFjdCc7XG5pbXBvcnQgRnJhbmNoaXNlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRnJhbmNoaXNlJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IFNodWZmbGVNZW51MiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1NodWZmbGVNZW51Mic7XG5pbXBvcnQgU2h1ZmZsZU1lbnUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9TaHVmZmxlTWVudSc7XG5pbXBvcnQgTG9jYXRpb24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Mb2NhdGlvbic7XG5pbXBvcnQgSm9iIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvSm9iJztcbmltcG9ydCBTdG9yZUluZm8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9TdG9yZUluZm8nO1xuaW1wb3J0IEFwcEluZm8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9BcHBJbmZvJztcblxuLy8gaW1wb3J0IGxvY2FsIGRhdGFcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uLy4uL2RhdGEvbW9nZS5qc29uJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vLi4vYXBpL2FwaSc7XG5pbXBvcnQgbmV4dCBmcm9tICduZXh0JztcblxudmFyIGxvY2F0aW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBTdG9yZSAoe3N0b3JlLCBzaXRlX2RhdGF9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxuLy8gY29uc29sZS5sb2coc2l0ZV9kYXRhKTtcbiAgZnVuY3Rpb24gVXBkYXRlTWFzdGVySGVhZEJhY2tncm91bmQoKSB7ICAgIFxuICAgIGlmKHN0b3JlLnN0b3JlX3BpYykge1xuICAgICAgdmFyIG1hc3Rlcl9oZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFzdGhlYWQnKVswXTtcbiAgICAgIG1hc3Rlcl9oZWFkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgc3RvcmUuc3RvcmVfcGljICsgXCIpXCI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gTWFrZU5hdlNjcm9sbGVkRWZmZWN0KCkge1xuICAgIHZhciBtYWluX25hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTmF2Jyk7XG4gICAgbWFpbl9uYXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmXCI7XG4gICAgXG4gICAgdmFyIG5hdl9pdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2YmFyLW5hdiAubmF2LWl0ZW0gYVwiKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmF2X2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuYXZfaXRlbXNbaV0uc3R5bGUuY29sb3IgPVwiYmxhY2tcIjtcbiAgICB9XG4gIH1cblxuXG4gIGZ1bmN0aW9uIEFkZE9wZXJhdGlvbkluZm8oKSB7XG4gICAgXG4gICAgdmFyIGFib3V0X3NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcbiAgIFxuICAgIGlmKGFib3V0X3NlY3Rpb24pIHtcbiAgICAgIGxldCBob3VyX2xpc3QgPSBPYmplY3Qua2V5cyhzdG9yZS5ob3VycykubWFwKChpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57aW5kZXh9OiB7c3RvcmUuaG91cnNbaW5kZXhdfTwvbGk+XG4gICAgICAgIClcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgc3RvcmVfZGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgaWYoc3RvcmUuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coc3RvcmUuZGVzY3JpcHRpb24pO1xuICAgICAgICBzdG9yZV9kZXNjcmlwdGlvbiA9IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICB7IHBhcnNlKHN0b3JlLmRlc2NyaXB0aW9uKSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcGVyYXRlX2hvdXJzID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdXJzXCI+XG4gICAgICAgICAgT3BlbiBIb3Vyczo8YnIgLz5cbiAgICAgICAgICB7IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcImhvdXJzXCJ9LCBob3VyX2xpc3QpIH1cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuXG4gICAgICB2YXIgc3RvcmVfYWRkcmVzcyA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yZUFkZHJlc3NcIj5cbiAgICAgICAgICB7c3RvcmUudGl0bGV9PGJyIC8+XG4gICAgICAgICAge3N0b3JlLmFkZHJlc3N9PGJyIC8+XG4gICAgICAgICAge3N0b3JlLnBob25lfTxiciAvPjxiciAvPlxuICAgICAgICA8L2Rpdj4gICBcbiAgICAgICk7XG5cbiAgICAgIHZhciBzb2NpYWxzID0gbnVsbDtcbiAgICAgIGlmKE9iamVjdC5rZXlzKHN0b3JlLnNvY2lhbCkubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgc29jaWFsX2xpc3QgPSBPYmplY3Qua2V5cyhzdG9yZS5zb2NpYWwpLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PjxhIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJMaW5rIHRvIHNvY2lhbCBtZWRpYVwiIGhyZWY9e3N0b3JlLnNvY2lhbFtpbmRleF19PjxpIGNsYXNzTmFtZT17XCJmYWIgZmEtXCIgKyBpbmRleH0+PC9pPjwvYT48L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICAgICAgc29jaWFscyA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcInNvY2lhbHMtbGlua3NcIn0sIHNvY2lhbF9saXN0KTtcbiAgICAgIH0gXG5cbiAgICAgIHZhciBvcmRlcl9ub3cgPSBudWxsO1xuICAgICAgaWYoc3RvcmUub3JkZXJfbm93KSB7XG4gICAgICAgIG9yZGVyX25vdyA9IChcbiAgICAgICAgICA8YSBocmVmPXtzdG9yZS5vcmRlcn0gcmVsPVwibm9vcGVuZXJcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgcm9sZT1cImJ1dHRvblwiPk9yZGVyIE5vdzwvYT5cbiAgICAgICAgKVxuICAgICAgfVxuXG5cblxuICAgICAgY29uc3QgY29udGVudF9tYXJrdXAgPSAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgbXQtMFwiPkFib3V0PC9oMj5cbiAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXIgZGFyayBteS00XCIgLz5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvbW9nZS9hYm91dC11cy5qcGdcIiBhbHQ9XCJBYm91dCBVc1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC0xMiBjb2wtc20tMTIgdGV4dC1kYXJrIHRleHQtbGVmdCBhYm91dC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICB7c3RvcmVfZGVzY3JpcHRpb259IFxuICAgICAgICAgICAgICAgICAge3N0b3JlX2FkZHJlc3N9ICAgIFxuICAgICAgICAgICAgICAgICAge29wZXJhdGVfaG91cnN9XG4gICAgICAgICAgICAgICAgICB7c29jaWFsc31cbiAgICAgICAgICAgICAgICAgIHtvcmRlcl9ub3d9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvPlxuICAgICAgKTtcblxuXG4gICAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgIGNvbnRlbnRfbWFya3VwLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBcblxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBVcGRhdGVNYXN0ZXJIZWFkQmFja2dyb3VuZCgpO1xuICAgIC8vIEFkZE9wZXJhdGlvbkluZm8oKTtcbiAgICBNYWtlTmF2U2Nyb2xsZWRFZmZlY3QoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gQ2xlYW4gdXAgdGhlIHN1YnNjcmlwdGlvblxuICAgICAgLy8gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICA8U3RvcmVOYXZpZ2F0aW9uIC8+XG4gICAgICAgIHsvKiA8TWFzdGhlYWQgLz4gKi99XG4gICAgICAgIHsvKiA8QWJvdXQgLz4gKi99XG4gICAgICAgIDxTdG9yZUluZm8gZGF0YT17c3RvcmV9IC8+XG4gICAgICAgIDxTaHVmZmxlTWVudSBkYXRhPXsgc3RvcmUgfSAvPlxuICAgICAgICB7LyogPExvY2F0aW9uIGRhdGE9eyB0aGlzLnByb3BzLmRhdGEgfSAvPiAqL31cbiAgICAgICAgey8qIDxTZXJ2aWNlcyAvPiAqL31cbiAgICAgICAgey8qIDxHYWxsZXJ5IGRhdGE9eyB0aGlzLnByb3BzLmRhdGEgfSAvPiAqL31cbiAgICAgICAgey8qIDxBcHBJbmZvIC8+ICovfVxuICAgICAgICA8Q29udGFjdCAvPlxuICAgICAgICB7LyogPENhbGxUb0FjdGlvbiAvPiAqL31cbiAgICAgICAgPEpvYiAvPlxuICAgICAgICA8RnJhbmNoaXNlIC8+XG4gICAgICAgIDxMb2NhdGlvbiBkYXRhPXsgc2l0ZV9kYXRhIH0gLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5cbi8vIFNlZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYmFzaWMtZmVhdHVyZXMvZGF0YS1mZXRjaGluZyNnZXRzdGF0aWNwYXRocy1zdGF0aWMtZ2VuZXJhdGlvblxuLy8gVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhdCBidWlsZCB0aW1lXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgbG9jYXRpb25zID0gYXBpLmdldF9zdG9yZV9sb2NhdGlvbnMoKTtcbiAgICBjb25zdCBwYXRocyA9IE9iamVjdC5rZXlzKGxvY2F0aW9ucykubWFwKChrZXkpID0+ICh7XG4gICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IGxvY2F0aW9uc1trZXldLmlkIH0sXG4gICAgICB9KSlcbiAgICBcbiAgICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cbiAgICAvLyB7IGZhbGxiYWNrOiBmYWxzZSB9IG1lYW5zIG90aGVyIHJvdXRlcyBzaG91bGQgNDA0LlxuICAgIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfVxuICB9XG4gIFxuXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xuICAgIGxvY2F0aW9ucyA9IGFwaS5nZXRfc3RvcmVfbG9jYXRpb25zKCk7XG4gICAgY29uc3Qgc3RvcmVfaWQgPSBPYmplY3Qua2V5cyhsb2NhdGlvbnMpXG4gICAgICAgIC5maWx0ZXIoKGtleSk9PiB7cmV0dXJuIGxvY2F0aW9uc1trZXldLmlkID09IHBhcmFtcy5pZH0pWzBdO1xuICBcbiAgICB2YXIgc3RvcmUgPSBsb2NhdGlvbnNbc3RvcmVfaWRdO1xuICAgIHN0b3JlLm1lbnUgPSAoc3RvcmUubWVudSkgPyBzdG9yZS5tZW51IDogYXBpLmdldF9kZWZhdWx0X21lbnUoKTtcbiAgICB2YXIgdGVzdCA9IFwiaGVsbG8gd29ybGRcIjsgXG4gICAgdmFyIHNpdGVfZGF0YT0gYXBpLmdldF9mdWxsX3NpdGVfZGF0YSgpOyAgICBcbiAgICBcbiAgICByZXR1cm4geyBwcm9wczogeyBzdG9yZTogc3RvcmUsIHNpdGVfZGF0YTogc2l0ZV9kYXRhIH0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/locations/[id]/index.js\n");

/***/ })

})