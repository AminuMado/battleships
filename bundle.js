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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./src/assets/font/SketchPencilDemoItalic.ttf */ "./src/assets/font/SketchPencilDemoItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./src/assets/font/Crosshatcher.otf */ "./src/assets/font/Crosshatcher.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./src/assets/font/HandrushDemoRegular.ttf */ "./src/assets/font/HandrushDemoRegular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./src/assets/images/battleship.jpg */ "./src/assets/images/battleship.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: SketchPencil;\n\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: Crosshatcher;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n@font-face {\n  font-family: Handrush;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  display: grid;\n  grid-template-areas: \"header\" \"main\" \"footer\";\n  grid-template-rows: 0.15fr 2fr 0.1fr;\n  width: 100vw;\n  height: 100vh;\n  font-family: Crosshatcher, SketchPencil, Handrush;\n  background-color: #ededed;\n}\n.header {\n  grid-area: header;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 55px 0px 55px;\n}\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n}\n.footer {\n  grid-area: footer;\n  background-color: #8a8a8a;\n  color: aliceblue;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6.5px;\n  padding: 10px;\n  font-size: 20px;\n  font-family: Domine;\n}\n.github-logo {\n  width: 20px;\n  height: 20px;\n  transition: all 300ms linear;\n  border-radius: 50%;\n  box-shadow: 0px 0px 5px beige;\n  cursor: pointer;\n  color: orange;\n}\n.github-logo:hover {\n  transform: rotate(360deg) scale(1.3);\n  box-shadow: 0px 0px 5px rgb(0, 0, 255);\n}\n\n/* This is for the gameboard in the main section */\n\n/* now we actually start */\n\n.p1-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-gap: 3px;\n}\n.p1-board-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.p2-board-container {\n  display: flex;\n  flex-direction: column;\n  transform: scale(0);\n  opacity: 0;\n  gap: 10px;\n}\n.p2-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-gap: 3px;\n}\n.p1-grid-cell,\n.p2-grid-cell {\n  transition: all 90ms ease-in;\n  display: flex;\n  align-items: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 4px solid black;\n  position: relative;\n  box-sizing: border-box;\n}\n.board-info {\n  transition: all 1s ease-in-out;\n}\nh3 {\n  border-bottom: 2px solid;\n  text-align: center;\n}\nh4 {\n  text-align: center;\n}\n\n/* ships selection container */\n.ship-selection-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 20px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: space-evenly;\n  -ms-flex-pack: space-evenly;\n  justify-content: space-evenly;\n  position: absolute;\n  left: 60%;\n}\n.ship-selection-container p {\n  font-size: 60px;\n}\n.ship-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.ship {\n  display: flex;\n  gap: 3px;\n}\n.part {\n  width: 2rem;\n  height: 2rem;\n  border: 10px solid #000000;\n}\n/* .active {\n  transform: scale(1.05);\n  box-shadow: 5px 5px 0px 0px green;\n} */\n.battleship {\n  background-color: navy;\n  border: 7px solid;\n  transform: scale(1);\n}\n.cruiser {\n  background-color: brown;\n  border: 7px solid;\n}\n.destroyer {\n  background-color: teal;\n  border: 7px solid;\n}\n.submarine {\n  background-color: blueviolet;\n  border: 7px solid;\n}\n.patrol {\n  background-color: lawngreen;\n  border: 7px solid;\n}\n.hover {\n  background-color: rgb(174, 171, 171);\n}\n/* game board */\n.gameboards-container {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n  gap: 60px;\n}\n\n.show {\n  transform: scale(1.1);\n  opacity: 1;\n  transition: all 1s ease-in-out;\n}\n.inactive {\n  transform: scale(0);\n  opacity: 0;\n  transition: all 1s ease-in-out;\n}\n.disable {\n  transform: scale(0.7);\n  opacity: 0.8;\n  transition: all 1s ease-in-out;\n  pointer-events: none;\n}\n/* hover styling */\n\n.p2-grid-cell:hover::after {\n  content: \"\";\n  position: absolute;\n  left: 25%;\n  top: 25%;\n  height: 50%;\n  width: 50%;\n  border-radius: 50%;\n  background: #dd1c1a;\n  display: block;\n  animation: pulse 1.5s ease 0s infinite;\n}\n\n.p2-grid-cell:hover::before {\n  content: \"\";\n  position: absolute;\n  left: 25%;\n  top: 25%;\n  height: 50%;\n  width: 50%;\n  border-radius: 50%;\n  background: #c1292e;\n  display: block;\n  animation: pulse2 1.5s ease 0s infinite;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 1;\n    transform: scale(0.5);\n  }\n  80% {\n    opacity: 0;\n    transform: scale(2);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n\n@keyframes pulse2 {\n  0% {\n    opacity: 1;\n    transform: scale(0.5);\n  }\n  30% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.5);\n  }\n}\n/* hit and miss */\n.miss {\n  background-color: aqua;\n  pointer-events: none;\n}\n\n.miss:after {\n  content: \"\\f111\";\n  position: absolute;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  font-size: 15px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: aqua;\n}\n.hit {\n  background-color: firebrick;\n  pointer-events: none;\n}\n.hit:after {\n  content: \"\\f00d\";\n  position: absolute;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  font-size: 20px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* start Page */\n.overlay-menu {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.8);\n  opacity: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  transition: all 1s ease-in-out;\n  pointer-events: none;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.overlay-menu.active {\n  opacity: 1;\n  pointer-events: all;\n}\n.start-page {\n  position: fixed;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  opacity: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  transition: all 2s ease-in-out;\n  pointer-events: none;\n  z-index: 2;\n  background-repeat: round;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-content: center;\n  align-items: center;\n  gap: 5%;\n}\n.start-page.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.title {\n  margin: 10px;\n  font-size: 650%;\n  color: #8a8a8a;\n}\n.start-btn {\n  font-size: 4.2rem;\n  text-align: center;\n  outline: none;\n  font-family: Crosshatcher;\n  cursor: pointer;\n  transition: all 0.51s ease-in-out;\n  font-weight: bolder;\n}\n\nbutton {\n  background-color: transparent;\n  border-style: none;\n  color: inherit;\n  font-family: Crosshatcher;\n  transition: all 0.51s ease-in-out;\n  color: #8a8a8a;\n  font-size: 30px;\n}\nbutton:hover {\n  color: brown;\n  transform: scale(1.2);\n  cursor: pointer;\n}\nbutton:active {\n  transform: scale(1.4);\n}\n/* menu */\n.menu-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5%;\n  width: 100%;\n  height: 40%;\n  background: black;\n  opacity: 0;\n}\n.menu-page.active {\n  opacity: 1;\n}\n\n.menu-btn {\n  font-size: 50px;\n  color: #8a8a8a;\n}\n/* button container */\n.button-container {\n  display: flex;\n  gap: 40px;\n}\n/* result page */\n.overlay-result {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.8);\n  opacity: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  transition: all 1s ease-in-out;\n  pointer-events: none;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.overlay-result.active {\n  opacity: 1;\n  pointer-events: all;\n}\n.result-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5%;\n  width: 100%;\n  height: 40%;\n  background: black;\n  color: #8a8a8a;\n  font-size: 150px;\n  opacity: 0;\n}\n.result-page.active {\n  opacity: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;EACE,yBAAyB;;EAEzB,4CAAuH;AACzH;AACA;EACE,yBAAyB;EACzB,4CAA6G;AAC/G;AACA;EACE,qBAAqB;EACrB,4CAAoH;AACtH;AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,aAAa;EACb,6CAA6C;EAC7C,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,iDAAiD;EACjD,yBAAyB;AAC3B;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,0BAA0B;AAC5B;AACA;EACE,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,aAAa;EACb,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;EAC5B,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;EACf,aAAa;AACf;AACA;EACE,oCAAoC;EACpC,sCAAsC;AACxC;;AAEA,kDAAkD;;AAElD,0BAA0B;;AAE1B;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;EACV,SAAS;AACX;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,aAAa;AACf;AACA;;EAEE,4BAA4B;EAC5B,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;;AAEA,8BAA8B;AAC9B;EACE,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,SAAS;EACT,4BAA4B;EAC5B,6BAA6B;EAC7B,0BAA0B;EAC1B,sBAAsB;EACtB,8BAA8B;EAC9B,2BAA2B;EAC3B,6BAA6B;EAC7B,kBAAkB;EAClB,SAAS;AACX;AACA;EACE,eAAe;AACjB;AACA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;AAC5B;AACA;;;GAGG;AACH;EACE,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,uBAAuB;EACvB,iBAAiB;AACnB;AACA;EACE,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE,4BAA4B;EAC5B,iBAAiB;AACnB;AACA;EACE,2BAA2B;EAC3B,iBAAiB;AACnB;AACA;EACE,oCAAoC;AACtC;AACA,eAAe;AACf;EACE,aAAa;EACb,qBAAqB;EACrB,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,8BAA8B;AAChC;AACA;EACE,mBAAmB;EACnB,UAAU;EACV,8BAA8B;AAChC;AACA;EACE,qBAAqB;EACrB,YAAY;EACZ,8BAA8B;EAC9B,oBAAoB;AACtB;AACA,kBAAkB;;AAElB;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,WAAW;EACX,UAAU;EACV,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,sCAAsC;AACxC;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,WAAW;EACX,UAAU;EACV,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,uCAAuC;AACzC;;AAEA;EACE;IACE,UAAU;IACV,qBAAqB;EACvB;EACA;IACE,UAAU;IACV,mBAAmB;EACrB;EACA;IACE,UAAU;IACV,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,UAAU;IACV,qBAAqB;EACvB;EACA;IACE,UAAU;IACV,qBAAqB;EACvB;EACA;IACE,UAAU;IACV,qBAAqB;EACvB;AACF;AACA,iBAAiB;AACjB;EACE,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kCAAkC;EAClC,gBAAgB;EAChB,eAAe;EACf,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,sBAAsB;AACxB;AACA;EACE,2BAA2B;EAC3B,oBAAoB;AACtB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kCAAkC;EAClC,gBAAgB;EAChB,eAAe;EACf,SAAS;EACT,QAAQ;EACR,gCAAgC;AAClC;;AAEA,eAAe;AACf;EACE,eAAe;EACf,oCAAoC;EACpC,UAAU;EACV,OAAO;EACP,QAAQ;EACR,SAAS;EACT,MAAM;EACN,8BAA8B;EAC9B,oBAAoB;EACpB,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,yDAA0H;EAC1H,UAAU;EACV,OAAO;EACP,QAAQ;EACR,SAAS;EACT,MAAM;EACN,8BAA8B;EAC9B,oBAAoB;EACpB,UAAU;EACV,wBAAwB;EACxB,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,qBAAqB;EACrB,mBAAmB;EACnB,OAAO;AACT;AACA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,cAAc;AAChB;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,yBAAyB;EACzB,eAAe;EACf,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,cAAc;EACd,yBAAyB;EACzB,iCAAiC;EACjC,cAAc;EACd,eAAe;AACjB;AACA;EACE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;AACA;EACE,qBAAqB;AACvB;AACA,SAAS;AACT;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,OAAO;EACP,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,UAAU;AACZ;AACA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;AACA,qBAAqB;AACrB;EACE,aAAa;EACb,SAAS;AACX;AACA,gBAAgB;AAChB;EACE,eAAe;EACf,oCAAoC;EACpC,UAAU;EACV,OAAO;EACP,QAAQ;EACR,SAAS;EACT,MAAM;EACN,8BAA8B;EAC9B,oBAAoB;EACpB,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,OAAO;EACP,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,cAAc;EACd,gBAAgB;EAChB,UAAU;AACZ;AACA;EACE,UAAU;AACZ","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600&display=swap\");\n@font-face {\n  font-family: SketchPencil;\n\n  src: url(/home/aminumado/Git-Repository/Projects/TheOdinProject/battleships/src/assets/font/SketchPencilDemoItalic.ttf);\n}\n@font-face {\n  font-family: Crosshatcher;\n  src: url(/home/aminumado/Git-Repository/Projects/TheOdinProject/battleships/src/assets/font/Crosshatcher.otf);\n}\n@font-face {\n  font-family: Handrush;\n  src: url(/home/aminumado/Git-Repository/Projects/TheOdinProject/battleships/src/assets/font/HandrushDemoRegular.ttf);\n}\n* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  display: grid;\n  grid-template-areas: \"header\" \"main\" \"footer\";\n  grid-template-rows: 0.15fr 2fr 0.1fr;\n  width: 100vw;\n  height: 100vh;\n  font-family: Crosshatcher, SketchPencil, Handrush;\n  background-color: #ededed;\n}\n.header {\n  grid-area: header;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 55px 0px 55px;\n}\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n}\n.footer {\n  grid-area: footer;\n  background-color: #8a8a8a;\n  color: aliceblue;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6.5px;\n  padding: 10px;\n  font-size: 20px;\n  font-family: Domine;\n}\n.github-logo {\n  width: 20px;\n  height: 20px;\n  transition: all 300ms linear;\n  border-radius: 50%;\n  box-shadow: 0px 0px 5px beige;\n  cursor: pointer;\n  color: orange;\n}\n.github-logo:hover {\n  transform: rotate(360deg) scale(1.3);\n  box-shadow: 0px 0px 5px rgb(0, 0, 255);\n}\n\n/* This is for the gameboard in the main section */\n\n/* now we actually start */\n\n.p1-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-gap: 3px;\n}\n.p1-board-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.p2-board-container {\n  display: flex;\n  flex-direction: column;\n  transform: scale(0);\n  opacity: 0;\n  gap: 10px;\n}\n.p2-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-gap: 3px;\n}\n.p1-grid-cell,\n.p2-grid-cell {\n  transition: all 90ms ease-in;\n  display: flex;\n  align-items: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 4px solid black;\n  position: relative;\n  box-sizing: border-box;\n}\n.board-info {\n  transition: all 1s ease-in-out;\n}\nh3 {\n  border-bottom: 2px solid;\n  text-align: center;\n}\nh4 {\n  text-align: center;\n}\n\n/* ships selection container */\n.ship-selection-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 20px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: space-evenly;\n  -ms-flex-pack: space-evenly;\n  justify-content: space-evenly;\n  position: absolute;\n  left: 60%;\n}\n.ship-selection-container p {\n  font-size: 60px;\n}\n.ship-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.ship {\n  display: flex;\n  gap: 3px;\n}\n.part {\n  width: 2rem;\n  height: 2rem;\n  border: 10px solid #000000;\n}\n/* .active {\n  transform: scale(1.05);\n  box-shadow: 5px 5px 0px 0px green;\n} */\n.battleship {\n  background-color: navy;\n  border: 7px solid;\n  transform: scale(1);\n}\n.cruiser {\n  background-color: brown;\n  border: 7px solid;\n}\n.destroyer {\n  background-color: teal;\n  border: 7px solid;\n}\n.submarine {\n  background-color: blueviolet;\n  border: 7px solid;\n}\n.patrol {\n  background-color: lawngreen;\n  border: 7px solid;\n}\n.hover {\n  background-color: rgb(174, 171, 171);\n}\n/* game board */\n.gameboards-container {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n  gap: 60px;\n}\n\n.show {\n  transform: scale(1.1);\n  opacity: 1;\n  transition: all 1s ease-in-out;\n}\n.inactive {\n  transform: scale(0);\n  opacity: 0;\n  transition: all 1s ease-in-out;\n}\n.disable {\n  transform: scale(0.7);\n  opacity: 0.8;\n  transition: all 1s ease-in-out;\n  pointer-events: none;\n}\n/* hover styling */\n\n.p2-grid-cell:hover::after {\n  content: \"\";\n  position: absolute;\n  left: 25%;\n  top: 25%;\n  height: 50%;\n  width: 50%;\n  border-radius: 50%;\n  background: #dd1c1a;\n  display: block;\n  animation: pulse 1.5s ease 0s infinite;\n}\n\n.p2-grid-cell:hover::before {\n  content: \"\";\n  position: absolute;\n  left: 25%;\n  top: 25%;\n  height: 50%;\n  width: 50%;\n  border-radius: 50%;\n  background: #c1292e;\n  display: block;\n  animation: pulse2 1.5s ease 0s infinite;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 1;\n    transform: scale(0.5);\n  }\n  80% {\n    opacity: 0;\n    transform: scale(2);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n\n@keyframes pulse2 {\n  0% {\n    opacity: 1;\n    transform: scale(0.5);\n  }\n  30% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.5);\n  }\n}\n/* hit and miss */\n.miss {\n  background-color: aqua;\n  pointer-events: none;\n}\n\n.miss:after {\n  content: \"\\f111\";\n  position: absolute;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  font-size: 15px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: aqua;\n}\n.hit {\n  background-color: firebrick;\n  pointer-events: none;\n}\n.hit:after {\n  content: \"\\f00d\";\n  position: absolute;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  font-size: 20px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* start Page */\n.overlay-menu {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.8);\n  opacity: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  transition: all 1s ease-in-out;\n  pointer-events: none;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.overlay-menu.active {\n  opacity: 1;\n  pointer-events: all;\n}\n.start-page {\n  position: fixed;\n  background-image: url(/home/aminumado/Git-Repository/Projects/TheOdinProject/battleships/src/assets/images/battleship.jpg);\n  opacity: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  transition: all 2s ease-in-out;\n  pointer-events: none;\n  z-index: 2;\n  background-repeat: round;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-content: center;\n  align-items: center;\n  gap: 5%;\n}\n.start-page.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.title {\n  margin: 10px;\n  font-size: 650%;\n  color: #8a8a8a;\n}\n.start-btn {\n  font-size: 4.2rem;\n  text-align: center;\n  outline: none;\n  font-family: Crosshatcher;\n  cursor: pointer;\n  transition: all 0.51s ease-in-out;\n  font-weight: bolder;\n}\n\nbutton {\n  background-color: transparent;\n  border-style: none;\n  color: inherit;\n  font-family: Crosshatcher;\n  transition: all 0.51s ease-in-out;\n  color: #8a8a8a;\n  font-size: 30px;\n}\nbutton:hover {\n  color: brown;\n  transform: scale(1.2);\n  cursor: pointer;\n}\nbutton:active {\n  transform: scale(1.4);\n}\n/* menu */\n.menu-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5%;\n  width: 100%;\n  height: 40%;\n  background: black;\n  opacity: 0;\n}\n.menu-page.active {\n  opacity: 1;\n}\n\n.menu-btn {\n  font-size: 50px;\n  color: #8a8a8a;\n}\n/* button container */\n.button-container {\n  display: flex;\n  gap: 40px;\n}\n/* result page */\n.overlay-result {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.8);\n  opacity: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  transition: all 1s ease-in-out;\n  pointer-events: none;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.overlay-result.active {\n  opacity: 1;\n  pointer-events: all;\n}\n.result-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5%;\n  width: 100%;\n  height: 40%;\n  background: black;\n  color: #8a8a8a;\n  font-size: 150px;\n  opacity: 0;\n}\n.result-page.active {\n  opacity: 1;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ }),

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computerSetup": () => (/* binding */ computerSetup)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _createPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPlayer */ "./src/createPlayer.js");



const computerSetup = () => {
  const computer = (0,_createPlayer__WEBPACK_IMPORTED_MODULE_2__.createPlayer)("P2");
  const computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.createGameBoard)(10, 10);
  const computerShips = computer.getFleet();
  const board = document.querySelectorAll(".p2-grid-cell");
  // this generates the ships at random locations
  computerShips.forEach((ship) => {
    _dom__WEBPACK_IMPORTED_MODULE_0__.dom.board.randomize(ship, board);
    _dom__WEBPACK_IMPORTED_MODULE_0__.dom.board.placeShip(ship, board);
  });
  //this means your ships array have a body in them ready to placed on a board
  computerShips.forEach((computerShip) => {
    computerBoard.placeShip(computerShip);
  });
  computerShips.forEach((ship) => {
    _dom__WEBPACK_IMPORTED_MODULE_0__.dom.board.clearShip(ship, board);
  });
  return { computer, computerBoard, computerShips };
};



