module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Icux");


/***/ }),

/***/ "5Mv4":
/***/ (function(module, exports) {

module.exports = require("react-audio-player");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Icux":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5Mv4");
/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_modifyBookName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("s8UP");







const MainBookPage = ({
  book
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const updateBookCount = async () => {
      await fetch(`/api/${book}`, {
        method: "PATCH"
      });
    };

    updateBookCount().then();
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "jsx-1520361731",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
        src: `/${book}.png`,
        alt: "Not found",
        className: "jsx-1520361731"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
        className: "jsx-1520361731",
        children: Object(_utils_modifyBookName__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(book)
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_audio_player__WEBPACK_IMPORTED_MODULE_3___default.a, {
        src: `/${book}.m4a`,
        controls: true,
        style: {
          width: "100%"
        }
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1520361731",
      children: ["div.jsx-1520361731{width:70%;margin:0 auto;}", "h2.jsx-1520361731{margin-bottom:20px;text-align:center;}", "img.jsx-1520361731{height:300px;border:1px solid grey;display:block;margin:80px auto;object-fit:cover;}", "@media screen and (max-width:600px){div.jsx-1520361731{width:80%;}}"]
    })]
  });
};

const getStaticPaths = async () => {
  return {
    paths: [{
      params: {
        book: "a_bird_who_wanted_to_swim"
      }
    }, {
      params: {
        book: "a_journey_to_the_north_pole"
      }
    }, {
      params: {
        book: "a_splash_of_color"
      }
    }, {
      params: {
        book: "adventure_under_the_water"
      }
    }, {
      params: {
        book: "all_that_matters_is_the_heart"
      }
    }, {
      params: {
        book: "big_foot's_life"
      }
    }, {
      params: {
        book: "from_under_the_table_to_antartica"
      }
    }, {
      params: {
        book: "i_won't_be_alone_anymore"
      }
    }, {
      params: {
        book: "jimanju_bees"
      }
    }, {
      params: {
        book: "kat's_first_trip"
      }
    }, {
      params: {
        book: "lifelong_lessons"
      }
    }, {
      params: {
        book: "octopus_pipi_catches_friends"
      }
    }, {
      params: {
        book: "streaky's_story"
      }
    }, {
      params: {
        book: "tessa's_tree_house"
      }
    }, {
      params: {
        book: "the_future_and_the_past"
      }
    }, {
      params: {
        book: "the_strange_case_of_the_blue_chicken_pox"
      }
    }, {
      params: {
        book: "the_wolf_and_the_sheep"
      }
    }, {
      params: {
        book: "tom's_adventure"
      }
    }, {
      params: {
        book: "what_a_day"
      }
    }, {
      params: {
        book: "your_victory_is_right_around_the_corner"
      }
    }],
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  return {
    props: {
      book: params.book
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (MainBookPage);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "s8UP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const modifyBookName = book => {
  return book.split("_").map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(" ");
};

/* harmony default export */ __webpack_exports__["a"] = (modifyBookName);

/***/ })

/******/ });