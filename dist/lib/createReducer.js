'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

// terminology:
// container - an object that contains initialState + reducer functions
// initialState - the default state of a node and its children

var isFunction = function isFunction(v) {
  return typeof v === 'function';
};
var getInitialState = function getInitialState(o, ns) {
  return (0, _lodash6.default)(o, function (prev, v, k) {
    if (k === 'initialState') return prev;
    var name = ns ? ns + '.' + k : k;

    if ((typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) === 'object') {
      if (!_immutable.Map.isMap(prev)) {
        throw new Error('Reducer "' + (ns || 'root') + '" has a non-map initialState, so it can\'t have children');
      }
      if (typeof prev.get(k) !== 'undefined') {
        throw new Error('Reducer "' + (ns || 'root') + '" has an initialState conflict with it\'s parent over "' + k + '"');
      }
      return prev.set(k, getInitialState(v, name));
    }
    return prev;
  }, o.initialState || (0, _immutable.Map)());
};

var createReducerNode = function createReducerNode(_ref) {
  var name = _ref.name,
      statePath = _ref.statePath,
      reducer = _ref.reducer,
      initialState = _ref.initialState;
  return function (state) {
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // if we are the reducer container, pass them our cherry-picked state
    // otherwise pass down the full state to the next container
    var currNodeState = (statePath ? state.getIn(statePath) : state) || initialState;
    if (!_immutable.Iterable.isIterable(currNodeState)) {
      throw new Error('Reducer "' + (name || 'root') + '" was given a non-Immutable state!');
    }
    var nextNodeState = reducer(currNodeState, action);
    if (!_immutable.Iterable.isIterable(nextNodeState)) {
      throw new Error('Reducer "' + (name || 'root') + '" returned a non-Immutable state!');
    }
    var nextRootState = statePath ? state.setIn(statePath, nextNodeState) : nextNodeState;

    return nextRootState;
  };
};

// recursively map reducers object to an
// array of reducers that handle namespaced actions
var createReducers = function createReducers(o, parentName) {
  var hadReducers = false;
  var reducers = (0, _lodash8.default)((0, _lodash2.default)(o, function (v, k) {
    if (k === 'initialState') return;
    var name = parentName ? parentName + '.' + k : k;

    if (isFunction(v)) {
      hadReducers = true;
      return (0, _reduxActions.handleAction)(name, v);
    }

    if ((typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) === 'object') {
      return createReducer(v, name);
    }
  }), isFunction);

  return {
    name: parentName,
    isContainer: hadReducers,
    reducers: reducers
  };
};

var createReducer = function createReducer(o, parentName) {
  var _createReducers = createReducers(o, parentName),
      reducers = _createReducers.reducers,
      isContainer = _createReducers.isContainer,
      name = _createReducers.name;

  if (isContainer && typeof o.initialState === 'undefined') {
    throw new Error('Reducer "' + (name || 'root') + '" is missing an initialState');
  }
  if (!isContainer && typeof o.initialState !== 'undefined') {
    throw new Error('Reducer "' + (name || 'root') + '" has no reducers, so it can\'t specify an initialState');
  }
  var initialState = getInitialState(o);
  if (!_immutable.Iterable.isIterable(initialState)) {
    throw new Error('Reducer "' + (name || 'root') + '" is missing an Immutable initialState');
  }

  var reducer = _reduceReducers2.default.apply(undefined, (0, _toConsumableArray3.default)((0, _lodash4.default)(reducers)));
  var statePath = name && isContainer ? name.split('.') : undefined;
  return createReducerNode({
    name: name,
    initialState: initialState,
    reducer: reducer,
    statePath: statePath
  });
};

