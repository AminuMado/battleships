/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n}\nbody {\n  display: grid;\n  grid-template-areas: \"header\" \"main\" \"footer\";\n  grid-template-rows: 0.15fr 2fr 0.1fr;\n  width: 100vw;\n  height: 100vh;\n  background-color: #f6efee;\n  font-family: \"Domine\", serif;\n  background-color: #a1c6ea;\n  /* e1ca96 ACA885 434A42 F4F4ED F6BD60 E63946 A8DADC 262322 7C6A0A F5BB00 B6174B */\n  /* background-color: #f4f4ed;\n  background-color: #e1ca96;\n  background-color: #aca885;\n  background-color: #434a42;\n  background-color: #306b34; */\n}\n.header {\n  grid-area: header;\n  background-color: #e1ca96;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 55px 0px 55px;\n}\n\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #aca885;\n  padding: 15px;\n}\n.footer {\n  grid-area: footer;\n  background-color: #0b090a;\n  color: aliceblue;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6.5px;\n  padding: 10px;\n  font-size: 20px;\n}\n\n.github-logo {\n  width: 20px;\n  height: 20px;\n  transition: all 300ms linear;\n  border-radius: 50%;\n  box-shadow: 0px 0px 5px beige;\n  cursor: pointer;\n  color: orange;\n  /* filter: invert(73%) sepia(81%) saturate(870%) hue-rotate(357deg)\n    brightness(95%) contrast(93%); */\n}\n.github-logo:hover {\n  transform: rotate(360deg) scale(1.3);\n  box-shadow: 0px 0px 5px blue;\n}\n\n/* This is for the gameboard in the main section */\n\n/* now we actually start */\n.start-game-page {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ships {\n  color: red;\n}\n.ship-placement-container {\n  position: relative;\n}\n.ships-placed-board {\n  display: grid;\n  position: absolute;\n  margin: 0px auto;\n  grid-template-rows: repeat(10, 4rem);\n  grid-template-columns: repeat(10, 4rem);\n  grid-template-areas: none;\n  text-align: center;\n  grid-gap: 3px;\n  pointer-events: none;\n}\n.ships-placed-container {\n  position: absolute;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n}\n\n.board-container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-gap: 3px;\n}\n.grid-cell {\n  transition: all 90ms ease-in;\n  display: flex;\n  align-items: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 4px solid black;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.grid-cell:hover {\n  background-color: #a1c6ea;\n}\n\n/* ships selection container */\n.selection {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 20px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: space-evenly;\n  -ms-flex-pack: space-evenly;\n  justify-content: space-evenly;\n}\n.ship-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.count {\n  font-size: 2.6rem;\n  width: 5rem;\n}\n.ship {\n  display: grid;\n  grid-auto-flow: column;\n  background-color: grey;\n  grid-gap: 4px;\n  cursor: move;\n  z-index: 1;\n}\n.part {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: grey;\n  border: 7px solid #464646;\n  box-sizing: border-box;\n}\n.active {\n  filter: invert(64%) sepia(71%) saturate(411%) hue-rotate(355deg)\n    brightness(91%) contrast(92%);\n}\n/* .carrier {\n  background-color: brown;\n  border: 7px solid;\n} */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;EACE,SAAS;AACX;AACA;EACE,aAAa;EACb,6CAA6C;EAC7C,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,4BAA4B;EAC5B,yBAAyB;EACzB,iFAAiF;EACjF;;;;8BAI4B;AAC9B;AACA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;EAC5B,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;EACf,aAAa;EACb;oCACkC;AACpC;AACA;EACE,oCAAoC;EACpC,4BAA4B;AAC9B;;AAEA,kDAAkD;;AAElD,0BAA0B;AAC1B;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,UAAU;AACZ;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,oCAAoC;EACpC,uCAAuC;EACvC,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,aAAa;AACf;AACA;EACE,4BAA4B;EAC5B,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,8BAA8B;AAC9B;EACE,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,SAAS;EACT,4BAA4B;EAC5B,6BAA6B;EAC7B,0BAA0B;EAC1B,sBAAsB;EACtB,8BAA8B;EAC9B,2BAA2B;EAC3B,6BAA6B;AAC/B;AACA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,UAAU;AACZ;AACA;EACE,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,yBAAyB;EACzB,sBAAsB;AACxB;AACA;EACE;iCAC+B;AACjC;AACA;;;GAGG","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600&display=swap\");\n* {\n  margin: 0;\n}\nbody {\n  display: grid;\n  grid-template-areas: \"header\" \"main\" \"footer\";\n  grid-template-rows: 0.15fr 2fr 0.1fr;\n  width: 100vw;\n  height: 100vh;\n  background-color: #f6efee;\n  font-family: \"Domine\", serif;\n  background-color: #a1c6ea;\n  /* e1ca96 ACA885 434A42 F4F4ED F6BD60 E63946 A8DADC 262322 7C6A0A F5BB00 B6174B */\n  /* background-color: #f4f4ed;\n  background-color: #e1ca96;\n  background-color: #aca885;\n  background-color: #434a42;\n  background-color: #306b34; */\n}\n.header {\n  grid-area: header;\n  background-color: #e1ca96;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 55px 0px 55px;\n}\n\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #aca885;\n  padding: 15px;\n}\n.footer {\n  grid-area: footer;\n  background-color: #0b090a;\n  color: aliceblue;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6.5px;\n  padding: 10px;\n  font-size: 20px;\n}\n\n.github-logo {\n  width: 20px;\n  height: 20px;\n  transition: all 300ms linear;\n  border-radius: 50%;\n  box-shadow: 0px 0px 5px beige;\n  cursor: pointer;\n  color: orange;\n  /* filter: invert(73%) sepia(81%) saturate(870%) hue-rotate(357deg)\n    brightness(95%) contrast(93%); */\n}\n.github-logo:hover {\n  transform: rotate(360deg) scale(1.3);\n  box-shadow: 0px 0px 5px blue;\n}\n\n/* This is for the gameboard in the main section */\n\n/* now we actually start */\n.start-game-page {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ships {\n  color: red;\n}\n.ship-placement-container {\n  position: relative;\n}\n.ships-placed-board {\n  display: grid;\n  position: absolute;\n  margin: 0px auto;\n  grid-template-rows: repeat(10, 4rem);\n  grid-template-columns: repeat(10, 4rem);\n  grid-template-areas: none;\n  text-align: center;\n  grid-gap: 3px;\n  pointer-events: none;\n}\n.ships-placed-container {\n  position: absolute;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n}\n\n.board-container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-gap: 3px;\n}\n.grid-cell {\n  transition: all 90ms ease-in;\n  display: flex;\n  align-items: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 4px solid black;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.grid-cell:hover {\n  background-color: #a1c6ea;\n}\n\n/* ships selection container */\n.selection {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 20px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: space-evenly;\n  -ms-flex-pack: space-evenly;\n  justify-content: space-evenly;\n}\n.ship-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.count {\n  font-size: 2.6rem;\n  width: 5rem;\n}\n.ship {\n  display: grid;\n  grid-auto-flow: column;\n  background-color: grey;\n  grid-gap: 4px;\n  cursor: move;\n  z-index: 1;\n}\n.part {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: grey;\n  border: 7px solid #464646;\n  box-sizing: border-box;\n}\n.active {\n  filter: invert(64%) sepia(71%) saturate(411%) hue-rotate(355deg)\n    brightness(91%) contrast(92%);\n}\n/* .carrier {\n  background-color: brown;\n  border: 7px solid;\n} */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

// import carrierSrc from "../src/assets/images/carrier.svg";
// import destroyerSrc from "../src/assets/images/destroyer.svg";
// import patrolSrc from "../src/assets/images/patrol.svg";
// import submarineSrc from "../src/assets/images/submarine.svg";

// const shipContainer = document.querySelector(".ship-container");
// function addShipsImg() {
//   const div1 = document.createElement("div");
//   const div2 = document.createElement("div");
//   const div3 = document.createElement("div");
//   const div4 = document.createElement("div");
//   const carrierImg = document.createElement("img");
//   const destroyerImg = document.createElement("img");
//   const patrolImg = document.createElement("img");
//   const submarineImg = document.createElement("img");
//   carrierImg.src = carrierSrc;
//   destroyerImg.src = destroyerSrc;
//   patrolImg.src = patrolSrc;
//   submarineImg.src = submarineSrc;
//   div1.classList.add("carrier");
//   // div1.appendChild(carrierImg);
//   // div2.appendChild(destroyerImg);
//   // div3.appendChild(patrolImg);
//   // div4.appendChild(submarineImg);
//   shipContainer.appendChild(div1);
//   shipContainer.appendChild(div2);
//   shipContainer.appendChild(div3);
//   shipContainer.appendChild(div4);
// }
// // addShipsImg();
// const shipsPlacedBoard = document.querySelector(".ships-placed-board");
// const boardContainer = document.querySelector(".board-container");
// const shipsContainer = document.querySelector(".ships-container");
// let selectedShip = null;
// let type = null;
// const cells = document.querySelectorAll(".grid-cell");

// shipsContainer.addEventListener("click", (e) => {
//   let ship = e.target.classList;

//   if (ship.contains("ship")) {
//     selectedShip = e.target;
//     type = e.target.classList[0];
//     console.log(selectedShip);
//   }
// });
// cells.forEach((cell) => {
//   cell.addEventListener("click", (e) => {
//     let spot = e.target.dataset.id;

//     console.log(type);
//     if (selectedShip != null) {
//       console.log(spot[0]);
//       let placedShip = createShipDom(spot, type);
//       shipsPlacedBoard.appendChild(placedShip);
//     }
//   });
// });

// function createShipDom(name, head, length, direction) {
//   const div = document.createElement("div");
//   const idx = head.toString();
//   if (direction === "horizontal") {
//     switch (name) {
//       case "carrier":
//         div.classList.add("carrier");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "battleship":
//         div.classList.add("battleship");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "destroyer":
//         div.classList.add("destroyer");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "cruiser":
//         div.classList.add("cruiser");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "submarine":
//         div.classList.add("submarine");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "patrol":
//         div.classList.add("patrol");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       default:
//         return;
//     }
//   } else if (direction === "vertical") {
//     switch (name) {
//       case "carrier":
//         div.classList.add("carrier");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "battleship":
//         div.classList.add("battleship");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "destroyer":
//         div.classList.add("destroyer");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "cruiser":
//         div.classList.add("cruiser");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "submarine":
//         div.classList.add("submarine");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "patrol":
//         div.classList.add("patrol");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       default:
//         return;
//     }
//   }

//   return div;
// }
// // Random Button Logic
// const shipArray = [
//   {
//     name: "carrier",
//     length: 5,
//     directions: ["horizontal", "vertical"],
//   },
//   {
//     name: "battleship",
//     length: 5,
//     directions: ["horizontal", "vertical"],
//   },
//   {
//     name: "destroyer",
//     length: 4,
//     directions: ["horizontal", "vertical"],
//   },
//   {
//     name: "cruiser",
//     length: 4,
//     directions: ["horizontal", "vertical"],
//   },
//   {
//     name: "submarine",
//     length: 3,
//     directions: ["horizontal", "vertical"],
//   },
//   {
//     name: "patrol",
//     length: 2,
//     directions: ["horizontal", "vertical"],
//   },
// ];

// const randomButton = document.querySelector(".randomize");
// randomButton.addEventListener("click", (e) => {
//   let randomNumber = generateRandomNumber(0, 99);
//   let randomShip = createShipDom(randomNumber, "ship-type-carrier");
//   shipsPlacedBoard.appendChild(randomShip);
// });
// function generateRandomNumber(max, min) {
//   return Math.floor(Math.random() * (max - min) + min);
// }
// function generateRandomShipPositions(ship) {
//   let randomDirection = generateRandomNumber(1, 0);
//   let currentDirection = ship.directions[randomDirection];
//   switch (direction) {
//     case 0:
//       direction = 1;
//       break;
//     case 1:
//       direction = 10;
//       break;
//     default:
//       return;
//   }

//   let randomStart = Math.abs(
//     Math.floor(
//       Math.random() * computerSquares.length -
//         ship.directions[0].length * direction
//     )
//   );

//   const isTaken = current.some((index) =>
//     computerSquares[randomStart + index].classList.contains("taken")
//   );
//   const isAtRightEdge = current.some(
//     (index) => (randomStart + index) % width === width - 1
//   );
//   const isAtLeftEdge = current.some(
//     (index) => (randomStart + index) % width === 0
//   );

//   if (!isTaken && !isAtRightEdge && !isAtLeftEdge)
//     current.forEach((index) =>
//       computerSquares[randomStart + index].classList.add("taken", ship.name)
//     );
//   else generate(ship);
// }

// lets grab the corresponding ships divs
const carrierShip = document.querySelector(".carrier");
const destroyerShip = document.querySelector(".destroyer");
const submarineShip = document.querySelector(".submarine");
const patrolShip = document.querySelector(".patrol");
console.log(carrierShip, destroyerShip, submarineShip, patrolShip);

// lets grab the board to be appended to
const shipsPlacedBoard = document.querySelector(".board-container");
const boardCells = document.querySelectorAll(".grid-cell");
console.log(shipsPlacedBoard, boardCells);

// the objective is to append a selected ship into a grid cell
// Id need to select the ship
// id need to select the target grid cell
// id need to set the set the head of my selected ship to the targeted grid cell
// id need to be able to move it from cell to cell

// select a ship
let currentShip = null;

// set event listner on ships
let ships = [carrierShip, destroyerShip, submarineShip, patrolShip];
ships.forEach((ship) => {
  ship.addEventListener("click", (e) => {
    currentShip = e.currentTarget;
    console.log(currentShip);
  });
});
// set event listner on grids
boardCells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    console.log(e.currentTarget);
    console.log(boardCells[0]);
    let idx = parseInt(cell.getAttribute("data-id"));
    console.log(idx);
    let currentCell = e.currentTarget;
    if (currentShip === null) return;
    for (let i = 0; i < 2; i++) {
      boardCells[idx + i].classList.add("carrier");
    }
    console.log(cell);
  });
});
// i want a visual aid that shows where you want your ship to be at
// i want to add the ship properties to the grid cell itself
// i want to change the styling of the grid cell

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RDtBQUNBLDBDQUEwQyxxQkFBcUI7QUFDL0QsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RDtBQUNBLDBDQUEwQyxxQkFBcUI7QUFDL0QsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RDtBQUNBLDBDQUEwQyxxQkFBcUI7QUFDL0QsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RDtBQUNBLDBDQUEwQyxxQkFBcUI7QUFDL0QsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RDtBQUNBLDBDQUEwQyxxQkFBcUI7QUFDL0QsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RDtBQUNBLDBDQUEwQyxxQkFBcUI7QUFDL0QsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RDtBQUNBLDBDQUEwQyxxQkFBcUI7QUFDL0QsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURvbWluZTp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyXFxcIiBcXFwibWFpblxcXCIgXFxcImZvb3RlclxcXCI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMTVmciAyZnIgMC4xZnI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZWZlZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRG9taW5lXFxcIiwgc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFjNmVhO1xcbiAgLyogZTFjYTk2IEFDQTg4NSA0MzRBNDIgRjRGNEVEIEY2QkQ2MCBFNjM5NDYgQThEQURDIDI2MjMyMiA3QzZBMEEgRjVCQjAwIEI2MTc0QiAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWNhOTY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWNhODg1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNGE0MjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDZiMzQ7ICovXFxufVxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFjYTk2O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwcHggNTVweCAwcHggNTVweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhY2E4ODU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4uZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiMDkwYTtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA2LjVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5naXRodWItbG9nbyB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBiZWlnZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICAvKiBmaWx0ZXI6IGludmVydCg3MyUpIHNlcGlhKDgxJSkgc2F0dXJhdGUoODcwJSkgaHVlLXJvdGF0ZSgzNTdkZWcpXFxuICAgIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg5MyUpOyAqL1xcbn1cXG4uZ2l0aHViLWxvZ286aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjMpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggYmx1ZTtcXG59XFxuXFxuLyogVGhpcyBpcyBmb3IgdGhlIGdhbWVib2FyZCBpbiB0aGUgbWFpbiBzZWN0aW9uICovXFxuXFxuLyogbm93IHdlIGFjdHVhbGx5IHN0YXJ0ICovXFxuLnN0YXJ0LWdhbWUtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2hpcHMge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLnNoaXAtcGxhY2VtZW50LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zaGlwcy1wbGFjZWQtYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogMHB4IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNHJlbSk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNHJlbSk7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ3JpZC1nYXA6IDNweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uc2hpcHMtcGxhY2VkLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLWdhcDogM3B4O1xcbn1cXG4uZ3JpZC1jZWxsIHtcXG4gIHRyYW5zaXRpb246IGFsbCA5MG1zIGVhc2UtaW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmdyaWQtY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFjNmVhO1xcbn1cXG5cXG4vKiBzaGlwcyBzZWxlY3Rpb24gY29udGFpbmVyICovXFxuLnNlbGVjdGlvbiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IHNwYWNlLWV2ZW5seTtcXG4gIC1tcy1mbGV4LXBhY2s6IHNwYWNlLWV2ZW5seTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4uc2hpcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb3VudCB7XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG4gIHdpZHRoOiA1cmVtO1xcbn1cXG4uc2hpcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBncmlkLWdhcDogNHB4O1xcbiAgY3Vyc29yOiBtb3ZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLnBhcnQge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGJvcmRlcjogN3B4IHNvbGlkICM0NjQ2NDY7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uYWN0aXZlIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDY0JSkgc2VwaWEoNzElKSBzYXR1cmF0ZSg0MTElKSBodWUtcm90YXRlKDM1NWRlZylcXG4gICAgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDkyJSk7XFxufVxcbi8qIC5jYXJyaWVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbiAgYm9yZGVyOiA3cHggc29saWQ7XFxufSAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0Msb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsaUZBQWlGO0VBQ2pGOzs7OzhCQUk0QjtBQUM5QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsYUFBYTtFQUNiO29DQUNrQztBQUNwQztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtBQUM5Qjs7QUFFQSxrREFBa0Q7O0FBRWxELDBCQUEwQjtBQUMxQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLHVDQUF1QztFQUN2Qyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLGFBQWE7QUFDZjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFO2lDQUMrQjtBQUNqQztBQUNBOzs7R0FHR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Eb21pbmU6d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlclxcXCIgXFxcIm1haW5cXFwiIFxcXCJmb290ZXJcXFwiO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjE1ZnIgMmZyIDAuMWZyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmVmZWU7XFxuICBmb250LWZhbWlseTogXFxcIkRvbWluZVxcXCIsIHNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExYzZlYTtcXG4gIC8qIGUxY2E5NiBBQ0E4ODUgNDM0QTQyIEY0RjRFRCBGNkJENjAgRTYzOTQ2IEE4REFEQyAyNjIzMjIgN0M2QTBBIEY1QkIwMCBCNjE3NEIgKi9cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFjYTk2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjYTg4NTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzRhNDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA2YjM0OyAqL1xcbn1cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxY2E5NjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMHB4IDU1cHggMHB4IDU1cHg7XFxufVxcblxcbi5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWNhODg1O1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjA5MGE7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNi41cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZ2l0aHViLWxvZ28ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggYmVpZ2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgLyogZmlsdGVyOiBpbnZlcnQoNzMlKSBzZXBpYSg4MSUpIHNhdHVyYXRlKDg3MCUpIGh1ZS1yb3RhdGUoMzU3ZGVnKVxcbiAgICBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoOTMlKTsgKi9cXG59XFxuLmdpdGh1Yi1sb2dvOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4zKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGJsdWU7XFxufVxcblxcbi8qIFRoaXMgaXMgZm9yIHRoZSBnYW1lYm9hcmQgaW4gdGhlIG1haW4gc2VjdGlvbiAqL1xcblxcbi8qIG5vdyB3ZSBhY3R1YWxseSBzdGFydCAqL1xcbi5zdGFydC1nYW1lLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNoaXBzIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbi5zaGlwLXBsYWNlbWVudC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc2hpcHMtcGxhY2VkLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDRyZW0pO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDRyZW0pO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdyaWQtZ2FwOiAzcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnNoaXBzLXBsYWNlZC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1nYXA6IDNweDtcXG59XFxuLmdyaWQtY2VsbCB7XFxuICB0cmFuc2l0aW9uOiBhbGwgOTBtcyBlYXNlLWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ncmlkLWNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExYzZlYTtcXG59XFxuXFxuLyogc2hpcHMgc2VsZWN0aW9uIGNvbnRhaW5lciAqL1xcbi5zZWxlY3Rpb24ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1wYWNrOiBzcGFjZS1ldmVubHk7XFxuICAtbXMtZmxleC1wYWNrOiBzcGFjZS1ldmVubHk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLnNoaXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY291bnQge1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxuICB3aWR0aDogNXJlbTtcXG59XFxuLnNoaXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgZ3JpZC1nYXA6IDRweDtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5wYXJ0IHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBib3JkZXI6IDdweCBzb2xpZCAjNDY0NjQ2O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmFjdGl2ZSB7XFxuICBmaWx0ZXI6IGludmVydCg2NCUpIHNlcGlhKDcxJSkgc2F0dXJhdGUoNDExJSkgaHVlLXJvdGF0ZSgzNTVkZWcpXFxuICAgIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCg5MiUpO1xcbn1cXG4vKiAuY2FycmllciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG4gIGJvcmRlcjogN3B4IHNvbGlkO1xcbn0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IGNhcnJpZXJTcmMgZnJvbSBcIi4uL3NyYy9hc3NldHMvaW1hZ2VzL2NhcnJpZXIuc3ZnXCI7XG4vLyBpbXBvcnQgZGVzdHJveWVyU3JjIGZyb20gXCIuLi9zcmMvYXNzZXRzL2ltYWdlcy9kZXN0cm95ZXIuc3ZnXCI7XG4vLyBpbXBvcnQgcGF0cm9sU3JjIGZyb20gXCIuLi9zcmMvYXNzZXRzL2ltYWdlcy9wYXRyb2wuc3ZnXCI7XG4vLyBpbXBvcnQgc3VibWFyaW5lU3JjIGZyb20gXCIuLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJtYXJpbmUuc3ZnXCI7XG5cbi8vIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtY29udGFpbmVyXCIpO1xuLy8gZnVuY3Rpb24gYWRkU2hpcHNJbWcoKSB7XG4vLyAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGNvbnN0IGRpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBjb25zdCBjYXJyaWVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbi8vICAgY29uc3QgZGVzdHJveWVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbi8vICAgY29uc3QgcGF0cm9sSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbi8vICAgY29uc3Qgc3VibWFyaW5lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbi8vICAgY2FycmllckltZy5zcmMgPSBjYXJyaWVyU3JjO1xuLy8gICBkZXN0cm95ZXJJbWcuc3JjID0gZGVzdHJveWVyU3JjO1xuLy8gICBwYXRyb2xJbWcuc3JjID0gcGF0cm9sU3JjO1xuLy8gICBzdWJtYXJpbmVJbWcuc3JjID0gc3VibWFyaW5lU3JjO1xuLy8gICBkaXYxLmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuLy8gICAvLyBkaXYxLmFwcGVuZENoaWxkKGNhcnJpZXJJbWcpO1xuLy8gICAvLyBkaXYyLmFwcGVuZENoaWxkKGRlc3Ryb3llckltZyk7XG4vLyAgIC8vIGRpdjMuYXBwZW5kQ2hpbGQocGF0cm9sSW1nKTtcbi8vICAgLy8gZGl2NC5hcHBlbmRDaGlsZChzdWJtYXJpbmVJbWcpO1xuLy8gICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdjEpO1xuLy8gICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdjIpO1xuLy8gICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdjMpO1xuLy8gICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdjQpO1xuLy8gfVxuLy8gLy8gYWRkU2hpcHNJbWcoKTtcbi8vIGNvbnN0IHNoaXBzUGxhY2VkQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzLXBsYWNlZC1ib2FyZFwiKTtcbi8vIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1jb250YWluZXJcIik7XG4vLyBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHMtY29udGFpbmVyXCIpO1xuLy8gbGV0IHNlbGVjdGVkU2hpcCA9IG51bGw7XG4vLyBsZXQgdHlwZSA9IG51bGw7XG4vLyBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZC1jZWxsXCIpO1xuXG4vLyBzaGlwc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbi8vICAgbGV0IHNoaXAgPSBlLnRhcmdldC5jbGFzc0xpc3Q7XG5cbi8vICAgaWYgKHNoaXAuY29udGFpbnMoXCJzaGlwXCIpKSB7XG4vLyAgICAgc2VsZWN0ZWRTaGlwID0gZS50YXJnZXQ7XG4vLyAgICAgdHlwZSA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXTtcbi8vICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFNoaXApO1xuLy8gICB9XG4vLyB9KTtcbi8vIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbi8vICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbi8vICAgICBsZXQgc3BvdCA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG5cbi8vICAgICBjb25zb2xlLmxvZyh0eXBlKTtcbi8vICAgICBpZiAoc2VsZWN0ZWRTaGlwICE9IG51bGwpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKHNwb3RbMF0pO1xuLy8gICAgICAgbGV0IHBsYWNlZFNoaXAgPSBjcmVhdGVTaGlwRG9tKHNwb3QsIHR5cGUpO1xuLy8gICAgICAgc2hpcHNQbGFjZWRCb2FyZC5hcHBlbmRDaGlsZChwbGFjZWRTaGlwKTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfSk7XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZVNoaXBEb20obmFtZSwgaGVhZCwgbGVuZ3RoLCBkaXJlY3Rpb24pIHtcbi8vICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgY29uc3QgaWR4ID0gaGVhZC50b1N0cmluZygpO1xuLy8gICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuLy8gICAgIHN3aXRjaCAobmFtZSkge1xuLy8gICAgICAgY2FzZSBcImNhcnJpZXJcIjpcbi8vICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZFJvd1N0YXJ0ID0gYCR7cGFyc2VJbnQoaWR4WzBdKSArIDF9YDtcbi8vICAgICAgICAgZGl2LnN0eWxlLmdyaWRSb3dFbmQgPSBgc3BhbiAxYDtcbi8vICAgICAgICAgZGl2LnN0eWxlLmdyaWRDb2x1bW5TdGFydCA9IGAke3BhcnNlSW50KGlkeFsxXSkgKyAxfWA7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkQ29sdW1uRW5kID0gYHNwYW4gJHtsZW5ndGh9YDtcbi8vICAgICAgICAgYnJlYWs7XG4vLyAgICAgICBjYXNlIFwiYmF0dGxlc2hpcFwiOlxuLy8gICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIik7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkUm93U3RhcnQgPSBgJHtwYXJzZUludChpZHhbMF0pICsgMX1gO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZFJvd0VuZCA9IGBzcGFuIDFgO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZENvbHVtblN0YXJ0ID0gYCR7cGFyc2VJbnQoaWR4WzFdKSArIDF9YDtcbi8vICAgICAgICAgZGl2LnN0eWxlLmdyaWRDb2x1bW5FbmQgPSBgc3BhbiAke2xlbmd0aH1gO1xuLy8gICAgICAgICBicmVhaztcbi8vICAgICAgIGNhc2UgXCJkZXN0cm95ZXJcIjpcbi8vICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZXJcIik7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkUm93U3RhcnQgPSBgJHtwYXJzZUludChpZHhbMF0pICsgMX1gO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZFJvd0VuZCA9IGBzcGFuIDFgO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZENvbHVtblN0YXJ0ID0gYCR7cGFyc2VJbnQoaWR4WzFdKSArIDF9YDtcbi8vICAgICAgICAgZGl2LnN0eWxlLmdyaWRDb2x1bW5FbmQgPSBgc3BhbiAke2xlbmd0aH1gO1xuLy8gICAgICAgICBicmVhaztcbi8vICAgICAgIGNhc2UgXCJjcnVpc2VyXCI6XG4vLyAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiY3J1aXNlclwiKTtcbi8vICAgICAgICAgZGl2LnN0eWxlLmdyaWRSb3dTdGFydCA9IGAke3BhcnNlSW50KGlkeFswXSkgKyAxfWA7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkUm93RW5kID0gYHNwYW4gMWA7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgPSBgJHtwYXJzZUludChpZHhbMV0pICsgMX1gO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZENvbHVtbkVuZCA9IGBzcGFuICR7bGVuZ3RofWA7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgY2FzZSBcInN1Ym1hcmluZVwiOlxuLy8gICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInN1Ym1hcmluZVwiKTtcbi8vICAgICAgICAgZGl2LnN0eWxlLmdyaWRSb3dTdGFydCA9IGAke3BhcnNlSW50KGlkeFswXSkgKyAxfWA7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkUm93RW5kID0gYHNwYW4gMWA7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgPSBgJHtwYXJzZUludChpZHhbMV0pICsgMX1gO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZENvbHVtbkVuZCA9IGBzcGFuICR7bGVuZ3RofWA7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgY2FzZSBcInBhdHJvbFwiOlxuLy8gICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInBhdHJvbFwiKTtcbi8vICAgICAgICAgZGl2LnN0eWxlLmdyaWRSb3dTdGFydCA9IGAke3BhcnNlSW50KGlkeFswXSkgKyAxfWA7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkUm93RW5kID0gYHNwYW4gMWA7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgPSBgJHtwYXJzZUludChpZHhbMV0pICsgMX1gO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZENvbHVtbkVuZCA9IGBzcGFuICR7bGVuZ3RofWA7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgcmV0dXJuO1xuLy8gICAgIH1cbi8vICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuLy8gICAgIHN3aXRjaCAobmFtZSkge1xuLy8gICAgICAgY2FzZSBcImNhcnJpZXJcIjpcbi8vICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZFJvd1N0YXJ0ID0gYCR7cGFyc2VJbnQoaWR4WzBdKSArIDF9YDtcbi8vICAgICAgICAgZGl2LnN0eWxlLmdyaWRSb3dFbmQgPSBgc3BhbiAxYDtcbi8vICAgICAgICAgZGl2LnN0eWxlLmdyaWRDb2x1bW5TdGFydCA9IGAke3BhcnNlSW50KGlkeFsxXSkgKyAxfWA7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkQ29sdW1uRW5kID0gYHNwYW4gJHtsZW5ndGh9YDtcbi8vICAgICAgICAgYnJlYWs7XG4vLyAgICAgICBjYXNlIFwiYmF0dGxlc2hpcFwiOlxuLy8gICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIik7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkUm93U3RhcnQgPSBgJHtwYXJzZUludChpZHhbMF0pICsgMX1gO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZFJvd0VuZCA9IGBzcGFuIDFgO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZENvbHVtblN0YXJ0ID0gYCR7cGFyc2VJbnQoaWR4WzFdKSArIDF9YDtcbi8vICAgICAgICAgZGl2LnN0eWxlLmdyaWRDb2x1bW5FbmQgPSBgc3BhbiAke2xlbmd0aH1gO1xuLy8gICAgICAgICBicmVhaztcbi8vICAgICAgIGNhc2UgXCJkZXN0cm95ZXJcIjpcbi8vICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZXJcIik7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkUm93U3RhcnQgPSBgJHtwYXJzZUludChpZHhbMF0pICsgMX1gO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZFJvd0VuZCA9IGBzcGFuIDFgO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZENvbHVtblN0YXJ0ID0gYCR7cGFyc2VJbnQoaWR4WzFdKSArIDF9YDtcbi8vICAgICAgICAgZGl2LnN0eWxlLmdyaWRDb2x1bW5FbmQgPSBgc3BhbiAke2xlbmd0aH1gO1xuLy8gICAgICAgICBicmVhaztcbi8vICAgICAgIGNhc2UgXCJjcnVpc2VyXCI6XG4vLyAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiY3J1aXNlclwiKTtcbi8vICAgICAgICAgZGl2LnN0eWxlLmdyaWRSb3dTdGFydCA9IGAke3BhcnNlSW50KGlkeFswXSkgKyAxfWA7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkUm93RW5kID0gYHNwYW4gMWA7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgPSBgJHtwYXJzZUludChpZHhbMV0pICsgMX1gO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZENvbHVtbkVuZCA9IGBzcGFuICR7bGVuZ3RofWA7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgY2FzZSBcInN1Ym1hcmluZVwiOlxuLy8gICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInN1Ym1hcmluZVwiKTtcbi8vICAgICAgICAgZGl2LnN0eWxlLmdyaWRSb3dTdGFydCA9IGAke3BhcnNlSW50KGlkeFswXSkgKyAxfWA7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkUm93RW5kID0gYHNwYW4gMWA7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgPSBgJHtwYXJzZUludChpZHhbMV0pICsgMX1gO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZENvbHVtbkVuZCA9IGBzcGFuICR7bGVuZ3RofWA7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgY2FzZSBcInBhdHJvbFwiOlxuLy8gICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInBhdHJvbFwiKTtcbi8vICAgICAgICAgZGl2LnN0eWxlLmdyaWRSb3dTdGFydCA9IGAke3BhcnNlSW50KGlkeFswXSkgKyAxfWA7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkUm93RW5kID0gYHNwYW4gMWA7XG4vLyAgICAgICAgIGRpdi5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgPSBgJHtwYXJzZUludChpZHhbMV0pICsgMX1gO1xuLy8gICAgICAgICBkaXYuc3R5bGUuZ3JpZENvbHVtbkVuZCA9IGBzcGFuICR7bGVuZ3RofWA7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgcmV0dXJuO1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIHJldHVybiBkaXY7XG4vLyB9XG4vLyAvLyBSYW5kb20gQnV0dG9uIExvZ2ljXG4vLyBjb25zdCBzaGlwQXJyYXkgPSBbXG4vLyAgIHtcbi8vICAgICBuYW1lOiBcImNhcnJpZXJcIixcbi8vICAgICBsZW5ndGg6IDUsXG4vLyAgICAgZGlyZWN0aW9uczogW1wiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbmFtZTogXCJiYXR0bGVzaGlwXCIsXG4vLyAgICAgbGVuZ3RoOiA1LFxuLy8gICAgIGRpcmVjdGlvbnM6IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIG5hbWU6IFwiZGVzdHJveWVyXCIsXG4vLyAgICAgbGVuZ3RoOiA0LFxuLy8gICAgIGRpcmVjdGlvbnM6IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIG5hbWU6IFwiY3J1aXNlclwiLFxuLy8gICAgIGxlbmd0aDogNCxcbi8vICAgICBkaXJlY3Rpb25zOiBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl0sXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBuYW1lOiBcInN1Ym1hcmluZVwiLFxuLy8gICAgIGxlbmd0aDogMyxcbi8vICAgICBkaXJlY3Rpb25zOiBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl0sXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBuYW1lOiBcInBhdHJvbFwiLFxuLy8gICAgIGxlbmd0aDogMixcbi8vICAgICBkaXJlY3Rpb25zOiBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl0sXG4vLyAgIH0sXG4vLyBdO1xuXG4vLyBjb25zdCByYW5kb21CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmRvbWl6ZVwiKTtcbi8vIHJhbmRvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbi8vICAgbGV0IHJhbmRvbU51bWJlciA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKDAsIDk5KTtcbi8vICAgbGV0IHJhbmRvbVNoaXAgPSBjcmVhdGVTaGlwRG9tKHJhbmRvbU51bWJlciwgXCJzaGlwLXR5cGUtY2FycmllclwiKTtcbi8vICAgc2hpcHNQbGFjZWRCb2FyZC5hcHBlbmRDaGlsZChyYW5kb21TaGlwKTtcbi8vIH0pO1xuLy8gZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21OdW1iZXIobWF4LCBtaW4pIHtcbi8vICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbi8vIH1cbi8vIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tU2hpcFBvc2l0aW9ucyhzaGlwKSB7XG4vLyAgIGxldCByYW5kb21EaXJlY3Rpb24gPSBnZW5lcmF0ZVJhbmRvbU51bWJlcigxLCAwKTtcbi8vICAgbGV0IGN1cnJlbnREaXJlY3Rpb24gPSBzaGlwLmRpcmVjdGlvbnNbcmFuZG9tRGlyZWN0aW9uXTtcbi8vICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbi8vICAgICBjYXNlIDA6XG4vLyAgICAgICBkaXJlY3Rpb24gPSAxO1xuLy8gICAgICAgYnJlYWs7XG4vLyAgICAgY2FzZSAxOlxuLy8gICAgICAgZGlyZWN0aW9uID0gMTA7XG4vLyAgICAgICBicmVhaztcbi8vICAgICBkZWZhdWx0OlxuLy8gICAgICAgcmV0dXJuO1xuLy8gICB9XG5cbi8vICAgbGV0IHJhbmRvbVN0YXJ0ID0gTWF0aC5hYnMoXG4vLyAgICAgTWF0aC5mbG9vcihcbi8vICAgICAgIE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclNxdWFyZXMubGVuZ3RoIC1cbi8vICAgICAgICAgc2hpcC5kaXJlY3Rpb25zWzBdLmxlbmd0aCAqIGRpcmVjdGlvblxuLy8gICAgIClcbi8vICAgKTtcblxuLy8gICBjb25zdCBpc1Rha2VuID0gY3VycmVudC5zb21lKChpbmRleCkgPT5cbi8vICAgICBjb21wdXRlclNxdWFyZXNbcmFuZG9tU3RhcnQgKyBpbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFrZW5cIilcbi8vICAgKTtcbi8vICAgY29uc3QgaXNBdFJpZ2h0RWRnZSA9IGN1cnJlbnQuc29tZShcbi8vICAgICAoaW5kZXgpID0+IChyYW5kb21TdGFydCArIGluZGV4KSAlIHdpZHRoID09PSB3aWR0aCAtIDFcbi8vICAgKTtcbi8vICAgY29uc3QgaXNBdExlZnRFZGdlID0gY3VycmVudC5zb21lKFxuLy8gICAgIChpbmRleCkgPT4gKHJhbmRvbVN0YXJ0ICsgaW5kZXgpICUgd2lkdGggPT09IDBcbi8vICAgKTtcblxuLy8gICBpZiAoIWlzVGFrZW4gJiYgIWlzQXRSaWdodEVkZ2UgJiYgIWlzQXRMZWZ0RWRnZSlcbi8vICAgICBjdXJyZW50LmZvckVhY2goKGluZGV4KSA9PlxuLy8gICAgICAgY29tcHV0ZXJTcXVhcmVzW3JhbmRvbVN0YXJ0ICsgaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJ0YWtlblwiLCBzaGlwLm5hbWUpXG4vLyAgICAgKTtcbi8vICAgZWxzZSBnZW5lcmF0ZShzaGlwKTtcbi8vIH1cblxuLy8gbGV0cyBncmFiIHRoZSBjb3JyZXNwb25kaW5nIHNoaXBzIGRpdnNcbmNvbnN0IGNhcnJpZXJTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJyaWVyXCIpO1xuY29uc3QgZGVzdHJveWVyU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzdHJveWVyXCIpO1xuY29uc3Qgc3VibWFyaW5lU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWFyaW5lXCIpO1xuY29uc3QgcGF0cm9sU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGF0cm9sXCIpO1xuY29uc29sZS5sb2coY2FycmllclNoaXAsIGRlc3Ryb3llclNoaXAsIHN1Ym1hcmluZVNoaXAsIHBhdHJvbFNoaXApO1xuXG4vLyBsZXRzIGdyYWIgdGhlIGJvYXJkIHRvIGJlIGFwcGVuZGVkIHRvXG5jb25zdCBzaGlwc1BsYWNlZEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1jb250YWluZXJcIik7XG5jb25zdCBib2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLWNlbGxcIik7XG5jb25zb2xlLmxvZyhzaGlwc1BsYWNlZEJvYXJkLCBib2FyZENlbGxzKTtcblxuLy8gdGhlIG9iamVjdGl2ZSBpcyB0byBhcHBlbmQgYSBzZWxlY3RlZCBzaGlwIGludG8gYSBncmlkIGNlbGxcbi8vIElkIG5lZWQgdG8gc2VsZWN0IHRoZSBzaGlwXG4vLyBpZCBuZWVkIHRvIHNlbGVjdCB0aGUgdGFyZ2V0IGdyaWQgY2VsbFxuLy8gaWQgbmVlZCB0byBzZXQgdGhlIHNldCB0aGUgaGVhZCBvZiBteSBzZWxlY3RlZCBzaGlwIHRvIHRoZSB0YXJnZXRlZCBncmlkIGNlbGxcbi8vIGlkIG5lZWQgdG8gYmUgYWJsZSB0byBtb3ZlIGl0IGZyb20gY2VsbCB0byBjZWxsXG5cbi8vIHNlbGVjdCBhIHNoaXBcbmxldCBjdXJyZW50U2hpcCA9IG51bGw7XG5cbi8vIHNldCBldmVudCBsaXN0bmVyIG9uIHNoaXBzXG5sZXQgc2hpcHMgPSBbY2FycmllclNoaXAsIGRlc3Ryb3llclNoaXAsIHN1Ym1hcmluZVNoaXAsIHBhdHJvbFNoaXBdO1xuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGN1cnJlbnRTaGlwID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTaGlwKTtcbiAgfSk7XG59KTtcbi8vIHNldCBldmVudCBsaXN0bmVyIG9uIGdyaWRzXG5ib2FyZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnNvbGUubG9nKGJvYXJkQ2VsbHNbMF0pO1xuICAgIGxldCBpZHggPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xuICAgIGNvbnNvbGUubG9nKGlkeCk7XG4gICAgbGV0IGN1cnJlbnRDZWxsID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChjdXJyZW50U2hpcCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICBib2FyZENlbGxzW2lkeCArIGldLmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhjZWxsKTtcbiAgfSk7XG59KTtcbi8vIGkgd2FudCBhIHZpc3VhbCBhaWQgdGhhdCBzaG93cyB3aGVyZSB5b3Ugd2FudCB5b3VyIHNoaXAgdG8gYmUgYXRcbi8vIGkgd2FudCB0byBhZGQgdGhlIHNoaXAgcHJvcGVydGllcyB0byB0aGUgZ3JpZCBjZWxsIGl0c2VsZlxuLy8gaSB3YW50IHRvIGNoYW5nZSB0aGUgc3R5bGluZyBvZiB0aGUgZ3JpZCBjZWxsXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=