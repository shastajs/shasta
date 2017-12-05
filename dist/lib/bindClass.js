'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (c) {
  return (0, _getOwnPropertyNames2.default)(c.constructor.prototype).filter(function (prop) {
    return typeof c[prop] === 'function' && prop !== 'constructor';
  }).forEach(function (method) {
    return c[method] = c[method].bind(c);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvYmluZENsYXNzLmpzIl0sIm5hbWVzIjpbImMiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImZpbHRlciIsInByb3AiLCJmb3JFYWNoIiwibWV0aG9kIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O2tCQUFlLFVBQUNBLENBQUQ7QUFBQSxTQUNiLG1DQUEyQkEsRUFBRUMsV0FBRixDQUFjQyxTQUF6QyxFQUNHQyxNQURILENBQ1UsVUFBQ0MsSUFBRDtBQUFBLFdBQVUsT0FBT0osRUFBRUksSUFBRixDQUFQLEtBQW1CLFVBQW5CLElBQWlDQSxTQUFTLGFBQXBEO0FBQUEsR0FEVixFQUVHQyxPQUZILENBRVcsVUFBQ0MsTUFBRDtBQUFBLFdBQVlOLEVBQUVNLE1BQUYsSUFBWU4sRUFBRU0sTUFBRixFQUFVQyxJQUFWLENBQWVQLENBQWYsQ0FBeEI7QUFBQSxHQUZYLENBRGE7QUFBQSxDIiwiZmlsZSI6ImJpbmRDbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChjKSA9PlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjLmNvbnN0cnVjdG9yLnByb3RvdHlwZSlcbiAgICAuZmlsdGVyKChwcm9wKSA9PiB0eXBlb2YgY1twcm9wXSA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wICE9PSAnY29uc3RydWN0b3InKVxuICAgIC5mb3JFYWNoKChtZXRob2QpID0+IGNbbWV0aG9kXSA9IGNbbWV0aG9kXS5iaW5kKGMpKVxuIl19