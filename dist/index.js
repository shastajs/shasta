'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = exports.createActions = exports.createReducer = exports.combineReducers = exports.Provider = exports.PropTypes = exports.Component = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _reactRedux = require('react-redux');

var _reactImmutableProptypes = require('react-immutable-proptypes');

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

var _bindClass = require('./lib/bindClass');

var _bindClass2 = _interopRequireDefault(_bindClass);

var _connect = require('./connect');

var _connect2 = _interopRequireDefault(_connect);

var _createStore = require('./createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _createActions = require('./lib/createActions');

var _createActions2 = _interopRequireDefault(_createActions);

var _createReducer = require('./lib/createReducer');

var _createReducer2 = _interopRequireDefault(_createReducer);

var _combineReducers = require('./lib/combineReducers');

var _combineReducers2 = _interopRequireDefault(_combineReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShastaComponent = function (_Component) {
  (0, _inherits3.default)(ShastaComponent, _Component);

  function ShastaComponent() {
    (0, _classCallCheck3.default)(this, ShastaComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ShastaComponent).apply(this, arguments));

    _this.state = (0, _extends3.default)({}, _this.constructor.defaultState, _this.state);
    (0, _bindClass2.default)(_this);
    return _this;
  }

  // sugar accessors


  (0, _createClass3.default)(ShastaComponent, [{
    key: 'actions',
    get: function get() {
      return this.props.actions;
    }
  }]);
  return ShastaComponent;
}(_react.Component);

ShastaComponent.propTypes = {
  actions: _react.PropTypes.object.isRequired
};
ShastaComponent.connect = _connect2.default;
ShastaComponent.defaultState = {};


var PropTypes = (0, _extends3.default)({}, _react.PropTypes, _reactImmutableProptypes2.default);

exports.Component = ShastaComponent;
exports.PropTypes = PropTypes;
exports.Provider = _reactRedux.Provider;
exports.combineReducers = _combineReducers2.default;
exports.createReducer = _createReducer2.default;
exports.createActions = _createActions2.default;
exports.createStore = _createStore2.default;