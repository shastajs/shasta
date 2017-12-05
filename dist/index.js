'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = exports.createActions = exports.createReducerActions = exports.createReducer = exports.combineReducers = exports.Provider = exports.PropTypes = exports.connect = exports.Component = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactImmutableProptypes = require('react-immutable-proptypes');

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

var _bindClass = require('./lib/bindClass');

var _bindClass2 = _interopRequireDefault(_bindClass);

var _connect = require('./lib/connect');

var _connect2 = _interopRequireDefault(_connect);

var _createStore = require('./createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _createActions = require('./lib/createActions');

var _createActions2 = _interopRequireDefault(_createActions);

var _createReducer = require('./lib/createReducer');

var _createReducer2 = _interopRequireDefault(_createReducer);

var _createReducerActions = require('./lib/createReducerActions');

var _createReducerActions2 = _interopRequireDefault(_createReducerActions);

var _combineReducers = require('./lib/combineReducers');

var _combineReducers2 = _interopRequireDefault(_combineReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShastaComponent = function (_ReactComponent) {
  (0, _inherits3.default)(ShastaComponent, _ReactComponent);

  function ShastaComponent() {
    (0, _classCallCheck3.default)(this, ShastaComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ShastaComponent.__proto__ || (0, _getPrototypeOf2.default)(ShastaComponent)).apply(this, arguments));

    _this.state = (0, _extends3.default)({}, _this.constructor.defaultState, _this.state);
    (0, _bindClass2.default)(_this);
    return _this;
  }

  return ShastaComponent;
}(_react.Component);

ShastaComponent.defaultState = {};


var PropTypes = (0, _extends3.default)({}, _reactImmutableProptypes2.default, _propTypes2.default);

exports.Component = ShastaComponent;
exports.connect = _connect2.default;
exports.PropTypes = PropTypes;
exports.Provider = _reactRedux.Provider;
exports.combineReducers = _combineReducers2.default;
exports.createReducer = _createReducer2.default;
exports.createReducerActions = _createReducerActions2.default;
exports.createActions = _createActions2.default;
exports.createStore = _createStore2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTaGFzdGFDb21wb25lbnQiLCJhcmd1bWVudHMiLCJzdGF0ZSIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFN0YXRlIiwiUHJvcFR5cGVzIiwiQ29tcG9uZW50IiwiY29ubmVjdCIsIlByb3ZpZGVyIiwiY29tYmluZVJlZHVjZXJzIiwiY3JlYXRlUmVkdWNlciIsImNyZWF0ZVJlZHVjZXJBY3Rpb25zIiwiY3JlYXRlQWN0aW9ucyIsImNyZWF0ZVN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxlOzs7QUFFSiw2QkFBYztBQUFBOztBQUFBLHlKQUNIQyxTQURHOztBQUVaLFVBQUtDLEtBQUwsOEJBQ0ssTUFBS0MsV0FBTCxDQUFpQkMsWUFEdEIsRUFFSyxNQUFLRixLQUZWO0FBSUE7QUFOWTtBQU9iOzs7OztBQVRHRixlLENBQ0dJLFksR0FBZSxFOzs7QUFXeEIsSUFBTUMsOEZBQU47O1FBTXFCQyxTLEdBQW5CTixlO1FBQ0FPLE87UUFDQUYsUyxHQUFBQSxTO1FBQ0FHLFE7UUFDQUMsZTtRQUNBQyxhO1FBQ0FDLG9CO1FBQ0FDLGE7UUFDQUMsVyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCBhcyBSZWFjdENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgSVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJ1xuaW1wb3J0IGJpbmRDbGFzcyBmcm9tICcuL2xpYi9iaW5kQ2xhc3MnXG5pbXBvcnQgY29ubmVjdCBmcm9tICcuL2xpYi9jb25uZWN0J1xuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4vY3JlYXRlU3RvcmUnXG5pbXBvcnQgY3JlYXRlQWN0aW9ucyBmcm9tICcuL2xpYi9jcmVhdGVBY3Rpb25zJ1xuaW1wb3J0IGNyZWF0ZVJlZHVjZXIgZnJvbSAnLi9saWIvY3JlYXRlUmVkdWNlcidcbmltcG9ydCBjcmVhdGVSZWR1Y2VyQWN0aW9ucyBmcm9tICcuL2xpYi9jcmVhdGVSZWR1Y2VyQWN0aW9ucydcbmltcG9ydCBjb21iaW5lUmVkdWNlcnMgZnJvbSAnLi9saWIvY29tYmluZVJlZHVjZXJzJ1xuXG5jbGFzcyBTaGFzdGFDb21wb25lbnQgZXh0ZW5kcyBSZWFjdENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0U3RhdGUgPSB7fTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRTdGF0ZSxcbiAgICAgIC4uLnRoaXMuc3RhdGVcbiAgICB9XG4gICAgYmluZENsYXNzKHRoaXMpXG4gIH1cbn1cblxuY29uc3QgUHJvcFR5cGVzID0ge1xuICAuLi5JUHJvcFR5cGVzLFxuICAuLi5SUHJvcFR5cGVzXG59XG5cbmV4cG9ydCB7XG4gIFNoYXN0YUNvbXBvbmVudCBhcyBDb21wb25lbnQsXG4gIGNvbm5lY3QsXG4gIFByb3BUeXBlcyxcbiAgUHJvdmlkZXIsXG4gIGNvbWJpbmVSZWR1Y2VycyxcbiAgY3JlYXRlUmVkdWNlcixcbiAgY3JlYXRlUmVkdWNlckFjdGlvbnMsXG4gIGNyZWF0ZUFjdGlvbnMsXG4gIGNyZWF0ZVN0b3JlXG59XG4iXX0=