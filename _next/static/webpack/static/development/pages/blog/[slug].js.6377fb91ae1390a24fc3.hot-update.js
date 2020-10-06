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
    aspectRatio: "2:1" // src={require(`../../public/${coverImage}`)}
    ,
    srcSet: __webpack_require__("./public sync recursive ^\\.\\/.*$")("./".concat(coverImage, "")),
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
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    col: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, post.content)))));
} // This function gets called at build time and generates the list of blog posts

/***/ }),

/***/ "./public sync recursive ^\\.\\/.*$":
/*!*************************************!*\
  !*** ./public ?sizes sync ^\.\/.*$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./favicon.ico": "./public/favicon.ico?sizes",
	"./images/hero.jpg": "./public/images/hero.jpg?sizes",
	"./images/vandebron_elektrisch_rijden.jpg": "./public/images/vandebron_elektrisch_rijden.jpg?sizes",
	"./images/vandebron_thuis.jpeg": "./public/images/vandebron_thuis.jpeg?sizes",
	"./posts/my-first-post.md": "./public/posts/my-first-post.md?sizes",
	"./posts/the-second-post.md": "./public/posts/the-second-post.md?sizes",
	"./vercel.svg": "./public/vercel.svg?sizes"
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

/***/ "./public/favicon.ico":
false,

/***/ "./public/favicon.ico?sizes":
/*!**********************************!*\
  !*** ./public/favicon.ico?sizes ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '\u0000' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./public/images/hero.jpg":
false,

/***/ "./public/images/hero.jpg?sizes":
/*!**************************************!*\
  !*** ./public/images/hero.jpg?sizes ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/responsive-loader/lib/cjs.js):\nValidationError: Invalid configuration object. Object has been initialized using a configuration object that does not match the API schema.\n - configuration.sizes should be an array:\n   [any, ...]\n    at validate (/Users/royderks/code/tech-blog/node_modules/responsive-loader/node_modules/schema-utils/dist/validate.js:98:11)\n    at Object.loader (/Users/royderks/code/tech-blog/node_modules/responsive-loader/lib/index.js:49:28)");

/***/ }),

/***/ "./public/images/vandebron_elektrisch_rijden.jpg":
false,

/***/ "./public/images/vandebron_elektrisch_rijden.jpg?sizes":
/*!*************************************************************!*\
  !*** ./public/images/vandebron_elektrisch_rijden.jpg?sizes ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/responsive-loader/lib/cjs.js):\nValidationError: Invalid configuration object. Object has been initialized using a configuration object that does not match the API schema.\n - configuration.sizes should be an array:\n   [any, ...]\n    at validate (/Users/royderks/code/tech-blog/node_modules/responsive-loader/node_modules/schema-utils/dist/validate.js:98:11)\n    at Object.loader (/Users/royderks/code/tech-blog/node_modules/responsive-loader/lib/index.js:49:28)");

/***/ }),

/***/ "./public/images/vandebron_thuis.jpeg":
false,

/***/ "./public/images/vandebron_thuis.jpeg?sizes":
/*!**************************************************!*\
  !*** ./public/images/vandebron_thuis.jpeg?sizes ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/responsive-loader/lib/cjs.js):\nValidationError: Invalid configuration object. Object has been initialized using a configuration object that does not match the API schema.\n - configuration.sizes should be an array:\n   [any, ...]\n    at validate (/Users/royderks/code/tech-blog/node_modules/responsive-loader/node_modules/schema-utils/dist/validate.js:98:11)\n    at Object.loader (/Users/royderks/code/tech-blog/node_modules/responsive-loader/lib/index.js:49:28)");

/***/ }),

/***/ "./public/posts/my-first-post.md":
false,

/***/ "./public/posts/my-first-post.md?sizes":
/*!*********************************************!*\
  !*** ./public/posts/my-first-post.md?sizes ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> ---\n| title: First post\n| description: The first post is the most memorable one");

/***/ }),

/***/ "./public/posts/the-second-post.md":
false,

/***/ "./public/posts/the-second-post.md?sizes":
/*!***********************************************!*\
  !*** ./public/posts/the-second-post.md?sizes ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> ---\n| title: Second post\n| description: The second post is the least memorable.");

/***/ }),

/***/ "./public/vercel.svg":
false,

/***/ "./public/vercel.svg?sizes":
/*!*********************************!*\
  !*** ./public/vercel.svg?sizes ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/responsive-loader/lib/cjs.js):\nValidationError: Invalid configuration object. Object has been initialized using a configuration object that does not match the API schema.\n - configuration.sizes should be an array:\n   [any, ...]\n    at validate (/Users/royderks/code/tech-blog/node_modules/responsive-loader/node_modules/schema-utils/dist/validate.js:98:11)\n    at Object.loader (/Users/royderks/code/tech-blog/node_modules/responsive-loader/lib/index.js:49:28)");

/***/ })

})
//# sourceMappingURL=[slug].js.6377fb91ae1390a24fc3.hot-update.js.map