/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _GameField = __webpack_require__(2);

	var _GameField2 = _interopRequireDefault(_GameField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var main = function main() {

	    var app = document.getElementById('app');
	    app.append((0, _GameField2.default)('computer'));
	    app.append((0, _GameField2.default)('user'));
	}; // import '../styles/styles.scss';


	main();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Cell = __webpack_require__(3);

	var _Cell2 = _interopRequireDefault(_Cell);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GameField = function GameField(type) {

	    var gameField = document.createElement('div');
	    gameField.className = 'game-field ' + type;

	    for (var i = 0; i < 100; i++) {
	        gameField.append(new _Cell2.default().htmlNode);
	    };

	    return gameField;
	};

	exports.default = GameField;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// const Cell = () => {

	//     const cell = document.createElement('div');
	//     cell.className = 'cell';

	//     return (
	//         cell
	//     );
	// };


	var Cell = function () {
	    function Cell() {
	        _classCallCheck(this, Cell);

	        this.htmlNode = document.createElement('div');
	        this.attempted = false;
	        this.correspondingShip = null;

	        this.htmlNode.className = 'cell';
	        this.htmlNode.append(String.fromCharCode(0x000A0));
	        this.htmlNode.addEventListener('click', this.attemptCell.bind(this));
	    }

	    _createClass(Cell, [{
	        key: 'attemptCell',
	        value: function attemptCell() {
	            this.attempted = true;
	            this.htmlNode.innerHTML = this.correspondingShip ? 'X' : String.fromCharCode(0x000B7);
	        }
	    }]);

	    return Cell;
	}();

	;
	exports.default = Cell;

/***/ })
/******/ ]);