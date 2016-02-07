'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = require('redux-actions');

var _reduceReducers = require('reduce-reducers');

var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

var _lodash = require('lodash.mapvalues');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.values');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.reduce');

var _lodash6 = _interopRequireDefault(_lodash5);

var _lodash7 = require('lodash.filter');

var _lodash8 = _interopRequireDefault(_lodash7);

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFunction = function isFunction(v) {
  return typeof v === 'function';
};
var getInitialState = function getInitialState(o) {
  if (typeof o.initialState !== 'undefined') return o.initialState;
  return (0, _lodash6.default)(o, function (prev, v, k) {
    if ((typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) === 'object') {
      return prev.set(k, getInitialState(v, k));
    }
    return prev;
  }, (0, _immutable.Map)());
};

var createReducer = function createReducer(o, ns) {
  // map reducers down to a flat object
  // of functions that handle namespaced actions
  var hadReducer = false;
  var reducers = (0, _lodash8.default)((0, _lodash2.default)(o, function (v, k) {
    if (k === 'initialState') return;
    var name = ns ? ns + '.' + k : k;

    if (isFunction(v)) {
      hadReducer = true;
      return (0, _reduxActions.handleAction)(name, v);
    }

    if ((typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) === 'object') {
      return createReducer(v, name);
    }
  }), isFunction);

  if (ns && hadReducer && typeof o.initialState === 'undefined') {
    throw new Error('Reducer "' + ns + '" is missing an initialState');
  }

  var initialState = getInitialState(o);
  if (!_immutable.Iterable.isIterable(initialState)) {
    throw new Error('Reducer "' + (ns || 'root') + '" is missing an Immutable initialState');
  }

  var reducer = _reduceReducers2.default.apply(undefined, (0, _toConsumableArray3.default)((0, _lodash4.default)(reducers)));

  return function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var path = ns ? ns.split('.') : undefined;
    var currState = path ? state.getIn(path) : state;
    var nodeState = typeof currState === 'undefined' ? initialState : currState;

    if (typeof ns === 'undefined' || !hadReducer) {
      return reducer(nodeState, action);
    }

    return state.setIn(path, reducer(nodeState, action));
  };
};

exports.default = createReducer;
module.exports = exports['default'];