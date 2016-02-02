'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var devtools = typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : undefined;

exports.default = function (_ref) {
  var middleware = _ref.middleware;
  var reducer = _ref.reducer;
  var initialState = _ref.initialState;

  var applied = _redux.applyMiddleware.apply(undefined, [_reduxThunk2.default].concat((0, _toConsumableArray3.default)(middleware)));

  return (0, _redux.compose)(applied, devtools)(_redux.createStore)(reducer, initialState);
};

module.exports = exports['default'];