module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1647755346252, function(require, module, exports) {
/*!
 * align-text <https://github.com/jonschlinkert/align-text>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var typeOf = require('kind-of');
var repeat = require('repeat-string');
var longest = require('longest');

module.exports = function alignText(val, fn) {
  var lines, type = typeOf(val);

  if (type === 'array') {
    lines = val;
  } else if (type === 'string') {
    lines = val.split(/(?:\r\n|\n)/);
  } else {
    throw new TypeError('align-text expects a string or array.');
  }

  var fnType = typeOf(fn);
  var len = lines.length;
  var max = longest(lines);
  var res = [], i = 0;

  while (len--) {
    var line = String(lines[i++]);
    var diff;

    if (fnType === 'function') {
      diff = fn(line.length, max.length, line, lines, i);
    } else if (fnType === 'number') {
      diff = fn;
    } else {
      diff = max.length - line.length;
    }

    if (typeOf(diff) === 'number') {
      res.push(repeat(' ', diff) + line);
    } else if (typeOf(diff) === 'object') {
      var result = repeat(diff.character || ' ', diff.indent || 0);
      res.push((diff.prefix || '') + result + line);
    }
  }

  if (type === 'array') return res;
  return res.join('\n');
};

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1647755346252);
})()
//miniprogram-npm-outsideDeps=["kind-of","repeat-string","longest"]
//# sourceMappingURL=index.js.map