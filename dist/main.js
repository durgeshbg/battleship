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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --orange: #f8cf85;
  --dark-orange: #f8bc4d;
  --black: #404040;
  --light-blue: #00afdf;
  --blue: #2794b3;
  --red: #ff3f3f;
  --green: #88ff88;
  --white: #e6e6e6;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
}

body {
  background-color: var(--orange);
  color: var(--black);
}

h1 {
  text-align: center;
  font-size: 5rem;
}

.score {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 80px;
}
.score .left,
.score .right {
  width: 200px;
  padding: 5px 10px;
  margin: 30px 0px;
  font-weight: lighter;
  border: 0.1px solid var(--black);
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
}

.score .value {
  color: var(--light-blue);
  font-weight: 900;
  border-left: 0.1px solid var(--black);
  padding-left: 10px;
}

.gameboard {
  display: flex;
  justify-content: center;
  gap: 50px;
}

.gameboard .left,
.gameboard .right {
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.row {
  display: flex;
  gap: 1px;
}
.cell {
  padding: 30px;
  border: 0.1px solid var(--black);
  border-radius: 5px;
}

.gameboard .right .cell:hover,
.gameboard .left .cell:hover {
  background-color: var(--dark-orange);
}

.miss {
  background-color: var(--red);
}
.hit {
  background-color: var(--green);
}
.boat {
  background-color: var(--white);
}
.gameboard .right .boat {
  background-color: var(--orange);
}

.gameboard .right.blur .cell {
  background-color: var(--dark-orange);
  opacity: 0.2;
}

.winner {
  align-items: center;
  font-size: 10rem;
}

.navbar {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 30px;
}

.preview {
  background-color: var(--white);
  height: 70px;
  width: 10%;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.preview .display {
  width: 90%;
  height: 60px;
  border: 0.1px solid black;
  border-top: none;
  border-radius: 0px 0px 5px 5px;
  background-color: var(--black);

  display: flex;
  justify-content: center;
  align-items: center;
}

.dashboard {
  height: 70px;
  width: 20%;
  background-color: var(--white);
  border-radius: 5px;
  padding: 10px;

  display: flex;
  justify-content: space-around;
}

.dashboard > * {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dashboard .option {
  background-color: var(--blue);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 30px;
  padding: 20px;
}

.dashboard .option:hover {
  background-color: var(--light-blue);
  cursor: pointer;
}

.navbar .tag {
  font-size: 10px;
  font-weight: lighter;
}

dialog {
  width: max-content;
  height: max-content;
  margin: auto;
  border-radius: 8px;
  padding: 15px;
  border: none;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  background-color: var(--white);
}

::backdrop {
  background-color: rgba(0, 0, 0, 0.4);
}

.dialog-opener {
  padding: 5px 10px;
  border: none;
  background-color: var(--blue);
  color: var(--orange);
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  position: fixed;
  bottom: 10px;
  left: 10px;
}

.dialog-closer {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: var(--dark-orange);
}

.rules-container {
  background-color: var(--white);
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  text-align: left;
}

dialog .rules-container .rules-header {
  font-size: 2rem;
  color: var(--blue);
}

p {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 30px;
}

ul {
  margin-left: 20px;
  font-size: 1.1rem;
  color: var(--black);
}

ul li {
  margin-bottom: 10px;
}

strong {
  color: red;
}

.footer {
  margin-top: 30px;
  font-size: 1.2rem;
  color: var(--dark-orange);
}

@media (max-width: 1400px) {
  h1 {
    text-align: left;
    font-size: 3rem;
    padding: 5px 20px;
  }
  .score {
    font-size: 0.8rem;
    gap: 10px;
    right: 20px;
    top: 0px;
    position: fixed;
  }
  .score .left,
  .score .right {
    width: 120px;
    justify-content: space-evenly;
  }

  .gameboard {
    align-items: center;
    flex-direction: column;
  }

  .navbar {
    width: 200px;
    position: absolute;
    left: -40px;
    top: 50px;
    flex-direction: column;
    align-items: center;
  }

  .preview {
    height: 100px;
    width: 60px;
    padding: 10px;
    font-weight: 600;
    position: relative;
  }

  .preview .display {
    border-radius: 5px;
    width: 50px;
    height: 60px;
  }

  .preview .display img {
    width: 40px;
    height: 40px;
  }

  .preview .tag {
    margin-top: 5px;
    width: fit-content;
  }

  .dashboard {
    height: auto;
    width: auto;
    border-radius: 5px;
    padding: 10px;

    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;
  }

  .navbar .tag {
    font-weight: 600;
  }

  .winner {
    font-size: 5rem;
  }
}

@media (max-width: 830px) {
  .cell {
    padding: 20px;
  }
}

@media (max-width: 650px) {
  .score {
    gap: 10px;
    position: static;
    top: 0px;
    padding: 0px;
    margin: 0;
  }
  .score .left,
  .score .right {
    width: 120px;
    justify-content: space-evenly;
  }

  .preview {
    height: 70px;
    width: 70px;
    border-radius: 5px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: -15px;
    right: -24px;
  }

  .preview .display {
    width: 90%;
    height: 60px;
    border-radius: 5px;
  }

  .dashboard {
    height: auto;
    width: auto;
    border-radius: 5px;
    padding: 10px;

    flex-direction: row;
    position: relative;
    right: -300px;
    top: -180px;
  }

  .dashboard > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .dashboard .option {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 30px;
    padding: 20px;
  }
  .dialog-opener {
    font-size: 16px;
  }
}

@media (max-width: 500px) {
  h1 {
    text-align: left;
    font-size: 2rem;
    padding: 5px 20px;
  }

  .score {
    right: -90px;
    position: relative;
  }
  .preview {
    top: -30px;
    left: 0px;
  }
  .cell {
    padding: 15px;
  }

  .dashboard {
    height: 60px;
    padding: 5px;
  }

  .dashboard > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .dashboard .option {
    font-size: 20px;
    padding: 10px;
  }
  .dialog-opener {
    font-size: 12px;
  }
}

/*
.gameboard .left,
  .gameboard .right {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }
  .row {
    display: flex;
    gap: 0.5px;
  }
  .cell {
    padding: 20px;
    border: 0.1px solid var(--black);
    border-radius: 5px;
  }

  .gameboard .right .cell:hover,
  .gameboard .left .cell:hover {
    background-color: var(--dark-orange);
  }

  .miss {
    background-color: var(--red);
  }
  .hit {
    background-color: var(--green);
  }
  .boat {
    background-color: var(--white);
  }
  .gameboard .right .boat {
    background-color: var(--orange);
  }

  .gameboard .right.blur .cell {
    background-color: var(--dark-orange);
    opacity: 0.2;
  }
*/
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --orange: #f8cf85;\n  --dark-orange: #f8bc4d;\n  --black: #404040;\n  --light-blue: #00afdf;\n  --blue: #2794b3;\n  --red: #ff3f3f;\n  --green: #88ff88;\n  --white: #e6e6e6;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family:\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    'Open Sans',\n    'Helvetica Neue',\n    sans-serif;\n}\n\nbody {\n  background-color: var(--orange);\n  color: var(--black);\n}\n\nh1 {\n  text-align: center;\n  font-size: 5rem;\n}\n\n.score {\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  gap: 80px;\n}\n.score .left,\n.score .right {\n  width: 200px;\n  padding: 5px 10px;\n  margin: 30px 0px;\n  font-weight: lighter;\n  border: 0.1px solid var(--black);\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-around;\n}\n\n.score .value {\n  color: var(--light-blue);\n  font-weight: 900;\n  border-left: 0.1px solid var(--black);\n  padding-left: 10px;\n}\n\n.gameboard {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n}\n\n.gameboard .left,\n.gameboard .right {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.row {\n  display: flex;\n  gap: 1px;\n}\n.cell {\n  padding: 30px;\n  border: 0.1px solid var(--black);\n  border-radius: 5px;\n}\n\n.gameboard .right .cell:hover,\n.gameboard .left .cell:hover {\n  background-color: var(--dark-orange);\n}\n\n.miss {\n  background-color: var(--red);\n}\n.hit {\n  background-color: var(--green);\n}\n.boat {\n  background-color: var(--white);\n}\n.gameboard .right .boat {\n  background-color: var(--orange);\n}\n\n.gameboard .right.blur .cell {\n  background-color: var(--dark-orange);\n  opacity: 0.2;\n}\n\n.winner {\n  align-items: center;\n  font-size: 10rem;\n}\n\n.navbar {\n  display: flex;\n  justify-content: center;\n  gap: 40px;\n  padding: 30px;\n}\n\n.preview {\n  background-color: var(--white);\n  height: 70px;\n  width: 10%;\n  border-radius: 5px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.preview .display {\n  width: 90%;\n  height: 60px;\n  border: 0.1px solid black;\n  border-top: none;\n  border-radius: 0px 0px 5px 5px;\n  background-color: var(--black);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.dashboard {\n  height: 70px;\n  width: 20%;\n  background-color: var(--white);\n  border-radius: 5px;\n  padding: 10px;\n\n  display: flex;\n  justify-content: space-around;\n}\n\n.dashboard > * {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.dashboard .option {\n  background-color: var(--blue);\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  font-size: 30px;\n  padding: 20px;\n}\n\n.dashboard .option:hover {\n  background-color: var(--light-blue);\n  cursor: pointer;\n}\n\n.navbar .tag {\n  font-size: 10px;\n  font-weight: lighter;\n}\n\ndialog {\n  width: max-content;\n  height: max-content;\n  margin: auto;\n  border-radius: 8px;\n  padding: 15px;\n  border: none;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);\n  background-color: var(--white);\n}\n\n::backdrop {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.dialog-opener {\n  padding: 5px 10px;\n  border: none;\n  background-color: var(--blue);\n  color: var(--orange);\n  border-radius: 8px;\n  font-size: 1.2rem;\n  cursor: pointer;\n  position: fixed;\n  bottom: 10px;\n  left: 10px;\n}\n\n.dialog-closer {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: none;\n  background-color: var(--dark-orange);\n}\n\n.rules-container {\n  background-color: var(--white);\n  padding: 20px 30px;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  max-width: 600px;\n  width: 100%;\n  text-align: left;\n}\n\ndialog .rules-container .rules-header {\n  font-size: 2rem;\n  color: var(--blue);\n}\n\np {\n  font-size: 1.1rem;\n  color: #4a5568;\n  margin-bottom: 30px;\n}\n\nul {\n  margin-left: 20px;\n  font-size: 1.1rem;\n  color: var(--black);\n}\n\nul li {\n  margin-bottom: 10px;\n}\n\nstrong {\n  color: red;\n}\n\n.footer {\n  margin-top: 30px;\n  font-size: 1.2rem;\n  color: var(--dark-orange);\n}\n\n@media (max-width: 1400px) {\n  h1 {\n    text-align: left;\n    font-size: 3rem;\n    padding: 5px 20px;\n  }\n  .score {\n    font-size: 0.8rem;\n    gap: 10px;\n    right: 20px;\n    top: 0px;\n    position: fixed;\n  }\n  .score .left,\n  .score .right {\n    width: 120px;\n    justify-content: space-evenly;\n  }\n\n  .gameboard {\n    align-items: center;\n    flex-direction: column;\n  }\n\n  .navbar {\n    width: 200px;\n    position: absolute;\n    left: -40px;\n    top: 50px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .preview {\n    height: 100px;\n    width: 60px;\n    padding: 10px;\n    font-weight: 600;\n    position: relative;\n  }\n\n  .preview .display {\n    border-radius: 5px;\n    width: 50px;\n    height: 60px;\n  }\n\n  .preview .display img {\n    width: 40px;\n    height: 40px;\n  }\n\n  .preview .tag {\n    margin-top: 5px;\n    width: fit-content;\n  }\n\n  .dashboard {\n    height: auto;\n    width: auto;\n    border-radius: 5px;\n    padding: 10px;\n\n    flex-direction: column;\n    justify-content: space-evenly;\n    gap: 10px;\n  }\n\n  .navbar .tag {\n    font-weight: 600;\n  }\n\n  .winner {\n    font-size: 5rem;\n  }\n}\n\n@media (max-width: 830px) {\n  .cell {\n    padding: 20px;\n  }\n}\n\n@media (max-width: 650px) {\n  .score {\n    gap: 10px;\n    position: static;\n    top: 0px;\n    padding: 0px;\n    margin: 0;\n  }\n  .score .left,\n  .score .right {\n    width: 120px;\n    justify-content: space-evenly;\n  }\n\n  .preview {\n    height: 70px;\n    width: 70px;\n    border-radius: 5px;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    position: relative;\n    top: -15px;\n    right: -24px;\n  }\n\n  .preview .display {\n    width: 90%;\n    height: 60px;\n    border-radius: 5px;\n  }\n\n  .dashboard {\n    height: auto;\n    width: auto;\n    border-radius: 5px;\n    padding: 10px;\n\n    flex-direction: row;\n    position: relative;\n    right: -300px;\n    top: -180px;\n  }\n\n  .dashboard > * {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .dashboard .option {\n    width: 40px;\n    height: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    font-size: 30px;\n    padding: 20px;\n  }\n  .dialog-opener {\n    font-size: 16px;\n  }\n}\n\n@media (max-width: 500px) {\n  h1 {\n    text-align: left;\n    font-size: 2rem;\n    padding: 5px 20px;\n  }\n\n  .score {\n    right: -90px;\n    position: relative;\n  }\n  .preview {\n    top: -30px;\n    left: 0px;\n  }\n  .cell {\n    padding: 15px;\n  }\n\n  .dashboard {\n    height: 60px;\n    padding: 5px;\n  }\n\n  .dashboard > * {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .dashboard .option {\n    font-size: 20px;\n    padding: 10px;\n  }\n  .dialog-opener {\n    font-size: 12px;\n  }\n}\n\n/*\n.gameboard .left,\n  .gameboard .right {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n  }\n  .row {\n    display: flex;\n    gap: 0.5px;\n  }\n  .cell {\n    padding: 20px;\n    border: 0.1px solid var(--black);\n    border-radius: 5px;\n  }\n\n  .gameboard .right .cell:hover,\n  .gameboard .left .cell:hover {\n    background-color: var(--dark-orange);\n  }\n\n  .miss {\n    background-color: var(--red);\n  }\n  .hit {\n    background-color: var(--green);\n  }\n  .boat {\n    background-color: var(--white);\n  }\n  .gameboard .right .boat {\n    background-color: var(--orange);\n  }\n\n  .gameboard .right.blur .cell {\n    background-color: var(--dark-orange);\n    opacity: 0.2;\n  }\n*/\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/DOM/blur.js":
/*!*************************!*\
  !*** ./src/DOM/blur.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBlur: () => (/* binding */ addBlur),
/* harmony export */   removeBlur: () => (/* binding */ removeBlur)
/* harmony export */ });
function addBlur(board) {
  board.classList.add('blur');
}
function removeBlur(board) {
  board.classList.remove('blur');
}


