'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _lodash = require('lodash.mapvalues');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// supports array of strings, strings with dot, or function
var lookup = function lookup(o, k, args) {
  if (typeof k === 'function') return k.apply(undefined, (0, _toConsumableArray3.default)(args));
  if (typeof k === 'string') return o.getIn(k.split('.'));
  if (Array.isArray(k)) return o.getIn(k);
  throw new Error('Unknown lookup key: ' + k);
};

// takes an object where key is anything you want
// and value (aka storeProp) is either
// - a dot delimited string
// - array of strings
// - function that returns an array of strings
// it will then dive into an immutable object and grab all of these storeProps
// and return the same object, but where the values are the resolved data

exports.default = function (storeProps, storeState, props) {
  return (0, _lodash2.default)(storeProps, function (v) {
    return lookup(storeState, v, [storeState, props]);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvcmVzb2x2ZVN0b3JlUHJvcHMuanMiXSwibmFtZXMiOlsibG9va3VwIiwibyIsImsiLCJhcmdzIiwiZ2V0SW4iLCJzcGxpdCIsIkFycmF5IiwiaXNBcnJheSIsIkVycm9yIiwic3RvcmVQcm9wcyIsInN0b3JlU3RhdGUiLCJwcm9wcyIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLElBQVAsRUFBZ0I7QUFDN0IsTUFBSSxPQUFPRCxDQUFQLEtBQWEsVUFBakIsRUFBNkIsT0FBT0Esb0RBQUtDLElBQUwsRUFBUDtBQUM3QixNQUFJLE9BQU9ELENBQVAsS0FBYSxRQUFqQixFQUEyQixPQUFPRCxFQUFFRyxLQUFGLENBQVFGLEVBQUVHLEtBQUYsQ0FBUSxHQUFSLENBQVIsQ0FBUDtBQUMzQixNQUFJQyxNQUFNQyxPQUFOLENBQWNMLENBQWQsQ0FBSixFQUFzQixPQUFPRCxFQUFFRyxLQUFGLENBQVFGLENBQVIsQ0FBUDtBQUN0QixRQUFNLElBQUlNLEtBQUosMEJBQWlDTixDQUFqQyxDQUFOO0FBQ0QsQ0FMRDs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7a0JBQ2UsVUFBQ08sVUFBRCxFQUFhQyxVQUFiLEVBQXlCQyxLQUF6QjtBQUFBLFNBQ2Isc0JBQVVGLFVBQVYsRUFBc0IsVUFBQ0csQ0FBRDtBQUFBLFdBQ3BCWixPQUFPVSxVQUFQLEVBQW1CRSxDQUFuQixFQUFzQixDQUFFRixVQUFGLEVBQWNDLEtBQWQsQ0FBdEIsQ0FEb0I7QUFBQSxHQUF0QixDQURhO0FBQUEsQyIsImZpbGUiOiJyZXNvbHZlU3RvcmVQcm9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXBWYWx1ZXMgZnJvbSAnbG9kYXNoLm1hcHZhbHVlcydcblxuLy8gc3VwcG9ydHMgYXJyYXkgb2Ygc3RyaW5ncywgc3RyaW5ncyB3aXRoIGRvdCwgb3IgZnVuY3Rpb25cbmNvbnN0IGxvb2t1cCA9IChvLCBrLCBhcmdzKSA9PiB7XG4gIGlmICh0eXBlb2YgayA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGsoLi4uYXJncylcbiAgaWYgKHR5cGVvZiBrID09PSAnc3RyaW5nJykgcmV0dXJuIG8uZ2V0SW4oay5zcGxpdCgnLicpKVxuICBpZiAoQXJyYXkuaXNBcnJheShrKSkgcmV0dXJuIG8uZ2V0SW4oaylcbiAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGxvb2t1cCBrZXk6ICR7a31gKVxufVxuXG4vLyB0YWtlcyBhbiBvYmplY3Qgd2hlcmUga2V5IGlzIGFueXRoaW5nIHlvdSB3YW50XG4vLyBhbmQgdmFsdWUgKGFrYSBzdG9yZVByb3ApIGlzIGVpdGhlclxuLy8gLSBhIGRvdCBkZWxpbWl0ZWQgc3RyaW5nXG4vLyAtIGFycmF5IG9mIHN0cmluZ3Ncbi8vIC0gZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIHN0cmluZ3Ncbi8vIGl0IHdpbGwgdGhlbiBkaXZlIGludG8gYW4gaW1tdXRhYmxlIG9iamVjdCBhbmQgZ3JhYiBhbGwgb2YgdGhlc2Ugc3RvcmVQcm9wc1xuLy8gYW5kIHJldHVybiB0aGUgc2FtZSBvYmplY3QsIGJ1dCB3aGVyZSB0aGUgdmFsdWVzIGFyZSB0aGUgcmVzb2x2ZWQgZGF0YVxuZXhwb3J0IGRlZmF1bHQgKHN0b3JlUHJvcHMsIHN0b3JlU3RhdGUsIHByb3BzKSA9PlxuICBtYXBWYWx1ZXMoc3RvcmVQcm9wcywgKHYpID0+XG4gICAgbG9va3VwKHN0b3JlU3RhdGUsIHYsIFsgc3RvcmVTdGF0ZSwgcHJvcHMgXSlcbiAgKVxuIl19