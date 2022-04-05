module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1647755346508, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommaAndColonSeparatedRecord = exports.redactConnectionString = void 0;
const whatwg_url_1 = require("whatwg-url");
const redact_1 = require("./redact");
Object.defineProperty(exports, "redactConnectionString", { enumerable: true, get: function () { return redact_1.redactConnectionString; } });
const DUMMY_HOSTNAME = '__this_is_a_placeholder__';
const HOSTS_REGEX = new RegExp(String.raw `^(?<protocol>mongodb(?:\+srv|)):\/\/(?:(?<username>[^:]*)(?::(?<password>[^@]*))?@)?(?<hosts>(?!:)[^\/?@]+)(?<rest>.*)`);
class CaseInsensitiveMap extends Map {
    delete(name) {
        return super.delete(this._normalizeKey(name));
    }
    get(name) {
        return super.get(this._normalizeKey(name));
    }
    has(name) {
        return super.has(this._normalizeKey(name));
    }
    set(name, value) {
        return super.set(this._normalizeKey(name), value);
    }
    _normalizeKey(name) {
        name = `${name}`;
        for (const key of this.keys()) {
            if (key.toLowerCase() === name.toLowerCase()) {
                name = key;
                break;
            }
        }
        return name;
    }
}
function caseInsenstiveURLSearchParams(Ctor) {
    return class CaseInsenstiveURLSearchParams extends Ctor {
        append(name, value) {
            return super.append(this._normalizeKey(name), value);
        }
        delete(name) {
            return super.delete(this._normalizeKey(name));
        }
        get(name) {
            return super.get(this._normalizeKey(name));
        }
        getAll(name) {
            return super.getAll(this._normalizeKey(name));
        }
        has(name) {
            return super.has(this._normalizeKey(name));
        }
        set(name, value) {
            return super.set(this._normalizeKey(name), value);
        }
        keys() {
            return super.keys();
        }
        values() {
            return super.values();
        }
        entries() {
            return super.entries();
        }
        [Symbol.iterator]() {
            return super[Symbol.iterator]();
        }
        _normalizeKey(name) {
            return CaseInsensitiveMap.prototype._normalizeKey.call(this, name);
        }
    };
}
class URLWithoutHost extends whatwg_url_1.URL {
}
class MongoParseError extends Error {
    get name() {
        return 'MongoParseError';
    }
}
class ConnectionString extends URLWithoutHost {
    constructor(uri) {
        var _a;
        const match = uri.match(HOSTS_REGEX);
        if (!match) {
            throw new MongoParseError(`Invalid connection string "${uri}"`);
        }
        const { protocol, username, password, hosts, rest } = (_a = match.groups) !== null && _a !== void 0 ? _a : {};
        if (!protocol || !hosts) {
            throw new MongoParseError(`Protocol and host list are required in "${uri}"`);
        }
        try {
            decodeURIComponent(username !== null && username !== void 0 ? username : '');
            decodeURIComponent(password !== null && password !== void 0 ? password : '');
        }
        catch (err) {
            throw new MongoParseError(err.message);
        }
        const illegalCharacters = new RegExp(String.raw `[:/?#\[\]@]`, 'gi');
        if (username === null || username === void 0 ? void 0 : username.match(illegalCharacters)) {
            throw new MongoParseError(`Username contains unescaped characters ${username}`);
        }
        if (!username || !password) {
            const uriWithoutProtocol = uri.replace(`${protocol}://`, '');
            if (uriWithoutProtocol.startsWith('@') || uriWithoutProtocol.startsWith(':')) {
                throw new MongoParseError('URI contained empty userinfo section');
            }
        }
        if (password === null || password === void 0 ? void 0 : password.match(illegalCharacters)) {
            throw new MongoParseError('Password contains unescaped characters');
        }
        let authString = '';
        if (typeof username === 'string')
            authString += username;
        if (typeof password === 'string')
            authString += `:${password}`;
        if (authString)
            authString += '@';
        super(`${protocol.toLowerCase()}://${authString}${DUMMY_HOSTNAME}${rest}`);
        this._hosts = hosts.split(',');
        if (this.isSRV && this.hosts.length !== 1) {
            throw new MongoParseError('mongodb+srv URI cannot have multiple service names');
        }
        if (this.isSRV && this.hosts.some(host => host.includes(':'))) {
            throw new MongoParseError('mongodb+srv URI cannot have port number');
        }
        if (!this.pathname) {
            this.pathname = '/';
        }
        Object.setPrototypeOf(this.searchParams, caseInsenstiveURLSearchParams(this.searchParams.constructor).prototype);
    }
    get host() { return DUMMY_HOSTNAME; }
    set host(_ignored) { throw new Error('No single host for connection string'); }
    get hostname() { return DUMMY_HOSTNAME; }
    set hostname(_ignored) { throw new Error('No single host for connection string'); }
    get port() { return ''; }
    set port(_ignored) { throw new Error('No single host for connection string'); }
    get href() { return this.toString(); }
    set href(_ignored) { throw new Error('Cannot set href for connection strings'); }
    get isSRV() {
        return this.protocol.includes('srv');
    }
    get hosts() {
        return this._hosts;
    }
    set hosts(list) {
        this._hosts = list;
    }
    toString() {
        return super.toString().replace(DUMMY_HOSTNAME, this.hosts.join(','));
    }
    clone() {
        return new ConnectionString(this.toString());
    }
    redact(options) {
        return (0, redact_1.redactValidConnectionString)(this, options);
    }
    typedSearchParams() {
        const sametype = false && new (caseInsenstiveURLSearchParams(whatwg_url_1.URLSearchParams))();
        return this.searchParams;
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        const { href, origin, protocol, username, password, hosts, pathname, search, searchParams, hash } = this;
        return { href, origin, protocol, username, password, hosts, pathname, search, searchParams, hash };
    }
}
exports.default = ConnectionString;
class CommaAndColonSeparatedRecord extends CaseInsensitiveMap {
    constructor(from) {
        super();
        for (const entry of (from !== null && from !== void 0 ? from : '').split(',')) {
            if (!entry)
                continue;
            const colonIndex = entry.indexOf(':');
            if (colonIndex === -1) {
                this.set(entry, '');
            }
            else {
                this.set(entry.slice(0, colonIndex), entry.slice(colonIndex + 1));
            }
        }
    }
    toString() {
        return [...this].map(entry => entry.join(':')).join(',');
    }
}
exports.CommaAndColonSeparatedRecord = CommaAndColonSeparatedRecord;
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./redact":1647755346509}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346509, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redactConnectionString = exports.redactValidConnectionString = void 0;
const index_1 = __importStar(require("./index"));
function redactValidConnectionString(inputUrl, options) {
    var _a, _b;
    const url = inputUrl.clone();
    const replacementString = (_a = options === null || options === void 0 ? void 0 : options.replacementString) !== null && _a !== void 0 ? _a : '_credentials_';
    const redactUsernames = (_b = options === null || options === void 0 ? void 0 : options.redactUsernames) !== null && _b !== void 0 ? _b : true;
    if ((url.username || url.password) && redactUsernames) {
        url.username = replacementString;
        url.password = '';
    }
    else if (url.password) {
        url.password = replacementString;
    }
    if (url.searchParams.has('authMechanismProperties')) {
        const props = new index_1.CommaAndColonSeparatedRecord(url.searchParams.get('authMechanismProperties'));
        if (props.get('AWS_SESSION_TOKEN')) {
            props.set('AWS_SESSION_TOKEN', replacementString);
            url.searchParams.set('authMechanismProperties', props.toString());
        }
    }
    if (url.searchParams.has('tlsCertificateKeyFilePassword')) {
        url.searchParams.set('tlsCertificateKeyFilePassword', replacementString);
    }
    if (url.searchParams.has('proxyUsername') && redactUsernames) {
        url.searchParams.set('proxyUsername', replacementString);
    }
    if (url.searchParams.has('proxyPassword')) {
        url.searchParams.set('proxyPassword', replacementString);
    }
    return url;
}
exports.redactValidConnectionString = redactValidConnectionString;
function redactConnectionString(uri, options) {
    var _a, _b;
    const replacementString = (_a = options === null || options === void 0 ? void 0 : options.replacementString) !== null && _a !== void 0 ? _a : '<credentials>';
    const redactUsernames = (_b = options === null || options === void 0 ? void 0 : options.redactUsernames) !== null && _b !== void 0 ? _b : true;
    let parsed;
    try {
        parsed = new index_1.default(uri);
    }
    catch (_c) { }
    if (parsed) {
        options = { ...options, replacementString: '___credentials___' };
        return parsed.redact(options).toString().replace(/___credentials___/g, replacementString);
    }
    const regexes = [
        redactUsernames ? /(?<=\/\/)(.*)(?=@)/g : /(?<=\/\/[^@]+:)(.*)(?=@)/g,
        /(?<=AWS_SESSION_TOKEN(:|%3A))([^,&]+)/gi,
        /(?<=tlsCertificateKeyFilePassword=)([^&]+)/gi,
        redactUsernames ? /(?<=proxyUsername=)([^&]+)/gi : null,
        /(?<=proxyPassword=)([^&]+)/gi
    ];
    for (const r of regexes) {
        if (r !== null) {
            uri = uri.replace(r, replacementString);
        }
    }
    return uri;
}
exports.redactConnectionString = redactConnectionString;
//# sourceMappingURL=redact.js.map
}, function(modId) { var map = {"./index":1647755346508}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1647755346508);
})()
//miniprogram-npm-outsideDeps=["whatwg-url"]
//# sourceMappingURL=index.js.map