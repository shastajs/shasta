'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _lodash = require('lodash.reduce');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (plugins) {
  if (!Array.isArray(plugins)) throw new Error('Invalid plugins argument');
  return (0, _lodash2.default)(plugins, function (p, v, k) {
    if ((typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) !== 'object') {
      throw new Error('Invalid export in plugin ' + k);
    }

    // grab the reducer out of it
    if (typeof v.reducer === 'function') {
      p.reducers.push(v.reducer);
    } else if (typeof v.reducer !== 'undefined') {
      throw new Error('Invalid "reducer" export in plugin ' + k);
    }

    if (Array.isArray(v.reducers)) {
      p.reducers = p.reducers.concat(v.reducers);
    } else if ((0, _typeof3.default)(v.reducers) === 'object') {
      p.reducers.push(v.reducers);
    }

    // grab any middleware
    if (typeof v.middleware === 'function') {
      p.middleware.push(v.middleware);
    } else if (Array.isArray(v.middleware)) {
      p.middleware = p.middleware.concat(v.middleware);
    } else if (typeof v.middleware !== 'undefined') {
      throw new Error('Invalid "middleware" export in plugin ' + k);
    }

    // grab any enhancers
    if (typeof v.enhancer === 'function') {
      p.enhancers.push(v.enhancer);
    } else if (typeof v.enhancer !== 'undefined') {
      throw new Error('Invalid "enhancer" export in plugin ' + k);
    }
    if (Array.isArray(v.enhancers)) {
      p.enhancers = p.enhancers.concat(v.enhancers);
    } else if (typeof v.enhancers !== 'undefined') {
      throw new Error('Invalid "enhancers" export in plugin ' + k);
    }

    // grab any hooks
    if (typeof v.hook === 'function') {
      p.hooks.push(v.hook);
    } else if (typeof v.hook !== 'undefined') {
      throw new Error('Invalid "hook" export in plugin ' + k);
    }
    if (Array.isArray(v.hooks)) {
      p.hooks = p.enhancers.concat(v.hooks);
    } else if (typeof v.hooks !== 'undefined') {
      throw new Error('Invalid "hooks" export in plugin ' + k);
    }

    return p;
  }, {
    reducers: [],
    middleware: [],
    enhancers: [],
    hooks: []
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdHJhbnNmb3JtUGx1Z2lucy5qcyJdLCJuYW1lcyI6WyJwbHVnaW5zIiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJwIiwidiIsImsiLCJyZWR1Y2VyIiwicmVkdWNlcnMiLCJwdXNoIiwiY29uY2F0IiwibWlkZGxld2FyZSIsImVuaGFuY2VyIiwiZW5oYW5jZXJzIiwiaG9vayIsImhvb2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFFZSxVQUFDQSxPQUFELEVBQWE7QUFDMUIsTUFBSSxDQUFDQyxNQUFNQyxPQUFOLENBQWNGLE9BQWQsQ0FBTCxFQUE2QixNQUFNLElBQUlHLEtBQUosQ0FBVSwwQkFBVixDQUFOO0FBQzdCLFNBQU8sc0JBQU9ILE9BQVAsRUFBZ0IsVUFBQ0ksQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBYTtBQUNsQyxRQUFJLFFBQU9ELENBQVAsdURBQU9BLENBQVAsT0FBYSxRQUFqQixFQUEyQjtBQUN6QixZQUFNLElBQUlGLEtBQUosK0JBQXNDRyxDQUF0QyxDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJLE9BQU9ELEVBQUVFLE9BQVQsS0FBcUIsVUFBekIsRUFBcUM7QUFDbkNILFFBQUVJLFFBQUYsQ0FBV0MsSUFBWCxDQUFnQkosRUFBRUUsT0FBbEI7QUFDRCxLQUZELE1BRU8sSUFBSSxPQUFPRixFQUFFRSxPQUFULEtBQXFCLFdBQXpCLEVBQXNDO0FBQzNDLFlBQU0sSUFBSUosS0FBSix5Q0FBZ0RHLENBQWhELENBQU47QUFDRDs7QUFFRCxRQUFJTCxNQUFNQyxPQUFOLENBQWNHLEVBQUVHLFFBQWhCLENBQUosRUFBK0I7QUFDN0JKLFFBQUVJLFFBQUYsR0FBYUosRUFBRUksUUFBRixDQUFXRSxNQUFYLENBQWtCTCxFQUFFRyxRQUFwQixDQUFiO0FBQ0QsS0FGRCxNQUVPLElBQUksc0JBQU9ILEVBQUVHLFFBQVQsTUFBc0IsUUFBMUIsRUFBb0M7QUFDekNKLFFBQUVJLFFBQUYsQ0FBV0MsSUFBWCxDQUFnQkosRUFBRUcsUUFBbEI7QUFDRDs7QUFFRDtBQUNBLFFBQUksT0FBT0gsRUFBRU0sVUFBVCxLQUF3QixVQUE1QixFQUF3QztBQUN0Q1AsUUFBRU8sVUFBRixDQUFhRixJQUFiLENBQWtCSixFQUFFTSxVQUFwQjtBQUNELEtBRkQsTUFFTyxJQUFJVixNQUFNQyxPQUFOLENBQWNHLEVBQUVNLFVBQWhCLENBQUosRUFBaUM7QUFDdENQLFFBQUVPLFVBQUYsR0FBZVAsRUFBRU8sVUFBRixDQUFhRCxNQUFiLENBQW9CTCxFQUFFTSxVQUF0QixDQUFmO0FBQ0QsS0FGTSxNQUVBLElBQUksT0FBT04sRUFBRU0sVUFBVCxLQUF3QixXQUE1QixFQUF5QztBQUM5QyxZQUFNLElBQUlSLEtBQUosNENBQW1ERyxDQUFuRCxDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJLE9BQU9ELEVBQUVPLFFBQVQsS0FBc0IsVUFBMUIsRUFBc0M7QUFDcENSLFFBQUVTLFNBQUYsQ0FBWUosSUFBWixDQUFpQkosRUFBRU8sUUFBbkI7QUFDRCxLQUZELE1BRU8sSUFBSSxPQUFPUCxFQUFFTyxRQUFULEtBQXNCLFdBQTFCLEVBQXVDO0FBQzVDLFlBQU0sSUFBSVQsS0FBSiwwQ0FBaURHLENBQWpELENBQU47QUFDRDtBQUNELFFBQUlMLE1BQU1DLE9BQU4sQ0FBY0csRUFBRVEsU0FBaEIsQ0FBSixFQUFnQztBQUM5QlQsUUFBRVMsU0FBRixHQUFjVCxFQUFFUyxTQUFGLENBQVlILE1BQVosQ0FBbUJMLEVBQUVRLFNBQXJCLENBQWQ7QUFDRCxLQUZELE1BRU8sSUFBSSxPQUFPUixFQUFFUSxTQUFULEtBQXVCLFdBQTNCLEVBQXdDO0FBQzdDLFlBQU0sSUFBSVYsS0FBSiwyQ0FBa0RHLENBQWxELENBQU47QUFDRDs7QUFFRDtBQUNBLFFBQUksT0FBT0QsRUFBRVMsSUFBVCxLQUFrQixVQUF0QixFQUFrQztBQUNoQ1YsUUFBRVcsS0FBRixDQUFRTixJQUFSLENBQWFKLEVBQUVTLElBQWY7QUFDRCxLQUZELE1BRU8sSUFBSSxPQUFPVCxFQUFFUyxJQUFULEtBQWtCLFdBQXRCLEVBQW1DO0FBQ3hDLFlBQU0sSUFBSVgsS0FBSixzQ0FBNkNHLENBQTdDLENBQU47QUFDRDtBQUNELFFBQUlMLE1BQU1DLE9BQU4sQ0FBY0csRUFBRVUsS0FBaEIsQ0FBSixFQUE0QjtBQUMxQlgsUUFBRVcsS0FBRixHQUFVWCxFQUFFUyxTQUFGLENBQVlILE1BQVosQ0FBbUJMLEVBQUVVLEtBQXJCLENBQVY7QUFDRCxLQUZELE1BRU8sSUFBSSxPQUFPVixFQUFFVSxLQUFULEtBQW1CLFdBQXZCLEVBQW9DO0FBQ3pDLFlBQU0sSUFBSVosS0FBSix1Q0FBOENHLENBQTlDLENBQU47QUFDRDs7QUFFRCxXQUFPRixDQUFQO0FBQ0QsR0FwRE0sRUFvREo7QUFDREksY0FBVSxFQURUO0FBRURHLGdCQUFZLEVBRlg7QUFHREUsZUFBVyxFQUhWO0FBSURFLFdBQU87QUFKTixHQXBESSxDQUFQO0FBMERELEMiLCJmaWxlIjoidHJhbnNmb3JtUGx1Z2lucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoLnJlZHVjZSdcblxuZXhwb3J0IGRlZmF1bHQgKHBsdWdpbnMpID0+IHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHBsdWdpbnMpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGx1Z2lucyBhcmd1bWVudCcpXG4gIHJldHVybiByZWR1Y2UocGx1Z2lucywgKHAsIHYsIGspID0+IHtcbiAgICBpZiAodHlwZW9mIHYgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZXhwb3J0IGluIHBsdWdpbiAke2t9YClcbiAgICB9XG5cbiAgICAvLyBncmFiIHRoZSByZWR1Y2VyIG91dCBvZiBpdFxuICAgIGlmICh0eXBlb2Ygdi5yZWR1Y2VyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwLnJlZHVjZXJzLnB1c2godi5yZWR1Y2VyKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHYucmVkdWNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBcInJlZHVjZXJcIiBleHBvcnQgaW4gcGx1Z2luICR7a31gKVxuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHYucmVkdWNlcnMpKSB7XG4gICAgICBwLnJlZHVjZXJzID0gcC5yZWR1Y2Vycy5jb25jYXQodi5yZWR1Y2VycylcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2LnJlZHVjZXJzID09PSAnb2JqZWN0Jykge1xuICAgICAgcC5yZWR1Y2Vycy5wdXNoKHYucmVkdWNlcnMpXG4gICAgfVxuXG4gICAgLy8gZ3JhYiBhbnkgbWlkZGxld2FyZVxuICAgIGlmICh0eXBlb2Ygdi5taWRkbGV3YXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwLm1pZGRsZXdhcmUucHVzaCh2Lm1pZGRsZXdhcmUpXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHYubWlkZGxld2FyZSkpIHtcbiAgICAgIHAubWlkZGxld2FyZSA9IHAubWlkZGxld2FyZS5jb25jYXQodi5taWRkbGV3YXJlKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHYubWlkZGxld2FyZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBcIm1pZGRsZXdhcmVcIiBleHBvcnQgaW4gcGx1Z2luICR7a31gKVxuICAgIH1cblxuICAgIC8vIGdyYWIgYW55IGVuaGFuY2Vyc1xuICAgIGlmICh0eXBlb2Ygdi5lbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcC5lbmhhbmNlcnMucHVzaCh2LmVuaGFuY2VyKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHYuZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgXCJlbmhhbmNlclwiIGV4cG9ydCBpbiBwbHVnaW4gJHtrfWApXG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHYuZW5oYW5jZXJzKSkge1xuICAgICAgcC5lbmhhbmNlcnMgPSBwLmVuaGFuY2Vycy5jb25jYXQodi5lbmhhbmNlcnMpXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygdi5lbmhhbmNlcnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgXCJlbmhhbmNlcnNcIiBleHBvcnQgaW4gcGx1Z2luICR7a31gKVxuICAgIH1cblxuICAgIC8vIGdyYWIgYW55IGhvb2tzXG4gICAgaWYgKHR5cGVvZiB2Lmhvb2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHAuaG9va3MucHVzaCh2Lmhvb2spXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygdi5ob29rICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFwiaG9va1wiIGV4cG9ydCBpbiBwbHVnaW4gJHtrfWApXG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHYuaG9va3MpKSB7XG4gICAgICBwLmhvb2tzID0gcC5lbmhhbmNlcnMuY29uY2F0KHYuaG9va3MpXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygdi5ob29rcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBcImhvb2tzXCIgZXhwb3J0IGluIHBsdWdpbiAke2t9YClcbiAgICB9XG5cbiAgICByZXR1cm4gcFxuICB9LCB7XG4gICAgcmVkdWNlcnM6IFtdLFxuICAgIG1pZGRsZXdhcmU6IFtdLFxuICAgIGVuaGFuY2VyczogW10sXG4gICAgaG9va3M6IFtdXG4gIH0pXG59XG4iXX0=