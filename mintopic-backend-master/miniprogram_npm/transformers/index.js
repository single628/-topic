module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1647755346936, function(require, module, exports) {
var dirname = require('path').dirname;
var Transformer = require('./shared');

/**
 * minifiers must be first in order to be incorporated inside instances of respective output formats
 */
var uglifyJS = require('uglify-js');
exports.uglify = exports.uglifyJS = exports['uglify-js'] = new Transformer({
  name: 'uglify-js',
  engines: ['.'],
  outputFormat: 'js',
  isMinifier: true,
  sync: function (str, options) {
    options.fromString = true;
    return this.cache(options) || this.cache(options, uglifyJS.minify(str, options).code);
  }
});
var uglifyCSS = require('css');
exports.uglifyCSS = exports['uglify-css'] = new Transformer({
  name: 'uglify-css',
  engines: ['.'],
  outputFormat: 'css',
  isMinifier: true,
  sync: function (str, options) {
    options.compress = options.compress != false && options.beautify != true;
    return this.cache(options) || this.cache(options, uglifyCSS.stringify(uglifyCSS.parse(str), options));
  }
});

exports.uglifyJSON = exports['uglify-json'] = new Transformer({
  name: 'uglify-json',
  engines: ['.'],
  outputFormat: 'json',
  isMinifier: true,
  sync: function (str, options) {
    return JSON.stringify(JSON.parse(str), null, options.beautify);
  }
});


/**
 * Syncronous Templating Languages
 */

function sync(str, options) {
  var tmpl = this.cache(options) || this.cache(options, this.engine.compile(str, options));
  return tmpl(options);
}

exports.swig = new Transformer({
  name: 'swig',
  engines: ['swig'],
  outputFormat: 'xml',
  sync: sync
});

exports.atpl = new Transformer({
  name: 'atpl',
  engines: ['atpl'],
  outputFormat: 'xml',
  sync: function sync(str, options) {
    var tmpl = this.cache(options);
    if (!tmpl) {
      var cInfo = {cache: options.cache, filename: options.filename};
      if (options.filename) {
        delete options.filename; //atpl can't handle absolute windows file paths properly
      }
      tmpl = this.cache(cInfo, this.engine.compile(str, options));
    }
    return tmpl(options);
  }
});

exports.dot = new Transformer({
  name: 'dot',
  engines: ['dot'],
  outputFormat: 'xml',
  sync: function sync(str, options) {
    var tmpl = this.cache(options) || this.cache(options, this.engine.template(str));
    return tmpl(options);
  }
});

exports.liquor = new Transformer({
  name: 'liquor',
  engines: ['liquor'],
  outputFormat: 'xml',
  sync: sync
});

exports.ejs = new Transformer({
  name: 'ejs',
  engines: ['ejs'],
  outputFormat: 'xml',
  sync: sync
});

exports.eco = new Transformer({
  name: 'eco',
  engines: ['eco'],
  outputFormat: 'xml',
  sync: sync//N.B. eco's internal this.cache isn't quite right but this bypasses it
});

exports.jqtpl = new Transformer({
  name: 'jqtpl',
  engines: ['jqtpl'],
  outputFormat: 'xml',
  sync: function (str, options) {
    var engine = this.engine;
    var key = (options.cache && options.filename) ? options.filename : '@';
    engine.compile(str, key);
    var res = this.engine.render(key, options);
    if (!(options.cache && options.filename)) {
      delete engine.cache[key];
    }
    this.cache(options, true); // caching handled internally
    return res;
  }
});

exports.haml = new Transformer({
  name: 'haml',
  engines: ['hamljs'],
  outputFormat: 'xml',
  sync: sync
});

exports['haml-coffee'] = new Transformer({
  name: 'haml-coffee',
  engines: ['haml-coffee'],
  outputFormat: 'xml',
  sync: sync
});

exports.whiskers = new Transformer({
  name: 'whiskers',
  engines: ['whiskers'],
  outputFormat: 'xml',
  sync: sync
});

exports.hogan = new Transformer({
  name: 'hogan',
  engines: ['hogan.js'],
  outputFormat: 'xml',
  sync: function(str, options){
    var tmpl = this.cache(options) || this.cache(options, this.engine.compile(str, options));
    return tmpl.render(options, options.partials);
  }
});

exports.handlebars = new Transformer({
  name: 'handlebars',
  engines: ['handlebars'],
  outputFormat: 'xml',
  sync: function(str, options){
    for (var partial in options.partials) {
      this.engine.registerPartial(partial, options.partials[partial]);
    }
    var tmpl = this.cache(options) || this.cache(options, this.engine.compile(str, options));
    return tmpl(options);
  }
});

exports.underscore = new Transformer({
  name: 'underscore',
  engines: ['underscore'],
  outputFormat: 'xml',
  sync: function(str, options){
    var tmpl = this.cache(options) || this.cache(options, this.engine.template(str));
    return tmpl(options);
  }
});

exports.walrus = new Transformer({
  name: 'walrus',
  engines: ['walrus'],
  outputFormat: 'xml',
  sync: function(str, options){
    var tmpl = this.cache(options) || this.cache(options, this.engine.parse(str));
    return tmpl.compile(options);
  }
});

exports.mustache = new Transformer({
  name: 'mustache',
  engines: ['mustache'],
  outputFormat: 'xml',
  sync: function(str, options){
    var tmpl = this.cache(options) || this.cache(options, this.engine.compile(str));
    return tmpl(options, options.partials);
  }
});

exports.templayed = new Transformer({
  name: 'templayed',
  engines: ['templayed'],
  outputFormat: 'xml',
  sync: function(str, options){
    var tmpl = this.cache(options) || this.cache(options, this.engine(str));
    return tmpl(options);
  }
});

exports.plates = new Transformer({
  name: 'plates',
  engines: ['plates'],
  outputFormat: 'xml',
  sync: function(str, options){
    str = this.cache(options) || this.cache(options, str);
    return this.engine.bind(str, options, options.map);
  }
});

exports.mote = new Transformer({
  name: 'mote',
  engines: ['mote'],
  outputFormat: 'xml',
  sync: sync
});

exports.toffee = new Transformer({
  name: 'toffee',
  engines: ['toffee'],
  outputFormat: 'xml',
  sync: function (str, options) {
    var View = this.engine.view;
    var v = this.cache(options) || this.cache(options, new View(str, options));
    var res = v.run(options, require('vm').createContext({}));
    if (res[0]) throw res[0];
    else return res[1];
  }
});

exports.coffeekup = exports.coffeecup = new Transformer({
  name: 'coffeecup',
  engines: ['coffeecup', 'coffeekup'],
  outputFormat: 'xml',
  sync: function (str, options) {
    var compiled = this.cache(options) || this.cache(options, this.engine.compile(str, options));
    return compiled(options);
  }
});

/**
 * Asyncronous Templating Languages
 */

exports.just = new Transformer({
  name: 'just',
  engines: ['just'],
  outputFormat: 'xml',
  sudoSync: true,
  async: function (str, options, cb) {
    var JUST = this.engine;
    var tmpl = this.cache(options) || this.cache(options, new JUST({ root: { page: str }}));
    tmpl.render('page', options, cb);
  }
});

exports.ect = new Transformer({
  name: 'ect',
  engines: ['ect'],
  outputFormat: 'xml',
  sudoSync: true, // Always runs syncronously
  async: function (str, options, cb) {
    var ECT = this.engine;
    var tmpl = this.cache(options) || this.cache(options, new ECT({ root: { page: str }}));
    tmpl.render('page', options, cb);
  }
});

exports.jade = new Transformer({
  name: 'jade',
  engines: ['jade', 'then-jade'],
  outputFormat: 'xml',
  sudoSync: 'The jade file FILENAME could not be rendered syncronously.  N.B. then-jade does not support syncronous rendering.',
  async: function (str, options, cb) {
    this.cache(options, true);//jade handles this.cache internally
    this.engine.render(str, options, cb);
  }
})

exports.dust = new Transformer({
  name: 'dust',
  engines: ['dust', 'dustjs-linkedin'],
  outputFormat: 'xml',
  sudoSync: false,
  async: function (str, options, cb) {
    var ext = 'dust'
      , views = '.';

    if (options) {
      if (options.ext) ext = options.ext;
      if (options.views) views = options.views;
      if (options.settings && options.settings.views) views = options.settings.views;
    }

    this.engine.onLoad = function(path, callback){
      if ('' == extname(path)) path += '.' + ext;
      if ('/' !== path[0]) path = views + '/' + path;
      read(path, options, callback);
    };

    var tmpl = this.cache(options) || this.cache(options, this.engine.compileFn(str));
    if (options && !options.cache) this.engine.cache = {};//invalidate dust's internal cache
    tmpl(options, cb);
  }
});

exports.jazz = new Transformer({
  name: 'jazz',
  engines: ['jazz'],
  outputFormat: 'xml',
  sudoSync: true, // except when an async function is passed to locals
  async: function (str, options, cb) {
    var tmpl = this.cache(options) || this.cache(options, this.engine.compile(str, options));
    tmpl.eval(options, function(str){
      cb(null, str);
    });
  }
});

exports.qejs = new Transformer({
  name: 'qejs',
  engines: ['qejs'],
  outputFormat: 'xml',
  sudoSync: false,
  async: function (str, options, cb) {
    var tmpl = this.cache(options) || this.cache(options, this.engine.compile(str, options));
    tmpl(options).done(function (result) {
        cb(null, result);
    }, function (err) {
        cb(err);
    });
  }
});

/**
 * Stylsheet Languages
 */

exports.less = new Transformer({
  name: 'less',
  engines: ['less'],
  outputFormat: 'css',
  sudoSync: 'The less file FILENAME could not be rendered syncronously.  This is usually because the file contains `@import url` statements.',
  async: function (str, options, cb) {
    var self = this;
    if (self.cache(options)) return cb(null, self.cache(options));
    if (options.filename) {
      options.paths = options.paths || [dirname(options.filename)];
    }
    //If this.cache is enabled, compress by default
    if (options.compress !== true && options.compress !== false) {
      options.compress = options.cache || false;
    }
    if (options.sudoSync) {
      options.syncImport = true;
    }
    var parser = new(this.engine.Parser)(options);
    parser.parse(str, function (err, tree) {
      try {
        if (err) throw err;
        var res = tree.toCSS(options);
        self.cache(options, res);
        cb(null, res);
      } catch (ex) {
        if (ex.constructor.name === 'LessError' && typeof ex === 'object') {
          ex.filename = ex.filename || '"Unkown Source"';
          var err = new Error(self.engine.formatError(ex, options).replace(/^[^:]+:/, ''), ex.filename, ex.line);
          err.name = ex.type;
          ex = err;
        }
        return cb(ex);
      }
    });
  }
});

exports.styl = exports.stylus = new Transformer({
  name: 'stylus',
  engines: ['stylus'],
  outputFormat: 'css',
  sudoSync: true,// always runs syncronously
  async: function (str, options, cb) {
    var self = this;
    if (self.cache(options)) return cb(null, self.cache(options));
    if (options.filename) {
      options.paths = options.paths || [dirname(options.filename)];
    }
    //If this.cache is enabled, compress by default
    if (options.compress !== true && options.compress !== false) {
      options.compress = options.cache || false;
    }
    this.engine.render(str, options, function (err, res) {
      if (err) return cb(err);
      self.cache(options, res);
      cb(null, res);
    });
  }
})

exports.sass = new Transformer({
  name: 'sass',
  engines: ['sass'],
  outputFormat: 'css',
  sync: function (str, options) {
    try {
      return this.cache(options) || this.cache(options, this.engine.render(str));
    } catch (ex) {
      if (options.filename) ex.message += ' in ' + options.filename;
      throw ex;
    }
  }
});

/**
 * Miscelaneous
 */

exports.md = exports.markdown = new Transformer({
  name: 'markdown',
  engines: ['marked', 'supermarked', 'markdown-js', 'markdown'],
  outputFormat: 'html',
  sync: function (str, options) {
    var arg = options;
    if (this.engineName === 'markdown') arg = options.dialect; //even if undefined
    return this.cache(options) || this.cache(options, this.engine.parse(str, arg));
  }
});


exports.coffee = exports['coffee-script'] = exports.coffeescript = exports.coffeeScript = new Transformer({
  name: 'coffee-script',
  engines: ['coffee-script'],
  outputFormat: 'js',
  sync: function (str, options) {
    return this.cache(options) || this.cache(options, this.engine.compile(str, options));
  }
});

exports.cson = new Transformer({
  name: 'cson',
  engines: ['cson'],
  outputFormat: 'json',
  sync: function (str, options) {
    //todo: remove once https://github.com/rstacruz/js2coffee/pull/174 accepted & released
    if (global.Narcissus) delete global.Narcissus; //prevent global leak
    return this.cache(options) || this.cache(options, JSON.stringify(this.engine.parseSync(str)));
  }
});

exports.cdata = new Transformer({
  name: 'cdata',
  engines: ['.'],// `.` means "no dependency"
  outputFormat: 'xml',
  sync: function (str, options) {
    var escaped = str.replace(/\]\]>/g, "]]]]><![CDATA[>");
    return this.cache(options) || this.cache(options, '<![CDATA[' + escaped + ']]>');
  }
});