/***/ }),

/***/ "./src/DOM/boardListener.js":
/*!**********************************!*\
  !*** ./src/DOM/boardListener.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ boardListener)
/* harmony export */ });
/* harmony import */ var _displayWinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWinner */ "./src/DOM/displayWinner.js");
/* harmony import */ var _populateBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateBoard */ "./src/DOM/populateBoard.js");



function boardListener(leftPlayer, rightPlayer) {
  const rightBoard = document.querySelector('.gameboard .right');
  rightBoard.childNodes.forEach((row, i) => {
    row.childNodes.forEach((cell, j) => {
      cell.addEventListener('click', () => {
        if (
          !leftPlayer.gameboard.allSunk() &&
          !rightPlayer.gameboard.allSunk()
        ) {
          if (leftPlayer.shoot(i, j, rightPlayer) !== 0) {
            rightPlayer.shoot(leftPlayer);
            (0,_populateBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(leftPlayer, rightPlayer);
            boardListener(leftPlayer, rightPlayer);
          }
        }
        if (leftPlayer.gameboard.allSunk()) {
          (0,_displayWinner__WEBPACK_IMPORTED_MODULE_0__["default"])(rightPlayer);
        }
        if (rightPlayer.gameboard.allSunk()) {
          (0,_displayWinner__WEBPACK_IMPORTED_MODULE_0__["default"])(leftPlayer);
        }
      });
    });
  });
}


/***/ }),

