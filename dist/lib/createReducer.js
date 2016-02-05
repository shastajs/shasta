'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxImmutablejs = require('redux-immutablejs');

var _reduxActions = require('redux-actions');

var _lodash = require('lodash.mapvalues');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.reduce');

var _lodash4 = _interopRequireDefault(_lodash3);

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getInitialState = function getInitialState(o) {
  if (typeof o.initialState !== 'undefined') {
    return o.initialState;
  }

  return (0, _lodash4.default)(o, function (prev, v, k) {
    if ((typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) === 'object') {
      return prev.set(k, getInitialState(v, k));
    }
    return prev;
  }, (0, _immutable.Map)());
}; /*eslint no-console: 0*/

var createReducer = function createReducer(o, ns) {
  // map reducers down to a flat object
  // of functions that handle namespaced actions
  var hadReducer = false;
  var reducers = (0, _lodash2.default)(o, function (v, k) {
    if (k === 'initialState') return;
    var name = ns ? ns + '.' + k : k;

    if (typeof v === 'function') {
      hadReducer = true;
      return (0, _reduxActions.handleAction)(name, v);
    }

    if ((typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) === 'object') {
      return createReducer(v, name);
    }
  });

  if (hadReducer && typeof o.initialState === 'undefined') {
    throw new Error('Reducer "' + (ns || 'root') + '" is missing an initialState');
  }

  var initialState = getInitialState(o);
  if (!_immutable.Iterable.isIterable(initialState)) {
    throw new Error('Reducer "' + (ns || 'root') + '" is missing an Immutable initialState');
  }

  var combined = (0, _reduxImmutablejs.combineReducers)(reducers);
  return function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    return combined(state, action);
  };
};

exports.default = createReducer;
module.exports = exports['default'];