exports["cdata-js"] = new Transformer({
  name: 'cdata-js',
  engines: ['.'],// `.` means "no dependency"
  outputFormat: 'xml',
  sync: function (str, options) {
    var escaped = str.replace(/\]\]>/g, "]]]]><![CDATA[>");
    return this.cache(options) || this.cache(options, '//<![CDATA[\n' + escaped + '\n//]]>');
  }
});

exports["cdata-css"] = new Transformer({
  name: 'cdata-css',
  engines: ['.'],// `.` means "no dependency"
  outputFormat: 'xml',
  sync: function (str, options) {
    var escaped = str.replace(/\]\]>/g, "]]]]><![CDATA[>");
    return this.cache(options) || this.cache(options, '/*<![CDATA[*/\n' + escaped + '\n/*]]>*/');
  }
});

exports.verbatim = new Transformer({
  name: 'verbatim',
  engines: ['.'],// `.` means "no dependency"
  outputFormat: 'xml',
  sync: function (str, options) {
    return this.cache(options) || this.cache(options, str);
  }
});

exports.component = exports['component-js'] = new Transformer({
  name: 'component-js',
  engines: ['component-builder'],
  outputFormat: 'js',
  async: function (str, options, cb) {
    if (this.cache(options)) return this.cache(options);
    var self = this;
    var builder = new this.engine(dirname(options.filename));
    if (options.development) {
      builder.development();
    }
    if (options.sourceURLs === true || (options.sourceURLs !== false && options.development)) {
      builder.addSourceURLs();
    }
    var path = require('path');
    builder.paths = (options.paths || ['components']).map(function (p) {
      if (path.resolve(p) === p) {
        return p;
      } else {
        return path.join(dirname(options.filename), p);
      }
    });
    builder.build(function (err, obj) {
      if (err) return cb(err);
      else return cb(null, self.cache(options, obj.require + obj.js));
    });
  }
});

