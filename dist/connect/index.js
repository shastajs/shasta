'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _mapStateToProps = require('./mapStateToProps');

var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);

var _mapDispatchToProps = require('./mapDispatchToProps');

var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  pure: true,
  withRef: true
};

exports.default = function (view, actions) {
  if (!view) {
    throw new Error('Missing view argument in connect(view, actions)');
  }
  if (!actions) {
    throw new Error('Missing actions argument in connect(view, actions)');
  }
  return (0, _reactRedux.connect)((0, _mapStateToProps2.default)(view), (0, _mapDispatchToProps2.default)(actions), null, options)(view);
};

module.exports = exports['default'];