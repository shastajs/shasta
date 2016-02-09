'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _redux = require('redux');

var _combineReducers = require('./lib/combineReducers');

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _immutable = require('immutable');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var identity = function identity(v) {
  return v;
};

var devtools = typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : identity;

exports.default = function (_ref) {
  var _ref$middleware = _ref.middleware;
  var middleware = _ref$middleware === undefined ? [] : _ref$middleware;
  var _ref$enhancers = _ref.enhancers;
  var enhancers = _ref$enhancers === undefined ? [] : _ref$enhancers;
  var _ref$reducers = _ref.reducers;
  var reducers = _ref$reducers === undefined ? [] : _ref$reducers;
  var _ref$initialState = _ref.initialState;
  var initialState = _ref$initialState === undefined ? (0, _immutable.Map)() : _ref$initialState;

  if (!Array.isArray(reducers)) throw new Error('Invalid reducers option');
  if (!Array.isArray(middleware)) throw new Error('Invalid middleware option');
  if (!Array.isArray(enhancers)) throw new Error('Invalid enhancers option');
  if (!_immutable.Iterable.isIterable(initialState)) throw new Error('Invalid initialState option');

  var store = (0, _redux.createStore)(_combineReducers2.default.apply(undefined, (0, _toConsumableArray3.default)(reducers)), initialState, _redux.compose.apply(undefined, [_redux.applyMiddleware.apply(undefined, [_reduxThunk2.default].concat((0, _toConsumableArray3.default)(middleware)))].concat((0, _toConsumableArray3.default)(enhancers), [devtools])));

  store.replaceReducers = function (reducers) {
    if (!Array.isArray(reducers)) throw new Error('Invalid reducers option');
    return store.replaceReducer(_combineReducers2.default.apply(undefined, (0, _toConsumableArray3.default)(reducers)));
  };
  return store;
};

module.exports = exports['default'];