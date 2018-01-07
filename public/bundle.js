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

	var _GameState = __webpack_require__(4);

	var _GameState2 = _interopRequireDefault(_GameState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import '../styles/styles.scss';
	var main = function main() {

	    var app = document.getElementById('app');
	    app.append((0, _GameField2.default)('computer'));
	    app.append((0, _GameField2.default)('user'));
	    _GameState2.default.startGame();
	    console.log(_GameState2.default.shootingTurn);
	};

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
	        gameField.append(new _Cell2.default(null, false, null, type, true).htmlNode);
	    }

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

	var Cell = function () {
	    function Cell(correspondingShip, attempted, cellAttempt, fieldType, activeField) {
	        _classCallCheck(this, Cell);

	        this.htmlNode = document.createElement('div');
	        this.attempted = attempted;
	        this.correspondingShip = correspondingShip;

	        this.htmlNode.className = 'cell';
	        this.htmlNode.append(String.fromCharCode(0x000A0));
	        if (fieldType === 'computer' && activeField) {
	            this.htmlNode.addEventListener('click', this.attemptCell.bind(this));
	        }
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

	exports.default = Cell;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ShipSet = __webpack_require__(5);

	var _ShipSet2 = _interopRequireDefault(_ShipSet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GameState = function () {
	    function GameState() {
	        _classCallCheck(this, GameState);

	        this.shootingTurn = null;
	        this.shipSet = {
	            user: null,
	            computer: null
	        };
	        this.cells = {
	            user: [].concat(_toConsumableArray(new Array(10).keys())).map(function () {
	                [].concat(_toConsumableArray(new Array(10).keys())).map(function () {
	                    ({
	                        correspondingShip: null,
	                        attempted: false
	                    });
	                });
	            }),
	            computer: [].concat(_toConsumableArray(new Array(10).keys())).map(function () {
	                [].concat(_toConsumableArray(new Array(10).keys())).map(function () {
	                    ({
	                        correspondingShip: null,
	                        attempted: false
	                    });
	                });
	            })
	        };
	    }

	    _createClass(GameState, [{
	        key: 'placeShips',
	        value: function placeShips(player) {
	            var _this = this;

	            var ships = new _ShipSet2.default();
	            this.shipSet[player] = ships;
	            ships.ships.map(function (ship) {
	                ship.getCompartments().map(function (compartment) {
	                    _this.cells[player][compartment.x][compartment.y].correspondingShip = ship;
	                });
	            });
	        }
	    }, {
	        key: 'startGame',
	        value: function startGame() {
	            var players = ['user', 'computer'];
	            this.shootingTurn = players[Math.round(Math.random())];
	        }
	    }]);

	    return GameState;
	}();

	;
	exports.default = new GameState();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Ship = __webpack_require__(6);

	var _Ship2 = _interopRequireDefault(_Ship);

	var _Point = __webpack_require__(7);

	var _Point2 = _interopRequireDefault(_Point);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ShipsSet = function () {
	    function ShipsSet() {
	        _classCallCheck(this, ShipsSet);

	        this.shipsPlacement = new Array(10);
	        this.ships = [];
	        for (var i = 0; i < 10; i++) {
	            this.shipsPlacement[i] = new Array(10);
	            for (var j = 0; j < 10; j++) {
	                this.shipsPlacement[i][j] = 0;
	            }
	        }
	        // First we start from generating and placing the biggest ship - 4-decker
	        var battleship = this.generateSeveralShips(1, 4);
	        // Generate two 3-deckers
	        var cruisers = this.generateSeveralShips(2, 3);
	        // Generate three 2-deckers
	        var destroyers = this.generateSeveralShips(3, 2);
	        // Generate four 1-deckers
	        var submarines = this.generateSeveralShips(4, 1);
	        this.ships = this.ships.concat(battleship, cruisers, destroyers, submarines);
	    }

	    _createClass(ShipsSet, [{
	        key: 'generateSeveralShips',
	        value: function generateSeveralShips(number, size) {
	            var ships = new Array(number);
	            for (var i = 0; i < number; i++) {
	                do {
	                    ships[i] = this.constructor.generateRandomShip(size);
	                } while (!this.spaceIsAvailable(ships[i]));
	                this.assignPlacement(ships[i]);
	            }
	            return ships;
	        }
	    }, {
	        key: 'spaceIsAvailable',
	        value: function spaceIsAvailable(ship) {
	            var _this = this;

	            var acceptable = true;
	            ship.getCompartments().map(function (compartment) {
	                if (_this.shipsPlacement[compartment.x][compartment.y] !== 0) {
	                    acceptable = false;
	                    return acceptable;
	                }
	            });
	            ship.getSurroundings().map(function (surroundingPoint) {
	                if (_this.shipsPlacement[surroundingPoint.x][surroundingPoint.y] === 1) {
	                    acceptable = false;
	                    return acceptable;
	                }
	            });
	            return acceptable;
	        }
	    }, {
	        key: 'assignPlacement',
	        value: function assignPlacement(ship) {
	            var _this2 = this;

	            ship.getCompartments().map(function (compartment) {
	                _this2.shipsPlacement[compartment.x][compartment.y] = 1;
	            });
	            ship.getSurroundings().map(function (surroundingPoint) {
	                _this2.shipsPlacement[surroundingPoint.x][surroundingPoint.y] = 2;
	            });
	        }
	    }], [{
	        key: 'generateRandomShip',
	        value: function generateRandomShip(size) {
	            var directions = [new _Point2.default(0, 1), new _Point2.default(1, 0)];
	            var ship = void 0;
	            do {
	                ship = new _Ship2.default(size, new _Point2.default(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)), directions[Math.round(Math.random())]);
	            } while (!ship.isOnField());
	            return ship;
	        }
	    }]);

	    return ShipsSet;
	}();

	exports.default = ShipsSet;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Point = __webpack_require__(7);

	var _Point2 = _interopRequireDefault(_Point);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Ship = function () {
	    function Ship(size, anchor, direction) {
	        _classCallCheck(this, Ship);

	        this.size = size;
	        this.anchor = anchor;
	        this.direction = direction;
	        this.attemptes = 0;
	        this.destroyed = false;
	    }

	    _createClass(Ship, [{
	        key: 'getCompartments',
	        value: function getCompartments() {
	            var compartments = [this.anchor];
	            for (var i = 1; i < this.size; i++) {
	                compartments.push(compartments[compartments.length - 1].add(this.direction));
	            }
	            return compartments;
	        }
	    }, {
	        key: 'getSurroundings',
	        value: function getSurroundings() {
	            var ship = this.getCompartments(),
	                surroundings = [],
	                surroundingsString = [],
	                surroundPoints = [new _Point2.default(-1, -1), new _Point2.default(-1, 0), new _Point2.default(-1, 1), new _Point2.default(0, -1), new _Point2.default(0, 1), new _Point2.default(1, -1), new _Point2.default(1, 0), new _Point2.default(1, 1)],
	                shipString = ship.map(function (compartment) {
	                return compartment.toString();
	            });
	            ship.map(function (compartment) {
	                surroundPoints.map(function (surPoint) {
	                    var p = compartment.add(surPoint);
	                    if (surroundingsString.includes(p.toString()) && shipString.includes(p.toString()) && p.isOnField()) {
	                        surroundingsString.push(p.toString());
	                        surroundings.push(p);
	                    }
	                });
	            });
	            return surroundings;
	        }
	    }, {
	        key: 'isOnField',
	        value: function isOnField() {
	            var acceptable = true;
	            this.getCompartments().map(function (compartment) {
	                if (!compartment.isOnField()) acceptable = false;
	                return acceptable;
	            });
	            this.getSurroundings().map(function (surPoint) {
	                if (!surPoint.isOnField()) acceptable = false;
	                return acceptable;
	            });
	            return acceptable;
	        }
	    }, {
	        key: 'shipWasAttempted',
	        value: function shipWasAttempted() {
	            if (this.attemptes < this.size - 1) this.attemptes++;else this.shipWasDestroyed();
	        }
	    }, {
	        key: 'shipWasDestroyed',
	        value: function shipWasDestroyed() {
	            this.attemptes++;
	            this.destroyed = true;
	        }
	    }]);

	    return Ship;
	}();

	exports.default = Ship;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Point = function () {
	    function Point(x, y) {
	        _classCallCheck(this, Point);

	        this.x = x;
	        this.y = y;
	    }

	    _createClass(Point, [{
	        key: "subtract",
	        value: function subtract(that) {
	            return new Point(this.x - that.x, this.y - that.y);
	        }
	    }, {
	        key: "add",
	        value: function add(that) {
	            return new Point(this.x + that.x, this.y - that.y);
	        }
	    }, {
	        key: "equal",
	        value: function equal(that) {
	            return this.x === that.x && this.y === that.y;
	        }
	    }, {
	        key: "toString",
	        value: function toString() {
	            return "(" + this.x + ", " + this.y + ")";
	        }
	    }, {
	        key: "isOnField",
	        value: function isOnField() {
	            return this.x >= 0 && this.x < 10 && this.y >= 0 && this.y < 10;
	        }
	    }]);

	    return Point;
	}();

	exports.default = Point;

/***/ })
/******/ ]);