/***/ }),

/***/ "./src/createPlayer.js":
/*!*****************************!*\
  !*** ./src/createPlayer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPlayer": () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");


function createPlayer(name) {
  let fleet = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createFleet)(_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ships);
  const getName = () => name;
  const getFleet = () => fleet;
  const resetFleet = () => (fleet = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createFleet)(_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ships));
  const attack = (coord, board) => board.receiveAttack(coord);
  const autoAttack = (board) => {
    const randomSpot = Math.floor(Math.random() * 99);
    const enemyBoard = board.getGameBoard();
    const cell = enemyBoard[randomSpot];
    if (cell === 0 || cell === 1) {
      // tries again until a valid cell is picked
      autoAttack(board);
    } else {
      // attacks a valid cell
      board.receiveAttack(randomSpot);
    }
  };

  return { attack, autoAttack, getName, getFleet, resetFleet };
}



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dom": () => (/* binding */ dom)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
//This handles all the dom stuff



const dom = (() => {
  //constants
  const p1Board = document.querySelector(".p1-board");
  const p2Board = document.querySelector(".p2-board");
  const fleet = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createFleet)(_helpers__WEBPACK_IMPORTED_MODULE_0__.ships);
  let direction = "horizontal";
  let activeShip = null;
  const generateBoard = (width, height) => {
    const boardSize = width * height;
    for (let i = 0; i < boardSize; i++) {
      let cell1 = document.createElement("div");
      let cell2 = document.createElement("div");
      cell1.classList.add("p1-grid-cell");
      cell1.dataset.id = i;
      cell2.classList.add("p2-grid-cell");
      cell2.dataset.id = i;
      p1Board.appendChild(cell1);
      p2Board.appendChild(cell2);
    }
  };
  const getFleet = () => fleet;
  //ship container
  const ship = (() => {
    //this should be an initialized function
    const ships = document.querySelectorAll(".ship");
    ships.forEach((ship, index) => {
      ship.addEventListener("click", (e) => {
        activeShip = fleet[index];
        switchActiveShip(index);
      });
    });
    const clearActiveShip = () => {
      ships.forEach((ship) => ship.classList.remove("active"));
    };
    const switchActiveShip = (index) => {
      clearActiveShip();
      ships[index].classList.add("active");
    };
    // const rotate = () => {
    //   const rotateBtn = document.querySelector(".rotate");
    //   rotateBtn.addEventListener("click", (e) => {
    //     direction = direction == "horizontal" ? "vertical" : "horizontal";
    //   });
    // };
    return { clearActiveShip, switchActiveShip };
  })();
  const board = (() => {
    const clearShip = (ship, board) => {
      let name = ship.getName();
      [...board].filter((cell) => {
        let result = cell.classList.contains(name);
        if (result) {
          cell.classList.remove(name);
          cell.classList.remove("taken");
        }
      });
    };
    const placeShip = (ship, board) => {
      let name = ship.getName();
      let body = ship.getBody();
      body.forEach((cell) => {
        board[cell].classList.add(`${name}`);
        board[cell].classList.add("taken");
      });
    };
    const isTaken = (ship, board) => {
      let body = ship.getBody();
      let length = ship.getLength();
      let result = false;
      for (let i = 0; i < length; i++) {
        let cell = body[i];
        if (board[cell].classList.contains("taken")) {
          result = true;
          break;
        }
      }
      return result;
    };
    const isOutsideBoundary = (ship) => {
      let body = ship.getBody();
      let length = ship.getLength();
      let result = false;
      for (let i = 0; i < length - 1; i++) {
        if (body[i] % 10 === 9) {
          result = true;
          break;
        }
      }
      for (let i = 0; i < length; i++) {
        if (body[i] > 99) {
          result = true;
          break;
        }
      }
      return result;
    };
    const randomize = (ship, board) => {
      let randomDirection = Math.floor(Math.random() * 2);
      let randomSpot = Math.floor(Math.random() * 99);
      if (randomDirection === 0) {
        randomDirection = "horizontal";
      } else randomDirection = "vertical";

      ship.buildBody(randomSpot, randomDirection);

      if (isOutsideBoundary(ship)) {
        randomize(ship, board);
        return;
      }
      if (isTaken(ship, board)) {
        randomize(ship, board);
        return;
      }
    };
    const addHover = (ship, board) => {
      let body = ship.getBody();
      body.forEach((cell) => {
        board[cell].classList.add("hover");
      });
    };
    const clearHover = (board) => {
      [...board].filter((cell) => {
        let hover = cell.classList.contains("hover");
        let cursor = cell.style.cursor;
        if (hover) {
          cell.classList.remove("hover");
        }
        if (cursor === "not-allowed") {
          cell.style.cursor = "pointer";
        }
      });
    };
    return {
      clearShip,
      placeShip,
      addHover,
      clearHover,
      randomize,
      isOutsideBoundary,
      isTaken,
    };
  })();
  const start = () => {
    const p1BoardContainer = document.querySelector(".p1-board-container");
    const p2BoardContainer = document.querySelector(".p2-board-container");
    const shipSelectionContainer = document.querySelector(
      ".ship-selection-container"
    );
    const boardInfo = document.querySelector(".board-info");
    p1BoardContainer.classList.add("disable");
    p2BoardContainer.classList.add("show");
    shipSelectionContainer.classList.add("inactive");
    boardInfo.classList.remove("inactive");
    activeShip = null;
  };
  const render = (player, board) => {
    const p1BoardCells = document.querySelectorAll(".p1-grid-cell");
    const p2BoardCells = document.querySelectorAll(".p2-grid-cell");
    if (player === "p1") {
      board.forEach((cell, index) => {
        if (cell == 0) {
          //miss
          p1BoardCells[index].classList.add("miss");
        } else if (cell === 1) {
          //hit
          p1BoardCells[index].classList.add("hit");
        }
      });
    } else if (player === "p2") {
      board.forEach((cell, index) => {
        if (cell == 0) {
          //miss
          p2BoardCells[index].classList.add("miss");
        } else if (cell === 1) {
          //hit
          p2BoardCells[index].classList.add("hit");
        }
      });
    }
  };
  return {
    generateBoard,
    activeShip,
    ship,
    getFleet,
    start,
    board,
    direction,
    render,
  };
})();



/***/ }),

/***/ "./src/eventlistners.js":
/*!******************************!*\
  !*** ./src/eventlistners.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "events": () => (/* binding */ events)
/* harmony export */ });
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer */ "./src/computer.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");



let p1;
let p2;
//ships
const events = () => {
  const ships = document.querySelectorAll(".ship");
  ships.forEach((ship, index) => {
    ship.addEventListener("click", (e) => {
      _dom__WEBPACK_IMPORTED_MODULE_1__.dom.activeShip = _dom__WEBPACK_IMPORTED_MODULE_1__.dom.getFleet()[index];
      _dom__WEBPACK_IMPORTED_MODULE_1__.dom.ship.switchActiveShip(index);
      console.log(_dom__WEBPACK_IMPORTED_MODULE_1__.dom.activeShip.getName());
      console.log(_dom__WEBPACK_IMPORTED_MODULE_1__.dom.activeShip.getBody());
    });
  });

  //boards
  //handles the ship placement on click event
  let valid = false;
  const p1BoardCells = document.querySelectorAll(".p1-grid-cell");
  p1BoardCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (_dom__WEBPACK_IMPORTED_MODULE_1__.dom.activeShip === null) return;
      if (!valid) return;
      _dom__WEBPACK_IMPORTED_MODULE_1__.dom.board.clearShip(_dom__WEBPACK_IMPORTED_MODULE_1__.dom.activeShip, p1BoardCells);
      _dom__WEBPACK_IMPORTED_MODULE_1__.dom.board.placeShip(_dom__WEBPACK_IMPORTED_MODULE_1__.dom.activeShip, p1BoardCells);
    });
  });
  //handles the hover effect event
  p1BoardCells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      if (_dom__WEBPACK_IMPORTED_MODULE_1__.dom.activeShip === null) return;
      let idx = parseInt(cell.getAttribute("data-id"));
      _dom__WEBPACK_IMPORTED_MODULE_1__.dom.activeShip.buildBody(idx, _dom__WEBPACK_IMPORTED_MODULE_1__.dom.direction);
      _dom__WEBPACK_IMPORTED_MODULE_1__.dom.board.clearHover(p1BoardCells);
      if (
        _dom__WEBPACK_IMPORTED_MODULE_1__.dom.board.isOutsideBoundary(_dom__WEBPACK_IMPORTED_MODULE_1__.dom.activeShip) ||
        _dom__WEBPACK_IMPORTED_MODULE_1__.dom.board.isTaken(_dom__WEBPACK_IMPORTED_MODULE_1__.dom.activeShip, p1BoardCells)
      ) {
        cell.style.cursor = "not-allowed";
        valid = false;
        return;
      }
      _dom__WEBPACK_IMPORTED_MODULE_1__.dom.board.addHover(_dom__WEBPACK_IMPORTED_MODULE_1__.dom.activeShip, p1BoardCells);
      valid = true;
    });
  });
  // This clears the hover effect if you leave the board
  const p1Board = document.querySelector(".p1-board");
  p1Board.addEventListener("mouseleave", (e) => {
    _dom__WEBPACK_IMPORTED_MODULE_1__.dom.board.clearHover(p1BoardCells);
  });
  // this handles attacking the enemy board
  const p2BoardCells = document.querySelectorAll(".p2-grid-cell");
  p2BoardCells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      let coordinate = parseInt(e.target.getAttribute("data-id"));
      //insert player attack function here
      console.log(coordinate);
    });
  });

  //randomBtn
  const randomBtn = document.querySelector(".random");
  randomBtn.addEventListener("click", () => {
    _dom__WEBPACK_IMPORTED_MODULE_1__.dom.getFleet().forEach((ship) => {
      _dom__WEBPACK_IMPORTED_MODULE_1__.dom.board.randomize(ship, p1BoardCells);
      _dom__WEBPACK_IMPORTED_MODULE_1__.dom.board.clearShip(ship, p1BoardCells);
      _dom__WEBPACK_IMPORTED_MODULE_1__.dom.board.placeShip(ship, p1BoardCells);
    });
  });

  // rotatebtn
  const rotateBtn = document.querySelector(".rotate");
  rotateBtn.addEventListener("click", () => {
    _dom__WEBPACK_IMPORTED_MODULE_1__.dom.direction = _dom__WEBPACK_IMPORTED_MODULE_1__.dom.direction == "horizontal" ? "vertical" : "horizontal";
  });

  // startbtn
  const startBtn = document.querySelector(".start");
  startBtn.addEventListener("click", function (e) {
    //add startbtn function
    _dom__WEBPACK_IMPORTED_MODULE_1__.dom.start();
    p1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__.playerSetup)();
    p2 = (0,_computer__WEBPACK_IMPORTED_MODULE_0__.computerSetup)();
  });

  //startpage
  const startPageStartBtn = document.querySelector(".start-btn");
  const startPage = document.querySelector(".start-page");
  startPageStartBtn.addEventListener("click", (e) => {
    // reset();
    startPage.classList.remove("active");
  });

  // menu
  const menuBtn = document.querySelector(".menu-btn");
  const menuOverlay = document.querySelector(".overlay-menu");
  const menuPage = document.querySelector(".menu-page");
  menuBtn.addEventListener("click", (e) => {
    menuOverlay.classList.add("active");
    menuPage.classList.add("active");
  });
  const resumeBtn = document.querySelector(".resume-btn");
  resumeBtn.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
    menuPage.classList.remove("active");
  });
  const restartBtn = document.querySelector(".restart-btn");
  restartBtn.addEventListener("click", () => {
    window.location.reload();
  });

  // result

  const playAgainBtn = document.querySelector(".play-again");
  playAgainBtn.addEventListener("click", () => {
    window.location.reload();
  });
  const p2Board = document.querySelector(".p2-board");
  p2Board.addEventListener("click", (e) => {
    let cell = e.target;
    if (cell.classList.contains("p2-grid-cell")) {
      let idx = parseInt(cell.getAttribute("data-id"));
      console.log(p1, p2);
      p1.player.attack(idx, p2.computerBoard);
      p2.computer.autoAttack(p1.playerBoard);
      _dom__WEBPACK_IMPORTED_MODULE_1__.dom.render("p1", p1.playerBoard.getGameBoard());
      _dom__WEBPACK_IMPORTED_MODULE_1__.dom.render("p2", p2.computerBoard.getGameBoard());
      if (p1.playerBoard.allShipsSunk()) {
        const resultOverlay = document.querySelector(".overlay-result");
        const resultPage = document.querySelector(".result-page");
        const resultMessage = document.querySelector(".result-message");
        resultOverlay.classList.add("active");
        resultPage.classList.add("active");
        resultMessage.textContent = "You Lose";
      }
      if (p2.computerBoard.allShipsSunk()) {
        const resultOverlay = document.querySelector(".overlay-result");
        const resultPage = document.querySelector(".result-page");
        const resultMessage = document.querySelector(".result-message");
        resultOverlay.classList.add("active");
        resultPage.classList.add("active");
        resultMessage.textContent = "You Win";
      }
    }
  });
};



