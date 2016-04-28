'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reactRedux = require('react-redux');

var _resolveStoreProps = require('./resolveStoreProps');

var _resolveStoreProps2 = _interopRequireDefault(_resolveStoreProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(storeProps) {
  return function (storeState, ownProps) {
    return (0, _resolveStoreProps2.default)(storeProps, storeState, ownProps);
  };
};

var options = {
  pure: true,
  withRef: true
};

exports.default = function (storeProps, opts) {
  var connector = (0, _reactRedux.connect)(storeProps ? mapStateToProps(storeProps) : null, null, null, (0, _extends3.default)({}, options, opts));
  return function (Component) {
    Component.storeProps = storeProps;
    return connector(Component);
  };
};

module.exports = exports['default'];