webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vandebron/windmolen */ \"./node_modules/@vandebron/windmolen/dist/index.js\");\n/* harmony import */ var _vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ \"./components/Logo.jsx\");\nvar _jsxFileName = \"/Users/royderks/code/tech-blog/components/Header.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar links = [{\n  name: \"Home\",\n  url: \"/\"\n}, {\n  name: \"About\",\n  url: \"/about\"\n}, {\n  name: \"Main website\",\n  url: \"https://vandebron.nl\",\n  external: true\n}];\nfunction Header() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var selected = links.findIndex(function (_ref) {\n    var url = _ref.url;\n    return router.pathname === url;\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    as: \"header\",\n    style: {\n      paddingTop: 30,\n      paddingBottom: 30,\n      marginBottom: 30\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    alignItems: \"center\",\n    justifyContent: \"between\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: 12,\n    sm: 12,\n    smAuto: false,\n    mdAuto: true,\n    lgAuto: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 15\n    }\n  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  })))), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: 12,\n    sm: 12,\n    smAuto: false,\n    mdAuto: true,\n    lgAuto: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    smJustifyContent: \"between\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__[\"Navigation\"], {\n    onSelectLink: function onSelectLink(linkId) {\n      var _links$linkId = links[linkId],\n          url = _links$linkId.url,\n          external = _links$linkId.external;\n      return external ? window.open(url, \"_blank\") : router.push(url);\n    },\n    selected: selected >= 0 ? selected : 0,\n    links: links,\n    style: {\n      marginRight: 25\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 15\n    }\n  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    href: \"https://github.com/vandebron/\",\n    target: \"_blank\",\n    style: {\n      marginRight: 10\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n    name: \"github\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 19\n    }\n  }), __jsx(\"span\", {\n    \"class\": \"visually-hidden\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 19\n    }\n  }, \"Vandebron on Github\")), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    href: \"https://dev.to/vandebron/\",\n    target: \"_blank\",\n    style: {\n      marginRight: 10\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n    name: \"devto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 19\n    }\n  }), __jsx(\"span\", {\n    \"class\": \"visually-hidden\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 19\n    }\n  }, \"Vandebron on Dev.to\")), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    href: \"https://medium.com/vandebron/\",\n    target: \"_blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 17\n    }\n  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n    name: \"medium\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 19\n    }\n  }), __jsx(\"span\", {\n    \"class\": \"visually-hidden\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 19\n    }\n  }, \"Vandebron on Medium\"))))))));\n}\n\n_s(Header, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4PzBhMDgiXSwibmFtZXMiOlsibGlua3MiLCJuYW1lIiwidXJsIiwiZXh0ZXJuYWwiLCJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZWxlY3RlZCIsImZpbmRJbmRleCIsInBhdGhuYW1lIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Cb3R0b20iLCJsaW5rSWQiLCJ3aW5kb3ciLCJvcGVuIiwicHVzaCIsIm1hcmdpblJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUFFQyxNQUFJLEVBQUUsTUFBUjtBQUFnQkMsS0FBRyxFQUFFO0FBQXJCLENBRFksRUFFWjtBQUFFRCxNQUFJLEVBQUUsT0FBUjtBQUFpQkMsS0FBRyxFQUFFO0FBQXRCLENBRlksRUFHWjtBQUFFRCxNQUFJLEVBQUUsY0FBUjtBQUF3QkMsS0FBRyxFQUFFLHNCQUE3QjtBQUFxREMsVUFBUSxFQUFFO0FBQS9ELENBSFksQ0FBZDtBQU1lLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR1AsS0FBSyxDQUFDUSxTQUFOLENBQWdCO0FBQUEsUUFBR04sR0FBSCxRQUFHQSxHQUFIO0FBQUEsV0FBYUcsTUFBTSxDQUFDSSxRQUFQLEtBQW9CUCxHQUFqQztBQUFBLEdBQWhCLENBQWpCO0FBRUEsU0FDRSxtRUFDRSxNQUFDLDhEQUFEO0FBQ0UsTUFBRSxFQUFDLFFBREw7QUFFRSxTQUFLLEVBQUU7QUFDTFEsZ0JBQVUsRUFBRSxFQURQO0FBRUxDLG1CQUFhLEVBQUUsRUFGVjtBQUdMQyxrQkFBWSxFQUFFO0FBSFQsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyx3REFB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QTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sYUFBTSxpQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGLENBakJGLENBaEJGLENBREYsQ0FSRixDQVJGLENBREYsQ0FERjtBQStERDs7R0FuRXVCYixNO1VBQ1BFLHFEOzs7S0FET0YsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG4gIExpbmssXG4gIE5hdmlnYXRpb24sXG4gIEljb24sXG4gIEZsZXgsXG4gIFNwYW4sXG59IGZyb20gXCJAdmFuZGVicm9uL3dpbmRtb2xlblwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUm91dGVyTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XG5cbmNvbnN0IGxpbmtzID0gW1xuICB7IG5hbWU6IFwiSG9tZVwiLCB1cmw6IFwiL1wiIH0sXG4gIHsgbmFtZTogXCJBYm91dFwiLCB1cmw6IFwiL2Fib3V0XCIgfSxcbiAgeyBuYW1lOiBcIk1haW4gd2Vic2l0ZVwiLCB1cmw6IFwiaHR0cHM6Ly92YW5kZWJyb24ubmxcIiwgZXh0ZXJuYWw6IHRydWUgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHNlbGVjdGVkID0gbGlua3MuZmluZEluZGV4KCh7IHVybCB9KSA9PiByb3V0ZXIucGF0aG5hbWUgPT09IHVybCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBhcz1cImhlYWRlclwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZ1RvcDogMzAsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogMzAsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFJvdyBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJiZXR3ZWVuXCI+XG4gICAgICAgICAgPENvbCBjb2w9ezEyfSBzbT17MTJ9IHNtQXV0bz17ZmFsc2V9IG1kQXV0byBsZ0F1dG8+XG4gICAgICAgICAgICA8Um91dGVyTGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgY29sPXsxMn0gc209ezEyfSBzbUF1dG89e2ZhbHNlfSBtZEF1dG8gbGdBdXRvPlxuICAgICAgICAgICAgPEZsZXggc21KdXN0aWZ5Q29udGVudD1cImJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPE5hdmlnYXRpb25cbiAgICAgICAgICAgICAgICBvblNlbGVjdExpbms9eyhsaW5rSWQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBleHRlcm5hbCB9ID0gbGlua3NbbGlua0lkXTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4dGVybmFsXG4gICAgICAgICAgICAgICAgICAgID8gd2luZG93Lm9wZW4odXJsLCBcIl9ibGFua1wiKVxuICAgICAgICAgICAgICAgICAgICA6IHJvdXRlci5wdXNoKHVybCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWQgPj0gMCA/IHNlbGVjdGVkIDogMH1cbiAgICAgICAgICAgICAgICBsaW5rcz17bGlua3N9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmFuZGVicm9uL1wiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImdpdGh1YlwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPlZhbmRlYnJvbiBvbiBHaXRodWI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kZXYudG8vdmFuZGVicm9uL1wiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImRldnRvXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+VmFuZGVicm9uIG9uIERldi50bzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS92YW5kZWJyb24vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwibWVkaXVtXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+VmFuZGVicm9uIG9uIE1lZGl1bTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.jsx\n");

/***/ })

})