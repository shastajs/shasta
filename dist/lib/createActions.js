'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createActions = undefined;

var _reduxActions = require('redux-actions');

var _lodash = require('lodash.mapvalues');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// equiv of redux createAction but recursive
var createActions = exports.createActions = function createActions(actions) {
  if (typeof actions === 'string') return (0, _reduxActions.createAction)(actions);
  if (typeof actions === 'function') return actions;
  return (0, _lodash2.default)(actions, createActions);
};

exports.default = createActions;