/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGameBoard": () => (/* binding */ createGameBoard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");


// gameboard factory
// Note that we have not yet created any User Interface. We should know our code is coming together by running the tests.
// You shouldn’t be relying on console.logs or DOM methods to make sure your code is doing what you expect it to.
// Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship
// And then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
// Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.

function createGameBoard(width, height) {
  let gameBoard = [];
  let ships = [];

  const getGameBoard = () => gameBoard;
  const getShips = () => ships;
  const buildBoard = () => (gameBoard = new Array(width * height).fill(null));
  const hit = (coordinate) => (gameBoard[coordinate] = 1);
  const miss = (coordinate) => (gameBoard[coordinate] = 0);

  const placeShip = (ship) => {
    const shipName = ship.getName();
    const shipCoordinate = ship.getBody();
    shipCoordinate.forEach((element) => {
      gameBoard[element] = shipName;
    });
    ships.push(ship);
  };

  const receiveAttack = (coordinate) => {
    let location = gameBoard[coordinate];
    if (location !== null) {
      if (location !== 1 || location !== 0) {
        for (const ship of ships) {
          let name = ship.getName();
          if (location === name) {
            ship.isHit(coordinate);
            hit(coordinate);
            break;
          }
        }
      }
      return;
    } else miss(coordinate);
  };

  const allShipsSunk = () => {
    let result = ships.every((ship) => ship.isSunk() === true);
    return result;
  };
  const reset = () => {
    gameBoard = [];
    buildBoard();
    ships = [];
  };
  buildBoard();
  return {
    getGameBoard,
    getShips,
    receiveAttack,
    placeShip,
    allShipsSunk,
    reset,
  };
}

// module.exports = createGameBoard;


/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFleet": () => (/* binding */ createFleet),
/* harmony export */   "ships": () => (/* binding */ ships),
/* harmony export */   "randomSpot": () => (/* binding */ randomSpot),
/* harmony export */   "randomDirection": () => (/* binding */ randomDirection)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


// CONSTANTS
const ships = [
  { name: "cruiser", length: 5 },
  { name: "battleship", length: 4 },
  { name: "destroyer", length: 3 },
  { name: "submarine", length: 3 },
  { name: "patrol", length: 2 },
];

// FUNCTIONS
//randm number
let randomDirection = Math.floor(Math.random() * 2);
let randomSpot = Math.floor(Math.random() * 99);
const createFleet = (ships) => {
  const fleet = [];
  ships.forEach((ship) => {
    let s = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(ship.name, ship.length);
    fleet.push(s);
  });
  return fleet;
};




/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerSetup": () => (/* binding */ playerSetup)
/* harmony export */ });
/* harmony import */ var _createPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPlayer */ "./src/createPlayer.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



const playerSetup = () => {
  const player = (0,_createPlayer__WEBPACK_IMPORTED_MODULE_0__.createPlayer)("P1");
  const playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.createGameBoard)(10, 10);
  const playerShips = _dom__WEBPACK_IMPORTED_MODULE_2__.dom.getFleet();

  //this means your ships array have a body in them ready to placed on a board
  playerShips.forEach((playerShip) => {
    playerBoard.placeShip(playerShip);
  });
  return { player, playerBoard, playerShips };
};



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShip": () => (/* binding */ createShip)
/* harmony export */ });
function createShip(name, length) {
  let health = new Array(length).fill(false);
  let body = [];

  const buildBody = (head, direction) => {
    let builtBody = [];
    switch (direction) {
      case "horizontal":
        for (let i = 0; i < length; i++) {
          builtBody.push(head + i);
        }
        break;
      case "vertical":
        for (let i = 0; i < length; i++) {
          builtBody.push(head + i * 10);
        }
        break;
      default:
        return;
    }
    body = builtBody;
  };

  const isHit = (coordinate) => {
    let result = false;
    for (let i = 0; i < body.length; i++) {
      if (coordinate == body[i]) {
        health[i] = true;
        result = true;
        break;
      }
    }
    return result;
  };
  const isSunk = () => health.every((e) => e === true);
  const getBody = () => body;
  const getName = () => name;
  const getLength = () => length;

  return { getName, getLength, getBody, buildBody, isHit, isSunk };
}

// module.exports = createShip;


/***/ }),

/***/ "./src/assets/font/Crosshatcher.otf":
/*!******************************************!*\
  !*** ./src/assets/font/Crosshatcher.otf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d1729247b3de11b8ccb.otf";

/***/ }),

/***/ "./src/assets/font/HandrushDemoRegular.ttf":
/*!*************************************************!*\
  !*** ./src/assets/font/HandrushDemoRegular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e920f8822456026967a3.ttf";

/***/ }),

/***/ "./src/assets/font/SketchPencilDemoItalic.ttf":
/*!****************************************************!*\
  !*** ./src/assets/font/SketchPencilDemoItalic.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44260684bca2ef7fb486.ttf";

/***/ }),

/***/ "./src/assets/images/battleship.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/battleship.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d432260266681d96a1f2.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _createPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPlayer */ "./src/createPlayer.js");
/* harmony import */ var _eventlistners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventlistners */ "./src/eventlistners.js");






// let playerBoard;
// let computerBoard;
// // board Dimensions
// const boardWidth = 10;
// const boardHeight = 10;
// const generateBoard = () => {
//   const p1Board = document.querySelector(".p1-board");
//   let p2Board = document.querySelector(".p2-board");
//   for (let i = 0; i < 100; i++) {
//     let cell1 = document.createElement("div");
//     let cell2 = document.createElement("div");

//     cell1.classList.add("p1-grid-cell");
//     cell1.dataset.id = i;
//     cell2.classList.add("p2-grid-cell");
//     cell2.dataset.id = i;
//     p1Board.appendChild(cell1);
//     p2Board.appendChild(cell2);
//   }
// };

// const shipsContainer = document.querySelectorAll(".ship");
// // lets grab the board to be appended to
// const p1BoardCells = document.querySelectorAll(".p1-grid-cell");
// console.log(p1BoardCells);
// const p2BoardCells = document.querySelectorAll(".p2-grid-cell");
// const rotateBtn = document.querySelector(".rotate");
// const p1Board = document.querySelector(".p1-board");
// let direction = "horizontal";
// // select a ship
// let activeShip = null;

// // set event listner on ships
// let playerShips = [
//   createShip("cruiser", 5),
//   createShip("battleship", 4),
//   createShip("destroyer", 3),
//   createShip("submarine", 3),
//   createShip("patrol", 2),
// ];
// shipsContainer.forEach((ship, index) => {
//   ship.addEventListener("click", (e) => {
//     activeShip = playerShips[index];
//     switchActiveShip(index);
//     console.log(activeShip);
//   });
// });
// // set event listner on grids
// let valid = false;
// p1Board.addEventListener("click", (e) => {
//   let cell = e.target.classList.contains("p1-grid-cell");
//   if (cell) {
//     if (activeShip === null) return;
//     if (!valid) return;
//     clearShip(activeShip, p1BoardCells);
//     placeShip(activeShip, p1BoardCells);
//   }
//   return;
// });
// // event
// rotateBtn.addEventListener("click", (e) => {
//   direction = direction == "horizontal" ? "vertical" : "horizontal";
// });
// //funtions
// // not needed
// // function rotateShip() {
// //   activeShip.direction =
// //     activeShip.direction == "horizontal" ? "vertical" : "horizontal";
// // }
// function clearActiveShip() {
//   shipsContainer.forEach((ship) => ship.classList.remove("active"));
// }
// function switchActiveShip(index) {
//   clearActiveShip();
//   shipsContainer[index].classList.add("active");
// }
// function clearShip(ship, board) {
//   let name = ship.getName();
//   [...board].filter((cell) => {
//     let result = cell.classList.contains(name);
//     if (result) {
//       cell.classList.remove(name);
//       cell.classList.remove("taken");
//     }
//   });
// }
// function placeShip(ship, board) {
//   let name = ship.getName();
//   let body = ship.getBody();
//   body.forEach((cell) => {
//     console.log(name);
//     console.log(body);
//     board[cell].classList.add(`${name}`);
//     board[cell].classList.add("taken");
//   });
// }

// function randomize(ship, board) {
//   let randomDirection = Math.floor(Math.random() * 2);
//   let randomSpot = Math.floor(Math.random() * 99);
//   if (randomDirection === 0) {
//     randomDirection = "horizontal";
//   } else randomDirection = "vertical";

//   ship.buildBody(randomSpot, randomDirection);

//   if (isOutsideBoundary(ship)) {
//     randomize(ship, board);
//     return;
//   }
//   if (isTaken(ship, board)) {
//     randomize(ship, board);
//     return;
//   }
// }
// function isTaken(ship, board) {
//   let body = ship.getBody();
//   let length = ship.getLength();
//   let result = false;
//   for (let i = 0; i < length; i++) {
//     let cell = body[i];
//     if (board[cell].classList.contains("taken")) {
//       result = true;
//       break;
//     }
//   }
//   return result;
// }
// function isOutsideBoundary(ship) {
//   let body = ship.getBody();
//   let length = ship.getLength();
//   let result = false;
//   for (let i = 0; i < length - 1; i++) {
//     if (body[i] % 10 === 9) {
//       result = true;
//       break;
//     }
//   }
//   for (let i = 0; i < length; i++) {
//     if (body[i] > 99) {
//       result = true;
//       break;
//     }
//   }
//   return result;
// }
// // random button
// const randomBtn = document.querySelector(".random");
// randomBtn.addEventListener("click", (e) => {
//   playerShips.forEach((ship) => {
//     randomize(ship, p1BoardCells);
//     clearShip(ship, p1BoardCells);
//     placeShip(ship, p1BoardCells);
//   });
// });

// // to take the ship body array
// // add a background color to the affected spots
// // if its valid if its not
// // do nothing
// // event lisner on grids
// p1BoardCells.forEach((cell) => {
//   cell.addEventListener("mouseover", (e) => {
//     if (activeShip === null) return;
//     console.log(e.currentTarget);
//     let idx = parseInt(cell.getAttribute("data-id"));
//     activeShip.buildBody(idx, direction);
//     clearHover();
//     console.log(activeShip.getBody());
//     if (isOutsideBoundary(activeShip)) {
//       cell.style.cursor = "not-allowed";
//       valid = false;
//       return;
//     }

//     if (isTaken(activeShip, p1BoardCells)) {
//       cell.style.cursor = "not-allowed";
//       valid = false;
//       return;
//     }
//     addHover(activeShip);
//     valid = true;
//   });
// });
// p1Board.addEventListener("mouseleave", (e) => {
//   clearHover();
// });

// function addHover(ship) {
//   let body = ship.getBody();
//   body.forEach((cell) => {
//     p1BoardCells[cell].classList.add("hover");
//   });
// }
// function clearHover() {
//   [...p1BoardCells].filter((cell) => {
//     let hover = cell.classList.contains("hover");
//     let cursor = cell.style.cursor;
//     if (hover) {
//       cell.classList.remove("hover");
//     }
//     if (cursor === "not-allowed") {
//       cell.style.cursor = "pointer";
//     }
//   });
// }
// /// start button
// const startBtn = document.querySelector(".start");
// startBtn.addEventListener("click", startGame);
// function startGame() {
//   const p1BoardContainer = document.querySelector(".p1-board-container");
//   const p2BoardContainer = document.querySelector(".p2-board-container");
//   const shipSelectionContainer = document.querySelector(
//     ".ship-selection-container"
//   );
//   const boardInfo = document.querySelector(".board-info");
//   p1BoardContainer.classList.add("disable");
//   p2BoardContainer.classList.add("show");
//   shipSelectionContainer.classList.add("inactive");
//   boardInfo.classList.remove("inactive");
//   activeShip = null;
//   playerBoard = playerSetup();
//   computerBoard = computerSetup();
// }

// // The setups below creates the players and their boards after
// // the function calls for them we can finally play the game
// function playerSetup() {
//   const player = createPlayer("Player", "human", boardHeight, boardWidth);
//   const playerBoard = player.getGameBoard();
//   playerShips.forEach((ship) => playerBoard.placeShip(ship));
//   return playerBoard;
// }
// function computerSetup() {
//   // you should be an object and have a file for yourself with an init method and attack method
//   const computer = createPlayer("Player2", "computer", boardWidth, boardHeight);
//   const computerBoard = computer.getGameBoard();
//   const computerShips = [
//     createShip("cruiser", 5),
//     createShip("battleship", 4),
//     createShip("destroyer", 3),
//     createShip("submarine", 3),
//     createShip("patrol", 2),
//   ];
//   // this generates the ships at random locations
//   computerShips.forEach((ship) => {
//     randomize(ship, p2BoardCells);
//     addTaken(ship, p2BoardCells);
//   });
//   //this means your ships arrays have a body in them ready to placed on a board
//   computerShips.forEach((computerShip) =>
//     computerBoard.placeShip(computerShip)
//   );
//   clearTaken(p2BoardCells);
//   function addTaken(ship, board) {
//     const body = ship.getBody();
//     body.forEach((cell) => {
//       board[cell].classList.add("taken");
//     });
//   }
//   function clearTaken(board) {
//     board.forEach((cell) => {
//       cell.classList.remove("taken");
//     });
//   }
//   return computerBoard;
// }