/***/ "./src/DOM/displayWinner.js":
/*!**********************************!*\
  !*** ./src/DOM/displayWinner.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayWinner)
/* harmony export */ });
function displayWinner(player) {
  const right = document.querySelector('.gameboard .right');
  const left = document.querySelector('.gameboard .left');
  const winnerDiv = document.createElement('div');

  right.innerHTML = '';
  left.innerHTML = '';
  winnerDiv.textContent = `${player.name} wins!`;
  winnerDiv.classList.add('winner');
  right.appendChild(winnerDiv);
}


/***/ }),

/***/ "./src/DOM/placeShips.js":
/*!*******************************!*\
  !*** ./src/DOM/placeShips.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ placeShips)
/* harmony export */ });
/* harmony import */ var _blur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blur */ "./src/DOM/blur.js");
/* harmony import */ var _boardListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardListener */ "./src/DOM/boardListener.js");
/* harmony import */ var _populateBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateBoard */ "./src/DOM/populateBoard.js");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview */ "./src/DOM/preview.js");
/* eslint-disable no-param-reassign */





function placeRandom(player) {
  while (player.gameboard.ships.length) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const z = Math.floor(Math.random() * 2);
    player.gameboard.placeShip(x, y, z);
  }
}

function placeMannual(player, board, opponent, z = 0) {
  document.querySelector('.rotate .option').onclick = () => {
    z = z === 0 ? 1 : 0;
    (0,_preview__WEBPACK_IMPORTED_MODULE_3__["default"])(player, z);
  };
  (0,_preview__WEBPACK_IMPORTED_MODULE_3__["default"])(player, z);
  board.childNodes.forEach((row, i) => {
    row.childNodes.forEach((cell, j) => {
      cell.onclick = () => {
        player.gameboard.placeShip(i, j, z);
        (0,_populateBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(player, opponent);
        if (player.gameboard.ships.length === 0) {
          (0,_blur__WEBPACK_IMPORTED_MODULE_0__.removeBlur)(document.querySelector('.gameboard .right'));
          (0,_boardListener__WEBPACK_IMPORTED_MODULE_1__["default"])(player, opponent);
        } else placeMannual(player, board, opponent, z);
      };
    });
  });
}

function placeShips(leftPlayer, rightPlayer) {
  placeRandom(rightPlayer);
  (0,_populateBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(leftPlayer, rightPlayer);
  (0,_blur__WEBPACK_IMPORTED_MODULE_0__.addBlur)(document.querySelector('.gameboard .right'));

  document.querySelector('.random .option').onclick = () => {
    placeRandom(leftPlayer);
    (0,_populateBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(leftPlayer, rightPlayer);
    (0,_blur__WEBPACK_IMPORTED_MODULE_0__.removeBlur)(document.querySelector('.gameboard .right'));
    (0,_boardListener__WEBPACK_IMPORTED_MODULE_1__["default"])(leftPlayer, rightPlayer);
  };

  placeMannual(
    leftPlayer,
    document.querySelector('.gameboard .left'),
    rightPlayer,
  );
}


/***/ }),

/***/ "./src/DOM/populateBoard.js":
/*!**********************************!*\
  !*** ./src/DOM/populateBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateBoard)
/* harmony export */ });
/* eslint-disable no-param-reassign */
function filter(cell) {
  if (cell === false) return 'miss';
  if (cell === true) return 'hit';
  if (typeof cell === 'object' && cell !== null) return 'boat';
  return 'none';
}

function fillSide(boardDiv, scoreDiv, player) {
  boardDiv.innerHTML = '';
  scoreDiv.textContent = player.score;

  player.gameboard.board.forEach((row) => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    row.forEach((cell) => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add(`cell`, `${filter(cell)}`);
      rowDiv.appendChild(cellDiv);
    });
    boardDiv.appendChild(rowDiv);
  });
}

function populateBoard(leftPlayer, rightPlayer) {
  const leftBoardDiv = document.querySelector('.gameboard .left');
  const rightBoardDiv = document.querySelector('.gameboard .right');

  const leftScoreDiv = document.querySelector('.score .left .value');
  const rightScoreDiv = document.querySelector('.score .right .value');

  fillSide(leftBoardDiv, leftScoreDiv, leftPlayer);
  fillSide(rightBoardDiv, rightScoreDiv, rightPlayer);
}


/***/ }),

/***/ "./src/DOM/preview.js":
/*!****************************!*\
  !*** ./src/DOM/preview.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ previewUpdate)
/* harmony export */ });
/* harmony import */ var _assets_5_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/5.svg */ "./src/assets/5.svg");
/* harmony import */ var _assets_4_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/4.svg */ "./src/assets/4.svg");
/* harmony import */ var _assets_3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/3.svg */ "./src/assets/3.svg");
/* harmony import */ var _assets_2_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/2.svg */ "./src/assets/2.svg");
/* harmony import */ var _assets_1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/1.svg */ "./src/assets/1.svg");






function previewUpdate(player, z) {
  const img = new Image();
  const svgs = [_assets_1_svg__WEBPACK_IMPORTED_MODULE_4__, _assets_2_svg__WEBPACK_IMPORTED_MODULE_3__, _assets_3_svg__WEBPACK_IMPORTED_MODULE_2__, _assets_4_svg__WEBPACK_IMPORTED_MODULE_1__, _assets_5_svg__WEBPACK_IMPORTED_MODULE_0__];
  const type = player.gameboard.ships[0];
  const previewDisplay = document.querySelector('.preview .display');

  img.src = svgs[type - 1];

  if (z === 0) img.style.rotate = '90deg';
  else img.style.rotate = '0deg';
  
  previewDisplay.innerHTML = '';
  previewDisplay.appendChild(img);
}


/***/ }),

/***/ "./src/components/Computer.js":
/*!************************************!*\
  !*** ./src/components/Computer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Computer)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/components/Player.js");


class Computer extends _Player__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('Computer', true);
    this.cords = [];
  }

  // eslint-disable-next-line class-methods-use-this
  isEqual = (a, b) => a[0] === b[0] && b[1] === a[1];

  isUnique(a) {
    for (let i = 0; i < this.cords.length; i += 1)
      if (this.isEqual(this.cords[i], a)) return false;
    return true;
  }

  generateCords() {
    if (this.cords.length === 100) return false;
    const cords = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    if (this.isUnique(cords)) {
      this.cords.push(cords);
      return cords;
    }
    return this.generateCords();
  }

  shoot(player) {
    const cords = this.generateCords();
    if (!cords) return -1;
    const res = player.gameboard.recieveAttack(cords[0], cords[1]);
    if (res === 1) this.score += 1;
    return res;
  }
}


/***/ }),

/***/ "./src/components/Gameboard.js":
/*!*************************************!*\
  !*** ./src/components/Gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/components/Ship.js");


class Gameboard {
  constructor() {
    this.ships = [5, 4, 3, 3, 2, 2, 1];
    this.board = [];
    this.initBoard();
  }

  initBoard() {
    for (let i = 0; i < 10; i += 1) {
      this.board[i] = [];
      for (let j = 0; j < 10; j += 1) {
        this.board[i][j] = null;
      }
    }
  }

  hasNoShip(x, y, z, type = 5) {
    let c = 0;
    if (z === 1) {
      for (let i = 0; i < type; i += 1)
        if (this.board[x][y + i] === null) c += 1;
    } else {
      for (let i = 0; i < type; i += 1)
        if (this.board[x + i][y] === null) c += 1;
    }
    return c === type;
  }

  isvalid(x, y, z, type) {
    let res = false;
    if (z === 1) {
      res =
        this.board[x][y] === null &&
        y + type <= 10 &&
        this.hasNoShip(x, y, z, type);
    } else {
      res =
        this.board[x][y] === null &&
        x + type <= 10 &&
        this.hasNoShip(x, y, z, type);
    }
    return res;
  }

  placeShip(x, y, z = 0) {
    if (this.isvalid(x, y, z, this.ships[0])) {
      const type = this.ships.shift();
      const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](type);
      for (let i = 0; i < type; i += 1)
        if (z === 1) this.board[x][y + i] = ship;
        else this.board[x + i][y] = ship;
      return ship;
    }
    return false;
  }

  recieveAttack(x, y) {
    if (typeof this.board[x][y] === 'object' && this.board[x][y] !== null) {
      this.board[x][y].hit();
      this.board[x][y] = true;
      return 1;
    }
    if (this.board[x][y] === null) {
      this.board[x][y] = false;
      return -1;
    }
    return 0;
  }

  allSunk() {
    for (let i = 0; i < 10; i += 1)
      for (let j = 0; j < 10; j += 1)
        if (typeof this.board[i][j] === 'object' && this.board[i][j] !== null) {
          return false;
        }
    return true;
  }
}


/***/ }),

