'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash.mapvalues');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLookupKey = function getLookupKey(o, k, args) {
  if (Array.isArray(k)) return k;
  if (typeof k === 'function') return getLookupKey(o, k.apply(undefined, (0, _toConsumableArray3.default)(args)), args);
  if (typeof k === 'string') return k.split('.');
  throw new Error('Unknown lookup key: ' + k);
};
// supports array of strings, strings with dot, or function
var lookup = function lookup(o, k, args) {
  return o.getIn(getLookupKey(o, k, args));
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