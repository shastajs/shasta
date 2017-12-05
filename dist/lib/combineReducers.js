'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _reduxImmutablejs = require('redux-immutablejs');

var _lodash = require('lodash.map');

var _lodash2 = _interopRequireDefault(_lodash);

var _reduceReducers = require('reduce-reducers');

var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var combine = function combine() {
  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
    reducers[_key] = arguments[_key];
  }

  return _reduceReducers2.default.apply(undefined, (0, _toConsumableArray3.default)((0, _lodash2.default)(reducers, function (v) {
    return typeof v === 'function' ? v : (0, _reduxImmutablejs.combineReducers)(v);
  })));
};

exports.default = combine;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY29tYmluZVJlZHVjZXJzLmpzIl0sIm5hbWVzIjpbImNvbWJpbmUiLCJyZWR1Y2VycyIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVU7QUFBQSxvQ0FBSUMsUUFBSjtBQUFJQSxZQUFKO0FBQUE7O0FBQUEsU0FDZCwyRUFBa0Isc0JBQUlBLFFBQUosRUFBYyxVQUFDQyxDQUFEO0FBQUEsV0FDOUIsT0FBT0EsQ0FBUCxLQUFhLFVBQWIsR0FBMEJBLENBQTFCLEdBQThCLHVDQUFnQkEsQ0FBaEIsQ0FEQTtBQUFBLEdBQWQsQ0FBbEIsRUFEYztBQUFBLENBQWhCOztrQkFLZUYsTyIsImZpbGUiOiJjb21iaW5lUmVkdWNlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eC1pbW11dGFibGVqcydcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoLm1hcCdcbmltcG9ydCByZWR1Y2VSZWR1Y2VycyBmcm9tICdyZWR1Y2UtcmVkdWNlcnMnXG5cbmNvbnN0IGNvbWJpbmUgPSAoLi4ucmVkdWNlcnMpID0+XG4gIHJlZHVjZVJlZHVjZXJzKC4uLm1hcChyZWR1Y2VycywgKHYpID0+XG4gICAgdHlwZW9mIHYgPT09ICdmdW5jdGlvbicgPyB2IDogY29tYmluZVJlZHVjZXJzKHYpXG4gICkpXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVcbiJdfQ==