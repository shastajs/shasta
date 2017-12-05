'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _lodash = require('lodash.reduce');

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = require('redux-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint no-console: 0*/

var createReducerActions = function createReducerActions(o, ns) {
  if ((typeof o === 'undefined' ? 'undefined' : (0, _typeof3.default)(o)) !== 'object') {
    throw new Error('Passed an invalid reducer config - must be an object');
  }
  return (0, _lodash2.default)(o, function (prev, v, k) {
    if (k === 'initialState') return prev;
    var name = ns ? ns + '.' + k : k;

    if (typeof v === 'function') {
      prev[k] = (0, _reduxActions.createAction)(name);
      return prev;
    }

    if ((typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) === 'object') {
      prev[k] = createReducerActions(v, name);
      return prev;
    }

    return prev;
  }, {});
};

exports.default = createReducerActions;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY3JlYXRlUmVkdWNlckFjdGlvbnMuanMiXSwibmFtZXMiOlsiY3JlYXRlUmVkdWNlckFjdGlvbnMiLCJvIiwibnMiLCJFcnJvciIsInByZXYiLCJ2IiwiayIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBSEE7O0FBS0EsSUFBTUEsdUJBQXVCLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsQ0FBRCxFQUFJQyxFQUFKLEVBQVc7QUFDdEMsTUFBSSxRQUFPRCxDQUFQLHVEQUFPQSxDQUFQLE9BQWEsUUFBakIsRUFBMkI7QUFDekIsVUFBTSxJQUFJRSxLQUFKLENBQVUsc0RBQVYsQ0FBTjtBQUNEO0FBQ0QsU0FBTyxzQkFBT0YsQ0FBUCxFQUFVLFVBQUNHLElBQUQsRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWdCO0FBQy9CLFFBQUlBLE1BQU0sY0FBVixFQUEwQixPQUFPRixJQUFQO0FBQzFCLFFBQU1HLE9BQU9MLEtBQVFBLEVBQVIsU0FBY0ksQ0FBZCxHQUFvQkEsQ0FBakM7O0FBRUEsUUFBSSxPQUFPRCxDQUFQLEtBQWEsVUFBakIsRUFBNkI7QUFDM0JELFdBQUtFLENBQUwsSUFBVSxnQ0FBYUMsSUFBYixDQUFWO0FBQ0EsYUFBT0gsSUFBUDtBQUNEOztBQUVELFFBQUksUUFBT0MsQ0FBUCx1REFBT0EsQ0FBUCxPQUFhLFFBQWpCLEVBQTJCO0FBQ3pCRCxXQUFLRSxDQUFMLElBQVVOLHFCQUFxQkssQ0FBckIsRUFBd0JFLElBQXhCLENBQVY7QUFDQSxhQUFPSCxJQUFQO0FBQ0Q7O0FBRUQsV0FBT0EsSUFBUDtBQUNELEdBZk0sRUFlSixFQWZJLENBQVA7QUFnQkQsQ0FwQkQ7O2tCQXNCZUosb0IiLCJmaWxlIjoiY3JlYXRlUmVkdWNlckFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmVzbGludCBuby1jb25zb2xlOiAwKi9cblxuaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gucmVkdWNlJ1xuaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcblxuY29uc3QgY3JlYXRlUmVkdWNlckFjdGlvbnMgPSAobywgbnMpID0+IHtcbiAgaWYgKHR5cGVvZiBvICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFzc2VkIGFuIGludmFsaWQgcmVkdWNlciBjb25maWcgLSBtdXN0IGJlIGFuIG9iamVjdCcpXG4gIH1cbiAgcmV0dXJuIHJlZHVjZShvLCAocHJldiwgdiwgaykgPT4ge1xuICAgIGlmIChrID09PSAnaW5pdGlhbFN0YXRlJykgcmV0dXJuIHByZXZcbiAgICBjb25zdCBuYW1lID0gbnMgPyBgJHtuc30uJHtrfWAgOiBrXG5cbiAgICBpZiAodHlwZW9mIHYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByZXZba10gPSBjcmVhdGVBY3Rpb24obmFtZSlcbiAgICAgIHJldHVybiBwcmV2XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2ID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJldltrXSA9IGNyZWF0ZVJlZHVjZXJBY3Rpb25zKHYsIG5hbWUpXG4gICAgICByZXR1cm4gcHJldlxuICAgIH1cblxuICAgIHJldHVybiBwcmV2XG4gIH0sIHt9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyQWN0aW9uc1xuIl19