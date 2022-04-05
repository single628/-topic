module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1647755346924, function(require, module, exports) {
var isPromise = require('is-promise')

var nextTick
if (typeof setImediate === 'function') nextTick = setImediate
else if (typeof process === 'object' && process && process.nextTick) nextTick = process.nextTick
else nextTick = function (cb) { setTimeout(cb, 0) }

var extensions = []

module.exports = Promise
function Promise(fn) {
  if (!(this instanceof Promise)) {
    return fn ? new Promise(fn) : defer()
  }
  if (typeof fn !== 'function') {
    throw new TypeError('fn is not a function')
  }

  var state = {
    isResolved: false,
    isSettled: false,
    isFulfilled: false,
    value: null,
    waiting: [],
    running: false
  }

  function _resolve(val) {
    resolve(state, val);
  }
  function _reject(err) {
    reject(state, err);
  }
  this.then = function _then(onFulfilled, onRejected) {
    return then(state, onFulfilled, onRejected);
  }

  _resolve.fulfill = deprecate(_resolve, 'resolver.fulfill(x)', 'resolve(x)')
  _resolve.reject = deprecate(_reject, 'resolver.reject', 'reject(x)')

  try {
    fn(_resolve, _reject)
  } catch (ex) {
    _reject(ex)
  }
}

function resolve(promiseState, value) {
  if (promiseState.isResolved) return
  if (isPromise(value)) {
    assimilate(promiseState, value)
  } else {
    settle(promiseState, true, value)
  }
}

function reject(promiseState, reason) {
  if (promiseState.isResolved) return
  settle(promiseState, false, reason)
}

function then(promiseState, onFulfilled, onRejected) {
  return new Promise(function (resolve, reject) {
    function done(next, skipTimeout) {
      var callback = promiseState.isFulfilled ? onFulfilled : onRejected
      if (typeof callback === 'function') {
        function timeoutDone() {
          var val
          try {
            val = callback(promiseState.value)
          } catch (ex) {
            reject(ex)
            return next(true)
          }
          resolve(val)
          next(true)
        }
        if (skipTimeout) timeoutDone()
        else nextTick(timeoutDone)
      } else if (promiseState.isFulfilled) {
        resolve(promiseState.value)
        next(skipTimeout)
      } else {
        reject(promiseState.value)
        next(skipTimeout)
      }
    }
    promiseState.waiting.push(done)
    if (promiseState.isSettled && !promiseState.running) processQueue(promiseState)
  })
}

function processQueue(promiseState) {
  function next(skipTimeout) {
    if (promiseState.waiting.length) {
      promiseState.running = true
      promiseState.waiting.shift()(next, skipTimeout)
    } else {
      promiseState.running = false
    }
  }
  next(false)
}

function settle(promiseState, isFulfilled, value) {
  if (promiseState.isSettled) return

  promiseState.isResolved = promiseState.isSettled = true
  promiseState.value = value
  promiseState.isFulfilled = isFulfilled

  processQueue(promiseState)
}

function assimilate(promiseState, thenable) {
  try {
    promiseState.isResolved = true
    thenable.then(function (res) {
      if (isPromise(res)) {
        assimilate(promiseState, res)
      } else {
        settle(promiseState, true, res)
      }
    }, function (err) {
      settle(promiseState, false, err)
    })
  } catch (ex) {
    settle(promiseState, false, ex)
  }
}

Promise.use = function (extension) {
  extensions.push(extension)
}


function deprecate(method, name, alternative) {
  return function () {
    var err = new Error(name + ' is deprecated use ' + alternative)
    if (typeof console !== 'undefined' && console && typeof console.warn === 'function') {
      console.warn(name + ' is deprecated use ' + alternative)
      if (err.stack) console.warn(err.stack)
    } else {
      nextTick(function () {
        throw err
      })
    }
    method.apply(this, arguments)
  }
}
function defer() {
  var err = new Error('promise.defer() is deprecated')
  if (typeof console !== 'undefined' && console && typeof console.warn === 'function') {
    console.warn('promise.defer() is deprecated')
    if (err.stack) console.warn(err.stack)
  } else {
    nextTick(function () {
      throw err
    })
  }
  var resolver
  var promise = new Promise(function (res) { resolver = res })
  return {resolver: resolver, promise: promise}
}
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1647755346924);
})()
//miniprogram-npm-outsideDeps=["is-promise"]
//# sourceMappingURL=index.js.map