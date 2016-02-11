'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash.mapvalues');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// equiv of redux bindActionCreators but recursive
var bindActionCreators = function bindActionCreators(actions, dispatch) {
  if (typeof actions === 'function') {
    return function () {
      return dispatch(actions.apply(undefined, arguments));
    };
  }
  return (0, _lodash2.default)(actions, function (v) {
    return bindActionCreators(v, dispatch);
  });
};

exports.default = bindActionCreators;
module.exports = exports['default'];