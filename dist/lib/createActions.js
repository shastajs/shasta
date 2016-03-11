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
var createActions = exports.createActions = function createActions(actions, dispatch) {
  if (typeof dispatch !== 'function') throw new Error('Missing dispatch argument in createActions');

  // map string to a fn and pass back through
  if (typeof actions === 'string') return createActions((0, _reduxActions.createAction)(actions), dispatch);

  // wrap function in a dispatch
  if (typeof actions === 'function') return function () {
    var action = actions.apply(undefined, arguments);
    dispatch(action);
    return action;
  };

  // iterate through objects and do mapping
  return (0, _lodash2.default)(actions, function (actions) {
    return createActions(actions, dispatch);
  });
};

exports.default = createActions;