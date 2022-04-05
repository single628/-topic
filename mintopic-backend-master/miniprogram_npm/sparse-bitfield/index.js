module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1647755346915, function(require, module, exports) {
var pager = require('memory-pager')

module.exports = Bitfield

function Bitfield (opts) {
  if (!(this instanceof Bitfield)) return new Bitfield(opts)
  if (!opts) opts = {}
  if (Buffer.isBuffer(opts)) opts = {buffer: opts}

  this.pageOffset = opts.pageOffset || 0
  this.pageSize = opts.pageSize || 1024
  this.pages = opts.pages || pager(this.pageSize)

  this.byteLength = this.pages.length * this.pageSize
  this.length = 8 * this.byteLength

  if (!powerOfTwo(this.pageSize)) throw new Error('The page size should be a power of two')

  this._trackUpdates = !!opts.trackUpdates
  this._pageMask = this.pageSize - 1

  if (opts.buffer) {
    for (var i = 0; i < opts.buffer.length; i += this.pageSize) {
      this.pages.set(i / this.pageSize, opts.buffer.slice(i, i + this.pageSize))
    }
    this.byteLength = opts.buffer.length
    this.length = 8 * this.byteLength
  }
}

Bitfield.prototype.get = function (i) {
  var o = i & 7
  var j = (i - o) / 8

  return !!(this.getByte(j) & (128 >> o))
}

Bitfield.prototype.getByte = function (i) {
  var o = i & this._pageMask
  var j = (i - o) / this.pageSize
  var page = this.pages.get(j, true)

  return page ? page.buffer[o + this.pageOffset] : 0
}

Bitfield.prototype.set = function (i, v) {
  var o = i & 7
  var j = (i - o) / 8
  var b = this.getByte(j)

  return this.setByte(j, v ? b | (128 >> o) : b & (255 ^ (128 >> o)))
}

Bitfield.prototype.toBuffer = function () {
  var all = alloc(this.pages.length * this.pageSize)

  for (var i = 0; i < this.pages.length; i++) {
    var next = this.pages.get(i, true)
    var allOffset = i * this.pageSize
    if (next) next.buffer.copy(all, allOffset, this.pageOffset, this.pageOffset + this.pageSize)
  }

  return all
}

Bitfield.prototype.setByte = function (i, b) {
  var o = i & this._pageMask
  var j = (i - o) / this.pageSize
  var page = this.pages.get(j, false)

  o += this.pageOffset

  if (page.buffer[o] === b) return false
  page.buffer[o] = b

  if (i >= this.byteLength) {
    this.byteLength = i + 1
    this.length = this.byteLength * 8
  }

  if (this._trackUpdates) this.pages.updated(page)

  return true
}

function alloc (n) {
  if (Buffer.alloc) return Buffer.alloc(n)
  var b = new Buffer(n)
  b.fill(0)
  return b
}

function powerOfTwo (x) {
  return !(x & (x - 1))
}

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1647755346915);
})()
//miniprogram-npm-outsideDeps=["memory-pager"]
//# sourceMappingURL=index.js.map