exports['component-css'] = new Transformer({
  name: 'component-css',
  engines: ['component-builder'],
  outputFormat: 'css',
  async: function (str, options, cb) {
    if (this.cache(options)) return this.cache(options);
    var self = this;
    var builder = new this.engine(dirname(options.filename));
    if (options.development) {
      builder.development();
    }
    if (options.sourceURLs === true || (options.sourceURLs !== false && options.development)) {
      builder.addSourceURLs();
    }
    var path = require('path');
    builder.paths = (options.paths || ['components']).map(function (p) {
      if (path.resolve(p) === p) {
        return p;
      } else {
        return path.join(dirname(options.filename), p);
      }
    });
    builder.build(function (err, obj) {
      if (err) return cb(err);
      else return cb(null, self.cache(options, obj.css));
    });
  }
});

exports['html2jade'] = new Transformer({
  name: 'html2jade',
  engines: ['html2jade'],
  outputFormat: 'jade',
  async: function (str, options, cb) {
    return this.cache(options) || this.cache(options, this.engine.convertHtml(str, options, cb));
  }
});

exports['highlight'] = new Transformer({
  name: 'highlight',
  engines: ['highlight.js'],
  outputFormat: 'xml',
  sync: function (str, options, cb) {
    if (this.cache(options)) return this.cache(options);
    if (options.lang) {
      try {
        return this.cache(options, this.engine.highlight(options.lang, str).value);
      } catch (ex) {}
    }
    if (options.auto || !options.lang) {
      try {
        return this.cache(options, this.engine.highlightAuto(str).value);
      } catch (ex) {}
    }
    return this.cache(options, str);
  }
});


