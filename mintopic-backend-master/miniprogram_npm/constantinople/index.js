module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1647755346374, function(require, module, exports) {


var acorn = require('acorn');
var walk = require('acorn/dist/walk');

var lastSRC = '(null)';
var lastRes = true;
var lastConstants = undefined;

var STATEMENT_WHITE_LIST = {
  'EmptyStatement': true,
  'ExpressionStatement': true,
};
var EXPRESSION_WHITE_LIST = {
  'ParenthesizedExpression': true,
  'ArrayExpression': true,
  'ObjectExpression': true,
  'SequenceExpression': true,
  'TemplateLiteral': true,
  'UnaryExpression': true,
  'BinaryExpression': true,
  'LogicalExpression': true,
  'ConditionalExpression': true,
  'Identifier': true,
  'Literal': true,
  'ComprehensionExpression': true,
  'TaggedTemplateExpression': true,
  'MemberExpression': true,
  'CallExpression': true,
  'NewExpression': true,
};
module.exports = isConstant;
function isConstant(src, constants) {
  src = '(' + src + ')';
  if (lastSRC === src && lastConstants === constants) return lastRes;
  lastSRC = src;
  lastConstants = constants;
  if (!isExpression(src)) return lastRes = false;
  var ast;
  try {
    ast = acorn.parse(src, {
      ecmaVersion: 6,
      allowReturnOutsideFunction: true,
      allowImportExportEverywhere: true,
      allowHashBang: true
    });
  } catch (ex) {
    return lastRes = false;
  }
  var isConstant = true;
  walk.simple(ast, {
    Statement: function (node) {
      if (isConstant) {
        if (STATEMENT_WHITE_LIST[node.type] !== true) {
          isConstant = false;
        }
      }
    },
    Expression: function (node) {
      if (isConstant) {
        if (EXPRESSION_WHITE_LIST[node.type] !== true) {
          isConstant = false;
        }
      }
    },
    MemberExpression: function (node) {
      if (isConstant) {
        if (node.computed) isConstant = false;
        else if (node.property.name[0] === '_') isConstant = false;
      }
    },
    Identifier: function (node) {
      if (isConstant) {
        if (!constants || !(node.name in constants)) {
          isConstant = false;
        }
      }
    },
  });
  return lastRes = isConstant;
}
isConstant.isConstant = isConstant;

isConstant.toConstant = toConstant;
function toConstant(src, constants) {
  if (!isConstant(src, constants)) throw new Error(JSON.stringify(src) + ' is not constant.');
  return Function(Object.keys(constants || {}).join(','), 'return (' + src + ')').apply(null, Object.keys(constants || {}).map(function (key) {
    return constants[key];
  }));
}

function isExpression(src) {
  try {
    eval('throw "STOP"; (function () { return (' + src + '); })()');
    return false;
  }
  catch (err) {
    return err === 'STOP';
  }
}

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1647755346374);
})()
//miniprogram-npm-outsideDeps=["acorn","acorn/dist/walk"]
//# sourceMappingURL=index.js.map