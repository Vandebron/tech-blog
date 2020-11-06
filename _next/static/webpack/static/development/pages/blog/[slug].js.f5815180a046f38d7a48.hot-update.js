webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./components/Markdown.jsx":
/*!*********************************!*\
  !*** ./components/Markdown.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Markdown; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vandebron_windmolen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vandebron/windmolen */ "./node_modules/@vandebron/windmolen/dist/index.js");
/* harmony import */ var _vandebron_windmolen__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CodeBlock */ "./components/CodeBlock.jsx");


var _jsxFileName = "/Users/royderks/code/tech-blog/components/Markdown.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Markdown(_ref) {
  var _this = this;

  var children = _ref.children;
  return __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: children,
    renderers: {
      thematicBreak: react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,
      heading: function heading(_ref2) {
        var children = _ref2.children,
            level = _ref2.level;
        var levels = {
          1: _vandebron_windmolen__WEBPACK_IMPORTED_MODULE_4__["H1"],
          2: _vandebron_windmolen__WEBPACK_IMPORTED_MODULE_4__["H2"],
          3: _vandebron_windmolen__WEBPACK_IMPORTED_MODULE_4__["H3"],
          4: _vandebron_windmolen__WEBPACK_IMPORTED_MODULE_4__["H4"],
          5: _vandebron_windmolen__WEBPACK_IMPORTED_MODULE_4__["H5"]
        };
        var Heading = levels[level];
        return __jsx(Heading, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 18
          }
        }, children);
      },
      paragraph: _vandebron_windmolen__WEBPACK_IMPORTED_MODULE_4__["Paragraph"],
      list: function list(_ref3) {
        var children = _ref3.children;
        return __jsx("ul", {
          style: {
            marginBlockStart: 0,
            marginBlockEnd: 30
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 11
          }
        }, children);
      },
      listItem: function listItem(_ref4) {
        var children = _ref4.children;
        return __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], {
          as: "li",
          style: {
            marginBottom: 0
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }
        }, children);
      },
      link: function link(_ref5) {
        var children = _ref5.children,
            props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, ["children"]);

        return __jsx("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          style: {
            color: "inherit"
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 11
          }
        }), children);
      },
      code: function code(props) {
        console.log({
          props: props
        });
        return __jsx(_CodeBlock__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 18
          }
        }));
      },
      inlineCode: function inlineCode(_ref6) {
        var children = _ref6.children;
        return __jsx("code", {
          style: {
            background: "rgb(0,0,0, 0.1)",
            padding: "2px 4px",
            fontSize: "80%",
            color: "#000"
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 11
          }
        }, children);
      },
      image: function image(_ref7) {
        var alt = _ref7.alt,
            src = _ref7.src,
            children = _ref7.children;
        return __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_4__["Image"], {
          src: src,
          alt: alt,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 43
          }
        }, children);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  });
}

/***/ })

})
//# sourceMappingURL=[slug].js.f5815180a046f38d7a48.hot-update.js.map