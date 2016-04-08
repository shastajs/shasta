'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _redux = require('redux');

var _combineReducers = require('./lib/combineReducers');

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _transformPlugins = require('./lib/transformPlugins');

var _transformPlugins2 = _interopRequireDefault(_transformPlugins);

var _immutable = require('immutable');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _lodash = require('lodash.foreach');

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxBatchedSubscribe = require('redux-batched-subscribe');

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var identity = function identity(v) {
  return v;
};

var devtools = typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : identity;

var defaultEnhancers = [(0, _reduxBatchedSubscribe.batchedSubscribe)(_reactDom.unstable_batchedUpdates)];
var defaultMiddleware = [_reduxThunk2.default];

exports.default = function (_ref) {
  var _ref$plugins = _ref.plugins;
  var plugins = _ref$plugins === undefined ? [] : _ref$plugins;
  var _ref$middleware = _ref.middleware;
  var middleware = _ref$middleware === undefined ? [] : _ref$middleware;
  var _ref$enhancers = _ref.enhancers;
  var enhancers = _ref$enhancers === undefined ? [] : _ref$enhancers;
  var _ref$reducers = _ref.reducers;
  var reducers = _ref$reducers === undefined ? [] : _ref$reducers;
  var _ref$hooks = _ref.hooks;
  var hooks = _ref$hooks === undefined ? [] : _ref$hooks;
  var _ref$initialState = _ref.initialState;
  var initialState = _ref$initialState === undefined ? (0, _immutable.Map)() : _ref$initialState;

  if (!Array.isArray(reducers)) throw new Error('Invalid reducers option');
  if (!Array.isArray(middleware)) throw new Error('Invalid middleware option');
  if (!Array.isArray(enhancers)) throw new Error('Invalid enhancers option');
  if (!_immutable.Iterable.isIterable(initialState)) throw new Error('Invalid initialState option');

  // take in the options and reconcile them with the plugins provided
  var pluginValues = (0, _transformPlugins2.default)(plugins);
  var finalReducers = [].concat((0, _toConsumableArray3.default)(reducers), (0, _toConsumableArray3.default)(pluginValues.reducers));
  var finalMiddleware = [].concat(defaultMiddleware, (0, _toConsumableArray3.default)(middleware), (0, _toConsumableArray3.default)(pluginValues.middleware));
  var finalEnhancers = [].concat(defaultEnhancers, (0, _toConsumableArray3.default)(enhancers), (0, _toConsumableArray3.default)(pluginValues.enhancers), [devtools]);
  var finalHooks = [].concat((0, _toConsumableArray3.default)(hooks), (0, _toConsumableArray3.default)(pluginValues.hooks));

  var store = (0, _redux.createStore)(_combineReducers2.default.apply(undefined, (0, _toConsumableArray3.default)(finalReducers)), initialState, _redux.compose.apply(undefined, [_redux.applyMiddleware.apply(undefined, (0, _toConsumableArray3.default)(finalMiddleware))].concat((0, _toConsumableArray3.default)(finalEnhancers))));

  store.replaceReducers = function (newReducers) {
    if (!Array.isArray(newReducers)) throw new Error('Invalid newReducers option');
    return store.replaceReducer(_combineReducers2.default.apply(undefined, (0, _toConsumableArray3.default)(newReducers).concat((0, _toConsumableArray3.default)(pluginValues.reducers))));
  };

  // apply hooks
  (0, _lodash2.default)(finalHooks, function (fn) {
    return fn(store);
  });

  return store;
};

module.exports = exports['default'];