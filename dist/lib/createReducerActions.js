'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _lodash = require('lodash.reduce');

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = require('redux-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint no-console: 0*/

var createReducerActions = function createReducerActions(o, ns) {
  if ((typeof o === 'undefined' ? 'undefined' : (0, _typeof3.default)(o)) !== 'object') {
    throw new Error('Passed an invalid reducer config - must be an object');
  }
  return (0, _lodash2.default)(o, function (prev, v, k) {
    if (k === 'initialState') return prev;
    var name = ns ? ns + '.' + k : k;

    if (typeof v === 'function') {
      prev[k] = (0, _reduxActions.createAction)(name);
      return prev;
    }

    if ((typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) === 'object') {
      prev[k] = createReducerActions(v, name);
      return prev;
    }

    return prev;
  }, {});
};

exports.default = createReducerActions;
module.exports = exports['default'];