// // how to attack is by selecting an index and calling the
// // recieve attack function from the opposing board
// // for the ai they select a spot thats not attacked yet
// // and attack that spot

// // for the player you select a spot on the opponenet board
// // start with the input
// const p2Board = document.querySelector(".p2-board");
// p2Board.addEventListener("click", (e) => {
//   let cell = e.target;

//   let idx = parseInt(cell.getAttribute("data-id"));
//   // i want to be able to call recieveAttack on the gameboard
//   computerBoard.receiveAttack(idx);
//   computerAttack();
//   render();
//   console.log(computerBoard.getGameBoard());
//   sunkShip(computerBoard);
//   sunkShip(playerBoard);
//   gameOver(computerBoard);
//   gameOver(playerBoard);
// });
// function render() {
//   computerBoard.getGameBoard().forEach((cell, index) => {
//     if (cell == 0) {
//       //miss

//       p2BoardCells[index].classList.add("miss");
//     } else if (cell === 1) {
//       //hit

//       p2BoardCells[index].classList.add("hit");
//     }
//   });
//   playerBoard.getGameBoard().forEach((cell, index) => {
//     if (cell == 0) {
//       //miss

//       p1BoardCells[index].classList.add("miss");
//     } else if (cell === 1) {
//       //hit

//       p1BoardCells[index].classList.add("hit");
//     }
//   });
// }
// function computerAttack() {
//   let randomSpot = Math.floor(Math.random() * 99);
//   let board = playerBoard.getGameBoard();
//   if (board[randomSpot] === 0 || board[randomSpot] === 1) {
//     computerAttack();
//   } else playerBoard.receiveAttack(randomSpot);
// }

// // at the end of the day i want this file to just be
// // an object with just fucntions in them generateBoard() etc etc

// /// implement gameOver
// function gameOver(board) {
//   if (board.allShipsSunk()) {
//     resultMessage.textContent = "You Win";
//     resultOverlay.classList.add("active");
//     resultPage.classList.add("active");
//   }
// }

// function sunkShip(board) {
//   let ships = board.getShips();
//   let count = 5;
//   for (const ship of ships) {
//     if (ship.isSunk()) {
//       count--;
//     }
//   }
//   console.log(count);
// }
// // start button
// const startPageStartBtn = document.querySelector(".start-btn");
// const startPage = document.querySelector(".start-page");
// startPageStartBtn.addEventListener("click", (e) => {
//   reset();
//   startPage.classList.remove("active");
// });
// // menu button
// const menuBtn = document.querySelector(".menu-btn");
// const menuOverlay = document.querySelector(".overlay-menu");
// const menuPage = document.querySelector(".menu-page");
// const resumeBtn = document.querySelector(".resume-btn");
// const restartBtn = document.querySelector(".restart-btn");
// menuBtn.addEventListener("click", (e) => {
//   menuOverlay.classList.add("active");
//   menuPage.classList.add("active");
// });
// resumeBtn.addEventListener("click", () => {
//   menuOverlay.classList.remove("active");
//   menuPage.classList.remove("active");
// });
// restartBtn.addEventListener("click", () => {
//   startPage.classList.add("active");
//   menuOverlay.classList.remove("active");
//   menuPage.classList.remove("active");
// });
// // result Page
// const resultOverlay = document.querySelector(".overlay-result");
// const resultPage = document.querySelector(".result-page");
// const resultMessage = document.querySelector(".result-message");
// const playAgainBtn = document.querySelector(".play-again");
// playAgainBtn.addEventListener("click", () => {
//   resultOverlay.classList.remove("active");
//   resultPage.classList.remove("active");
//   startPage.classList.add("active");
// });

