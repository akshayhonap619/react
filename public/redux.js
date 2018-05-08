/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ({

/***/ 75:
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ 76:
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _expenseActions = __webpack_require__(88);

var _filterActions = __webpack_require__(92);

var _index = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux/index\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _filtersReducer = __webpack_require__(93);

var _expenseReducer = __webpack_require__(94);

var state = {
    expenses: [{
        id: '1',
        description: 'Demo Expense',
        createdAt: ''
    }]
}; //import {store} from "./store/configureStore";

var store = (0, _index.createStore)((0, _index.combineReducers)({
    expenses: _expenseReducer.expenseReducer,
    filters: _filtersReducer.filterReducer
}));

console.log(store.getState());

store.subscribe(function () {
    var state = store.getState();
    var filteredOutput = filterData(state.expenses, state.filters);
    console.log({
        expenses: filteredOutput,
        filters: state.filters
    });
});

//Action Generators


//------------------------------

var filterData = function filterData(expenses, filters) {
    console.log(expenses);
    return expenses.filter(function (expense) {
        //return (!typeof filters.startDate != "undefined" && !expense.date >= filters.startDate) ||
        //(!expense.description.toLowerCase().includes(filters.text.toLowerCase()))
        //return !expense.description.toLowerCase().includes(filters.text.toLowerCase())
        return (expense.description.toLowerCase().includes(filters.text.toLowerCase()) || expense.description.length <= 0) && (expense.startDate >= filters.startDate || typeof filters.startDate == 'undefined');
    }).sort(function (a, b) {
        if (filters.sortBy == 'amount') return a.amount - b.amount;else return a.startDate - b.startDate;
    });
};

//------------------------------
//Actions
var exp = store.dispatch((0, _expenseActions.AddExpense)({
    description: "Rent"
}));

var exp1 = store.dispatch((0, _expenseActions.AddExpense)());

store.dispatch((0, _expenseActions.deleteExpense)(exp1.expense.id));

var exp2 = store.dispatch((0, _expenseActions.AddExpense)());

store.dispatch((0, _expenseActions.updateExpense)(exp2.expense.id, { description: "Milk" }));

store.dispatch((0, _expenseActions.updateExpense)(exp.expense.id, { amount: 500 }));

store.dispatch((0, _filterActions.setTextFilter)("Rent"));

store.dispatch((0, _filterActions.setTextFilter)());

store.dispatch((0, _filterActions.setSortBy)('amount'));

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateExpense = exports.deleteExpense = exports.AddExpense = undefined;

var _uuid = __webpack_require__(89);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Add Expense

var AddExpense = exports.AddExpense = function AddExpense() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$description = _ref.description,
        description = _ref$description === undefined ? "" : _ref$description,
        _ref$amount = _ref.amount,
        amount = _ref$amount === undefined ? 0 : _ref$amount,
        _ref$createdAt = _ref.createdAt,
        createdAt = _ref$createdAt === undefined ? Date.now() : _ref$createdAt;

    return {
        type: "ADDEXPENSE",
        expense: {
            id: (0, _uuid2.default)(),
            description: description,
            amount: amount,
            createdAt: createdAt
        }
    };
};

//Delete Expense
var deleteExpense = exports.deleteExpense = function deleteExpense(id) {
    return {
        type: "DELETEEXPENSE",
        id: id
    };
};

//Update Expense
var updateExpense = exports.updateExpense = function updateExpense(id, expense) {
    return {
        type: "UPDATEEXPENSE",
        id: id,
        expense: expense
    };
};

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(90);
var v4 = __webpack_require__(91);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(75);
var bytesToUuid = __webpack_require__(76);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(75);
var bytesToUuid = __webpack_require__(76);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

//SetTextFilter
var setTextFilter = exports.setTextFilter = function setTextFilter() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return {
        type: "SETTEXTFILTER",
        text: text
    };
};

//Set Sort by
var setSortBy = exports.setSortBy = function setSortBy() {
    var sortBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'date';
    return {
        type: "SETSORTBY",
        sortBy: sortBy
    };
};

//SetStartDateFilter
var setDateFilter = exports.setDateFilter = function setDateFilter() {
    var startDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    return {
        type: "SETDATEFILTER",
        startDate: startDate
    };
};

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

var filterReducer = exports.filterReducer = function filterReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : filters;
    var action = arguments[1];

    switch (action.type) {

        case 'SETTEXTFILTER':
            return _extends({}, state, {
                text: action.text
            });

        case 'SETSORTBY':
            return _extends({}, state, {
                sortBy: action.sortBy
            });

        case 'SETDATEFILTER':
            return _extends({}, state, {
                startDate: action.startDate
            });

        default:
            return state;
    }
};

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var expenseReducer = exports.expenseReducer = function expenseReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'ADDEXPENSE':
            return [].concat(_toConsumableArray(state), [action.expense]);

        case 'DELETEEXPENSE':
            return state.filter(function (expense) {
                return expense.id != action.id;
            });

        case 'UPDATEEXPENSE':
            return state.map(function (expense) {
                if (expense.id == action.id) return _extends({}, expense, action.expense);else return expense;
            });

        default:
            return state;
    }
};

/***/ })

/******/ });