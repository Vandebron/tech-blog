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
/*!**************************************!*\
  !*** ./public ?resize sync ^\.\/.*$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./favicon.ico": "./public/favicon.ico?resize",
	"./images/hero.jpg": "./public/images/hero.jpg?resize",
	"./images/vandebron_elektrisch_rijden.jpg": "./public/images/vandebron_elektrisch_rijden.jpg?resize",
	"./images/vandebron_thuis.jpeg": "./public/images/vandebron_thuis.jpeg?resize",
	"./posts/my-first-post.md": "./public/posts/my-first-post.md?resize",
	"./posts/the-second-post.md": "./public/posts/the-second-post.md?resize",
	"./vercel.svg": "./public/vercel.svg?resize"
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

/***/ "./public/favicon.ico?resize":
/*!***********************************!*\
  !*** ./public/favicon.ico?resize ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '\u0000' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./public/favicon.ico?sizes":
false,

/***/ "./public/images/hero.jpg?resize":
/*!***************************************!*\
  !*** ./public/images/hero.jpg?resize ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/hero-1100-5cd91bd8d0187c367daa4c727c2dd329.jpg"+" 1100w"+","+"/_next/static/images/hero-800-09987c7c4998d3908ec77a364c224c83.jpg"+" 800w"+","+"/_next/static/images/hero-400-f66d833d8ef4c2731ff3f0242d9e510f.jpg"+" 400w",
          images:[ {path: "/_next/static/images/hero-1100-5cd91bd8d0187c367daa4c727c2dd329.jpg",width: 1100,height: 436},{path: "/_next/static/images/hero-800-09987c7c4998d3908ec77a364c224c83.jpg",width: 800,height: 317},{path: "/_next/static/images/hero-400-f66d833d8ef4c2731ff3f0242d9e510f.jpg",width: 400,height: 159}],
          src: "/_next/static/images/hero-1100-5cd91bd8d0187c367daa4c727c2dd329.jpg",
          toString:function(){return "/_next/static/images/hero-1100-5cd91bd8d0187c367daa4c727c2dd329.jpg"},
          placeholder: undefined,
          width: 1100,
          height: 436
      }

/***/ }),

/***/ "./public/images/hero.jpg?sizes":
false,

/***/ "./public/images/vandebron_elektrisch_rijden.jpg?resize":
/*!**************************************************************!*\
  !*** ./public/images/vandebron_elektrisch_rijden.jpg?resize ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/vandebron_elektrisch_rijden-1200-d3f29e07b7a4e3de82fc51559267f8b4.jpg"+" 1200w"+","+"/_next/static/images/vandebron_elektrisch_rijden-800-46b3e1472cff0959f736515438e058aa.jpg"+" 800w"+","+"/_next/static/images/vandebron_elektrisch_rijden-400-6e70dfeae0058cd3d4f8b43281f9453e.jpg"+" 400w",
          images:[ {path: "/_next/static/images/vandebron_elektrisch_rijden-1200-d3f29e07b7a4e3de82fc51559267f8b4.jpg",width: 1200,height: 800},{path: "/_next/static/images/vandebron_elektrisch_rijden-800-46b3e1472cff0959f736515438e058aa.jpg",width: 800,height: 533},{path: "/_next/static/images/vandebron_elektrisch_rijden-400-6e70dfeae0058cd3d4f8b43281f9453e.jpg",width: 400,height: 267}],
          src: "/_next/static/images/vandebron_elektrisch_rijden-1200-d3f29e07b7a4e3de82fc51559267f8b4.jpg",
          toString:function(){return "/_next/static/images/vandebron_elektrisch_rijden-1200-d3f29e07b7a4e3de82fc51559267f8b4.jpg"},
          placeholder: undefined,
          width: 1200,
          height: 800
      }

/***/ }),

/***/ "./public/images/vandebron_elektrisch_rijden.jpg?sizes":
false,

/***/ "./public/images/vandebron_thuis.jpeg?resize":
/*!***************************************************!*\
  !*** ./public/images/vandebron_thuis.jpeg?resize ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/vandebron_thuis-1200-2ac4709b4c1c9d7230de6ae6ee0acc04.jpeg"+" 1200w"+","+"/_next/static/images/vandebron_thuis-800-d5ae96fa68cc8bf4e7fc432522b51e3f.jpeg"+" 800w"+","+"/_next/static/images/vandebron_thuis-400-f76a388eda261d1a2b2a190fb2aca6f4.jpeg"+" 400w",
          images:[ {path: "/_next/static/images/vandebron_thuis-1200-2ac4709b4c1c9d7230de6ae6ee0acc04.jpeg",width: 1200,height: 801},{path: "/_next/static/images/vandebron_thuis-800-d5ae96fa68cc8bf4e7fc432522b51e3f.jpeg",width: 800,height: 534},{path: "/_next/static/images/vandebron_thuis-400-f76a388eda261d1a2b2a190fb2aca6f4.jpeg",width: 400,height: 267}],
          src: "/_next/static/images/vandebron_thuis-1200-2ac4709b4c1c9d7230de6ae6ee0acc04.jpeg",
          toString:function(){return "/_next/static/images/vandebron_thuis-1200-2ac4709b4c1c9d7230de6ae6ee0acc04.jpeg"},
          placeholder: undefined,
          width: 1200,
          height: 801
      }

/***/ }),

/***/ "./public/images/vandebron_thuis.jpeg?sizes":
false,

/***/ "./public/posts/my-first-post.md?resize":
/*!**********************************************!*\
  !*** ./public/posts/my-first-post.md?resize ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> ---\n| title: First post\n| description: The first post is the most memorable one");

/***/ }),

/***/ "./public/posts/my-first-post.md?sizes":
false,

/***/ "./public/posts/the-second-post.md?resize":
/*!************************************************!*\
  !*** ./public/posts/the-second-post.md?resize ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> ---\n| title: Second post\n| description: The second post is the least memorable.");

/***/ }),

/***/ "./public/posts/the-second-post.md?sizes":
false,

/***/ "./public/vercel.svg?resize":
/*!**********************************!*\
  !*** ./public/vercel.svg?resize ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/responsive-loader/lib/cjs.js):\nError: No mime type for file with extension svg supported\n    at Object.loader (/Users/royderks/code/tech-blog/node_modules/responsive-loader/lib/index.js:72:27)");

/***/ }),

/***/ "./public/vercel.svg?sizes":
false

})
//# sourceMappingURL=[slug].js.69c03cd9d08b5dae47b1.hot-update.js.map