/***/ "./src/components/Player.js":
/*!**********************************!*\
  !*** ./src/components/Player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/components/Gameboard.js");


class Player {
  constructor(name, turn = false) {
    this.name = name;
    this.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.turn = turn;
    this.score = 0;
  }

  flipTurn() {
    const { turn } = { ...this };
    this.turn = !this.turn;
    return turn;
  }

  shoot(x, y, player) {
    const res = player.gameboard.recieveAttack(x, y);
    if (res === 1) this.score += 1;
    return res;
  }
}


/***/ }),

/***/ "./src/components/Ship.js":
/*!********************************!*\
  !*** ./src/components/Ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits += 1;
    return this.hits;
  }

  isSunk() {
    return this.length - this.hits === 0;
  }
}


/***/ }),

/***/ "./src/assets/1.svg":
/*!**************************!*\
  !*** ./src/assets/1.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7979f24fbe913fc9ccdf.svg";

/***/ }),

/***/ "./src/assets/2.svg":
/*!**************************!*\
  !*** ./src/assets/2.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1835b32969d91acad78f.svg";

/***/ }),

/***/ "./src/assets/3.svg":
/*!**************************!*\
  !*** ./src/assets/3.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa523f3e6bbf00af57cf.svg";

/***/ }),

/***/ "./src/assets/4.svg":
/*!**************************!*\
  !*** ./src/assets/4.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ceff0054805084e1f1d1.svg";

/***/ }),

/***/ "./src/assets/5.svg":
/*!**************************!*\
  !*** ./src/assets/5.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b467e479afc939d003e.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Player */ "./src/components/Player.js");
/* harmony import */ var _components_Computer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Computer */ "./src/components/Computer.js");
/* harmony import */ var _DOM_populateBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM/populateBoard */ "./src/DOM/populateBoard.js");
/* harmony import */ var _DOM_placeShips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/placeShips */ "./src/DOM/placeShips.js");






function init() {
  const human = new _components_Player__WEBPACK_IMPORTED_MODULE_1__["default"]('Human', true);
  const computer = new _components_Computer__WEBPACK_IMPORTED_MODULE_2__["default"]();

  (0,_DOM_populateBoard__WEBPACK_IMPORTED_MODULE_3__["default"])(human, computer);
  (0,_DOM_placeShips__WEBPACK_IMPORTED_MODULE_4__["default"])(human, computer);
}
init();

document.querySelector('.restart .option').onclick = () => {
  init();
};