/**
 * Marker transformers (they don't actually apply a transformation, but let you declare the 'outputFormat')
 */

exports.css = new Transformer({
  name: 'css',
  engines: ['.'],// `.` means "no dependency"
  outputFormat: 'css',
  sync: function (str, options) {
    return this.cache(options) || this.cache(options, str);
  }
});

exports.js = new Transformer({
  name: 'js',
  engines: ['.'],// `.` means "no dependency"
  outputFormat: 'js',
  sync: function (str, options) {
    return this.cache(options) || this.cache(options, str);
  }
});



}, function(modId) {var map = {"./shared":1647755346937}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346937, function(require, module, exports) {
var Promise = require('promise');
var fs = require('fs');
var path = require('path');
var normalize = path.normalize;


Promise.prototype.nodeify = function (cb) {
  if (typeof cb === 'function') {
    this.then(function (res) { process.nextTick(function () { cb(null, res); }); },
              function (err) { process.nextTick(function () { cb(err); }); });
    return undefined;
  } else {
    return this;
  }
}

var minifiers = {};

module.exports = Transformer;
function Transformer(obj) {
  this.name = obj.name;
  this.engines = obj.engines;
  this.isBinary = obj.isBinary || false;
  this.isMinifier = obj.isMinifier || false;
  this.outputFormat = obj.outputFormat;
  this._cache = {};
  if (typeof obj.async === 'function') {
    this._renderAsync = obj.async;
    this.sudoSync = obj.sudoSync || false;
  }
  if (typeof obj.sync === 'function') {
    this._renderSync = obj.sync;
    this.sync = true;
  } else {
    this.sync = obj.sudoSync || false;
  }

  if (this.isMinifier)
    minifiers[this.outputFormat] = this;
  else {
    var minifier = minifiers[this.outputFormat];
    if (minifier) {
      this.minify = function(str, options) {
        if (options && options.minify)
          return minifier.renderSync(str, typeof options.minify === 'object' && options.minify || {});
        return str;
      }
    }
  }
}

Transformer.prototype.cache = function (options, data) {
  if (options.cache && options.filename) {
    if (data) return this.cache[options.filename] = data;
    else return this.cache[options.filename];
  } else {
    return data;
  }
};
Transformer.prototype.loadModule = function () {
  if (this.engine) return this.engine;
  for (var i = 0; i < this.engines.length; i++) {
    try {
      var res = this.engines[i] === '.' ? null : (this.engine = require(this.engines[i]));
      this.engineName = this.engines[i];
      return res;
    } catch (ex) {
      if (this.engines.length === 1) {
        throw ex;
      }
    }
  }
  throw new Error('In order to apply the transform ' + this.name + ' you must install one of ' + this.engines.map(function (e) { return '"' + e + '"'; }).join());
};
Transformer.prototype.minify = function(str, options) {
  return str;
}
Transformer.prototype.renderSync = function (str, options) {
  options = options || {};
  options = clone(options);
  this.loadModule();
  if (this._renderSync) {
    return this.minify(this._renderSync((this.isBinary ? str : fixString(str)), options), options);
  } else if (this.sudoSync) {
    options.sudoSync = true;
    var res, err;
    this._renderAsync((this.isBinary ? str : fixString(str)), options, function (e, val) {
      if (e) err = e;
      else res = val;
    });
    if (err) throw err;
    else if (res != undefined) return this.minify(res, options);
    else if (typeof this.sudoSync === 'string') throw new Error(this.sudoSync.replace(/FILENAME/g, options.filename || ''));
    else throw new Error('There was a problem transforming ' + (options.filename || '') + ' syncronously using ' + this.name);
  } else {
    throw new Error(this.name + ' does not support transforming syncronously.');
  }
};
Transformer.prototype.render = function (str, options, cb) {
  options = options || {};
  var self = this;
  return new Promise(function (resolve, reject) {
    self.loadModule();
    if (self._renderAsync) {
      self._renderAsync((self.isBinary ? str : fixString(str)), clone(options), function (err, val) {
        if (err) reject(err);
        else resolve(self.minify(val, options));
      })
    } else {
      resolve(self.renderSync(str, options));
    }
  })
  .nodeify(cb);
};
Transformer.prototype.renderFile = function (path, options, cb) {
  options = options || {};
  var self = this;
  return new Promise(function (resolve, reject) {
    options.filename = (path = normalize(path));
    if (self._cache[path])
      resolve(null);
    else
      fs.readFile(path, function (err, data) {
        if (err) reject(err);
        else resolve(data);
      })
  })
  .then(function (str) {
    return self.render(str, options);
  })
  .nodeify(cb);
};
Transformer.prototype.renderFileSync = function (path, options) {
  options = options || {};
  options.filename = (path = normalize(path));
  return this.renderSync((this._cache[path] ? null : fs.readFileSync(path)), options);
};
function fixString(str) {
  if (str == null) return str;
  //convert buffer to string
  str = str.toString();
  // Strip UTF-8 BOM if it exists
  str = (0xFEFF == str.charCodeAt(0) 
    ? str.substring(1)
    : str);
  //remove `\r` added by windows
  return str.replace(/\r/g, '');
}

function clone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(clone);
  } else if (obj && typeof obj === 'object') {
    var res = {};
    for (var key in obj) {
      res[key] = clone(obj[key]);
    }
    return res;
  } else {
    return obj;
  }
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1647755346936);
})()
//miniprogram-npm-outsideDeps=["path","uglify-js","css","vm","promise","fs"]
//# sourceMappingURL=index.js.map