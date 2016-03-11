'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.default = function (storeProps) {
  var connector = (0, _reactRedux.connect)(storeProps ? mapStateToProps(storeProps) : null, null, null, options);
  return function (Component) {
    Component.storeProps = storeProps;
    return connector(Component);
  };
};

module.exports = exports['default'];