const dialog = document.querySelector('dialog');
document.querySelector('.dialog-opener').onclick = () => {
  dialog.showModal();
};
document.querySelector('.dialog-closer').onclick = () => {
  dialog.close();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxnQkFBZ0IsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSwyQ0FBMkMsaUNBQWlDLHNCQUFzQiwyQkFBMkIscUJBQXFCLDBCQUEwQixvQkFBb0IsbUJBQW1CLHFCQUFxQixxQkFBcUIsR0FBRyxPQUFPLGNBQWMsZUFBZSwyQkFBMkIsK01BQStNLEdBQUcsVUFBVSxvQ0FBb0Msd0JBQXdCLEdBQUcsUUFBUSx1QkFBdUIsb0JBQW9CLEdBQUcsWUFBWSxzQkFBc0Isa0JBQWtCLDRCQUE0QixjQUFjLEdBQUcsZ0NBQWdDLGlCQUFpQixzQkFBc0IscUJBQXFCLHlCQUF5QixxQ0FBcUMsd0JBQXdCLGtCQUFrQixrQ0FBa0MsR0FBRyxtQkFBbUIsNkJBQTZCLHFCQUFxQiwwQ0FBMEMsdUJBQXVCLEdBQUcsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsY0FBYyxHQUFHLDBDQUEwQyxrQkFBa0IsMkJBQTJCLGFBQWEsR0FBRyxRQUFRLGtCQUFrQixhQUFhLEdBQUcsU0FBUyxrQkFBa0IscUNBQXFDLHVCQUF1QixHQUFHLGtFQUFrRSx5Q0FBeUMsR0FBRyxXQUFXLGlDQUFpQyxHQUFHLFFBQVEsbUNBQW1DLEdBQUcsU0FBUyxtQ0FBbUMsR0FBRywyQkFBMkIsb0NBQW9DLEdBQUcsa0NBQWtDLHlDQUF5QyxpQkFBaUIsR0FBRyxhQUFhLHdCQUF3QixxQkFBcUIsR0FBRyxhQUFhLGtCQUFrQiw0QkFBNEIsY0FBYyxrQkFBa0IsR0FBRyxjQUFjLG1DQUFtQyxpQkFBaUIsZUFBZSx1QkFBdUIsb0JBQW9CLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcsdUJBQXVCLGVBQWUsaUJBQWlCLDhCQUE4QixxQkFBcUIsbUNBQW1DLG1DQUFtQyxvQkFBb0IsNEJBQTRCLHdCQUF3QixHQUFHLGdCQUFnQixpQkFBaUIsZUFBZSxtQ0FBbUMsdUJBQXVCLGtCQUFrQixvQkFBb0Isa0NBQWtDLEdBQUcsb0JBQW9CLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixHQUFHLHdCQUF3QixrQ0FBa0MsZ0JBQWdCLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLGtCQUFrQixHQUFHLDhCQUE4Qix3Q0FBd0Msb0JBQW9CLEdBQUcsa0JBQWtCLG9CQUFvQix5QkFBeUIsR0FBRyxZQUFZLHVCQUF1Qix3QkFBd0IsaUJBQWlCLHVCQUF1QixrQkFBa0IsaUJBQWlCLCtDQUErQyxtQ0FBbUMsR0FBRyxnQkFBZ0IseUNBQXlDLEdBQUcsb0JBQW9CLHNCQUFzQixpQkFBaUIsa0NBQWtDLHlCQUF5Qix1QkFBdUIsc0JBQXNCLG9CQUFvQixvQkFBb0IsaUJBQWlCLGVBQWUsR0FBRyxvQkFBb0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsaUJBQWlCLHlDQUF5QyxHQUFHLHNCQUFzQixtQ0FBbUMsdUJBQXVCLHVCQUF1Qiw2Q0FBNkMscUJBQXFCLGdCQUFnQixxQkFBcUIsR0FBRywyQ0FBMkMsb0JBQW9CLHVCQUF1QixHQUFHLE9BQU8sc0JBQXNCLG1CQUFtQix3QkFBd0IsR0FBRyxRQUFRLHNCQUFzQixzQkFBc0Isd0JBQXdCLEdBQUcsV0FBVyx3QkFBd0IsR0FBRyxZQUFZLGVBQWUsR0FBRyxhQUFhLHFCQUFxQixzQkFBc0IsOEJBQThCLEdBQUcsZ0NBQWdDLFFBQVEsdUJBQXVCLHNCQUFzQix3QkFBd0IsS0FBSyxZQUFZLHdCQUF3QixnQkFBZ0Isa0JBQWtCLGVBQWUsc0JBQXNCLEtBQUssb0NBQW9DLG1CQUFtQixvQ0FBb0MsS0FBSyxrQkFBa0IsMEJBQTBCLDZCQUE2QixLQUFLLGVBQWUsbUJBQW1CLHlCQUF5QixrQkFBa0IsZ0JBQWdCLDZCQUE2QiwwQkFBMEIsS0FBSyxnQkFBZ0Isb0JBQW9CLGtCQUFrQixvQkFBb0IsdUJBQXVCLHlCQUF5QixLQUFLLHlCQUF5Qix5QkFBeUIsa0JBQWtCLG1CQUFtQixLQUFLLDZCQUE2QixrQkFBa0IsbUJBQW1CLEtBQUsscUJBQXFCLHNCQUFzQix5QkFBeUIsS0FBSyxrQkFBa0IsbUJBQW1CLGtCQUFrQix5QkFBeUIsb0JBQW9CLCtCQUErQixvQ0FBb0MsZ0JBQWdCLEtBQUssb0JBQW9CLHVCQUF1QixLQUFLLGVBQWUsc0JBQXNCLEtBQUssR0FBRywrQkFBK0IsV0FBVyxvQkFBb0IsS0FBSyxHQUFHLCtCQUErQixZQUFZLGdCQUFnQix1QkFBdUIsZUFBZSxtQkFBbUIsZ0JBQWdCLEtBQUssb0NBQW9DLG1CQUFtQixvQ0FBb0MsS0FBSyxnQkFBZ0IsbUJBQW1CLGtCQUFrQix5QkFBeUIsc0JBQXNCLG9DQUFvQywwQkFBMEIseUJBQXlCLGlCQUFpQixtQkFBbUIsS0FBSyx5QkFBeUIsaUJBQWlCLG1CQUFtQix5QkFBeUIsS0FBSyxrQkFBa0IsbUJBQW1CLGtCQUFrQix5QkFBeUIsb0JBQW9CLDRCQUE0Qix5QkFBeUIsb0JBQW9CLGtCQUFrQixLQUFLLHNCQUFzQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsS0FBSywwQkFBMEIsa0JBQWtCLG1CQUFtQixvQkFBb0IsOEJBQThCLDBCQUEwQix5QkFBeUIsc0JBQXNCLG9CQUFvQixLQUFLLG9CQUFvQixzQkFBc0IsS0FBSyxHQUFHLCtCQUErQixRQUFRLHVCQUF1QixzQkFBc0Isd0JBQXdCLEtBQUssY0FBYyxtQkFBbUIseUJBQXlCLEtBQUssY0FBYyxpQkFBaUIsZ0JBQWdCLEtBQUssV0FBVyxvQkFBb0IsS0FBSyxrQkFBa0IsbUJBQW1CLG1CQUFtQixLQUFLLHNCQUFzQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsS0FBSywwQkFBMEIsc0JBQXNCLG9CQUFvQixLQUFLLG9CQUFvQixzQkFBc0IsS0FBSyxHQUFHLGdEQUFnRCxvQkFBb0IsNkJBQTZCLGVBQWUsS0FBSyxVQUFVLG9CQUFvQixpQkFBaUIsS0FBSyxXQUFXLG9CQUFvQix1Q0FBdUMseUJBQXlCLEtBQUssc0VBQXNFLDJDQUEyQyxLQUFLLGFBQWEsbUNBQW1DLEtBQUssVUFBVSxxQ0FBcUMsS0FBSyxXQUFXLHFDQUFxQyxLQUFLLDZCQUE2QixzQ0FBc0MsS0FBSyxvQ0FBb0MsMkNBQTJDLG1CQUFtQixLQUFLLHlCQUF5QjtBQUNqL1c7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNwZjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDRDO0FBQ0E7O0FBRTdCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwwREFBYTtBQUN2QjtBQUNBO0FBQ0EsVUFBVSwwREFBYTtBQUN2QjtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUMzQmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQzZDO0FBQ0Q7QUFDQTtBQUNOOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQWE7QUFDakI7QUFDQSxFQUFFLG9EQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFhO0FBQ3JCO0FBQ0EsVUFBVSxpREFBVTtBQUNwQixVQUFVLDBEQUFhO0FBQ3ZCLFVBQVU7QUFDVjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRWU7QUFDZjtBQUNBLEVBQUUsMERBQWE7QUFDZixFQUFFLDhDQUFPOztBQUVUO0FBQ0E7QUFDQSxJQUFJLDBEQUFhO0FBQ2pCLElBQUksaURBQVU7QUFDZCxJQUFJLDBEQUFhO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGFBQWE7QUFDcEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDaUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbEI7QUFDZjtBQUNBLGdCQUFnQiwwQ0FBRSxFQUFFLDBDQUFFLEVBQUUsMENBQUUsRUFBRSwwQ0FBRSxFQUFFLDBDQUFFO0FBQ2xDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkI4Qjs7QUFFZix1QkFBdUIsK0NBQU07QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckMwQjs7QUFFWDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0EsTUFBTTtBQUNOLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2Q0FBSTtBQUMzQixzQkFBc0IsVUFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0VvQzs7QUFFckI7QUFDZjtBQUNBO0FBQ0EseUJBQXlCLGtEQUFTO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksT0FBTyxJQUFJO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDb0I7QUFDSTtBQUNHO0FBQ047O0FBRTNCO0FBQ2Ysb0JBQW9CLDBEQUFNO0FBQzFCLHVCQUF1Qiw0REFBUTs7QUFFL0IsRUFBRSw4REFBYTtBQUNmLEVBQUUsMkRBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9ET00vYmx1ci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL0RPTS9ib2FyZExpc3RlbmVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvRE9NL2Rpc3BsYXlXaW5uZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9ET00vcGxhY2VTaGlwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL0RPTS9wb3B1bGF0ZUJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvRE9NL3ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0NvbXB1dGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL1BsYXllci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvU2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tb3JhbmdlOiAjZjhjZjg1O1xuICAtLWRhcmstb3JhbmdlOiAjZjhiYzRkO1xuICAtLWJsYWNrOiAjNDA0MDQwO1xuICAtLWxpZ2h0LWJsdWU6ICMwMGFmZGY7XG4gIC0tYmx1ZTogIzI3OTRiMztcbiAgLS1yZWQ6ICNmZjNmM2Y7XG4gIC0tZ3JlZW46ICM4OGZmODg7XG4gIC0td2hpdGU6ICNlNmU2ZTY7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OlxuICAgIHN5c3RlbS11aSxcbiAgICAtYXBwbGUtc3lzdGVtLFxuICAgIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICAnU2Vnb2UgVUknLFxuICAgIFJvYm90byxcbiAgICBPeHlnZW4sXG4gICAgVWJ1bnR1LFxuICAgIENhbnRhcmVsbCxcbiAgICAnT3BlbiBTYW5zJyxcbiAgICAnSGVsdmV0aWNhIE5ldWUnLFxuICAgIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1cmVtO1xufVxuXG4uc2NvcmUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogODBweDtcbn1cbi5zY29yZSAubGVmdCxcbi5zY29yZSAucmlnaHQge1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW46IDMwcHggMHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCB2YXIoLS1ibGFjayk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uc2NvcmUgLnZhbHVlIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3JkZXItbGVmdDogMC4xcHggc29saWQgdmFyKC0tYmxhY2spO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5nYW1lYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA1MHB4O1xufVxuXG4uZ2FtZWJvYXJkIC5sZWZ0LFxuLmdhbWVib2FyZCAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFweDtcbn1cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFweDtcbn1cbi5jZWxsIHtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCB2YXIoLS1ibGFjayk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmdhbWVib2FyZCAucmlnaHQgLmNlbGw6aG92ZXIsXG4uZ2FtZWJvYXJkIC5sZWZ0IC5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xufVxuXG4ubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XG59XG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xufVxuLmJvYXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG4uZ2FtZWJvYXJkIC5yaWdodCAuYm9hdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG59XG5cbi5nYW1lYm9hcmQgLnJpZ2h0LmJsdXIgLmNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLndpbm5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTByZW07XG59XG5cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0MHB4O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4ucHJldmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMTAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcmV2aWV3IC5kaXNwbGF5IHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IDAuMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRhc2hib2FyZCB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5kYXNoYm9hcmQgPiAqIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kYXNoYm9hcmQgLm9wdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXNoYm9hcmQgLm9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXIgLnRhZyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbmRpYWxvZyB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbjo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5kaWFsb2ctb3BlbmVyIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4uZGlhbG9nLWNsb3NlciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XG59XG5cbi5ydWxlcy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuZGlhbG9nIC5ydWxlcy1jb250YWluZXIgLnJ1bGVzLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjNGE1NTY4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG51bCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxudWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5zdHJvbmcge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICB9XG4gIC5zY29yZSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZ2FwOiAxMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuICAuc2NvcmUgLmxlZnQsXG4gIC5zY29yZSAucmlnaHQge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgfVxuXG4gIC5nYW1lYm9hcmQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5uYXZiYXIge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTQwcHg7XG4gICAgdG9wOiA1MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5wcmV2aWV3IHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAucHJldmlldyAuZGlzcGxheSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuXG4gIC5wcmV2aWV3IC5kaXNwbGF5IGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgLnByZXZpZXcgLnRhZyB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgfVxuXG4gIC5kYXNoYm9hcmQge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG5cbiAgLm5hdmJhciAudGFnIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLndpbm5lciB7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MzBweCkge1xuICAuY2VsbCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLnNjb3JlIHtcbiAgICBnYXA6IDEwcHg7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB0b3A6IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5zY29yZSAubGVmdCxcbiAgLnNjb3JlIC5yaWdodCB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG5cbiAgLnByZXZpZXcge1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTE1cHg7XG4gICAgcmlnaHQ6IC0yNHB4O1xuICB9XG5cbiAgLnByZXZpZXcgLmRpc3BsYXkge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuXG4gIC5kYXNoYm9hcmQge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAtMzAwcHg7XG4gICAgdG9wOiAtMTgwcHg7XG4gIH1cblxuICAuZGFzaGJvYXJkID4gKiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuZGFzaGJvYXJkIC5vcHRpb24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5kaWFsb2ctb3BlbmVyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIGgxIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgfVxuXG4gIC5zY29yZSB7XG4gICAgcmlnaHQ6IC05MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAucHJldmlldyB7XG4gICAgdG9wOiAtMzBweDtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbiAgLmNlbGwge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAuZGFzaGJvYXJkIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgLmRhc2hib2FyZCA+ICoge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmRhc2hib2FyZCAub3B0aW9uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuZGlhbG9nLW9wZW5lciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5cbi8qXG4uZ2FtZWJvYXJkIC5sZWZ0LFxuICAuZ2FtZWJvYXJkIC5yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXB4O1xuICB9XG4gIC5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVweDtcbiAgfVxuICAuY2VsbCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAuZ2FtZWJvYXJkIC5yaWdodCAuY2VsbDpob3ZlcixcbiAgLmdhbWVib2FyZCAubGVmdCAuY2VsbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xuICB9XG5cbiAgLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XG4gIH1cbiAgLmhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuICB9XG4gIC5ib2F0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIH1cbiAgLmdhbWVib2FyZCAucmlnaHQgLmJvYXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gIH1cblxuICAuZ2FtZWJvYXJkIC5yaWdodC5ibHVyIC5jZWxsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XG4gICAgb3BhY2l0eTogMC4yO1xuICB9XG4qL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCOzs7Ozs7Ozs7OztjQVdZO0FBQ2Q7O0FBRUE7RUFD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QjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTs7SUFFYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDtFQUNBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBdUNDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tb3JhbmdlOiAjZjhjZjg1O1xcbiAgLS1kYXJrLW9yYW5nZTogI2Y4YmM0ZDtcXG4gIC0tYmxhY2s6ICM0MDQwNDA7XFxuICAtLWxpZ2h0LWJsdWU6ICMwMGFmZGY7XFxuICAtLWJsdWU6ICMyNzk0YjM7XFxuICAtLXJlZDogI2ZmM2YzZjtcXG4gIC0tZ3JlZW46ICM4OGZmODg7XFxuICAtLXdoaXRlOiAjZTZlNmU2O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIHN5c3RlbS11aSxcXG4gICAgLWFwcGxlLXN5c3RlbSxcXG4gICAgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICAnU2Vnb2UgVUknLFxcbiAgICBSb2JvdG8sXFxuICAgIE94eWdlbixcXG4gICAgVWJ1bnR1LFxcbiAgICBDYW50YXJlbGwsXFxuICAgICdPcGVuIFNhbnMnLFxcbiAgICAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbi5zY29yZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogODBweDtcXG59XFxuLnNjb3JlIC5sZWZ0LFxcbi5zY29yZSAucmlnaHQge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBtYXJnaW46IDMwcHggMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBib3JkZXI6IDAuMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5zY29yZSAudmFsdWUge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGJvcmRlci1sZWZ0OiAwLjFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5sZWZ0LFxcbi5nYW1lYm9hcmQgLnJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcHg7XFxufVxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXB4O1xcbn1cXG4uY2VsbCB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5nYW1lYm9hcmQgLnJpZ2h0IC5jZWxsOmhvdmVyLFxcbi5nYW1lYm9hcmQgLmxlZnQgLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuLmJvYXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG4uZ2FtZWJvYXJkIC5yaWdodCAuYm9hdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5yaWdodC5ibHVyIC5jZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcXG4gIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLndpbm5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4ucHJldmlldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICB3aWR0aDogMTAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcmV2aWV3IC5kaXNwbGF5IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBib3JkZXI6IDAuMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXNoYm9hcmQge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgd2lkdGg6IDIwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5kYXNoYm9hcmQgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGFzaGJvYXJkIC5vcHRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uZGFzaGJvYXJkIC5vcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXZiYXIgLnRhZyB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG59XFxuXFxuZGlhbG9nIHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG46OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLmRpYWxvZy1vcGVuZXIge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDEwcHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZGlhbG9nLWNsb3NlciB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcXG59XFxuXFxuLnJ1bGVzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuZGlhbG9nIC5ydWxlcy1jb250YWluZXIgLnJ1bGVzLWhlYWRlciB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogIzRhNTU2ODtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbnVsIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG51bCBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5zdHJvbmcge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XFxuICBoMSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XFxuICB9XFxuICAuc2NvcmUge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gIH1cXG4gIC5zY29yZSAubGVmdCxcXG4gIC5zY29yZSAucmlnaHQge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubmF2YmFyIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC00MHB4O1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAucHJldmlldyB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICAucHJldmlldyAuZGlzcGxheSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gIH1cXG5cXG4gIC5wcmV2aWV3IC5kaXNwbGF5IGltZyB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICB9XFxuXFxuICAucHJldmlldyAudGFnIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB9XFxuXFxuICAuZGFzaGJvYXJkIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcblxcbiAgLm5hdmJhciAudGFnIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG5cXG4gIC53aW5uZXIge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MzBweCkge1xcbiAgLmNlbGwge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIC5zY29yZSB7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgdG9wOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgLnNjb3JlIC5sZWZ0LFxcbiAgLnNjb3JlIC5yaWdodCB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAucHJldmlldyB7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTVweDtcXG4gICAgcmlnaHQ6IC0yNHB4O1xcbiAgfVxcblxcbiAgLnByZXZpZXcgLmRpc3BsYXkge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG5cXG4gIC5kYXNoYm9hcmQge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IC0zMDBweDtcXG4gICAgdG9wOiAtMTgwcHg7XFxuICB9XFxuXFxuICAuZGFzaGJvYXJkID4gKiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmRhc2hib2FyZCAub3B0aW9uIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgfVxcbiAgLmRpYWxvZy1vcGVuZXIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgaDEge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgfVxcblxcbiAgLnNjb3JlIHtcXG4gICAgcmlnaHQ6IC05MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAucHJldmlldyB7XFxuICAgIHRvcDogLTMwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gIH1cXG4gIC5jZWxsIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gIH1cXG5cXG4gIC5kYXNoYm9hcmQge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG5cXG4gIC5kYXNoYm9hcmQgPiAqIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZGFzaGJvYXJkIC5vcHRpb24ge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAuZGlhbG9nLW9wZW5lciB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gIH1cXG59XFxuXFxuLypcXG4uZ2FtZWJvYXJkIC5sZWZ0LFxcbiAgLmdhbWVib2FyZCAucmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gIH1cXG4gIC5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXB4O1xcbiAgfVxcbiAgLmNlbGwge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZCAucmlnaHQgLmNlbGw6aG92ZXIsXFxuICAuZ2FtZWJvYXJkIC5sZWZ0IC5jZWxsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xcbiAgfVxcblxcbiAgLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgfVxcbiAgLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gIH1cXG4gIC5ib2F0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgfVxcbiAgLmdhbWVib2FyZCAucmlnaHQgLmJvYXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZCAucmlnaHQuYmx1ciAuY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgfVxcbiovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBhZGRCbHVyKGJvYXJkKSB7XG4gIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JsdXInKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCbHVyKGJvYXJkKSB7XG4gIGJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKTtcbn1cbiIsImltcG9ydCBkaXNwbGF5V2lubmVyIGZyb20gJy4vZGlzcGxheVdpbm5lcic7XG5pbXBvcnQgcG9wdWxhdGVCb2FyZCBmcm9tICcuL3BvcHVsYXRlQm9hcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib2FyZExpc3RlbmVyKGxlZnRQbGF5ZXIsIHJpZ2h0UGxheWVyKSB7XG4gIGNvbnN0IHJpZ2h0Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkIC5yaWdodCcpO1xuICByaWdodEJvYXJkLmNoaWxkTm9kZXMuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgcm93LmNoaWxkTm9kZXMuZm9yRWFjaCgoY2VsbCwgaikgPT4ge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFsZWZ0UGxheWVyLmdhbWVib2FyZC5hbGxTdW5rKCkgJiZcbiAgICAgICAgICAhcmlnaHRQbGF5ZXIuZ2FtZWJvYXJkLmFsbFN1bmsoKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAobGVmdFBsYXllci5zaG9vdChpLCBqLCByaWdodFBsYXllcikgIT09IDApIHtcbiAgICAgICAgICAgIHJpZ2h0UGxheWVyLnNob290KGxlZnRQbGF5ZXIpO1xuICAgICAgICAgICAgcG9wdWxhdGVCb2FyZChsZWZ0UGxheWVyLCByaWdodFBsYXllcik7XG4gICAgICAgICAgICBib2FyZExpc3RlbmVyKGxlZnRQbGF5ZXIsIHJpZ2h0UGxheWVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnRQbGF5ZXIuZ2FtZWJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgICAgIGRpc3BsYXlXaW5uZXIocmlnaHRQbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodFBsYXllci5nYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgZGlzcGxheVdpbm5lcihsZWZ0UGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVdpbm5lcihwbGF5ZXIpIHtcbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkIC5yaWdodCcpO1xuICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZCAubGVmdCcpO1xuICBjb25zdCB3aW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICByaWdodC5pbm5lckhUTUwgPSAnJztcbiAgbGVmdC5pbm5lckhUTUwgPSAnJztcbiAgd2lubmVyRGl2LnRleHRDb250ZW50ID0gYCR7cGxheWVyLm5hbWV9IHdpbnMhYDtcbiAgd2lubmVyRGl2LmNsYXNzTGlzdC5hZGQoJ3dpbm5lcicpO1xuICByaWdodC5hcHBlbmRDaGlsZCh3aW5uZXJEaXYpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IGFkZEJsdXIsIHJlbW92ZUJsdXIgfSBmcm9tICcuL2JsdXInO1xuaW1wb3J0IGJvYXJkTGlzdGVuZXIgZnJvbSAnLi9ib2FyZExpc3RlbmVyJztcbmltcG9ydCBwb3B1bGF0ZUJvYXJkIGZyb20gJy4vcG9wdWxhdGVCb2FyZCc7XG5pbXBvcnQgcHJldmlld1VwZGF0ZSBmcm9tICcuL3ByZXZpZXcnO1xuXG5mdW5jdGlvbiBwbGFjZVJhbmRvbShwbGF5ZXIpIHtcbiAgd2hpbGUgKHBsYXllci5nYW1lYm9hcmQuc2hpcHMubGVuZ3RoKSB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IHogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCh4LCB5LCB6KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwbGFjZU1hbm51YWwocGxheWVyLCBib2FyZCwgb3Bwb25lbnQsIHogPSAwKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUgLm9wdGlvbicpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgeiA9IHogPT09IDAgPyAxIDogMDtcbiAgICBwcmV2aWV3VXBkYXRlKHBsYXllciwgeik7XG4gIH07XG4gIHByZXZpZXdVcGRhdGUocGxheWVyLCB6KTtcbiAgYm9hcmQuY2hpbGROb2Rlcy5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICByb3cuY2hpbGROb2Rlcy5mb3JFYWNoKChjZWxsLCBqKSA9PiB7XG4gICAgICBjZWxsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKGksIGosIHopO1xuICAgICAgICBwb3B1bGF0ZUJvYXJkKHBsYXllciwgb3Bwb25lbnQpO1xuICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5zaGlwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZW1vdmVCbHVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQgLnJpZ2h0JykpO1xuICAgICAgICAgIGJvYXJkTGlzdGVuZXIocGxheWVyLCBvcHBvbmVudCk7XG4gICAgICAgIH0gZWxzZSBwbGFjZU1hbm51YWwocGxheWVyLCBib2FyZCwgb3Bwb25lbnQsIHopO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYWNlU2hpcHMobGVmdFBsYXllciwgcmlnaHRQbGF5ZXIpIHtcbiAgcGxhY2VSYW5kb20ocmlnaHRQbGF5ZXIpO1xuICBwb3B1bGF0ZUJvYXJkKGxlZnRQbGF5ZXIsIHJpZ2h0UGxheWVyKTtcbiAgYWRkQmx1cihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkIC5yaWdodCcpKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tIC5vcHRpb24nKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHBsYWNlUmFuZG9tKGxlZnRQbGF5ZXIpO1xuICAgIHBvcHVsYXRlQm9hcmQobGVmdFBsYXllciwgcmlnaHRQbGF5ZXIpO1xuICAgIHJlbW92ZUJsdXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZCAucmlnaHQnKSk7XG4gICAgYm9hcmRMaXN0ZW5lcihsZWZ0UGxheWVyLCByaWdodFBsYXllcik7XG4gIH07XG5cbiAgcGxhY2VNYW5udWFsKFxuICAgIGxlZnRQbGF5ZXIsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZCAubGVmdCcpLFxuICAgIHJpZ2h0UGxheWVyLFxuICApO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmZ1bmN0aW9uIGZpbHRlcihjZWxsKSB7XG4gIGlmIChjZWxsID09PSBmYWxzZSkgcmV0dXJuICdtaXNzJztcbiAgaWYgKGNlbGwgPT09IHRydWUpIHJldHVybiAnaGl0JztcbiAgaWYgKHR5cGVvZiBjZWxsID09PSAnb2JqZWN0JyAmJiBjZWxsICE9PSBudWxsKSByZXR1cm4gJ2JvYXQnO1xuICByZXR1cm4gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBmaWxsU2lkZShib2FyZERpdiwgc2NvcmVEaXYsIHBsYXllcikge1xuICBib2FyZERpdi5pbm5lckhUTUwgPSAnJztcbiAgc2NvcmVEaXYudGV4dENvbnRlbnQgPSBwbGF5ZXIuc2NvcmU7XG5cbiAgcGxheWVyLmdhbWVib2FyZC5ib2FyZC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICBjb25zdCByb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3dEaXYuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgcm93LmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0IGNlbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZChgY2VsbGAsIGAke2ZpbHRlcihjZWxsKX1gKTtcbiAgICAgIHJvd0Rpdi5hcHBlbmRDaGlsZChjZWxsRGl2KTtcbiAgICB9KTtcbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChyb3dEaXYpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVCb2FyZChsZWZ0UGxheWVyLCByaWdodFBsYXllcikge1xuICBjb25zdCBsZWZ0Qm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkIC5sZWZ0Jyk7XG4gIGNvbnN0IHJpZ2h0Qm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkIC5yaWdodCcpO1xuXG4gIGNvbnN0IGxlZnRTY29yZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZSAubGVmdCAudmFsdWUnKTtcbiAgY29uc3QgcmlnaHRTY29yZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZSAucmlnaHQgLnZhbHVlJyk7XG5cbiAgZmlsbFNpZGUobGVmdEJvYXJkRGl2LCBsZWZ0U2NvcmVEaXYsIGxlZnRQbGF5ZXIpO1xuICBmaWxsU2lkZShyaWdodEJvYXJkRGl2LCByaWdodFNjb3JlRGl2LCByaWdodFBsYXllcik7XG59XG4iLCJpbXBvcnQgczUgZnJvbSAnLi4vYXNzZXRzLzUuc3ZnJztcbmltcG9ydCBzNCBmcm9tICcuLi9hc3NldHMvNC5zdmcnO1xuaW1wb3J0IHMzIGZyb20gJy4uL2Fzc2V0cy8zLnN2Zyc7XG5pbXBvcnQgczIgZnJvbSAnLi4vYXNzZXRzLzIuc3ZnJztcbmltcG9ydCBzMSBmcm9tICcuLi9hc3NldHMvMS5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmV2aWV3VXBkYXRlKHBsYXllciwgeikge1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3Qgc3ZncyA9IFtzMSwgczIsIHMzLCBzNCwgczVdO1xuICBjb25zdCB0eXBlID0gcGxheWVyLmdhbWVib2FyZC5zaGlwc1swXTtcbiAgY29uc3QgcHJldmlld0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlldyAuZGlzcGxheScpO1xuXG4gIGltZy5zcmMgPSBzdmdzW3R5cGUgLSAxXTtcblxuICBpZiAoeiA9PT0gMCkgaW1nLnN0eWxlLnJvdGF0ZSA9ICc5MGRlZyc7XG4gIGVsc2UgaW1nLnN0eWxlLnJvdGF0ZSA9ICcwZGVnJztcbiAgXG4gIHByZXZpZXdEaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuICBwcmV2aWV3RGlzcGxheS5hcHBlbmRDaGlsZChpbWcpO1xufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ0NvbXB1dGVyJywgdHJ1ZSk7XG4gICAgdGhpcy5jb3JkcyA9IFtdO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgaXNFcXVhbCA9IChhLCBiKSA9PiBhWzBdID09PSBiWzBdICYmIGJbMV0gPT09IGFbMV07XG5cbiAgaXNVbmlxdWUoYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3Jkcy5sZW5ndGg7IGkgKz0gMSlcbiAgICAgIGlmICh0aGlzLmlzRXF1YWwodGhpcy5jb3Jkc1tpXSwgYSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdlbmVyYXRlQ29yZHMoKSB7XG4gICAgaWYgKHRoaXMuY29yZHMubGVuZ3RoID09PSAxMDApIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBjb3JkcyA9IFtcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICBdO1xuICAgIGlmICh0aGlzLmlzVW5pcXVlKGNvcmRzKSkge1xuICAgICAgdGhpcy5jb3Jkcy5wdXNoKGNvcmRzKTtcbiAgICAgIHJldHVybiBjb3JkcztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVDb3JkcygpO1xuICB9XG5cbiAgc2hvb3QocGxheWVyKSB7XG4gICAgY29uc3QgY29yZHMgPSB0aGlzLmdlbmVyYXRlQ29yZHMoKTtcbiAgICBpZiAoIWNvcmRzKSByZXR1cm4gLTE7XG4gICAgY29uc3QgcmVzID0gcGxheWVyLmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKGNvcmRzWzBdLCBjb3Jkc1sxXSk7XG4gICAgaWYgKHJlcyA9PT0gMSkgdGhpcy5zY29yZSArPSAxO1xuICAgIHJldHVybiByZXM7XG4gIH1cbn1cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2hpcHMgPSBbNSwgNCwgMywgMywgMiwgMiwgMV07XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMuaW5pdEJvYXJkKCk7XG4gIH1cblxuICBpbml0Qm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICB0aGlzLmJvYXJkW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFzTm9TaGlwKHgsIHksIHosIHR5cGUgPSA1KSB7XG4gICAgbGV0IGMgPSAwO1xuICAgIGlmICh6ID09PSAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHR5cGU7IGkgKz0gMSlcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beSArIGldID09PSBudWxsKSBjICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHlwZTsgaSArPSAxKVxuICAgICAgICBpZiAodGhpcy5ib2FyZFt4ICsgaV1beV0gPT09IG51bGwpIGMgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGMgPT09IHR5cGU7XG4gIH1cblxuICBpc3ZhbGlkKHgsIHksIHosIHR5cGUpIHtcbiAgICBsZXQgcmVzID0gZmFsc2U7XG4gICAgaWYgKHogPT09IDEpIHtcbiAgICAgIHJlcyA9XG4gICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPT09IG51bGwgJiZcbiAgICAgICAgeSArIHR5cGUgPD0gMTAgJiZcbiAgICAgICAgdGhpcy5oYXNOb1NoaXAoeCwgeSwgeiwgdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcyA9XG4gICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPT09IG51bGwgJiZcbiAgICAgICAgeCArIHR5cGUgPD0gMTAgJiZcbiAgICAgICAgdGhpcy5oYXNOb1NoaXAoeCwgeSwgeiwgdHlwZSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwbGFjZVNoaXAoeCwgeSwgeiA9IDApIHtcbiAgICBpZiAodGhpcy5pc3ZhbGlkKHgsIHksIHosIHRoaXMuc2hpcHNbMF0pKSB7XG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5zaGlwcy5zaGlmdCgpO1xuICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHR5cGUpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlOyBpICs9IDEpXG4gICAgICAgIGlmICh6ID09PSAxKSB0aGlzLmJvYXJkW3hdW3kgKyBpXSA9IHNoaXA7XG4gICAgICAgIGVsc2UgdGhpcy5ib2FyZFt4ICsgaV1beV0gPSBzaGlwO1xuICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlY2lldmVBdHRhY2soeCwgeSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5ib2FyZFt4XVt5XSA9PT0gJ29iamVjdCcgJiYgdGhpcy5ib2FyZFt4XVt5XSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQoKTtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldID09PSBudWxsKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldID0gZmFsc2U7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgYWxsU3VuaygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ib2FyZFtpXVtqXSA9PT0gJ29iamVjdCcgJiYgdGhpcy5ib2FyZFtpXVtqXSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdHVybiA9IGZhbHNlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLnR1cm4gPSB0dXJuO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICB9XG5cbiAgZmxpcFR1cm4oKSB7XG4gICAgY29uc3QgeyB0dXJuIH0gPSB7IC4uLnRoaXMgfTtcbiAgICB0aGlzLnR1cm4gPSAhdGhpcy50dXJuO1xuICAgIHJldHVybiB0dXJuO1xuICB9XG5cbiAgc2hvb3QoeCwgeSwgcGxheWVyKSB7XG4gICAgY29uc3QgcmVzID0gcGxheWVyLmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKHgsIHkpO1xuICAgIGlmIChyZXMgPT09IDEpIHRoaXMuc2NvcmUgKz0gMTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICByZXR1cm4gdGhpcy5oaXRzO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCAtIHRoaXMuaGl0cyA9PT0gMDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9jb21wb25lbnRzL1BsYXllcic7XG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSAnLi9jb21wb25lbnRzL0NvbXB1dGVyJztcbmltcG9ydCBwb3B1bGF0ZUJvYXJkIGZyb20gJy4vRE9NL3BvcHVsYXRlQm9hcmQnO1xuaW1wb3J0IHBsYWNlU2hpcHMgZnJvbSAnLi9ET00vcGxhY2VTaGlwcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IGh1bWFuID0gbmV3IFBsYXllcignSHVtYW4nLCB0cnVlKTtcbiAgY29uc3QgY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKTtcblxuICBwb3B1bGF0ZUJvYXJkKGh1bWFuLCBjb21wdXRlcik7XG4gIHBsYWNlU2hpcHMoaHVtYW4sIGNvbXB1dGVyKTtcbn1cbmluaXQoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQgLm9wdGlvbicpLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGluaXQoKTtcbn07XG5cbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZy1vcGVuZXInKS5vbmNsaWNrID0gKCkgPT4ge1xuICBkaWFsb2cuc2hvd01vZGFsKCk7XG59O1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZy1jbG9zZXInKS5vbmNsaWNrID0gKCkgPT4ge1xuICBkaWFsb2cuY2xvc2UoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=