exports.default = createReducer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY3JlYXRlUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJpc0Z1bmN0aW9uIiwidiIsImdldEluaXRpYWxTdGF0ZSIsIm8iLCJucyIsInByZXYiLCJrIiwibmFtZSIsImlzTWFwIiwiRXJyb3IiLCJnZXQiLCJzZXQiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVSZWR1Y2VyTm9kZSIsInN0YXRlUGF0aCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImN1cnJOb2RlU3RhdGUiLCJnZXRJbiIsImlzSXRlcmFibGUiLCJuZXh0Tm9kZVN0YXRlIiwibmV4dFJvb3RTdGF0ZSIsInNldEluIiwiY3JlYXRlUmVkdWNlcnMiLCJwYXJlbnROYW1lIiwiaGFkUmVkdWNlcnMiLCJyZWR1Y2VycyIsImNyZWF0ZVJlZHVjZXIiLCJpc0NvbnRhaW5lciIsInNwbGl0IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWE7QUFBQSxTQUFLLE9BQU9DLENBQVAsS0FBYSxVQUFsQjtBQUFBLENBQW5CO0FBQ0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxDQUFELEVBQUlDLEVBQUosRUFBVztBQUNqQyxTQUFPLHNCQUFPRCxDQUFQLEVBQVUsVUFBQ0UsSUFBRCxFQUFPSixDQUFQLEVBQVVLLENBQVYsRUFBZ0I7QUFDL0IsUUFBSUEsTUFBTSxjQUFWLEVBQTBCLE9BQU9ELElBQVA7QUFDMUIsUUFBTUUsT0FBT0gsS0FBUUEsRUFBUixTQUFjRSxDQUFkLEdBQW9CQSxDQUFqQzs7QUFFQSxRQUFJLFFBQU9MLENBQVAsdURBQU9BLENBQVAsT0FBYSxRQUFqQixFQUEyQjtBQUN6QixVQUFJLENBQUMsZUFBSU8sS0FBSixDQUFVSCxJQUFWLENBQUwsRUFBc0I7QUFD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QTBCLFdBQTdDLEVBQTBEO0FBQ3hELFVBQU0sSUFBSUgsS0FBSixnQkFBc0JGLFFBQVEsTUFBOUIsbUNBQU47QUFDRDtBQUNELE1BQUksQ0FBQ3NCLFdBQUQsSUFBZ0IsT0FBTzFCLEVBQUVTLFlBQVQsS0FBMEIsV0FBOUMsRUFBMkQ7QUFDekQsVUFBTSxJQUFJSCxLQUFKLGdCQUFzQkYsUUFBUSxNQUE5Qiw4REFBTjtBQUNEO0FBQ0QsTUFBTUssZUFBZVYsZ0JBQWdCQyxDQUFoQixDQUFyQjtBQUNBLE1BQUksQ0FBQyxvQkFBU2lCLFVBQVQsQ0FBb0JSLFlBQXBCLENBQUwsRUFBd0M7QUFDdEMsVUFBTSxJQUFJSCxLQUFKLGdCQUFzQkYsUUFBUSxNQUE5Qiw2Q0FBTjtBQUNEOztBQUVELE1BQU1RLFVBQVUsMkVBQWtCLHNCQUFPWSxRQUFQLENBQWxCLEVBQWhCO0FBQ0EsTUFBTWIsWUFBWVAsUUFBUXNCLFdBQVIsR0FBc0J0QixLQUFLdUIsS0FBTCxDQUFXLEdBQVgsQ0FBdEIsR0FBd0NDLFNBQTFEO0FBQ0EsU0FBT2xCLGtCQUFrQjtBQUN2Qk4sVUFBTUEsSUFEaUI7QUFFdkJLLGtCQUFjQSxZQUZTO0FBR3ZCRyxhQUFTQSxPQUhjO0FBSXZCRCxlQUFXQTtBQUpZLEdBQWxCLENBQVA7QUFNRCxDQXJCRDs7a0JBdUJlYyxhIiwiZmlsZSI6ImNyZWF0ZVJlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuaW1wb3J0IHJlZHVjZVJlZHVjZXJzIGZyb20gJ3JlZHVjZS1yZWR1Y2VycydcbmltcG9ydCBtYXBWYWx1ZXMgZnJvbSAnbG9kYXNoLm1hcHZhbHVlcydcbmltcG9ydCB2YWx1ZXMgZnJvbSAnbG9kYXNoLnZhbHVlcydcbmltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoLnJlZHVjZSdcbmltcG9ydCBmaWx0ZXIgZnJvbSAnbG9kYXNoLmZpbHRlcidcbmltcG9ydCB7IE1hcCwgSXRlcmFibGUgfSBmcm9tICdpbW11dGFibGUnXG5cbi8vIHRlcm1pbm9sb2d5OlxuLy8gY29udGFpbmVyIC0gYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgaW5pdGlhbFN0YXRlICsgcmVkdWNlciBmdW5jdGlvbnNcbi8vIGluaXRpYWxTdGF0ZSAtIHRoZSBkZWZhdWx0IHN0YXRlIG9mIGEgbm9kZSBhbmQgaXRzIGNoaWxkcmVuXG5cbmNvbnN0IGlzRnVuY3Rpb24gPSB2ID0+IHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nXG5jb25zdCBnZXRJbml0aWFsU3RhdGUgPSAobywgbnMpID0+IHtcbiAgcmV0dXJuIHJlZHVjZShvLCAocHJldiwgdiwgaykgPT4ge1xuICAgIGlmIChrID09PSAnaW5pdGlhbFN0YXRlJykgcmV0dXJuIHByZXZcbiAgICBjb25zdCBuYW1lID0gbnMgPyBgJHtuc30uJHtrfWAgOiBrXG5cbiAgICBpZiAodHlwZW9mIHYgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoIU1hcC5pc01hcChwcmV2KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlZHVjZXIgXCIke25zIHx8ICdyb290J31cIiBoYXMgYSBub24tbWFwIGluaXRpYWxTdGF0ZSwgc28gaXQgY2FuJ3QgaGF2ZSBjaGlsZHJlbmApXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHByZXYuZ2V0KGspICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlZHVjZXIgXCIke25zIHx8ICdyb290J31cIiBoYXMgYW4gaW5pdGlhbFN0YXRlIGNvbmZsaWN0IHdpdGggaXQncyBwYXJlbnQgb3ZlciBcIiR7a31cImApXG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldi5zZXQoaywgZ2V0SW5pdGlhbFN0YXRlKHYsIG5hbWUpKVxuICAgIH1cbiAgICByZXR1cm4gcHJldlxuICB9LCBvLmluaXRpYWxTdGF0ZSB8fCBNYXAoKSlcbn1cblxuY29uc3QgY3JlYXRlUmVkdWNlck5vZGUgPSAoeyBuYW1lLCBzdGF0ZVBhdGgsIHJlZHVjZXIsIGluaXRpYWxTdGF0ZSB9KSA9PlxuICAoc3RhdGUsIGFjdGlvbiA9IHt9KSA9PiB7XG4gICAgLy8gaWYgd2UgYXJlIHRoZSByZWR1Y2VyIGNvbnRhaW5lciwgcGFzcyB0aGVtIG91ciBjaGVycnktcGlja2VkIHN0YXRlXG4gICAgLy8gb3RoZXJ3aXNlIHBhc3MgZG93biB0aGUgZnVsbCBzdGF0ZSB0byB0aGUgbmV4dCBjb250YWluZXJcbiAgICBjb25zdCBjdXJyTm9kZVN0YXRlID0gKHN0YXRlUGF0aCA/IHN0YXRlLmdldEluKHN0YXRlUGF0aCkgOiBzdGF0ZSkgfHwgaW5pdGlhbFN0YXRlXG4gICAgaWYgKCFJdGVyYWJsZS5pc0l0ZXJhYmxlKGN1cnJOb2RlU3RhdGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlZHVjZXIgXCIke25hbWUgfHwgJ3Jvb3QnfVwiIHdhcyBnaXZlbiBhIG5vbi1JbW11dGFibGUgc3RhdGUhYClcbiAgICB9XG4gICAgY29uc3QgbmV4dE5vZGVTdGF0ZSA9IHJlZHVjZXIoY3Vyck5vZGVTdGF0ZSwgYWN0aW9uKVxuICAgIGlmICghSXRlcmFibGUuaXNJdGVyYWJsZShuZXh0Tm9kZVN0YXRlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZWR1Y2VyIFwiJHtuYW1lIHx8ICdyb290J31cIiByZXR1cm5lZCBhIG5vbi1JbW11dGFibGUgc3RhdGUhYClcbiAgICB9XG4gICAgY29uc3QgbmV4dFJvb3RTdGF0ZSA9IHN0YXRlUGF0aCA/IHN0YXRlLnNldEluKHN0YXRlUGF0aCwgbmV4dE5vZGVTdGF0ZSkgOiBuZXh0Tm9kZVN0YXRlXG5cbiAgICByZXR1cm4gbmV4dFJvb3RTdGF0ZVxuICB9XG5cbi8vIHJlY3Vyc2l2ZWx5IG1hcCByZWR1Y2VycyBvYmplY3QgdG8gYW5cbi8vIGFycmF5IG9mIHJlZHVjZXJzIHRoYXQgaGFuZGxlIG5hbWVzcGFjZWQgYWN0aW9uc1xuY29uc3QgY3JlYXRlUmVkdWNlcnMgPSAobywgcGFyZW50TmFtZSkgPT4ge1xuICBsZXQgaGFkUmVkdWNlcnMgPSBmYWxzZVxuICBjb25zdCByZWR1Y2VycyA9IGZpbHRlcihtYXBWYWx1ZXMobywgKHYsIGspID0+IHtcbiAgICBpZiAoayA9PT0gJ2luaXRpYWxTdGF0ZScpIHJldHVyblxuICAgIGNvbnN0IG5hbWUgPSBwYXJlbnROYW1lID8gYCR7cGFyZW50TmFtZX0uJHtrfWAgOiBrXG5cbiAgICBpZiAoaXNGdW5jdGlvbih2KSkge1xuICAgICAgaGFkUmVkdWNlcnMgPSB0cnVlXG4gICAgICByZXR1cm4gaGFuZGxlQWN0aW9uKG5hbWUsIHYpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2ID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGNyZWF0ZVJlZHVjZXIodiwgbmFtZSlcbiAgICB9XG4gIH0pLCBpc0Z1bmN0aW9uKVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogcGFyZW50TmFtZSxcbiAgICBpc0NvbnRhaW5lcjogaGFkUmVkdWNlcnMsXG4gICAgcmVkdWNlcnM6IHJlZHVjZXJzXG4gIH1cbn1cblxuY29uc3QgY3JlYXRlUmVkdWNlciA9IChvLCBwYXJlbnROYW1lKSA9PiB7XG4gIGNvbnN0IHsgcmVkdWNlcnMsIGlzQ29udGFpbmVyLCBuYW1lIH0gPSBjcmVhdGVSZWR1Y2VycyhvLCBwYXJlbnROYW1lKVxuICBpZiAoaXNDb250YWluZXIgJiYgdHlwZW9mIG8uaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgUmVkdWNlciBcIiR7bmFtZSB8fCAncm9vdCd9XCIgaXMgbWlzc2luZyBhbiBpbml0aWFsU3RhdGVgKVxuICB9XG4gIGlmICghaXNDb250YWluZXIgJiYgdHlwZW9mIG8uaW5pdGlhbFN0YXRlICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgUmVkdWNlciBcIiR7bmFtZSB8fCAncm9vdCd9XCIgaGFzIG5vIHJlZHVjZXJzLCBzbyBpdCBjYW4ndCBzcGVjaWZ5IGFuIGluaXRpYWxTdGF0ZWApXG4gIH1cbiAgY29uc3QgaW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKG8pXG4gIGlmICghSXRlcmFibGUuaXNJdGVyYWJsZShpbml0aWFsU3RhdGUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSZWR1Y2VyIFwiJHtuYW1lIHx8ICdyb290J31cIiBpcyBtaXNzaW5nIGFuIEltbXV0YWJsZSBpbml0aWFsU3RhdGVgKVxuICB9XG5cbiAgY29uc3QgcmVkdWNlciA9IHJlZHVjZVJlZHVjZXJzKC4uLnZhbHVlcyhyZWR1Y2VycykpXG4gIGNvbnN0IHN0YXRlUGF0aCA9IG5hbWUgJiYgaXNDb250YWluZXIgPyBuYW1lLnNwbGl0KCcuJykgOiB1bmRlZmluZWRcbiAgcmV0dXJuIGNyZWF0ZVJlZHVjZXJOb2RlKHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXI6IHJlZHVjZXIsXG4gICAgc3RhdGVQYXRoOiBzdGF0ZVBhdGhcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlclxuIl19