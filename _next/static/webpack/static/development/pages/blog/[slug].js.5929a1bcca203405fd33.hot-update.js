webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogPosts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Markdown */ "./components/Markdown.jsx");
/* harmony import */ var _vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vandebron/windmolen */ "./node_modules/@vandebron/windmolen/dist/index.js");
/* harmony import */ var _vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/royderks/code/tech-blog/pages/blog/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var __N_SSG = true;
function BlogPosts(_ref) {
  var post = _ref.post;
  var _post$meta = post.meta,
      title = _post$meta.title,
      description = _post$meta.description,
      coverImage = _post$meta.coverImage,
      author = _post$meta.author,
      formattedDate = _post$meta.formattedDate;

  var image = __webpack_require__("./public sync recursive ^\\.\\/.*$")("./".concat(coverImage));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, title), __jsx("meta", {
    name: "Description",
    content: description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    col: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["H2"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, title)), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    col: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, "By ".concat(author, " on ").concat(formattedDate))))), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    col: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    aspectRatio: "2:1",
    src: image,
    srcSet: image.srcSet,
    alt: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(Link, {
    href: imageSource,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, "Image source")))), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: {
      marginBottom: 60
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    col: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, post.content)))));
} // This function gets called at build time and generates the list of blog posts

/***/ })

})
//# sourceMappingURL=[slug].js.5929a1bcca203405fd33.hot-update.js.map