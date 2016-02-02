'use strict';

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (c) {
  return (0, _getOwnPropertyNames2.default)(c.constructor.prototype).filter(function (prop) {
    return typeof c[prop] === 'function' && prop !== 'constructor';
  }).forEach(function (method) {
    return c[method] = c[method].bind(c);
  });
};

module.exports = exports['default'];