'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createActions = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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
  if (typeof actions === 'function') {
    var _ret = function () {
      var fn = function fn() {
        var action = actions.apply(undefined, arguments);
        dispatch(action);
        return action;
      };
      (0, _keys2.default)(actions).forEach(function (k) {
        fn[k] = actions[k];
      });
      return {
        v: fn
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
  }

  // iterate through objects and do mapping
  return (0, _lodash2.default)(actions, function (actions) {
    return createActions(actions, dispatch);
  });
};

exports.default = createActions;