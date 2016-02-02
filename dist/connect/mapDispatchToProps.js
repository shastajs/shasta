'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindActions = require('../lib/bindActions');

var _bindActions2 = _interopRequireDefault(_bindActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var creators = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  return function (dispatch) {
    return {
      actions: (0, _bindActions2.default)(creators, dispatch)
    };
  };
};

module.exports = exports['default'];