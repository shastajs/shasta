'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createActions = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _reduxActions = require('redux-actions');

var _lodash = require('lodash.mapvalues');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// equiv of redux createAction but recursive
var createActions = exports.createActions = function createActions(actions, dispatch) {
  if (typeof dispatch !== 'function') throw new Error('Missing dispatch argument in createActions');

  // map string to a fn and pass back through
  if (typeof actions === 'string') return createActions((0, _reduxActions.createAction)(actions), dispatch);

  // wrap function in a dispatch
  if (typeof actions === 'function') {
    var fn = function fn() {
      var action = actions.apply(undefined, arguments);
      dispatch(action);
      return action;
    };
    (0, _keys2.default)(actions).forEach(function (k) {
      fn[k] = actions[k];
    });
    return fn;
  }

  // iterate through objects and do mapping
  return (0, _lodash2.default)(actions, function (actions) {
    return createActions(actions, dispatch);
  });
};

exports.default = createActions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY3JlYXRlQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVBY3Rpb25zIiwiYWN0aW9ucyIsImRpc3BhdGNoIiwiRXJyb3IiLCJmbiIsImFjdGlvbiIsImZvckVhY2giLCJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQTtBQUNPLElBQU1BLHdDQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsT0FBRCxFQUFVQyxRQUFWLEVBQXVCO0FBQ2xELE1BQUksT0FBT0EsUUFBUCxLQUFvQixVQUF4QixFQUFvQyxNQUFNLElBQUlDLEtBQUosQ0FBVSw0Q0FBVixDQUFOOztBQUVwQztBQUNBLE1BQUksT0FBT0YsT0FBUCxLQUFtQixRQUF2QixFQUFpQyxPQUFPRCxjQUFjLGdDQUFhQyxPQUFiLENBQWQsRUFBcUNDLFFBQXJDLENBQVA7O0FBRWpDO0FBQ0EsTUFBSSxPQUFPRCxPQUFQLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ2pDLFFBQU1HLEtBQUssU0FBTEEsRUFBSyxHQUFhO0FBQ3RCLFVBQU1DLFNBQVNKLG1DQUFmO0FBQ0FDLGVBQVNHLE1BQVQ7QUFDQSxhQUFPQSxNQUFQO0FBQ0QsS0FKRDtBQUtBLHdCQUFZSixPQUFaLEVBQXFCSyxPQUFyQixDQUE2QixVQUFDQyxDQUFELEVBQU87QUFDbENILFNBQUdHLENBQUgsSUFBUU4sUUFBUU0sQ0FBUixDQUFSO0FBQ0QsS0FGRDtBQUdBLFdBQU9ILEVBQVA7QUFDRDs7QUFFRDtBQUNBLFNBQU8sc0JBQVVILE9BQVYsRUFBbUIsVUFBQ0EsT0FBRDtBQUFBLFdBQ3hCRCxjQUFjQyxPQUFkLEVBQXVCQyxRQUF2QixDQUR3QjtBQUFBLEdBQW5CLENBQVA7QUFHRCxDQXZCTTs7a0JBeUJRRixhIiwiZmlsZSI6ImNyZWF0ZUFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuaW1wb3J0IG1hcFZhbHVlcyBmcm9tICdsb2Rhc2gubWFwdmFsdWVzJ1xuXG4vLyBlcXVpdiBvZiByZWR1eCBjcmVhdGVBY3Rpb24gYnV0IHJlY3Vyc2l2ZVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFjdGlvbnMgPSAoYWN0aW9ucywgZGlzcGF0Y2gpID0+IHtcbiAgaWYgKHR5cGVvZiBkaXNwYXRjaCAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGRpc3BhdGNoIGFyZ3VtZW50IGluIGNyZWF0ZUFjdGlvbnMnKVxuXG4gIC8vIG1hcCBzdHJpbmcgdG8gYSBmbiBhbmQgcGFzcyBiYWNrIHRocm91Z2hcbiAgaWYgKHR5cGVvZiBhY3Rpb25zID09PSAnc3RyaW5nJykgcmV0dXJuIGNyZWF0ZUFjdGlvbnMoY3JlYXRlQWN0aW9uKGFjdGlvbnMpLCBkaXNwYXRjaClcblxuICAvLyB3cmFwIGZ1bmN0aW9uIGluIGEgZGlzcGF0Y2hcbiAgaWYgKHR5cGVvZiBhY3Rpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgZm4gPSAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9ucyguLi5hcmdzKVxuICAgICAgZGlzcGF0Y2goYWN0aW9uKVxuICAgICAgcmV0dXJuIGFjdGlvblxuICAgIH1cbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBmbltrXSA9IGFjdGlvbnNba11cbiAgICB9KVxuICAgIHJldHVybiBmblxuICB9XG5cbiAgLy8gaXRlcmF0ZSB0aHJvdWdoIG9iamVjdHMgYW5kIGRvIG1hcHBpbmdcbiAgcmV0dXJuIG1hcFZhbHVlcyhhY3Rpb25zLCAoYWN0aW9ucykgPT5cbiAgICBjcmVhdGVBY3Rpb25zKGFjdGlvbnMsIGRpc3BhdGNoKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFjdGlvbnNcbiJdfQ==