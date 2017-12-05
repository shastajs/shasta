'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _reactRedux = require('react-redux');

var _resolveStoreProps = require('./resolveStoreProps');

var _resolveStoreProps2 = _interopRequireDefault(_resolveStoreProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(storeProps) {
  return function (storeState, ownProps) {
    return (0, _resolveStoreProps2.default)(storeProps, storeState, ownProps);
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  return (0, _assign2.default)({}, stateProps, dispatchProps, ownProps);
};

var options = {
  pure: true,
  withRef: true
};

exports.default = function (storeProps, opts) {
  var connector = (0, _reactRedux.connect)(storeProps ? mapStateToProps(storeProps) : null, null, mergeProps, (0, _extends3.default)({}, options, opts));
  return function (Component) {
    Component.storeProps = storeProps;
    return connector(Component);
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY29ubmVjdC5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZVByb3BzIiwic3RvcmVTdGF0ZSIsIm93blByb3BzIiwibWVyZ2VQcm9wcyIsInN0YXRlUHJvcHMiLCJkaXNwYXRjaFByb3BzIiwib3B0aW9ucyIsInB1cmUiLCJ3aXRoUmVmIiwib3B0cyIsImNvbm5lY3RvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxVQUFEO0FBQUEsU0FBZ0IsVUFBQ0MsVUFBRCxFQUFhQyxRQUFiO0FBQUEsV0FDdEMsaUNBQVFGLFVBQVIsRUFBb0JDLFVBQXBCLEVBQWdDQyxRQUFoQyxDQURzQztBQUFBLEdBQWhCO0FBQUEsQ0FBeEI7O0FBR0EsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLENBQUNDLFVBQUQsRUFBYUMsYUFBYixFQUE0QkgsUUFBNUI7QUFBQSxTQUNqQixzQkFBYyxFQUFkLEVBQWtCRSxVQUFsQixFQUE4QkMsYUFBOUIsRUFBNkNILFFBQTdDLENBRGlCO0FBQUEsQ0FBbkI7O0FBR0EsSUFBTUksVUFBVTtBQUNkQyxRQUFNLElBRFE7QUFFZEMsV0FBUztBQUZLLENBQWhCOztrQkFLZSxVQUFDUixVQUFELEVBQWFTLElBQWIsRUFBc0I7QUFDbkMsTUFBTUMsWUFBWSx5QkFDaEJWLGFBQWFELGdCQUFnQkMsVUFBaEIsQ0FBYixHQUEyQyxJQUQzQixFQUVoQixJQUZnQixFQUdoQkcsVUFIZ0IsNkJBSVhHLE9BSlcsRUFJQ0csSUFKRCxFQUFsQjtBQU1BLFNBQU8sVUFBQ0UsU0FBRCxFQUFlO0FBQ3BCQSxjQUFVWCxVQUFWLEdBQXVCQSxVQUF2QjtBQUNBLFdBQU9VLFVBQVVDLFNBQVYsQ0FBUDtBQUNELEdBSEQ7QUFJRCxDIiwiZmlsZSI6ImNvbm5lY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgcmVzb2x2ZSBmcm9tICcuL3Jlc29sdmVTdG9yZVByb3BzJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmVQcm9wcykgPT4gKHN0b3JlU3RhdGUsIG93blByb3BzKSA9PlxuICByZXNvbHZlKHN0b3JlUHJvcHMsIHN0b3JlU3RhdGUsIG93blByb3BzKVxuXG5jb25zdCBtZXJnZVByb3BzID0gKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSA9PlxuICBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcylcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgcHVyZTogdHJ1ZSxcbiAgd2l0aFJlZjogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RvcmVQcm9wcywgb3B0cykgPT4ge1xuICBjb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KFxuICAgIHN0b3JlUHJvcHMgPyBtYXBTdGF0ZVRvUHJvcHMoc3RvcmVQcm9wcykgOiBudWxsLFxuICAgIG51bGwsXG4gICAgbWVyZ2VQcm9wcyxcbiAgICB7IC4uLm9wdGlvbnMsIC4uLm9wdHMgfVxuICApXG4gIHJldHVybiAoQ29tcG9uZW50KSA9PiB7XG4gICAgQ29tcG9uZW50LnN0b3JlUHJvcHMgPSBzdG9yZVByb3BzXG4gICAgcmV0dXJuIGNvbm5lY3RvcihDb21wb25lbnQpXG4gIH1cbn1cbiJdfQ==