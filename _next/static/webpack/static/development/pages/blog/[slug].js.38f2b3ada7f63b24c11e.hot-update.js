webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./pages/blog sync recursive ^.*$":
false,

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
    src: __webpack_require__("./public sync recursive ^\\.\\/.*$?d08a")("./".concat(coverImage)),
    srcSet: __webpack_require__("./public sync recursive ^\\.\\/.*$?231a")("./".concat(coverImage, "")).srcSet,
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

/***/ "./pages/config.js":
false,

/***/ "./public sync recursive ^\\.\\/.*$":
false,

/***/ "./public sync recursive ^\\.\\/.*$?231a":
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
webpackContext.id = "./public sync recursive ^\\.\\/.*$?231a";

/***/ }),

/***/ "./public sync recursive ^\\.\\/.*$?d08a":
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
webpackContext.id = "./public sync recursive ^\\.\\/.*$?d08a";

/***/ }),

/***/ "./public/favicon.ico":
/*!****************************!*\
  !*** ./public/favicon.ico ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '\u0000' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./public/images/hero.jpg":
/*!********************************!*\
  !*** ./public/images/hero.jpg ***!
  \********************************/
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

/***/ "./public/images/vandebron_elektrisch_rijden.jpg":
/*!*******************************************************!*\
  !*** ./public/images/vandebron_elektrisch_rijden.jpg ***!
  \*******************************************************/
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

/***/ "./public/images/vandebron_thuis.jpeg":
/*!********************************************!*\
  !*** ./public/images/vandebron_thuis.jpeg ***!
  \********************************************/
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

/***/ "./public/posts/my-first-post.md":
/*!***************************************!*\
  !*** ./public/posts/my-first-post.md ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> ---\n| title: First post\n| description: The first post is the most memorable one");

/***/ }),

/***/ "./public/posts/the-second-post.md":
/*!*****************************************!*\
  !*** ./public/posts/the-second-post.md ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> ---\n| title: Second post\n| description: The second post is the least memorable.");

/***/ }),

/***/ "./public/vercel.svg":
/*!***************************!*\
  !*** ./public/vercel.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgzIiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgMjgzIDY0IiBmaWxsPSJub25lIiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJNMTQxLjA0IDE2Yy0xMS4wNCAwLTE5IDcuMi0xOSAxOHM4Ljk2IDE4IDIwIDE4YzYuNjcgMCAxMi41NS0yLjY0IDE2LjE5LTcuMDlsLTcuNjUtNC40MmMtMi4wMiAyLjIxLTUuMDkgMy41LTguNTQgMy41LTQuNzkgMC04Ljg2LTIuNS0xMC4zNy02LjVoMjguMDJjLjIyLTEuMTIuMzUtMi4yOC4zNS0zLjUgMC0xMC43OS03Ljk2LTE3Ljk5LTE5LTE3Ljk5em0tOS40NiAxNC41YzEuMjUtMy45OSA0LjY3LTYuNSA5LjQ1LTYuNSA0Ljc5IDAgOC4yMSAyLjUxIDkuNDUgNi41aC0xOC45ek0yNDguNzIgMTZjLTExLjA0IDAtMTkgNy4yLTE5IDE4czguOTYgMTggMjAgMThjNi42NyAwIDEyLjU1LTIuNjQgMTYuMTktNy4wOWwtNy42NS00LjQyYy0yLjAyIDIuMjEtNS4wOSAzLjUtOC41NCAzLjUtNC43OSAwLTguODYtMi41LTEwLjM3LTYuNWgyOC4wMmMuMjItMS4xMi4zNS0yLjI4LjM1LTMuNSAwLTEwLjc5LTcuOTYtMTcuOTktMTktMTcuOTl6bS05LjQ1IDE0LjVjMS4yNS0zLjk5IDQuNjctNi41IDkuNDUtNi41IDQuNzkgMCA4LjIxIDIuNTEgOS40NSA2LjVoLTE4Ljl6TTIwMC4yNCAzNGMwIDYgMy45MiAxMCAxMCAxMCA0LjEyIDAgNy4yMS0xLjg3IDguOC00LjkybDcuNjggNC40M2MtMy4xOCA1LjMtOS4xNCA4LjQ5LTE2LjQ4IDguNDktMTEuMDUgMC0xOS03LjItMTktMThzNy45Ni0xOCAxOS0xOGM3LjM0IDAgMTMuMjkgMy4xOSAxNi40OCA4LjQ5bC03LjY4IDQuNDNjLTEuNTktMy4wNS00LjY4LTQuOTItOC44LTQuOTItNi4wNyAwLTEwIDQtMTAgMTB6bTgyLjQ4LTI5djQ2aC05VjVoOXpNMzYuOTUgMEw3My45IDY0SDBMMzYuOTUgMHptOTIuMzggNWwtMjcuNzEgNDhMNzMuOTEgNUg4NC4zbDE3LjMyIDMwIDE3LjMyLTMwaDEwLjM5em01OC45MSAxMnY5LjY5Yy0xLS4yOS0yLjA2LS40OS0zLjItLjQ5LTUuODEgMC0xMCA0LTEwIDEwVjUxaC05VjE3aDl2OS4yYzAtNS4wOCA1LjkxLTkuMiAxMy4yLTkuMnoiIGZpbGw9IiMwMDAiLz4KPC9zdmc+"

/***/ })

})
//# sourceMappingURL=[slug].js.38f2b3ada7f63b24c11e.hot-update.js.map