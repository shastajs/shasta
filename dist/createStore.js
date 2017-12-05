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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { batchedSubscribe } from 'redux-batched-subscribe'
// import { unstable_batchedUpdates as batchedUpdates } from 'react-dom'

var identity = function identity(v) {
  return v;
};

var devtools = typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : identity;

/*
const defaultEnhancers = [
  batchedSubscribe(batchedUpdates)
]
*/

var defaultMiddleware = [_reduxThunk2.default];

exports.default = function (_ref) {
  var _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === undefined ? [] : _ref$plugins,
      _ref$middleware = _ref.middleware,
      middleware = _ref$middleware === undefined ? [] : _ref$middleware,
      _ref$enhancers = _ref.enhancers,
      enhancers = _ref$enhancers === undefined ? [] : _ref$enhancers,
      _ref$reducers = _ref.reducers,
      reducers = _ref$reducers === undefined ? [] : _ref$reducers,
      _ref$hooks = _ref.hooks,
      hooks = _ref$hooks === undefined ? [] : _ref$hooks,
      _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === undefined ? (0, _immutable.Map)() : _ref$initialState;

  if (!Array.isArray(reducers)) throw new Error('Invalid reducers option');
  if (!Array.isArray(middleware)) throw new Error('Invalid middleware option');
  if (!Array.isArray(enhancers)) throw new Error('Invalid enhancers option');
  if (!_immutable.Iterable.isIterable(initialState)) throw new Error('Invalid initialState option');

  // take in the options and reconcile them with the plugins provided
  var pluginValues = (0, _transformPlugins2.default)(plugins);
  var finalReducers = [].concat((0, _toConsumableArray3.default)(reducers), (0, _toConsumableArray3.default)(pluginValues.reducers));
  var finalMiddleware = [].concat(defaultMiddleware, (0, _toConsumableArray3.default)(middleware), (0, _toConsumableArray3.default)(pluginValues.middleware));
  var finalEnhancers = [].concat((0, _toConsumableArray3.default)(enhancers), (0, _toConsumableArray3.default)(pluginValues.enhancers), [devtools]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVTdG9yZS5qcyJdLCJuYW1lcyI6WyJpZGVudGl0eSIsInYiLCJkZXZ0b29scyIsIndpbmRvdyIsImRldlRvb2xzRXh0ZW5zaW9uIiwiZGVmYXVsdE1pZGRsZXdhcmUiLCJwbHVnaW5zIiwibWlkZGxld2FyZSIsImVuaGFuY2VycyIsInJlZHVjZXJzIiwiaG9va3MiLCJpbml0aWFsU3RhdGUiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsImlzSXRlcmFibGUiLCJwbHVnaW5WYWx1ZXMiLCJmaW5hbFJlZHVjZXJzIiwiZmluYWxNaWRkbGV3YXJlIiwiZmluYWxFbmhhbmNlcnMiLCJmaW5hbEhvb2tzIiwic3RvcmUiLCJyZXBsYWNlUmVkdWNlcnMiLCJuZXdSZWR1Y2VycyIsInJlcGxhY2VSZWR1Y2VyIiwiZm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUFLQyxDQUFMO0FBQUEsQ0FBakI7O0FBRUEsSUFBTUMsV0FBVyxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxPQUFPQyxpQkFBeEMsR0FDYkQsT0FBT0MsaUJBQVAsRUFEYSxHQUViSixRQUZKOztBQUlBOzs7Ozs7QUFNQSxJQUFNSyxvQkFBb0Isc0JBQTFCOztrQkFJZSxnQkFPVDtBQUFBLDBCQU5KQyxPQU1JO0FBQUEsTUFOSkEsT0FNSSxnQ0FOTSxFQU1OO0FBQUEsNkJBTEpDLFVBS0k7QUFBQSxNQUxKQSxVQUtJLG1DQUxTLEVBS1Q7QUFBQSw0QkFKSkMsU0FJSTtBQUFBLE1BSkpBLFNBSUksa0NBSlEsRUFJUjtBQUFBLDJCQUhKQyxRQUdJO0FBQUEsTUFISkEsUUFHSSxpQ0FITyxFQUdQO0FBQUEsd0JBRkpDLEtBRUk7QUFBQSxNQUZKQSxLQUVJLDhCQUZJLEVBRUo7QUFBQSwrQkFESkMsWUFDSTtBQUFBLE1BREpBLFlBQ0kscUNBRFcscUJBQ1g7O0FBQ0osTUFBSSxDQUFDQyxNQUFNQyxPQUFOLENBQWNKLFFBQWQsQ0FBTCxFQUE4QixNQUFNLElBQUlLLEtBQUosQ0FBVSx5QkFBVixDQUFOO0FBQzlCLE1BQUksQ0FBQ0YsTUFBTUMsT0FBTixDQUFjTixVQUFkLENBQUwsRUFBZ0MsTUFBTSxJQUFJTyxLQUFKLENBQVUsMkJBQVYsQ0FBTjtBQUNoQyxNQUFJLENBQUNGLE1BQU1DLE9BQU4sQ0FBY0wsU0FBZCxDQUFMLEVBQStCLE1BQU0sSUFBSU0sS0FBSixDQUFVLDBCQUFWLENBQU47QUFDL0IsTUFBSSxDQUFDLG9CQUFTQyxVQUFULENBQW9CSixZQUFwQixDQUFMLEVBQXdDLE1BQU0sSUFBSUcsS0FBSixDQUFVLDZCQUFWLENBQU47O0FBRXhDO0FBQ0EsTUFBTUUsZUFBZSxnQ0FBaUJWLE9BQWpCLENBQXJCO0FBQ0EsTUFBTVcsMkRBQ0RSLFFBREMsb0NBRURPLGFBQWFQLFFBRlosRUFBTjtBQUlBLE1BQU1TLDRCQUNEYixpQkFEQyxtQ0FFREUsVUFGQyxvQ0FHRFMsYUFBYVQsVUFIWixFQUFOO0FBS0EsTUFBTVksNERBRURYLFNBRkMsb0NBR0RRLGFBQWFSLFNBSFosSUFJSk4sUUFKSSxFQUFOO0FBTUEsTUFBTWtCLHdEQUNEVixLQURDLG9DQUVETSxhQUFhTixLQUZaLEVBQU47O0FBS0EsTUFBTVcsUUFBUSx3QkFDWiw0RUFBbUJKLGFBQW5CLEVBRFksRUFFWk4sWUFGWSxFQUdaLGlDQUNFLHlFQUFtQk8sZUFBbkIsRUFERiwwQ0FFS0MsY0FGTCxHQUhZLENBQWQ7O0FBU0FFLFFBQU1DLGVBQU4sR0FBd0IsVUFBQ0MsV0FBRCxFQUFpQjtBQUN2QyxRQUFJLENBQUNYLE1BQU1DLE9BQU4sQ0FBY1UsV0FBZCxDQUFMLEVBQWlDLE1BQU0sSUFBSVQsS0FBSixDQUFVLDRCQUFWLENBQU47QUFDakMsV0FBT08sTUFBTUcsY0FBTixDQUNMLDRFQUFtQkQsV0FBbkIsMENBQW1DUCxhQUFhUCxRQUFoRCxHQURLLENBQVA7QUFHRCxHQUxEOztBQVFBO0FBQ0Esd0JBQUtXLFVBQUwsRUFBaUI7QUFBQSxXQUFNSyxHQUFHSixLQUFILENBQU47QUFBQSxHQUFqQjs7QUFFQSxTQUFPQSxLQUFQO0FBQ0QsQyIsImZpbGUiOiJjcmVhdGVTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBjb21iaW5lUmVkdWNlcnMgZnJvbSAnLi9saWIvY29tYmluZVJlZHVjZXJzJ1xuaW1wb3J0IHRyYW5zZm9ybVBsdWdpbnMgZnJvbSAnLi9saWIvdHJhbnNmb3JtUGx1Z2lucydcbmltcG9ydCB7IE1hcCwgSXRlcmFibGUgfSBmcm9tICdpbW11dGFibGUnXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2guZm9yZWFjaCdcbi8vIGltcG9ydCB7IGJhdGNoZWRTdWJzY3JpYmUgfSBmcm9tICdyZWR1eC1iYXRjaGVkLXN1YnNjcmliZSdcbi8vIGltcG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIGFzIGJhdGNoZWRVcGRhdGVzIH0gZnJvbSAncmVhY3QtZG9tJ1xuXG5jb25zdCBpZGVudGl0eSA9IHYgPT4gdlxuXG5jb25zdCBkZXZ0b29scyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvblxuICA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpXG4gIDogaWRlbnRpdHlcblxuLypcbmNvbnN0IGRlZmF1bHRFbmhhbmNlcnMgPSBbXG4gIGJhdGNoZWRTdWJzY3JpYmUoYmF0Y2hlZFVwZGF0ZXMpXG5dXG4qL1xuXG5jb25zdCBkZWZhdWx0TWlkZGxld2FyZSA9IFtcbiAgdGh1bmtcbl1cblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgcGx1Z2lucyA9IFtdLFxuICBtaWRkbGV3YXJlID0gW10sXG4gIGVuaGFuY2VycyA9IFtdLFxuICByZWR1Y2VycyA9IFtdLFxuICBob29rcyA9IFtdLFxuICBpbml0aWFsU3RhdGUgPSBNYXAoKVxufSkgPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkocmVkdWNlcnMpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVkdWNlcnMgb3B0aW9uJylcbiAgaWYgKCFBcnJheS5pc0FycmF5KG1pZGRsZXdhcmUpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgbWlkZGxld2FyZSBvcHRpb24nKVxuICBpZiAoIUFycmF5LmlzQXJyYXkoZW5oYW5jZXJzKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVuaGFuY2VycyBvcHRpb24nKVxuICBpZiAoIUl0ZXJhYmxlLmlzSXRlcmFibGUoaW5pdGlhbFN0YXRlKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGluaXRpYWxTdGF0ZSBvcHRpb24nKVxuXG4gIC8vIHRha2UgaW4gdGhlIG9wdGlvbnMgYW5kIHJlY29uY2lsZSB0aGVtIHdpdGggdGhlIHBsdWdpbnMgcHJvdmlkZWRcbiAgY29uc3QgcGx1Z2luVmFsdWVzID0gdHJhbnNmb3JtUGx1Z2lucyhwbHVnaW5zKVxuICBjb25zdCBmaW5hbFJlZHVjZXJzID0gW1xuICAgIC4uLnJlZHVjZXJzLFxuICAgIC4uLnBsdWdpblZhbHVlcy5yZWR1Y2Vyc1xuICBdXG4gIGNvbnN0IGZpbmFsTWlkZGxld2FyZSA9IFtcbiAgICAuLi5kZWZhdWx0TWlkZGxld2FyZSxcbiAgICAuLi5taWRkbGV3YXJlLFxuICAgIC4uLnBsdWdpblZhbHVlcy5taWRkbGV3YXJlXG4gIF1cbiAgY29uc3QgZmluYWxFbmhhbmNlcnMgPSBbXG4gICAgLy8uLi5kZWZhdWx0RW5oYW5jZXJzLFxuICAgIC4uLmVuaGFuY2VycyxcbiAgICAuLi5wbHVnaW5WYWx1ZXMuZW5oYW5jZXJzLFxuICAgIGRldnRvb2xzXG4gIF1cbiAgY29uc3QgZmluYWxIb29rcyA9IFtcbiAgICAuLi5ob29rcyxcbiAgICAuLi5wbHVnaW5WYWx1ZXMuaG9va3NcbiAgXVxuXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgY29tYmluZVJlZHVjZXJzKC4uLmZpbmFsUmVkdWNlcnMpLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlKFxuICAgICAgYXBwbHlNaWRkbGV3YXJlKC4uLmZpbmFsTWlkZGxld2FyZSksXG4gICAgICAuLi5maW5hbEVuaGFuY2Vyc1xuICAgIClcbiAgKVxuXG4gIHN0b3JlLnJlcGxhY2VSZWR1Y2VycyA9IChuZXdSZWR1Y2VycykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShuZXdSZWR1Y2VycykpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBuZXdSZWR1Y2VycyBvcHRpb24nKVxuICAgIHJldHVybiBzdG9yZS5yZXBsYWNlUmVkdWNlcihcbiAgICAgIGNvbWJpbmVSZWR1Y2VycyguLi5uZXdSZWR1Y2VycywgLi4ucGx1Z2luVmFsdWVzLnJlZHVjZXJzKVxuICAgIClcbiAgfVxuXG5cbiAgLy8gYXBwbHkgaG9va3NcbiAgZWFjaChmaW5hbEhvb2tzLCBmbiA9PiBmbihzdG9yZSkpXG5cbiAgcmV0dXJuIHN0b3JlXG59XG4iXX0=