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