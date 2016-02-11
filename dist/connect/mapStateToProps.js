'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resolveStoreProps = require('../lib/resolveStoreProps');

var _resolveStoreProps2 = _interopRequireDefault(_resolveStoreProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (view) {
  return function (storeState, ownProps) {
    // nothing to do
    if (!view.storeProps) return {};
    return (0, _resolveStoreProps2.default)(view.storeProps, storeState, ownProps);
  };
};

module.exports = exports['default'];