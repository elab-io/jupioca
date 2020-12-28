webpackHotUpdate_N_E("pages/locations/[id]",{

/***/ "./pages/locations/[id]/index.js":
/*!***************************************!*\
  !*** ./pages/locations/[id]/index.js ***!
  \***************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ \"./node_modules/html-react-parser/index.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_StoreNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/StoreNavigation */ \"./components/StoreNavigation.js\");\n/* harmony import */ var _components_Masthead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Masthead */ \"./components/Masthead.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/About */ \"./components/About.js\");\n/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Services */ \"./components/Services.js\");\n/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Gallery */ \"./components/Gallery.js\");\n/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/CallToAction */ \"./components/CallToAction.js\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Contact */ \"./components/Contact.js\");\n/* harmony import */ var _components_Franchise__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/Franchise */ \"./components/Franchise.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_ShuffleMenu2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/ShuffleMenu2 */ \"./components/ShuffleMenu2.js\");\n/* harmony import */ var _components_ShuffleMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/ShuffleMenu */ \"./components/ShuffleMenu.js\");\n/* harmony import */ var _components_Location__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/Location */ \"./components/Location.js\");\n/* harmony import */ var _components_Job__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/Job */ \"./components/Job.js\");\n/* harmony import */ var _components_StoreInfo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/StoreInfo */ \"./components/StoreInfo.js\");\n/* harmony import */ var _components_AppInfo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../components/AppInfo */ \"./components/AppInfo.js\");\n/* harmony import */ var _data_moge_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../data/moge.json */ \"./data/moge.json\");\nvar _data_moge_json__WEBPACK_IMPORTED_MODULE_21___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/moge.json */ \"./data/moge.json\", 1);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_22__);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import local data\n\n\n\n\nfunction Store(_ref) {\n  _s();\n\n  var store = _ref.store,\n      site_data = _ref.site_data;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id;\n  console.log(store.meta);\n\n  function UpdateMasterHeadBackground() {\n    if (store.store_pic) {\n      var master_head = document.getElementsByClassName('masthead')[0];\n      master_head.style.backgroundImage = \"url(\" + store.store_pic + \")\";\n    }\n  }\n\n  function MakeNavScrolledEffect() {\n    var main_nav = document.getElementById('mainNav');\n    main_nav.style.backgroundColor = \"#fff\";\n    var nav_items = document.querySelectorAll(\".navbar-nav .nav-item a\");\n\n    for (var i = 0; i < nav_items.length; i++) {\n      nav_items[i].style.color = \"black\";\n    }\n  }\n\n  function AddMetadata() {\n    var head = document.getElementsByTagName('head')[0];\n\n    if (store.meta) {\n      Object.keys(store.meta).map(function (key) {\n        var meta = document.createElement('meta');\n        meta.setAttribute(key, store.meta[key]);\n        head.appendChild(meta);\n      });\n    }\n  }\n\n  function UpdatePageTitle() {\n    var title = document.getElementsByTagName('title')[0];\n    title.innerHTML = title.innerHTML + \" - \" + store.title;\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // UpdateMasterHeadBackground();\n    MakeNavScrolledEffect();\n    AddMetadata();\n    UpdatePageTitle();\n    return function () {// Clean up the subscription\n      // subscription.unsubscribe();\n    };\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StoreNavigation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StoreInfo__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n    data: store\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ShuffleMenu__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n    data: store\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppInfo__WEBPACK_IMPORTED_MODULE_20__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Job__WEBPACK_IMPORTED_MODULE_18__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Franchise__WEBPACK_IMPORTED_MODULE_13__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n    data: site_data\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_14__[\"default\"], null)));\n} // See: https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation\n// This function gets called at build time\n\n\n_s(Store, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Store;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Store);\n\nvar _c;\n\n$RefreshReg$(_c, \"Store\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9jYXRpb25zLy9pbmRleC5qcz9jOTBiIl0sIm5hbWVzIjpbIlN0b3JlIiwic3RvcmUiLCJzaXRlX2RhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsIm1ldGEiLCJVcGRhdGVNYXN0ZXJIZWFkQmFja2dyb3VuZCIsInN0b3JlX3BpYyIsIm1hc3Rlcl9oZWFkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJNYWtlTmF2U2Nyb2xsZWRFZmZlY3QiLCJtYWluX25hdiIsImdldEVsZW1lbnRCeUlkIiwiYmFja2dyb3VuZENvbG9yIiwibmF2X2l0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJjb2xvciIsIkFkZE1ldGFkYXRhIiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsIlVwZGF0ZVBhZ2VUaXRsZSIsInRpdGxlIiwiaW5uZXJIVE1MIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBRUE7O0FBSUEsU0FBU0EsS0FBVCxPQUFvQztBQUFBOztBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxTQUFZLFFBQVpBLFNBQVk7QUFDbEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURrQyxNQUUxQkMsRUFGMEIsR0FFbkJGLE1BQU0sQ0FBQ0csS0FGWSxDQUUxQkQsRUFGMEI7QUFHcENFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxLQUFLLENBQUNRLElBQWxCOztBQUNFLFdBQVNDLDBCQUFULEdBQXNDO0FBQ3BDLFFBQUdULEtBQUssQ0FBQ1UsU0FBVCxFQUFvQjtBQUNsQixVQUFJQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsVUFBaEMsRUFBNEMsQ0FBNUMsQ0FBbEI7QUFDQUYsaUJBQVcsQ0FBQ0csS0FBWixDQUFrQkMsZUFBbEIsR0FBb0MsU0FBU2YsS0FBSyxDQUFDVSxTQUFmLEdBQTJCLEdBQS9EO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTTSxxQkFBVCxHQUFpQztBQUMvQixRQUFJQyxRQUFRLEdBQUdMLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixTQUF4QixDQUFmO0FBQ0FELFlBQVEsQ0FBQ0gsS0FBVCxDQUFlSyxlQUFmLEdBQWlDLE1BQWpDO0FBRUEsUUFBSUMsU0FBUyxHQUFHUixRQUFRLENBQUNTLGdCQUFULENBQTBCLHlCQUExQixDQUFoQjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFNBQVMsQ0FBQ0csTUFBOUIsRUFBc0NELENBQUMsRUFBdkMsRUFBMkM7QUFDekNGLGVBQVMsQ0FBQ0UsQ0FBRCxDQUFULENBQWFSLEtBQWIsQ0FBbUJVLEtBQW5CLEdBQTBCLE9BQTFCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTQyxXQUFULEdBQXVCO0FBQ3JCLFFBQUlDLElBQUksR0FBR2QsUUFBUSxDQUFDZSxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUFYOztBQUVBLFFBQUczQixLQUFLLENBQUNRLElBQVQsRUFBZTtBQUNib0IsWUFBTSxDQUFDQyxJQUFQLENBQVk3QixLQUFLLENBQUNRLElBQWxCLEVBQXdCc0IsR0FBeEIsQ0FBNEIsVUFBQ0MsR0FBRCxFQUFPO0FBQ2pDLFlBQUl2QixJQUFJLEdBQUdJLFFBQVEsQ0FBQ29CLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDtBQUNBeEIsWUFBSSxDQUFDeUIsWUFBTCxDQUFrQkYsR0FBbEIsRUFBc0IvQixLQUFLLENBQUNRLElBQU4sQ0FBV3VCLEdBQVgsQ0FBdEI7QUFDQUwsWUFBSSxDQUFDUSxXQUFMLENBQWlCMUIsSUFBakI7QUFDRCxPQUpEO0FBS0Q7QUFDRjs7QUFNQSxXQUFTMkIsZUFBVCxHQUEyQjtBQUN6QixRQUFJQyxLQUFLLEdBQUd4QixRQUFRLENBQUNlLG9CQUFULENBQThCLE9BQTlCLEVBQXVDLENBQXZDLENBQVo7QUFDRFMsU0FBSyxDQUFDQyxTQUFOLEdBQWtCRCxLQUFLLENBQUNDLFNBQU4sR0FBbUIsS0FBbkIsR0FBMkJyQyxLQUFLLENBQUNvQyxLQUFuRDtBQUNBOztBQUNGRSx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBdEIseUJBQXFCO0FBQ3JCUyxlQUFXO0FBQ1hVLG1CQUFlO0FBQ2YsV0FBTyxZQUFNLENBQ1g7QUFDQTtBQUNELEtBSEQ7QUFJRCxHQVRRLENBQVQ7QUFXQSxzQkFDRSxxSUFDSSwyREFBQywwREFBRCxxQkFDQSwyREFBQyxtRUFBRCxPQURBLGVBSUEsMkRBQUMsOERBQUQ7QUFBVyxRQUFJLEVBQUVuQztBQUFqQixJQUpBLGVBS0EsMkRBQUMsZ0VBQUQ7QUFBYSxRQUFJLEVBQUdBO0FBQXBCLElBTEEsZUFTQSwyREFBQyw0REFBRCxPQVRBLGVBVUEsMkRBQUMsNERBQUQsT0FWQSxlQVlBLDJEQUFDLHdEQUFELE9BWkEsZUFhQSwyREFBQyw4REFBRCxPQWJBLGVBY0EsMkRBQUMsNkRBQUQ7QUFBVSxRQUFJLEVBQUdDO0FBQWpCLElBZEEsZUFlQSwyREFBQywyREFBRCxPQWZBLENBREosQ0FERjtBQXFCRCxDLENBR0Q7QUFDQTs7O0dBN0VTRixLO1VBQ1FJLHFEOzs7S0FEUkosSzs7QUF1R01BLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbG9jYXRpb25zL1tpZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgcGFyc2UgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFN0b3JlTmF2aWdhdGlvbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1N0b3JlTmF2aWdhdGlvbic7XG5pbXBvcnQgTWFzdGhlYWQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9NYXN0aGVhZCc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9BYm91dCc7XG5pbXBvcnQgU2VydmljZXMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9TZXJ2aWNlcyc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0dhbGxlcnknO1xuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0NhbGxUb0FjdGlvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0NvbnRhY3QnO1xuaW1wb3J0IEZyYW5jaGlzZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0ZyYW5jaGlzZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBTaHVmZmxlTWVudTIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9TaHVmZmxlTWVudTInO1xuaW1wb3J0IFNodWZmbGVNZW51IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvU2h1ZmZsZU1lbnUnO1xuaW1wb3J0IExvY2F0aW9uIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTG9jYXRpb24nO1xuaW1wb3J0IEpvYiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0pvYic7XG5pbXBvcnQgU3RvcmVJbmZvIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvU3RvcmVJbmZvJztcbmltcG9ydCBBcHBJbmZvIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQXBwSW5mbyc7XG5cbi8vIGltcG9ydCBsb2NhbCBkYXRhXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi8uLi9kYXRhL21vZ2UuanNvbic7XG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xuaW1wb3J0IG5leHQgZnJvbSAnbmV4dCc7XG5cbnZhciBsb2NhdGlvbnMgPSB7fTtcblxuZnVuY3Rpb24gU3RvcmUgKHtzdG9yZSwgc2l0ZV9kYXRhfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcbmNvbnNvbGUubG9nKHN0b3JlLm1ldGEpO1xuICBmdW5jdGlvbiBVcGRhdGVNYXN0ZXJIZWFkQmFja2dyb3VuZCgpIHsgICAgXG4gICAgaWYoc3RvcmUuc3RvcmVfcGljKSB7XG4gICAgICB2YXIgbWFzdGVyX2hlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXN0aGVhZCcpWzBdO1xuICAgICAgbWFzdGVyX2hlYWQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyBzdG9yZS5zdG9yZV9waWMgKyBcIilcIjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBNYWtlTmF2U2Nyb2xsZWRFZmZlY3QoKSB7XG4gICAgdmFyIG1haW5fbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5OYXYnKTtcbiAgICBtYWluX25hdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZcIjtcbiAgICBcbiAgICB2YXIgbmF2X2l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZiYXItbmF2IC5uYXYtaXRlbSBhXCIpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYXZfaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hdl9pdGVtc1tpXS5zdHlsZS5jb2xvciA9XCJibGFja1wiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEFkZE1ldGFkYXRhKCkge1xuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcblxuICAgIGlmKHN0b3JlLm1ldGEpIHtcbiAgICAgIE9iamVjdC5rZXlzKHN0b3JlLm1ldGEpLm1hcCgoa2V5KT0+e1xuICAgICAgICBsZXQgbWV0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKTtcbiAgICAgICAgbWV0YS5zZXRBdHRyaWJ1dGUoa2V5LHN0b3JlLm1ldGFba2V5XSk7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQobWV0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIFxuICBcblxuICAgZnVuY3Rpb24gVXBkYXRlUGFnZVRpdGxlKCkge1xuICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGl0bGUnKVswXTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSB0aXRsZS5pbm5lckhUTUwgKyAgXCIgLSBcIiArIHN0b3JlLnRpdGxlO1xuICAgfSBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBVcGRhdGVNYXN0ZXJIZWFkQmFja2dyb3VuZCgpO1xuICAgIE1ha2VOYXZTY3JvbGxlZEVmZmVjdCgpO1xuICAgIEFkZE1ldGFkYXRhKCk7XG4gICAgVXBkYXRlUGFnZVRpdGxlKCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIENsZWFuIHVwIHRoZSBzdWJzY3JpcHRpb25cbiAgICAgIC8vIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgPFN0b3JlTmF2aWdhdGlvbiAvPlxuICAgICAgICB7LyogPE1hc3RoZWFkIC8+ICovfVxuICAgICAgICB7LyogPEFib3V0IC8+ICovfVxuICAgICAgICA8U3RvcmVJbmZvIGRhdGE9e3N0b3JlfSAvPlxuICAgICAgICA8U2h1ZmZsZU1lbnUgZGF0YT17IHN0b3JlIH0gLz5cbiAgICAgICAgey8qIDxMb2NhdGlvbiBkYXRhPXsgdGhpcy5wcm9wcy5kYXRhIH0gLz4gKi99XG4gICAgICAgIHsvKiA8U2VydmljZXMgLz4gKi99XG4gICAgICAgIHsvKiA8R2FsbGVyeSBkYXRhPXsgdGhpcy5wcm9wcy5kYXRhIH0gLz4gKi99XG4gICAgICAgIDxBcHBJbmZvIC8+XG4gICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgIHsvKiA8Q2FsbFRvQWN0aW9uIC8+ICovfVxuICAgICAgICA8Sm9iIC8+XG4gICAgICAgIDxGcmFuY2hpc2UgLz5cbiAgICAgICAgPExvY2F0aW9uIGRhdGE9eyBzaXRlX2RhdGEgfSAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59XG5cblxuLy8gU2VlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9iYXNpYy1mZWF0dXJlcy9kYXRhLWZldGNoaW5nI2dldHN0YXRpY3BhdGhzLXN0YXRpYy1nZW5lcmF0aW9uXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgICBsb2NhdGlvbnMgPSBhcGkuZ2V0X3N0b3JlX2xvY2F0aW9ucygpO1xuICAgIGNvbnN0IHBhdGhzID0gT2JqZWN0LmtleXMobG9jYXRpb25zKS5tYXAoKGtleSkgPT4gKHtcbiAgICAgICAgICAgIHBhcmFtczogeyBpZDogbG9jYXRpb25zW2tleV0uaWQgfSxcbiAgICAgIH0pKVxuICAgIFxuICAgIC8vIFdlJ2xsIHByZS1yZW5kZXIgb25seSB0aGVzZSBwYXRocyBhdCBidWlsZCB0aW1lLlxuICAgIC8vIHsgZmFsbGJhY2s6IGZhbHNlIH0gbWVhbnMgb3RoZXIgcm91dGVzIHNob3VsZCA0MDQuXG4gICAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9XG4gIH1cbiAgXG5cbi8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XG4gICAgbG9jYXRpb25zID0gYXBpLmdldF9zdG9yZV9sb2NhdGlvbnMoKTtcbiAgICBjb25zdCBzdG9yZV9pZCA9IE9iamVjdC5rZXlzKGxvY2F0aW9ucylcbiAgICAgICAgLmZpbHRlcigoa2V5KT0+IHtyZXR1cm4gbG9jYXRpb25zW2tleV0uaWQgPT0gcGFyYW1zLmlkfSlbMF07XG4gIFxuICAgIHZhciBzdG9yZSA9IGxvY2F0aW9uc1tzdG9yZV9pZF07XG4gICAgc3RvcmUubWVudSA9IChzdG9yZS5tZW51KSA/IHN0b3JlLm1lbnUgOiBhcGkuZ2V0X2RlZmF1bHRfbWVudSgpO1xuICAgIHZhciBzaXRlX2RhdGE9IGFwaS5nZXRfZnVsbF9zaXRlX2RhdGEoKTsgICAgXG4gICAgXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgc3RvcmU6IHN0b3JlLCBzaXRlX2RhdGE6IHNpdGVfZGF0YSB9IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/locations/[id]/index.js\n");

/***/ })

})