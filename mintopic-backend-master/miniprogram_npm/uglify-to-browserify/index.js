module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1647755346951, function(require, module, exports) {


var fs = require('fs')
var PassThrough = require('stream').PassThrough
var Transform = require('stream').Transform

if (typeof Transform === 'undefined') {
  throw new Error('UglifyJS only supports browserify when using node >= 0.10.x')
}

var cache = {}
module.exports = transform
function transform(file) {
  if (!/tools\/node\.js$/.test(file.replace(/\\/g,'/'))) return new PassThrough();
  if (cache[file]) return makeStream(cache[file])
  var uglify = require(file)
  var src = 'var sys = require("util");\nvar MOZ_SourceMap = require("source-map");\nvar UglifyJS = exports;\n' + uglify.FILES.map(function (path) { return fs.readFileSync(path, 'utf8') }).join('\n')

  var ast = uglify.parse(src)
  ast.figure_out_scope()

  var variables = ast.variables
    .map(function (node, name) {
      return name
    })

  src += '\n\n' + variables.map(function (v) { return 'exports.' + v + ' = ' + v + ';' }).join('\n') + '\n\n'

  src += 'exports.AST_Node.warn_function = function (txt) { if (typeof console != "undefined" && typeof console.warn === "function") console.warn(txt) }\n\n'

  src += 'exports.minify = ' + uglify.minify.toString() + ';\n\n'
  src += 'exports.describe_ast = ' + uglify.describe_ast.toString() + ';'

  // TODO: remove once https://github.com/substack/node-browserify/issues/631 is resolved
  src = src.replace(/"for"/g, '"fo" + "r"')

  cache[file] = src
  return makeStream(src);
}

function makeStream(src) {
  var res = new Transform();
  res._transform = function (chunk, encoding, callback) { callback() }
  res._flush = function (callback) {
    res.push(src)
    callback()
  }
  return res;
}

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1647755346951);
})()
//miniprogram-npm-outsideDeps=["fs","stream"]
//# sourceMappingURL=index.js.map