// function reset() {
//   generateBoard();
//   const p1BoardContainer = document.querySelector(".p1-board-container");
//   const p2BoardContainer = document.querySelector(".p2-board-container");
//   const shipSelectionContainer = document.querySelector(
//     ".ship-selection-container"
//   );
//   const boardInfo = document.querySelector(".board-info");
//   p1BoardContainer.classList.remove("disable");
//   p2BoardContainer.classList.remove("show");
//   shipSelectionContainer.classList.remove("inactive");
//   boardInfo.classList.add("inactive");
//   activeShip = null;
//   //we need to reset everything
//   // the player Placement Board
//   // the computer board should be hidden
// }
// function clearBoardCells(board) {
//   board.forEach((cell) => {});
// }
_dom__WEBPACK_IMPORTED_MODULE_1__.dom.generateBoard(10, 10);
(0,_eventlistners__WEBPACK_IMPORTED_MODULE_5__.events)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxh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OUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsS0FBSztBQUN6QztBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxtREFBaUI7QUFDakIsc0RBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3JlYXRlUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9ldmVudGxpc3RuZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2hvbWUvYW1pbnVtYWRvL0dpdC1SZXBvc2l0b3J5L1Byb2plY3RzL1RoZU9kaW5Qcm9qZWN0L2JhdHRsZXNoaXBzL3NyYy9hc3NldHMvZm9udC9Ta2V0Y2hQZW5jaWxEZW1vSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9ob21lL2FtaW51bWFkby9HaXQtUmVwb3NpdG9yeS9Qcm9qZWN0cy9UaGVPZGluUHJvamVjdC9iYXR0bGVzaGlwcy9zcmMvYXNzZXRzL2ZvbnQvQ3Jvc3NoYXRjaGVyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9ob21lL2FtaW51bWFkby9HaXQtUmVwb3NpdG9yeS9Qcm9qZWN0cy9UaGVPZGluUHJvamVjdC9iYXR0bGVzaGlwcy9zcmMvYXNzZXRzL2ZvbnQvSGFuZHJ1c2hEZW1vUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvaG9tZS9hbWludW1hZG8vR2l0LVJlcG9zaXRvcnkvUHJvamVjdHMvVGhlT2RpblByb2plY3QvYmF0dGxlc2hpcHMvc3JjL2Fzc2V0cy9pbWFnZXMvYmF0dGxlc2hpcC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURvbWluZTp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBTa2V0Y2hQZW5jaWw7XFxuXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IENyb3NzaGF0Y2hlcjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogSGFuZHJ1c2g7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlclxcXCIgXFxcIm1haW5cXFwiIFxcXCJmb290ZXJcXFwiO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjE1ZnIgMmZyIDAuMWZyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBDcm9zc2hhdGNoZXIsIFNrZXRjaFBlbmNpbCwgSGFuZHJ1c2g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwcHggNTVweCAwcHggNTVweDtcXG59XFxuLm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE4YThhO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDYuNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBEb21pbmU7XFxufVxcbi5naXRodWItbG9nbyB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBiZWlnZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxufVxcbi5naXRodWItbG9nbzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMyk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2IoMCwgMCwgMjU1KTtcXG59XFxuXFxuLyogVGhpcyBpcyBmb3IgdGhlIGdhbWVib2FyZCBpbiB0aGUgbWFpbiBzZWN0aW9uICovXFxuXFxuLyogbm93IHdlIGFjdHVhbGx5IHN0YXJ0ICovXFxuXFxuLnAxLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1nYXA6IDNweDtcXG59XFxuLnAxLWJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuLnAyLWJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBvcGFjaXR5OiAwO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ucDItYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLWdhcDogM3B4O1xcbn1cXG4ucDEtZ3JpZC1jZWxsLFxcbi5wMi1ncmlkLWNlbGwge1xcbiAgdHJhbnNpdGlvbjogYWxsIDkwbXMgZWFzZS1pbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uYm9hcmQtaW5mbyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxufVxcbmgzIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuaDQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBzaGlwcyBzZWxlY3Rpb24gY29udGFpbmVyICovXFxuLnNoaXAtc2VsZWN0aW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IHNwYWNlLWV2ZW5seTtcXG4gIC1tcy1mbGV4LXBhY2s6IHNwYWNlLWV2ZW5seTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNjAlO1xcbn1cXG4uc2hpcC1zZWxlY3Rpb24tY29udGFpbmVyIHAge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbn1cXG4uc2hpcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNweDtcXG59XFxuLnBhcnQge1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBib3JkZXI6IDEwcHggc29saWQgIzAwMDAwMDtcXG59XFxuLyogLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAwcHggMHB4IGdyZWVuO1xcbn0gKi9cXG4uYmF0dGxlc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbiAgYm9yZGVyOiA3cHggc29saWQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4uY3J1aXNlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG4gIGJvcmRlcjogN3B4IHNvbGlkO1xcbn1cXG4uZGVzdHJveWVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxuICBib3JkZXI6IDdweCBzb2xpZDtcXG59XFxuLnN1Ym1hcmluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbiAgYm9yZGVyOiA3cHggc29saWQ7XFxufVxcbi5wYXRyb2wge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF3bmdyZWVuO1xcbiAgYm9yZGVyOiA3cHggc29saWQ7XFxufVxcbi5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc0LCAxNzEsIDE3MSk7XFxufVxcbi8qIGdhbWUgYm9hcmQgKi9cXG4uZ2FtZWJvYXJkcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogNjBweDtcXG59XFxuXFxuLnNob3cge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG59XFxuLmluYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbn1cXG4uZGlzYWJsZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICBvcGFjaXR5OiAwLjg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLyogaG92ZXIgc3R5bGluZyAqL1xcblxcbi5wMi1ncmlkLWNlbGw6aG92ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjUlO1xcbiAgdG9wOiAyNSU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjZGQxYzFhO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbmltYXRpb246IHB1bHNlIDEuNXMgZWFzZSAwcyBpbmZpbml0ZTtcXG59XFxuXFxuLnAyLWdyaWQtY2VsbDpob3Zlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjUlO1xcbiAgdG9wOiAyNSU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjYzEyOTJlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbmltYXRpb246IHB1bHNlMiAxLjVzIGVhc2UgMHMgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICB9XFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2UyIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgfVxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gIH1cXG59XFxuLyogaGl0IGFuZCBtaXNzICovXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubWlzczphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMTFcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBmaXJlYnJpY2s7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmhpdDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4vKiBzdGFydCBQYWdlICovXFxuLm92ZXJsYXktbWVudSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBvcGFjaXR5OiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm92ZXJsYXktbWVudS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcbi5zdGFydC1wYWdlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBvcGFjaXR5OiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNSU7XFxufVxcbi5zdGFydC1wYWdlLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGZvbnQtc2l6ZTogNjUwJTtcXG4gIGNvbG9yOiAjOGE4YThhO1xcbn1cXG4uc3RhcnQtYnRuIHtcXG4gIGZvbnQtc2l6ZTogNC4ycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBDcm9zc2hhdGNoZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41MXMgZWFzZS1pbi1vdXQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBDcm9zc2hhdGNoZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41MXMgZWFzZS1pbi1vdXQ7XFxuICBjb2xvcjogIzhhOGE4YTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiBicm93bjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxufVxcbi8qIG1lbnUgKi9cXG4ubWVudS1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1JTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MCU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5tZW51LXBhZ2UuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5tZW51LWJ0biB7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBjb2xvcjogIzhhOGE4YTtcXG59XFxuLyogYnV0dG9uIGNvbnRhaW5lciAqL1xcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxufVxcbi8qIHJlc3VsdCBwYWdlICovXFxuLm92ZXJsYXktcmVzdWx0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIG9wYWNpdHk6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ub3ZlcmxheS1yZXN1bHQuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4ucmVzdWx0LXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDUlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6ICM4YThhOGE7XFxuICBmb250LXNpemU6IDE1MHB4O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnJlc3VsdC1wYWdlLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UseUJBQXlCOztFQUV6Qiw0Q0FBdUg7QUFDekg7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBNkc7QUFDL0c7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBb0g7QUFDdEg7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0Msb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IsaURBQWlEO0VBQ2pELHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixh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dUJBQXVCO0VBQ3ZCLE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURvbWluZTp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFNrZXRjaFBlbmNpbDtcXG5cXG4gIHNyYzogdXJsKC9ob21lL2FtaW51bWFkby9HaXQtUmVwb3NpdG9yeS9Qcm9qZWN0cy9UaGVPZGluUHJvamVjdC9iYXR0bGVzaGlwcy9zcmMvYXNzZXRzL2ZvbnQvU2tldGNoUGVuY2lsRGVtb0l0YWxpYy50dGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBDcm9zc2hhdGNoZXI7XFxuICBzcmM6IHVybCgvaG9tZS9hbWludW1hZG8vR2l0LVJlcG9zaXRvcnkvUHJvamVjdHMvVGhlT2RpblByb2plY3QvYmF0dGxlc2hpcHMvc3JjL2Fzc2V0cy9mb250L0Nyb3NzaGF0Y2hlci5vdGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBIYW5kcnVzaDtcXG4gIHNyYzogdXJsKC9ob21lL2FtaW51bWFkby9HaXQtUmVwb3NpdG9yeS9Qcm9qZWN0cy9UaGVPZGluUHJvamVjdC9iYXR0bGVzaGlwcy9zcmMvYXNzZXRzL2ZvbnQvSGFuZHJ1c2hEZW1vUmVndWxhci50dGYpO1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXJcXFwiIFxcXCJtYWluXFxcIiBcXFwiZm9vdGVyXFxcIjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4xNWZyIDJmciAwLjFmcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogQ3Jvc3NoYXRjaGVyLCBTa2V0Y2hQZW5jaWwsIEhhbmRydXNoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcXG59XFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMHB4IDU1cHggMHB4IDU1cHg7XFxufVxcbi5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4uZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhOGE4YTtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA2LjVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LWZhbWlseTogRG9taW5lO1xcbn1cXG4uZ2l0aHViLWxvZ28ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggYmVpZ2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogb3JhbmdlO1xcbn1cXG4uZ2l0aHViLWxvZ286aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjMpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiKDAsIDAsIDI1NSk7XFxufVxcblxcbi8qIFRoaXMgaXMgZm9yIHRoZSBnYW1lYm9hcmQgaW4gdGhlIG1haW4gc2VjdGlvbiAqL1xcblxcbi8qIG5vdyB3ZSBhY3R1YWxseSBzdGFydCAqL1xcblxcbi5wMS1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtZ2FwOiAzcHg7XFxufVxcbi5wMS1ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wMi1ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgb3BhY2l0eTogMDtcXG4gIGdhcDogMTBweDtcXG59XFxuLnAyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1nYXA6IDNweDtcXG59XFxuLnAxLWdyaWQtY2VsbCxcXG4ucDItZ3JpZC1jZWxsIHtcXG4gIHRyYW5zaXRpb246IGFsbCA5MG1zIGVhc2UtaW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmJvYXJkLWluZm8ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5oMyB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmg0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogc2hpcHMgc2VsZWN0aW9uIGNvbnRhaW5lciAqL1xcbi5zaGlwLXNlbGVjdGlvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1wYWNrOiBzcGFjZS1ldmVubHk7XFxuICAtbXMtZmxleC1wYWNrOiBzcGFjZS1ldmVubHk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDYwJTtcXG59XFxuLnNoaXAtc2VsZWN0aW9uLWNvbnRhaW5lciBwIHtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG59XFxuLnNoaXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzcHg7XFxufVxcbi5wYXJ0IHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICMwMDAwMDA7XFxufVxcbi8qIC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMHB4IDBweCBncmVlbjtcXG59ICovXFxuLmJhdHRsZXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG4gIGJvcmRlcjogN3B4IHNvbGlkO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuLmNydWlzZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxuICBib3JkZXI6IDdweCBzb2xpZDtcXG59XFxuLmRlc3Ryb3llciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcbiAgYm9yZGVyOiA3cHggc29saWQ7XFxufVxcbi5zdWJtYXJpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG4gIGJvcmRlcjogN3B4IHNvbGlkO1xcbn1cXG4ucGF0cm9sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxhd25ncmVlbjtcXG4gIGJvcmRlcjogN3B4IHNvbGlkO1xcbn1cXG4uaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NCwgMTcxLCAxNzEpO1xcbn1cXG4vKiBnYW1lIGJvYXJkICovXFxuLmdhbWVib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDYwcHg7XFxufVxcblxcbi5zaG93IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5pbmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG59XFxuLmRpc2FibGUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi8qIGhvdmVyIHN0eWxpbmcgKi9cXG5cXG4ucDItZ3JpZC1jZWxsOmhvdmVyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDI1JTtcXG4gIHRvcDogMjUlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogI2RkMWMxYTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAxLjVzIGVhc2UgMHMgaW5maW5pdGU7XFxufVxcblxcbi5wMi1ncmlkLWNlbGw6aG92ZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDI1JTtcXG4gIHRvcDogMjUlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogI2MxMjkyZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYW5pbWF0aW9uOiBwdWxzZTIgMS41cyBlYXNlIDBzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlMiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gIH1cXG4gIDMwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICB9XFxufVxcbi8qIGhpdCBhbmQgbWlzcyAqL1xcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm1pc3M6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTExXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZmlyZWJyaWNrO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5oaXQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLyogc3RhcnQgUGFnZSAqL1xcbi5vdmVybGF5LW1lbnUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgb3BhY2l0eTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHRvcDogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5vdmVybGF5LW1lbnUuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4uc3RhcnQtcGFnZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2hvbWUvYW1pbnVtYWRvL0dpdC1SZXBvc2l0b3J5L1Byb2plY3RzL1RoZU9kaW5Qcm9qZWN0L2JhdHRsZXNoaXBzL3NyYy9hc3NldHMvaW1hZ2VzL2JhdHRsZXNoaXAuanBnKTtcXG4gIG9wYWNpdHk6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1JTtcXG59XFxuLnN0YXJ0LXBhZ2UuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZm9udC1zaXplOiA2NTAlO1xcbiAgY29sb3I6ICM4YThhOGE7XFxufVxcbi5zdGFydC1idG4ge1xcbiAgZm9udC1zaXplOiA0LjJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IENyb3NzaGF0Y2hlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjUxcyBlYXNlLWluLW91dDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IENyb3NzaGF0Y2hlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjUxcyBlYXNlLWluLW91dDtcXG4gIGNvbG9yOiAjOGE4YThhO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgY29sb3I6IGJyb3duO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG59XFxuLyogbWVudSAqL1xcbi5tZW51LXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDUlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLm1lbnUtcGFnZS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm1lbnUtYnRuIHtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGNvbG9yOiAjOGE4YThhO1xcbn1cXG4vKiBidXR0b24gY29udGFpbmVyICovXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG59XFxuLyogcmVzdWx0IHBhZ2UgKi9cXG4ub3ZlcmxheS1yZXN1bHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgb3BhY2l0eTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHRvcDogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5vdmVybGF5LXJlc3VsdC5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcbi5yZXN1bHQtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNSU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDAlO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb2xvcjogIzhhOGE4YTtcXG4gIGZvbnQtc2l6ZTogMTUwcHg7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ucmVzdWx0LXBhZ2UuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBkb20gfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IGNyZWF0ZUdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSBcIi4vY3JlYXRlUGxheWVyXCI7XG5jb25zdCBjb21wdXRlclNldHVwID0gKCkgPT4ge1xuICBjb25zdCBjb21wdXRlciA9IGNyZWF0ZVBsYXllcihcIlAyXCIpO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gY3JlYXRlR2FtZUJvYXJkKDEwLCAxMCk7XG4gIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBjb21wdXRlci5nZXRGbGVldCgpO1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDItZ3JpZC1jZWxsXCIpO1xuICAvLyB0aGlzIGdlbmVyYXRlcyB0aGUgc2hpcHMgYXQgcmFuZG9tIGxvY2F0aW9uc1xuICBjb21wdXRlclNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBkb20uYm9hcmQucmFuZG9taXplKHNoaXAsIGJvYXJkKTtcbiAgICBkb20uYm9hcmQucGxhY2VTaGlwKHNoaXAsIGJvYXJkKTtcbiAgfSk7XG4gIC8vdGhpcyBtZWFucyB5b3VyIHNoaXBzIGFycmF5IGhhdmUgYSBib2R5IGluIHRoZW0gcmVhZHkgdG8gcGxhY2VkIG9uIGEgYm9hcmRcbiAgY29tcHV0ZXJTaGlwcy5mb3JFYWNoKChjb21wdXRlclNoaXApID0+IHtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChjb21wdXRlclNoaXApO1xuICB9KTtcbiAgY29tcHV0ZXJTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgZG9tLmJvYXJkLmNsZWFyU2hpcChzaGlwLCBib2FyZCk7XG4gIH0pO1xuICByZXR1cm4geyBjb21wdXRlciwgY29tcHV0ZXJCb2FyZCwgY29tcHV0ZXJTaGlwcyB9O1xufTtcbmV4cG9ydCB7IGNvbXB1dGVyU2V0dXAgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUZsZWV0LCBzaGlwcyB9IGZyb20gXCIuL2hlbHBlcnMuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyKG5hbWUpIHtcbiAgbGV0IGZsZWV0ID0gY3JlYXRlRmxlZXQoc2hpcHMpO1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgY29uc3QgZ2V0RmxlZXQgPSAoKSA9PiBmbGVldDtcbiAgY29uc3QgcmVzZXRGbGVldCA9ICgpID0+IChmbGVldCA9IGNyZWF0ZUZsZWV0KHNoaXBzKSk7XG4gIGNvbnN0IGF0dGFjayA9IChjb29yZCwgYm9hcmQpID0+IGJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICBjb25zdCBhdXRvQXR0YWNrID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tU3BvdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5KTtcbiAgICBjb25zdCBlbmVteUJvYXJkID0gYm9hcmQuZ2V0R2FtZUJvYXJkKCk7XG4gICAgY29uc3QgY2VsbCA9IGVuZW15Qm9hcmRbcmFuZG9tU3BvdF07XG4gICAgaWYgKGNlbGwgPT09IDAgfHwgY2VsbCA9PT0gMSkge1xuICAgICAgLy8gdHJpZXMgYWdhaW4gdW50aWwgYSB2YWxpZCBjZWxsIGlzIHBpY2tlZFxuICAgICAgYXV0b0F0dGFjayhib2FyZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGF0dGFja3MgYSB2YWxpZCBjZWxsXG4gICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVNwb3QpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBhdHRhY2ssIGF1dG9BdHRhY2ssIGdldE5hbWUsIGdldEZsZWV0LCByZXNldEZsZWV0IH07XG59XG5leHBvcnQgeyBjcmVhdGVQbGF5ZXIgfTtcbiIsIi8vVGhpcyBoYW5kbGVzIGFsbCB0aGUgZG9tIHN0dWZmXG5cbmltcG9ydCB7IGNyZWF0ZUZsZWV0LCBzaGlwcyB9IGZyb20gXCIuL2hlbHBlcnNcIjtcblxuY29uc3QgZG9tID0gKCgpID0+IHtcbiAgLy9jb25zdGFudHNcbiAgY29uc3QgcDFCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDEtYm9hcmRcIik7XG4gIGNvbnN0IHAyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAyLWJvYXJkXCIpO1xuICBjb25zdCBmbGVldCA9IGNyZWF0ZUZsZWV0KHNoaXBzKTtcbiAgbGV0IGRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICBsZXQgYWN0aXZlU2hpcCA9IG51bGw7XG4gIGNvbnN0IGdlbmVyYXRlQm9hcmQgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkU2l6ZSA9IHdpZHRoICogaGVpZ2h0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRTaXplOyBpKyspIHtcbiAgICAgIGxldCBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgY2VsbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2VsbDEuY2xhc3NMaXN0LmFkZChcInAxLWdyaWQtY2VsbFwiKTtcbiAgICAgIGNlbGwxLmRhdGFzZXQuaWQgPSBpO1xuICAgICAgY2VsbDIuY2xhc3NMaXN0LmFkZChcInAyLWdyaWQtY2VsbFwiKTtcbiAgICAgIGNlbGwyLmRhdGFzZXQuaWQgPSBpO1xuICAgICAgcDFCb2FyZC5hcHBlbmRDaGlsZChjZWxsMSk7XG4gICAgICBwMkJvYXJkLmFwcGVuZENoaWxkKGNlbGwyKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldEZsZWV0ID0gKCkgPT4gZmxlZXQ7XG4gIC8vc2hpcCBjb250YWluZXJcbiAgY29uc3Qgc2hpcCA9ICgoKSA9PiB7XG4gICAgLy90aGlzIHNob3VsZCBiZSBhbiBpbml0aWFsaXplZCBmdW5jdGlvblxuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXAsIGluZGV4KSA9PiB7XG4gICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBhY3RpdmVTaGlwID0gZmxlZXRbaW5kZXhdO1xuICAgICAgICBzd2l0Y2hBY3RpdmVTaGlwKGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGNsZWFyQWN0aXZlU2hpcCA9ICgpID0+IHtcbiAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgfTtcbiAgICBjb25zdCBzd2l0Y2hBY3RpdmVTaGlwID0gKGluZGV4KSA9PiB7XG4gICAgICBjbGVhckFjdGl2ZVNoaXAoKTtcbiAgICAgIHNoaXBzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH07XG4gICAgLy8gY29uc3Qgcm90YXRlID0gKCkgPT4ge1xuICAgIC8vICAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3RhdGVcIik7XG4gICAgLy8gICByb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgLy8gICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIiA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfTtcbiAgICByZXR1cm4geyBjbGVhckFjdGl2ZVNoaXAsIHN3aXRjaEFjdGl2ZVNoaXAgfTtcbiAgfSkoKTtcbiAgY29uc3QgYm9hcmQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNsZWFyU2hpcCA9IChzaGlwLCBib2FyZCkgPT4ge1xuICAgICAgbGV0IG5hbWUgPSBzaGlwLmdldE5hbWUoKTtcbiAgICAgIFsuLi5ib2FyZF0uZmlsdGVyKChjZWxsKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBjZWxsLmNsYXNzTGlzdC5jb250YWlucyhuYW1lKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWtlblwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgYm9hcmQpID0+IHtcbiAgICAgIGxldCBuYW1lID0gc2hpcC5nZXROYW1lKCk7XG4gICAgICBsZXQgYm9keSA9IHNoaXAuZ2V0Qm9keSgpO1xuICAgICAgYm9keS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGJvYXJkW2NlbGxdLmNsYXNzTGlzdC5hZGQoYCR7bmFtZX1gKTtcbiAgICAgICAgYm9hcmRbY2VsbF0uY2xhc3NMaXN0LmFkZChcInRha2VuXCIpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBpc1Rha2VuID0gKHNoaXAsIGJvYXJkKSA9PiB7XG4gICAgICBsZXQgYm9keSA9IHNoaXAuZ2V0Qm9keSgpO1xuICAgICAgbGV0IGxlbmd0aCA9IHNoaXAuZ2V0TGVuZ3RoKCk7XG4gICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjZWxsID0gYm9keVtpXTtcbiAgICAgICAgaWYgKGJvYXJkW2NlbGxdLmNsYXNzTGlzdC5jb250YWlucyhcInRha2VuXCIpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIGNvbnN0IGlzT3V0c2lkZUJvdW5kYXJ5ID0gKHNoaXApID0+IHtcbiAgICAgIGxldCBib2R5ID0gc2hpcC5nZXRCb2R5KCk7XG4gICAgICBsZXQgbGVuZ3RoID0gc2hpcC5nZXRMZW5ndGgoKTtcbiAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGlmIChib2R5W2ldICUgMTAgPT09IDkpIHtcbiAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChib2R5W2ldID4gOTkpIHtcbiAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgY29uc3QgcmFuZG9taXplID0gKHNoaXAsIGJvYXJkKSA9PiB7XG4gICAgICBsZXQgcmFuZG9tRGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICBsZXQgcmFuZG9tU3BvdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5KTtcbiAgICAgIGlmIChyYW5kb21EaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgcmFuZG9tRGlyZWN0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gICAgICB9IGVsc2UgcmFuZG9tRGlyZWN0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xuXG4gICAgICBzaGlwLmJ1aWxkQm9keShyYW5kb21TcG90LCByYW5kb21EaXJlY3Rpb24pO1xuXG4gICAgICBpZiAoaXNPdXRzaWRlQm91bmRhcnkoc2hpcCkpIHtcbiAgICAgICAgcmFuZG9taXplKHNoaXAsIGJvYXJkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGlzVGFrZW4oc2hpcCwgYm9hcmQpKSB7XG4gICAgICAgIHJhbmRvbWl6ZShzaGlwLCBib2FyZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFkZEhvdmVyID0gKHNoaXAsIGJvYXJkKSA9PiB7XG4gICAgICBsZXQgYm9keSA9IHNoaXAuZ2V0Qm9keSgpO1xuICAgICAgYm9keS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGJvYXJkW2NlbGxdLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgY2xlYXJIb3ZlciA9IChib2FyZCkgPT4ge1xuICAgICAgWy4uLmJvYXJkXS5maWx0ZXIoKGNlbGwpID0+IHtcbiAgICAgICAgbGV0IGhvdmVyID0gY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJob3ZlclwiKTtcbiAgICAgICAgbGV0IGN1cnNvciA9IGNlbGwuc3R5bGUuY3Vyc29yO1xuICAgICAgICBpZiAoaG92ZXIpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3Vyc29yID09PSBcIm5vdC1hbGxvd2VkXCIpIHtcbiAgICAgICAgICBjZWxsLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICBjbGVhclNoaXAsXG4gICAgICBwbGFjZVNoaXAsXG4gICAgICBhZGRIb3ZlcixcbiAgICAgIGNsZWFySG92ZXIsXG4gICAgICByYW5kb21pemUsXG4gICAgICBpc091dHNpZGVCb3VuZGFyeSxcbiAgICAgIGlzVGFrZW4sXG4gICAgfTtcbiAgfSkoKTtcbiAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgY29uc3QgcDFCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDEtYm9hcmQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHAyQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAyLWJvYXJkLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBzaGlwU2VsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnNoaXAtc2VsZWN0aW9uLWNvbnRhaW5lclwiXG4gICAgKTtcbiAgICBjb25zdCBib2FyZEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWluZm9cIik7XG4gICAgcDFCb2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZVwiKTtcbiAgICBwMkJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgIHNoaXBTZWxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgIGJvYXJkSW5mby5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgYWN0aXZlU2hpcCA9IG51bGw7XG4gIH07XG4gIGNvbnN0IHJlbmRlciA9IChwbGF5ZXIsIGJvYXJkKSA9PiB7XG4gICAgY29uc3QgcDFCb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMS1ncmlkLWNlbGxcIik7XG4gICAgY29uc3QgcDJCb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMi1ncmlkLWNlbGxcIik7XG4gICAgaWYgKHBsYXllciA9PT0gXCJwMVwiKSB7XG4gICAgICBib2FyZC5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoY2VsbCA9PSAwKSB7XG4gICAgICAgICAgLy9taXNzXG4gICAgICAgICAgcDFCb2FyZENlbGxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsID09PSAxKSB7XG4gICAgICAgICAgLy9oaXRcbiAgICAgICAgICBwMUJvYXJkQ2VsbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocGxheWVyID09PSBcInAyXCIpIHtcbiAgICAgIGJvYXJkLmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChjZWxsID09IDApIHtcbiAgICAgICAgICAvL21pc3NcbiAgICAgICAgICBwMkJvYXJkQ2VsbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGNlbGwgPT09IDEpIHtcbiAgICAgICAgICAvL2hpdFxuICAgICAgICAgIHAyQm9hcmRDZWxsc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIGdlbmVyYXRlQm9hcmQsXG4gICAgYWN0aXZlU2hpcCxcbiAgICBzaGlwLFxuICAgIGdldEZsZWV0LFxuICAgIHN0YXJ0LFxuICAgIGJvYXJkLFxuICAgIGRpcmVjdGlvbixcbiAgICByZW5kZXIsXG4gIH07XG59KSgpO1xuZXhwb3J0IHsgZG9tIH07XG4iLCJpbXBvcnQgeyBjb21wdXRlclNldHVwIH0gZnJvbSBcIi4vY29tcHV0ZXJcIjtcbmltcG9ydCB7IGRvbSB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgcGxheWVyU2V0dXAgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmxldCBwMTtcbmxldCBwMjtcbi8vc2hpcHNcbmNvbnN0IGV2ZW50cyA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIik7XG4gIHNoaXBzLmZvckVhY2goKHNoaXAsIGluZGV4KSA9PiB7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGRvbS5hY3RpdmVTaGlwID0gZG9tLmdldEZsZWV0KClbaW5kZXhdO1xuICAgICAgZG9tLnNoaXAuc3dpdGNoQWN0aXZlU2hpcChpbmRleCk7XG4gICAgICBjb25zb2xlLmxvZyhkb20uYWN0aXZlU2hpcC5nZXROYW1lKCkpO1xuICAgICAgY29uc29sZS5sb2coZG9tLmFjdGl2ZVNoaXAuZ2V0Qm9keSgpKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy9ib2FyZHNcbiAgLy9oYW5kbGVzIHRoZSBzaGlwIHBsYWNlbWVudCBvbiBjbGljayBldmVudFxuICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgY29uc3QgcDFCb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMS1ncmlkLWNlbGxcIik7XG4gIHAxQm9hcmRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKGRvbS5hY3RpdmVTaGlwID09PSBudWxsKSByZXR1cm47XG4gICAgICBpZiAoIXZhbGlkKSByZXR1cm47XG4gICAgICBkb20uYm9hcmQuY2xlYXJTaGlwKGRvbS5hY3RpdmVTaGlwLCBwMUJvYXJkQ2VsbHMpO1xuICAgICAgZG9tLmJvYXJkLnBsYWNlU2hpcChkb20uYWN0aXZlU2hpcCwgcDFCb2FyZENlbGxzKTtcbiAgICB9KTtcbiAgfSk7XG4gIC8vaGFuZGxlcyB0aGUgaG92ZXIgZWZmZWN0IGV2ZW50XG4gIHAxQm9hcmRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZG9tLmFjdGl2ZVNoaXAgPT09IG51bGwpIHJldHVybjtcbiAgICAgIGxldCBpZHggPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xuICAgICAgZG9tLmFjdGl2ZVNoaXAuYnVpbGRCb2R5KGlkeCwgZG9tLmRpcmVjdGlvbik7XG4gICAgICBkb20uYm9hcmQuY2xlYXJIb3ZlcihwMUJvYXJkQ2VsbHMpO1xuICAgICAgaWYgKFxuICAgICAgICBkb20uYm9hcmQuaXNPdXRzaWRlQm91bmRhcnkoZG9tLmFjdGl2ZVNoaXApIHx8XG4gICAgICAgIGRvbS5ib2FyZC5pc1Rha2VuKGRvbS5hY3RpdmVTaGlwLCBwMUJvYXJkQ2VsbHMpXG4gICAgICApIHtcbiAgICAgICAgY2VsbC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRvbS5ib2FyZC5hZGRIb3Zlcihkb20uYWN0aXZlU2hpcCwgcDFCb2FyZENlbGxzKTtcbiAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIC8vIFRoaXMgY2xlYXJzIHRoZSBob3ZlciBlZmZlY3QgaWYgeW91IGxlYXZlIHRoZSBib2FyZFxuICBjb25zdCBwMUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wMS1ib2FyZFwiKTtcbiAgcDFCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xuICAgIGRvbS5ib2FyZC5jbGVhckhvdmVyKHAxQm9hcmRDZWxscyk7XG4gIH0pO1xuICAvLyB0aGlzIGhhbmRsZXMgYXR0YWNraW5nIHRoZSBlbmVteSBib2FyZFxuICBjb25zdCBwMkJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAyLWdyaWQtY2VsbFwiKTtcbiAgcDJCb2FyZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgbGV0IGNvb3JkaW5hdGUgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKTtcbiAgICAgIC8vaW5zZXJ0IHBsYXllciBhdHRhY2sgZnVuY3Rpb24gaGVyZVxuICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vcmFuZG9tQnRuXG4gIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFuZG9tXCIpO1xuICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb20uZ2V0RmxlZXQoKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBkb20uYm9hcmQucmFuZG9taXplKHNoaXAsIHAxQm9hcmRDZWxscyk7XG4gICAgICBkb20uYm9hcmQuY2xlYXJTaGlwKHNoaXAsIHAxQm9hcmRDZWxscyk7XG4gICAgICBkb20uYm9hcmQucGxhY2VTaGlwKHNoaXAsIHAxQm9hcmRDZWxscyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIHJvdGF0ZWJ0blxuICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZVwiKTtcbiAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9tLmRpcmVjdGlvbiA9IGRvbS5kaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgfSk7XG5cbiAgLy8gc3RhcnRidG5cbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0XCIpO1xuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAvL2FkZCBzdGFydGJ0biBmdW5jdGlvblxuICAgIGRvbS5zdGFydCgpO1xuICAgIHAxID0gcGxheWVyU2V0dXAoKTtcbiAgICBwMiA9IGNvbXB1dGVyU2V0dXAoKTtcbiAgfSk7XG5cbiAgLy9zdGFydHBhZ2VcbiAgY29uc3Qgc3RhcnRQYWdlU3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ0blwiKTtcbiAgY29uc3Qgc3RhcnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1wYWdlXCIpO1xuICBzdGFydFBhZ2VTdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAvLyByZXNldCgpO1xuICAgIHN0YXJ0UGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KTtcblxuICAvLyBtZW51XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xuICBjb25zdCBtZW51T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheS1tZW51XCIpO1xuICBjb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1wYWdlXCIpO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIG1lbnVPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgbWVudVBhZ2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSk7XG4gIGNvbnN0IHJlc3VtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdW1lLWJ0blwiKTtcbiAgcmVzdW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbWVudU92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBtZW51UGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KTtcbiAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydC1idG5cIik7XG4gIHJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xuXG4gIC8vIHJlc3VsdFxuXG4gIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1hZ2FpblwiKTtcbiAgcGxheUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcbiAgY29uc3QgcDJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDItYm9hcmRcIik7XG4gIHAyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbGV0IGNlbGwgPSBlLnRhcmdldDtcbiAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJwMi1ncmlkLWNlbGxcIikpIHtcbiAgICAgIGxldCBpZHggPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xuICAgICAgY29uc29sZS5sb2cocDEsIHAyKTtcbiAgICAgIHAxLnBsYXllci5hdHRhY2soaWR4LCBwMi5jb21wdXRlckJvYXJkKTtcbiAgICAgIHAyLmNvbXB1dGVyLmF1dG9BdHRhY2socDEucGxheWVyQm9hcmQpO1xuICAgICAgZG9tLnJlbmRlcihcInAxXCIsIHAxLnBsYXllckJvYXJkLmdldEdhbWVCb2FyZCgpKTtcbiAgICAgIGRvbS5yZW5kZXIoXCJwMlwiLCBwMi5jb21wdXRlckJvYXJkLmdldEdhbWVCb2FyZCgpKTtcbiAgICAgIGlmIChwMS5wbGF5ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICBjb25zdCByZXN1bHRPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5LXJlc3VsdFwiKTtcbiAgICAgICAgY29uc3QgcmVzdWx0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0LXBhZ2VcIik7XG4gICAgICAgIGNvbnN0IHJlc3VsdE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdC1tZXNzYWdlXCIpO1xuICAgICAgICByZXN1bHRPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHJlc3VsdFBhZ2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgcmVzdWx0TWVzc2FnZS50ZXh0Q29udGVudCA9IFwiWW91IExvc2VcIjtcbiAgICAgIH1cbiAgICAgIGlmIChwMi5jb21wdXRlckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXktcmVzdWx0XCIpO1xuICAgICAgICBjb25zdCByZXN1bHRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHQtcGFnZVwiKTtcbiAgICAgICAgY29uc3QgcmVzdWx0TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0LW1lc3NhZ2VcIik7XG4gICAgICAgIHJlc3VsdE92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgcmVzdWx0UGFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICByZXN1bHRNZXNzYWdlLnRleHRDb250ZW50ID0gXCJZb3UgV2luXCI7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5leHBvcnQgeyBldmVudHMgfTtcbiIsImltcG9ydCBjcmVhdGVTaGlwIGZyb20gXCIuL3NoaXAuanNcIjtcblxuLy8gZ2FtZWJvYXJkIGZhY3Rvcnlcbi8vIE5vdGUgdGhhdCB3ZSBoYXZlIG5vdCB5ZXQgY3JlYXRlZCBhbnkgVXNlciBJbnRlcmZhY2UuIFdlIHNob3VsZCBrbm93IG91ciBjb2RlIGlzIGNvbWluZyB0b2dldGhlciBieSBydW5uaW5nIHRoZSB0ZXN0cy5cbi8vIFlvdSBzaG91bGRu4oCZdCBiZSByZWx5aW5nIG9uIGNvbnNvbGUubG9ncyBvciBET00gbWV0aG9kcyB0byBtYWtlIHN1cmUgeW91ciBjb2RlIGlzIGRvaW5nIHdoYXQgeW91IGV4cGVjdCBpdCB0by5cbi8vIEdhbWVib2FyZHMgc2hvdWxkIGJlIGFibGUgdG8gcGxhY2Ugc2hpcHMgYXQgc3BlY2lmaWMgY29vcmRpbmF0ZXMgYnkgY2FsbGluZyB0aGUgc2hpcCBmYWN0b3J5IGZ1bmN0aW9uLlxuLy8gR2FtZWJvYXJkcyBzaG91bGQgaGF2ZSBhIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHBhaXIgb2YgY29vcmRpbmF0ZXMsIGRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGF0dGFjayBoaXQgYSBzaGlwXG4vLyBBbmQgdGhlbiBzZW5kcyB0aGUg4oCYaGl04oCZIGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXAsIG9yIHJlY29yZHMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtaXNzZWQgc2hvdC5cbi8vIEdhbWVib2FyZHMgc2hvdWxkIGtlZXAgdHJhY2sgb2YgbWlzc2VkIGF0dGFja3Mgc28gdGhleSBjYW4gZGlzcGxheSB0aGVtIHByb3Blcmx5LlxuLy8gR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lQm9hcmQod2lkdGgsIGhlaWdodCkge1xuICBsZXQgZ2FtZUJvYXJkID0gW107XG4gIGxldCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IGdldEdhbWVCb2FyZCA9ICgpID0+IGdhbWVCb2FyZDtcbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiBzaGlwcztcbiAgY29uc3QgYnVpbGRCb2FyZCA9ICgpID0+IChnYW1lQm9hcmQgPSBuZXcgQXJyYXkod2lkdGggKiBoZWlnaHQpLmZpbGwobnVsbCkpO1xuICBjb25zdCBoaXQgPSAoY29vcmRpbmF0ZSkgPT4gKGdhbWVCb2FyZFtjb29yZGluYXRlXSA9IDEpO1xuICBjb25zdCBtaXNzID0gKGNvb3JkaW5hdGUpID0+IChnYW1lQm9hcmRbY29vcmRpbmF0ZV0gPSAwKTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCkgPT4ge1xuICAgIGNvbnN0IHNoaXBOYW1lID0gc2hpcC5nZXROYW1lKCk7XG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGUgPSBzaGlwLmdldEJvZHkoKTtcbiAgICBzaGlwQ29vcmRpbmF0ZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBnYW1lQm9hcmRbZWxlbWVudF0gPSBzaGlwTmFtZTtcbiAgICB9KTtcbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGxldCBsb2NhdGlvbiA9IGdhbWVCb2FyZFtjb29yZGluYXRlXTtcbiAgICBpZiAobG9jYXRpb24gIT09IG51bGwpIHtcbiAgICAgIGlmIChsb2NhdGlvbiAhPT0gMSB8fCBsb2NhdGlvbiAhPT0gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgICAgICBsZXQgbmFtZSA9IHNoaXAuZ2V0TmFtZSgpO1xuICAgICAgICAgIGlmIChsb2NhdGlvbiA9PT0gbmFtZSkge1xuICAgICAgICAgICAgc2hpcC5pc0hpdChjb29yZGluYXRlKTtcbiAgICAgICAgICAgIGhpdChjb29yZGluYXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBtaXNzKGNvb3JkaW5hdGUpO1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkgPT09IHRydWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIGdhbWVCb2FyZCA9IFtdO1xuICAgIGJ1aWxkQm9hcmQoKTtcbiAgICBzaGlwcyA9IFtdO1xuICB9O1xuICBidWlsZEJvYXJkKCk7XG4gIHJldHVybiB7XG4gICAgZ2V0R2FtZUJvYXJkLFxuICAgIGdldFNoaXBzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgcGxhY2VTaGlwLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICByZXNldCxcbiAgfTtcbn1cbmV4cG9ydCB7IGNyZWF0ZUdhbWVCb2FyZCB9O1xuLy8gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVHYW1lQm9hcmQ7XG4iLCJpbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG4vLyBDT05TVEFOVFNcbmNvbnN0IHNoaXBzID0gW1xuICB7IG5hbWU6IFwiY3J1aXNlclwiLCBsZW5ndGg6IDUgfSxcbiAgeyBuYW1lOiBcImJhdHRsZXNoaXBcIiwgbGVuZ3RoOiA0IH0sXG4gIHsgbmFtZTogXCJkZXN0cm95ZXJcIiwgbGVuZ3RoOiAzIH0sXG4gIHsgbmFtZTogXCJzdWJtYXJpbmVcIiwgbGVuZ3RoOiAzIH0sXG4gIHsgbmFtZTogXCJwYXRyb2xcIiwgbGVuZ3RoOiAyIH0sXG5dO1xuXG4vLyBGVU5DVElPTlNcbi8vcmFuZG0gbnVtYmVyXG5sZXQgcmFuZG9tRGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5sZXQgcmFuZG9tU3BvdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5KTtcbmNvbnN0IGNyZWF0ZUZsZWV0ID0gKHNoaXBzKSA9PiB7XG4gIGNvbnN0IGZsZWV0ID0gW107XG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBsZXQgcyA9IGNyZWF0ZVNoaXAoc2hpcC5uYW1lLCBzaGlwLmxlbmd0aCk7XG4gICAgZmxlZXQucHVzaChzKTtcbiAgfSk7XG4gIHJldHVybiBmbGVldDtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUZsZWV0LCBzaGlwcywgcmFuZG9tU3BvdCwgcmFuZG9tRGlyZWN0aW9uIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tIFwiLi9jcmVhdGVQbGF5ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIi4vZG9tXCI7XG5jb25zdCBwbGF5ZXJTZXR1cCA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyID0gY3JlYXRlUGxheWVyKFwiUDFcIik7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gY3JlYXRlR2FtZUJvYXJkKDEwLCAxMCk7XG4gIGNvbnN0IHBsYXllclNoaXBzID0gZG9tLmdldEZsZWV0KCk7XG5cbiAgLy90aGlzIG1lYW5zIHlvdXIgc2hpcHMgYXJyYXkgaGF2ZSBhIGJvZHkgaW4gdGhlbSByZWFkeSB0byBwbGFjZWQgb24gYSBib2FyZFxuICBwbGF5ZXJTaGlwcy5mb3JFYWNoKChwbGF5ZXJTaGlwKSA9PiB7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllclNoaXApO1xuICB9KTtcbiAgcmV0dXJuIHsgcGxheWVyLCBwbGF5ZXJCb2FyZCwgcGxheWVyU2hpcHMgfTtcbn07XG5leHBvcnQgeyBwbGF5ZXJTZXR1cCB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlU2hpcChuYW1lLCBsZW5ndGgpIHtcbiAgbGV0IGhlYWx0aCA9IG5ldyBBcnJheShsZW5ndGgpLmZpbGwoZmFsc2UpO1xuICBsZXQgYm9keSA9IFtdO1xuXG4gIGNvbnN0IGJ1aWxkQm9keSA9IChoZWFkLCBkaXJlY3Rpb24pID0+IHtcbiAgICBsZXQgYnVpbHRCb2R5ID0gW107XG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgXCJob3Jpem9udGFsXCI6XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBidWlsdEJvZHkucHVzaChoZWFkICsgaSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwidmVydGljYWxcIjpcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGJ1aWx0Qm9keS5wdXNoKGhlYWQgKyBpICogMTApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBib2R5ID0gYnVpbHRCb2R5O1xuICB9O1xuXG4gIGNvbnN0IGlzSGl0ID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2R5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY29vcmRpbmF0ZSA9PSBib2R5W2ldKSB7XG4gICAgICAgIGhlYWx0aFtpXSA9IHRydWU7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoZWFsdGguZXZlcnkoKGUpID0+IGUgPT09IHRydWUpO1xuICBjb25zdCBnZXRCb2R5ID0gKCkgPT4gYm9keTtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcblxuICByZXR1cm4geyBnZXROYW1lLCBnZXRMZW5ndGgsIGdldEJvZHksIGJ1aWxkQm9keSwgaXNIaXQsIGlzU3VuayB9O1xufVxuZXhwb3J0IHsgY3JlYXRlU2hpcCB9O1xuLy8gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgY3JlYXRlR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tIFwiLi9jcmVhdGVQbGF5ZXJcIjtcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuL2V2ZW50bGlzdG5lcnNcIjtcbi8vIGxldCBwbGF5ZXJCb2FyZDtcbi8vIGxldCBjb21wdXRlckJvYXJkO1xuLy8gLy8gYm9hcmQgRGltZW5zaW9uc1xuLy8gY29uc3QgYm9hcmRXaWR0aCA9IDEwO1xuLy8gY29uc3QgYm9hcmRIZWlnaHQgPSAxMDtcbi8vIGNvbnN0IGdlbmVyYXRlQm9hcmQgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IHAxQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAxLWJvYXJkXCIpO1xuLy8gICBsZXQgcDJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDItYm9hcmRcIik7XG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbi8vICAgICBsZXQgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIGxldCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vICAgICBjZWxsMS5jbGFzc0xpc3QuYWRkKFwicDEtZ3JpZC1jZWxsXCIpO1xuLy8gICAgIGNlbGwxLmRhdGFzZXQuaWQgPSBpO1xuLy8gICAgIGNlbGwyLmNsYXNzTGlzdC5hZGQoXCJwMi1ncmlkLWNlbGxcIik7XG4vLyAgICAgY2VsbDIuZGF0YXNldC5pZCA9IGk7XG4vLyAgICAgcDFCb2FyZC5hcHBlbmRDaGlsZChjZWxsMSk7XG4vLyAgICAgcDJCb2FyZC5hcHBlbmRDaGlsZChjZWxsMik7XG4vLyAgIH1cbi8vIH07XG5cbi8vIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuLy8gLy8gbGV0cyBncmFiIHRoZSBib2FyZCB0byBiZSBhcHBlbmRlZCB0b1xuLy8gY29uc3QgcDFCb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMS1ncmlkLWNlbGxcIik7XG4vLyBjb25zb2xlLmxvZyhwMUJvYXJkQ2VsbHMpO1xuLy8gY29uc3QgcDJCb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMi1ncmlkLWNlbGxcIik7XG4vLyBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZVwiKTtcbi8vIGNvbnN0IHAxQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAxLWJvYXJkXCIpO1xuLy8gbGV0IGRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuLy8gLy8gc2VsZWN0IGEgc2hpcFxuLy8gbGV0IGFjdGl2ZVNoaXAgPSBudWxsO1xuXG4vLyAvLyBzZXQgZXZlbnQgbGlzdG5lciBvbiBzaGlwc1xuLy8gbGV0IHBsYXllclNoaXBzID0gW1xuLy8gICBjcmVhdGVTaGlwKFwiY3J1aXNlclwiLCA1KSxcbi8vICAgY3JlYXRlU2hpcChcImJhdHRsZXNoaXBcIiwgNCksXG4vLyAgIGNyZWF0ZVNoaXAoXCJkZXN0cm95ZXJcIiwgMyksXG4vLyAgIGNyZWF0ZVNoaXAoXCJzdWJtYXJpbmVcIiwgMyksXG4vLyAgIGNyZWF0ZVNoaXAoXCJwYXRyb2xcIiwgMiksXG4vLyBdO1xuLy8gc2hpcHNDb250YWluZXIuZm9yRWFjaCgoc2hpcCwgaW5kZXgpID0+IHtcbi8vICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbi8vICAgICBhY3RpdmVTaGlwID0gcGxheWVyU2hpcHNbaW5kZXhdO1xuLy8gICAgIHN3aXRjaEFjdGl2ZVNoaXAoaW5kZXgpO1xuLy8gICAgIGNvbnNvbGUubG9nKGFjdGl2ZVNoaXApO1xuLy8gICB9KTtcbi8vIH0pO1xuLy8gLy8gc2V0IGV2ZW50IGxpc3RuZXIgb24gZ3JpZHNcbi8vIGxldCB2YWxpZCA9IGZhbHNlO1xuLy8gcDFCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbi8vICAgbGV0IGNlbGwgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwMS1ncmlkLWNlbGxcIik7XG4vLyAgIGlmIChjZWxsKSB7XG4vLyAgICAgaWYgKGFjdGl2ZVNoaXAgPT09IG51bGwpIHJldHVybjtcbi8vICAgICBpZiAoIXZhbGlkKSByZXR1cm47XG4vLyAgICAgY2xlYXJTaGlwKGFjdGl2ZVNoaXAsIHAxQm9hcmRDZWxscyk7XG4vLyAgICAgcGxhY2VTaGlwKGFjdGl2ZVNoaXAsIHAxQm9hcmRDZWxscyk7XG4vLyAgIH1cbi8vICAgcmV0dXJuO1xuLy8gfSk7XG4vLyAvLyBldmVudFxuLy8gcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuLy8gICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbi8vIH0pO1xuLy8gLy9mdW50aW9uc1xuLy8gLy8gbm90IG5lZWRlZFxuLy8gLy8gZnVuY3Rpb24gcm90YXRlU2hpcCgpIHtcbi8vIC8vICAgYWN0aXZlU2hpcC5kaXJlY3Rpb24gPVxuLy8gLy8gICAgIGFjdGl2ZVNoaXAuZGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4vLyAvLyB9XG4vLyBmdW5jdGlvbiBjbGVhckFjdGl2ZVNoaXAoKSB7XG4vLyAgIHNoaXBzQ29udGFpbmVyLmZvckVhY2goKHNoaXApID0+IHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4vLyB9XG4vLyBmdW5jdGlvbiBzd2l0Y2hBY3RpdmVTaGlwKGluZGV4KSB7XG4vLyAgIGNsZWFyQWN0aXZlU2hpcCgpO1xuLy8gICBzaGlwc0NvbnRhaW5lcltpbmRleF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbi8vIH1cbi8vIGZ1bmN0aW9uIGNsZWFyU2hpcChzaGlwLCBib2FyZCkge1xuLy8gICBsZXQgbmFtZSA9IHNoaXAuZ2V0TmFtZSgpO1xuLy8gICBbLi4uYm9hcmRdLmZpbHRlcigoY2VsbCkgPT4ge1xuLy8gICAgIGxldCByZXN1bHQgPSBjZWxsLmNsYXNzTGlzdC5jb250YWlucyhuYW1lKTtcbi8vICAgICBpZiAocmVzdWx0KSB7XG4vLyAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG4vLyAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWtlblwiKTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfVxuLy8gZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGJvYXJkKSB7XG4vLyAgIGxldCBuYW1lID0gc2hpcC5nZXROYW1lKCk7XG4vLyAgIGxldCBib2R5ID0gc2hpcC5nZXRCb2R5KCk7XG4vLyAgIGJvZHkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKG5hbWUpO1xuLy8gICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuLy8gICAgIGJvYXJkW2NlbGxdLmNsYXNzTGlzdC5hZGQoYCR7bmFtZX1gKTtcbi8vICAgICBib2FyZFtjZWxsXS5jbGFzc0xpc3QuYWRkKFwidGFrZW5cIik7XG4vLyAgIH0pO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiByYW5kb21pemUoc2hpcCwgYm9hcmQpIHtcbi8vICAgbGV0IHJhbmRvbURpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuLy8gICBsZXQgcmFuZG9tU3BvdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5KTtcbi8vICAgaWYgKHJhbmRvbURpcmVjdGlvbiA9PT0gMCkge1xuLy8gICAgIHJhbmRvbURpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuLy8gICB9IGVsc2UgcmFuZG9tRGlyZWN0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xuXG4vLyAgIHNoaXAuYnVpbGRCb2R5KHJhbmRvbVNwb3QsIHJhbmRvbURpcmVjdGlvbik7XG5cbi8vICAgaWYgKGlzT3V0c2lkZUJvdW5kYXJ5KHNoaXApKSB7XG4vLyAgICAgcmFuZG9taXplKHNoaXAsIGJvYXJkKTtcbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vICAgaWYgKGlzVGFrZW4oc2hpcCwgYm9hcmQpKSB7XG4vLyAgICAgcmFuZG9taXplKHNoaXAsIGJvYXJkKTtcbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vIH1cbi8vIGZ1bmN0aW9uIGlzVGFrZW4oc2hpcCwgYm9hcmQpIHtcbi8vICAgbGV0IGJvZHkgPSBzaGlwLmdldEJvZHkoKTtcbi8vICAgbGV0IGxlbmd0aCA9IHNoaXAuZ2V0TGVuZ3RoKCk7XG4vLyAgIGxldCByZXN1bHQgPSBmYWxzZTtcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuLy8gICAgIGxldCBjZWxsID0gYm9keVtpXTtcbi8vICAgICBpZiAoYm9hcmRbY2VsbF0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFrZW5cIikpIHtcbi8vICAgICAgIHJlc3VsdCA9IHRydWU7XG4vLyAgICAgICBicmVhaztcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgcmV0dXJuIHJlc3VsdDtcbi8vIH1cbi8vIGZ1bmN0aW9uIGlzT3V0c2lkZUJvdW5kYXJ5KHNoaXApIHtcbi8vICAgbGV0IGJvZHkgPSBzaGlwLmdldEJvZHkoKTtcbi8vICAgbGV0IGxlbmd0aCA9IHNoaXAuZ2V0TGVuZ3RoKCk7XG4vLyAgIGxldCByZXN1bHQgPSBmYWxzZTtcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbi8vICAgICBpZiAoYm9keVtpXSAlIDEwID09PSA5KSB7XG4vLyAgICAgICByZXN1bHQgPSB0cnVlO1xuLy8gICAgICAgYnJlYWs7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbi8vICAgICBpZiAoYm9keVtpXSA+IDk5KSB7XG4vLyAgICAgICByZXN1bHQgPSB0cnVlO1xuLy8gICAgICAgYnJlYWs7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIHJldHVybiByZXN1bHQ7XG4vLyB9XG4vLyAvLyByYW5kb20gYnV0dG9uXG4vLyBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmRvbVwiKTtcbi8vIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbi8vICAgcGxheWVyU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuLy8gICAgIHJhbmRvbWl6ZShzaGlwLCBwMUJvYXJkQ2VsbHMpO1xuLy8gICAgIGNsZWFyU2hpcChzaGlwLCBwMUJvYXJkQ2VsbHMpO1xuLy8gICAgIHBsYWNlU2hpcChzaGlwLCBwMUJvYXJkQ2VsbHMpO1xuLy8gICB9KTtcbi8vIH0pO1xuXG4vLyAvLyB0byB0YWtlIHRoZSBzaGlwIGJvZHkgYXJyYXlcbi8vIC8vIGFkZCBhIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGFmZmVjdGVkIHNwb3RzXG4vLyAvLyBpZiBpdHMgdmFsaWQgaWYgaXRzIG5vdFxuLy8gLy8gZG8gbm90aGluZ1xuLy8gLy8gZXZlbnQgbGlzbmVyIG9uIGdyaWRzXG4vLyBwMUJvYXJkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuLy8gICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcbi8vICAgICBpZiAoYWN0aXZlU2hpcCA9PT0gbnVsbCkgcmV0dXJuO1xuLy8gICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldCk7XG4vLyAgICAgbGV0IGlkeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSk7XG4vLyAgICAgYWN0aXZlU2hpcC5idWlsZEJvZHkoaWR4LCBkaXJlY3Rpb24pO1xuLy8gICAgIGNsZWFySG92ZXIoKTtcbi8vICAgICBjb25zb2xlLmxvZyhhY3RpdmVTaGlwLmdldEJvZHkoKSk7XG4vLyAgICAgaWYgKGlzT3V0c2lkZUJvdW5kYXJ5KGFjdGl2ZVNoaXApKSB7XG4vLyAgICAgICBjZWxsLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcbi8vICAgICAgIHZhbGlkID0gZmFsc2U7XG4vLyAgICAgICByZXR1cm47XG4vLyAgICAgfVxuXG4vLyAgICAgaWYgKGlzVGFrZW4oYWN0aXZlU2hpcCwgcDFCb2FyZENlbGxzKSkge1xuLy8gICAgICAgY2VsbC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4vLyAgICAgICB2YWxpZCA9IGZhbHNlO1xuLy8gICAgICAgcmV0dXJuO1xuLy8gICAgIH1cbi8vICAgICBhZGRIb3ZlcihhY3RpdmVTaGlwKTtcbi8vICAgICB2YWxpZCA9IHRydWU7XG4vLyAgIH0pO1xuLy8gfSk7XG4vLyBwMUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChlKSA9PiB7XG4vLyAgIGNsZWFySG92ZXIoKTtcbi8vIH0pO1xuXG4vLyBmdW5jdGlvbiBhZGRIb3ZlcihzaGlwKSB7XG4vLyAgIGxldCBib2R5ID0gc2hpcC5nZXRCb2R5KCk7XG4vLyAgIGJvZHkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuLy8gICAgIHAxQm9hcmRDZWxsc1tjZWxsXS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XG4vLyAgIH0pO1xuLy8gfVxuLy8gZnVuY3Rpb24gY2xlYXJIb3ZlcigpIHtcbi8vICAgWy4uLnAxQm9hcmRDZWxsc10uZmlsdGVyKChjZWxsKSA9PiB7XG4vLyAgICAgbGV0IGhvdmVyID0gY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJob3ZlclwiKTtcbi8vICAgICBsZXQgY3Vyc29yID0gY2VsbC5zdHlsZS5jdXJzb3I7XG4vLyAgICAgaWYgKGhvdmVyKSB7XG4vLyAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKGN1cnNvciA9PT0gXCJub3QtYWxsb3dlZFwiKSB7XG4vLyAgICAgICBjZWxsLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9XG4vLyAvLy8gc3RhcnQgYnV0dG9uXG4vLyBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRcIik7XG4vLyBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lKTtcbi8vIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbi8vICAgY29uc3QgcDFCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDEtYm9hcmQtY29udGFpbmVyXCIpO1xuLy8gICBjb25zdCBwMkJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wMi1ib2FyZC1jb250YWluZXJcIik7XG4vLyAgIGNvbnN0IHNoaXBTZWxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuLy8gICAgIFwiLnNoaXAtc2VsZWN0aW9uLWNvbnRhaW5lclwiXG4vLyAgICk7XG4vLyAgIGNvbnN0IGJvYXJkSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtaW5mb1wiKTtcbi8vICAgcDFCb2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZVwiKTtcbi8vICAgcDJCb2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbi8vICAgc2hpcFNlbGVjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4vLyAgIGJvYXJkSW5mby5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4vLyAgIGFjdGl2ZVNoaXAgPSBudWxsO1xuLy8gICBwbGF5ZXJCb2FyZCA9IHBsYXllclNldHVwKCk7XG4vLyAgIGNvbXB1dGVyQm9hcmQgPSBjb21wdXRlclNldHVwKCk7XG4vLyB9XG5cbi8vIC8vIFRoZSBzZXR1cHMgYmVsb3cgY3JlYXRlcyB0aGUgcGxheWVycyBhbmQgdGhlaXIgYm9hcmRzIGFmdGVyXG4vLyAvLyB0aGUgZnVuY3Rpb24gY2FsbHMgZm9yIHRoZW0gd2UgY2FuIGZpbmFsbHkgcGxheSB0aGUgZ2FtZVxuLy8gZnVuY3Rpb24gcGxheWVyU2V0dXAoKSB7XG4vLyAgIGNvbnN0IHBsYXllciA9IGNyZWF0ZVBsYXllcihcIlBsYXllclwiLCBcImh1bWFuXCIsIGJvYXJkSGVpZ2h0LCBib2FyZFdpZHRoKTtcbi8vICAgY29uc3QgcGxheWVyQm9hcmQgPSBwbGF5ZXIuZ2V0R2FtZUJvYXJkKCk7XG4vLyAgIHBsYXllclNoaXBzLmZvckVhY2goKHNoaXApID0+IHBsYXllckJvYXJkLnBsYWNlU2hpcChzaGlwKSk7XG4vLyAgIHJldHVybiBwbGF5ZXJCb2FyZDtcbi8vIH1cbi8vIGZ1bmN0aW9uIGNvbXB1dGVyU2V0dXAoKSB7XG4vLyAgIC8vIHlvdSBzaG91bGQgYmUgYW4gb2JqZWN0IGFuZCBoYXZlIGEgZmlsZSBmb3IgeW91cnNlbGYgd2l0aCBhbiBpbml0IG1ldGhvZCBhbmQgYXR0YWNrIG1ldGhvZFxuLy8gICBjb25zdCBjb21wdXRlciA9IGNyZWF0ZVBsYXllcihcIlBsYXllcjJcIiwgXCJjb21wdXRlclwiLCBib2FyZFdpZHRoLCBib2FyZEhlaWdodCk7XG4vLyAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBjb21wdXRlci5nZXRHYW1lQm9hcmQoKTtcbi8vICAgY29uc3QgY29tcHV0ZXJTaGlwcyA9IFtcbi8vICAgICBjcmVhdGVTaGlwKFwiY3J1aXNlclwiLCA1KSxcbi8vICAgICBjcmVhdGVTaGlwKFwiYmF0dGxlc2hpcFwiLCA0KSxcbi8vICAgICBjcmVhdGVTaGlwKFwiZGVzdHJveWVyXCIsIDMpLFxuLy8gICAgIGNyZWF0ZVNoaXAoXCJzdWJtYXJpbmVcIiwgMyksXG4vLyAgICAgY3JlYXRlU2hpcChcInBhdHJvbFwiLCAyKSxcbi8vICAgXTtcbi8vICAgLy8gdGhpcyBnZW5lcmF0ZXMgdGhlIHNoaXBzIGF0IHJhbmRvbSBsb2NhdGlvbnNcbi8vICAgY29tcHV0ZXJTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4vLyAgICAgcmFuZG9taXplKHNoaXAsIHAyQm9hcmRDZWxscyk7XG4vLyAgICAgYWRkVGFrZW4oc2hpcCwgcDJCb2FyZENlbGxzKTtcbi8vICAgfSk7XG4vLyAgIC8vdGhpcyBtZWFucyB5b3VyIHNoaXBzIGFycmF5cyBoYXZlIGEgYm9keSBpbiB0aGVtIHJlYWR5IHRvIHBsYWNlZCBvbiBhIGJvYXJkXG4vLyAgIGNvbXB1dGVyU2hpcHMuZm9yRWFjaCgoY29tcHV0ZXJTaGlwKSA9PlxuLy8gICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyU2hpcClcbi8vICAgKTtcbi8vICAgY2xlYXJUYWtlbihwMkJvYXJkQ2VsbHMpO1xuLy8gICBmdW5jdGlvbiBhZGRUYWtlbihzaGlwLCBib2FyZCkge1xuLy8gICAgIGNvbnN0IGJvZHkgPSBzaGlwLmdldEJvZHkoKTtcbi8vICAgICBib2R5LmZvckVhY2goKGNlbGwpID0+IHtcbi8vICAgICAgIGJvYXJkW2NlbGxdLmNsYXNzTGlzdC5hZGQoXCJ0YWtlblwiKTtcbi8vICAgICB9KTtcbi8vICAgfVxuLy8gICBmdW5jdGlvbiBjbGVhclRha2VuKGJvYXJkKSB7XG4vLyAgICAgYm9hcmQuZm9yRWFjaCgoY2VsbCkgPT4ge1xuLy8gICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwidGFrZW5cIik7XG4vLyAgICAgfSk7XG4vLyAgIH1cbi8vICAgcmV0dXJuIGNvbXB1dGVyQm9hcmQ7XG4vLyB9XG5cbi8vIC8vIGhvdyB0byBhdHRhY2sgaXMgYnkgc2VsZWN0aW5nIGFuIGluZGV4IGFuZCBjYWxsaW5nIHRoZVxuLy8gLy8gcmVjaWV2ZSBhdHRhY2sgZnVuY3Rpb24gZnJvbSB0aGUgb3Bwb3NpbmcgYm9hcmRcbi8vIC8vIGZvciB0aGUgYWkgdGhleSBzZWxlY3QgYSBzcG90IHRoYXRzIG5vdCBhdHRhY2tlZCB5ZXRcbi8vIC8vIGFuZCBhdHRhY2sgdGhhdCBzcG90XG5cbi8vIC8vIGZvciB0aGUgcGxheWVyIHlvdSBzZWxlY3QgYSBzcG90IG9uIHRoZSBvcHBvbmVuZXQgYm9hcmRcbi8vIC8vIHN0YXJ0IHdpdGggdGhlIGlucHV0XG4vLyBjb25zdCBwMkJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wMi1ib2FyZFwiKTtcbi8vIHAyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4vLyAgIGxldCBjZWxsID0gZS50YXJnZXQ7XG5cbi8vICAgbGV0IGlkeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSk7XG4vLyAgIC8vIGkgd2FudCB0byBiZSBhYmxlIHRvIGNhbGwgcmVjaWV2ZUF0dGFjayBvbiB0aGUgZ2FtZWJvYXJkXG4vLyAgIGNvbXB1dGVyQm9hcmQucmVjZWl2ZUF0dGFjayhpZHgpO1xuLy8gICBjb21wdXRlckF0dGFjaygpO1xuLy8gICByZW5kZXIoKTtcbi8vICAgY29uc29sZS5sb2coY29tcHV0ZXJCb2FyZC5nZXRHYW1lQm9hcmQoKSk7XG4vLyAgIHN1bmtTaGlwKGNvbXB1dGVyQm9hcmQpO1xuLy8gICBzdW5rU2hpcChwbGF5ZXJCb2FyZCk7XG4vLyAgIGdhbWVPdmVyKGNvbXB1dGVyQm9hcmQpO1xuLy8gICBnYW1lT3ZlcihwbGF5ZXJCb2FyZCk7XG4vLyB9KTtcbi8vIGZ1bmN0aW9uIHJlbmRlcigpIHtcbi8vICAgY29tcHV0ZXJCb2FyZC5nZXRHYW1lQm9hcmQoKS5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuLy8gICAgIGlmIChjZWxsID09IDApIHtcbi8vICAgICAgIC8vbWlzc1xuXG4vLyAgICAgICBwMkJvYXJkQ2VsbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuLy8gICAgIH0gZWxzZSBpZiAoY2VsbCA9PT0gMSkge1xuLy8gICAgICAgLy9oaXRcblxuLy8gICAgICAgcDJCb2FyZENlbGxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyAgIHBsYXllckJvYXJkLmdldEdhbWVCb2FyZCgpLmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4vLyAgICAgaWYgKGNlbGwgPT0gMCkge1xuLy8gICAgICAgLy9taXNzXG5cbi8vICAgICAgIHAxQm9hcmRDZWxsc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4vLyAgICAgfSBlbHNlIGlmIChjZWxsID09PSAxKSB7XG4vLyAgICAgICAvL2hpdFxuXG4vLyAgICAgICBwMUJvYXJkQ2VsbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH1cbi8vIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKCkge1xuLy8gICBsZXQgcmFuZG9tU3BvdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5KTtcbi8vICAgbGV0IGJvYXJkID0gcGxheWVyQm9hcmQuZ2V0R2FtZUJvYXJkKCk7XG4vLyAgIGlmIChib2FyZFtyYW5kb21TcG90XSA9PT0gMCB8fCBib2FyZFtyYW5kb21TcG90XSA9PT0gMSkge1xuLy8gICAgIGNvbXB1dGVyQXR0YWNrKCk7XG4vLyAgIH0gZWxzZSBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVNwb3QpO1xuLy8gfVxuXG4vLyAvLyBhdCB0aGUgZW5kIG9mIHRoZSBkYXkgaSB3YW50IHRoaXMgZmlsZSB0byBqdXN0IGJlXG4vLyAvLyBhbiBvYmplY3Qgd2l0aCBqdXN0IGZ1Y250aW9ucyBpbiB0aGVtIGdlbmVyYXRlQm9hcmQoKSBldGMgZXRjXG5cbi8vIC8vLyBpbXBsZW1lbnQgZ2FtZU92ZXJcbi8vIGZ1bmN0aW9uIGdhbWVPdmVyKGJvYXJkKSB7XG4vLyAgIGlmIChib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuLy8gICAgIHJlc3VsdE1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIllvdSBXaW5cIjtcbi8vICAgICByZXN1bHRPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4vLyAgICAgcmVzdWx0UGFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuLy8gICB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHN1bmtTaGlwKGJvYXJkKSB7XG4vLyAgIGxldCBzaGlwcyA9IGJvYXJkLmdldFNoaXBzKCk7XG4vLyAgIGxldCBjb3VudCA9IDU7XG4vLyAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuLy8gICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4vLyAgICAgICBjb3VudC0tO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICBjb25zb2xlLmxvZyhjb3VudCk7XG4vLyB9XG4vLyAvLyBzdGFydCBidXR0b25cbi8vIGNvbnN0IHN0YXJ0UGFnZVN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idG5cIik7XG4vLyBjb25zdCBzdGFydFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LXBhZ2VcIik7XG4vLyBzdGFydFBhZ2VTdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbi8vICAgcmVzZXQoKTtcbi8vICAgc3RhcnRQYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4vLyB9KTtcbi8vIC8vIG1lbnUgYnV0dG9uXG4vLyBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcbi8vIGNvbnN0IG1lbnVPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5LW1lbnVcIik7XG4vLyBjb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1wYWdlXCIpO1xuLy8gY29uc3QgcmVzdW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bWUtYnRuXCIpO1xuLy8gY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydC1idG5cIik7XG4vLyBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuLy8gICBtZW51T3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuLy8gICBtZW51UGFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuLy8gfSk7XG4vLyByZXN1bWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgbWVudU92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbi8vICAgbWVudVBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbi8vIH0pO1xuLy8gcmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBzdGFydFBhZ2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbi8vICAgbWVudU92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbi8vICAgbWVudVBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbi8vIH0pO1xuLy8gLy8gcmVzdWx0IFBhZ2Vcbi8vIGNvbnN0IHJlc3VsdE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXktcmVzdWx0XCIpO1xuLy8gY29uc3QgcmVzdWx0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0LXBhZ2VcIik7XG4vLyBjb25zdCByZXN1bHRNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHQtbWVzc2FnZVwiKTtcbi8vIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1hZ2FpblwiKTtcbi8vIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICByZXN1bHRPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4vLyAgIHJlc3VsdFBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbi8vICAgc3RhcnRQYWdlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4vLyB9KTtcblxuLy8gZnVuY3Rpb24gcmVzZXQoKSB7XG4vLyAgIGdlbmVyYXRlQm9hcmQoKTtcbi8vICAgY29uc3QgcDFCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDEtYm9hcmQtY29udGFpbmVyXCIpO1xuLy8gICBjb25zdCBwMkJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wMi1ib2FyZC1jb250YWluZXJcIik7XG4vLyAgIGNvbnN0IHNoaXBTZWxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuLy8gICAgIFwiLnNoaXAtc2VsZWN0aW9uLWNvbnRhaW5lclwiXG4vLyAgICk7XG4vLyAgIGNvbnN0IGJvYXJkSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtaW5mb1wiKTtcbi8vICAgcDFCb2FyZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZVwiKTtcbi8vICAgcDJCb2FyZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbi8vICAgc2hpcFNlbGVjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4vLyAgIGJvYXJkSW5mby5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4vLyAgIGFjdGl2ZVNoaXAgPSBudWxsO1xuLy8gICAvL3dlIG5lZWQgdG8gcmVzZXQgZXZlcnl0aGluZ1xuLy8gICAvLyB0aGUgcGxheWVyIFBsYWNlbWVudCBCb2FyZFxuLy8gICAvLyB0aGUgY29tcHV0ZXIgYm9hcmQgc2hvdWxkIGJlIGhpZGRlblxuLy8gfVxuLy8gZnVuY3Rpb24gY2xlYXJCb2FyZENlbGxzKGJvYXJkKSB7XG4vLyAgIGJvYXJkLmZvckVhY2goKGNlbGwpID0+IHt9KTtcbi8vIH1cbmRvbS5nZW5lcmF0ZUJvYXJkKDEwLCAxMCk7XG5ldmVudHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==