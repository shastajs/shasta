'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _immutable = require('immutable');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var devtools = typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : undefined;

exports.default = function (_ref) {
  var _ref$middleware = _ref.middleware;
  var middleware = _ref$middleware === undefined ? [] : _ref$middleware;
  var _ref$enhancers = _ref.enhancers;
  var enhancers = _ref$enhancers === undefined ? [] : _ref$enhancers;
  var reducer = _ref.reducer;
  var _ref$initialState = _ref.initialState;
  var initialState = _ref$initialState === undefined ? (0, _immutable.Map)() : _ref$initialState;

  if (typeof reducer !== 'function') throw new Error('Invalid reducer option');
  if (!Array.isArray(middleware)) throw new Error('Invalid middleware option');
  if (!Array.isArray(enhancers)) throw new Error('Invalid enhancers option');
  if (!_immutable.Iterable.isIterable(initialState)) throw new Error('Invalid initialState option');

  return (0, _redux.createStore)(reducer, initialState, _redux.compose.apply(undefined, [_redux.applyMiddleware.apply(undefined, [_reduxThunk2.default].concat((0, _toConsumableArray3.default)(middleware)))].concat((0, _toConsumableArray3.default)(enhancers), [devtools])));
};

module.exports = exports['default'];