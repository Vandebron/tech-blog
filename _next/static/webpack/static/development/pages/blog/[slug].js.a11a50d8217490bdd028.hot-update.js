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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, title), __jsx("meta", {
    name: "Description",
    content: description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    col: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["H2"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, title)), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    col: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "By ".concat(author, " on ").concat(formattedDate))))), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    col: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    aspectRatio: "2:1",
    src: __webpack_require__("./public sync recursive ^\\.\\/.*$")("./".concat(coverImage)),
    srcSet: __webpack_require__("./public sync recursive ^\\.\\/.*$")("./".concat(coverImage)).srcSet,
    alt: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }))), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: {
      marginBottom: 60
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    col: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, post.content)))));
} // This function gets called at build time and generates the list of blog posts

/***/ }),

/***/ "./public sync recursive ^\\.\\/.*$":
/*!******************************!*\
  !*** ./public sync ^\.\/.*$ ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./favicon.ico": "./public/favicon.ico",
	"./images/hero.jpg": "./public/images/hero.jpg",
	"./images/vandebron_elektrisch_rijden.jpg": "./public/images/vandebron_elektrisch_rijden.jpg",
	"./images/vandebron_thuis.jpeg": "./public/images/vandebron_thuis.jpeg",
	"./posts/my-first-post.md": "./public/posts/my-first-post.md",
	"./posts/the-second-post.md": "./public/posts/the-second-post.md",
	"./vercel.svg": "./public/vercel.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./public sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./public sync recursive ^\\.\\/.*$?231a":
false,

/***/ "./public sync recursive ^\\.\\/.*$?d08a":
false,

/***/ "./public/favicon.ico?resize":
false,

/***/ "./public/images/hero.jpg?resize":
false,

/***/ "./public/images/vandebron_elektrisch_rijden.jpg?resize":
false,

/***/ "./public/images/vandebron_thuis.jpeg?resize":
false,

/***/ "./public/posts/my-first-post.md?resize":
false,

/***/ "./public/posts/the-second-post.md?resize":
false,

/***/ "./public/vercel.svg?resize":
false

})
//# sourceMappingURL=[slug].js.a11a50d8217490bdd028.hot-update.js.map