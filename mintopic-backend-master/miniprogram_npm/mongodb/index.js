module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1647755346510, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.Collection = exports.Db = exports.MongoClient = exports.Admin = exports.Promise = exports.MongoBulkWriteError = exports.MongoTopologyClosedError = exports.MongoServerClosedError = exports.MongoKerberosError = exports.MongoTransactionError = exports.MongoExpiredSessionError = exports.MongoNotConnectedError = exports.MongoCursorInUseError = exports.MongoCursorExhaustedError = exports.MongoBatchReExecutionError = exports.MongoDecompressionError = exports.MongoGridFSChunkError = exports.MongoGridFSStreamError = exports.MongoChangeStreamError = exports.MongoRuntimeError = exports.MongoWriteConcernError = exports.MongoParseError = exports.MongoServerSelectionError = exports.MongoSystemError = exports.MongoNetworkTimeoutError = exports.MongoNetworkError = exports.MongoMissingDependencyError = exports.MongoMissingCredentialsError = exports.MongoInvalidArgumentError = exports.MongoCompatibilityError = exports.MongoAPIError = exports.MongoDriverError = exports.MongoServerError = exports.MongoError = exports.ObjectID = exports.Map = exports.BSONSymbol = exports.BSONRegExp = exports.Decimal128 = exports.Timestamp = exports.ObjectId = exports.MaxKey = exports.MinKey = exports.Long = exports.Int32 = exports.Double = exports.DBRef = exports.Code = exports.Binary = void 0;
exports.SrvPollingEvent = exports.TopologyOpeningEvent = exports.TopologyDescriptionChangedEvent = exports.TopologyClosedEvent = exports.ServerOpeningEvent = exports.ServerDescriptionChangedEvent = exports.ServerClosedEvent = exports.ServerHeartbeatFailedEvent = exports.ServerHeartbeatSucceededEvent = exports.ServerHeartbeatStartedEvent = exports.ConnectionReadyEvent = exports.ConnectionPoolMonitoringEvent = exports.ConnectionPoolCreatedEvent = exports.ConnectionPoolClosedEvent = exports.ConnectionPoolClearedEvent = exports.ConnectionCreatedEvent = exports.ConnectionClosedEvent = exports.ConnectionCheckedOutEvent = exports.ConnectionCheckedInEvent = exports.ConnectionCheckOutStartedEvent = exports.ConnectionCheckOutFailedEvent = exports.CommandFailedEvent = exports.CommandSucceededEvent = exports.CommandStartedEvent = exports.ReadPreference = exports.ReadConcern = exports.WriteConcern = exports.BSONType = exports.ServerApiVersion = exports.ReadPreferenceMode = exports.ReadConcernLevel = exports.ExplainVerbosity = exports.ReturnDocument = exports.Compressor = exports.CURSOR_FLAGS = exports.AuthMechanism = exports.BatchType = exports.AutoEncryptionLoggerLevel = exports.LoggerLevel = exports.TopologyType = exports.ServerType = exports.ProfilingLevel = exports.CancellationToken = exports.GridFSBucket = exports.ListCollectionsCursor = exports.ListIndexesCursor = exports.FindCursor = exports.AggregationCursor = exports.AbstractCursor = void 0;
const abstract_cursor_1 = require("./cursor/abstract_cursor");
Object.defineProperty(exports, "AbstractCursor", { enumerable: true, get: function () { return abstract_cursor_1.AbstractCursor; } });
const aggregation_cursor_1 = require("./cursor/aggregation_cursor");
Object.defineProperty(exports, "AggregationCursor", { enumerable: true, get: function () { return aggregation_cursor_1.AggregationCursor; } });
const find_cursor_1 = require("./cursor/find_cursor");
Object.defineProperty(exports, "FindCursor", { enumerable: true, get: function () { return find_cursor_1.FindCursor; } });
const indexes_1 = require("./operations/indexes");
Object.defineProperty(exports, "ListIndexesCursor", { enumerable: true, get: function () { return indexes_1.ListIndexesCursor; } });
const list_collections_1 = require("./operations/list_collections");
Object.defineProperty(exports, "ListCollectionsCursor", { enumerable: true, get: function () { return list_collections_1.ListCollectionsCursor; } });
const promise_provider_1 = require("./promise_provider");
Object.defineProperty(exports, "Promise", { enumerable: true, get: function () { return promise_provider_1.PromiseProvider; } });
const admin_1 = require("./admin");
Object.defineProperty(exports, "Admin", { enumerable: true, get: function () { return admin_1.Admin; } });
const mongo_client_1 = require("./mongo_client");
Object.defineProperty(exports, "MongoClient", { enumerable: true, get: function () { return mongo_client_1.MongoClient; } });
const db_1 = require("./db");
Object.defineProperty(exports, "Db", { enumerable: true, get: function () { return db_1.Db; } });
const collection_1 = require("./collection");
Object.defineProperty(exports, "Collection", { enumerable: true, get: function () { return collection_1.Collection; } });
const logger_1 = require("./logger");
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return logger_1.Logger; } });
const gridfs_1 = require("./gridfs");
Object.defineProperty(exports, "GridFSBucket", { enumerable: true, get: function () { return gridfs_1.GridFSBucket; } });
const mongo_types_1 = require("./mongo_types");
Object.defineProperty(exports, "CancellationToken", { enumerable: true, get: function () { return mongo_types_1.CancellationToken; } });
var bson_1 = require("./bson");
Object.defineProperty(exports, "Binary", { enumerable: true, get: function () { return bson_1.Binary; } });
Object.defineProperty(exports, "Code", { enumerable: true, get: function () { return bson_1.Code; } });
Object.defineProperty(exports, "DBRef", { enumerable: true, get: function () { return bson_1.DBRef; } });
Object.defineProperty(exports, "Double", { enumerable: true, get: function () { return bson_1.Double; } });
Object.defineProperty(exports, "Int32", { enumerable: true, get: function () { return bson_1.Int32; } });
Object.defineProperty(exports, "Long", { enumerable: true, get: function () { return bson_1.Long; } });
Object.defineProperty(exports, "MinKey", { enumerable: true, get: function () { return bson_1.MinKey; } });
Object.defineProperty(exports, "MaxKey", { enumerable: true, get: function () { return bson_1.MaxKey; } });
Object.defineProperty(exports, "ObjectId", { enumerable: true, get: function () { return bson_1.ObjectId; } });
Object.defineProperty(exports, "Timestamp", { enumerable: true, get: function () { return bson_1.Timestamp; } });
Object.defineProperty(exports, "Decimal128", { enumerable: true, get: function () { return bson_1.Decimal128; } });
Object.defineProperty(exports, "BSONRegExp", { enumerable: true, get: function () { return bson_1.BSONRegExp; } });
Object.defineProperty(exports, "BSONSymbol", { enumerable: true, get: function () { return bson_1.BSONSymbol; } });
Object.defineProperty(exports, "Map", { enumerable: true, get: function () { return bson_1.Map; } });
const bson_2 = require("bson");
/**
 * @public
 * @deprecated Please use `ObjectId`
 */
exports.ObjectID = bson_2.ObjectId;
var error_1 = require("./error");
Object.defineProperty(exports, "MongoError", { enumerable: true, get: function () { return error_1.MongoError; } });
Object.defineProperty(exports, "MongoServerError", { enumerable: true, get: function () { return error_1.MongoServerError; } });
Object.defineProperty(exports, "MongoDriverError", { enumerable: true, get: function () { return error_1.MongoDriverError; } });
Object.defineProperty(exports, "MongoAPIError", { enumerable: true, get: function () { return error_1.MongoAPIError; } });
Object.defineProperty(exports, "MongoCompatibilityError", { enumerable: true, get: function () { return error_1.MongoCompatibilityError; } });
Object.defineProperty(exports, "MongoInvalidArgumentError", { enumerable: true, get: function () { return error_1.MongoInvalidArgumentError; } });
Object.defineProperty(exports, "MongoMissingCredentialsError", { enumerable: true, get: function () { return error_1.MongoMissingCredentialsError; } });
Object.defineProperty(exports, "MongoMissingDependencyError", { enumerable: true, get: function () { return error_1.MongoMissingDependencyError; } });
Object.defineProperty(exports, "MongoNetworkError", { enumerable: true, get: function () { return error_1.MongoNetworkError; } });
Object.defineProperty(exports, "MongoNetworkTimeoutError", { enumerable: true, get: function () { return error_1.MongoNetworkTimeoutError; } });
Object.defineProperty(exports, "MongoSystemError", { enumerable: true, get: function () { return error_1.MongoSystemError; } });
Object.defineProperty(exports, "MongoServerSelectionError", { enumerable: true, get: function () { return error_1.MongoServerSelectionError; } });
Object.defineProperty(exports, "MongoParseError", { enumerable: true, get: function () { return error_1.MongoParseError; } });
Object.defineProperty(exports, "MongoWriteConcernError", { enumerable: true, get: function () { return error_1.MongoWriteConcernError; } });
Object.defineProperty(exports, "MongoRuntimeError", { enumerable: true, get: function () { return error_1.MongoRuntimeError; } });
Object.defineProperty(exports, "MongoChangeStreamError", { enumerable: true, get: function () { return error_1.MongoChangeStreamError; } });
Object.defineProperty(exports, "MongoGridFSStreamError", { enumerable: true, get: function () { return error_1.MongoGridFSStreamError; } });
Object.defineProperty(exports, "MongoGridFSChunkError", { enumerable: true, get: function () { return error_1.MongoGridFSChunkError; } });
Object.defineProperty(exports, "MongoDecompressionError", { enumerable: true, get: function () { return error_1.MongoDecompressionError; } });
Object.defineProperty(exports, "MongoBatchReExecutionError", { enumerable: true, get: function () { return error_1.MongoBatchReExecutionError; } });
Object.defineProperty(exports, "MongoCursorExhaustedError", { enumerable: true, get: function () { return error_1.MongoCursorExhaustedError; } });
Object.defineProperty(exports, "MongoCursorInUseError", { enumerable: true, get: function () { return error_1.MongoCursorInUseError; } });
Object.defineProperty(exports, "MongoNotConnectedError", { enumerable: true, get: function () { return error_1.MongoNotConnectedError; } });
Object.defineProperty(exports, "MongoExpiredSessionError", { enumerable: true, get: function () { return error_1.MongoExpiredSessionError; } });
Object.defineProperty(exports, "MongoTransactionError", { enumerable: true, get: function () { return error_1.MongoTransactionError; } });
Object.defineProperty(exports, "MongoKerberosError", { enumerable: true, get: function () { return error_1.MongoKerberosError; } });
Object.defineProperty(exports, "MongoServerClosedError", { enumerable: true, get: function () { return error_1.MongoServerClosedError; } });
Object.defineProperty(exports, "MongoTopologyClosedError", { enumerable: true, get: function () { return error_1.MongoTopologyClosedError; } });
var common_1 = require("./bulk/common");
Object.defineProperty(exports, "MongoBulkWriteError", { enumerable: true, get: function () { return common_1.MongoBulkWriteError; } });
// enums
var set_profiling_level_1 = require("./operations/set_profiling_level");
Object.defineProperty(exports, "ProfilingLevel", { enumerable: true, get: function () { return set_profiling_level_1.ProfilingLevel; } });
var common_2 = require("./sdam/common");
Object.defineProperty(exports, "ServerType", { enumerable: true, get: function () { return common_2.ServerType; } });
Object.defineProperty(exports, "TopologyType", { enumerable: true, get: function () { return common_2.TopologyType; } });
var logger_2 = require("./logger");
Object.defineProperty(exports, "LoggerLevel", { enumerable: true, get: function () { return logger_2.LoggerLevel; } });
var deps_1 = require("./deps");
Object.defineProperty(exports, "AutoEncryptionLoggerLevel", { enumerable: true, get: function () { return deps_1.AutoEncryptionLoggerLevel; } });
var common_3 = require("./bulk/common");
Object.defineProperty(exports, "BatchType", { enumerable: true, get: function () { return common_3.BatchType; } });
var defaultAuthProviders_1 = require("./cmap/auth/defaultAuthProviders");
Object.defineProperty(exports, "AuthMechanism", { enumerable: true, get: function () { return defaultAuthProviders_1.AuthMechanism; } });
var abstract_cursor_2 = require("./cursor/abstract_cursor");
Object.defineProperty(exports, "CURSOR_FLAGS", { enumerable: true, get: function () { return abstract_cursor_2.CURSOR_FLAGS; } });
var compression_1 = require("./cmap/wire_protocol/compression");
Object.defineProperty(exports, "Compressor", { enumerable: true, get: function () { return compression_1.Compressor; } });
var find_and_modify_1 = require("./operations/find_and_modify");
Object.defineProperty(exports, "ReturnDocument", { enumerable: true, get: function () { return find_and_modify_1.ReturnDocument; } });
var explain_1 = require("./explain");
Object.defineProperty(exports, "ExplainVerbosity", { enumerable: true, get: function () { return explain_1.ExplainVerbosity; } });
var read_concern_1 = require("./read_concern");
Object.defineProperty(exports, "ReadConcernLevel", { enumerable: true, get: function () { return read_concern_1.ReadConcernLevel; } });
var read_preference_1 = require("./read_preference");
Object.defineProperty(exports, "ReadPreferenceMode", { enumerable: true, get: function () { return read_preference_1.ReadPreferenceMode; } });
var mongo_client_2 = require("./mongo_client");
Object.defineProperty(exports, "ServerApiVersion", { enumerable: true, get: function () { return mongo_client_2.ServerApiVersion; } });
var mongo_types_2 = require("./mongo_types");
Object.defineProperty(exports, "BSONType", { enumerable: true, get: function () { return mongo_types_2.BSONType; } });
// Helper classes
var write_concern_1 = require("./write_concern");
Object.defineProperty(exports, "WriteConcern", { enumerable: true, get: function () { return write_concern_1.WriteConcern; } });
var read_concern_2 = require("./read_concern");
Object.defineProperty(exports, "ReadConcern", { enumerable: true, get: function () { return read_concern_2.ReadConcern; } });
var read_preference_2 = require("./read_preference");
Object.defineProperty(exports, "ReadPreference", { enumerable: true, get: function () { return read_preference_2.ReadPreference; } });
// events
var command_monitoring_events_1 = require("./cmap/command_monitoring_events");
Object.defineProperty(exports, "CommandStartedEvent", { enumerable: true, get: function () { return command_monitoring_events_1.CommandStartedEvent; } });
Object.defineProperty(exports, "CommandSucceededEvent", { enumerable: true, get: function () { return command_monitoring_events_1.CommandSucceededEvent; } });
Object.defineProperty(exports, "CommandFailedEvent", { enumerable: true, get: function () { return command_monitoring_events_1.CommandFailedEvent; } });
var connection_pool_events_1 = require("./cmap/connection_pool_events");
Object.defineProperty(exports, "ConnectionCheckOutFailedEvent", { enumerable: true, get: function () { return connection_pool_events_1.ConnectionCheckOutFailedEvent; } });
Object.defineProperty(exports, "ConnectionCheckOutStartedEvent", { enumerable: true, get: function () { return connection_pool_events_1.ConnectionCheckOutStartedEvent; } });
Object.defineProperty(exports, "ConnectionCheckedInEvent", { enumerable: true, get: function () { return connection_pool_events_1.ConnectionCheckedInEvent; } });
Object.defineProperty(exports, "ConnectionCheckedOutEvent", { enumerable: true, get: function () { return connection_pool_events_1.ConnectionCheckedOutEvent; } });
Object.defineProperty(exports, "ConnectionClosedEvent", { enumerable: true, get: function () { return connection_pool_events_1.ConnectionClosedEvent; } });
Object.defineProperty(exports, "ConnectionCreatedEvent", { enumerable: true, get: function () { return connection_pool_events_1.ConnectionCreatedEvent; } });
Object.defineProperty(exports, "ConnectionPoolClearedEvent", { enumerable: true, get: function () { return connection_pool_events_1.ConnectionPoolClearedEvent; } });
Object.defineProperty(exports, "ConnectionPoolClosedEvent", { enumerable: true, get: function () { return connection_pool_events_1.ConnectionPoolClosedEvent; } });
Object.defineProperty(exports, "ConnectionPoolCreatedEvent", { enumerable: true, get: function () { return connection_pool_events_1.ConnectionPoolCreatedEvent; } });
Object.defineProperty(exports, "ConnectionPoolMonitoringEvent", { enumerable: true, get: function () { return connection_pool_events_1.ConnectionPoolMonitoringEvent; } });
Object.defineProperty(exports, "ConnectionReadyEvent", { enumerable: true, get: function () { return connection_pool_events_1.ConnectionReadyEvent; } });
var events_1 = require("./sdam/events");
Object.defineProperty(exports, "ServerHeartbeatStartedEvent", { enumerable: true, get: function () { return events_1.ServerHeartbeatStartedEvent; } });
Object.defineProperty(exports, "ServerHeartbeatSucceededEvent", { enumerable: true, get: function () { return events_1.ServerHeartbeatSucceededEvent; } });
Object.defineProperty(exports, "ServerHeartbeatFailedEvent", { enumerable: true, get: function () { return events_1.ServerHeartbeatFailedEvent; } });
Object.defineProperty(exports, "ServerClosedEvent", { enumerable: true, get: function () { return events_1.ServerClosedEvent; } });
Object.defineProperty(exports, "ServerDescriptionChangedEvent", { enumerable: true, get: function () { return events_1.ServerDescriptionChangedEvent; } });
Object.defineProperty(exports, "ServerOpeningEvent", { enumerable: true, get: function () { return events_1.ServerOpeningEvent; } });
Object.defineProperty(exports, "TopologyClosedEvent", { enumerable: true, get: function () { return events_1.TopologyClosedEvent; } });
Object.defineProperty(exports, "TopologyDescriptionChangedEvent", { enumerable: true, get: function () { return events_1.TopologyDescriptionChangedEvent; } });
Object.defineProperty(exports, "TopologyOpeningEvent", { enumerable: true, get: function () { return events_1.TopologyOpeningEvent; } });
var srv_polling_1 = require("./sdam/srv_polling");
Object.defineProperty(exports, "SrvPollingEvent", { enumerable: true, get: function () { return srv_polling_1.SrvPollingEvent; } });
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./cursor/abstract_cursor":1647755346511,"./cursor/aggregation_cursor":1647755346549,"./cursor/find_cursor":1647755346551,"./operations/indexes":1647755346555,"./operations/list_collections":1647755346557,"./promise_provider":1647755346513,"./admin":1647755346559,"./mongo_client":1647755346564,"./db":1647755346565,"./collection":1647755346567,"./logger":1647755346591,"./gridfs":1647755346628,"./mongo_types":1647755346546,"./error":1647755346514,"./bulk/common":1647755346571,"./operations/set_profiling_level":1647755346595,"./sdam/common":1647755346516,"./cmap/auth/defaultAuthProviders":1647755346601,"./cmap/wire_protocol/compression":1647755346541,"./operations/find_and_modify":1647755346584,"./explain":1647755346536,"./read_concern":1647755346517,"./read_preference":1647755346519,"./write_concern":1647755346515,"./cmap/command_monitoring_events":1647755346544,"./cmap/connection_pool_events":1647755346618,"./sdam/events":1647755346621,"./sdam/srv_polling":1647755346622}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346511, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.assertUninitialized = exports.AbstractCursor = exports.CURSOR_FLAGS = void 0;
const utils_1 = require("../utils");
const bson_1 = require("../bson");
const sessions_1 = require("../sessions");
const error_1 = require("../error");
const read_preference_1 = require("../read_preference");
const stream_1 = require("stream");
const execute_operation_1 = require("../operations/execute_operation");
const get_more_1 = require("../operations/get_more");
const read_concern_1 = require("../read_concern");
const mongo_types_1 = require("../mongo_types");
/** @internal */
const kId = Symbol('id');
/** @internal */
const kDocuments = Symbol('documents');
/** @internal */
const kServer = Symbol('server');
/** @internal */
const kNamespace = Symbol('namespace');
/** @internal */
const kTopology = Symbol('topology');
/** @internal */
const kSession = Symbol('session');
/** @internal */
const kOptions = Symbol('options');
/** @internal */
const kTransform = Symbol('transform');
/** @internal */
const kInitialized = Symbol('initialized');
/** @internal */
const kClosed = Symbol('closed');
/** @internal */
const kKilled = Symbol('killed');
/** @public */
exports.CURSOR_FLAGS = [
    'tailable',
    'oplogReplay',
    'noCursorTimeout',
    'awaitData',
    'exhaust',
    'partial'
];
/** @public */
class AbstractCursor extends mongo_types_1.TypedEventEmitter {
    /** @internal */
    constructor(topology, namespace, options = {}) {
        super();
        this[kTopology] = topology;
        this[kNamespace] = namespace;
        this[kDocuments] = []; // TODO: https://github.com/microsoft/TypeScript/issues/36230
        this[kInitialized] = false;
        this[kClosed] = false;
        this[kKilled] = false;
        this[kOptions] = {
            readPreference: options.readPreference && options.readPreference instanceof read_preference_1.ReadPreference
                ? options.readPreference
                : read_preference_1.ReadPreference.primary,
            ...(0, bson_1.pluckBSONSerializeOptions)(options)
        };
        const readConcern = read_concern_1.ReadConcern.fromOptions(options);
        if (readConcern) {
            this[kOptions].readConcern = readConcern;
        }
        if (typeof options.batchSize === 'number') {
            this[kOptions].batchSize = options.batchSize;
        }
        if (options.comment != null) {
            this[kOptions].comment = options.comment;
        }
        if (typeof options.maxTimeMS === 'number') {
            this[kOptions].maxTimeMS = options.maxTimeMS;
        }
        if (options.session instanceof sessions_1.ClientSession) {
            this[kSession] = options.session;
        }
    }
    get id() {
        return this[kId];
    }
    /** @internal */
    get topology() {
        return this[kTopology];
    }
    /** @internal */
    get server() {
        return this[kServer];
    }
    get namespace() {
        return this[kNamespace];
    }
    get readPreference() {
        return this[kOptions].readPreference;
    }
    get readConcern() {
        return this[kOptions].readConcern;
    }
    /** @internal */
    get session() {
        return this[kSession];
    }
    set session(clientSession) {
        this[kSession] = clientSession;
    }
    /** @internal */
    get cursorOptions() {
        return this[kOptions];
    }
    get closed() {
        return this[kClosed];
    }
    get killed() {
        return this[kKilled];
    }
    get loadBalanced() {
        return this[kTopology].loadBalanced;
    }
    /** Returns current buffered documents length */
    bufferedCount() {
        return this[kDocuments].length;
    }
    /** Returns current buffered documents */
    readBufferedDocuments(number) {
        return this[kDocuments].splice(0, number !== null && number !== void 0 ? number : this[kDocuments].length);
    }
    [Symbol.asyncIterator]() {
        return {
            next: () => this.next().then(value => value != null ? { value, done: false } : { value: undefined, done: true })
        };
    }
    stream(options) {
        if (options === null || options === void 0 ? void 0 : options.transform) {
            const transform = options.transform;
            const readable = makeCursorStream(this);
            return readable.pipe(new stream_1.Transform({
                objectMode: true,
                highWaterMark: 1,
                transform(chunk, _, callback) {
                    try {
                        const transformed = transform(chunk);
                        callback(undefined, transformed);
                    }
                    catch (err) {
                        callback(err);
                    }
                }
            }));
        }
        return makeCursorStream(this);
    }
    hasNext(callback) {
        return (0, utils_1.maybePromise)(callback, done => {
            if (this[kId] === bson_1.Long.ZERO) {
                return done(undefined, false);
            }
            if (this[kDocuments].length) {
                return done(undefined, true);
            }
            next(this, true, (err, doc) => {
                if (err)
                    return done(err);
                if (doc) {
                    this[kDocuments].unshift(doc);
                    done(undefined, true);
                    return;
                }
                done(undefined, false);
            });
        });
    }
    next(callback) {
        return (0, utils_1.maybePromise)(callback, done => {
            if (this[kId] === bson_1.Long.ZERO) {
                return done(new error_1.MongoCursorExhaustedError());
            }
            next(this, true, done);
        });
    }
    tryNext(callback) {
        return (0, utils_1.maybePromise)(callback, done => {
            if (this[kId] === bson_1.Long.ZERO) {
                return done(new error_1.MongoCursorExhaustedError());
            }
            next(this, false, done);
        });
    }
    forEach(iterator, callback) {
        if (typeof iterator !== 'function') {
            throw new error_1.MongoInvalidArgumentError('Argument "iterator" must be a function');
        }
        return (0, utils_1.maybePromise)(callback, done => {
            const transform = this[kTransform];
            const fetchDocs = () => {
                next(this, true, (err, doc) => {
                    if (err || doc == null)
                        return done(err);
                    let result;
                    // NOTE: no need to transform because `next` will do this automatically
                    try {
                        result = iterator(doc); // TODO(NODE-3283): Improve transform typing
                    }
                    catch (error) {
                        return done(error);
                    }
                    if (result === false)
                        return done();
                    // these do need to be transformed since they are copying the rest of the batch
                    const internalDocs = this[kDocuments].splice(0, this[kDocuments].length);
                    for (let i = 0; i < internalDocs.length; ++i) {
                        try {
                            result = iterator((transform ? transform(internalDocs[i]) : internalDocs[i]) // TODO(NODE-3283): Improve transform typing
                            );
                        }
                        catch (error) {
                            return done(error);
                        }
                        if (result === false)
                            return done();
                    }
                    fetchDocs();
                });
            };
            fetchDocs();
        });
    }
    close(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        const needsToEmitClosed = !this[kClosed];
        this[kClosed] = true;
        return (0, utils_1.maybePromise)(callback, done => cleanupCursor(this, { needsToEmitClosed }, done));
    }
    toArray(callback) {
        return (0, utils_1.maybePromise)(callback, done => {
            const docs = [];
            const transform = this[kTransform];
            const fetchDocs = () => {
                // NOTE: if we add a `nextBatch` then we should use it here
                next(this, true, (err, doc) => {
                    if (err)
                        return done(err);
                    if (doc == null)
                        return done(undefined, docs);
                    // NOTE: no need to transform because `next` will do this automatically
                    docs.push(doc);
                    // these do need to be transformed since they are copying the rest of the batch
                    const internalDocs = (transform
                        ? this[kDocuments].splice(0, this[kDocuments].length).map(transform)
                        : this[kDocuments].splice(0, this[kDocuments].length)); // TODO(NODE-3283): Improve transform typing
                    if (internalDocs) {
                        docs.push(...internalDocs);
                    }
                    fetchDocs();
                });
            };
            fetchDocs();
        });
    }
    /**
     * Add a cursor flag to the cursor
     *
     * @param flag - The flag to set, must be one of following ['tailable', 'oplogReplay', 'noCursorTimeout', 'awaitData', 'partial' -.
     * @param value - The flag boolean value.
     */
    addCursorFlag(flag, value) {
        assertUninitialized(this);
        if (!exports.CURSOR_FLAGS.includes(flag)) {
            throw new error_1.MongoInvalidArgumentError(`Flag ${flag} is not one of ${exports.CURSOR_FLAGS}`);
        }
        if (typeof value !== 'boolean') {
            throw new error_1.MongoInvalidArgumentError(`Flag ${flag} must be a boolean value`);
        }
        this[kOptions][flag] = value;
        return this;
    }
    /**
     * Map all documents using the provided function
     * If there is a transform set on the cursor, that will be called first and the result passed to
     * this function's transform.
     *
     * @remarks
     * **Note for Typescript Users:** adding a transform changes the return type of the iteration of this cursor,
     * it **does not** return a new instance of a cursor. This means when calling map,
     * you should always assign the result to a new variable in order to get a correctly typed cursor variable.
     * Take note of the following example:
     *
     * @example
     * ```typescript
     * const cursor: FindCursor<Document> = coll.find();
     * const mappedCursor: FindCursor<number> = cursor.map(doc => Object.keys(doc).length);
     * const keyCounts: number[] = await mappedCursor.toArray(); // cursor.toArray() still returns Document[]
     * ```
     * @param transform - The mapping transformation method.
     */
    map(transform) {
        assertUninitialized(this);
        const oldTransform = this[kTransform]; // TODO(NODE-3283): Improve transform typing
        if (oldTransform) {
            this[kTransform] = doc => {
                return transform(oldTransform(doc));
            };
        }
        else {
            this[kTransform] = transform;
        }
        return this;
    }
    /**
     * Set the ReadPreference for the cursor.
     *
     * @param readPreference - The new read preference for the cursor.
     */
    withReadPreference(readPreference) {
        assertUninitialized(this);
        if (readPreference instanceof read_preference_1.ReadPreference) {
            this[kOptions].readPreference = readPreference;
        }
        else if (typeof readPreference === 'string') {
            this[kOptions].readPreference = read_preference_1.ReadPreference.fromString(readPreference);
        }
        else {
            throw new error_1.MongoInvalidArgumentError(`Invalid read preference: ${readPreference}`);
        }
        return this;
    }
    /**
     * Set the ReadPreference for the cursor.
     *
     * @param readPreference - The new read preference for the cursor.
     */
    withReadConcern(readConcern) {
        assertUninitialized(this);
        const resolvedReadConcern = read_concern_1.ReadConcern.fromOptions({ readConcern });
        if (resolvedReadConcern) {
            this[kOptions].readConcern = resolvedReadConcern;
        }
        return this;
    }
    /**
     * Set a maxTimeMS on the cursor query, allowing for hard timeout limits on queries (Only supported on MongoDB 2.6 or higher)
     *
     * @param value - Number of milliseconds to wait before aborting the query.
     */
    maxTimeMS(value) {
        assertUninitialized(this);
        if (typeof value !== 'number') {
            throw new error_1.MongoInvalidArgumentError('Argument for maxTimeMS must be a number');
        }
        this[kOptions].maxTimeMS = value;
        return this;
    }
    /**
     * Set the batch size for the cursor.
     *
     * @param value - The number of documents to return per batch. See {@link https://docs.mongodb.com/manual/reference/command/find/|find command documentation}.
     */
    batchSize(value) {
        assertUninitialized(this);
        if (this[kOptions].tailable) {
            throw new error_1.MongoTailableCursorError('Tailable cursor does not support batchSize');
        }
        if (typeof value !== 'number') {
            throw new error_1.MongoInvalidArgumentError('Operation "batchSize" requires an integer');
        }
        this[kOptions].batchSize = value;
        return this;
    }
    /**
     * Rewind this cursor to its uninitialized state. Any options that are present on the cursor will
     * remain in effect. Iterating this cursor will cause new queries to be sent to the server, even
     * if the resultant data has already been retrieved by this cursor.
     */
    rewind() {
        if (!this[kInitialized]) {
            return;
        }
        this[kId] = undefined;
        this[kDocuments] = [];
        this[kClosed] = false;
        this[kKilled] = false;
        this[kInitialized] = false;
        const session = this[kSession];
        if (session) {
            // We only want to end this session if we created it, and it hasn't ended yet
            if (session.explicit === false && !session.hasEnded) {
                session.endSession();
            }
            this[kSession] = undefined;
        }
    }
    /** @internal */
    _getMore(batchSize, callback) {
        const cursorId = this[kId];
        const cursorNs = this[kNamespace];
        const server = this[kServer];
        if (cursorId == null) {
            callback(new error_1.MongoRuntimeError('Unable to iterate cursor with no id'));
            return;
        }
        if (server == null) {
            callback(new error_1.MongoRuntimeError('Unable to iterate cursor without selected server'));
            return;
        }
        const getMoreOperation = new get_more_1.GetMoreOperation(cursorNs, cursorId, server, {
            ...this[kOptions],
            session: this[kSession],
            batchSize
        });
        (0, execute_operation_1.executeOperation)(this.topology, getMoreOperation, callback);
    }
}
exports.AbstractCursor = AbstractCursor;
/** @event */
AbstractCursor.CLOSE = 'close';
function nextDocument(cursor) {
    if (cursor[kDocuments] == null || !cursor[kDocuments].length) {
        return null;
    }
    const doc = cursor[kDocuments].shift();
    if (doc) {
        const transform = cursor[kTransform];
        if (transform) {
            return transform(doc);
        }
        return doc;
    }
    return null;
}
function next(cursor, blocking, callback) {
    const cursorId = cursor[kId];
    if (cursor.closed) {
        return callback(undefined, null);
    }
    if (cursor[kDocuments] && cursor[kDocuments].length) {
        callback(undefined, nextDocument(cursor));
        return;
    }
    if (cursorId == null) {
        // All cursors must operate within a session, one must be made implicitly if not explicitly provided
        if (cursor[kSession] == null && cursor[kTopology].hasSessionSupport()) {
            cursor[kSession] = cursor[kTopology].startSession({ owner: cursor, explicit: false });
        }
        cursor._initialize(cursor[kSession], (err, state) => {
            if (state) {
                const response = state.response;
                cursor[kServer] = state.server;
                cursor[kSession] = state.session;
                if (response.cursor) {
                    cursor[kId] =
                        typeof response.cursor.id === 'number'
                            ? bson_1.Long.fromNumber(response.cursor.id)
                            : response.cursor.id;
                    if (response.cursor.ns) {
                        cursor[kNamespace] = (0, utils_1.ns)(response.cursor.ns);
                    }
                    cursor[kDocuments] = response.cursor.firstBatch;
                }
                else {
                    // NOTE: This is for support of older servers (<3.2) which do not use commands
                    cursor[kId] =
                        typeof response.cursorId === 'number'
                            ? bson_1.Long.fromNumber(response.cursorId)
                            : response.cursorId;
                    cursor[kDocuments] = response.documents;
                }
                // When server responses return without a cursor document, we close this cursor
                // and return the raw server response. This is often the case for explain commands
                // for example
                if (cursor[kId] == null) {
                    cursor[kId] = bson_1.Long.ZERO;
                    // TODO(NODE-3286): ExecutionResult needs to accept a generic parameter
                    cursor[kDocuments] = [state.response];
                }
            }
            // the cursor is now initialized, even if an error occurred or it is dead
            cursor[kInitialized] = true;
            if (err || cursorIsDead(cursor)) {
                return cleanupCursor(cursor, { error: err }, () => callback(err, nextDocument(cursor)));
            }
            next(cursor, blocking, callback);
        });
        return;
    }
    if (cursorIsDead(cursor)) {
        return cleanupCursor(cursor, undefined, () => callback(undefined, null));
    }
    // otherwise need to call getMore
    const batchSize = cursor[kOptions].batchSize || 1000;
    cursor._getMore(batchSize, (err, response) => {
        if (response) {
            const cursorId = typeof response.cursor.id === 'number'
                ? bson_1.Long.fromNumber(response.cursor.id)
                : response.cursor.id;
            cursor[kDocuments] = response.cursor.nextBatch;
            cursor[kId] = cursorId;
        }
        if (err || cursorIsDead(cursor)) {
            return cleanupCursor(cursor, { error: err }, () => callback(err, nextDocument(cursor)));
        }
        if (cursor[kDocuments].length === 0 && blocking === false) {
            return callback(undefined, null);
        }
        next(cursor, blocking, callback);
    });
}
function cursorIsDead(cursor) {
    const cursorId = cursor[kId];
    return !!cursorId && cursorId.isZero();
}
function cleanupCursor(cursor, options, callback) {
    var _a;
    const cursorId = cursor[kId];
    const cursorNs = cursor[kNamespace];
    const server = cursor[kServer];
    const session = cursor[kSession];
    const error = options === null || options === void 0 ? void 0 : options.error;
    const needsToEmitClosed = (_a = options === null || options === void 0 ? void 0 : options.needsToEmitClosed) !== null && _a !== void 0 ? _a : cursor[kDocuments].length === 0;
    if (error) {
        if (cursor.loadBalanced && error instanceof error_1.MongoNetworkError) {
            return completeCleanup();
        }
    }
    if (cursorId == null || server == null || cursorId.isZero() || cursorNs == null) {
        if (needsToEmitClosed) {
            cursor[kClosed] = true;
            cursor[kId] = bson_1.Long.ZERO;
            cursor.emit(AbstractCursor.CLOSE);
        }
        if (session) {
            if (session.owner === cursor) {
                return session.endSession({ error }, callback);
            }
            if (!session.inTransaction()) {
                (0, sessions_1.maybeClearPinnedConnection)(session, { error });
            }
        }
        return callback();
    }
    function completeCleanup() {
        if (session) {
            if (session.owner === cursor) {
                return session.endSession({ error }, () => {
                    cursor.emit(AbstractCursor.CLOSE);
                    callback();
                });
            }
            if (!session.inTransaction()) {
                (0, sessions_1.maybeClearPinnedConnection)(session, { error });
            }
        }
        cursor.emit(AbstractCursor.CLOSE);
        return callback();
    }
    cursor[kKilled] = true;
    server.killCursors(cursorNs, [cursorId], { ...(0, bson_1.pluckBSONSerializeOptions)(cursor[kOptions]), session }, () => completeCleanup());
}
/** @internal */
function assertUninitialized(cursor) {
    if (cursor[kInitialized]) {
        throw new error_1.MongoCursorInUseError();
    }
}
exports.assertUninitialized = assertUninitialized;
function makeCursorStream(cursor) {
    const readable = new stream_1.Readable({
        objectMode: true,
        autoDestroy: false,
        highWaterMark: 1
    });
    let initialized = false;
    let reading = false;
    let needToClose = true; // NOTE: we must close the cursor if we never read from it, use `_construct` in future node versions
    readable._read = function () {
        if (initialized === false) {
            needToClose = false;
            initialized = true;
        }
        if (!reading) {
            reading = true;
            readNext();
        }
    };
    readable._destroy = function (error, cb) {
        if (needToClose) {
            cursor.close(err => process.nextTick(cb, err || error));
        }
        else {
            cb(error);
        }
    };
    function readNext() {
        needToClose = false;
        next(cursor, true, (err, result) => {
            needToClose = err ? !cursor.closed : result != null;
            if (err) {
                // NOTE: This is questionable, but we have a test backing the behavior. It seems the
                //       desired behavior is that a stream ends cleanly when a user explicitly closes
                //       a client during iteration. Alternatively, we could do the "right" thing and
                //       propagate the error message by removing this special case.
                if (err.message.match(/server is closed/)) {
                    cursor.close();
                    return readable.push(null);
                }
                // NOTE: This is also perhaps questionable. The rationale here is that these errors tend
                //       to be "operation interrupted", where a cursor has been closed but there is an
                //       active getMore in-flight. This used to check if the cursor was killed but once
                //       that changed to happen in cleanup legitimate errors would not destroy the
                //       stream. There are change streams test specifically test these cases.
                if (err.message.match(/interrupted/)) {
                    return readable.push(null);
                }
                return readable.destroy(err);
            }
            if (result == null) {
                readable.push(null);
            }
            else if (readable.destroyed) {
                cursor.close();
            }
            else {
                if (readable.push(result)) {
                    return readNext();
                }
                reading = false;
            }
        });
    }
    return readable;
}
//# sourceMappingURL=abstract_cursor.js.map
}, function(modId) { var map = {"../utils":1647755346512,"../sessions":1647755346523,"../error":1647755346514,"../read_preference":1647755346519,"../operations/execute_operation":1647755346530,"../operations/get_more":1647755346548,"../read_concern":1647755346517,"../mongo_types":1647755346546}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346512, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = exports.parsePackageVersion = exports.supportsRetryableWrites = exports.enumToString = exports.emitWarningOnce = exports.emitWarning = exports.MONGODB_WARNING_CODE = exports.DEFAULT_PK_FACTORY = exports.HostAddress = exports.BufferPool = exports.deepCopy = exports.isRecord = exports.setDifference = exports.isSuperset = exports.resolveOptions = exports.hasAtomicOperators = exports.makeInterruptibleAsyncInterval = exports.calculateDurationInMs = exports.now = exports.makeClientMetadata = exports.makeStateMachine = exports.errorStrictEqual = exports.arrayStrictEqual = exports.eachAsyncSeries = exports.eachAsync = exports.collationNotSupported = exports.maxWireVersion = exports.uuidV4 = exports.databaseNamespace = exports.maybePromise = exports.makeCounter = exports.MongoDBNamespace = exports.ns = exports.deprecateOptions = exports.defaultMsgHandler = exports.getTopology = exports.decorateWithExplain = exports.decorateWithReadConcern = exports.decorateWithCollation = exports.isPromiseLike = exports.applyWriteConcern = exports.applyRetryableWrites = exports.executeLegacyOperation = exports.filterOptions = exports.mergeOptions = exports.isObject = exports.parseIndexOptions = exports.normalizeHintField = exports.checkCollectionName = exports.MAX_JS_INT = void 0;
const os = require("os");
const crypto = require("crypto");
const promise_provider_1 = require("./promise_provider");
const error_1 = require("./error");
const write_concern_1 = require("./write_concern");
const common_1 = require("./sdam/common");
const read_concern_1 = require("./read_concern");
const bson_1 = require("./bson");
const read_preference_1 = require("./read_preference");
const url_1 = require("url");
const constants_1 = require("./cmap/wire_protocol/constants");
exports.MAX_JS_INT = Number.MAX_SAFE_INTEGER + 1;
/**
 * Throws if collectionName is not a valid mongodb collection namespace.
 * @internal
 */
function checkCollectionName(collectionName) {
    if ('string' !== typeof collectionName) {
        throw new error_1.MongoInvalidArgumentError('Collection name must be a String');
    }
    if (!collectionName || collectionName.indexOf('..') !== -1) {
        throw new error_1.MongoInvalidArgumentError('Collection names cannot be empty');
    }
    if (collectionName.indexOf('$') !== -1 &&
        collectionName.match(/((^\$cmd)|(oplog\.\$main))/) == null) {
        // TODO(NODE-3483): Use MongoNamespace static method
        throw new error_1.MongoInvalidArgumentError("Collection names must not contain '$'");
    }
    if (collectionName.match(/^\.|\.$/) != null) {
        // TODO(NODE-3483): Use MongoNamespace static method
        throw new error_1.MongoInvalidArgumentError("Collection names must not start or end with '.'");
    }
    // Validate that we are not passing 0x00 in the collection name
    if (collectionName.indexOf('\x00') !== -1) {
        // TODO(NODE-3483): Use MongoNamespace static method
        throw new error_1.MongoInvalidArgumentError('Collection names cannot contain a null character');
    }
}
exports.checkCollectionName = checkCollectionName;
/**
 * Ensure Hint field is in a shape we expect:
 * - object of index names mapping to 1 or -1
 * - just an index name
 * @internal
 */
function normalizeHintField(hint) {
    let finalHint = undefined;
    if (typeof hint === 'string') {
        finalHint = hint;
    }
    else if (Array.isArray(hint)) {
        finalHint = {};
        hint.forEach(param => {
            finalHint[param] = 1;
        });
    }
    else if (hint != null && typeof hint === 'object') {
        finalHint = {};
        for (const name in hint) {
            finalHint[name] = hint[name];
        }
    }
    return finalHint;
}
exports.normalizeHintField = normalizeHintField;
/**
 * Create an index specifier based on
 * @internal
 */
function parseIndexOptions(indexSpec) {
    const fieldHash = {};
    const indexes = [];
    let keys;
    // Get all the fields accordingly
    if ('string' === typeof indexSpec) {
        // 'type'
        indexes.push(indexSpec + '_' + 1);
        fieldHash[indexSpec] = 1;
    }
    else if (Array.isArray(indexSpec)) {
        indexSpec.forEach((f) => {
            if ('string' === typeof f) {
                // [{location:'2d'}, 'type']
                indexes.push(f + '_' + 1);
                fieldHash[f] = 1;
            }
            else if (Array.isArray(f)) {
                // [['location', '2d'],['type', 1]]
                indexes.push(f[0] + '_' + (f[1] || 1));
                fieldHash[f[0]] = f[1] || 1;
            }
            else if (isObject(f)) {
                // [{location:'2d'}, {type:1}]
                keys = Object.keys(f);
                keys.forEach(k => {
                    indexes.push(k + '_' + f[k]);
                    fieldHash[k] = f[k];
                });
            }
            else {
                // undefined (ignore)
            }
        });
    }
    else if (isObject(indexSpec)) {
        // {location:'2d', type:1}
        keys = Object.keys(indexSpec);
        Object.entries(indexSpec).forEach(([key, value]) => {
            indexes.push(key + '_' + value);
            fieldHash[key] = value;
        });
    }
    return {
        name: indexes.join('_'),
        keys: keys,
        fieldHash: fieldHash
    };
}
exports.parseIndexOptions = parseIndexOptions;
/**
 * Checks if arg is an Object:
 * - **NOTE**: the check is based on the `[Symbol.toStringTag]() === 'Object'`
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isObject(arg) {
    return '[object Object]' === Object.prototype.toString.call(arg);
}
exports.isObject = isObject;
/** @internal */
function mergeOptions(target, source) {
    return { ...target, ...source };
}
exports.mergeOptions = mergeOptions;
/** @internal */
function filterOptions(options, names) {
    const filterOptions = {};
    for (const name in options) {
        if (names.includes(name)) {
            filterOptions[name] = options[name];
        }
    }
    // Filtered options
    return filterOptions;
}
exports.filterOptions = filterOptions;
/**
 * Executes the given operation with provided arguments.
 *
 * @remarks
 * This method reduces large amounts of duplication in the entire codebase by providing
 * a single point for determining whether callbacks or promises should be used. Additionally
 * it allows for a single point of entry to provide features such as implicit sessions, which
 * are required by the Driver Sessions specification in the event that a ClientSession is
 * not provided
 *
 * @internal
 *
 * @param topology - The topology to execute this operation on
 * @param operation - The operation to execute
 * @param args - Arguments to apply the provided operation
 * @param options - Options that modify the behavior of the method
 */
function executeLegacyOperation(topology, operation, args, options) {
    const Promise = promise_provider_1.PromiseProvider.get();
    if (!Array.isArray(args)) {
        // TODO(NODE-3483)
        throw new error_1.MongoRuntimeError('This method requires an array of arguments to apply');
    }
    options = options !== null && options !== void 0 ? options : {};
    let callback = args[args.length - 1];
    // The driver sessions spec mandates that we implicitly create sessions for operations
    // that are not explicitly provided with a session.
    let session;
    let opOptions;
    let owner;
    if (!options.skipSessions && topology.hasSessionSupport()) {
        opOptions = args[args.length - 2];
        if (opOptions == null || opOptions.session == null) {
            owner = Symbol();
            session = topology.startSession({ owner });
            const optionsIndex = args.length - 2;
            args[optionsIndex] = Object.assign({}, args[optionsIndex], { session: session });
        }
        else if (opOptions.session && opOptions.session.hasEnded) {
            throw new error_1.MongoExpiredSessionError();
        }
    }
    function makeExecuteCallback(resolve, reject) {
        return function (err, result) {
            if (session && session.owner === owner && !(options === null || options === void 0 ? void 0 : options.returnsCursor)) {
                session.endSession(() => {
                    delete opOptions.session;
                    if (err)
                        return reject(err);
                    resolve(result);
                });
            }
            else {
                if (err)
                    return reject(err);
                resolve(result);
            }
        };
    }
    // Execute using callback
    if (typeof callback === 'function') {
        callback = args.pop();
        const handler = makeExecuteCallback(result => callback(undefined, result), err => callback(err, null));
        args.push(handler);
        try {
            return operation(...args);
        }
        catch (e) {
            handler(e);
            throw e;
        }
    }
    // Return a Promise
    if (args[args.length - 1] != null) {
        // TODO(NODE-3483)
        throw new error_1.MongoRuntimeError('Final argument to `executeLegacyOperation` must be a callback');
    }
    return new Promise((resolve, reject) => {
        const handler = makeExecuteCallback(resolve, reject);
        args[args.length - 1] = handler;
        try {
            return operation(...args);
        }
        catch (e) {
            handler(e);
        }
    });
}
exports.executeLegacyOperation = executeLegacyOperation;
/**
 * Applies retryWrites: true to a command if retryWrites is set on the command's database.
 * @internal
 *
 * @param target - The target command to which we will apply retryWrites.
 * @param db - The database from which we can inherit a retryWrites value.
 */
function applyRetryableWrites(target, db) {
    var _a;
    if (db && ((_a = db.s.options) === null || _a === void 0 ? void 0 : _a.retryWrites)) {
        target.retryWrites = true;
    }
    return target;
}
exports.applyRetryableWrites = applyRetryableWrites;
/**
 * Applies a write concern to a command based on well defined inheritance rules, optionally
 * detecting support for the write concern in the first place.
 * @internal
 *
 * @param target - the target command we will be applying the write concern to
 * @param sources - sources where we can inherit default write concerns from
 * @param options - optional settings passed into a command for write concern overrides
 */
function applyWriteConcern(target, sources, options) {
    options = options !== null && options !== void 0 ? options : {};
    const db = sources.db;
    const coll = sources.collection;
    if (options.session && options.session.inTransaction()) {
        // writeConcern is not allowed within a multi-statement transaction
        if (target.writeConcern) {
            delete target.writeConcern;
        }
        return target;
    }
    const writeConcern = write_concern_1.WriteConcern.fromOptions(options);
    if (writeConcern) {
        return Object.assign(target, { writeConcern });
    }
    if (coll && coll.writeConcern) {
        return Object.assign(target, { writeConcern: Object.assign({}, coll.writeConcern) });
    }
    if (db && db.writeConcern) {
        return Object.assign(target, { writeConcern: Object.assign({}, db.writeConcern) });
    }
    return target;
}
exports.applyWriteConcern = applyWriteConcern;
/**
 * Checks if a given value is a Promise
 *
 * @typeParam T - The result type of maybePromise
 * @param maybePromise - An object that could be a promise
 * @returns true if the provided value is a Promise
 */
function isPromiseLike(maybePromise) {
    return !!maybePromise && typeof maybePromise.then === 'function';
}
exports.isPromiseLike = isPromiseLike;
/**
 * Applies collation to a given command.
 * @internal
 *
 * @param command - the command on which to apply collation
 * @param target - target of command
 * @param options - options containing collation settings
 */
function decorateWithCollation(command, target, options) {
    const capabilities = getTopology(target).capabilities;
    if (options.collation && typeof options.collation === 'object') {
        if (capabilities && capabilities.commandsTakeCollation) {
            command.collation = options.collation;
        }
        else {
            throw new error_1.MongoCompatibilityError(`Current topology does not support collation`);
        }
    }
}
exports.decorateWithCollation = decorateWithCollation;
/**
 * Applies a read concern to a given command.
 * @internal
 *
 * @param command - the command on which to apply the read concern
 * @param coll - the parent collection of the operation calling this method
 */
function decorateWithReadConcern(command, coll, options) {
    if (options && options.session && options.session.inTransaction()) {
        return;
    }
    const readConcern = Object.assign({}, command.readConcern || {});
    if (coll.s.readConcern) {
        Object.assign(readConcern, coll.s.readConcern);
    }
    if (Object.keys(readConcern).length > 0) {
        Object.assign(command, { readConcern: readConcern });
    }
}
exports.decorateWithReadConcern = decorateWithReadConcern;
/**
 * Applies an explain to a given command.
 * @internal
 *
 * @param command - the command on which to apply the explain
 * @param options - the options containing the explain verbosity
 */
function decorateWithExplain(command, explain) {
    if (command.explain) {
        return command;
    }
    return { explain: command, verbosity: explain.verbosity };
}
exports.decorateWithExplain = decorateWithExplain;
/**
 * A helper function to get the topology from a given provider. Throws
 * if the topology cannot be found.
 * @internal
 */
function getTopology(provider) {
    if (`topology` in provider && provider.topology) {
        return provider.topology;
    }
    else if ('client' in provider.s && provider.s.client.topology) {
        return provider.s.client.topology;
    }
    else if ('db' in provider.s && provider.s.db.s.client.topology) {
        return provider.s.db.s.client.topology;
    }
    throw new error_1.MongoNotConnectedError('MongoClient must be connected to perform this operation');
}
exports.getTopology = getTopology;
/**
 * Default message handler for generating deprecation warnings.
 * @internal
 *
 * @param name - function name
 * @param option - option name
 * @returns warning message
 */
function defaultMsgHandler(name, option) {
    return `${name} option [${option}] is deprecated and will be removed in a later version.`;
}
exports.defaultMsgHandler = defaultMsgHandler;
/**
 * Deprecates a given function's options.
 * @internal
 *
 * @param this - the bound class if this is a method
 * @param config - configuration for deprecation
 * @param fn - the target function of deprecation
 * @returns modified function that warns once per deprecated option, and executes original function
 */
function deprecateOptions(config, fn) {
    if (process.noDeprecation === true) {
        return fn;
    }
    const msgHandler = config.msgHandler ? config.msgHandler : defaultMsgHandler;
    const optionsWarned = new Set();
    function deprecated(...args) {
        const options = args[config.optionsIndex];
        // ensure options is a valid, non-empty object, otherwise short-circuit
        if (!isObject(options) || Object.keys(options).length === 0) {
            return fn.bind(this)(...args); // call the function, no change
        }
        // interrupt the function call with a warning
        for (const deprecatedOption of config.deprecatedOptions) {
            if (deprecatedOption in options && !optionsWarned.has(deprecatedOption)) {
                optionsWarned.add(deprecatedOption);
                const msg = msgHandler(config.name, deprecatedOption);
                emitWarning(msg);
                if (this && 'getLogger' in this) {
                    const logger = this.getLogger();
                    if (logger) {
                        logger.warn(msg);
                    }
                }
            }
        }
        return fn.bind(this)(...args);
    }
    // These lines copied from https://github.com/nodejs/node/blob/25e5ae41688676a5fd29b2e2e7602168eee4ceb5/lib/internal/util.js#L73-L80
    // The wrapper will keep the same prototype as fn to maintain prototype chain
    Object.setPrototypeOf(deprecated, fn);
    if (fn.prototype) {
        // Setting this (rather than using Object.setPrototype, as above) ensures
        // that calling the unwrapped constructor gives an instanceof the wrapped
        // constructor.
        deprecated.prototype = fn.prototype;
    }
    return deprecated;
}
exports.deprecateOptions = deprecateOptions;
/** @internal */
function ns(ns) {
    return MongoDBNamespace.fromString(ns);
}
exports.ns = ns;
/** @public */
class MongoDBNamespace {
    /**
     * Create a namespace object
     *
     * @param db - database name
     * @param collection - collection name
     */
    constructor(db, collection) {
        this.db = db;
        this.collection = collection;
    }
    toString() {
        return this.collection ? `${this.db}.${this.collection}` : this.db;
    }
    withCollection(collection) {
        return new MongoDBNamespace(this.db, collection);
    }
    static fromString(namespace) {
        if (!namespace) {
            // TODO(NODE-3483): Replace with MongoNamespaceError
            throw new error_1.MongoRuntimeError(`Cannot parse namespace from "${namespace}"`);
        }
        const [db, ...collection] = namespace.split('.');
        return new MongoDBNamespace(db, collection.join('.'));
    }
}
exports.MongoDBNamespace = MongoDBNamespace;
/** @internal */
function* makeCounter(seed = 0) {
    let count = seed;
    while (true) {
        const newCount = count;
        count += 1;
        yield newCount;
    }
}
exports.makeCounter = makeCounter;
/**
 * Helper function for either accepting a callback, or returning a promise
 * @internal
 *
 * @param callback - The last function argument in exposed method, controls if a Promise is returned
 * @param wrapper - A function that wraps the callback
 * @returns Returns void if a callback is supplied, else returns a Promise.
 */
function maybePromise(callback, wrapper) {
    const Promise = promise_provider_1.PromiseProvider.get();
    let result;
    if (typeof callback !== 'function') {
        result = new Promise((resolve, reject) => {
            callback = (err, res) => {
                if (err)
                    return reject(err);
                resolve(res);
            };
        });
    }
    wrapper((err, res) => {
        if (err != null) {
            try {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                callback(err);
            }
            catch (error) {
                process.nextTick(() => {
                    throw error;
                });
            }
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        callback(err, res);
    });
    return result;
}
exports.maybePromise = maybePromise;
/** @internal */
function databaseNamespace(ns) {
    return ns.split('.')[0];
}
exports.databaseNamespace = databaseNamespace;
/**
 * Synchronously Generate a UUIDv4
 * @internal
 */
function uuidV4() {
    const result = crypto.randomBytes(16);
    result[6] = (result[6] & 0x0f) | 0x40;
    result[8] = (result[8] & 0x3f) | 0x80;
    return result;
}
exports.uuidV4 = uuidV4;
/**
 * A helper function for determining `maxWireVersion` between legacy and new topology instances
 * @internal
 */
function maxWireVersion(topologyOrServer) {
    if (topologyOrServer) {
        if (topologyOrServer.loadBalanced) {
            // Since we do not have a monitor, we assume the load balanced server is always
            // pointed at the latest mongodb version. There is a risk that for on-prem
            // deployments that don't upgrade immediately that this could alert to the
            // application that a feature is avaiable that is actually not.
            return constants_1.MAX_SUPPORTED_WIRE_VERSION;
        }
        if (topologyOrServer.ismaster) {
            return topologyOrServer.ismaster.maxWireVersion;
        }
        if ('lastIsMaster' in topologyOrServer && typeof topologyOrServer.lastIsMaster === 'function') {
            const lastIsMaster = topologyOrServer.lastIsMaster();
            if (lastIsMaster) {
                return lastIsMaster.maxWireVersion;
            }
        }
        if (topologyOrServer.description &&
            'maxWireVersion' in topologyOrServer.description &&
            topologyOrServer.description.maxWireVersion != null) {
            return topologyOrServer.description.maxWireVersion;
        }
    }
    return 0;
}
exports.maxWireVersion = maxWireVersion;
/**
 * Checks that collation is supported by server.
 * @internal
 *
 * @param server - to check against
 * @param cmd - object where collation may be specified
 */
function collationNotSupported(server, cmd) {
    return cmd && cmd.collation && maxWireVersion(server) < 5;
}
exports.collationNotSupported = collationNotSupported;
/**
 * Applies the function `eachFn` to each item in `arr`, in parallel.
 * @internal
 *
 * @param arr - An array of items to asynchronously iterate over
 * @param eachFn - A function to call on each item of the array. The callback signature is `(item, callback)`, where the callback indicates iteration is complete.
 * @param callback - The callback called after every item has been iterated
 */
function eachAsync(arr, eachFn, callback) {
    arr = arr || [];
    let idx = 0;
    let awaiting = 0;
    for (idx = 0; idx < arr.length; ++idx) {
        awaiting++;
        eachFn(arr[idx], eachCallback);
    }
    if (awaiting === 0) {
        callback();
        return;
    }
    function eachCallback(err) {
        awaiting--;
        if (err) {
            callback(err);
            return;
        }
        if (idx === arr.length && awaiting <= 0) {
            callback();
        }
    }
}
exports.eachAsync = eachAsync;
/** @internal */
function eachAsyncSeries(arr, eachFn, callback) {
    arr = arr || [];
    let idx = 0;
    let awaiting = arr.length;
    if (awaiting === 0) {
        callback();
        return;
    }
    function eachCallback(err) {
        idx++;
        awaiting--;
        if (err) {
            callback(err);
            return;
        }
        if (idx === arr.length && awaiting <= 0) {
            callback();
            return;
        }
        eachFn(arr[idx], eachCallback);
    }
    eachFn(arr[idx], eachCallback);
}
exports.eachAsyncSeries = eachAsyncSeries;
/** @internal */
function arrayStrictEqual(arr, arr2) {
    if (!Array.isArray(arr) || !Array.isArray(arr2)) {
        return false;
    }
    return arr.length === arr2.length && arr.every((elt, idx) => elt === arr2[idx]);
}
exports.arrayStrictEqual = arrayStrictEqual;
/** @internal */
function errorStrictEqual(lhs, rhs) {
    if (lhs === rhs) {
        return true;
    }
    if (!lhs || !rhs) {
        return lhs === rhs;
    }
    if ((lhs == null && rhs != null) || (lhs != null && rhs == null)) {
        return false;
    }
    if (lhs.constructor.name !== rhs.constructor.name) {
        return false;
    }
    if (lhs.message !== rhs.message) {
        return false;
    }
    return true;
}
exports.errorStrictEqual = errorStrictEqual;
/** @internal */
function makeStateMachine(stateTable) {
    return function stateTransition(target, newState) {
        const legalStates = stateTable[target.s.state];
        if (legalStates && legalStates.indexOf(newState) < 0) {
            throw new error_1.MongoRuntimeError(`illegal state transition from [${target.s.state}] => [${newState}], allowed: [${legalStates}]`);
        }
        target.emit('stateChanged', target.s.state, newState);
        target.s.state = newState;
    };
}
exports.makeStateMachine = makeStateMachine;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NODE_DRIVER_VERSION = require('../package.json').version;
function makeClientMetadata(options) {
    options = options !== null && options !== void 0 ? options : {};
    const metadata = {
        driver: {
            name: 'nodejs',
            version: NODE_DRIVER_VERSION
        },
        os: {
            type: os.type(),
            name: process.platform,
            architecture: process.arch,
            version: os.release()
        },
        platform: `Node.js ${process.version}, ${os.endianness()} (unified)`
    };
    // support optionally provided wrapping driver info
    if (options.driverInfo) {
        if (options.driverInfo.name) {
            metadata.driver.name = `${metadata.driver.name}|${options.driverInfo.name}`;
        }
        if (options.driverInfo.version) {
            metadata.version = `${metadata.driver.version}|${options.driverInfo.version}`;
        }
        if (options.driverInfo.platform) {
            metadata.platform = `${metadata.platform}|${options.driverInfo.platform}`;
        }
    }
    if (options.appName) {
        // MongoDB requires the appName not exceed a byte length of 128
        const buffer = Buffer.from(options.appName);
        metadata.application = {
            name: buffer.byteLength > 128 ? buffer.slice(0, 128).toString('utf8') : options.appName
        };
    }
    return metadata;
}
exports.makeClientMetadata = makeClientMetadata;
/** @internal */
function now() {
    const hrtime = process.hrtime();
    return Math.floor(hrtime[0] * 1000 + hrtime[1] / 1000000);
}
exports.now = now;
/** @internal */
function calculateDurationInMs(started) {
    if (typeof started !== 'number') {
        throw new error_1.MongoInvalidArgumentError('Numeric value required to calculate duration');
    }
    const elapsed = now() - started;
    return elapsed < 0 ? 0 : elapsed;
}
exports.calculateDurationInMs = calculateDurationInMs;
/**
 * Creates an interval timer which is able to be woken up sooner than
 * the interval. The timer will also debounce multiple calls to wake
 * ensuring that the function is only ever called once within a minimum
 * interval window.
 * @internal
 *
 * @param fn - An async function to run on an interval, must accept a `callback` as its only parameter
 */
function makeInterruptibleAsyncInterval(fn, options) {
    let timerId;
    let lastCallTime;
    let cannotBeExpedited = false;
    let stopped = false;
    options = options !== null && options !== void 0 ? options : {};
    const interval = options.interval || 1000;
    const minInterval = options.minInterval || 500;
    const immediate = typeof options.immediate === 'boolean' ? options.immediate : false;
    const clock = typeof options.clock === 'function' ? options.clock : now;
    function wake() {
        const currentTime = clock();
        const nextScheduledCallTime = lastCallTime + interval;
        const timeUntilNextCall = nextScheduledCallTime - currentTime;
        // For the streaming protocol: there is nothing obviously stopping this
        // interval from being woken up again while we are waiting "infinitely"
        // for `fn` to be called again`. Since the function effectively
        // never completes, the `timeUntilNextCall` will continue to grow
        // negatively unbounded, so it will never trigger a reschedule here.
        // This is possible in virtualized environments like AWS Lambda where our
        // clock is unreliable. In these cases the timer is "running" but never
        // actually completes, so we want to execute immediately and then attempt
        // to reschedule.
        if (timeUntilNextCall < 0) {
            executeAndReschedule();
            return;
        }
        // debounce multiple calls to wake within the `minInterval`
        if (cannotBeExpedited) {
            return;
        }
        // reschedule a call as soon as possible, ensuring the call never happens
        // faster than the `minInterval`
        if (timeUntilNextCall > minInterval) {
            reschedule(minInterval);
            cannotBeExpedited = true;
        }
    }
    function stop() {
        stopped = true;
        if (timerId) {
            clearTimeout(timerId);
            timerId = undefined;
        }
        lastCallTime = 0;
        cannotBeExpedited = false;
    }
    function reschedule(ms) {
        if (stopped)
            return;
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(executeAndReschedule, ms || interval);
    }
    function executeAndReschedule() {
        cannotBeExpedited = false;
        lastCallTime = clock();
        fn(err => {
            if (err)
                throw err;
            reschedule(interval);
        });
    }
    if (immediate) {
        executeAndReschedule();
    }
    else {
        lastCallTime = clock();
        reschedule(undefined);
    }
    return { wake, stop };
}
exports.makeInterruptibleAsyncInterval = makeInterruptibleAsyncInterval;
/** @internal */
function hasAtomicOperators(doc) {
    if (Array.isArray(doc)) {
        for (const document of doc) {
            if (hasAtomicOperators(document)) {
                return true;
            }
        }
        return false;
    }
    const keys = Object.keys(doc);
    return keys.length > 0 && keys[0][0] === '$';
}
exports.hasAtomicOperators = hasAtomicOperators;
/**
 * Merge inherited properties from parent into options, prioritizing values from options,
 * then values from parent.
 * @internal
 */
function resolveOptions(parent, options) {
    var _a, _b, _c;
    const result = Object.assign({}, options, (0, bson_1.resolveBSONOptions)(options, parent));
    // Users cannot pass a readConcern/writeConcern to operations in a transaction
    const session = options === null || options === void 0 ? void 0 : options.session;
    if (!(session === null || session === void 0 ? void 0 : session.inTransaction())) {
        const readConcern = (_a = read_concern_1.ReadConcern.fromOptions(options)) !== null && _a !== void 0 ? _a : parent === null || parent === void 0 ? void 0 : parent.readConcern;
        if (readConcern) {
            result.readConcern = readConcern;
        }
        const writeConcern = (_b = write_concern_1.WriteConcern.fromOptions(options)) !== null && _b !== void 0 ? _b : parent === null || parent === void 0 ? void 0 : parent.writeConcern;
        if (writeConcern) {
            result.writeConcern = writeConcern;
        }
    }
    const readPreference = (_c = read_preference_1.ReadPreference.fromOptions(options)) !== null && _c !== void 0 ? _c : parent === null || parent === void 0 ? void 0 : parent.readPreference;
    if (readPreference) {
        result.readPreference = readPreference;
    }
    return result;
}
exports.resolveOptions = resolveOptions;
function isSuperset(set, subset) {
    set = Array.isArray(set) ? new Set(set) : set;
    subset = Array.isArray(subset) ? new Set(subset) : subset;
    for (const elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}
exports.isSuperset = isSuperset;
/** Returns the items that are uniquely in setA */
function setDifference(setA, setB) {
    const difference = new Set(setA);
    for (const elem of setB) {
        difference.delete(elem);
    }
    return difference;
}
exports.setDifference = setDifference;
function isRecord(value, requiredKeys = undefined) {
    const toString = Object.prototype.toString;
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const isObject = (v) => toString.call(v) === '[object Object]';
    if (!isObject(value)) {
        return false;
    }
    const ctor = value.constructor;
    if (ctor && ctor.prototype) {
        if (!isObject(ctor.prototype)) {
            return false;
        }
        // Check to see if some method exists from the Object exists
        if (!hasOwnProperty.call(ctor.prototype, 'isPrototypeOf')) {
            return false;
        }
    }
    if (requiredKeys) {
        const keys = Object.keys(value);
        return isSuperset(keys, requiredKeys);
    }
    return true;
}
exports.isRecord = isRecord;
/**
 * Make a deep copy of an object
 *
 * NOTE: This is not meant to be the perfect implementation of a deep copy,
 * but instead something that is good enough for the purposes of
 * command monitoring.
 */
function deepCopy(value) {
    if (value == null) {
        return value;
    }
    else if (Array.isArray(value)) {
        return value.map(item => deepCopy(item));
    }
    else if (isRecord(value)) {
        const res = {};
        for (const key in value) {
            res[key] = deepCopy(value[key]);
        }
        return res;
    }
    const ctor = value.constructor;
    if (ctor) {
        switch (ctor.name.toLowerCase()) {
            case 'date':
                return new ctor(Number(value));
            case 'map':
                return new Map(value);
            case 'set':
                return new Set(value);
            case 'buffer':
                return Buffer.from(value);
        }
    }
    return value;
}
exports.deepCopy = deepCopy;
/** @internal */
const kBuffers = Symbol('buffers');
/** @internal */
const kLength = Symbol('length');
/**
 * A pool of Buffers which allow you to read them as if they were one
 * @internal
 */
class BufferPool {
    constructor() {
        this[kBuffers] = [];
        this[kLength] = 0;
    }
    get length() {
        return this[kLength];
    }
    /** Adds a buffer to the internal buffer pool list */
    append(buffer) {
        this[kBuffers].push(buffer);
        this[kLength] += buffer.length;
    }
    /** Returns the requested number of bytes without consuming them */
    peek(size) {
        return this.read(size, false);
    }
    /** Reads the requested number of bytes, optionally consuming them */
    read(size, consume = true) {
        if (typeof size !== 'number' || size < 0) {
            throw new error_1.MongoInvalidArgumentError('Argument "size" must be a non-negative number');
        }
        if (size > this[kLength]) {
            return Buffer.alloc(0);
        }
        let result;
        // read the whole buffer
        if (size === this.length) {
            result = Buffer.concat(this[kBuffers]);
            if (consume) {
                this[kBuffers] = [];
                this[kLength] = 0;
            }
        }
        // size is within first buffer, no need to concat
        else if (size <= this[kBuffers][0].length) {
            result = this[kBuffers][0].slice(0, size);
            if (consume) {
                this[kBuffers][0] = this[kBuffers][0].slice(size);
                this[kLength] -= size;
            }
        }
        // size is beyond first buffer, need to track and copy
        else {
            result = Buffer.allocUnsafe(size);
            let idx;
            let offset = 0;
            let bytesToCopy = size;
            for (idx = 0; idx < this[kBuffers].length; ++idx) {
                let bytesCopied;
                if (bytesToCopy > this[kBuffers][idx].length) {
                    bytesCopied = this[kBuffers][idx].copy(result, offset, 0);
                    offset += bytesCopied;
                }
                else {
                    bytesCopied = this[kBuffers][idx].copy(result, offset, 0, bytesToCopy);
                    if (consume) {
                        this[kBuffers][idx] = this[kBuffers][idx].slice(bytesCopied);
                    }
                    offset += bytesCopied;
                    break;
                }
                bytesToCopy -= bytesCopied;
            }
            // compact the internal buffer array
            if (consume) {
                this[kBuffers] = this[kBuffers].slice(idx);
                this[kLength] -= size;
            }
        }
        return result;
    }
}
exports.BufferPool = BufferPool;
/** @public */
class HostAddress {
    constructor(hostString) {
        const escapedHost = hostString.split(' ').join('%20'); // escape spaces, for socket path hosts
        const { hostname, port } = new url_1.URL(`mongodb://${escapedHost}`);
        if (hostname.endsWith('.sock')) {
            // heuristically determine if we're working with a domain socket
            this.socketPath = decodeURIComponent(hostname);
        }
        else if (typeof hostname === 'string') {
            this.isIPv6 = false;
            let normalized = decodeURIComponent(hostname).toLowerCase();
            if (normalized.startsWith('[') && normalized.endsWith(']')) {
                this.isIPv6 = true;
                normalized = normalized.substring(1, hostname.length - 1);
            }
            this.host = normalized.toLowerCase();
            if (typeof port === 'number') {
                this.port = port;
            }
            else if (typeof port === 'string' && port !== '') {
                this.port = Number.parseInt(port, 10);
            }
            else {
                this.port = 27017;
            }
            if (this.port === 0) {
                throw new error_1.MongoParseError('Invalid port (zero) with hostname');
            }
        }
        else {
            throw new error_1.MongoInvalidArgumentError('Either socketPath or host must be defined.');
        }
        Object.freeze(this);
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.inspect();
    }
    inspect() {
        return `new HostAddress('${this.toString(true)}')`;
    }
    /**
     * @param ipv6Brackets - optionally request ipv6 bracket notation required for connection strings
     */
    toString(ipv6Brackets = false) {
        if (typeof this.host === 'string') {
            if (this.isIPv6 && ipv6Brackets) {
                return `[${this.host}]:${this.port}`;
            }
            return `${this.host}:${this.port}`;
        }
        return `${this.socketPath}`;
    }
    static fromString(s) {
        return new HostAddress(s);
    }
    static fromSrvRecord({ name, port }) {
        return HostAddress.fromString(`${name}:${port}`);
    }
}
exports.HostAddress = HostAddress;
exports.DEFAULT_PK_FACTORY = {
    // We prefer not to rely on ObjectId having a createPk method
    createPk() {
        return new bson_1.ObjectId();
    }
};
/**
 * When the driver used emitWarning the code will be equal to this.
 * @public
 *
 * @example
 * ```js
 * process.on('warning', (warning) => {
 *  if (warning.code === MONGODB_WARNING_CODE) console.error('Ah an important warning! :)')
 * })
 * ```
 */
exports.MONGODB_WARNING_CODE = 'MONGODB DRIVER';
/** @internal */
function emitWarning(message) {
    return process.emitWarning(message, { code: exports.MONGODB_WARNING_CODE });
}
exports.emitWarning = emitWarning;
const emittedWarnings = new Set();
/**
 * Will emit a warning once for the duration of the application.
 * Uses the message to identify if it has already been emitted
 * so using string interpolation can cause multiple emits
 * @internal
 */
function emitWarningOnce(message) {
    if (!emittedWarnings.has(message)) {
        emittedWarnings.add(message);
        return emitWarning(message);
    }
}
exports.emitWarningOnce = emitWarningOnce;
/**
 * Takes a JS object and joins the values into a string separated by ', '
 */
function enumToString(en) {
    return Object.values(en).join(', ');
}
exports.enumToString = enumToString;
/**
 * Determine if a server supports retryable writes.
 *
 * @internal
 */
function supportsRetryableWrites(server) {
    return (!!server.loadBalanced ||
        (server.description.maxWireVersion >= 6 &&
            !!server.description.logicalSessionTimeoutMinutes &&
            server.description.type !== common_1.ServerType.Standalone));
}
exports.supportsRetryableWrites = supportsRetryableWrites;
function parsePackageVersion({ version }) {
    const [major, minor, patch] = version.split('.').map((n) => Number.parseInt(n, 10));
    return { major, minor, patch };
}
exports.parsePackageVersion = parsePackageVersion;
/**
 * Fisher–Yates Shuffle
 *
 * Reference: https://bost.ocks.org/mike/shuffle/
 * @param sequence - items to be shuffled
 * @param limit - Defaults to `0`. If nonzero shuffle will slice the randomized array e.g, `.slice(0, limit)` otherwise will return the entire randomized array.
 */
function shuffle(sequence, limit = 0) {
    const items = Array.from(sequence); // shallow copy in order to never shuffle the input
    if (limit > items.length) {
        throw new error_1.MongoRuntimeError('Limit must be less than the number of items');
    }
    let remainingItemsToShuffle = items.length;
    const lowerBound = limit % items.length === 0 ? 1 : items.length - limit;
    while (remainingItemsToShuffle > lowerBound) {
        // Pick a remaining element
        const randomIndex = Math.floor(Math.random() * remainingItemsToShuffle);
        remainingItemsToShuffle -= 1;
        // And swap it with the current element
        const swapHold = items[remainingItemsToShuffle];
        items[remainingItemsToShuffle] = items[randomIndex];
        items[randomIndex] = swapHold;
    }
    return limit % items.length === 0 ? items : items.slice(lowerBound);
}
exports.shuffle = shuffle;
//# sourceMappingURL=utils.js.map
}, function(modId) { var map = {"./promise_provider":1647755346513,"./error":1647755346514,"./write_concern":1647755346515,"./sdam/common":1647755346516,"./read_concern":1647755346517,"./read_preference":1647755346519,"./cmap/wire_protocol/constants":1647755346520,"../package.json":1647755346521}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346513, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseProvider = void 0;
const error_1 = require("./error");
/** @internal */
const kPromise = Symbol('promise');
const store = {
    [kPromise]: undefined
};
/**
 * Global promise store allowing user-provided promises
 * @public
 */
class PromiseProvider {
    /** Validates the passed in promise library */
    static validate(lib) {
        if (typeof lib !== 'function')
            throw new error_1.MongoInvalidArgumentError(`Promise must be a function, got ${lib}`);
        return !!lib;
    }
    /** Sets the promise library */
    static set(lib) {
        if (!PromiseProvider.validate(lib)) {
            // validate
            return;
        }
        store[kPromise] = lib;
    }
    /** Get the stored promise library, or resolves passed in */
    static get() {
        return store[kPromise];
    }
}
exports.PromiseProvider = PromiseProvider;
PromiseProvider.set(global.Promise);
//# sourceMappingURL=promise_provider.js.map
}, function(modId) { var map = {"./error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346514, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.isResumableError = exports.isNetworkTimeoutError = exports.isSDAMUnrecoverableError = exports.isNodeShuttingDownError = exports.isRetryableError = exports.isRetryableWriteError = exports.isRetryableEndTransactionError = exports.MongoWriteConcernError = exports.MongoServerSelectionError = exports.MongoSystemError = exports.MongoMissingDependencyError = exports.MongoMissingCredentialsError = exports.MongoCompatibilityError = exports.MongoInvalidArgumentError = exports.MongoParseError = exports.MongoNetworkTimeoutError = exports.MongoNetworkError = exports.isNetworkErrorBeforeHandshake = exports.MongoTopologyClosedError = exports.MongoCursorExhaustedError = exports.MongoServerClosedError = exports.MongoCursorInUseError = exports.MongoGridFSChunkError = exports.MongoGridFSStreamError = exports.MongoTailableCursorError = exports.MongoChangeStreamError = exports.MongoKerberosError = exports.MongoExpiredSessionError = exports.MongoTransactionError = exports.MongoNotConnectedError = exports.MongoDecompressionError = exports.MongoBatchReExecutionError = exports.MongoRuntimeError = exports.MongoAPIError = exports.MongoDriverError = exports.MongoServerError = exports.MongoError = exports.GET_MORE_RESUMABLE_CODES = exports.MONGODB_ERROR_CODES = exports.NODE_IS_RECOVERING_ERROR_MESSAGE = exports.LEGACY_NOT_PRIMARY_OR_SECONDARY_ERROR_MESSAGE = exports.LEGACY_NOT_WRITABLE_PRIMARY_ERROR_MESSAGE = void 0;
/** @internal */
const kErrorLabels = Symbol('errorLabels');
/**
 * @internal
 * The legacy error message from the server that indicates the node is not a writable primary
 * https://github.com/mongodb/specifications/blob/b07c26dc40d04ac20349f989db531c9845fdd755/source/server-discovery-and-monitoring/server-discovery-and-monitoring.rst#not-writable-primary-and-node-is-recovering
 */
exports.LEGACY_NOT_WRITABLE_PRIMARY_ERROR_MESSAGE = 'not master';
/**
 * @internal
 * The legacy error message from the server that indicates the node is not a primary or secondary
 * https://github.com/mongodb/specifications/blob/b07c26dc40d04ac20349f989db531c9845fdd755/source/server-discovery-and-monitoring/server-discovery-and-monitoring.rst#not-writable-primary-and-node-is-recovering
 */
exports.LEGACY_NOT_PRIMARY_OR_SECONDARY_ERROR_MESSAGE = 'not master or secondary';
/**
 * @internal
 * The error message from the server that indicates the node is recovering
 * https://github.com/mongodb/specifications/blob/b07c26dc40d04ac20349f989db531c9845fdd755/source/server-discovery-and-monitoring/server-discovery-and-monitoring.rst#not-writable-primary-and-node-is-recovering
 */
exports.NODE_IS_RECOVERING_ERROR_MESSAGE = 'node is recovering';
/** @internal MongoDB Error Codes */
exports.MONGODB_ERROR_CODES = Object.freeze({
    HostUnreachable: 6,
    HostNotFound: 7,
    NetworkTimeout: 89,
    ShutdownInProgress: 91,
    PrimarySteppedDown: 189,
    ExceededTimeLimit: 262,
    SocketException: 9001,
    NotWritablePrimary: 10107,
    InterruptedAtShutdown: 11600,
    InterruptedDueToReplStateChange: 11602,
    NotPrimaryNoSecondaryOk: 13435,
    NotPrimaryOrSecondary: 13436,
    StaleShardVersion: 63,
    StaleEpoch: 150,
    StaleConfig: 13388,
    RetryChangeStream: 234,
    FailedToSatisfyReadPreference: 133,
    CursorNotFound: 43,
    LegacyNotPrimary: 10058,
    WriteConcernFailed: 64,
    NamespaceNotFound: 26,
    IllegalOperation: 20,
    MaxTimeMSExpired: 50,
    UnknownReplWriteConcern: 79,
    UnsatisfiableWriteConcern: 100
});
// From spec@https://github.com/mongodb/specifications/blob/f93d78191f3db2898a59013a7ed5650352ef6da8/source/change-streams/change-streams.rst#resumable-error
exports.GET_MORE_RESUMABLE_CODES = new Set([
    exports.MONGODB_ERROR_CODES.HostUnreachable,
    exports.MONGODB_ERROR_CODES.HostNotFound,
    exports.MONGODB_ERROR_CODES.NetworkTimeout,
    exports.MONGODB_ERROR_CODES.ShutdownInProgress,
    exports.MONGODB_ERROR_CODES.PrimarySteppedDown,
    exports.MONGODB_ERROR_CODES.ExceededTimeLimit,
    exports.MONGODB_ERROR_CODES.SocketException,
    exports.MONGODB_ERROR_CODES.NotWritablePrimary,
    exports.MONGODB_ERROR_CODES.InterruptedAtShutdown,
    exports.MONGODB_ERROR_CODES.InterruptedDueToReplStateChange,
    exports.MONGODB_ERROR_CODES.NotPrimaryNoSecondaryOk,
    exports.MONGODB_ERROR_CODES.NotPrimaryOrSecondary,
    exports.MONGODB_ERROR_CODES.StaleShardVersion,
    exports.MONGODB_ERROR_CODES.StaleEpoch,
    exports.MONGODB_ERROR_CODES.StaleConfig,
    exports.MONGODB_ERROR_CODES.RetryChangeStream,
    exports.MONGODB_ERROR_CODES.FailedToSatisfyReadPreference,
    exports.MONGODB_ERROR_CODES.CursorNotFound
]);
/**
 * @public
 * @category Error
 *
 * @privateRemarks
 * CSFLE has a dependency on this error, it uses the constructor with a string argument
 */
class MongoError extends Error {
    constructor(message) {
        if (message instanceof Error) {
            super(message.message);
        }
        else {
            super(message);
        }
    }
    get name() {
        return 'MongoError';
    }
    /** Legacy name for server error responses */
    get errmsg() {
        return this.message;
    }
    /**
     * Checks the error to see if it has an error label
     *
     * @param label - The error label to check for
     * @returns returns true if the error has the provided error label
     */
    hasErrorLabel(label) {
        if (this[kErrorLabels] == null) {
            return false;
        }
        return this[kErrorLabels].has(label);
    }
    addErrorLabel(label) {
        if (this[kErrorLabels] == null) {
            this[kErrorLabels] = new Set();
        }
        this[kErrorLabels].add(label);
    }
    get errorLabels() {
        return this[kErrorLabels] ? Array.from(this[kErrorLabels]) : [];
    }
}
exports.MongoError = MongoError;
/**
 * An error coming from the mongo server
 *
 * @public
 * @category Error
 */
class MongoServerError extends MongoError {
    constructor(message) {
        super(message.message || message.errmsg || message.$err || 'n/a');
        if (message.errorLabels) {
            this[kErrorLabels] = new Set(message.errorLabels);
        }
        for (const name in message) {
            if (name !== 'errorLabels' && name !== 'errmsg' && name !== 'message')
                this[name] = message[name];
        }
    }
    get name() {
        return 'MongoServerError';
    }
}
exports.MongoServerError = MongoServerError;
/**
 * An error generated by the driver
 *
 * @public
 * @category Error
 */
class MongoDriverError extends MongoError {
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoDriverError';
    }
}
exports.MongoDriverError = MongoDriverError;
/**
 * An error generated when the driver API is used incorrectly
 *
 * @privateRemarks
 * Should **never** be directly instantiated
 *
 * @public
 * @category Error
 */
class MongoAPIError extends MongoDriverError {
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoAPIError';
    }
}
exports.MongoAPIError = MongoAPIError;
/**
 * An error generated when the driver encounters unexpected input
 * or reaches an unexpected/invalid internal state
 *
 * @privateRemarks
 * Should **never** be directly instantiated.
 *
 * @public
 * @category Error
 */
class MongoRuntimeError extends MongoDriverError {
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoRuntimeError';
    }
}
exports.MongoRuntimeError = MongoRuntimeError;
/**
 * An error generated when a batch command is reexecuted after one of the commands in the batch
 * has failed
 *
 * @public
 * @category Error
 */
class MongoBatchReExecutionError extends MongoAPIError {
    constructor(message = 'This batch has already been executed, create new batch to execute') {
        super(message);
    }
    get name() {
        return 'MongoBatchReExecutionError';
    }
}
exports.MongoBatchReExecutionError = MongoBatchReExecutionError;
/**
 * An error generated when the driver fails to decompress
 * data received from the server.
 *
 * @public
 * @category Error
 */
class MongoDecompressionError extends MongoRuntimeError {
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoDecompressionError';
    }
}
exports.MongoDecompressionError = MongoDecompressionError;
/**
 * An error thrown when the user attempts to operate on a database or collection through a MongoClient
 * that has not yet successfully called the "connect" method
 *
 * @public
 * @category Error
 */
class MongoNotConnectedError extends MongoAPIError {
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoNotConnectedError';
    }
}
exports.MongoNotConnectedError = MongoNotConnectedError;
/**
 * An error generated when the user makes a mistake in the usage of transactions.
 * (e.g. attempting to commit a transaction with a readPreference other than primary)
 *
 * @public
 * @category Error
 */
class MongoTransactionError extends MongoAPIError {
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoTransactionError';
    }
}
exports.MongoTransactionError = MongoTransactionError;
/**
 * An error generated when the user attempts to operate
 * on a session that has expired or has been closed.
 *
 * @public
 * @category Error
 */
class MongoExpiredSessionError extends MongoAPIError {
    constructor(message = 'Cannot use a session that has ended') {
        super(message);
    }
    get name() {
        return 'MongoExpiredSessionError';
    }
}
exports.MongoExpiredSessionError = MongoExpiredSessionError;
/**
 * A error generated when the user attempts to authenticate
 * via Kerberos, but fails to connect to the Kerberos client.
 *
 * @public
 * @category Error
 */
class MongoKerberosError extends MongoRuntimeError {
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoKerberosError';
    }
}
exports.MongoKerberosError = MongoKerberosError;
/**
 * An error generated when a ChangeStream operation fails to execute.
 *
 * @public
 * @category Error
 */
class MongoChangeStreamError extends MongoRuntimeError {
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoChangeStreamError';
    }
}
exports.MongoChangeStreamError = MongoChangeStreamError;
/**
 * An error thrown when the user calls a function or method not supported on a tailable cursor
 *
 * @public
 * @category Error
 */
class MongoTailableCursorError extends MongoAPIError {
    constructor(message = 'Tailable cursor does not support this operation') {
        super(message);
    }
    get name() {
        return 'MongoTailableCursorError';
    }
}
exports.MongoTailableCursorError = MongoTailableCursorError;
/** An error generated when a GridFSStream operation fails to execute.
 *
 * @public
 * @category Error
 */
class MongoGridFSStreamError extends MongoRuntimeError {
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoGridFSStreamError';
    }
}
exports.MongoGridFSStreamError = MongoGridFSStreamError;
/**
 * An error generated when a malformed or invalid chunk is
 * encountered when reading from a GridFSStream.
 *
 * @public
 * @category Error
 */
class MongoGridFSChunkError extends MongoRuntimeError {
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoGridFSChunkError';
    }
}
exports.MongoGridFSChunkError = MongoGridFSChunkError;
/**
 * An error thrown when the user attempts to add options to a cursor that has already been
 * initialized
 *
 * @public
 * @category Error
 */
class MongoCursorInUseError extends MongoAPIError {
    constructor(message = 'Cursor is already initialized') {
        super(message);
    }
    get name() {
        return 'MongoCursorInUseError';
    }
}
exports.MongoCursorInUseError = MongoCursorInUseError;
/**
 * An error generated when an attempt is made to operate
 * on a closed/closing server.
 *
 * @public
 * @category Error
 */
class MongoServerClosedError extends MongoAPIError {
    constructor(message = 'Server is closed') {
        super(message);
    }
    get name() {
        return 'MongoServerClosedError';
    }
}
exports.MongoServerClosedError = MongoServerClosedError;
/**
 * An error thrown when an attempt is made to read from a cursor that has been exhausted
 *
 * @public
 * @category Error
 */
class MongoCursorExhaustedError extends MongoAPIError {
    constructor(message) {
        super(message || 'Cursor is exhausted');
    }
    get name() {
        return 'MongoCursorExhaustedError';
    }
}
exports.MongoCursorExhaustedError = MongoCursorExhaustedError;
/**
 * An error generated when an attempt is made to operate on a
 * dropped, or otherwise unavailable, database.
 *
 * @public
 * @category Error
 */
class MongoTopologyClosedError extends MongoAPIError {
    constructor(message = 'Topology is closed') {
        super(message);
    }
    get name() {
        return 'MongoTopologyClosedError';
    }
}
exports.MongoTopologyClosedError = MongoTopologyClosedError;
/** @internal */
const kBeforeHandshake = Symbol('beforeHandshake');
function isNetworkErrorBeforeHandshake(err) {
    return err[kBeforeHandshake] === true;
}
exports.isNetworkErrorBeforeHandshake = isNetworkErrorBeforeHandshake;
/**
 * An error indicating an issue with the network, including TCP errors and timeouts.
 * @public
 * @category Error
 */
class MongoNetworkError extends MongoError {
    constructor(message, options) {
        super(message);
        if (options && typeof options.beforeHandshake === 'boolean') {
            this[kBeforeHandshake] = options.beforeHandshake;
        }
    }
    get name() {
        return 'MongoNetworkError';
    }
}
exports.MongoNetworkError = MongoNetworkError;
/**
 * An error indicating a network timeout occurred
 * @public
 * @category Error
 *
 * @privateRemarks
 * CSFLE has a dependency on this error with an instanceof check
 */
class MongoNetworkTimeoutError extends MongoNetworkError {
    constructor(message, options) {
        super(message, options);
    }
    get name() {
        return 'MongoNetworkTimeoutError';
    }
}
exports.MongoNetworkTimeoutError = MongoNetworkTimeoutError;
/**
 * An error used when attempting to parse a value (like a connection string)
 * @public
 * @category Error
 */
class MongoParseError extends MongoDriverError {
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoParseError';
    }
}
exports.MongoParseError = MongoParseError;
/**
 * An error generated when the user supplies malformed or unexpected arguments
 * or when a required argument or field is not provided.
 *
 *
 * @public
 * @category Error
 */
class MongoInvalidArgumentError extends MongoAPIError {
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoInvalidArgumentError';
    }
}
exports.MongoInvalidArgumentError = MongoInvalidArgumentError;
/**
 * An error generated when a feature that is not enabled or allowed for the current server
 * configuration is used
 *
 *
 * @public
 * @category Error
 */
class MongoCompatibilityError extends MongoAPIError {
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoCompatibilityError';
    }
}
exports.MongoCompatibilityError = MongoCompatibilityError;
/**
 * An error generated when the user fails to provide authentication credentials before attempting
 * to connect to a mongo server instance.
 *
 *
 * @public
 * @category Error
 */
class MongoMissingCredentialsError extends MongoAPIError {
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoMissingCredentialsError';
    }
}
exports.MongoMissingCredentialsError = MongoMissingCredentialsError;
/**
 * An error generated when a required module or dependency is not present in the local environment
 *
 * @public
 * @category Error
 */
class MongoMissingDependencyError extends MongoAPIError {
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoMissingDependencyError';
    }
}
exports.MongoMissingDependencyError = MongoMissingDependencyError;
/**
 * An error signifying a general system issue
 * @public
 * @category Error
 */
class MongoSystemError extends MongoError {
    constructor(message, reason) {
        if (reason && reason.error) {
            super(reason.error.message || reason.error);
        }
        else {
            super(message);
        }
        if (reason) {
            this.reason = reason;
        }
    }
    get name() {
        return 'MongoSystemError';
    }
}
exports.MongoSystemError = MongoSystemError;
/**
 * An error signifying a client-side server selection error
 * @public
 * @category Error
 */
class MongoServerSelectionError extends MongoSystemError {
    constructor(message, reason) {
        super(message, reason);
    }
    get name() {
        return 'MongoServerSelectionError';
    }
}
exports.MongoServerSelectionError = MongoServerSelectionError;
function makeWriteConcernResultObject(input) {
    const output = Object.assign({}, input);
    if (output.ok === 0) {
        output.ok = 1;
        delete output.errmsg;
        delete output.code;
        delete output.codeName;
    }
    return output;
}
/**
 * An error thrown when the server reports a writeConcernError
 * @public
 * @category Error
 */
class MongoWriteConcernError extends MongoServerError {
    constructor(message, result) {
        if (result && Array.isArray(result.errorLabels)) {
            message.errorLabels = result.errorLabels;
        }
        super(message);
        this.errInfo = message.errInfo;
        if (result != null) {
            this.result = makeWriteConcernResultObject(result);
        }
    }
    get name() {
        return 'MongoWriteConcernError';
    }
}
exports.MongoWriteConcernError = MongoWriteConcernError;
// see: https://github.com/mongodb/specifications/blob/master/source/retryable-writes/retryable-writes.rst#terms
const RETRYABLE_ERROR_CODES = new Set([
    exports.MONGODB_ERROR_CODES.HostUnreachable,
    exports.MONGODB_ERROR_CODES.HostNotFound,
    exports.MONGODB_ERROR_CODES.NetworkTimeout,
    exports.MONGODB_ERROR_CODES.ShutdownInProgress,
    exports.MONGODB_ERROR_CODES.PrimarySteppedDown,
    exports.MONGODB_ERROR_CODES.SocketException,
    exports.MONGODB_ERROR_CODES.NotWritablePrimary,
    exports.MONGODB_ERROR_CODES.InterruptedAtShutdown,
    exports.MONGODB_ERROR_CODES.InterruptedDueToReplStateChange,
    exports.MONGODB_ERROR_CODES.NotPrimaryNoSecondaryOk,
    exports.MONGODB_ERROR_CODES.NotPrimaryOrSecondary
]);
const RETRYABLE_WRITE_ERROR_CODES = new Set([
    exports.MONGODB_ERROR_CODES.InterruptedAtShutdown,
    exports.MONGODB_ERROR_CODES.InterruptedDueToReplStateChange,
    exports.MONGODB_ERROR_CODES.NotWritablePrimary,
    exports.MONGODB_ERROR_CODES.NotPrimaryNoSecondaryOk,
    exports.MONGODB_ERROR_CODES.NotPrimaryOrSecondary,
    exports.MONGODB_ERROR_CODES.PrimarySteppedDown,
    exports.MONGODB_ERROR_CODES.ShutdownInProgress,
    exports.MONGODB_ERROR_CODES.HostNotFound,
    exports.MONGODB_ERROR_CODES.HostUnreachable,
    exports.MONGODB_ERROR_CODES.NetworkTimeout,
    exports.MONGODB_ERROR_CODES.SocketException,
    exports.MONGODB_ERROR_CODES.ExceededTimeLimit
]);
function isRetryableEndTransactionError(error) {
    return error.hasErrorLabel('RetryableWriteError');
}
exports.isRetryableEndTransactionError = isRetryableEndTransactionError;
function isRetryableWriteError(error) {
    var _a, _b, _c;
    if (error instanceof MongoWriteConcernError) {
        return RETRYABLE_WRITE_ERROR_CODES.has((_c = (_b = (_a = error.result) === null || _a === void 0 ? void 0 : _a.code) !== null && _b !== void 0 ? _b : error.code) !== null && _c !== void 0 ? _c : 0);
    }
    return typeof error.code === 'number' && RETRYABLE_WRITE_ERROR_CODES.has(error.code);
}
exports.isRetryableWriteError = isRetryableWriteError;
/** Determines whether an error is something the driver should attempt to retry */
function isRetryableError(error) {
    return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    (typeof error.code === 'number' && RETRYABLE_ERROR_CODES.has(error.code)) ||
        error instanceof MongoNetworkError ||
        !!error.message.match(new RegExp(exports.LEGACY_NOT_WRITABLE_PRIMARY_ERROR_MESSAGE)) ||
        !!error.message.match(new RegExp(exports.NODE_IS_RECOVERING_ERROR_MESSAGE)));
}
exports.isRetryableError = isRetryableError;
const SDAM_RECOVERING_CODES = new Set([
    exports.MONGODB_ERROR_CODES.ShutdownInProgress,
    exports.MONGODB_ERROR_CODES.PrimarySteppedDown,
    exports.MONGODB_ERROR_CODES.InterruptedAtShutdown,
    exports.MONGODB_ERROR_CODES.InterruptedDueToReplStateChange,
    exports.MONGODB_ERROR_CODES.NotPrimaryOrSecondary
]);
const SDAM_NOTPRIMARY_CODES = new Set([
    exports.MONGODB_ERROR_CODES.NotWritablePrimary,
    exports.MONGODB_ERROR_CODES.NotPrimaryNoSecondaryOk,
    exports.MONGODB_ERROR_CODES.LegacyNotPrimary
]);
const SDAM_NODE_SHUTTING_DOWN_ERROR_CODES = new Set([
    exports.MONGODB_ERROR_CODES.InterruptedAtShutdown,
    exports.MONGODB_ERROR_CODES.ShutdownInProgress
]);
function isRecoveringError(err) {
    if (typeof err.code === 'number') {
        // If any error code exists, we ignore the error.message
        return SDAM_RECOVERING_CODES.has(err.code);
    }
    return (new RegExp(exports.LEGACY_NOT_PRIMARY_OR_SECONDARY_ERROR_MESSAGE).test(err.message) ||
        new RegExp(exports.NODE_IS_RECOVERING_ERROR_MESSAGE).test(err.message));
}
function isNotWritablePrimaryError(err) {
    if (typeof err.code === 'number') {
        // If any error code exists, we ignore the error.message
        return SDAM_NOTPRIMARY_CODES.has(err.code);
    }
    if (isRecoveringError(err)) {
        return false;
    }
    return new RegExp(exports.LEGACY_NOT_WRITABLE_PRIMARY_ERROR_MESSAGE).test(err.message);
}
function isNodeShuttingDownError(err) {
    return !!(typeof err.code === 'number' && SDAM_NODE_SHUTTING_DOWN_ERROR_CODES.has(err.code));
}
exports.isNodeShuttingDownError = isNodeShuttingDownError;
/**
 * Determines whether SDAM can recover from a given error. If it cannot
 * then the pool will be cleared, and server state will completely reset
 * locally.
 *
 * @see https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.rst#not-master-and-node-is-recovering
 */
function isSDAMUnrecoverableError(error) {
    // NOTE: null check is here for a strictly pre-CMAP world, a timeout or
    //       close event are considered unrecoverable
    if (error instanceof MongoParseError || error == null) {
        return true;
    }
    return isRecoveringError(error) || isNotWritablePrimaryError(error);
}
exports.isSDAMUnrecoverableError = isSDAMUnrecoverableError;
function isNetworkTimeoutError(err) {
    return !!(err instanceof MongoNetworkError && err.message.match(/timed out/));
}
exports.isNetworkTimeoutError = isNetworkTimeoutError;
// From spec@https://github.com/mongodb/specifications/blob/7a2e93d85935ee4b1046a8d2ad3514c657dc74fa/source/change-streams/change-streams.rst#resumable-error:
//
// An error is considered resumable if it meets any of the following criteria:
// - any error encountered which is not a server error (e.g. a timeout error or network error)
// - any server error response from a getMore command excluding those containing the error label
//   NonRetryableChangeStreamError and those containing the following error codes:
//   - Interrupted: 11601
//   - CappedPositionLost: 136
//   - CursorKilled: 237
//
// An error on an aggregate command is not a resumable error. Only errors on a getMore command may be considered resumable errors.
function isResumableError(error, wireVersion) {
    if (error instanceof MongoNetworkError) {
        return true;
    }
    if (wireVersion != null && wireVersion >= 9) {
        // DRIVERS-1308: For 4.4 drivers running against 4.4 servers, drivers will add a special case to treat the CursorNotFound error code as resumable
        if (error && error instanceof MongoError && error.code === 43) {
            return true;
        }
        return error instanceof MongoError && error.hasErrorLabel('ResumableChangeStreamError');
    }
    if (error && typeof error.code === 'number') {
        return exports.GET_MORE_RESUMABLE_CODES.has(error.code);
    }
    return false;
}
exports.isResumableError = isResumableError;
//# sourceMappingURL=error.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346515, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteConcern = exports.WRITE_CONCERN_KEYS = void 0;
exports.WRITE_CONCERN_KEYS = ['w', 'wtimeout', 'j', 'journal', 'fsync'];
/**
 * A MongoDB WriteConcern, which describes the level of acknowledgement
 * requested from MongoDB for write operations.
 * @public
 *
 * @see https://docs.mongodb.com/manual/reference/write-concern/
 */
class WriteConcern {
    /**
     * Constructs a WriteConcern from the write concern properties.
     * @param w - request acknowledgment that the write operation has propagated to a specified number of mongod instances or to mongod instances with specified tags.
     * @param wtimeout - specify a time limit to prevent write operations from blocking indefinitely
     * @param j - request acknowledgment that the write operation has been written to the on-disk journal
     * @param fsync - equivalent to the j option
     */
    constructor(w, wtimeout, j, fsync) {
        if (w != null) {
            if (!Number.isNaN(Number(w))) {
                this.w = Number(w);
            }
            else {
                this.w = w;
            }
        }
        if (wtimeout != null) {
            this.wtimeout = wtimeout;
        }
        if (j != null) {
            this.j = j;
        }
        if (fsync != null) {
            this.fsync = fsync;
        }
    }
    /** Construct a WriteConcern given an options object. */
    static fromOptions(options, inherit) {
        if (options == null)
            return undefined;
        inherit = inherit !== null && inherit !== void 0 ? inherit : {};
        let opts;
        if (typeof options === 'string' || typeof options === 'number') {
            opts = { w: options };
        }
        else if (options instanceof WriteConcern) {
            opts = options;
        }
        else {
            opts = options.writeConcern;
        }
        const parentOpts = inherit instanceof WriteConcern ? inherit : inherit.writeConcern;
        const { w = undefined, wtimeout = undefined, j = undefined, fsync = undefined, journal = undefined, wtimeoutMS = undefined } = {
            ...parentOpts,
            ...opts
        };
        if (w != null ||
            wtimeout != null ||
            wtimeoutMS != null ||
            j != null ||
            journal != null ||
            fsync != null) {
            return new WriteConcern(w, wtimeout !== null && wtimeout !== void 0 ? wtimeout : wtimeoutMS, j !== null && j !== void 0 ? j : journal, fsync);
        }
        return undefined;
    }
}
exports.WriteConcern = WriteConcern;
//# sourceMappingURL=write_concern.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346516, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports._advanceClusterTime = exports.clearAndRemoveTimerFrom = exports.drainTimerQueue = exports.ServerType = exports.TopologyType = exports.STATE_CONNECTED = exports.STATE_CONNECTING = exports.STATE_CLOSED = exports.STATE_CLOSING = void 0;
// shared state names
exports.STATE_CLOSING = 'closing';
exports.STATE_CLOSED = 'closed';
exports.STATE_CONNECTING = 'connecting';
exports.STATE_CONNECTED = 'connected';
/**
 * An enumeration of topology types we know about
 * @public
 */
exports.TopologyType = Object.freeze({
    Single: 'Single',
    ReplicaSetNoPrimary: 'ReplicaSetNoPrimary',
    ReplicaSetWithPrimary: 'ReplicaSetWithPrimary',
    Sharded: 'Sharded',
    Unknown: 'Unknown',
    LoadBalanced: 'LoadBalanced'
});
/**
 * An enumeration of server types we know about
 * @public
 */
exports.ServerType = Object.freeze({
    Standalone: 'Standalone',
    Mongos: 'Mongos',
    PossiblePrimary: 'PossiblePrimary',
    RSPrimary: 'RSPrimary',
    RSSecondary: 'RSSecondary',
    RSArbiter: 'RSArbiter',
    RSOther: 'RSOther',
    RSGhost: 'RSGhost',
    Unknown: 'Unknown',
    LoadBalancer: 'LoadBalancer'
});
/** @internal */
function drainTimerQueue(queue) {
    queue.forEach(clearTimeout);
    queue.clear();
}
exports.drainTimerQueue = drainTimerQueue;
/** @internal */
function clearAndRemoveTimerFrom(timer, timers) {
    clearTimeout(timer);
    return timers.delete(timer);
}
exports.clearAndRemoveTimerFrom = clearAndRemoveTimerFrom;
/** Shared function to determine clusterTime for a given topology or session */
function _advanceClusterTime(entity, $clusterTime) {
    if (entity.clusterTime == null) {
        entity.clusterTime = $clusterTime;
    }
    else {
        if ($clusterTime.clusterTime.greaterThan(entity.clusterTime.clusterTime)) {
            entity.clusterTime = $clusterTime;
        }
    }
}
exports._advanceClusterTime = _advanceClusterTime;
//# sourceMappingURL=common.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346517, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadConcern = exports.ReadConcernLevel = void 0;
/** @public */
exports.ReadConcernLevel = Object.freeze({
    local: 'local',
    majority: 'majority',
    linearizable: 'linearizable',
    available: 'available',
    snapshot: 'snapshot'
});
/**
 * The MongoDB ReadConcern, which allows for control of the consistency and isolation properties
 * of the data read from replica sets and replica set shards.
 * @public
 *
 * @see https://docs.mongodb.com/manual/reference/read-concern/index.html
 */
class ReadConcern {
    /** Constructs a ReadConcern from the read concern level.*/
    constructor(level) {
        var _a;
        /**
         * A spec test exists that allows level to be any string.
         * "invalid readConcern with out stage"
         * @see ./test/spec/crud/v2/aggregate-out-readConcern.json
         * @see https://github.com/mongodb/specifications/blob/master/source/read-write-concern/read-write-concern.rst#unknown-levels-and-additional-options-for-string-based-readconcerns
         */
        this.level = (_a = exports.ReadConcernLevel[level]) !== null && _a !== void 0 ? _a : level;
    }
    /**
     * Construct a ReadConcern given an options object.
     *
     * @param options - The options object from which to extract the write concern.
     */
    static fromOptions(options) {
        if (options == null) {
            return;
        }
        if (options.readConcern) {
            const { readConcern } = options;
            if (readConcern instanceof ReadConcern) {
                return readConcern;
            }
            else if (typeof readConcern === 'string') {
                return new ReadConcern(readConcern);
            }
            else if ('level' in readConcern && readConcern.level) {
                return new ReadConcern(readConcern.level);
            }
        }
        if (options.level) {
            return new ReadConcern(options.level);
        }
    }
    static get MAJORITY() {
        return exports.ReadConcernLevel.majority;
    }
    static get AVAILABLE() {
        return exports.ReadConcernLevel.available;
    }
    static get LINEARIZABLE() {
        return exports.ReadConcernLevel.linearizable;
    }
    static get SNAPSHOT() {
        return exports.ReadConcernLevel.snapshot;
    }
    toJSON() {
        return { level: this.level };
    }
}
exports.ReadConcern = ReadConcern;
//# sourceMappingURL=read_concern.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346519, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadPreference = exports.ReadPreferenceMode = void 0;
const error_1 = require("./error");
/** @public */
exports.ReadPreferenceMode = Object.freeze({
    primary: 'primary',
    primaryPreferred: 'primaryPreferred',
    secondary: 'secondary',
    secondaryPreferred: 'secondaryPreferred',
    nearest: 'nearest'
});
/**
 * The **ReadPreference** class is a class that represents a MongoDB ReadPreference and is
 * used to construct connections.
 * @public
 *
 * @see https://docs.mongodb.com/manual/core/read-preference/
 */
class ReadPreference {
    /**
     * @param mode - A string describing the read preference mode (primary|primaryPreferred|secondary|secondaryPreferred|nearest)
     * @param tags - A tag set used to target reads to members with the specified tag(s). tagSet is not available if using read preference mode primary.
     * @param options - Additional read preference options
     */
    constructor(mode, tags, options) {
        if (!ReadPreference.isValid(mode)) {
            throw new error_1.MongoInvalidArgumentError(`Invalid read preference mode ${JSON.stringify(mode)}`);
        }
        if (options == null && typeof tags === 'object' && !Array.isArray(tags)) {
            options = tags;
            tags = undefined;
        }
        else if (tags && !Array.isArray(tags)) {
            throw new error_1.MongoInvalidArgumentError('ReadPreference tags must be an array');
        }
        this.mode = mode;
        this.tags = tags;
        this.hedge = options === null || options === void 0 ? void 0 : options.hedge;
        this.maxStalenessSeconds = undefined;
        this.minWireVersion = undefined;
        options = options !== null && options !== void 0 ? options : {};
        if (options.maxStalenessSeconds != null) {
            if (options.maxStalenessSeconds <= 0) {
                throw new error_1.MongoInvalidArgumentError('maxStalenessSeconds must be a positive integer');
            }
            this.maxStalenessSeconds = options.maxStalenessSeconds;
            // NOTE: The minimum required wire version is 5 for this read preference. If the existing
            //       topology has a lower value then a MongoError will be thrown during server selection.
            this.minWireVersion = 5;
        }
        if (this.mode === ReadPreference.PRIMARY) {
            if (this.tags && Array.isArray(this.tags) && this.tags.length > 0) {
                throw new error_1.MongoInvalidArgumentError('Primary read preference cannot be combined with tags');
            }
            if (this.maxStalenessSeconds) {
                throw new error_1.MongoInvalidArgumentError('Primary read preference cannot be combined with maxStalenessSeconds');
            }
            if (this.hedge) {
                throw new error_1.MongoInvalidArgumentError('Primary read preference cannot be combined with hedge');
            }
        }
    }
    // Support the deprecated `preference` property introduced in the porcelain layer
    get preference() {
        return this.mode;
    }
    static fromString(mode) {
        return new ReadPreference(mode);
    }
    /**
     * Construct a ReadPreference given an options object.
     *
     * @param options - The options object from which to extract the read preference.
     */
    static fromOptions(options) {
        var _a, _b, _c;
        if (!options)
            return;
        const readPreference = (_a = options.readPreference) !== null && _a !== void 0 ? _a : (_b = options.session) === null || _b === void 0 ? void 0 : _b.transaction.options.readPreference;
        const readPreferenceTags = options.readPreferenceTags;
        if (readPreference == null) {
            return;
        }
        if (typeof readPreference === 'string') {
            return new ReadPreference(readPreference, readPreferenceTags, {
                maxStalenessSeconds: options.maxStalenessSeconds,
                hedge: options.hedge
            });
        }
        else if (!(readPreference instanceof ReadPreference) && typeof readPreference === 'object') {
            const mode = readPreference.mode || readPreference.preference;
            if (mode && typeof mode === 'string') {
                return new ReadPreference(mode, (_c = readPreference.tags) !== null && _c !== void 0 ? _c : readPreferenceTags, {
                    maxStalenessSeconds: readPreference.maxStalenessSeconds,
                    hedge: options.hedge
                });
            }
        }
        if (readPreferenceTags) {
            readPreference.tags = readPreferenceTags;
        }
        return readPreference;
    }
    /**
     * Replaces options.readPreference with a ReadPreference instance
     */
    static translate(options) {
        if (options.readPreference == null)
            return options;
        const r = options.readPreference;
        if (typeof r === 'string') {
            options.readPreference = new ReadPreference(r);
        }
        else if (r && !(r instanceof ReadPreference) && typeof r === 'object') {
            const mode = r.mode || r.preference;
            if (mode && typeof mode === 'string') {
                options.readPreference = new ReadPreference(mode, r.tags, {
                    maxStalenessSeconds: r.maxStalenessSeconds
                });
            }
        }
        else if (!(r instanceof ReadPreference)) {
            throw new error_1.MongoInvalidArgumentError(`Invalid read preference: ${r}`);
        }
        return options;
    }
    /**
     * Validate if a mode is legal
     *
     * @param mode - The string representing the read preference mode.
     */
    static isValid(mode) {
        const VALID_MODES = new Set([
            ReadPreference.PRIMARY,
            ReadPreference.PRIMARY_PREFERRED,
            ReadPreference.SECONDARY,
            ReadPreference.SECONDARY_PREFERRED,
            ReadPreference.NEAREST,
            null
        ]);
        return VALID_MODES.has(mode);
    }
    /**
     * Validate if a mode is legal
     *
     * @param mode - The string representing the read preference mode.
     */
    isValid(mode) {
        return ReadPreference.isValid(typeof mode === 'string' ? mode : this.mode);
    }
    /**
     * Indicates that this readPreference needs the "slaveOk" bit when sent over the wire
     *
     * @see https://docs.mongodb.com/manual/reference/mongodb-wire-protocol/#op-query
     */
    slaveOk() {
        const NEEDS_SLAVEOK = new Set([
            ReadPreference.PRIMARY_PREFERRED,
            ReadPreference.SECONDARY,
            ReadPreference.SECONDARY_PREFERRED,
            ReadPreference.NEAREST
        ]);
        return NEEDS_SLAVEOK.has(this.mode);
    }
    /**
     * Check if the two ReadPreferences are equivalent
     *
     * @param readPreference - The read preference with which to check equality
     */
    equals(readPreference) {
        return readPreference.mode === this.mode;
    }
    /** Return JSON representation */
    toJSON() {
        const readPreference = { mode: this.mode };
        if (Array.isArray(this.tags))
            readPreference.tags = this.tags;
        if (this.maxStalenessSeconds)
            readPreference.maxStalenessSeconds = this.maxStalenessSeconds;
        if (this.hedge)
            readPreference.hedge = this.hedge;
        return readPreference;
    }
}
exports.ReadPreference = ReadPreference;
ReadPreference.PRIMARY = exports.ReadPreferenceMode.primary;
ReadPreference.PRIMARY_PREFERRED = exports.ReadPreferenceMode.primaryPreferred;
ReadPreference.SECONDARY = exports.ReadPreferenceMode.secondary;
ReadPreference.SECONDARY_PREFERRED = exports.ReadPreferenceMode.secondaryPreferred;
ReadPreference.NEAREST = exports.ReadPreferenceMode.nearest;
ReadPreference.primary = new ReadPreference(exports.ReadPreferenceMode.primary);
ReadPreference.primaryPreferred = new ReadPreference(exports.ReadPreferenceMode.primaryPreferred);
ReadPreference.secondary = new ReadPreference(exports.ReadPreferenceMode.secondary);
ReadPreference.secondaryPreferred = new ReadPreference(exports.ReadPreferenceMode.secondaryPreferred);
ReadPreference.nearest = new ReadPreference(exports.ReadPreferenceMode.nearest);
//# sourceMappingURL=read_preference.js.map
}, function(modId) { var map = {"./error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346520, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.OP_MSG = exports.OP_COMPRESSED = exports.OP_KILL_CURSORS = exports.OP_DELETE = exports.OP_GETMORE = exports.OP_QUERY = exports.OP_INSERT = exports.OP_UPDATE = exports.OP_REPLY = exports.MAX_SUPPORTED_WIRE_VERSION = exports.MIN_SUPPORTED_WIRE_VERSION = exports.MAX_SUPPORTED_SERVER_VERSION = exports.MIN_SUPPORTED_SERVER_VERSION = void 0;
exports.MIN_SUPPORTED_SERVER_VERSION = '3.6';
exports.MAX_SUPPORTED_SERVER_VERSION = '5.1';
exports.MIN_SUPPORTED_WIRE_VERSION = 6;
exports.MAX_SUPPORTED_WIRE_VERSION = 14;
exports.OP_REPLY = 1;
exports.OP_UPDATE = 2001;
exports.OP_INSERT = 2002;
exports.OP_QUERY = 2004;
exports.OP_GETMORE = 2005;
exports.OP_DELETE = 2006;
exports.OP_KILL_CURSORS = 2007;
exports.OP_COMPRESSED = 2012;
exports.OP_MSG = 2013;
//# sourceMappingURL=constants.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346521, function(require, module, exports) {
module.exports = {
  "_from": "mongodb@4.2.2",
  "_id": "mongodb@4.2.2",
  "_inBundle": false,
  "_integrity": "sha512-zt8rCTnTKyMQppyt63qMnrLM5dbADgUk18ORPF1XbtHLIYCyc9hattaYHi0pqMvNxDpgGgUofSVzS+UQErgTug==",
  "_location": "/mongodb",
  "_phantomChildren": {},
  "_requested": {
    "type": "version",
    "registry": true,
    "raw": "mongodb@4.2.2",
    "name": "mongodb",
    "escapedName": "mongodb",
    "rawSpec": "4.2.2",
    "saveSpec": null,
    "fetchSpec": "4.2.2"
  },
  "_requiredBy": [
    "/mongoose"
  ],
  "_resolved": "https://registry.npmjs.org/mongodb/-/mongodb-4.2.2.tgz",
  "_shasum": "cd70568bd96003877e35358ad17a0c5de35c6dfd",
  "_spec": "mongodb@4.2.2",
  "_where": "E:\\前端项目\\miniTopic\\server\\node_modules\\mongoose",
  "author": {
    "name": "The MongoDB NodeJS Team",
    "email": "dbx-node@mongodb.com"
  },
  "bugs": {
    "url": "https://jira.mongodb.org/projects/NODE/issues/"
  },
  "bundleDependencies": false,
  "dependencies": {
    "bson": "^4.6.0",
    "denque": "^2.0.1",
    "mongodb-connection-string-url": "^2.3.2",
    "saslprep": "^1.0.3"
  },
  "deprecated": false,
  "description": "The official MongoDB driver for Node.js",
  "devDependencies": {
    "@istanbuljs/nyc-config-typescript": "^1.0.2",
    "@microsoft/api-extractor": "^7.18.21",
    "@microsoft/tsdoc-config": "^0.15.2",
    "@types/chai": "^4.3.0",
    "@types/chai-subset": "^1.3.3",
    "@types/kerberos": "^1.1.1",
    "@types/mocha": "^9.0.0",
    "@types/node": "^16.11.12",
    "@types/saslprep": "^1.0.1",
    "@types/semver": "^7.3.9",
    "@types/sinon": "^10.0.6",
    "@types/whatwg-url": "^8.2.1",
    "@typescript-eslint/eslint-plugin": "^5.6.0",
    "@typescript-eslint/parser": "^5.6.0",
    "bluebird": "^3.7.2",
    "chai": "^4.3.4",
    "chai-subset": "^1.6.0",
    "chalk": "^4.1.2",
    "downlevel-dts": "^0.7.0",
    "eslint": "^8.4.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-tsdoc": "^0.2.14",
    "js-yaml": "^4.1.0",
    "lodash.camelcase": "^4.3.0",
    "mocha": "^9.1.3",
    "mocha-sinon": "^2.1.2",
    "nyc": "^15.1.0",
    "prettier": "^2.5.1",
    "rimraf": "^3.0.2",
    "semver": "^7.3.5",
    "sinon": "^12.0.1",
    "sinon-chai": "^3.7.0",
    "source-map-support": "^0.5.21",
    "standard-version": "^9.3.2",
    "ts-node": "^10.4.0",
    "tsd": "^0.19.0",
    "typescript": "^4.5.2",
    "typescript-cached-transpile": "^0.0.6",
    "xml2js": "^0.4.23",
    "yargs": "^17.3.0"
  },
  "engines": {
    "node": ">=12.9.0"
  },
  "files": [
    "lib",
    "src",
    "etc/prepare.js",
    "mongodb.d.ts",
    "mongodb.ts34.d.ts"
  ],
  "homepage": "https://github.com/mongodb/node-mongodb-native",
  "keywords": [
    "mongodb",
    "driver",
    "official"
  ],
  "license": "Apache-2.0",
  "main": "lib/index.js",
  "name": "mongodb",
  "optionalDependencies": {
    "saslprep": "^1.0.3"
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/mongodb/node-mongodb-native.git"
  },
  "scripts": {
    "build:docs": "typedoc",
    "build:dts": "npm run build:ts && api-extractor run && rimraf 'lib/**/*.d.ts*' && downlevel-dts mongodb.d.ts mongodb.ts34.d.ts",
    "build:evergreen": "node .evergreen/generate_evergreen_tasks.js",
    "build:ts": "rimraf lib && ./node_modules/typescript/bin/tsc",
    "check:adl": "mocha --file test/tools/runner test/manual/data_lake.test.js",
    "check:atlas": "mocha --config \"test/manual/mocharc.json\" test/manual/atlas_connectivity.test.js",
    "check:aws": "mocha --file test/tools/runner test/functional/mongodb_aws.test.js",
    "check:bench": "node test/benchmarks/driverBench",
    "check:coverage": "nyc npm run test:all",
    "check:csfle": "mocha --file test/tools/runner test/integration/client-side-encryption",
    "check:dts": "./node_modules/typescript/bin/tsc --noEmit mongodb.d.ts && tsd",
    "check:eslint": "eslint -v && eslint --max-warnings=0 --ext '.js,.ts' src test",
    "check:kerberos": "mocha --config \"test/manual/mocharc.json\" test/manual/kerberos.test.js",
    "check:ldap": "mocha --config \"test/manual/mocharc.json\" test/manual/ldap.test.js",
    "check:lint": "npm run build:dts && npm run check:dts && npm run check:eslint && npm run check:tsd",
    "check:ocsp": "mocha --config \"test/manual/mocharc.json\" test/manual/ocsp_support.test.js",
    "check:snappy": "mocha --file test/tools/runner test/functional/unit_snappy.test.js",
    "check:test": "mocha --file test/tools/runner --recursive test/functional test/integration",
    "check:tls": "mocha --config \"test/manual/mocharc.json\" test/manual/tls_support.test.js",
    "check:ts": "./node_modules/typescript/bin/tsc -v && ./node_modules/typescript/bin/tsc --noEmit",
    "check:tsd": "tsd --version && tsd",
    "check:unit": "mocha --recursive test/unit/",
    "prepare": "node etc/prepare.js",
    "release": "standard-version -i HISTORY.md",
    "test": "npm run check:lint && npm run test:all",
    "test:all": "npm run check:unit && npm run check:test"
  },
  "tsd": {
    "directory": "test/types",
    "compilerOptions": {
      "strict": true,
      "target": "esnext",
      "module": "commonjs",
      "moduleResolution": "node"
    }
  },
  "types": "mongodb.d.ts",
  "typesVersions": {
    "<=4.0.2": {
      "mongodb.d.ts": [
        "mongodb.ts34.d.ts"
      ]
    }
  },
  "version": "4.2.2"
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346523, function(require, module, exports) {

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSessionFromResponse = exports.applySession = exports.commandSupportsReadConcern = exports.ServerSessionPool = exports.ServerSession = exports.maybeClearPinnedConnection = exports.ClientSession = void 0;
const promise_provider_1 = require("./promise_provider");
const bson_1 = require("./bson");
const read_preference_1 = require("./read_preference");
const transactions_1 = require("./transactions");
const common_1 = require("./sdam/common");
const shared_1 = require("./cmap/wire_protocol/shared");
const error_1 = require("./error");
const utils_1 = require("./utils");
const execute_operation_1 = require("./operations/execute_operation");
const run_command_1 = require("./operations/run_command");
const connection_1 = require("./cmap/connection");
const metrics_1 = require("./cmap/metrics");
const mongo_types_1 = require("./mongo_types");
const read_concern_1 = require("./read_concern");
const minWireVersionForShardedTransactions = 8;
function assertAlive(session, callback) {
    if (session.serverSession == null) {
        const error = new error_1.MongoExpiredSessionError();
        if (typeof callback === 'function') {
            callback(error);
            return false;
        }
        throw error;
    }
    return true;
}
/** @internal */
const kServerSession = Symbol('serverSession');
/** @internal */
const kSnapshotTime = Symbol('snapshotTime');
/** @internal */
const kSnapshotEnabled = Symbol('snapshotEnabled');
/** @internal */
const kPinnedConnection = Symbol('pinnedConnection');
/**
 * A class representing a client session on the server
 *
 * NOTE: not meant to be instantiated directly.
 * @public
 */
class ClientSession extends mongo_types_1.TypedEventEmitter {
    /**
     * Create a client session.
     * @internal
     * @param topology - The current client's topology (Internal Class)
     * @param sessionPool - The server session pool (Internal Class)
     * @param options - Optional settings
     * @param clientOptions - Optional settings provided when creating a MongoClient
     */
    constructor(topology, sessionPool, options, clientOptions) {
        super();
        /** @internal */
        this[_a] = false;
        if (topology == null) {
            // TODO(NODE-3483)
            throw new error_1.MongoRuntimeError('ClientSession requires a topology');
        }
        if (sessionPool == null || !(sessionPool instanceof ServerSessionPool)) {
            // TODO(NODE-3483)
            throw new error_1.MongoRuntimeError('ClientSession requires a ServerSessionPool');
        }
        options = options !== null && options !== void 0 ? options : {};
        if (options.snapshot === true) {
            this[kSnapshotEnabled] = true;
            if (options.causalConsistency === true) {
                throw new error_1.MongoInvalidArgumentError('Properties "causalConsistency" and "snapshot" are mutually exclusive');
            }
        }
        this.topology = topology;
        this.sessionPool = sessionPool;
        this.hasEnded = false;
        this.clientOptions = clientOptions;
        this[kServerSession] = undefined;
        this.supports = {
            causalConsistency: options.snapshot !== true && options.causalConsistency !== false
        };
        this.clusterTime = options.initialClusterTime;
        this.operationTime = undefined;
        this.explicit = !!options.explicit;
        this.owner = options.owner;
        this.defaultTransactionOptions = Object.assign({}, options.defaultTransactionOptions);
        this.transaction = new transactions_1.Transaction();
    }
    /** The server id associated with this session */
    get id() {
        var _b;
        return (_b = this.serverSession) === null || _b === void 0 ? void 0 : _b.id;
    }
    get serverSession() {
        if (this[kServerSession] == null) {
            this[kServerSession] = this.sessionPool.acquire();
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this[kServerSession];
    }
    /** Whether or not this session is configured for snapshot reads */
    get snapshotEnabled() {
        return this[kSnapshotEnabled];
    }
    get loadBalanced() {
        return this.topology.description.type === common_1.TopologyType.LoadBalanced;
    }
    /** @internal */
    get pinnedConnection() {
        return this[kPinnedConnection];
    }
    /** @internal */
    pin(conn) {
        if (this[kPinnedConnection]) {
            throw TypeError('Cannot pin multiple connections to the same session');
        }
        this[kPinnedConnection] = conn;
        conn.emit(connection_1.Connection.PINNED, this.inTransaction() ? metrics_1.ConnectionPoolMetrics.TXN : metrics_1.ConnectionPoolMetrics.CURSOR);
    }
    /** @internal */
    unpin(options) {
        if (this.loadBalanced) {
            return maybeClearPinnedConnection(this, options);
        }
        this.transaction.unpinServer();
    }
    get isPinned() {
        return this.loadBalanced ? !!this[kPinnedConnection] : this.transaction.isPinned;
    }
    endSession(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        const finalOptions = { force: true, ...options };
        return (0, utils_1.maybePromise)(callback, done => {
            if (this.hasEnded) {
                maybeClearPinnedConnection(this, finalOptions);
                return done();
            }
            const completeEndSession = () => {
                maybeClearPinnedConnection(this, finalOptions);
                // release the server session back to the pool
                this.sessionPool.release(this.serverSession);
                this[kServerSession] = undefined;
                // mark the session as ended, and emit a signal
                this.hasEnded = true;
                this.emit('ended', this);
                // spec indicates that we should ignore all errors for `endSessions`
                done();
            };
            if (this.serverSession && this.inTransaction()) {
                this.abortTransaction(err => {
                    if (err)
                        return done(err);
                    completeEndSession();
                });
                return;
            }
            completeEndSession();
        });
    }
    /**
     * Advances the operationTime for a ClientSession.
     *
     * @param operationTime - the `BSON.Timestamp` of the operation type it is desired to advance to
     */
    advanceOperationTime(operationTime) {
        if (this.operationTime == null) {
            this.operationTime = operationTime;
            return;
        }
        if (operationTime.greaterThan(this.operationTime)) {
            this.operationTime = operationTime;
        }
    }
    /**
     * Advances the clusterTime for a ClientSession to the provided clusterTime of another ClientSession
     *
     * @param clusterTime - the $clusterTime returned by the server from another session in the form of a document containing the `BSON.Timestamp` clusterTime and signature
     */
    advanceClusterTime(clusterTime) {
        var _b, _c;
        if (!clusterTime || typeof clusterTime !== 'object') {
            throw new error_1.MongoInvalidArgumentError('input cluster time must be an object');
        }
        if (!clusterTime.clusterTime || clusterTime.clusterTime._bsontype !== 'Timestamp') {
            throw new error_1.MongoInvalidArgumentError('input cluster time "clusterTime" property must be a valid BSON Timestamp');
        }
        if (!clusterTime.signature ||
            ((_b = clusterTime.signature.hash) === null || _b === void 0 ? void 0 : _b._bsontype) !== 'Binary' ||
            (typeof clusterTime.signature.keyId !== 'number' &&
                ((_c = clusterTime.signature.keyId) === null || _c === void 0 ? void 0 : _c._bsontype) !== 'Long') // apparently we decode the key to number?
        ) {
            throw new error_1.MongoInvalidArgumentError('input cluster time must have a valid "signature" property with BSON Binary hash and BSON Long keyId');
        }
        (0, common_1._advanceClusterTime)(this, clusterTime);
    }
    /**
     * Used to determine if this session equals another
     *
     * @param session - The session to compare to
     */
    equals(session) {
        if (!(session instanceof ClientSession)) {
            return false;
        }
        if (this.id == null || session.id == null) {
            return false;
        }
        return this.id.id.buffer.equals(session.id.id.buffer);
    }
    /** Increment the transaction number on the internal ServerSession */
    incrementTransactionNumber() {
        if (this.serverSession) {
            this.serverSession.txnNumber =
                typeof this.serverSession.txnNumber === 'number' ? this.serverSession.txnNumber + 1 : 0;
        }
    }
    /** @returns whether this session is currently in a transaction or not */
    inTransaction() {
        return this.transaction.isActive;
    }
    /**
     * Starts a new transaction with the given options.
     *
     * @param options - Options for the transaction
     */
    startTransaction(options) {
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (this[kSnapshotEnabled]) {
            throw new error_1.MongoCompatibilityError('Transactions are not allowed with snapshot sessions');
        }
        assertAlive(this);
        if (this.inTransaction()) {
            throw new error_1.MongoTransactionError('Transaction already in progress');
        }
        if (this.isPinned && this.transaction.isCommitted) {
            this.unpin();
        }
        const topologyMaxWireVersion = (0, utils_1.maxWireVersion)(this.topology);
        if ((0, shared_1.isSharded)(this.topology) &&
            topologyMaxWireVersion != null &&
            topologyMaxWireVersion < minWireVersionForShardedTransactions) {
            throw new error_1.MongoCompatibilityError('Transactions are not supported on sharded clusters in MongoDB < 4.2.');
        }
        // increment txnNumber
        this.incrementTransactionNumber();
        // create transaction state
        this.transaction = new transactions_1.Transaction({
            readConcern: (_c = (_b = options === null || options === void 0 ? void 0 : options.readConcern) !== null && _b !== void 0 ? _b : this.defaultTransactionOptions.readConcern) !== null && _c !== void 0 ? _c : (_d = this.clientOptions) === null || _d === void 0 ? void 0 : _d.readConcern,
            writeConcern: (_f = (_e = options === null || options === void 0 ? void 0 : options.writeConcern) !== null && _e !== void 0 ? _e : this.defaultTransactionOptions.writeConcern) !== null && _f !== void 0 ? _f : (_g = this.clientOptions) === null || _g === void 0 ? void 0 : _g.writeConcern,
            readPreference: (_j = (_h = options === null || options === void 0 ? void 0 : options.readPreference) !== null && _h !== void 0 ? _h : this.defaultTransactionOptions.readPreference) !== null && _j !== void 0 ? _j : (_k = this.clientOptions) === null || _k === void 0 ? void 0 : _k.readPreference,
            maxCommitTimeMS: (_l = options === null || options === void 0 ? void 0 : options.maxCommitTimeMS) !== null && _l !== void 0 ? _l : this.defaultTransactionOptions.maxCommitTimeMS
        });
        this.transaction.transition(transactions_1.TxnState.STARTING_TRANSACTION);
    }
    commitTransaction(callback) {
        return (0, utils_1.maybePromise)(callback, cb => endTransaction(this, 'commitTransaction', cb));
    }
    abortTransaction(callback) {
        return (0, utils_1.maybePromise)(callback, cb => endTransaction(this, 'abortTransaction', cb));
    }
    /**
     * This is here to ensure that ClientSession is never serialized to BSON.
     */
    toBSON() {
        throw new error_1.MongoRuntimeError('ClientSession cannot be serialized to BSON.');
    }
    /**
     * Runs a provided lambda within a transaction, retrying either the commit operation
     * or entire transaction as needed (and when the error permits) to better ensure that
     * the transaction can complete successfully.
     *
     * IMPORTANT: This method requires the user to return a Promise, all lambdas that do not
     * return a Promise will result in undefined behavior.
     *
     * @param fn - A lambda to run within a transaction
     * @param options - Optional settings for the transaction
     */
    withTransaction(fn, options) {
        const startTime = (0, utils_1.now)();
        return attemptTransaction(this, startTime, fn, options);
    }
}
exports.ClientSession = ClientSession;
_a = kSnapshotEnabled;
const MAX_WITH_TRANSACTION_TIMEOUT = 120000;
const NON_DETERMINISTIC_WRITE_CONCERN_ERRORS = new Set([
    'CannotSatisfyWriteConcern',
    'UnknownReplWriteConcern',
    'UnsatisfiableWriteConcern'
]);
function hasNotTimedOut(startTime, max) {
    return (0, utils_1.calculateDurationInMs)(startTime) < max;
}
function isUnknownTransactionCommitResult(err) {
    const isNonDeterministicWriteConcernError = err instanceof error_1.MongoServerError &&
        err.codeName &&
        NON_DETERMINISTIC_WRITE_CONCERN_ERRORS.has(err.codeName);
    return (isMaxTimeMSExpiredError(err) ||
        (!isNonDeterministicWriteConcernError &&
            err.code !== error_1.MONGODB_ERROR_CODES.UnsatisfiableWriteConcern &&
            err.code !== error_1.MONGODB_ERROR_CODES.UnknownReplWriteConcern));
}
function maybeClearPinnedConnection(session, options) {
    // unpin a connection if it has been pinned
    const conn = session[kPinnedConnection];
    const error = options === null || options === void 0 ? void 0 : options.error;
    if (session.inTransaction() &&
        error &&
        error instanceof error_1.MongoError &&
        error.hasErrorLabel('TransientTransactionError')) {
        return;
    }
    // NOTE: the spec talks about what to do on a network error only, but the tests seem to
    //       to validate that we don't unpin on _all_ errors?
    if (conn) {
        const servers = Array.from(session.topology.s.servers.values());
        const loadBalancer = servers[0];
        if ((options === null || options === void 0 ? void 0 : options.error) == null || (options === null || options === void 0 ? void 0 : options.force)) {
            loadBalancer.s.pool.checkIn(conn);
            conn.emit(connection_1.Connection.UNPINNED, session.transaction.state !== transactions_1.TxnState.NO_TRANSACTION
                ? metrics_1.ConnectionPoolMetrics.TXN
                : metrics_1.ConnectionPoolMetrics.CURSOR);
            if (options === null || options === void 0 ? void 0 : options.forceClear) {
                loadBalancer.s.pool.clear(conn.serviceId);
            }
        }
        session[kPinnedConnection] = undefined;
    }
}
exports.maybeClearPinnedConnection = maybeClearPinnedConnection;
function isMaxTimeMSExpiredError(err) {
    if (err == null || !(err instanceof error_1.MongoServerError)) {
        return false;
    }
    return (err.code === error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired ||
        (err.writeConcernError && err.writeConcernError.code === error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired));
}
function attemptTransactionCommit(session, startTime, fn, options) {
    return session.commitTransaction().catch((err) => {
        if (err instanceof error_1.MongoError &&
            hasNotTimedOut(startTime, MAX_WITH_TRANSACTION_TIMEOUT) &&
            !isMaxTimeMSExpiredError(err)) {
            if (err.hasErrorLabel('UnknownTransactionCommitResult')) {
                return attemptTransactionCommit(session, startTime, fn, options);
            }
            if (err.hasErrorLabel('TransientTransactionError')) {
                return attemptTransaction(session, startTime, fn, options);
            }
        }
        throw err;
    });
}
const USER_EXPLICIT_TXN_END_STATES = new Set([
    transactions_1.TxnState.NO_TRANSACTION,
    transactions_1.TxnState.TRANSACTION_COMMITTED,
    transactions_1.TxnState.TRANSACTION_ABORTED
]);
function userExplicitlyEndedTransaction(session) {
    return USER_EXPLICIT_TXN_END_STATES.has(session.transaction.state);
}
function attemptTransaction(session, startTime, fn, options) {
    const Promise = promise_provider_1.PromiseProvider.get();
    session.startTransaction(options);
    let promise;
    try {
        promise = fn(session);
    }
    catch (err) {
        promise = Promise.reject(err);
    }
    if (!(0, utils_1.isPromiseLike)(promise)) {
        session.abortTransaction();
        throw new error_1.MongoInvalidArgumentError('Function provided to `withTransaction` must return a Promise');
    }
    return promise.then(() => {
        if (userExplicitlyEndedTransaction(session)) {
            return;
        }
        return attemptTransactionCommit(session, startTime, fn, options);
    }, err => {
        function maybeRetryOrThrow(err) {
            if (err instanceof error_1.MongoError &&
                err.hasErrorLabel('TransientTransactionError') &&
                hasNotTimedOut(startTime, MAX_WITH_TRANSACTION_TIMEOUT)) {
                return attemptTransaction(session, startTime, fn, options);
            }
            if (isMaxTimeMSExpiredError(err)) {
                err.addErrorLabel('UnknownTransactionCommitResult');
            }
            throw err;
        }
        if (session.transaction.isActive) {
            return session.abortTransaction().then(() => maybeRetryOrThrow(err));
        }
        return maybeRetryOrThrow(err);
    });
}
function endTransaction(session, commandName, callback) {
    if (!assertAlive(session, callback)) {
        // checking result in case callback was called
        return;
    }
    // handle any initial problematic cases
    const txnState = session.transaction.state;
    if (txnState === transactions_1.TxnState.NO_TRANSACTION) {
        callback(new error_1.MongoTransactionError('No transaction started'));
        return;
    }
    if (commandName === 'commitTransaction') {
        if (txnState === transactions_1.TxnState.STARTING_TRANSACTION ||
            txnState === transactions_1.TxnState.TRANSACTION_COMMITTED_EMPTY) {
            // the transaction was never started, we can safely exit here
            session.transaction.transition(transactions_1.TxnState.TRANSACTION_COMMITTED_EMPTY);
            callback();
            return;
        }
        if (txnState === transactions_1.TxnState.TRANSACTION_ABORTED) {
            callback(new error_1.MongoTransactionError('Cannot call commitTransaction after calling abortTransaction'));
            return;
        }
    }
    else {
        if (txnState === transactions_1.TxnState.STARTING_TRANSACTION) {
            // the transaction was never started, we can safely exit here
            session.transaction.transition(transactions_1.TxnState.TRANSACTION_ABORTED);
            callback();
            return;
        }
        if (txnState === transactions_1.TxnState.TRANSACTION_ABORTED) {
            callback(new error_1.MongoTransactionError('Cannot call abortTransaction twice'));
            return;
        }
        if (txnState === transactions_1.TxnState.TRANSACTION_COMMITTED ||
            txnState === transactions_1.TxnState.TRANSACTION_COMMITTED_EMPTY) {
            callback(new error_1.MongoTransactionError('Cannot call abortTransaction after calling commitTransaction'));
            return;
        }
    }
    // construct and send the command
    const command = { [commandName]: 1 };
    // apply a writeConcern if specified
    let writeConcern;
    if (session.transaction.options.writeConcern) {
        writeConcern = Object.assign({}, session.transaction.options.writeConcern);
    }
    else if (session.clientOptions && session.clientOptions.writeConcern) {
        writeConcern = { w: session.clientOptions.writeConcern.w };
    }
    if (txnState === transactions_1.TxnState.TRANSACTION_COMMITTED) {
        writeConcern = Object.assign({ wtimeout: 10000 }, writeConcern, { w: 'majority' });
    }
    if (writeConcern) {
        Object.assign(command, { writeConcern });
    }
    if (commandName === 'commitTransaction' && session.transaction.options.maxTimeMS) {
        Object.assign(command, { maxTimeMS: session.transaction.options.maxTimeMS });
    }
    function commandHandler(e, r) {
        if (commandName !== 'commitTransaction') {
            session.transaction.transition(transactions_1.TxnState.TRANSACTION_ABORTED);
            if (session.loadBalanced) {
                maybeClearPinnedConnection(session, { force: false });
            }
            // The spec indicates that we should ignore all errors on `abortTransaction`
            return callback();
        }
        session.transaction.transition(transactions_1.TxnState.TRANSACTION_COMMITTED);
        if (e) {
            if (e instanceof error_1.MongoNetworkError ||
                e instanceof error_1.MongoWriteConcernError ||
                (0, error_1.isRetryableError)(e) ||
                isMaxTimeMSExpiredError(e)) {
                if (isUnknownTransactionCommitResult(e)) {
                    e.addErrorLabel('UnknownTransactionCommitResult');
                    // per txns spec, must unpin session in this case
                    session.unpin({ error: e });
                }
            }
            else if (e.hasErrorLabel('TransientTransactionError')) {
                session.unpin({ error: e });
            }
        }
        callback(e, r);
    }
    // Assumption here that commandName is "commitTransaction" or "abortTransaction"
    if (session.transaction.recoveryToken) {
        command.recoveryToken = session.transaction.recoveryToken;
    }
    // send the command
    (0, execute_operation_1.executeOperation)(session.topology, new run_command_1.RunAdminCommandOperation(undefined, command, {
        session,
        readPreference: read_preference_1.ReadPreference.primary,
        bypassPinningCheck: true
    }), (err, reply) => {
        if (command.abortTransaction) {
            // always unpin on abort regardless of command outcome
            session.unpin();
        }
        if (err && (0, error_1.isRetryableEndTransactionError)(err)) {
            // SPEC-1185: apply majority write concern when retrying commitTransaction
            if (command.commitTransaction) {
                // per txns spec, must unpin session in this case
                session.unpin({ force: true });
                command.writeConcern = Object.assign({ wtimeout: 10000 }, command.writeConcern, {
                    w: 'majority'
                });
            }
            return (0, execute_operation_1.executeOperation)(session.topology, new run_command_1.RunAdminCommandOperation(undefined, command, {
                session,
                readPreference: read_preference_1.ReadPreference.primary,
                bypassPinningCheck: true
            }), (_err, _reply) => commandHandler(_err, _reply));
        }
        commandHandler(err, reply);
    });
}
/**
 * Reflects the existence of a session on the server. Can be reused by the session pool.
 * WARNING: not meant to be instantiated directly. For internal use only.
 * @public
 */
class ServerSession {
    /** @internal */
    constructor() {
        this.id = { id: new bson_1.Binary((0, utils_1.uuidV4)(), bson_1.Binary.SUBTYPE_UUID) };
        this.lastUse = (0, utils_1.now)();
        this.txnNumber = 0;
        this.isDirty = false;
    }
    /**
     * Determines if the server session has timed out.
     *
     * @param sessionTimeoutMinutes - The server's "logicalSessionTimeoutMinutes"
     */
    hasTimedOut(sessionTimeoutMinutes) {
        // Take the difference of the lastUse timestamp and now, which will result in a value in
        // milliseconds, and then convert milliseconds to minutes to compare to `sessionTimeoutMinutes`
        const idleTimeMinutes = Math.round((((0, utils_1.calculateDurationInMs)(this.lastUse) % 86400000) % 3600000) / 60000);
        return idleTimeMinutes > sessionTimeoutMinutes - 1;
    }
}
exports.ServerSession = ServerSession;
/**
 * Maintains a pool of Server Sessions.
 * For internal use only
 * @internal
 */
class ServerSessionPool {
    constructor(topology) {
        if (topology == null) {
            throw new error_1.MongoRuntimeError('ServerSessionPool requires a topology');
        }
        this.topology = topology;
        this.sessions = [];
    }
    /** Ends all sessions in the session pool */
    endAllPooledSessions(callback) {
        if (this.sessions.length) {
            this.topology.endSessions(this.sessions.map((session) => session.id), () => {
                this.sessions = [];
                if (typeof callback === 'function') {
                    callback();
                }
            });
            return;
        }
        if (typeof callback === 'function') {
            callback();
        }
    }
    /**
     * Acquire a Server Session from the pool.
     * Iterates through each session in the pool, removing any stale sessions
     * along the way. The first non-stale session found is removed from the
     * pool and returned. If no non-stale session is found, a new ServerSession is created.
     */
    acquire() {
        const sessionTimeoutMinutes = this.topology.logicalSessionTimeoutMinutes || 10;
        while (this.sessions.length) {
            const session = this.sessions.shift();
            if (session && (this.topology.loadBalanced || !session.hasTimedOut(sessionTimeoutMinutes))) {
                return session;
            }
        }
        return new ServerSession();
    }
    /**
     * Release a session to the session pool
     * Adds the session back to the session pool if the session has not timed out yet.
     * This method also removes any stale sessions from the pool.
     *
     * @param session - The session to release to the pool
     */
    release(session) {
        const sessionTimeoutMinutes = this.topology.logicalSessionTimeoutMinutes;
        if (this.topology.loadBalanced && !sessionTimeoutMinutes) {
            this.sessions.unshift(session);
        }
        if (!sessionTimeoutMinutes) {
            return;
        }
        while (this.sessions.length) {
            const pooledSession = this.sessions[this.sessions.length - 1];
            if (pooledSession.hasTimedOut(sessionTimeoutMinutes)) {
                this.sessions.pop();
            }
            else {
                break;
            }
        }
        if (!session.hasTimedOut(sessionTimeoutMinutes)) {
            if (session.isDirty) {
                return;
            }
            // otherwise, readd this session to the session pool
            this.sessions.unshift(session);
        }
    }
}
exports.ServerSessionPool = ServerSessionPool;
// TODO: this should be codified in command construction
// @see https://github.com/mongodb/specifications/blob/master/source/read-write-concern/read-write-concern.rst#read-concern
function commandSupportsReadConcern(command, options) {
    if (command.aggregate || command.count || command.distinct || command.find || command.geoNear) {
        return true;
    }
    if (command.mapReduce &&
        options &&
        options.out &&
        (options.out.inline === 1 || options.out === 'inline')) {
        return true;
    }
    return false;
}
exports.commandSupportsReadConcern = commandSupportsReadConcern;
/**
 * Optionally decorate a command with sessions specific keys
 *
 * @param session - the session tracking transaction state
 * @param command - the command to decorate
 * @param options - Optional settings passed to calling operation
 */
function applySession(session, command, options) {
    var _b;
    // TODO: merge this with `assertAlive`, did not want to throw a try/catch here
    if (session.hasEnded) {
        return new error_1.MongoExpiredSessionError();
    }
    const serverSession = session.serverSession;
    if (serverSession == null) {
        return new error_1.MongoRuntimeError('Unable to acquire server session');
    }
    // SPEC-1019: silently ignore explicit session with unacknowledged write for backwards compatibility
    // FIXME: NODE-2781, this check for write concern shouldn't be happening here, but instead during command construction
    if (options && options.writeConcern && options.writeConcern.w === 0) {
        if (session && session.explicit) {
            return new error_1.MongoAPIError('Cannot have explicit session with unacknowledged writes');
        }
        return;
    }
    // mark the last use of this session, and apply the `lsid`
    serverSession.lastUse = (0, utils_1.now)();
    command.lsid = serverSession.id;
    // first apply non-transaction-specific sessions data
    const inTransaction = session.inTransaction() || (0, transactions_1.isTransactionCommand)(command);
    const isRetryableWrite = (options === null || options === void 0 ? void 0 : options.willRetryWrite) || false;
    if (serverSession.txnNumber && (isRetryableWrite || inTransaction)) {
        command.txnNumber = bson_1.Long.fromNumber(serverSession.txnNumber);
    }
    if (!inTransaction) {
        if (session.transaction.state !== transactions_1.TxnState.NO_TRANSACTION) {
            session.transaction.transition(transactions_1.TxnState.NO_TRANSACTION);
        }
        if (session.supports.causalConsistency &&
            session.operationTime &&
            commandSupportsReadConcern(command, options)) {
            command.readConcern = command.readConcern || {};
            Object.assign(command.readConcern, { afterClusterTime: session.operationTime });
        }
        else if (session[kSnapshotEnabled]) {
            command.readConcern = command.readConcern || { level: read_concern_1.ReadConcernLevel.snapshot };
            if (session[kSnapshotTime] != null) {
                Object.assign(command.readConcern, { atClusterTime: session[kSnapshotTime] });
            }
        }
        return;
    }
    // now attempt to apply transaction-specific sessions data
    // `autocommit` must always be false to differentiate from retryable writes
    command.autocommit = false;
    if (session.transaction.state === transactions_1.TxnState.STARTING_TRANSACTION) {
        session.transaction.transition(transactions_1.TxnState.TRANSACTION_IN_PROGRESS);
        command.startTransaction = true;
        const readConcern = session.transaction.options.readConcern || ((_b = session === null || session === void 0 ? void 0 : session.clientOptions) === null || _b === void 0 ? void 0 : _b.readConcern);
        if (readConcern) {
            command.readConcern = readConcern;
        }
        if (session.supports.causalConsistency && session.operationTime) {
            command.readConcern = command.readConcern || {};
            Object.assign(command.readConcern, { afterClusterTime: session.operationTime });
        }
    }
}
exports.applySession = applySession;
function updateSessionFromResponse(session, document) {
    var _b;
    if (document.$clusterTime) {
        (0, common_1._advanceClusterTime)(session, document.$clusterTime);
    }
    if (document.operationTime && session && session.supports.causalConsistency) {
        session.advanceOperationTime(document.operationTime);
    }
    if (document.recoveryToken && session && session.inTransaction()) {
        session.transaction._recoveryToken = document.recoveryToken;
    }
    if ((session === null || session === void 0 ? void 0 : session[kSnapshotEnabled]) && session[kSnapshotTime] == null) {
        // find and aggregate commands return atClusterTime on the cursor
        // distinct includes it in the response body
        const atClusterTime = ((_b = document.cursor) === null || _b === void 0 ? void 0 : _b.atClusterTime) || document.atClusterTime;
        if (atClusterTime) {
            session[kSnapshotTime] = atClusterTime;
        }
    }
}
exports.updateSessionFromResponse = updateSessionFromResponse;
//# sourceMappingURL=sessions.js.map
}, function(modId) { var map = {"./promise_provider":1647755346513,"./read_preference":1647755346519,"./transactions":1647755346525,"./sdam/common":1647755346516,"./cmap/wire_protocol/shared":1647755346526,"./error":1647755346514,"./utils":1647755346512,"./operations/execute_operation":1647755346530,"./operations/run_command":1647755346534,"./cmap/connection":1647755346537,"./cmap/metrics":1647755346547,"./mongo_types":1647755346546,"./read_concern":1647755346517}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346525, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.isTransactionCommand = exports.Transaction = exports.TxnState = void 0;
const read_preference_1 = require("./read_preference");
const error_1 = require("./error");
const read_concern_1 = require("./read_concern");
const write_concern_1 = require("./write_concern");
/** @internal */
exports.TxnState = Object.freeze({
    NO_TRANSACTION: 'NO_TRANSACTION',
    STARTING_TRANSACTION: 'STARTING_TRANSACTION',
    TRANSACTION_IN_PROGRESS: 'TRANSACTION_IN_PROGRESS',
    TRANSACTION_COMMITTED: 'TRANSACTION_COMMITTED',
    TRANSACTION_COMMITTED_EMPTY: 'TRANSACTION_COMMITTED_EMPTY',
    TRANSACTION_ABORTED: 'TRANSACTION_ABORTED'
});
const stateMachine = {
    [exports.TxnState.NO_TRANSACTION]: [exports.TxnState.NO_TRANSACTION, exports.TxnState.STARTING_TRANSACTION],
    [exports.TxnState.STARTING_TRANSACTION]: [
        exports.TxnState.TRANSACTION_IN_PROGRESS,
        exports.TxnState.TRANSACTION_COMMITTED,
        exports.TxnState.TRANSACTION_COMMITTED_EMPTY,
        exports.TxnState.TRANSACTION_ABORTED
    ],
    [exports.TxnState.TRANSACTION_IN_PROGRESS]: [
        exports.TxnState.TRANSACTION_IN_PROGRESS,
        exports.TxnState.TRANSACTION_COMMITTED,
        exports.TxnState.TRANSACTION_ABORTED
    ],
    [exports.TxnState.TRANSACTION_COMMITTED]: [
        exports.TxnState.TRANSACTION_COMMITTED,
        exports.TxnState.TRANSACTION_COMMITTED_EMPTY,
        exports.TxnState.STARTING_TRANSACTION,
        exports.TxnState.NO_TRANSACTION
    ],
    [exports.TxnState.TRANSACTION_ABORTED]: [exports.TxnState.STARTING_TRANSACTION, exports.TxnState.NO_TRANSACTION],
    [exports.TxnState.TRANSACTION_COMMITTED_EMPTY]: [
        exports.TxnState.TRANSACTION_COMMITTED_EMPTY,
        exports.TxnState.NO_TRANSACTION
    ]
};
const ACTIVE_STATES = new Set([
    exports.TxnState.STARTING_TRANSACTION,
    exports.TxnState.TRANSACTION_IN_PROGRESS
]);
const COMMITTED_STATES = new Set([
    exports.TxnState.TRANSACTION_COMMITTED,
    exports.TxnState.TRANSACTION_COMMITTED_EMPTY,
    exports.TxnState.TRANSACTION_ABORTED
]);
/**
 * @public
 * A class maintaining state related to a server transaction. Internal Only
 */
class Transaction {
    /** Create a transaction @internal */
    constructor(options) {
        options = options !== null && options !== void 0 ? options : {};
        this.state = exports.TxnState.NO_TRANSACTION;
        this.options = {};
        const writeConcern = write_concern_1.WriteConcern.fromOptions(options);
        if (writeConcern) {
            if (writeConcern.w === 0) {
                throw new error_1.MongoTransactionError('Transactions do not support unacknowledged write concern');
            }
            this.options.writeConcern = writeConcern;
        }
        if (options.readConcern) {
            this.options.readConcern = read_concern_1.ReadConcern.fromOptions(options);
        }
        if (options.readPreference) {
            this.options.readPreference = read_preference_1.ReadPreference.fromOptions(options);
        }
        if (options.maxCommitTimeMS) {
            this.options.maxTimeMS = options.maxCommitTimeMS;
        }
        // TODO: This isn't technically necessary
        this._pinnedServer = undefined;
        this._recoveryToken = undefined;
    }
    /** @internal */
    get server() {
        return this._pinnedServer;
    }
    get recoveryToken() {
        return this._recoveryToken;
    }
    get isPinned() {
        return !!this.server;
    }
    /** @returns Whether the transaction has started */
    get isStarting() {
        return this.state === exports.TxnState.STARTING_TRANSACTION;
    }
    /**
     * @returns Whether this session is presently in a transaction
     */
    get isActive() {
        return ACTIVE_STATES.has(this.state);
    }
    get isCommitted() {
        return COMMITTED_STATES.has(this.state);
    }
    /**
     * Transition the transaction in the state machine
     * @internal
     * @param nextState - The new state to transition to
     */
    transition(nextState) {
        const nextStates = stateMachine[this.state];
        if (nextStates && nextStates.includes(nextState)) {
            this.state = nextState;
            if (this.state === exports.TxnState.NO_TRANSACTION ||
                this.state === exports.TxnState.STARTING_TRANSACTION ||
                this.state === exports.TxnState.TRANSACTION_ABORTED) {
                this.unpinServer();
            }
            return;
        }
        throw new error_1.MongoRuntimeError(`Attempted illegal state transition from [${this.state}] to [${nextState}]`);
    }
    /** @internal */
    pinServer(server) {
        if (this.isActive) {
            this._pinnedServer = server;
        }
    }
    /** @internal */
    unpinServer() {
        this._pinnedServer = undefined;
    }
}
exports.Transaction = Transaction;
function isTransactionCommand(command) {
    return !!(command.commitTransaction || command.abortTransaction);
}
exports.isTransactionCommand = isTransactionCommand;
//# sourceMappingURL=transactions.js.map
}, function(modId) { var map = {"./read_preference":1647755346519,"./error":1647755346514,"./read_concern":1647755346517,"./write_concern":1647755346515}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346526, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.isSharded = exports.applyCommonQueryOptions = exports.getReadPreference = void 0;
const common_1 = require("../../sdam/common");
const topology_description_1 = require("../../sdam/topology_description");
const error_1 = require("../../error");
const read_preference_1 = require("../../read_preference");
function getReadPreference(cmd, options) {
    // Default to command version of the readPreference
    let readPreference = cmd.readPreference || read_preference_1.ReadPreference.primary;
    // If we have an option readPreference override the command one
    if (options === null || options === void 0 ? void 0 : options.readPreference) {
        readPreference = options.readPreference;
    }
    if (typeof readPreference === 'string') {
        readPreference = read_preference_1.ReadPreference.fromString(readPreference);
    }
    if (!(readPreference instanceof read_preference_1.ReadPreference)) {
        throw new error_1.MongoInvalidArgumentError('Option "readPreference" must be a ReadPreference instance');
    }
    return readPreference;
}
exports.getReadPreference = getReadPreference;
function applyCommonQueryOptions(queryOptions, options) {
    Object.assign(queryOptions, {
        raw: typeof options.raw === 'boolean' ? options.raw : false,
        promoteLongs: typeof options.promoteLongs === 'boolean' ? options.promoteLongs : true,
        promoteValues: typeof options.promoteValues === 'boolean' ? options.promoteValues : true,
        promoteBuffers: typeof options.promoteBuffers === 'boolean' ? options.promoteBuffers : false,
        bsonRegExp: typeof options.bsonRegExp === 'boolean' ? options.bsonRegExp : false
    });
    if (options.session) {
        queryOptions.session = options.session;
    }
    return queryOptions;
}
exports.applyCommonQueryOptions = applyCommonQueryOptions;
function isSharded(topologyOrServer) {
    if (topologyOrServer.description && topologyOrServer.description.type === common_1.ServerType.Mongos) {
        return true;
    }
    // NOTE: This is incredibly inefficient, and should be removed once command construction
    //       happens based on `Server` not `Topology`.
    if (topologyOrServer.description && topologyOrServer.description instanceof topology_description_1.TopologyDescription) {
        const servers = Array.from(topologyOrServer.description.servers.values());
        return servers.some((server) => server.type === common_1.ServerType.Mongos);
    }
    return false;
}
exports.isSharded = isSharded;
//# sourceMappingURL=shared.js.map
}, function(modId) { var map = {"../../sdam/common":1647755346516,"../../sdam/topology_description":1647755346527,"../../error":1647755346514,"../../read_preference":1647755346519}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346527, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.TopologyDescription = void 0;
const server_description_1 = require("./server_description");
const WIRE_CONSTANTS = require("../cmap/wire_protocol/constants");
const common_1 = require("./common");
const error_1 = require("../error");
const utils_1 = require("../utils");
// constants related to compatibility checks
const MIN_SUPPORTED_SERVER_VERSION = WIRE_CONSTANTS.MIN_SUPPORTED_SERVER_VERSION;
const MAX_SUPPORTED_SERVER_VERSION = WIRE_CONSTANTS.MAX_SUPPORTED_SERVER_VERSION;
const MIN_SUPPORTED_WIRE_VERSION = WIRE_CONSTANTS.MIN_SUPPORTED_WIRE_VERSION;
const MAX_SUPPORTED_WIRE_VERSION = WIRE_CONSTANTS.MAX_SUPPORTED_WIRE_VERSION;
const MONGOS_OR_UNKNOWN = new Set([common_1.ServerType.Mongos, common_1.ServerType.Unknown]);
const MONGOS_OR_STANDALONE = new Set([common_1.ServerType.Mongos, common_1.ServerType.Standalone]);
const NON_PRIMARY_RS_MEMBERS = new Set([
    common_1.ServerType.RSSecondary,
    common_1.ServerType.RSArbiter,
    common_1.ServerType.RSOther
]);
/**
 * Representation of a deployment of servers
 * @public
 */
class TopologyDescription {
    /**
     * Create a TopologyDescription
     */
    constructor(topologyType, serverDescriptions, setName, maxSetVersion, maxElectionId, commonWireVersion, options) {
        var _a, _b;
        options = options !== null && options !== void 0 ? options : {};
        // TODO: consider assigning all these values to a temporary value `s` which
        //       we use `Object.freeze` on, ensuring the internal state of this type
        //       is immutable.
        this.type = topologyType !== null && topologyType !== void 0 ? topologyType : common_1.TopologyType.Unknown;
        this.servers = serverDescriptions !== null && serverDescriptions !== void 0 ? serverDescriptions : new Map();
        this.stale = false;
        this.compatible = true;
        this.heartbeatFrequencyMS = (_a = options.heartbeatFrequencyMS) !== null && _a !== void 0 ? _a : 0;
        this.localThresholdMS = (_b = options.localThresholdMS) !== null && _b !== void 0 ? _b : 0;
        if (setName) {
            this.setName = setName;
        }
        if (maxSetVersion) {
            this.maxSetVersion = maxSetVersion;
        }
        if (maxElectionId) {
            this.maxElectionId = maxElectionId;
        }
        if (commonWireVersion) {
            this.commonWireVersion = commonWireVersion;
        }
        // determine server compatibility
        for (const serverDescription of this.servers.values()) {
            // Load balancer mode is always compatible.
            if (serverDescription.type === common_1.ServerType.Unknown ||
                serverDescription.type === common_1.ServerType.LoadBalancer) {
                continue;
            }
            if (serverDescription.minWireVersion > MAX_SUPPORTED_WIRE_VERSION) {
                this.compatible = false;
                this.compatibilityError = `Server at ${serverDescription.address} requires wire version ${serverDescription.minWireVersion}, but this version of the driver only supports up to ${MAX_SUPPORTED_WIRE_VERSION} (MongoDB ${MAX_SUPPORTED_SERVER_VERSION})`;
            }
            if (serverDescription.maxWireVersion < MIN_SUPPORTED_WIRE_VERSION) {
                this.compatible = false;
                this.compatibilityError = `Server at ${serverDescription.address} reports wire version ${serverDescription.maxWireVersion}, but this version of the driver requires at least ${MIN_SUPPORTED_WIRE_VERSION} (MongoDB ${MIN_SUPPORTED_SERVER_VERSION}).`;
                break;
            }
        }
        // Whenever a client updates the TopologyDescription from an ismaster response, it MUST set
        // TopologyDescription.logicalSessionTimeoutMinutes to the smallest logicalSessionTimeoutMinutes
        // value among ServerDescriptions of all data-bearing server types. If any have a null
        // logicalSessionTimeoutMinutes, then TopologyDescription.logicalSessionTimeoutMinutes MUST be
        // set to null.
        this.logicalSessionTimeoutMinutes = undefined;
        for (const [, server] of this.servers) {
            if (server.isReadable) {
                if (server.logicalSessionTimeoutMinutes == null) {
                    // If any of the servers have a null logicalSessionsTimeout, then the whole topology does
                    this.logicalSessionTimeoutMinutes = undefined;
                    break;
                }
                if (this.logicalSessionTimeoutMinutes == null) {
                    // First server with a non null logicalSessionsTimeout
                    this.logicalSessionTimeoutMinutes = server.logicalSessionTimeoutMinutes;
                    continue;
                }
                // Always select the smaller of the:
                // current server logicalSessionsTimeout and the topologies logicalSessionsTimeout
                this.logicalSessionTimeoutMinutes = Math.min(this.logicalSessionTimeoutMinutes, server.logicalSessionTimeoutMinutes);
            }
        }
    }
    /**
     * Returns a new TopologyDescription based on the SrvPollingEvent
     * @internal
     */
    updateFromSrvPollingEvent(ev, srvMaxHosts = 0) {
        /** The SRV addresses defines the set of addresses we should be using */
        const incomingHostnames = ev.hostnames();
        const currentHostnames = new Set(this.servers.keys());
        const hostnamesToAdd = new Set(incomingHostnames);
        const hostnamesToRemove = new Set();
        for (const hostname of currentHostnames) {
            // filter hostnamesToAdd (made from incomingHostnames) down to what is *not* present in currentHostnames
            hostnamesToAdd.delete(hostname);
            if (!incomingHostnames.has(hostname)) {
                // If the SRV Records no longer include this hostname
                // we have to stop using it
                hostnamesToRemove.add(hostname);
            }
        }
        if (hostnamesToAdd.size === 0 && hostnamesToRemove.size === 0) {
            // No new hosts to add and none to remove
            return this;
        }
        const serverDescriptions = new Map(this.servers);
        for (const removedHost of hostnamesToRemove) {
            serverDescriptions.delete(removedHost);
        }
        if (hostnamesToAdd.size > 0) {
            if (srvMaxHosts === 0) {
                // Add all!
                for (const hostToAdd of hostnamesToAdd) {
                    serverDescriptions.set(hostToAdd, new server_description_1.ServerDescription(hostToAdd));
                }
            }
            else if (serverDescriptions.size < srvMaxHosts) {
                // Add only the amount needed to get us back to srvMaxHosts
                const selectedHosts = (0, utils_1.shuffle)(hostnamesToAdd, srvMaxHosts - serverDescriptions.size);
                for (const selectedHostToAdd of selectedHosts) {
                    serverDescriptions.set(selectedHostToAdd, new server_description_1.ServerDescription(selectedHostToAdd));
                }
            }
        }
        return new TopologyDescription(this.type, serverDescriptions, this.setName, this.maxSetVersion, this.maxElectionId, this.commonWireVersion, { heartbeatFrequencyMS: this.heartbeatFrequencyMS, localThresholdMS: this.localThresholdMS });
    }
    /**
     * Returns a copy of this description updated with a given ServerDescription
     * @internal
     */
    update(serverDescription) {
        const address = serverDescription.address;
        // potentially mutated values
        let { type: topologyType, setName, maxSetVersion, maxElectionId, commonWireVersion } = this;
        if (serverDescription.setName && setName && serverDescription.setName !== setName) {
            serverDescription = new server_description_1.ServerDescription(address, undefined);
        }
        const serverType = serverDescription.type;
        const serverDescriptions = new Map(this.servers);
        // update common wire version
        if (serverDescription.maxWireVersion !== 0) {
            if (commonWireVersion == null) {
                commonWireVersion = serverDescription.maxWireVersion;
            }
            else {
                commonWireVersion = Math.min(commonWireVersion, serverDescription.maxWireVersion);
            }
        }
        // update the actual server description
        serverDescriptions.set(address, serverDescription);
        if (topologyType === common_1.TopologyType.Single) {
            // once we are defined as single, that never changes
            return new TopologyDescription(common_1.TopologyType.Single, serverDescriptions, setName, maxSetVersion, maxElectionId, commonWireVersion, { heartbeatFrequencyMS: this.heartbeatFrequencyMS, localThresholdMS: this.localThresholdMS });
        }
        if (topologyType === common_1.TopologyType.Unknown) {
            if (serverType === common_1.ServerType.Standalone && this.servers.size !== 1) {
                serverDescriptions.delete(address);
            }
            else {
                topologyType = topologyTypeForServerType(serverType);
            }
        }
        if (topologyType === common_1.TopologyType.Sharded) {
            if (!MONGOS_OR_UNKNOWN.has(serverType)) {
                serverDescriptions.delete(address);
            }
        }
        if (topologyType === common_1.TopologyType.ReplicaSetNoPrimary) {
            if (MONGOS_OR_STANDALONE.has(serverType)) {
                serverDescriptions.delete(address);
            }
            if (serverType === common_1.ServerType.RSPrimary) {
                const result = updateRsFromPrimary(serverDescriptions, serverDescription, setName, maxSetVersion, maxElectionId);
                topologyType = result[0];
                setName = result[1];
                maxSetVersion = result[2];
                maxElectionId = result[3];
            }
            else if (NON_PRIMARY_RS_MEMBERS.has(serverType)) {
                const result = updateRsNoPrimaryFromMember(serverDescriptions, serverDescription, setName);
                topologyType = result[0];
                setName = result[1];
            }
        }
        if (topologyType === common_1.TopologyType.ReplicaSetWithPrimary) {
            if (MONGOS_OR_STANDALONE.has(serverType)) {
                serverDescriptions.delete(address);
                topologyType = checkHasPrimary(serverDescriptions);
            }
            else if (serverType === common_1.ServerType.RSPrimary) {
                const result = updateRsFromPrimary(serverDescriptions, serverDescription, setName, maxSetVersion, maxElectionId);
                topologyType = result[0];
                setName = result[1];
                maxSetVersion = result[2];
                maxElectionId = result[3];
            }
            else if (NON_PRIMARY_RS_MEMBERS.has(serverType)) {
                topologyType = updateRsWithPrimaryFromMember(serverDescriptions, serverDescription, setName);
            }
            else {
                topologyType = checkHasPrimary(serverDescriptions);
            }
        }
        return new TopologyDescription(topologyType, serverDescriptions, setName, maxSetVersion, maxElectionId, commonWireVersion, { heartbeatFrequencyMS: this.heartbeatFrequencyMS, localThresholdMS: this.localThresholdMS });
    }
    get error() {
        const descriptionsWithError = Array.from(this.servers.values()).filter((sd) => sd.error);
        if (descriptionsWithError.length > 0) {
            return descriptionsWithError[0].error;
        }
    }
    /**
     * Determines if the topology description has any known servers
     */
    get hasKnownServers() {
        return Array.from(this.servers.values()).some((sd) => sd.type !== common_1.ServerType.Unknown);
    }
    /**
     * Determines if this topology description has a data-bearing server available.
     */
    get hasDataBearingServers() {
        return Array.from(this.servers.values()).some((sd) => sd.isDataBearing);
    }
    /**
     * Determines if the topology has a definition for the provided address
     * @internal
     */
    hasServer(address) {
        return this.servers.has(address);
    }
}
exports.TopologyDescription = TopologyDescription;
function topologyTypeForServerType(serverType) {
    switch (serverType) {
        case common_1.ServerType.Standalone:
            return common_1.TopologyType.Single;
        case common_1.ServerType.Mongos:
            return common_1.TopologyType.Sharded;
        case common_1.ServerType.RSPrimary:
            return common_1.TopologyType.ReplicaSetWithPrimary;
        case common_1.ServerType.RSOther:
        case common_1.ServerType.RSSecondary:
            return common_1.TopologyType.ReplicaSetNoPrimary;
        default:
            return common_1.TopologyType.Unknown;
    }
}
// TODO: improve these docs when ObjectId is properly typed
function compareObjectId(oid1, oid2) {
    if (oid1 == null) {
        return -1;
    }
    if (oid2 == null) {
        return 1;
    }
    if (oid1.id instanceof Buffer && oid2.id instanceof Buffer) {
        const oid1Buffer = oid1.id;
        const oid2Buffer = oid2.id;
        return oid1Buffer.compare(oid2Buffer);
    }
    const oid1String = oid1.toString();
    const oid2String = oid2.toString();
    return oid1String.localeCompare(oid2String);
}
function updateRsFromPrimary(serverDescriptions, serverDescription, setName, maxSetVersion, maxElectionId) {
    setName = setName || serverDescription.setName;
    if (setName !== serverDescription.setName) {
        serverDescriptions.delete(serverDescription.address);
        return [checkHasPrimary(serverDescriptions), setName, maxSetVersion, maxElectionId];
    }
    const electionId = serverDescription.electionId ? serverDescription.electionId : null;
    if (serverDescription.setVersion && electionId) {
        if (maxSetVersion && maxElectionId) {
            if (maxSetVersion > serverDescription.setVersion ||
                compareObjectId(maxElectionId, electionId) > 0) {
                // this primary is stale, we must remove it
                serverDescriptions.set(serverDescription.address, new server_description_1.ServerDescription(serverDescription.address));
                return [checkHasPrimary(serverDescriptions), setName, maxSetVersion, maxElectionId];
            }
        }
        maxElectionId = serverDescription.electionId;
    }
    if (serverDescription.setVersion != null &&
        (maxSetVersion == null || serverDescription.setVersion > maxSetVersion)) {
        maxSetVersion = serverDescription.setVersion;
    }
    // We've heard from the primary. Is it the same primary as before?
    for (const [address, server] of serverDescriptions) {
        if (server.type === common_1.ServerType.RSPrimary && server.address !== serverDescription.address) {
            // Reset old primary's type to Unknown.
            serverDescriptions.set(address, new server_description_1.ServerDescription(server.address));
            // There can only be one primary
            break;
        }
    }
    // Discover new hosts from this primary's response.
    serverDescription.allHosts.forEach((address) => {
        if (!serverDescriptions.has(address)) {
            serverDescriptions.set(address, new server_description_1.ServerDescription(address));
        }
    });
    // Remove hosts not in the response.
    const currentAddresses = Array.from(serverDescriptions.keys());
    const responseAddresses = serverDescription.allHosts;
    currentAddresses
        .filter((addr) => responseAddresses.indexOf(addr) === -1)
        .forEach((address) => {
        serverDescriptions.delete(address);
    });
    return [checkHasPrimary(serverDescriptions), setName, maxSetVersion, maxElectionId];
}
function updateRsWithPrimaryFromMember(serverDescriptions, serverDescription, setName) {
    if (setName == null) {
        // TODO(NODE-3483): should be an appropriate runtime error
        throw new error_1.MongoRuntimeError('Argument "setName" is required if connected to a replica set');
    }
    if (setName !== serverDescription.setName ||
        (serverDescription.me && serverDescription.address !== serverDescription.me)) {
        serverDescriptions.delete(serverDescription.address);
    }
    return checkHasPrimary(serverDescriptions);
}
function updateRsNoPrimaryFromMember(serverDescriptions, serverDescription, setName) {
    const topologyType = common_1.TopologyType.ReplicaSetNoPrimary;
    setName = setName || serverDescription.setName;
    if (setName !== serverDescription.setName) {
        serverDescriptions.delete(serverDescription.address);
        return [topologyType, setName];
    }
    serverDescription.allHosts.forEach((address) => {
        if (!serverDescriptions.has(address)) {
            serverDescriptions.set(address, new server_description_1.ServerDescription(address));
        }
    });
    if (serverDescription.me && serverDescription.address !== serverDescription.me) {
        serverDescriptions.delete(serverDescription.address);
    }
    return [topologyType, setName];
}
function checkHasPrimary(serverDescriptions) {
    for (const serverDescription of serverDescriptions.values()) {
        if (serverDescription.type === common_1.ServerType.RSPrimary) {
            return common_1.TopologyType.ReplicaSetWithPrimary;
        }
    }
    return common_1.TopologyType.ReplicaSetNoPrimary;
}
//# sourceMappingURL=topology_description.js.map
}, function(modId) { var map = {"./server_description":1647755346528,"../cmap/wire_protocol/constants":1647755346520,"./common":1647755346516,"../error":1647755346514,"../utils":1647755346512}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346528, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.compareTopologyVersion = exports.parseServerType = exports.ServerDescription = void 0;
const utils_1 = require("../utils");
const common_1 = require("./common");
const bson_1 = require("../bson");
const WRITABLE_SERVER_TYPES = new Set([
    common_1.ServerType.RSPrimary,
    common_1.ServerType.Standalone,
    common_1.ServerType.Mongos,
    common_1.ServerType.LoadBalancer
]);
const DATA_BEARING_SERVER_TYPES = new Set([
    common_1.ServerType.RSPrimary,
    common_1.ServerType.RSSecondary,
    common_1.ServerType.Mongos,
    common_1.ServerType.Standalone,
    common_1.ServerType.LoadBalancer
]);
/**
 * The client's view of a single server, based on the most recent ismaster outcome.
 *
 * Internal type, not meant to be directly instantiated
 * @public
 */
class ServerDescription {
    /**
     * Create a ServerDescription
     * @internal
     *
     * @param address - The address of the server
     * @param ismaster - An optional ismaster response for this server
     */
    constructor(address, ismaster, options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (typeof address === 'string') {
            this._hostAddress = new utils_1.HostAddress(address);
            this.address = this._hostAddress.toString();
        }
        else {
            this._hostAddress = address;
            this.address = this._hostAddress.toString();
        }
        this.type = parseServerType(ismaster, options);
        this.hosts = (_b = (_a = ismaster === null || ismaster === void 0 ? void 0 : ismaster.hosts) === null || _a === void 0 ? void 0 : _a.map((host) => host.toLowerCase())) !== null && _b !== void 0 ? _b : [];
        this.passives = (_d = (_c = ismaster === null || ismaster === void 0 ? void 0 : ismaster.passives) === null || _c === void 0 ? void 0 : _c.map((host) => host.toLowerCase())) !== null && _d !== void 0 ? _d : [];
        this.arbiters = (_f = (_e = ismaster === null || ismaster === void 0 ? void 0 : ismaster.arbiters) === null || _e === void 0 ? void 0 : _e.map((host) => host.toLowerCase())) !== null && _f !== void 0 ? _f : [];
        this.tags = (_g = ismaster === null || ismaster === void 0 ? void 0 : ismaster.tags) !== null && _g !== void 0 ? _g : {};
        this.minWireVersion = (_h = ismaster === null || ismaster === void 0 ? void 0 : ismaster.minWireVersion) !== null && _h !== void 0 ? _h : 0;
        this.maxWireVersion = (_j = ismaster === null || ismaster === void 0 ? void 0 : ismaster.maxWireVersion) !== null && _j !== void 0 ? _j : 0;
        this.roundTripTime = (_k = options === null || options === void 0 ? void 0 : options.roundTripTime) !== null && _k !== void 0 ? _k : -1;
        this.lastUpdateTime = (0, utils_1.now)();
        this.lastWriteDate = (_m = (_l = ismaster === null || ismaster === void 0 ? void 0 : ismaster.lastWrite) === null || _l === void 0 ? void 0 : _l.lastWriteDate) !== null && _m !== void 0 ? _m : 0;
        if (options === null || options === void 0 ? void 0 : options.topologyVersion) {
            this.topologyVersion = options.topologyVersion;
        }
        else if (ismaster === null || ismaster === void 0 ? void 0 : ismaster.topologyVersion) {
            this.topologyVersion = ismaster.topologyVersion;
        }
        if (options === null || options === void 0 ? void 0 : options.error) {
            this.error = options.error;
        }
        if (ismaster === null || ismaster === void 0 ? void 0 : ismaster.primary) {
            this.primary = ismaster.primary;
        }
        if (ismaster === null || ismaster === void 0 ? void 0 : ismaster.me) {
            this.me = ismaster.me.toLowerCase();
        }
        if (ismaster === null || ismaster === void 0 ? void 0 : ismaster.setName) {
            this.setName = ismaster.setName;
        }
        if (ismaster === null || ismaster === void 0 ? void 0 : ismaster.setVersion) {
            this.setVersion = ismaster.setVersion;
        }
        if (ismaster === null || ismaster === void 0 ? void 0 : ismaster.electionId) {
            this.electionId = ismaster.electionId;
        }
        if (ismaster === null || ismaster === void 0 ? void 0 : ismaster.logicalSessionTimeoutMinutes) {
            this.logicalSessionTimeoutMinutes = ismaster.logicalSessionTimeoutMinutes;
        }
        if (ismaster === null || ismaster === void 0 ? void 0 : ismaster.$clusterTime) {
            this.$clusterTime = ismaster.$clusterTime;
        }
    }
    get hostAddress() {
        if (this._hostAddress)
            return this._hostAddress;
        else
            return new utils_1.HostAddress(this.address);
    }
    get allHosts() {
        return this.hosts.concat(this.arbiters).concat(this.passives);
    }
    /** Is this server available for reads*/
    get isReadable() {
        return this.type === common_1.ServerType.RSSecondary || this.isWritable;
    }
    /** Is this server data bearing */
    get isDataBearing() {
        return DATA_BEARING_SERVER_TYPES.has(this.type);
    }
    /** Is this server available for writes */
    get isWritable() {
        return WRITABLE_SERVER_TYPES.has(this.type);
    }
    get host() {
        const chopLength = `:${this.port}`.length;
        return this.address.slice(0, -chopLength);
    }
    get port() {
        const port = this.address.split(':').pop();
        return port ? Number.parseInt(port, 10) : 27017;
    }
    /**
     * Determines if another `ServerDescription` is equal to this one per the rules defined
     * in the {@link https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.rst#serverdescription|SDAM spec}
     */
    equals(other) {
        const topologyVersionsEqual = this.topologyVersion === other.topologyVersion ||
            compareTopologyVersion(this.topologyVersion, other.topologyVersion) === 0;
        const electionIdsEqual = this.electionId && other.electionId
            ? other.electionId && this.electionId.equals(other.electionId)
            : this.electionId === other.electionId;
        return (other != null &&
            (0, utils_1.errorStrictEqual)(this.error, other.error) &&
            this.type === other.type &&
            this.minWireVersion === other.minWireVersion &&
            (0, utils_1.arrayStrictEqual)(this.hosts, other.hosts) &&
            tagsStrictEqual(this.tags, other.tags) &&
            this.setName === other.setName &&
            this.setVersion === other.setVersion &&
            electionIdsEqual &&
            this.primary === other.primary &&
            this.logicalSessionTimeoutMinutes === other.logicalSessionTimeoutMinutes &&
            topologyVersionsEqual);
    }
}
exports.ServerDescription = ServerDescription;
// Parses an `ismaster` message and determines the server type
function parseServerType(ismaster, options) {
    if (options === null || options === void 0 ? void 0 : options.loadBalanced) {
        return common_1.ServerType.LoadBalancer;
    }
    if (!ismaster || !ismaster.ok) {
        return common_1.ServerType.Unknown;
    }
    if (ismaster.isreplicaset) {
        return common_1.ServerType.RSGhost;
    }
    if (ismaster.msg && ismaster.msg === 'isdbgrid') {
        return common_1.ServerType.Mongos;
    }
    if (ismaster.setName) {
        if (ismaster.hidden) {
            return common_1.ServerType.RSOther;
        }
        else if (ismaster.ismaster || ismaster.isWritablePrimary) {
            return common_1.ServerType.RSPrimary;
        }
        else if (ismaster.secondary) {
            return common_1.ServerType.RSSecondary;
        }
        else if (ismaster.arbiterOnly) {
            return common_1.ServerType.RSArbiter;
        }
        else {
            return common_1.ServerType.RSOther;
        }
    }
    return common_1.ServerType.Standalone;
}
exports.parseServerType = parseServerType;
function tagsStrictEqual(tags, tags2) {
    const tagsKeys = Object.keys(tags);
    const tags2Keys = Object.keys(tags2);
    return (tagsKeys.length === tags2Keys.length &&
        tagsKeys.every((key) => tags2[key] === tags[key]));
}
/**
 * Compares two topology versions.
 *
 * @returns A negative number if `lhs` is older than `rhs`; positive if `lhs` is newer than `rhs`; 0 if they are equivalent.
 */
function compareTopologyVersion(lhs, rhs) {
    if (lhs == null || rhs == null) {
        return -1;
    }
    if (lhs.processId.equals(rhs.processId)) {
        // tests mock counter as just number, but in a real situation counter should always be a Long
        const lhsCounter = bson_1.Long.isLong(lhs.counter) ? lhs.counter : bson_1.Long.fromNumber(lhs.counter);
        const rhsCounter = bson_1.Long.isLong(rhs.counter) ? lhs.counter : bson_1.Long.fromNumber(rhs.counter);
        return lhsCounter.compare(rhsCounter);
    }
    return -1;
}
exports.compareTopologyVersion = compareTopologyVersion;
//# sourceMappingURL=server_description.js.map
}, function(modId) { var map = {"../utils":1647755346512,"./common":1647755346516}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346530, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.executeOperation = void 0;
const read_preference_1 = require("../read_preference");
const error_1 = require("../error");
const operation_1 = require("./operation");
const utils_1 = require("../utils");
const utils_2 = require("../utils");
const server_selection_1 = require("../sdam/server_selection");
const MMAPv1_RETRY_WRITES_ERROR_CODE = error_1.MONGODB_ERROR_CODES.IllegalOperation;
const MMAPv1_RETRY_WRITES_ERROR_MESSAGE = 'This MongoDB deployment does not support retryable writes. Please add retryWrites=false to your connection string.';
function executeOperation(topology, operation, callback) {
    if (!(operation instanceof operation_1.AbstractOperation)) {
        // TODO(NODE-3483)
        throw new error_1.MongoRuntimeError('This method requires a valid operation instance');
    }
    return (0, utils_1.maybePromise)(callback, cb => {
        if (topology.shouldCheckForSessionSupport()) {
            return topology.selectServer(read_preference_1.ReadPreference.primaryPreferred, err => {
                if (err)
                    return cb(err);
                executeOperation(topology, operation, cb);
            });
        }
        // The driver sessions spec mandates that we implicitly create sessions for operations
        // that are not explicitly provided with a session.
        let session = operation.session;
        let owner;
        if (topology.hasSessionSupport()) {
            if (session == null) {
                owner = Symbol();
                session = topology.startSession({ owner, explicit: false });
            }
            else if (session.hasEnded) {
                return cb(new error_1.MongoExpiredSessionError('Use of expired sessions is not permitted'));
            }
            else if (session.snapshotEnabled && !topology.capabilities.supportsSnapshotReads) {
                return cb(new error_1.MongoCompatibilityError('Snapshot reads require MongoDB 5.0 or later'));
            }
        }
        else if (session) {
            // If the user passed an explicit session and we are still, after server selection,
            // trying to run against a topology that doesn't support sessions we error out.
            return cb(new error_1.MongoCompatibilityError('Current topology does not support sessions'));
        }
        try {
            executeWithServerSelection(topology, session, operation, (err, result) => {
                if (session && session.owner && session.owner === owner) {
                    return session.endSession(err2 => cb(err2 || err, result));
                }
                cb(err, result);
            });
        }
        catch (e) {
            if (session && session.owner && session.owner === owner) {
                session.endSession();
            }
            throw e;
        }
    });
}
exports.executeOperation = executeOperation;
function supportsRetryableReads(server) {
    return (0, utils_1.maxWireVersion)(server) >= 6;
}
function executeWithServerSelection(topology, session, operation, callback) {
    var _a;
    const readPreference = operation.readPreference || read_preference_1.ReadPreference.primary;
    const inTransaction = session && session.inTransaction();
    if (inTransaction && !readPreference.equals(read_preference_1.ReadPreference.primary)) {
        callback(new error_1.MongoTransactionError(`Read preference in a transaction must be primary, not: ${readPreference.mode}`));
        return;
    }
    if (session &&
        session.isPinned &&
        session.transaction.isCommitted &&
        !operation.bypassPinningCheck) {
        session.unpin();
    }
    let selector;
    if (operation.hasAspect(operation_1.Aspect.CURSOR_ITERATING)) {
        // Get more operations must always select the same server, but run through
        // server selection to potentially force monitor checks if the server is
        // in an unknown state.
        selector = (0, server_selection_1.sameServerSelector)((_a = operation.server) === null || _a === void 0 ? void 0 : _a.description);
    }
    else if (operation.trySecondaryWrite) {
        // If operation should try to write to secondary use the custom server selector
        // otherwise provide the read preference.
        selector = (0, server_selection_1.secondaryWritableServerSelector)(topology.commonWireVersion, readPreference);
    }
    else {
        selector = readPreference;
    }
    const serverSelectionOptions = { session };
    function callbackWithRetry(err, result) {
        if (err == null) {
            return callback(undefined, result);
        }
        const hasReadAspect = operation.hasAspect(operation_1.Aspect.READ_OPERATION);
        const hasWriteAspect = operation.hasAspect(operation_1.Aspect.WRITE_OPERATION);
        const itShouldRetryWrite = shouldRetryWrite(err);
        if ((hasReadAspect && !(0, error_1.isRetryableError)(err)) || (hasWriteAspect && !itShouldRetryWrite)) {
            return callback(err);
        }
        if (hasWriteAspect &&
            itShouldRetryWrite &&
            err.code === MMAPv1_RETRY_WRITES_ERROR_CODE &&
            err.errmsg.match(/Transaction numbers/)) {
            callback(new error_1.MongoServerError({
                message: MMAPv1_RETRY_WRITES_ERROR_MESSAGE,
                errmsg: MMAPv1_RETRY_WRITES_ERROR_MESSAGE,
                originalError: err
            }));
            return;
        }
        // select a new server, and attempt to retry the operation
        topology.selectServer(selector, serverSelectionOptions, (e, server) => {
            if (e ||
                (operation.hasAspect(operation_1.Aspect.READ_OPERATION) && !supportsRetryableReads(server)) ||
                (operation.hasAspect(operation_1.Aspect.WRITE_OPERATION) && !(0, utils_2.supportsRetryableWrites)(server))) {
                callback(e);
                return;
            }
            // If we have a cursor and the initial command fails with a network error,
            // we can retry it on another connection. So we need to check it back in, clear the
            // pool for the service id, and retry again.
            if (err &&
                err instanceof error_1.MongoNetworkError &&
                server.loadBalanced &&
                session &&
                session.isPinned &&
                !session.inTransaction() &&
                operation.hasAspect(operation_1.Aspect.CURSOR_CREATING)) {
                session.unpin({ force: true, forceClear: true });
            }
            operation.execute(server, session, callback);
        });
    }
    if (readPreference &&
        !readPreference.equals(read_preference_1.ReadPreference.primary) &&
        session &&
        session.inTransaction()) {
        callback(new error_1.MongoTransactionError(`Read preference in a transaction must be primary, not: ${readPreference.mode}`));
        return;
    }
    // select a server, and execute the operation against it
    topology.selectServer(selector, serverSelectionOptions, (err, server) => {
        if (err) {
            callback(err);
            return;
        }
        if (session && operation.hasAspect(operation_1.Aspect.RETRYABLE)) {
            const willRetryRead = topology.s.options.retryReads !== false &&
                !inTransaction &&
                supportsRetryableReads(server) &&
                operation.canRetryRead;
            const willRetryWrite = topology.s.options.retryWrites === true &&
                !inTransaction &&
                (0, utils_2.supportsRetryableWrites)(server) &&
                operation.canRetryWrite;
            const hasReadAspect = operation.hasAspect(operation_1.Aspect.READ_OPERATION);
            const hasWriteAspect = operation.hasAspect(operation_1.Aspect.WRITE_OPERATION);
            if ((hasReadAspect && willRetryRead) || (hasWriteAspect && willRetryWrite)) {
                if (hasWriteAspect && willRetryWrite) {
                    operation.options.willRetryWrite = true;
                    session.incrementTransactionNumber();
                }
                operation.execute(server, session, callbackWithRetry);
                return;
            }
        }
        operation.execute(server, session, callback);
    });
}
function shouldRetryWrite(err) {
    return err instanceof error_1.MongoError && err.hasErrorLabel('RetryableWriteError');
}
//# sourceMappingURL=execute_operation.js.map
}, function(modId) { var map = {"../read_preference":1647755346519,"../error":1647755346514,"./operation":1647755346531,"../utils":1647755346512,"../sdam/server_selection":1647755346533}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346531, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.defineAspects = exports.AbstractOperation = exports.Aspect = void 0;
const read_preference_1 = require("../read_preference");
const bson_1 = require("../bson");
exports.Aspect = {
    READ_OPERATION: Symbol('READ_OPERATION'),
    WRITE_OPERATION: Symbol('WRITE_OPERATION'),
    RETRYABLE: Symbol('RETRYABLE'),
    EXPLAINABLE: Symbol('EXPLAINABLE'),
    SKIP_COLLATION: Symbol('SKIP_COLLATION'),
    CURSOR_CREATING: Symbol('CURSOR_CREATING'),
    CURSOR_ITERATING: Symbol('CURSOR_ITERATING')
};
/** @internal */
const kSession = Symbol('session');
/**
 * This class acts as a parent class for any operation and is responsible for setting this.options,
 * as well as setting and getting a session.
 * Additionally, this class implements `hasAspect`, which determines whether an operation has
 * a specific aspect.
 * @internal
 */
class AbstractOperation {
    constructor(options = {}) {
        var _a;
        this.readPreference = this.hasAspect(exports.Aspect.WRITE_OPERATION)
            ? read_preference_1.ReadPreference.primary
            : (_a = read_preference_1.ReadPreference.fromOptions(options)) !== null && _a !== void 0 ? _a : read_preference_1.ReadPreference.primary;
        // Pull the BSON serialize options from the already-resolved options
        this.bsonOptions = (0, bson_1.resolveBSONOptions)(options);
        if (options.session) {
            this[kSession] = options.session;
        }
        this.options = options;
        this.bypassPinningCheck = !!options.bypassPinningCheck;
        this.trySecondaryWrite = false;
    }
    hasAspect(aspect) {
        const ctor = this.constructor;
        if (ctor.aspects == null) {
            return false;
        }
        return ctor.aspects.has(aspect);
    }
    get session() {
        return this[kSession];
    }
    get canRetryRead() {
        return true;
    }
    get canRetryWrite() {
        return true;
    }
}
exports.AbstractOperation = AbstractOperation;
function defineAspects(operation, aspects) {
    if (!Array.isArray(aspects) && !(aspects instanceof Set)) {
        aspects = [aspects];
    }
    aspects = new Set(aspects);
    Object.defineProperty(operation, 'aspects', {
        value: aspects,
        writable: false
    });
    return aspects;
}
exports.defineAspects = defineAspects;
//# sourceMappingURL=operation.js.map
}, function(modId) { var map = {"../read_preference":1647755346519}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346533, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.readPreferenceServerSelector = exports.secondaryWritableServerSelector = exports.sameServerSelector = exports.writableServerSelector = exports.MIN_SECONDARY_WRITE_WIRE_VERSION = void 0;
const common_1 = require("./common");
const read_preference_1 = require("../read_preference");
const error_1 = require("../error");
// max staleness constants
const IDLE_WRITE_PERIOD = 10000;
const SMALLEST_MAX_STALENESS_SECONDS = 90;
//  Minimum version to try writes on secondaries.
exports.MIN_SECONDARY_WRITE_WIRE_VERSION = 13;
/**
 * Returns a server selector that selects for writable servers
 */
function writableServerSelector() {
    return (topologyDescription, servers) => latencyWindowReducer(topologyDescription, servers.filter((s) => s.isWritable));
}
exports.writableServerSelector = writableServerSelector;
/**
 * The purpose of this selector is to select the same server, only
 * if it is in a state that it can have commands sent to it.
 */
function sameServerSelector(description) {
    return (topologyDescription, servers) => {
        if (!description)
            return [];
        // Filter the servers to match the provided description only if
        // the type is not unknown.
        return servers.filter(sd => {
            return sd.address === description.address && sd.type !== common_1.ServerType.Unknown;
        });
    };
}
exports.sameServerSelector = sameServerSelector;
/**
 * Returns a server selector that uses a read preference to select a
 * server potentially for a write on a secondary.
 */
function secondaryWritableServerSelector(wireVersion, readPreference) {
    // If server version < 5.0, read preference always primary.
    // If server version >= 5.0...
    // - If read preference is supplied, use that.
    // - If no read preference is supplied, use primary.
    if (!readPreference ||
        !wireVersion ||
        (wireVersion && wireVersion < exports.MIN_SECONDARY_WRITE_WIRE_VERSION)) {
        return readPreferenceServerSelector(read_preference_1.ReadPreference.primary);
    }
    return readPreferenceServerSelector(readPreference);
}
exports.secondaryWritableServerSelector = secondaryWritableServerSelector;
/**
 * Reduces the passed in array of servers by the rules of the "Max Staleness" specification
 * found here: https://github.com/mongodb/specifications/blob/master/source/max-staleness/max-staleness.rst
 *
 * @param readPreference - The read preference providing max staleness guidance
 * @param topologyDescription - The topology description
 * @param servers - The list of server descriptions to be reduced
 * @returns The list of servers that satisfy the requirements of max staleness
 */
function maxStalenessReducer(readPreference, topologyDescription, servers) {
    if (readPreference.maxStalenessSeconds == null || readPreference.maxStalenessSeconds < 0) {
        return servers;
    }
    const maxStaleness = readPreference.maxStalenessSeconds;
    const maxStalenessVariance = (topologyDescription.heartbeatFrequencyMS + IDLE_WRITE_PERIOD) / 1000;
    if (maxStaleness < maxStalenessVariance) {
        throw new error_1.MongoInvalidArgumentError(`Option "maxStalenessSeconds" must be at least ${maxStalenessVariance} seconds`);
    }
    if (maxStaleness < SMALLEST_MAX_STALENESS_SECONDS) {
        throw new error_1.MongoInvalidArgumentError(`Option "maxStalenessSeconds" must be at least ${SMALLEST_MAX_STALENESS_SECONDS} seconds`);
    }
    if (topologyDescription.type === common_1.TopologyType.ReplicaSetWithPrimary) {
        const primary = Array.from(topologyDescription.servers.values()).filter(primaryFilter)[0];
        return servers.reduce((result, server) => {
            var _a;
            const stalenessMS = server.lastUpdateTime -
                server.lastWriteDate -
                (primary.lastUpdateTime - primary.lastWriteDate) +
                topologyDescription.heartbeatFrequencyMS;
            const staleness = stalenessMS / 1000;
            const maxStalenessSeconds = (_a = readPreference.maxStalenessSeconds) !== null && _a !== void 0 ? _a : 0;
            if (staleness <= maxStalenessSeconds) {
                result.push(server);
            }
            return result;
        }, []);
    }
    if (topologyDescription.type === common_1.TopologyType.ReplicaSetNoPrimary) {
        if (servers.length === 0) {
            return servers;
        }
        const sMax = servers.reduce((max, s) => s.lastWriteDate > max.lastWriteDate ? s : max);
        return servers.reduce((result, server) => {
            var _a;
            const stalenessMS = sMax.lastWriteDate - server.lastWriteDate + topologyDescription.heartbeatFrequencyMS;
            const staleness = stalenessMS / 1000;
            const maxStalenessSeconds = (_a = readPreference.maxStalenessSeconds) !== null && _a !== void 0 ? _a : 0;
            if (staleness <= maxStalenessSeconds) {
                result.push(server);
            }
            return result;
        }, []);
    }
    return servers;
}
/**
 * Determines whether a server's tags match a given set of tags
 *
 * @param tagSet - The requested tag set to match
 * @param serverTags - The server's tags
 */
function tagSetMatch(tagSet, serverTags) {
    const keys = Object.keys(tagSet);
    const serverTagKeys = Object.keys(serverTags);
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (serverTagKeys.indexOf(key) === -1 || serverTags[key] !== tagSet[key]) {
            return false;
        }
    }
    return true;
}
/**
 * Reduces a set of server descriptions based on tags requested by the read preference
 *
 * @param readPreference - The read preference providing the requested tags
 * @param servers - The list of server descriptions to reduce
 * @returns The list of servers matching the requested tags
 */
function tagSetReducer(readPreference, servers) {
    if (readPreference.tags == null ||
        (Array.isArray(readPreference.tags) && readPreference.tags.length === 0)) {
        return servers;
    }
    for (let i = 0; i < readPreference.tags.length; ++i) {
        const tagSet = readPreference.tags[i];
        const serversMatchingTagset = servers.reduce((matched, server) => {
            if (tagSetMatch(tagSet, server.tags))
                matched.push(server);
            return matched;
        }, []);
        if (serversMatchingTagset.length) {
            return serversMatchingTagset;
        }
    }
    return [];
}
/**
 * Reduces a list of servers to ensure they fall within an acceptable latency window. This is
 * further specified in the "Server Selection" specification, found here:
 * https://github.com/mongodb/specifications/blob/master/source/server-selection/server-selection.rst
 *
 * @param topologyDescription - The topology description
 * @param servers - The list of servers to reduce
 * @returns The servers which fall within an acceptable latency window
 */
function latencyWindowReducer(topologyDescription, servers) {
    const low = servers.reduce((min, server) => min === -1 ? server.roundTripTime : Math.min(server.roundTripTime, min), -1);
    const high = low + topologyDescription.localThresholdMS;
    return servers.reduce((result, server) => {
        if (server.roundTripTime <= high && server.roundTripTime >= low)
            result.push(server);
        return result;
    }, []);
}
// filters
function primaryFilter(server) {
    return server.type === common_1.ServerType.RSPrimary;
}
function secondaryFilter(server) {
    return server.type === common_1.ServerType.RSSecondary;
}
function nearestFilter(server) {
    return server.type === common_1.ServerType.RSSecondary || server.type === common_1.ServerType.RSPrimary;
}
function knownFilter(server) {
    return server.type !== common_1.ServerType.Unknown;
}
function loadBalancerFilter(server) {
    return server.type === common_1.ServerType.LoadBalancer;
}
/**
 * Returns a function which selects servers based on a provided read preference
 *
 * @param readPreference - The read preference to select with
 */
function readPreferenceServerSelector(readPreference) {
    if (!readPreference.isValid()) {
        throw new error_1.MongoInvalidArgumentError('Invalid read preference specified');
    }
    return (topologyDescription, servers) => {
        const commonWireVersion = topologyDescription.commonWireVersion;
        if (commonWireVersion &&
            readPreference.minWireVersion &&
            readPreference.minWireVersion > commonWireVersion) {
            throw new error_1.MongoCompatibilityError(`Minimum wire version '${readPreference.minWireVersion}' required, but found '${commonWireVersion}'`);
        }
        if (topologyDescription.type === common_1.TopologyType.LoadBalanced) {
            return servers.filter(loadBalancerFilter);
        }
        if (topologyDescription.type === common_1.TopologyType.Unknown) {
            return [];
        }
        if (topologyDescription.type === common_1.TopologyType.Single ||
            topologyDescription.type === common_1.TopologyType.Sharded) {
            return latencyWindowReducer(topologyDescription, servers.filter(knownFilter));
        }
        const mode = readPreference.mode;
        if (mode === read_preference_1.ReadPreference.PRIMARY) {
            return servers.filter(primaryFilter);
        }
        if (mode === read_preference_1.ReadPreference.PRIMARY_PREFERRED) {
            const result = servers.filter(primaryFilter);
            if (result.length) {
                return result;
            }
        }
        const filter = mode === read_preference_1.ReadPreference.NEAREST ? nearestFilter : secondaryFilter;
        const selectedServers = latencyWindowReducer(topologyDescription, tagSetReducer(readPreference, maxStalenessReducer(readPreference, topologyDescription, servers.filter(filter))));
        if (mode === read_preference_1.ReadPreference.SECONDARY_PREFERRED && selectedServers.length === 0) {
            return servers.filter(primaryFilter);
        }
        return selectedServers;
    };
}
exports.readPreferenceServerSelector = readPreferenceServerSelector;
//# sourceMappingURL=server_selection.js.map
}, function(modId) { var map = {"./common":1647755346516,"../read_preference":1647755346519,"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346534, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.RunAdminCommandOperation = exports.RunCommandOperation = void 0;
const command_1 = require("./command");
const utils_1 = require("../utils");
/** @internal */
class RunCommandOperation extends command_1.CommandOperation {
    constructor(parent, command, options) {
        super(parent, options);
        this.options = options !== null && options !== void 0 ? options : {};
        this.command = command;
    }
    execute(server, session, callback) {
        const command = this.command;
        this.executeCommand(server, session, command, callback);
    }
}
exports.RunCommandOperation = RunCommandOperation;
class RunAdminCommandOperation extends RunCommandOperation {
    constructor(parent, command, options) {
        super(parent, command, options);
        this.ns = new utils_1.MongoDBNamespace('admin');
    }
}
exports.RunAdminCommandOperation = RunAdminCommandOperation;
//# sourceMappingURL=run_command.js.map
}, function(modId) { var map = {"./command":1647755346535,"../utils":1647755346512}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346535, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandOperation = void 0;
const operation_1 = require("./operation");
const read_concern_1 = require("../read_concern");
const write_concern_1 = require("../write_concern");
const utils_1 = require("../utils");
const sessions_1 = require("../sessions");
const error_1 = require("../error");
const explain_1 = require("../explain");
const server_selection_1 = require("../sdam/server_selection");
const SUPPORTS_WRITE_CONCERN_AND_COLLATION = 5;
/** @internal */
class CommandOperation extends operation_1.AbstractOperation {
    constructor(parent, options) {
        super(options);
        this.options = options !== null && options !== void 0 ? options : {};
        // NOTE: this was explicitly added for the add/remove user operations, it's likely
        //       something we'd want to reconsider. Perhaps those commands can use `Admin`
        //       as a parent?
        const dbNameOverride = (options === null || options === void 0 ? void 0 : options.dbName) || (options === null || options === void 0 ? void 0 : options.authdb);
        if (dbNameOverride) {
            this.ns = new utils_1.MongoDBNamespace(dbNameOverride, '$cmd');
        }
        else {
            this.ns = parent
                ? parent.s.namespace.withCollection('$cmd')
                : new utils_1.MongoDBNamespace('admin', '$cmd');
        }
        this.readConcern = read_concern_1.ReadConcern.fromOptions(options);
        this.writeConcern = write_concern_1.WriteConcern.fromOptions(options);
        // TODO(NODE-2056): make logger another "inheritable" property
        if (parent && parent.logger) {
            this.logger = parent.logger;
        }
        if (this.hasAspect(operation_1.Aspect.EXPLAINABLE)) {
            this.explain = explain_1.Explain.fromOptions(options);
        }
        else if ((options === null || options === void 0 ? void 0 : options.explain) != null) {
            throw new error_1.MongoInvalidArgumentError(`Option "explain" is not supported on this command`);
        }
    }
    get canRetryWrite() {
        if (this.hasAspect(operation_1.Aspect.EXPLAINABLE)) {
            return this.explain == null;
        }
        return true;
    }
    executeCommand(server, session, cmd, callback) {
        // TODO: consider making this a non-enumerable property
        this.server = server;
        const options = {
            ...this.options,
            ...this.bsonOptions,
            readPreference: this.readPreference,
            session
        };
        const serverWireVersion = (0, utils_1.maxWireVersion)(server);
        const inTransaction = this.session && this.session.inTransaction();
        if (this.readConcern && (0, sessions_1.commandSupportsReadConcern)(cmd) && !inTransaction) {
            Object.assign(cmd, { readConcern: this.readConcern });
        }
        if (this.trySecondaryWrite && serverWireVersion < server_selection_1.MIN_SECONDARY_WRITE_WIRE_VERSION) {
            options.omitReadPreference = true;
        }
        if (options.collation && serverWireVersion < SUPPORTS_WRITE_CONCERN_AND_COLLATION) {
            callback(new error_1.MongoCompatibilityError(`Server ${server.name}, which reports wire version ${serverWireVersion}, does not support collation`));
            return;
        }
        if (this.writeConcern && this.hasAspect(operation_1.Aspect.WRITE_OPERATION) && !inTransaction) {
            Object.assign(cmd, { writeConcern: this.writeConcern });
        }
        if (serverWireVersion >= SUPPORTS_WRITE_CONCERN_AND_COLLATION) {
            if (options.collation &&
                typeof options.collation === 'object' &&
                !this.hasAspect(operation_1.Aspect.SKIP_COLLATION)) {
                Object.assign(cmd, { collation: options.collation });
            }
        }
        if (typeof options.maxTimeMS === 'number') {
            cmd.maxTimeMS = options.maxTimeMS;
        }
        if (typeof options.comment === 'string') {
            cmd.comment = options.comment;
        }
        if (this.hasAspect(operation_1.Aspect.EXPLAINABLE) && this.explain) {
            if (serverWireVersion < 6 && cmd.aggregate) {
                // Prior to 3.6, with aggregate, verbosity is ignored, and we must pass in "explain: true"
                cmd.explain = true;
            }
            else {
                cmd = (0, utils_1.decorateWithExplain)(cmd, this.explain);
            }
        }
        server.command(this.ns, cmd, options, callback);
    }
}
exports.CommandOperation = CommandOperation;
//# sourceMappingURL=command.js.map
}, function(modId) { var map = {"./operation":1647755346531,"../read_concern":1647755346517,"../write_concern":1647755346515,"../utils":1647755346512,"../sessions":1647755346523,"../error":1647755346514,"../explain":1647755346536,"../sdam/server_selection":1647755346533}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346536, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Explain = exports.ExplainVerbosity = void 0;
const error_1 = require("./error");
/** @public */
exports.ExplainVerbosity = Object.freeze({
    queryPlanner: 'queryPlanner',
    queryPlannerExtended: 'queryPlannerExtended',
    executionStats: 'executionStats',
    allPlansExecution: 'allPlansExecution'
});
/** @internal */
class Explain {
    constructor(verbosity) {
        if (typeof verbosity === 'boolean') {
            this.verbosity = verbosity
                ? exports.ExplainVerbosity.allPlansExecution
                : exports.ExplainVerbosity.queryPlanner;
        }
        else {
            this.verbosity = verbosity;
        }
    }
    static fromOptions(options) {
        if ((options === null || options === void 0 ? void 0 : options.explain) == null)
            return;
        const explain = options.explain;
        if (typeof explain === 'boolean' || typeof explain === 'string') {
            return new Explain(explain);
        }
        throw new error_1.MongoInvalidArgumentError('Field "explain" must be a string or a boolean');
    }
}
exports.Explain = Explain;
//# sourceMappingURL=explain.js.map
}, function(modId) { var map = {"./error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346537, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.hasSessionSupport = exports.CryptoConnection = exports.APM_EVENTS = exports.Connection = void 0;
const message_stream_1 = require("./message_stream");
const stream_description_1 = require("./stream_description");
const command_monitoring_events_1 = require("./command_monitoring_events");
const sessions_1 = require("../sessions");
const utils_1 = require("../utils");
const error_1 = require("../error");
const commands_1 = require("./commands");
const bson_1 = require("../bson");
const shared_1 = require("./wire_protocol/shared");
const read_preference_1 = require("../read_preference");
const mongo_types_1 = require("../mongo_types");
/** @internal */
const kStream = Symbol('stream');
/** @internal */
const kQueue = Symbol('queue');
/** @internal */
const kMessageStream = Symbol('messageStream');
/** @internal */
const kGeneration = Symbol('generation');
/** @internal */
const kLastUseTime = Symbol('lastUseTime');
/** @internal */
const kClusterTime = Symbol('clusterTime');
/** @internal */
const kDescription = Symbol('description');
/** @internal */
const kIsMaster = Symbol('ismaster');
/** @internal */
const kAutoEncrypter = Symbol('autoEncrypter');
/** @internal */
const kFullResult = Symbol('fullResult');
/** @internal */
class Connection extends mongo_types_1.TypedEventEmitter {
    constructor(stream, options) {
        var _a, _b;
        super();
        this.id = options.id;
        this.address = streamIdentifier(stream);
        this.socketTimeoutMS = (_a = options.socketTimeoutMS) !== null && _a !== void 0 ? _a : 0;
        this.monitorCommands = options.monitorCommands;
        this.serverApi = options.serverApi;
        this.closed = false;
        this.destroyed = false;
        this[kDescription] = new stream_description_1.StreamDescription(this.address, options);
        this[kGeneration] = options.generation;
        this[kLastUseTime] = (0, utils_1.now)();
        // setup parser stream and message handling
        this[kQueue] = new Map();
        this[kMessageStream] = new message_stream_1.MessageStream({
            ...options,
            maxBsonMessageSize: (_b = this.ismaster) === null || _b === void 0 ? void 0 : _b.maxBsonMessageSize
        });
        this[kMessageStream].on('message', messageHandler(this));
        this[kStream] = stream;
        stream.on('error', () => {
            /* ignore errors, listen to `close` instead */
        });
        this[kMessageStream].on('error', error => this.handleIssue({ destroy: error }));
        stream.on('close', () => this.handleIssue({ isClose: true }));
        stream.on('timeout', () => this.handleIssue({ isTimeout: true, destroy: true }));
        // hook the message stream up to the passed in stream
        stream.pipe(this[kMessageStream]);
        this[kMessageStream].pipe(stream);
    }
    get description() {
        return this[kDescription];
    }
    get ismaster() {
        return this[kIsMaster];
    }
    // the `connect` method stores the result of the handshake ismaster on the connection
    set ismaster(response) {
        this[kDescription].receiveResponse(response);
        this[kDescription] = Object.freeze(this[kDescription]);
        // TODO: remove this, and only use the `StreamDescription` in the future
        this[kIsMaster] = response;
    }
    get serviceId() {
        var _a;
        return (_a = this.ismaster) === null || _a === void 0 ? void 0 : _a.serviceId;
    }
    get loadBalanced() {
        return this.description.loadBalanced;
    }
    get generation() {
        return this[kGeneration] || 0;
    }
    set generation(generation) {
        this[kGeneration] = generation;
    }
    get idleTime() {
        return (0, utils_1.calculateDurationInMs)(this[kLastUseTime]);
    }
    get clusterTime() {
        return this[kClusterTime];
    }
    get stream() {
        return this[kStream];
    }
    markAvailable() {
        this[kLastUseTime] = (0, utils_1.now)();
    }
    handleIssue(issue) {
        if (this.closed) {
            return;
        }
        if (issue.destroy) {
            this[kStream].destroy(typeof issue.destroy === 'boolean' ? undefined : issue.destroy);
        }
        this.closed = true;
        for (const [, op] of this[kQueue]) {
            if (issue.isTimeout) {
                op.cb(new error_1.MongoNetworkTimeoutError(`connection ${this.id} to ${this.address} timed out`, {
                    beforeHandshake: this.ismaster == null
                }));
            }
            else if (issue.isClose) {
                op.cb(new error_1.MongoNetworkError(`connection ${this.id} to ${this.address} closed`));
            }
            else {
                op.cb(typeof issue.destroy === 'boolean' ? undefined : issue.destroy);
            }
        }
        this[kQueue].clear();
        this.emit(Connection.CLOSE);
    }
    destroy(options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = { force: false };
        }
        this.removeAllListeners(Connection.PINNED);
        this.removeAllListeners(Connection.UNPINNED);
        options = Object.assign({ force: false }, options);
        if (this[kStream] == null || this.destroyed) {
            this.destroyed = true;
            if (typeof callback === 'function') {
                callback();
            }
            return;
        }
        if (options.force) {
            this[kStream].destroy();
            this.destroyed = true;
            if (typeof callback === 'function') {
                callback();
            }
            return;
        }
        this[kStream].end(() => {
            this.destroyed = true;
            if (typeof callback === 'function') {
                callback();
            }
        });
    }
    /** @internal */
    command(ns, cmd, options, callback) {
        if (!(ns instanceof utils_1.MongoDBNamespace)) {
            // TODO(NODE-3483): Replace this with a MongoCommandError
            throw new error_1.MongoRuntimeError('Must provide a MongoDBNamespace instance');
        }
        const readPreference = (0, shared_1.getReadPreference)(cmd, options);
        const shouldUseOpMsg = supportsOpMsg(this);
        const session = options === null || options === void 0 ? void 0 : options.session;
        let clusterTime = this.clusterTime;
        let finalCmd = Object.assign({}, cmd);
        if (this.serverApi) {
            const { version, strict, deprecationErrors } = this.serverApi;
            finalCmd.apiVersion = version;
            if (strict != null)
                finalCmd.apiStrict = strict;
            if (deprecationErrors != null)
                finalCmd.apiDeprecationErrors = deprecationErrors;
        }
        if (hasSessionSupport(this) && session) {
            if (session.clusterTime &&
                clusterTime &&
                session.clusterTime.clusterTime.greaterThan(clusterTime.clusterTime)) {
                clusterTime = session.clusterTime;
            }
            const err = (0, sessions_1.applySession)(session, finalCmd, options);
            if (err) {
                return callback(err);
            }
        }
        // if we have a known cluster time, gossip it
        if (clusterTime) {
            finalCmd.$clusterTime = clusterTime;
        }
        if ((0, shared_1.isSharded)(this) && !shouldUseOpMsg && readPreference && readPreference.mode !== 'primary') {
            finalCmd = {
                $query: finalCmd,
                $readPreference: readPreference.toJSON()
            };
        }
        const commandOptions = Object.assign({
            command: true,
            numberToSkip: 0,
            numberToReturn: -1,
            checkKeys: false,
            // This value is not overridable
            slaveOk: readPreference.slaveOk()
        }, options);
        const cmdNs = `${ns.db}.$cmd`;
        const message = shouldUseOpMsg
            ? new commands_1.Msg(cmdNs, finalCmd, commandOptions)
            : new commands_1.Query(cmdNs, finalCmd, commandOptions);
        try {
            write(this, message, commandOptions, callback);
        }
        catch (err) {
            callback(err);
        }
    }
    /** @internal */
    query(ns, cmd, options, callback) {
        var _a;
        const isExplain = cmd.$explain != null;
        const readPreference = (_a = options.readPreference) !== null && _a !== void 0 ? _a : read_preference_1.ReadPreference.primary;
        const batchSize = options.batchSize || 0;
        const limit = options.limit;
        const numberToSkip = options.skip || 0;
        let numberToReturn = 0;
        if (limit &&
            (limit < 0 || (limit !== 0 && limit < batchSize) || (limit > 0 && batchSize === 0))) {
            numberToReturn = limit;
        }
        else {
            numberToReturn = batchSize;
        }
        if (isExplain) {
            // nToReturn must be 0 (match all) or negative (match N and close cursor)
            // nToReturn > 0 will give explain results equivalent to limit(0)
            numberToReturn = -Math.abs(limit || 0);
        }
        const queryOptions = {
            numberToSkip,
            numberToReturn,
            pre32Limit: typeof limit === 'number' ? limit : undefined,
            checkKeys: false,
            slaveOk: readPreference.slaveOk()
        };
        if (options.projection) {
            queryOptions.returnFieldSelector = options.projection;
        }
        const query = new commands_1.Query(ns.toString(), cmd, queryOptions);
        if (typeof options.tailable === 'boolean') {
            query.tailable = options.tailable;
        }
        if (typeof options.oplogReplay === 'boolean') {
            query.oplogReplay = options.oplogReplay;
        }
        if (typeof options.timeout === 'boolean') {
            query.noCursorTimeout = !options.timeout;
        }
        else if (typeof options.noCursorTimeout === 'boolean') {
            query.noCursorTimeout = options.noCursorTimeout;
        }
        if (typeof options.awaitData === 'boolean') {
            query.awaitData = options.awaitData;
        }
        if (typeof options.partial === 'boolean') {
            query.partial = options.partial;
        }
        write(this, query, { [kFullResult]: true, ...(0, bson_1.pluckBSONSerializeOptions)(options) }, (err, result) => {
            if (err || !result)
                return callback(err, result);
            if (isExplain && result.documents && result.documents[0]) {
                return callback(undefined, result.documents[0]);
            }
            callback(undefined, result);
        });
    }
    /** @internal */
    getMore(ns, cursorId, options, callback) {
        const fullResult = !!options[kFullResult];
        const wireVersion = (0, utils_1.maxWireVersion)(this);
        if (!cursorId) {
            // TODO(NODE-3483): Replace this with a MongoCommandError
            callback(new error_1.MongoRuntimeError('Invalid internal cursor state, no known cursor id'));
            return;
        }
        if (wireVersion < 4) {
            const getMoreOp = new commands_1.GetMore(ns.toString(), cursorId, { numberToReturn: options.batchSize });
            const queryOptions = (0, shared_1.applyCommonQueryOptions)({}, Object.assign(options, { ...(0, bson_1.pluckBSONSerializeOptions)(options) }));
            queryOptions[kFullResult] = true;
            queryOptions.command = true;
            write(this, getMoreOp, queryOptions, (err, response) => {
                if (fullResult)
                    return callback(err, response);
                if (err)
                    return callback(err);
                callback(undefined, { cursor: { id: response.cursorId, nextBatch: response.documents } });
            });
            return;
        }
        const getMoreCmd = {
            getMore: cursorId,
            collection: ns.collection
        };
        if (typeof options.batchSize === 'number') {
            getMoreCmd.batchSize = Math.abs(options.batchSize);
        }
        if (typeof options.maxAwaitTimeMS === 'number') {
            getMoreCmd.maxTimeMS = options.maxAwaitTimeMS;
        }
        const commandOptions = Object.assign({
            returnFieldSelector: null,
            documentsReturnedIn: 'nextBatch'
        }, options);
        this.command(ns, getMoreCmd, commandOptions, callback);
    }
    /** @internal */
    killCursors(ns, cursorIds, options, callback) {
        if (!cursorIds || !Array.isArray(cursorIds)) {
            // TODO(NODE-3483): Replace this with a MongoCommandError
            throw new error_1.MongoRuntimeError(`Invalid list of cursor ids provided: ${cursorIds}`);
        }
        if ((0, utils_1.maxWireVersion)(this) < 4) {
            try {
                write(this, new commands_1.KillCursor(ns.toString(), cursorIds), { noResponse: true, ...options }, callback);
            }
            catch (err) {
                callback(err);
            }
            return;
        }
        this.command(ns, { killCursors: ns.collection, cursors: cursorIds }, { [kFullResult]: true, ...options }, (err, response) => {
            if (err || !response)
                return callback(err);
            if (response.cursorNotFound) {
                return callback(new error_1.MongoNetworkError('cursor killed or timed out'), null);
            }
            if (!Array.isArray(response.documents) || response.documents.length === 0) {
                return callback(
                // TODO(NODE-3483)
                new error_1.MongoRuntimeError(`invalid killCursors result returned for cursor id ${cursorIds[0]}`));
            }
            callback(undefined, response.documents[0]);
        });
    }
}
exports.Connection = Connection;
/** @event */
Connection.COMMAND_STARTED = 'commandStarted';
/** @event */
Connection.COMMAND_SUCCEEDED = 'commandSucceeded';
/** @event */
Connection.COMMAND_FAILED = 'commandFailed';
/** @event */
Connection.CLUSTER_TIME_RECEIVED = 'clusterTimeReceived';
/** @event */
Connection.CLOSE = 'close';
/** @event */
Connection.MESSAGE = 'message';
/** @event */
Connection.PINNED = 'pinned';
/** @event */
Connection.UNPINNED = 'unpinned';
/** @public */
exports.APM_EVENTS = [
    Connection.COMMAND_STARTED,
    Connection.COMMAND_SUCCEEDED,
    Connection.COMMAND_FAILED
];
/** @internal */
class CryptoConnection extends Connection {
    constructor(stream, options) {
        super(stream, options);
        this[kAutoEncrypter] = options.autoEncrypter;
    }
    /** @internal @override */
    command(ns, cmd, options, callback) {
        const autoEncrypter = this[kAutoEncrypter];
        if (!autoEncrypter) {
            return callback(new error_1.MongoMissingDependencyError('No AutoEncrypter available for encryption'));
        }
        const serverWireVersion = (0, utils_1.maxWireVersion)(this);
        if (serverWireVersion === 0) {
            // This means the initial handshake hasn't happened yet
            return super.command(ns, cmd, options, callback);
        }
        if (serverWireVersion < 8) {
            callback(new error_1.MongoCompatibilityError('Auto-encryption requires a minimum MongoDB version of 4.2'));
            return;
        }
        autoEncrypter.encrypt(ns.toString(), cmd, options, (err, encrypted) => {
            if (err || encrypted == null) {
                callback(err, null);
                return;
            }
            super.command(ns, encrypted, options, (err, response) => {
                if (err || response == null) {
                    callback(err, response);
                    return;
                }
                autoEncrypter.decrypt(response, options, callback);
            });
        });
    }
}
exports.CryptoConnection = CryptoConnection;
/** @internal */
function hasSessionSupport(conn) {
    const description = conn.description;
    return description.logicalSessionTimeoutMinutes != null || !!description.loadBalanced;
}
exports.hasSessionSupport = hasSessionSupport;
function supportsOpMsg(conn) {
    const description = conn.description;
    if (description == null) {
        return false;
    }
    return (0, utils_1.maxWireVersion)(conn) >= 6 && !description.__nodejs_mock_server__;
}
function messageHandler(conn) {
    return function messageHandler(message) {
        // always emit the message, in case we are streaming
        conn.emit('message', message);
        const operationDescription = conn[kQueue].get(message.responseTo);
        if (!operationDescription) {
            return;
        }
        const callback = operationDescription.cb;
        // SERVER-45775: For exhaust responses we should be able to use the same requestId to
        // track response, however the server currently synthetically produces remote requests
        // making the `responseTo` change on each response
        conn[kQueue].delete(message.responseTo);
        if ('moreToCome' in message && message.moreToCome) {
            // requeue the callback for next synthetic request
            conn[kQueue].set(message.requestId, operationDescription);
        }
        else if (operationDescription.socketTimeoutOverride) {
            conn[kStream].setTimeout(conn.socketTimeoutMS);
        }
        try {
            // Pass in the entire description because it has BSON parsing options
            message.parse(operationDescription);
        }
        catch (err) {
            // If this error is generated by our own code, it will already have the correct class applied
            // if it is not, then it is coming from a catastrophic data parse failure or the BSON library
            // in either case, it should not be wrapped
            callback(err);
            return;
        }
        if (message.documents[0]) {
            const document = message.documents[0];
            const session = operationDescription.session;
            if (session) {
                (0, sessions_1.updateSessionFromResponse)(session, document);
            }
            if (document.$clusterTime) {
                conn[kClusterTime] = document.$clusterTime;
                conn.emit(Connection.CLUSTER_TIME_RECEIVED, document.$clusterTime);
            }
            if (operationDescription.command) {
                if (document.writeConcernError) {
                    callback(new error_1.MongoWriteConcernError(document.writeConcernError, document));
                    return;
                }
                if (document.ok === 0 || document.$err || document.errmsg || document.code) {
                    callback(new error_1.MongoServerError(document));
                    return;
                }
            }
            else {
                // Pre 3.2 support
                if (document.ok === 0 || document.$err || document.errmsg) {
                    callback(new error_1.MongoServerError(document));
                    return;
                }
            }
        }
        callback(undefined, operationDescription.fullResult ? message : message.documents[0]);
    };
}
function streamIdentifier(stream) {
    if (typeof stream.address === 'function') {
        return `${stream.remoteAddress}:${stream.remotePort}`;
    }
    return (0, utils_1.uuidV4)().toString('hex');
}
function write(conn, command, options, callback) {
    if (typeof options === 'function') {
        callback = options;
    }
    options = options !== null && options !== void 0 ? options : {};
    const operationDescription = {
        requestId: command.requestId,
        cb: callback,
        session: options.session,
        fullResult: !!options[kFullResult],
        noResponse: typeof options.noResponse === 'boolean' ? options.noResponse : false,
        documentsReturnedIn: options.documentsReturnedIn,
        command: !!options.command,
        // for BSON parsing
        promoteLongs: typeof options.promoteLongs === 'boolean' ? options.promoteLongs : true,
        promoteValues: typeof options.promoteValues === 'boolean' ? options.promoteValues : true,
        promoteBuffers: typeof options.promoteBuffers === 'boolean' ? options.promoteBuffers : false,
        bsonRegExp: typeof options.bsonRegExp === 'boolean' ? options.bsonRegExp : false,
        raw: typeof options.raw === 'boolean' ? options.raw : false,
        started: 0
    };
    if (conn[kDescription] && conn[kDescription].compressor) {
        operationDescription.agreedCompressor = conn[kDescription].compressor;
        if (conn[kDescription].zlibCompressionLevel) {
            operationDescription.zlibCompressionLevel = conn[kDescription].zlibCompressionLevel;
        }
    }
    if (typeof options.socketTimeoutMS === 'number') {
        operationDescription.socketTimeoutOverride = true;
        conn[kStream].setTimeout(options.socketTimeoutMS);
    }
    // if command monitoring is enabled we need to modify the callback here
    if (conn.monitorCommands) {
        conn.emit(Connection.COMMAND_STARTED, new command_monitoring_events_1.CommandStartedEvent(conn, command));
        operationDescription.started = (0, utils_1.now)();
        operationDescription.cb = (err, reply) => {
            if (err) {
                conn.emit(Connection.COMMAND_FAILED, new command_monitoring_events_1.CommandFailedEvent(conn, command, err, operationDescription.started));
            }
            else {
                if (reply && (reply.ok === 0 || reply.$err)) {
                    conn.emit(Connection.COMMAND_FAILED, new command_monitoring_events_1.CommandFailedEvent(conn, command, reply, operationDescription.started));
                }
                else {
                    conn.emit(Connection.COMMAND_SUCCEEDED, new command_monitoring_events_1.CommandSucceededEvent(conn, command, reply, operationDescription.started));
                }
            }
            if (typeof callback === 'function') {
                callback(err, reply);
            }
        };
    }
    if (!operationDescription.noResponse) {
        conn[kQueue].set(operationDescription.requestId, operationDescription);
    }
    try {
        conn[kMessageStream].writeCommand(command, operationDescription);
    }
    catch (e) {
        if (!operationDescription.noResponse) {
            conn[kQueue].delete(operationDescription.requestId);
            operationDescription.cb(e);
            return;
        }
    }
    if (operationDescription.noResponse) {
        operationDescription.cb();
    }
}
//# sourceMappingURL=connection.js.map
}, function(modId) { var map = {"./message_stream":1647755346538,"./stream_description":1647755346543,"./command_monitoring_events":1647755346544,"../sessions":1647755346523,"../utils":1647755346512,"../error":1647755346514,"./commands":1647755346539,"./wire_protocol/shared":1647755346526,"../read_preference":1647755346519,"../mongo_types":1647755346546}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346538, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageStream = void 0;
const stream_1 = require("stream");
const commands_1 = require("./commands");
const error_1 = require("../error");
const constants_1 = require("./wire_protocol/constants");
const compression_1 = require("./wire_protocol/compression");
const utils_1 = require("../utils");
const MESSAGE_HEADER_SIZE = 16;
const COMPRESSION_DETAILS_SIZE = 9; // originalOpcode + uncompressedSize, compressorID
const kDefaultMaxBsonMessageSize = 1024 * 1024 * 16 * 4;
/** @internal */
const kBuffer = Symbol('buffer');
/**
 * A duplex stream that is capable of reading and writing raw wire protocol messages, with
 * support for optional compression
 * @internal
 */
class MessageStream extends stream_1.Duplex {
    constructor(options = {}) {
        super(options);
        this.maxBsonMessageSize = options.maxBsonMessageSize || kDefaultMaxBsonMessageSize;
        this[kBuffer] = new utils_1.BufferPool();
    }
    _write(chunk, _, callback) {
        this[kBuffer].append(chunk);
        processIncomingData(this, callback);
    }
    _read( /* size */) {
        // NOTE: This implementation is empty because we explicitly push data to be read
        //       when `writeMessage` is called.
        return;
    }
    writeCommand(command, operationDescription) {
        // TODO: agreed compressor should live in `StreamDescription`
        const compressorName = operationDescription && operationDescription.agreedCompressor
            ? operationDescription.agreedCompressor
            : 'none';
        if (compressorName === 'none' || !canCompress(command)) {
            const data = command.toBin();
            this.push(Array.isArray(data) ? Buffer.concat(data) : data);
            return;
        }
        // otherwise, compress the message
        const concatenatedOriginalCommandBuffer = Buffer.concat(command.toBin());
        const messageToBeCompressed = concatenatedOriginalCommandBuffer.slice(MESSAGE_HEADER_SIZE);
        // Extract information needed for OP_COMPRESSED from the uncompressed message
        const originalCommandOpCode = concatenatedOriginalCommandBuffer.readInt32LE(12);
        // Compress the message body
        (0, compression_1.compress)({ options: operationDescription }, messageToBeCompressed, (err, compressedMessage) => {
            if (err || !compressedMessage) {
                operationDescription.cb(err);
                return;
            }
            // Create the msgHeader of OP_COMPRESSED
            const msgHeader = Buffer.alloc(MESSAGE_HEADER_SIZE);
            msgHeader.writeInt32LE(MESSAGE_HEADER_SIZE + COMPRESSION_DETAILS_SIZE + compressedMessage.length, 0); // messageLength
            msgHeader.writeInt32LE(command.requestId, 4); // requestID
            msgHeader.writeInt32LE(0, 8); // responseTo (zero)
            msgHeader.writeInt32LE(constants_1.OP_COMPRESSED, 12); // opCode
            // Create the compression details of OP_COMPRESSED
            const compressionDetails = Buffer.alloc(COMPRESSION_DETAILS_SIZE);
            compressionDetails.writeInt32LE(originalCommandOpCode, 0); // originalOpcode
            compressionDetails.writeInt32LE(messageToBeCompressed.length, 4); // Size of the uncompressed compressedMessage, excluding the MsgHeader
            compressionDetails.writeUInt8(compression_1.Compressor[compressorName], 8); // compressorID
            this.push(Buffer.concat([msgHeader, compressionDetails, compressedMessage]));
        });
    }
}
exports.MessageStream = MessageStream;
// Return whether a command contains an uncompressible command term
// Will return true if command contains no uncompressible command terms
function canCompress(command) {
    const commandDoc = command instanceof commands_1.Msg ? command.command : command.query;
    const commandName = Object.keys(commandDoc)[0];
    return !compression_1.uncompressibleCommands.has(commandName);
}
function processIncomingData(stream, callback) {
    const buffer = stream[kBuffer];
    if (buffer.length < 4) {
        callback();
        return;
    }
    const sizeOfMessage = buffer.peek(4).readInt32LE();
    if (sizeOfMessage < 0) {
        callback(new error_1.MongoParseError(`Invalid message size: ${sizeOfMessage}`));
        return;
    }
    if (sizeOfMessage > stream.maxBsonMessageSize) {
        callback(new error_1.MongoParseError(`Invalid message size: ${sizeOfMessage}, max allowed: ${stream.maxBsonMessageSize}`));
        return;
    }
    if (sizeOfMessage > buffer.length) {
        callback();
        return;
    }
    const message = buffer.read(sizeOfMessage);
    const messageHeader = {
        length: message.readInt32LE(0),
        requestId: message.readInt32LE(4),
        responseTo: message.readInt32LE(8),
        opCode: message.readInt32LE(12)
    };
    let ResponseType = messageHeader.opCode === constants_1.OP_MSG ? commands_1.BinMsg : commands_1.Response;
    if (messageHeader.opCode !== constants_1.OP_COMPRESSED) {
        const messageBody = message.slice(MESSAGE_HEADER_SIZE);
        stream.emit('message', new ResponseType(message, messageHeader, messageBody));
        if (buffer.length >= 4) {
            processIncomingData(stream, callback);
        }
        else {
            callback();
        }
        return;
    }
    messageHeader.fromCompressed = true;
    messageHeader.opCode = message.readInt32LE(MESSAGE_HEADER_SIZE);
    messageHeader.length = message.readInt32LE(MESSAGE_HEADER_SIZE + 4);
    const compressorID = message[MESSAGE_HEADER_SIZE + 8];
    const compressedBuffer = message.slice(MESSAGE_HEADER_SIZE + 9);
    // recalculate based on wrapped opcode
    ResponseType = messageHeader.opCode === constants_1.OP_MSG ? commands_1.BinMsg : commands_1.Response;
    (0, compression_1.decompress)(compressorID, compressedBuffer, (err, messageBody) => {
        if (err || !messageBody) {
            callback(err);
            return;
        }
        if (messageBody.length !== messageHeader.length) {
            callback(new error_1.MongoDecompressionError('Message body and message header must be the same length'));
            return;
        }
        stream.emit('message', new ResponseType(message, messageHeader, messageBody));
        if (buffer.length >= 4) {
            processIncomingData(stream, callback);
        }
        else {
            callback();
        }
    });
}
//# sourceMappingURL=message_stream.js.map
}, function(modId) { var map = {"./commands":1647755346539,"../error":1647755346514,"./wire_protocol/constants":1647755346520,"./wire_protocol/compression":1647755346541,"../utils":1647755346512}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346539, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.BinMsg = exports.Msg = exports.Response = exports.KillCursor = exports.GetMore = exports.Query = void 0;
const read_preference_1 = require("../read_preference");
const BSON = require("../bson");
const utils_1 = require("../utils");
const constants_1 = require("./wire_protocol/constants");
const error_1 = require("../error");
// Incrementing request id
let _requestId = 0;
// Query flags
const OPTS_TAILABLE_CURSOR = 2;
const OPTS_SLAVE = 4;
const OPTS_OPLOG_REPLAY = 8;
const OPTS_NO_CURSOR_TIMEOUT = 16;
const OPTS_AWAIT_DATA = 32;
const OPTS_EXHAUST = 64;
const OPTS_PARTIAL = 128;
// Response flags
const CURSOR_NOT_FOUND = 1;
const QUERY_FAILURE = 2;
const SHARD_CONFIG_STALE = 4;
const AWAIT_CAPABLE = 8;
/**************************************************************
 * QUERY
 **************************************************************/
/** @internal */
class Query {
    constructor(ns, query, options) {
        // Basic options needed to be passed in
        // TODO(NODE-3483): Replace with MongoCommandError
        if (ns == null)
            throw new error_1.MongoRuntimeError('Namespace must be specified for query');
        // TODO(NODE-3483): Replace with MongoCommandError
        if (query == null)
            throw new error_1.MongoRuntimeError('A query document must be specified for query');
        // Validate that we are not passing 0x00 in the collection name
        if (ns.indexOf('\x00') !== -1) {
            // TODO(NODE-3483): Use MongoNamespace static method
            throw new error_1.MongoRuntimeError('Namespace cannot contain a null character');
        }
        // Basic options
        this.ns = ns;
        this.query = query;
        // Additional options
        this.numberToSkip = options.numberToSkip || 0;
        this.numberToReturn = options.numberToReturn || 0;
        this.returnFieldSelector = options.returnFieldSelector || undefined;
        this.requestId = Query.getRequestId();
        // special case for pre-3.2 find commands, delete ASAP
        this.pre32Limit = options.pre32Limit;
        // Serialization option
        this.serializeFunctions =
            typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
        this.ignoreUndefined =
            typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : false;
        this.maxBsonSize = options.maxBsonSize || 1024 * 1024 * 16;
        this.checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
        this.batchSize = this.numberToReturn;
        // Flags
        this.tailable = false;
        this.slaveOk = typeof options.slaveOk === 'boolean' ? options.slaveOk : false;
        this.oplogReplay = false;
        this.noCursorTimeout = false;
        this.awaitData = false;
        this.exhaust = false;
        this.partial = false;
    }
    /** Assign next request Id. */
    incRequestId() {
        this.requestId = _requestId++;
    }
    /** Peek next request Id. */
    nextRequestId() {
        return _requestId + 1;
    }
    /** Increment then return next request Id. */
    static getRequestId() {
        return ++_requestId;
    }
    // Uses a single allocated buffer for the process, avoiding multiple memory allocations
    toBin() {
        const buffers = [];
        let projection = null;
        // Set up the flags
        let flags = 0;
        if (this.tailable) {
            flags |= OPTS_TAILABLE_CURSOR;
        }
        if (this.slaveOk) {
            flags |= OPTS_SLAVE;
        }
        if (this.oplogReplay) {
            flags |= OPTS_OPLOG_REPLAY;
        }
        if (this.noCursorTimeout) {
            flags |= OPTS_NO_CURSOR_TIMEOUT;
        }
        if (this.awaitData) {
            flags |= OPTS_AWAIT_DATA;
        }
        if (this.exhaust) {
            flags |= OPTS_EXHAUST;
        }
        if (this.partial) {
            flags |= OPTS_PARTIAL;
        }
        // If batchSize is different to this.numberToReturn
        if (this.batchSize !== this.numberToReturn)
            this.numberToReturn = this.batchSize;
        // Allocate write protocol header buffer
        const header = Buffer.alloc(4 * 4 + // Header
            4 + // Flags
            Buffer.byteLength(this.ns) +
            1 + // namespace
            4 + // numberToSkip
            4 // numberToReturn
        );
        // Add header to buffers
        buffers.push(header);
        // Serialize the query
        const query = BSON.serialize(this.query, {
            checkKeys: this.checkKeys,
            serializeFunctions: this.serializeFunctions,
            ignoreUndefined: this.ignoreUndefined
        });
        // Add query document
        buffers.push(query);
        if (this.returnFieldSelector && Object.keys(this.returnFieldSelector).length > 0) {
            // Serialize the projection document
            projection = BSON.serialize(this.returnFieldSelector, {
                checkKeys: this.checkKeys,
                serializeFunctions: this.serializeFunctions,
                ignoreUndefined: this.ignoreUndefined
            });
            // Add projection document
            buffers.push(projection);
        }
        // Total message size
        const totalLength = header.length + query.length + (projection ? projection.length : 0);
        // Set up the index
        let index = 4;
        // Write total document length
        header[3] = (totalLength >> 24) & 0xff;
        header[2] = (totalLength >> 16) & 0xff;
        header[1] = (totalLength >> 8) & 0xff;
        header[0] = totalLength & 0xff;
        // Write header information requestId
        header[index + 3] = (this.requestId >> 24) & 0xff;
        header[index + 2] = (this.requestId >> 16) & 0xff;
        header[index + 1] = (this.requestId >> 8) & 0xff;
        header[index] = this.requestId & 0xff;
        index = index + 4;
        // Write header information responseTo
        header[index + 3] = (0 >> 24) & 0xff;
        header[index + 2] = (0 >> 16) & 0xff;
        header[index + 1] = (0 >> 8) & 0xff;
        header[index] = 0 & 0xff;
        index = index + 4;
        // Write header information OP_QUERY
        header[index + 3] = (constants_1.OP_QUERY >> 24) & 0xff;
        header[index + 2] = (constants_1.OP_QUERY >> 16) & 0xff;
        header[index + 1] = (constants_1.OP_QUERY >> 8) & 0xff;
        header[index] = constants_1.OP_QUERY & 0xff;
        index = index + 4;
        // Write header information flags
        header[index + 3] = (flags >> 24) & 0xff;
        header[index + 2] = (flags >> 16) & 0xff;
        header[index + 1] = (flags >> 8) & 0xff;
        header[index] = flags & 0xff;
        index = index + 4;
        // Write collection name
        index = index + header.write(this.ns, index, 'utf8') + 1;
        header[index - 1] = 0;
        // Write header information flags numberToSkip
        header[index + 3] = (this.numberToSkip >> 24) & 0xff;
        header[index + 2] = (this.numberToSkip >> 16) & 0xff;
        header[index + 1] = (this.numberToSkip >> 8) & 0xff;
        header[index] = this.numberToSkip & 0xff;
        index = index + 4;
        // Write header information flags numberToReturn
        header[index + 3] = (this.numberToReturn >> 24) & 0xff;
        header[index + 2] = (this.numberToReturn >> 16) & 0xff;
        header[index + 1] = (this.numberToReturn >> 8) & 0xff;
        header[index] = this.numberToReturn & 0xff;
        index = index + 4;
        // Return the buffers
        return buffers;
    }
}
exports.Query = Query;
/**************************************************************
 * GETMORE
 **************************************************************/
/** @internal */
class GetMore {
    constructor(ns, cursorId, opts = {}) {
        this.numberToReturn = opts.numberToReturn || 0;
        this.requestId = _requestId++;
        this.ns = ns;
        this.cursorId = cursorId;
    }
    // Uses a single allocated buffer for the process, avoiding multiple memory allocations
    toBin() {
        const length = 4 + Buffer.byteLength(this.ns) + 1 + 4 + 8 + 4 * 4;
        // Create command buffer
        let index = 0;
        // Allocate buffer
        const _buffer = Buffer.alloc(length);
        // Write header information
        // index = write32bit(index, _buffer, length);
        _buffer[index + 3] = (length >> 24) & 0xff;
        _buffer[index + 2] = (length >> 16) & 0xff;
        _buffer[index + 1] = (length >> 8) & 0xff;
        _buffer[index] = length & 0xff;
        index = index + 4;
        // index = write32bit(index, _buffer, requestId);
        _buffer[index + 3] = (this.requestId >> 24) & 0xff;
        _buffer[index + 2] = (this.requestId >> 16) & 0xff;
        _buffer[index + 1] = (this.requestId >> 8) & 0xff;
        _buffer[index] = this.requestId & 0xff;
        index = index + 4;
        // index = write32bit(index, _buffer, 0);
        _buffer[index + 3] = (0 >> 24) & 0xff;
        _buffer[index + 2] = (0 >> 16) & 0xff;
        _buffer[index + 1] = (0 >> 8) & 0xff;
        _buffer[index] = 0 & 0xff;
        index = index + 4;
        // index = write32bit(index, _buffer, OP_GETMORE);
        _buffer[index + 3] = (constants_1.OP_GETMORE >> 24) & 0xff;
        _buffer[index + 2] = (constants_1.OP_GETMORE >> 16) & 0xff;
        _buffer[index + 1] = (constants_1.OP_GETMORE >> 8) & 0xff;
        _buffer[index] = constants_1.OP_GETMORE & 0xff;
        index = index + 4;
        // index = write32bit(index, _buffer, 0);
        _buffer[index + 3] = (0 >> 24) & 0xff;
        _buffer[index + 2] = (0 >> 16) & 0xff;
        _buffer[index + 1] = (0 >> 8) & 0xff;
        _buffer[index] = 0 & 0xff;
        index = index + 4;
        // Write collection name
        index = index + _buffer.write(this.ns, index, 'utf8') + 1;
        _buffer[index - 1] = 0;
        // Write batch size
        // index = write32bit(index, _buffer, numberToReturn);
        _buffer[index + 3] = (this.numberToReturn >> 24) & 0xff;
        _buffer[index + 2] = (this.numberToReturn >> 16) & 0xff;
        _buffer[index + 1] = (this.numberToReturn >> 8) & 0xff;
        _buffer[index] = this.numberToReturn & 0xff;
        index = index + 4;
        // Write cursor id
        // index = write32bit(index, _buffer, cursorId.getLowBits());
        _buffer[index + 3] = (this.cursorId.getLowBits() >> 24) & 0xff;
        _buffer[index + 2] = (this.cursorId.getLowBits() >> 16) & 0xff;
        _buffer[index + 1] = (this.cursorId.getLowBits() >> 8) & 0xff;
        _buffer[index] = this.cursorId.getLowBits() & 0xff;
        index = index + 4;
        // index = write32bit(index, _buffer, cursorId.getHighBits());
        _buffer[index + 3] = (this.cursorId.getHighBits() >> 24) & 0xff;
        _buffer[index + 2] = (this.cursorId.getHighBits() >> 16) & 0xff;
        _buffer[index + 1] = (this.cursorId.getHighBits() >> 8) & 0xff;
        _buffer[index] = this.cursorId.getHighBits() & 0xff;
        index = index + 4;
        // Return buffer
        return [_buffer];
    }
}
exports.GetMore = GetMore;
/**************************************************************
 * KILLCURSOR
 **************************************************************/
/** @internal */
class KillCursor {
    constructor(ns, cursorIds) {
        this.ns = ns;
        this.requestId = _requestId++;
        this.cursorIds = cursorIds;
    }
    // Uses a single allocated buffer for the process, avoiding multiple memory allocations
    toBin() {
        const length = 4 + 4 + 4 * 4 + this.cursorIds.length * 8;
        // Create command buffer
        let index = 0;
        const _buffer = Buffer.alloc(length);
        // Write header information
        // index = write32bit(index, _buffer, length);
        _buffer[index + 3] = (length >> 24) & 0xff;
        _buffer[index + 2] = (length >> 16) & 0xff;
        _buffer[index + 1] = (length >> 8) & 0xff;
        _buffer[index] = length & 0xff;
        index = index + 4;
        // index = write32bit(index, _buffer, requestId);
        _buffer[index + 3] = (this.requestId >> 24) & 0xff;
        _buffer[index + 2] = (this.requestId >> 16) & 0xff;
        _buffer[index + 1] = (this.requestId >> 8) & 0xff;
        _buffer[index] = this.requestId & 0xff;
        index = index + 4;
        // index = write32bit(index, _buffer, 0);
        _buffer[index + 3] = (0 >> 24) & 0xff;
        _buffer[index + 2] = (0 >> 16) & 0xff;
        _buffer[index + 1] = (0 >> 8) & 0xff;
        _buffer[index] = 0 & 0xff;
        index = index + 4;
        // index = write32bit(index, _buffer, OP_KILL_CURSORS);
        _buffer[index + 3] = (constants_1.OP_KILL_CURSORS >> 24) & 0xff;
        _buffer[index + 2] = (constants_1.OP_KILL_CURSORS >> 16) & 0xff;
        _buffer[index + 1] = (constants_1.OP_KILL_CURSORS >> 8) & 0xff;
        _buffer[index] = constants_1.OP_KILL_CURSORS & 0xff;
        index = index + 4;
        // index = write32bit(index, _buffer, 0);
        _buffer[index + 3] = (0 >> 24) & 0xff;
        _buffer[index + 2] = (0 >> 16) & 0xff;
        _buffer[index + 1] = (0 >> 8) & 0xff;
        _buffer[index] = 0 & 0xff;
        index = index + 4;
        // Write batch size
        // index = write32bit(index, _buffer, this.cursorIds.length);
        _buffer[index + 3] = (this.cursorIds.length >> 24) & 0xff;
        _buffer[index + 2] = (this.cursorIds.length >> 16) & 0xff;
        _buffer[index + 1] = (this.cursorIds.length >> 8) & 0xff;
        _buffer[index] = this.cursorIds.length & 0xff;
        index = index + 4;
        // Write all the cursor ids into the array
        for (let i = 0; i < this.cursorIds.length; i++) {
            // Write cursor id
            // index = write32bit(index, _buffer, cursorIds[i].getLowBits());
            _buffer[index + 3] = (this.cursorIds[i].getLowBits() >> 24) & 0xff;
            _buffer[index + 2] = (this.cursorIds[i].getLowBits() >> 16) & 0xff;
            _buffer[index + 1] = (this.cursorIds[i].getLowBits() >> 8) & 0xff;
            _buffer[index] = this.cursorIds[i].getLowBits() & 0xff;
            index = index + 4;
            // index = write32bit(index, _buffer, cursorIds[i].getHighBits());
            _buffer[index + 3] = (this.cursorIds[i].getHighBits() >> 24) & 0xff;
            _buffer[index + 2] = (this.cursorIds[i].getHighBits() >> 16) & 0xff;
            _buffer[index + 1] = (this.cursorIds[i].getHighBits() >> 8) & 0xff;
            _buffer[index] = this.cursorIds[i].getHighBits() & 0xff;
            index = index + 4;
        }
        // Return buffer
        return [_buffer];
    }
}
exports.KillCursor = KillCursor;
/** @internal */
class Response {
    constructor(message, msgHeader, msgBody, opts) {
        this.parsed = false;
        this.raw = message;
        this.data = msgBody;
        this.opts = opts !== null && opts !== void 0 ? opts : {
            promoteLongs: true,
            promoteValues: true,
            promoteBuffers: false,
            bsonRegExp: false
        };
        // Read the message header
        this.length = msgHeader.length;
        this.requestId = msgHeader.requestId;
        this.responseTo = msgHeader.responseTo;
        this.opCode = msgHeader.opCode;
        this.fromCompressed = msgHeader.fromCompressed;
        // Read the message body
        this.responseFlags = msgBody.readInt32LE(0);
        this.cursorId = new BSON.Long(msgBody.readInt32LE(4), msgBody.readInt32LE(8));
        this.startingFrom = msgBody.readInt32LE(12);
        this.numberReturned = msgBody.readInt32LE(16);
        // Preallocate document array
        this.documents = new Array(this.numberReturned);
        // Flag values
        this.cursorNotFound = (this.responseFlags & CURSOR_NOT_FOUND) !== 0;
        this.queryFailure = (this.responseFlags & QUERY_FAILURE) !== 0;
        this.shardConfigStale = (this.responseFlags & SHARD_CONFIG_STALE) !== 0;
        this.awaitCapable = (this.responseFlags & AWAIT_CAPABLE) !== 0;
        this.promoteLongs = typeof this.opts.promoteLongs === 'boolean' ? this.opts.promoteLongs : true;
        this.promoteValues =
            typeof this.opts.promoteValues === 'boolean' ? this.opts.promoteValues : true;
        this.promoteBuffers =
            typeof this.opts.promoteBuffers === 'boolean' ? this.opts.promoteBuffers : false;
        this.bsonRegExp = typeof this.opts.bsonRegExp === 'boolean' ? this.opts.bsonRegExp : false;
    }
    isParsed() {
        return this.parsed;
    }
    parse(options) {
        var _a, _b, _c, _d;
        // Don't parse again if not needed
        if (this.parsed)
            return;
        options = options !== null && options !== void 0 ? options : {};
        // Allow the return of raw documents instead of parsing
        const raw = options.raw || false;
        const documentsReturnedIn = options.documentsReturnedIn || null;
        const promoteLongs = (_a = options.promoteLongs) !== null && _a !== void 0 ? _a : this.opts.promoteLongs;
        const promoteValues = (_b = options.promoteValues) !== null && _b !== void 0 ? _b : this.opts.promoteValues;
        const promoteBuffers = (_c = options.promoteBuffers) !== null && _c !== void 0 ? _c : this.opts.promoteBuffers;
        const bsonRegExp = (_d = options.bsonRegExp) !== null && _d !== void 0 ? _d : this.opts.bsonRegExp;
        let bsonSize;
        // Set up the options
        const _options = {
            promoteLongs,
            promoteValues,
            promoteBuffers,
            bsonRegExp
        };
        // Position within OP_REPLY at which documents start
        // (See https://docs.mongodb.com/manual/reference/mongodb-wire-protocol/#wire-op-reply)
        this.index = 20;
        // Parse Body
        for (let i = 0; i < this.numberReturned; i++) {
            bsonSize =
                this.data[this.index] |
                    (this.data[this.index + 1] << 8) |
                    (this.data[this.index + 2] << 16) |
                    (this.data[this.index + 3] << 24);
            // If we have raw results specified slice the return document
            if (raw) {
                this.documents[i] = this.data.slice(this.index, this.index + bsonSize);
            }
            else {
                this.documents[i] = BSON.deserialize(this.data.slice(this.index, this.index + bsonSize), _options);
            }
            // Adjust the index
            this.index = this.index + bsonSize;
        }
        if (this.documents.length === 1 && documentsReturnedIn != null && raw) {
            const fieldsAsRaw = {};
            fieldsAsRaw[documentsReturnedIn] = true;
            _options.fieldsAsRaw = fieldsAsRaw;
            const doc = BSON.deserialize(this.documents[0], _options);
            this.documents = [doc];
        }
        // Set parsed
        this.parsed = true;
    }
}
exports.Response = Response;
// Implementation of OP_MSG spec:
// https://github.com/mongodb/specifications/blob/master/source/message/OP_MSG.rst
//
// struct Section {
//   uint8 payloadType;
//   union payload {
//       document  document; // payloadType == 0
//       struct sequence { // payloadType == 1
//           int32      size;
//           cstring    identifier;
//           document*  documents;
//       };
//   };
// };
// struct OP_MSG {
//   struct MsgHeader {
//       int32  messageLength;
//       int32  requestID;
//       int32  responseTo;
//       int32  opCode = 2013;
//   };
//   uint32      flagBits;
//   Section+    sections;
//   [uint32     checksum;]
// };
// Msg Flags
const OPTS_CHECKSUM_PRESENT = 1;
const OPTS_MORE_TO_COME = 2;
const OPTS_EXHAUST_ALLOWED = 1 << 16;
/** @internal */
class Msg {
    constructor(ns, command, options) {
        // Basic options needed to be passed in
        if (command == null)
            throw new error_1.MongoInvalidArgumentError('Query document must be specified for query');
        // Basic options
        this.ns = ns;
        this.command = command;
        this.command.$db = (0, utils_1.databaseNamespace)(ns);
        if (options.readPreference && options.readPreference.mode !== read_preference_1.ReadPreference.PRIMARY) {
            this.command.$readPreference = options.readPreference.toJSON();
        }
        // Ensure empty options
        this.options = options !== null && options !== void 0 ? options : {};
        // Additional options
        this.requestId = options.requestId ? options.requestId : Msg.getRequestId();
        // Serialization option
        this.serializeFunctions =
            typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
        this.ignoreUndefined =
            typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : false;
        this.checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
        this.maxBsonSize = options.maxBsonSize || 1024 * 1024 * 16;
        // flags
        this.checksumPresent = false;
        this.moreToCome = options.moreToCome || false;
        this.exhaustAllowed =
            typeof options.exhaustAllowed === 'boolean' ? options.exhaustAllowed : false;
    }
    toBin() {
        const buffers = [];
        let flags = 0;
        if (this.checksumPresent) {
            flags |= OPTS_CHECKSUM_PRESENT;
        }
        if (this.moreToCome) {
            flags |= OPTS_MORE_TO_COME;
        }
        if (this.exhaustAllowed) {
            flags |= OPTS_EXHAUST_ALLOWED;
        }
        const header = Buffer.alloc(4 * 4 + // Header
            4 // Flags
        );
        buffers.push(header);
        let totalLength = header.length;
        const command = this.command;
        totalLength += this.makeDocumentSegment(buffers, command);
        header.writeInt32LE(totalLength, 0); // messageLength
        header.writeInt32LE(this.requestId, 4); // requestID
        header.writeInt32LE(0, 8); // responseTo
        header.writeInt32LE(constants_1.OP_MSG, 12); // opCode
        header.writeUInt32LE(flags, 16); // flags
        return buffers;
    }
    makeDocumentSegment(buffers, document) {
        const payloadTypeBuffer = Buffer.alloc(1);
        payloadTypeBuffer[0] = 0;
        const documentBuffer = this.serializeBson(document);
        buffers.push(payloadTypeBuffer);
        buffers.push(documentBuffer);
        return payloadTypeBuffer.length + documentBuffer.length;
    }
    serializeBson(document) {
        return BSON.serialize(document, {
            checkKeys: this.checkKeys,
            serializeFunctions: this.serializeFunctions,
            ignoreUndefined: this.ignoreUndefined
        });
    }
    static getRequestId() {
        _requestId = (_requestId + 1) & 0x7fffffff;
        return _requestId;
    }
}
exports.Msg = Msg;
/** @internal */
class BinMsg {
    constructor(message, msgHeader, msgBody, opts) {
        this.parsed = false;
        this.raw = message;
        this.data = msgBody;
        this.opts = opts !== null && opts !== void 0 ? opts : {
            promoteLongs: true,
            promoteValues: true,
            promoteBuffers: false,
            bsonRegExp: false
        };
        // Read the message header
        this.length = msgHeader.length;
        this.requestId = msgHeader.requestId;
        this.responseTo = msgHeader.responseTo;
        this.opCode = msgHeader.opCode;
        this.fromCompressed = msgHeader.fromCompressed;
        // Read response flags
        this.responseFlags = msgBody.readInt32LE(0);
        this.checksumPresent = (this.responseFlags & OPTS_CHECKSUM_PRESENT) !== 0;
        this.moreToCome = (this.responseFlags & OPTS_MORE_TO_COME) !== 0;
        this.exhaustAllowed = (this.responseFlags & OPTS_EXHAUST_ALLOWED) !== 0;
        this.promoteLongs = typeof this.opts.promoteLongs === 'boolean' ? this.opts.promoteLongs : true;
        this.promoteValues =
            typeof this.opts.promoteValues === 'boolean' ? this.opts.promoteValues : true;
        this.promoteBuffers =
            typeof this.opts.promoteBuffers === 'boolean' ? this.opts.promoteBuffers : false;
        this.bsonRegExp = typeof this.opts.bsonRegExp === 'boolean' ? this.opts.bsonRegExp : false;
        this.documents = [];
    }
    isParsed() {
        return this.parsed;
    }
    parse(options) {
        var _a, _b, _c, _d, _e;
        // Don't parse again if not needed
        if (this.parsed)
            return;
        options = options !== null && options !== void 0 ? options : {};
        this.index = 4;
        // Allow the return of raw documents instead of parsing
        const raw = options.raw || false;
        const documentsReturnedIn = options.documentsReturnedIn || null;
        const promoteLongs = (_a = options.promoteLongs) !== null && _a !== void 0 ? _a : this.opts.promoteLongs;
        const promoteValues = (_b = options.promoteValues) !== null && _b !== void 0 ? _b : this.opts.promoteValues;
        const promoteBuffers = (_c = options.promoteBuffers) !== null && _c !== void 0 ? _c : this.opts.promoteBuffers;
        const bsonRegExp = (_d = options.bsonRegExp) !== null && _d !== void 0 ? _d : this.opts.bsonRegExp;
        const validation = (_e = options.validation) !== null && _e !== void 0 ? _e : { utf8: { writeErrors: false } };
        // Set up the options
        const bsonOptions = {
            promoteLongs,
            promoteValues,
            promoteBuffers,
            bsonRegExp,
            validation
            // Due to the strictness of the BSON libraries validation option we need this cast
        };
        while (this.index < this.data.length) {
            const payloadType = this.data.readUInt8(this.index++);
            if (payloadType === 0) {
                const bsonSize = this.data.readUInt32LE(this.index);
                const bin = this.data.slice(this.index, this.index + bsonSize);
                this.documents.push(raw ? bin : BSON.deserialize(bin, bsonOptions));
                this.index += bsonSize;
            }
            else if (payloadType === 1) {
                // It was decided that no driver makes use of payload type 1
                // TODO(NODE-3483): Replace with MongoDeprecationError
                throw new error_1.MongoRuntimeError('OP_MSG Payload Type 1 detected unsupported protocol');
            }
        }
        if (this.documents.length === 1 && documentsReturnedIn != null && raw) {
            const fieldsAsRaw = {};
            fieldsAsRaw[documentsReturnedIn] = true;
            bsonOptions.fieldsAsRaw = fieldsAsRaw;
            const doc = BSON.deserialize(this.documents[0], bsonOptions);
            this.documents = [doc];
        }
        this.parsed = true;
    }
}
exports.BinMsg = BinMsg;
//# sourceMappingURL=commands.js.map
}, function(modId) { var map = {"../read_preference":1647755346519,"../utils":1647755346512,"./wire_protocol/constants":1647755346520,"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346541, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.decompress = exports.compress = exports.uncompressibleCommands = exports.Compressor = void 0;
const zlib = require("zlib");
const deps_1 = require("../../deps");
const error_1 = require("../../error");
/** @public */
exports.Compressor = Object.freeze({
    none: 0,
    snappy: 1,
    zlib: 2
});
exports.uncompressibleCommands = new Set([
    'ismaster',
    'saslStart',
    'saslContinue',
    'getnonce',
    'authenticate',
    'createUser',
    'updateUser',
    'copydbSaslStart',
    'copydbgetnonce',
    'copydb'
]);
// Facilitate compressing a message using an agreed compressor
function compress(self, dataToBeCompressed, callback) {
    const zlibOptions = {};
    switch (self.options.agreedCompressor) {
        case 'snappy': {
            if ('kModuleError' in deps_1.Snappy) {
                return callback(deps_1.Snappy['kModuleError']);
            }
            if (deps_1.Snappy[deps_1.PKG_VERSION].major <= 6) {
                deps_1.Snappy.compress(dataToBeCompressed, callback);
            }
            else {
                deps_1.Snappy.compress(dataToBeCompressed)
                    .then(buffer => callback(undefined, buffer))
                    .catch(error => callback(error));
            }
            break;
        }
        case 'zlib':
            // Determine zlibCompressionLevel
            if (self.options.zlibCompressionLevel) {
                zlibOptions.level = self.options.zlibCompressionLevel;
            }
            zlib.deflate(dataToBeCompressed, zlibOptions, callback);
            break;
        default:
            throw new error_1.MongoInvalidArgumentError(`Unknown compressor ${self.options.agreedCompressor} failed to compress`);
    }
}
exports.compress = compress;
// Decompress a message using the given compressor
function decompress(compressorID, compressedData, callback) {
    if (compressorID < 0 || compressorID > Math.max(2)) {
        throw new error_1.MongoDecompressionError(`Server sent message compressed using an unsupported compressor. (Received compressor ID ${compressorID})`);
    }
    switch (compressorID) {
        case exports.Compressor.snappy: {
            if ('kModuleError' in deps_1.Snappy) {
                return callback(deps_1.Snappy['kModuleError']);
            }
            if (deps_1.Snappy[deps_1.PKG_VERSION].major <= 6) {
                deps_1.Snappy.uncompress(compressedData, { asBuffer: true }, callback);
            }
            else {
                deps_1.Snappy.uncompress(compressedData, { asBuffer: true })
                    .then(buffer => callback(undefined, buffer))
                    .catch(error => callback(error));
            }
            break;
        }
        case exports.Compressor.zlib:
            zlib.inflate(compressedData, callback);
            break;
        default:
            callback(undefined, compressedData);
    }
}
exports.decompress = decompress;
//# sourceMappingURL=compression.js.map
}, function(modId) { var map = {"../../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346543, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamDescription = void 0;
const server_description_1 = require("../sdam/server_description");
const common_1 = require("../sdam/common");
const RESPONSE_FIELDS = [
    'minWireVersion',
    'maxWireVersion',
    'maxBsonObjectSize',
    'maxMessageSizeBytes',
    'maxWriteBatchSize',
    'logicalSessionTimeoutMinutes'
];
/** @public */
class StreamDescription {
    constructor(address, options) {
        this.address = address;
        this.type = common_1.ServerType.Unknown;
        this.minWireVersion = undefined;
        this.maxWireVersion = undefined;
        this.maxBsonObjectSize = 16777216;
        this.maxMessageSizeBytes = 48000000;
        this.maxWriteBatchSize = 100000;
        this.logicalSessionTimeoutMinutes = options === null || options === void 0 ? void 0 : options.logicalSessionTimeoutMinutes;
        this.loadBalanced = !!(options === null || options === void 0 ? void 0 : options.loadBalanced);
        this.compressors =
            options && options.compressors && Array.isArray(options.compressors)
                ? options.compressors
                : [];
    }
    receiveResponse(response) {
        this.type = (0, server_description_1.parseServerType)(response);
        for (const field of RESPONSE_FIELDS) {
            if (response[field] != null) {
                this[field] = response[field];
            }
            // testing case
            if ('__nodejs_mock_server__' in response) {
                this.__nodejs_mock_server__ = response['__nodejs_mock_server__'];
            }
        }
        if (response.compression) {
            this.compressor = this.compressors.filter(c => { var _a; return (_a = response.compression) === null || _a === void 0 ? void 0 : _a.includes(c); })[0];
        }
    }
}
exports.StreamDescription = StreamDescription;
//# sourceMappingURL=stream_description.js.map
}, function(modId) { var map = {"../sdam/server_description":1647755346528,"../sdam/common":1647755346516}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346544, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandFailedEvent = exports.CommandSucceededEvent = exports.CommandStartedEvent = void 0;
const commands_1 = require("./commands");
const utils_1 = require("../utils");
/**
 * An event indicating the start of a given
 * @public
 * @category Event
 */
class CommandStartedEvent {
    /**
     * Create a started event
     *
     * @internal
     * @param pool - the pool that originated the command
     * @param command - the command
     */
    constructor(connection, command) {
        const cmd = extractCommand(command);
        const commandName = extractCommandName(cmd);
        const { address, connectionId, serviceId } = extractConnectionDetails(connection);
        // TODO: remove in major revision, this is not spec behavior
        if (SENSITIVE_COMMANDS.has(commandName)) {
            this.commandObj = {};
            this.commandObj[commandName] = true;
        }
        this.address = address;
        this.connectionId = connectionId;
        this.serviceId = serviceId;
        this.requestId = command.requestId;
        this.databaseName = databaseName(command);
        this.commandName = commandName;
        this.command = maybeRedact(commandName, cmd, cmd);
    }
    /* @internal */
    get hasServiceId() {
        return !!this.serviceId;
    }
}
exports.CommandStartedEvent = CommandStartedEvent;
/**
 * An event indicating the success of a given command
 * @public
 * @category Event
 */
class CommandSucceededEvent {
    /**
     * Create a succeeded event
     *
     * @internal
     * @param pool - the pool that originated the command
     * @param command - the command
     * @param reply - the reply for this command from the server
     * @param started - a high resolution tuple timestamp of when the command was first sent, to calculate duration
     */
    constructor(connection, command, reply, started) {
        const cmd = extractCommand(command);
        const commandName = extractCommandName(cmd);
        const { address, connectionId, serviceId } = extractConnectionDetails(connection);
        this.address = address;
        this.connectionId = connectionId;
        this.serviceId = serviceId;
        this.requestId = command.requestId;
        this.commandName = commandName;
        this.duration = (0, utils_1.calculateDurationInMs)(started);
        this.reply = maybeRedact(commandName, cmd, extractReply(command, reply));
    }
    /* @internal */
    get hasServiceId() {
        return !!this.serviceId;
    }
}
exports.CommandSucceededEvent = CommandSucceededEvent;
/**
 * An event indicating the failure of a given command
 * @public
 * @category Event
 */
class CommandFailedEvent {
    /**
     * Create a failure event
     *
     * @internal
     * @param pool - the pool that originated the command
     * @param command - the command
     * @param error - the generated error or a server error response
     * @param started - a high resolution tuple timestamp of when the command was first sent, to calculate duration
     */
    constructor(connection, command, error, started) {
        const cmd = extractCommand(command);
        const commandName = extractCommandName(cmd);
        const { address, connectionId, serviceId } = extractConnectionDetails(connection);
        this.address = address;
        this.connectionId = connectionId;
        this.serviceId = serviceId;
        this.requestId = command.requestId;
        this.commandName = commandName;
        this.duration = (0, utils_1.calculateDurationInMs)(started);
        this.failure = maybeRedact(commandName, cmd, error);
    }
    /* @internal */
    get hasServiceId() {
        return !!this.serviceId;
    }
}
exports.CommandFailedEvent = CommandFailedEvent;
/** Commands that we want to redact because of the sensitive nature of their contents */
const SENSITIVE_COMMANDS = new Set([
    'authenticate',
    'saslStart',
    'saslContinue',
    'getnonce',
    'createUser',
    'updateUser',
    'copydbgetnonce',
    'copydbsaslstart',
    'copydb'
]);
const HELLO_COMMANDS = new Set(['hello', 'ismaster', 'isMaster']);
// helper methods
const extractCommandName = (commandDoc) => Object.keys(commandDoc)[0];
const namespace = (command) => command.ns;
const databaseName = (command) => command.ns.split('.')[0];
const collectionName = (command) => command.ns.split('.')[1];
const maybeRedact = (commandName, commandDoc, result) => SENSITIVE_COMMANDS.has(commandName) ||
    (HELLO_COMMANDS.has(commandName) && commandDoc.speculativeAuthenticate)
    ? {}
    : result;
const LEGACY_FIND_QUERY_MAP = {
    $query: 'filter',
    $orderby: 'sort',
    $hint: 'hint',
    $comment: 'comment',
    $maxScan: 'maxScan',
    $max: 'max',
    $min: 'min',
    $returnKey: 'returnKey',
    $showDiskLoc: 'showRecordId',
    $maxTimeMS: 'maxTimeMS',
    $snapshot: 'snapshot'
};
const LEGACY_FIND_OPTIONS_MAP = {
    numberToSkip: 'skip',
    numberToReturn: 'batchSize',
    returnFieldSelector: 'projection'
};
const OP_QUERY_KEYS = [
    'tailable',
    'oplogReplay',
    'noCursorTimeout',
    'awaitData',
    'partial',
    'exhaust'
];
/** Extract the actual command from the query, possibly up-converting if it's a legacy format */
function extractCommand(command) {
    var _a;
    if (command instanceof commands_1.GetMore) {
        return {
            getMore: (0, utils_1.deepCopy)(command.cursorId),
            collection: collectionName(command),
            batchSize: command.numberToReturn
        };
    }
    if (command instanceof commands_1.KillCursor) {
        return {
            killCursors: collectionName(command),
            cursors: (0, utils_1.deepCopy)(command.cursorIds)
        };
    }
    if (command instanceof commands_1.Msg) {
        return (0, utils_1.deepCopy)(command.command);
    }
    if ((_a = command.query) === null || _a === void 0 ? void 0 : _a.$query) {
        let result;
        if (command.ns === 'admin.$cmd') {
            // up-convert legacy command
            result = Object.assign({}, command.query.$query);
        }
        else {
            // up-convert legacy find command
            result = { find: collectionName(command) };
            Object.keys(LEGACY_FIND_QUERY_MAP).forEach(key => {
                if (command.query[key] != null) {
                    result[LEGACY_FIND_QUERY_MAP[key]] = (0, utils_1.deepCopy)(command.query[key]);
                }
            });
        }
        Object.keys(LEGACY_FIND_OPTIONS_MAP).forEach(key => {
            const legacyKey = key;
            if (command[legacyKey] != null) {
                result[LEGACY_FIND_OPTIONS_MAP[legacyKey]] = (0, utils_1.deepCopy)(command[legacyKey]);
            }
        });
        OP_QUERY_KEYS.forEach(key => {
            const opKey = key;
            if (command[opKey]) {
                result[opKey] = command[opKey];
            }
        });
        if (command.pre32Limit != null) {
            result.limit = command.pre32Limit;
        }
        if (command.query.$explain) {
            return { explain: result };
        }
        return result;
    }
    const clonedQuery = {};
    const clonedCommand = {};
    if (command.query) {
        for (const k in command.query) {
            clonedQuery[k] = (0, utils_1.deepCopy)(command.query[k]);
        }
        clonedCommand.query = clonedQuery;
    }
    for (const k in command) {
        if (k === 'query')
            continue;
        clonedCommand[k] = (0, utils_1.deepCopy)(command[k]);
    }
    return command.query ? clonedQuery : clonedCommand;
}
function extractReply(command, reply) {
    if (command instanceof commands_1.KillCursor) {
        return {
            ok: 1,
            cursorsUnknown: command.cursorIds
        };
    }
    if (!reply) {
        return reply;
    }
    if (command instanceof commands_1.GetMore) {
        return {
            ok: 1,
            cursor: {
                id: (0, utils_1.deepCopy)(reply.cursorId),
                ns: namespace(command),
                nextBatch: (0, utils_1.deepCopy)(reply.documents)
            }
        };
    }
    if (command instanceof commands_1.Msg) {
        return (0, utils_1.deepCopy)(reply.result ? reply.result : reply);
    }
    // is this a legacy find command?
    if (command.query && command.query.$query != null) {
        return {
            ok: 1,
            cursor: {
                id: (0, utils_1.deepCopy)(reply.cursorId),
                ns: namespace(command),
                firstBatch: (0, utils_1.deepCopy)(reply.documents)
            }
        };
    }
    return (0, utils_1.deepCopy)(reply.result ? reply.result : reply);
}
function extractConnectionDetails(connection) {
    let connectionId;
    if ('id' in connection) {
        connectionId = connection.id;
    }
    return {
        address: connection.address,
        serviceId: connection.serviceId,
        connectionId
    };
}
//# sourceMappingURL=command_monitoring_events.js.map
}, function(modId) { var map = {"./commands":1647755346539,"../utils":1647755346512}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346546, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CancellationToken = exports.TypedEventEmitter = exports.BSONType = void 0;
const events_1 = require("events");
/** @public */
exports.BSONType = Object.freeze({
    double: 1,
    string: 2,
    object: 3,
    array: 4,
    binData: 5,
    undefined: 6,
    objectId: 7,
    bool: 8,
    date: 9,
    null: 10,
    regex: 11,
    dbPointer: 12,
    javascript: 13,
    symbol: 14,
    javascriptWithScope: 15,
    int: 16,
    timestamp: 17,
    long: 18,
    decimal: 19,
    minKey: -1,
    maxKey: 127
});
/**
 * Typescript type safe event emitter
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class TypedEventEmitter extends events_1.EventEmitter {
}
exports.TypedEventEmitter = TypedEventEmitter;
/** @public */
class CancellationToken extends TypedEventEmitter {
}
exports.CancellationToken = CancellationToken;
//# sourceMappingURL=mongo_types.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346547, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionPoolMetrics = void 0;
/** @internal */
class ConnectionPoolMetrics {
    constructor() {
        this.txnConnections = 0;
        this.cursorConnections = 0;
        this.otherConnections = 0;
    }
    /**
     * Mark a connection as pinned for a specific operation.
     */
    markPinned(pinType) {
        if (pinType === ConnectionPoolMetrics.TXN) {
            this.txnConnections += 1;
        }
        else if (pinType === ConnectionPoolMetrics.CURSOR) {
            this.cursorConnections += 1;
        }
        else {
            this.otherConnections += 1;
        }
    }
    /**
     * Unmark a connection as pinned for an operation.
     */
    markUnpinned(pinType) {
        if (pinType === ConnectionPoolMetrics.TXN) {
            this.txnConnections -= 1;
        }
        else if (pinType === ConnectionPoolMetrics.CURSOR) {
            this.cursorConnections -= 1;
        }
        else {
            this.otherConnections -= 1;
        }
    }
    /**
     * Return information about the cmap metrics as a string.
     */
    info(maxPoolSize) {
        return ('Timed out while checking out a connection from connection pool: ' +
            `maxPoolSize: ${maxPoolSize}, ` +
            `connections in use by cursors: ${this.cursorConnections}, ` +
            `connections in use by transactions: ${this.txnConnections}, ` +
            `connections in use by other operations: ${this.otherConnections}`);
    }
    /**
     * Reset the metrics to the initial values.
     */
    reset() {
        this.txnConnections = 0;
        this.cursorConnections = 0;
        this.otherConnections = 0;
    }
}
exports.ConnectionPoolMetrics = ConnectionPoolMetrics;
ConnectionPoolMetrics.TXN = 'txn';
ConnectionPoolMetrics.CURSOR = 'cursor';
ConnectionPoolMetrics.OTHER = 'other';
//# sourceMappingURL=metrics.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346548, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMoreOperation = void 0;
const error_1 = require("../error");
const operation_1 = require("./operation");
/** @internal */
class GetMoreOperation extends operation_1.AbstractOperation {
    constructor(ns, cursorId, server, options = {}) {
        super(options);
        this.options = options;
        this.ns = ns;
        this.cursorId = cursorId;
        this.server = server;
    }
    /**
     * Although there is a server already associated with the get more operation, the signature
     * for execute passes a server so we will just use that one.
     */
    execute(server, session, callback) {
        if (server !== this.server) {
            return callback(new error_1.MongoRuntimeError('Getmore must run on the same server operation began on'));
        }
        server.getMore(this.ns, this.cursorId, this.options, callback);
    }
}
exports.GetMoreOperation = GetMoreOperation;
(0, operation_1.defineAspects)(GetMoreOperation, [operation_1.Aspect.READ_OPERATION, operation_1.Aspect.CURSOR_ITERATING]);
//# sourceMappingURL=get_more.js.map
}, function(modId) { var map = {"../error":1647755346514,"./operation":1647755346531}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346549, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregationCursor = void 0;
const aggregate_1 = require("../operations/aggregate");
const abstract_cursor_1 = require("./abstract_cursor");
const execute_operation_1 = require("../operations/execute_operation");
const utils_1 = require("../utils");
/** @internal */
const kPipeline = Symbol('pipeline');
/** @internal */
const kOptions = Symbol('options');
/**
 * The **AggregationCursor** class is an internal class that embodies an aggregation cursor on MongoDB
 * allowing for iteration over the results returned from the underlying query. It supports
 * one by one document iteration, conversion to an array or can be iterated as a Node 4.X
 * or higher stream
 * @public
 */
class AggregationCursor extends abstract_cursor_1.AbstractCursor {
    /** @internal */
    constructor(topology, namespace, pipeline = [], options = {}) {
        super(topology, namespace, options);
        this[kPipeline] = pipeline;
        this[kOptions] = options;
    }
    get pipeline() {
        return this[kPipeline];
    }
    clone() {
        const clonedOptions = (0, utils_1.mergeOptions)({}, this[kOptions]);
        delete clonedOptions.session;
        return new AggregationCursor(this.topology, this.namespace, this[kPipeline], {
            ...clonedOptions
        });
    }
    map(transform) {
        return super.map(transform);
    }
    /** @internal */
    _initialize(session, callback) {
        const aggregateOperation = new aggregate_1.AggregateOperation(this.namespace, this[kPipeline], {
            ...this[kOptions],
            ...this.cursorOptions,
            session
        });
        (0, execute_operation_1.executeOperation)(this.topology, aggregateOperation, (err, response) => {
            if (err || response == null)
                return callback(err);
            // TODO: NODE-2882
            callback(undefined, { server: aggregateOperation.server, session, response });
        });
    }
    explain(verbosity, callback) {
        if (typeof verbosity === 'function')
            (callback = verbosity), (verbosity = true);
        if (verbosity == null)
            verbosity = true;
        return (0, execute_operation_1.executeOperation)(this.topology, new aggregate_1.AggregateOperation(this.namespace, this[kPipeline], {
            ...this[kOptions],
            ...this.cursorOptions,
            explain: verbosity
        }), callback);
    }
    group($group) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kPipeline].push({ $group });
        return this;
    }
    /** Add a limit stage to the aggregation pipeline */
    limit($limit) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kPipeline].push({ $limit });
        return this;
    }
    /** Add a match stage to the aggregation pipeline */
    match($match) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kPipeline].push({ $match });
        return this;
    }
    /** Add an out stage to the aggregation pipeline */
    out($out) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kPipeline].push({ $out });
        return this;
    }
    /**
     * Add a project stage to the aggregation pipeline
     *
     * @remarks
     * In order to strictly type this function you must provide an interface
     * that represents the effect of your projection on the result documents.
     *
     * By default chaining a projection to your cursor changes the returned type to the generic {@link Document} type.
     * You should specify a parameterized type to have assertions on your final results.
     *
     * @example
     * ```typescript
     * // Best way
     * const docs: AggregationCursor<{ a: number }> = cursor.project<{ a: number }>({ _id: 0, a: true });
     * // Flexible way
     * const docs: AggregationCursor<Document> = cursor.project({ _id: 0, a: true });
     * ```
     *
     * @remarks
     * In order to strictly type this function you must provide an interface
     * that represents the effect of your projection on the result documents.
     *
     * **Note for Typescript Users:** adding a transform changes the return type of the iteration of this cursor,
     * it **does not** return a new instance of a cursor. This means when calling project,
     * you should always assign the result to a new variable in order to get a correctly typed cursor variable.
     * Take note of the following example:
     *
     * @example
     * ```typescript
     * const cursor: AggregationCursor<{ a: number; b: string }> = coll.aggregate([]);
     * const projectCursor = cursor.project<{ a: number }>({ _id: 0, a: true });
     * const aPropOnlyArray: {a: number}[] = await projectCursor.toArray();
     *
     * // or always use chaining and save the final cursor
     *
     * const cursor = coll.aggregate().project<{ a: string }>({
     *   _id: 0,
     *   a: { $convert: { input: '$a', to: 'string' }
     * }});
     * ```
     */
    project($project) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kPipeline].push({ $project });
        return this;
    }
    /** Add a lookup stage to the aggregation pipeline */
    lookup($lookup) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kPipeline].push({ $lookup });
        return this;
    }
    /** Add a redact stage to the aggregation pipeline */
    redact($redact) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kPipeline].push({ $redact });
        return this;
    }
    /** Add a skip stage to the aggregation pipeline */
    skip($skip) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kPipeline].push({ $skip });
        return this;
    }
    /** Add a sort stage to the aggregation pipeline */
    sort($sort) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kPipeline].push({ $sort });
        return this;
    }
    /** Add a unwind stage to the aggregation pipeline */
    unwind($unwind) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kPipeline].push({ $unwind });
        return this;
    }
    // deprecated methods
    /** @deprecated Add a geoNear stage to the aggregation pipeline */
    geoNear($geoNear) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kPipeline].push({ $geoNear });
        return this;
    }
}
exports.AggregationCursor = AggregationCursor;
//# sourceMappingURL=aggregation_cursor.js.map
}, function(modId) { var map = {"../operations/aggregate":1647755346550,"./abstract_cursor":1647755346511,"../operations/execute_operation":1647755346530,"../utils":1647755346512}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346550, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOperation = exports.DB_AGGREGATE_COLLECTION = void 0;
const command_1 = require("./command");
const error_1 = require("../error");
const utils_1 = require("../utils");
const operation_1 = require("./operation");
/** @internal */
exports.DB_AGGREGATE_COLLECTION = 1;
const MIN_WIRE_VERSION_$OUT_READ_CONCERN_SUPPORT = 8;
/** @internal */
class AggregateOperation extends command_1.CommandOperation {
    constructor(ns, pipeline, options) {
        super(undefined, { ...options, dbName: ns.db });
        this.options = options !== null && options !== void 0 ? options : {};
        // Covers when ns.collection is null, undefined or the empty string, use DB_AGGREGATE_COLLECTION
        this.target = ns.collection || exports.DB_AGGREGATE_COLLECTION;
        this.pipeline = pipeline;
        // determine if we have a write stage, override read preference if so
        this.hasWriteStage = false;
        if (typeof (options === null || options === void 0 ? void 0 : options.out) === 'string') {
            this.pipeline = this.pipeline.concat({ $out: options.out });
            this.hasWriteStage = true;
        }
        else if (pipeline.length > 0) {
            const finalStage = pipeline[pipeline.length - 1];
            if (finalStage.$out || finalStage.$merge) {
                this.hasWriteStage = true;
            }
        }
        if (this.hasWriteStage) {
            this.trySecondaryWrite = true;
        }
        if (this.explain && this.writeConcern) {
            throw new error_1.MongoInvalidArgumentError('Option "explain" cannot be used on an aggregate call with writeConcern');
        }
        if ((options === null || options === void 0 ? void 0 : options.cursor) != null && typeof options.cursor !== 'object') {
            throw new error_1.MongoInvalidArgumentError('Cursor options must be an object');
        }
    }
    get canRetryRead() {
        return !this.hasWriteStage;
    }
    addToPipeline(stage) {
        this.pipeline.push(stage);
    }
    execute(server, session, callback) {
        const options = this.options;
        const serverWireVersion = (0, utils_1.maxWireVersion)(server);
        const command = { aggregate: this.target, pipeline: this.pipeline };
        if (this.hasWriteStage && serverWireVersion < MIN_WIRE_VERSION_$OUT_READ_CONCERN_SUPPORT) {
            this.readConcern = undefined;
        }
        if (serverWireVersion >= 5) {
            if (this.hasWriteStage && this.writeConcern) {
                Object.assign(command, { writeConcern: this.writeConcern });
            }
        }
        if (options.bypassDocumentValidation === true) {
            command.bypassDocumentValidation = options.bypassDocumentValidation;
        }
        if (typeof options.allowDiskUse === 'boolean') {
            command.allowDiskUse = options.allowDiskUse;
        }
        if (options.hint) {
            command.hint = options.hint;
        }
        if (options.let) {
            command.let = options.let;
        }
        command.cursor = options.cursor || {};
        if (options.batchSize && !this.hasWriteStage) {
            command.cursor.batchSize = options.batchSize;
        }
        super.executeCommand(server, session, command, callback);
    }
}
exports.AggregateOperation = AggregateOperation;
(0, operation_1.defineAspects)(AggregateOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.CURSOR_CREATING
]);
//# sourceMappingURL=aggregate.js.map
}, function(modId) { var map = {"./command":1647755346535,"../error":1647755346514,"../utils":1647755346512,"./operation":1647755346531}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346551, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.FindCursor = exports.FLAGS = void 0;
const error_1 = require("../error");
const count_1 = require("../operations/count");
const execute_operation_1 = require("../operations/execute_operation");
const find_1 = require("../operations/find");
const utils_1 = require("../utils");
const sort_1 = require("../sort");
const abstract_cursor_1 = require("./abstract_cursor");
/** @internal */
const kFilter = Symbol('filter');
/** @internal */
const kNumReturned = Symbol('numReturned');
/** @internal */
const kBuiltOptions = Symbol('builtOptions');
/** @public Flags allowed for cursor */
exports.FLAGS = [
    'tailable',
    'oplogReplay',
    'noCursorTimeout',
    'awaitData',
    'exhaust',
    'partial'
];
/** @public */
class FindCursor extends abstract_cursor_1.AbstractCursor {
    /** @internal */
    constructor(topology, namespace, filter, options = {}) {
        super(topology, namespace, options);
        this[kFilter] = filter || {};
        this[kBuiltOptions] = options;
        if (options.sort != null) {
            this[kBuiltOptions].sort = (0, sort_1.formatSort)(options.sort);
        }
    }
    clone() {
        const clonedOptions = (0, utils_1.mergeOptions)({}, this[kBuiltOptions]);
        delete clonedOptions.session;
        return new FindCursor(this.topology, this.namespace, this[kFilter], {
            ...clonedOptions
        });
    }
    map(transform) {
        return super.map(transform);
    }
    /** @internal */
    _initialize(session, callback) {
        const findOperation = new find_1.FindOperation(undefined, this.namespace, this[kFilter], {
            ...this[kBuiltOptions],
            ...this.cursorOptions,
            session
        });
        (0, execute_operation_1.executeOperation)(this.topology, findOperation, (err, response) => {
            if (err || response == null)
                return callback(err);
            // TODO: We only need this for legacy queries that do not support `limit`, maybe
            //       the value should only be saved in those cases.
            if (response.cursor) {
                this[kNumReturned] = response.cursor.firstBatch.length;
            }
            else {
                this[kNumReturned] = response.documents ? response.documents.length : 0;
            }
            // TODO: NODE-2882
            callback(undefined, { server: findOperation.server, session, response });
        });
    }
    /** @internal */
    _getMore(batchSize, callback) {
        // NOTE: this is to support client provided limits in pre-command servers
        const numReturned = this[kNumReturned];
        if (numReturned) {
            const limit = this[kBuiltOptions].limit;
            batchSize =
                limit && limit > 0 && numReturned + batchSize > limit ? limit - numReturned : batchSize;
            if (batchSize <= 0) {
                return this.close(callback);
            }
        }
        super._getMore(batchSize, (err, response) => {
            if (err)
                return callback(err);
            // TODO: wrap this in some logic to prevent it from happening if we don't need this support
            if (response) {
                this[kNumReturned] = this[kNumReturned] + response.cursor.nextBatch.length;
            }
            callback(undefined, response);
        });
    }
    count(options, callback) {
        if (typeof options === 'boolean') {
            throw new error_1.MongoInvalidArgumentError('Invalid first parameter to count');
        }
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        return (0, execute_operation_1.executeOperation)(this.topology, new count_1.CountOperation(this.namespace, this[kFilter], {
            ...this[kBuiltOptions],
            ...this.cursorOptions,
            ...options
        }), callback);
    }
    explain(verbosity, callback) {
        if (typeof verbosity === 'function')
            (callback = verbosity), (verbosity = true);
        if (verbosity == null)
            verbosity = true;
        return (0, execute_operation_1.executeOperation)(this.topology, new find_1.FindOperation(undefined, this.namespace, this[kFilter], {
            ...this[kBuiltOptions],
            ...this.cursorOptions,
            explain: verbosity
        }), callback);
    }
    /** Set the cursor query */
    filter(filter) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kFilter] = filter;
        return this;
    }
    /**
     * Set the cursor hint
     *
     * @param hint - If specified, then the query system will only consider plans using the hinted index.
     */
    hint(hint) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kBuiltOptions].hint = hint;
        return this;
    }
    /**
     * Set the cursor min
     *
     * @param min - Specify a $min value to specify the inclusive lower bound for a specific index in order to constrain the results of find(). The $min specifies the lower bound for all keys of a specific index in order.
     */
    min(min) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kBuiltOptions].min = min;
        return this;
    }
    /**
     * Set the cursor max
     *
     * @param max - Specify a $max value to specify the exclusive upper bound for a specific index in order to constrain the results of find(). The $max specifies the upper bound for all keys of a specific index in order.
     */
    max(max) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kBuiltOptions].max = max;
        return this;
    }
    /**
     * Set the cursor returnKey.
     * If set to true, modifies the cursor to only return the index field or fields for the results of the query, rather than documents.
     * If set to true and the query does not use an index to perform the read operation, the returned documents will not contain any fields.
     *
     * @param value - the returnKey value.
     */
    returnKey(value) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kBuiltOptions].returnKey = value;
        return this;
    }
    /**
     * Modifies the output of a query by adding a field $recordId to matching documents. $recordId is the internal key which uniquely identifies a document in a collection.
     *
     * @param value - The $showDiskLoc option has now been deprecated and replaced with the showRecordId field. $showDiskLoc will still be accepted for OP_QUERY stye find.
     */
    showRecordId(value) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kBuiltOptions].showRecordId = value;
        return this;
    }
    /**
     * Add a query modifier to the cursor query
     *
     * @param name - The query modifier (must start with $, such as $orderby etc)
     * @param value - The modifier value.
     */
    addQueryModifier(name, value) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        if (name[0] !== '$') {
            throw new error_1.MongoInvalidArgumentError(`${name} is not a valid query modifier`);
        }
        // Strip of the $
        const field = name.substr(1);
        // NOTE: consider some TS magic for this
        switch (field) {
            case 'comment':
                this[kBuiltOptions].comment = value;
                break;
            case 'explain':
                this[kBuiltOptions].explain = value;
                break;
            case 'hint':
                this[kBuiltOptions].hint = value;
                break;
            case 'max':
                this[kBuiltOptions].max = value;
                break;
            case 'maxTimeMS':
                this[kBuiltOptions].maxTimeMS = value;
                break;
            case 'min':
                this[kBuiltOptions].min = value;
                break;
            case 'orderby':
                this[kBuiltOptions].sort = (0, sort_1.formatSort)(value);
                break;
            case 'query':
                this[kFilter] = value;
                break;
            case 'returnKey':
                this[kBuiltOptions].returnKey = value;
                break;
            case 'showDiskLoc':
                this[kBuiltOptions].showRecordId = value;
                break;
            default:
                throw new error_1.MongoInvalidArgumentError(`Invalid query modifier: ${name}`);
        }
        return this;
    }
    /**
     * Add a comment to the cursor query allowing for tracking the comment in the log.
     *
     * @param value - The comment attached to this query.
     */
    comment(value) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kBuiltOptions].comment = value;
        return this;
    }
    /**
     * Set a maxAwaitTimeMS on a tailing cursor query to allow to customize the timeout value for the option awaitData (Only supported on MongoDB 3.2 or higher, ignored otherwise)
     *
     * @param value - Number of milliseconds to wait before aborting the tailed query.
     */
    maxAwaitTimeMS(value) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        if (typeof value !== 'number') {
            throw new error_1.MongoInvalidArgumentError('Argument for maxAwaitTimeMS must be a number');
        }
        this[kBuiltOptions].maxAwaitTimeMS = value;
        return this;
    }
    /**
     * Set a maxTimeMS on the cursor query, allowing for hard timeout limits on queries (Only supported on MongoDB 2.6 or higher)
     *
     * @param value - Number of milliseconds to wait before aborting the query.
     */
    maxTimeMS(value) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        if (typeof value !== 'number') {
            throw new error_1.MongoInvalidArgumentError('Argument for maxTimeMS must be a number');
        }
        this[kBuiltOptions].maxTimeMS = value;
        return this;
    }
    /**
     * Add a project stage to the aggregation pipeline
     *
     * @remarks
     * In order to strictly type this function you must provide an interface
     * that represents the effect of your projection on the result documents.
     *
     * By default chaining a projection to your cursor changes the returned type to the generic
     * {@link Document} type.
     * You should specify a parameterized type to have assertions on your final results.
     *
     * @example
     * ```typescript
     * // Best way
     * const docs: FindCursor<{ a: number }> = cursor.project<{ a: number }>({ _id: 0, a: true });
     * // Flexible way
     * const docs: FindCursor<Document> = cursor.project({ _id: 0, a: true });
     * ```
     *
     * @remarks
     *
     * **Note for Typescript Users:** adding a transform changes the return type of the iteration of this cursor,
     * it **does not** return a new instance of a cursor. This means when calling project,
     * you should always assign the result to a new variable in order to get a correctly typed cursor variable.
     * Take note of the following example:
     *
     * @example
     * ```typescript
     * const cursor: FindCursor<{ a: number; b: string }> = coll.find();
     * const projectCursor = cursor.project<{ a: number }>({ _id: 0, a: true });
     * const aPropOnlyArray: {a: number}[] = await projectCursor.toArray();
     *
     * // or always use chaining and save the final cursor
     *
     * const cursor = coll.find().project<{ a: string }>({
     *   _id: 0,
     *   a: { $convert: { input: '$a', to: 'string' }
     * }});
     * ```
     */
    project(value) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kBuiltOptions].projection = value;
        return this;
    }
    /**
     * Sets the sort order of the cursor query.
     *
     * @param sort - The key or keys set for the sort.
     * @param direction - The direction of the sorting (1 or -1).
     */
    sort(sort, direction) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        if (this[kBuiltOptions].tailable) {
            throw new error_1.MongoTailableCursorError('Tailable cursor does not support sorting');
        }
        this[kBuiltOptions].sort = (0, sort_1.formatSort)(sort, direction);
        return this;
    }
    /**
     * Allows disk use for blocking sort operations exceeding 100MB memory. (MongoDB 3.2 or higher)
     *
     * @remarks
     * {@link https://docs.mongodb.com/manual/reference/command/find/#find-cmd-allowdiskuse | find command allowDiskUse documentation}
     */
    allowDiskUse() {
        (0, abstract_cursor_1.assertUninitialized)(this);
        if (!this[kBuiltOptions].sort) {
            throw new error_1.MongoInvalidArgumentError('Option "allowDiskUse" requires a sort specification');
        }
        this[kBuiltOptions].allowDiskUse = true;
        return this;
    }
    /**
     * Set the collation options for the cursor.
     *
     * @param value - The cursor collation options (MongoDB 3.4 or higher) settings for update operation (see 3.4 documentation for available fields).
     */
    collation(value) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        this[kBuiltOptions].collation = value;
        return this;
    }
    /**
     * Set the limit for the cursor.
     *
     * @param value - The limit for the cursor query.
     */
    limit(value) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        if (this[kBuiltOptions].tailable) {
            throw new error_1.MongoTailableCursorError('Tailable cursor does not support limit');
        }
        if (typeof value !== 'number') {
            throw new error_1.MongoInvalidArgumentError('Operation "limit" requires an integer');
        }
        this[kBuiltOptions].limit = value;
        return this;
    }
    /**
     * Set the skip for the cursor.
     *
     * @param value - The skip for the cursor query.
     */
    skip(value) {
        (0, abstract_cursor_1.assertUninitialized)(this);
        if (this[kBuiltOptions].tailable) {
            throw new error_1.MongoTailableCursorError('Tailable cursor does not support skip');
        }
        if (typeof value !== 'number') {
            throw new error_1.MongoInvalidArgumentError('Operation "skip" requires an integer');
        }
        this[kBuiltOptions].skip = value;
        return this;
    }
}
exports.FindCursor = FindCursor;
//# sourceMappingURL=find_cursor.js.map
}, function(modId) { var map = {"../error":1647755346514,"../operations/count":1647755346552,"../operations/execute_operation":1647755346530,"../operations/find":1647755346553,"../utils":1647755346512,"../sort":1647755346554,"./abstract_cursor":1647755346511}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346552, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CountOperation = void 0;
const operation_1 = require("./operation");
const command_1 = require("./command");
/** @internal */
class CountOperation extends command_1.CommandOperation {
    constructor(namespace, filter, options) {
        super({ s: { namespace: namespace } }, options);
        this.options = options;
        this.collectionName = namespace.collection;
        this.query = filter;
    }
    execute(server, session, callback) {
        const options = this.options;
        const cmd = {
            count: this.collectionName,
            query: this.query
        };
        if (typeof options.limit === 'number') {
            cmd.limit = options.limit;
        }
        if (typeof options.skip === 'number') {
            cmd.skip = options.skip;
        }
        if (options.hint != null) {
            cmd.hint = options.hint;
        }
        if (typeof options.maxTimeMS === 'number') {
            cmd.maxTimeMS = options.maxTimeMS;
        }
        super.executeCommand(server, session, cmd, (err, result) => {
            callback(err, result ? result.n : 0);
        });
    }
}
exports.CountOperation = CountOperation;
(0, operation_1.defineAspects)(CountOperation, [operation_1.Aspect.READ_OPERATION, operation_1.Aspect.RETRYABLE]);
//# sourceMappingURL=count.js.map
}, function(modId) { var map = {"./operation":1647755346531,"./command":1647755346535}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346553, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOperation = void 0;
const operation_1 = require("./operation");
const utils_1 = require("../utils");
const error_1 = require("../error");
const command_1 = require("./command");
const sort_1 = require("../sort");
const shared_1 = require("../cmap/wire_protocol/shared");
const read_concern_1 = require("../read_concern");
const SUPPORTS_WRITE_CONCERN_AND_COLLATION = 5;
/** @internal */
class FindOperation extends command_1.CommandOperation {
    constructor(collection, ns, filter = {}, options = {}) {
        super(collection, options);
        this.options = options;
        this.ns = ns;
        if (typeof filter !== 'object' || Array.isArray(filter)) {
            throw new error_1.MongoInvalidArgumentError('Query filter must be a plain object or ObjectId');
        }
        // If the filter is a buffer, validate that is a valid BSON document
        if (Buffer.isBuffer(filter)) {
            const objectSize = filter[0] | (filter[1] << 8) | (filter[2] << 16) | (filter[3] << 24);
            if (objectSize !== filter.length) {
                throw new error_1.MongoInvalidArgumentError(`Query filter raw message size does not match message header size [${filter.length}] != [${objectSize}]`);
            }
        }
        // special case passing in an ObjectId as a filter
        this.filter = filter != null && filter._bsontype === 'ObjectID' ? { _id: filter } : filter;
    }
    execute(server, session, callback) {
        this.server = server;
        const serverWireVersion = (0, utils_1.maxWireVersion)(server);
        const options = this.options;
        if (options.allowDiskUse != null && serverWireVersion < 4) {
            callback(new error_1.MongoCompatibilityError('Option "allowDiskUse" is not supported on MongoDB < 3.2'));
            return;
        }
        if (options.collation && serverWireVersion < SUPPORTS_WRITE_CONCERN_AND_COLLATION) {
            callback(new error_1.MongoCompatibilityError(`Server ${server.name}, which reports wire version ${serverWireVersion}, does not support collation`));
            return;
        }
        if (serverWireVersion < 4) {
            if (this.readConcern && this.readConcern.level !== 'local') {
                callback(new error_1.MongoCompatibilityError(`Server find command does not support a readConcern level of ${this.readConcern.level}`));
                return;
            }
            const findCommand = makeLegacyFindCommand(this.ns, this.filter, options);
            if ((0, shared_1.isSharded)(server) && this.readPreference) {
                findCommand.$readPreference = this.readPreference.toJSON();
            }
            server.query(this.ns, findCommand, {
                ...this.options,
                ...this.bsonOptions,
                documentsReturnedIn: 'firstBatch',
                readPreference: this.readPreference
            }, callback);
            return;
        }
        let findCommand = makeFindCommand(this.ns, this.filter, options);
        if (this.explain) {
            findCommand = (0, utils_1.decorateWithExplain)(findCommand, this.explain);
        }
        server.command(this.ns, findCommand, {
            ...this.options,
            ...this.bsonOptions,
            documentsReturnedIn: 'firstBatch',
            session
        }, callback);
    }
}
exports.FindOperation = FindOperation;
function makeFindCommand(ns, filter, options) {
    const findCommand = {
        find: ns.collection,
        filter
    };
    if (options.sort) {
        findCommand.sort = (0, sort_1.formatSort)(options.sort);
    }
    if (options.projection) {
        let projection = options.projection;
        if (projection && Array.isArray(projection)) {
            projection = projection.length
                ? projection.reduce((result, field) => {
                    result[field] = 1;
                    return result;
                }, {})
                : { _id: 1 };
        }
        findCommand.projection = projection;
    }
    if (options.hint) {
        findCommand.hint = (0, utils_1.normalizeHintField)(options.hint);
    }
    if (typeof options.skip === 'number') {
        findCommand.skip = options.skip;
    }
    if (typeof options.limit === 'number') {
        if (options.limit < 0) {
            findCommand.limit = -options.limit;
            findCommand.singleBatch = true;
        }
        else {
            findCommand.limit = options.limit;
        }
    }
    if (typeof options.batchSize === 'number') {
        if (options.batchSize < 0) {
            if (options.limit &&
                options.limit !== 0 &&
                Math.abs(options.batchSize) < Math.abs(options.limit)) {
                findCommand.limit = -options.batchSize;
            }
            findCommand.singleBatch = true;
        }
        else {
            findCommand.batchSize = options.batchSize;
        }
    }
    if (typeof options.singleBatch === 'boolean') {
        findCommand.singleBatch = options.singleBatch;
    }
    if (options.comment) {
        findCommand.comment = options.comment;
    }
    if (typeof options.maxTimeMS === 'number') {
        findCommand.maxTimeMS = options.maxTimeMS;
    }
    const readConcern = read_concern_1.ReadConcern.fromOptions(options);
    if (readConcern) {
        findCommand.readConcern = readConcern.toJSON();
    }
    if (options.max) {
        findCommand.max = options.max;
    }
    if (options.min) {
        findCommand.min = options.min;
    }
    if (typeof options.returnKey === 'boolean') {
        findCommand.returnKey = options.returnKey;
    }
    if (typeof options.showRecordId === 'boolean') {
        findCommand.showRecordId = options.showRecordId;
    }
    if (typeof options.tailable === 'boolean') {
        findCommand.tailable = options.tailable;
    }
    if (typeof options.timeout === 'boolean') {
        findCommand.noCursorTimeout = !options.timeout;
    }
    else if (typeof options.noCursorTimeout === 'boolean') {
        findCommand.noCursorTimeout = options.noCursorTimeout;
    }
    if (typeof options.awaitData === 'boolean') {
        findCommand.awaitData = options.awaitData;
    }
    if (typeof options.allowPartialResults === 'boolean') {
        findCommand.allowPartialResults = options.allowPartialResults;
    }
    if (options.collation) {
        findCommand.collation = options.collation;
    }
    if (typeof options.allowDiskUse === 'boolean') {
        findCommand.allowDiskUse = options.allowDiskUse;
    }
    if (options.let) {
        findCommand.let = options.let;
    }
    return findCommand;
}
function makeLegacyFindCommand(ns, filter, options) {
    const findCommand = {
        $query: filter
    };
    if (options.sort) {
        findCommand.$orderby = (0, sort_1.formatSort)(options.sort);
    }
    if (options.hint) {
        findCommand.$hint = (0, utils_1.normalizeHintField)(options.hint);
    }
    if (typeof options.returnKey === 'boolean') {
        findCommand.$returnKey = options.returnKey;
    }
    if (options.max) {
        findCommand.$max = options.max;
    }
    if (options.min) {
        findCommand.$min = options.min;
    }
    if (typeof options.showRecordId === 'boolean') {
        findCommand.$showDiskLoc = options.showRecordId;
    }
    if (options.comment) {
        findCommand.$comment = options.comment;
    }
    if (typeof options.maxTimeMS === 'number') {
        findCommand.$maxTimeMS = options.maxTimeMS;
    }
    if (options.explain != null) {
        findCommand.$explain = true;
    }
    return findCommand;
}
(0, operation_1.defineAspects)(FindOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.CURSOR_CREATING
]);
//# sourceMappingURL=find.js.map
}, function(modId) { var map = {"./operation":1647755346531,"../utils":1647755346512,"../error":1647755346514,"./command":1647755346535,"../sort":1647755346554,"../cmap/wire_protocol/shared":1647755346526,"../read_concern":1647755346517}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346554, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSort = void 0;
const error_1 = require("./error");
/** @internal */
function prepareDirection(direction = 1) {
    const value = `${direction}`.toLowerCase();
    if (isMeta(direction))
        return direction;
    switch (value) {
        case 'ascending':
        case 'asc':
        case '1':
            return 1;
        case 'descending':
        case 'desc':
        case '-1':
            return -1;
        default:
            throw new error_1.MongoInvalidArgumentError(`Invalid sort direction: ${JSON.stringify(direction)}`);
    }
}
/** @internal */
function isMeta(t) {
    return typeof t === 'object' && t != null && '$meta' in t && typeof t.$meta === 'string';
}
/** @internal */
function isPair(t) {
    if (Array.isArray(t) && t.length === 2) {
        try {
            prepareDirection(t[1]);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    return false;
}
function isDeep(t) {
    return Array.isArray(t) && Array.isArray(t[0]);
}
function isMap(t) {
    return t instanceof Map && t.size > 0;
}
/** @internal */
function pairToMap(v) {
    return new Map([[`${v[0]}`, prepareDirection([v[1]])]]);
}
/** @internal */
function deepToMap(t) {
    const sortEntries = t.map(([k, v]) => [`${k}`, prepareDirection(v)]);
    return new Map(sortEntries);
}
/** @internal */
function stringsToMap(t) {
    const sortEntries = t.map(key => [`${key}`, 1]);
    return new Map(sortEntries);
}
/** @internal */
function objectToMap(t) {
    const sortEntries = Object.entries(t).map(([k, v]) => [
        `${k}`,
        prepareDirection(v)
    ]);
    return new Map(sortEntries);
}
/** @internal */
function mapToMap(t) {
    const sortEntries = Array.from(t).map(([k, v]) => [
        `${k}`,
        prepareDirection(v)
    ]);
    return new Map(sortEntries);
}
/** converts a Sort type into a type that is valid for the server (SortForCmd) */
function formatSort(sort, direction) {
    if (sort == null)
        return undefined;
    if (typeof sort === 'string')
        return new Map([[sort, prepareDirection(direction)]]);
    if (typeof sort !== 'object') {
        throw new error_1.MongoInvalidArgumentError(`Invalid sort format: ${JSON.stringify(sort)} Sort must be a valid object`);
    }
    if (!Array.isArray(sort)) {
        return isMap(sort) ? mapToMap(sort) : Object.keys(sort).length ? objectToMap(sort) : undefined;
    }
    if (!sort.length)
        return undefined;
    if (isDeep(sort))
        return deepToMap(sort);
    if (isPair(sort))
        return pairToMap(sort);
    return stringsToMap(sort);
}
exports.formatSort = formatSort;
//# sourceMappingURL=sort.js.map
}, function(modId) { var map = {"./error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346555, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexInformationOperation = exports.IndexExistsOperation = exports.ListIndexesCursor = exports.ListIndexesOperation = exports.DropIndexesOperation = exports.DropIndexOperation = exports.EnsureIndexOperation = exports.CreateIndexOperation = exports.CreateIndexesOperation = exports.IndexesOperation = void 0;
const common_functions_1 = require("./common_functions");
const operation_1 = require("./operation");
const error_1 = require("../error");
const utils_1 = require("../utils");
const command_1 = require("./command");
const read_preference_1 = require("../read_preference");
const abstract_cursor_1 = require("../cursor/abstract_cursor");
const execute_operation_1 = require("./execute_operation");
const LIST_INDEXES_WIRE_VERSION = 3;
const VALID_INDEX_OPTIONS = new Set([
    'background',
    'unique',
    'name',
    'partialFilterExpression',
    'sparse',
    'hidden',
    'expireAfterSeconds',
    'storageEngine',
    'collation',
    'version',
    // text indexes
    'weights',
    'default_language',
    'language_override',
    'textIndexVersion',
    // 2d-sphere indexes
    '2dsphereIndexVersion',
    // 2d indexes
    'bits',
    'min',
    'max',
    // geoHaystack Indexes
    'bucketSize',
    // wildcard indexes
    'wildcardProjection'
]);
function makeIndexSpec(indexSpec, options) {
    const indexParameters = (0, utils_1.parseIndexOptions)(indexSpec);
    // Generate the index name
    const name = typeof options.name === 'string' ? options.name : indexParameters.name;
    // Set up the index
    const finalIndexSpec = { name, key: indexParameters.fieldHash };
    // merge valid index options into the index spec
    for (const optionName in options) {
        if (VALID_INDEX_OPTIONS.has(optionName)) {
            finalIndexSpec[optionName] = options[optionName];
        }
    }
    return finalIndexSpec;
}
/** @internal */
class IndexesOperation extends operation_1.AbstractOperation {
    constructor(collection, options) {
        super(options);
        this.options = options;
        this.collection = collection;
    }
    execute(server, session, callback) {
        const coll = this.collection;
        const options = this.options;
        (0, common_functions_1.indexInformation)(coll.s.db, coll.collectionName, { full: true, ...options, readPreference: this.readPreference, session }, callback);
    }
}
exports.IndexesOperation = IndexesOperation;
/** @internal */
class CreateIndexesOperation extends command_1.CommandOperation {
    constructor(parent, collectionName, indexes, options) {
        super(parent, options);
        this.options = options !== null && options !== void 0 ? options : {};
        this.collectionName = collectionName;
        this.indexes = indexes;
    }
    execute(server, session, callback) {
        const options = this.options;
        const indexes = this.indexes;
        const serverWireVersion = (0, utils_1.maxWireVersion)(server);
        // Ensure we generate the correct name if the parameter is not set
        for (let i = 0; i < indexes.length; i++) {
            // Did the user pass in a collation, check if our write server supports it
            if (indexes[i].collation && serverWireVersion < 5) {
                callback(new error_1.MongoCompatibilityError(`Server ${server.name}, which reports wire version ${serverWireVersion}, ` +
                    'does not support collation'));
                return;
            }
            if (indexes[i].name == null) {
                const keys = [];
                for (const name in indexes[i].key) {
                    keys.push(`${name}_${indexes[i].key[name]}`);
                }
                // Set the name
                indexes[i].name = keys.join('_');
            }
        }
        const cmd = { createIndexes: this.collectionName, indexes };
        if (options.commitQuorum != null) {
            if (serverWireVersion < 9) {
                callback(new error_1.MongoCompatibilityError('Option `commitQuorum` for `createIndexes` not supported on servers < 4.4'));
                return;
            }
            cmd.commitQuorum = options.commitQuorum;
        }
        // collation is set on each index, it should not be defined at the root
        this.options.collation = undefined;
        super.executeCommand(server, session, cmd, err => {
            if (err) {
                callback(err);
                return;
            }
            const indexNames = indexes.map(index => index.name || '');
            callback(undefined, indexNames);
        });
    }
}
exports.CreateIndexesOperation = CreateIndexesOperation;
/** @internal */
class CreateIndexOperation extends CreateIndexesOperation {
    constructor(parent, collectionName, indexSpec, options) {
        // createIndex can be called with a variety of styles:
        //   coll.createIndex('a');
        //   coll.createIndex({ a: 1 });
        //   coll.createIndex([['a', 1]]);
        // createIndexes is always called with an array of index spec objects
        super(parent, collectionName, [makeIndexSpec(indexSpec, options)], options);
    }
    execute(server, session, callback) {
        super.execute(server, session, (err, indexNames) => {
            if (err || !indexNames)
                return callback(err);
            return callback(undefined, indexNames[0]);
        });
    }
}
exports.CreateIndexOperation = CreateIndexOperation;
/** @internal */
class EnsureIndexOperation extends CreateIndexOperation {
    constructor(db, collectionName, indexSpec, options) {
        super(db, collectionName, indexSpec, options);
        this.readPreference = read_preference_1.ReadPreference.primary;
        this.db = db;
        this.collectionName = collectionName;
    }
    execute(server, session, callback) {
        const indexName = this.indexes[0].name;
        const cursor = this.db.collection(this.collectionName).listIndexes({ session });
        cursor.toArray((err, indexes) => {
            /// ignore "NamespaceNotFound" errors
            if (err && err.code !== error_1.MONGODB_ERROR_CODES.NamespaceNotFound) {
                return callback(err);
            }
            if (indexes) {
                indexes = Array.isArray(indexes) ? indexes : [indexes];
                if (indexes.some(index => index.name === indexName)) {
                    callback(undefined, indexName);
                    return;
                }
            }
            super.execute(server, session, callback);
        });
    }
}
exports.EnsureIndexOperation = EnsureIndexOperation;
/** @internal */
class DropIndexOperation extends command_1.CommandOperation {
    constructor(collection, indexName, options) {
        super(collection, options);
        this.options = options !== null && options !== void 0 ? options : {};
        this.collection = collection;
        this.indexName = indexName;
    }
    execute(server, session, callback) {
        const cmd = { dropIndexes: this.collection.collectionName, index: this.indexName };
        super.executeCommand(server, session, cmd, callback);
    }
}
exports.DropIndexOperation = DropIndexOperation;
/** @internal */
class DropIndexesOperation extends DropIndexOperation {
    constructor(collection, options) {
        super(collection, '*', options);
    }
    execute(server, session, callback) {
        super.execute(server, session, err => {
            if (err)
                return callback(err, false);
            callback(undefined, true);
        });
    }
}
exports.DropIndexesOperation = DropIndexesOperation;
/** @internal */
class ListIndexesOperation extends command_1.CommandOperation {
    constructor(collection, options) {
        super(collection, options);
        this.options = options !== null && options !== void 0 ? options : {};
        this.collectionNamespace = collection.s.namespace;
    }
    execute(server, session, callback) {
        const serverWireVersion = (0, utils_1.maxWireVersion)(server);
        if (serverWireVersion < LIST_INDEXES_WIRE_VERSION) {
            const systemIndexesNS = this.collectionNamespace.withCollection('system.indexes');
            const collectionNS = this.collectionNamespace.toString();
            server.query(systemIndexesNS, { query: { ns: collectionNS } }, { ...this.options, readPreference: this.readPreference }, callback);
            return;
        }
        const cursor = this.options.batchSize ? { batchSize: this.options.batchSize } : {};
        super.executeCommand(server, session, { listIndexes: this.collectionNamespace.collection, cursor }, callback);
    }
}
exports.ListIndexesOperation = ListIndexesOperation;
/** @public */
class ListIndexesCursor extends abstract_cursor_1.AbstractCursor {
    constructor(collection, options) {
        super((0, utils_1.getTopology)(collection), collection.s.namespace, options);
        this.parent = collection;
        this.options = options;
    }
    clone() {
        return new ListIndexesCursor(this.parent, {
            ...this.options,
            ...this.cursorOptions
        });
    }
    /** @internal */
    _initialize(session, callback) {
        const operation = new ListIndexesOperation(this.parent, {
            ...this.cursorOptions,
            ...this.options,
            session
        });
        (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this.parent), operation, (err, response) => {
            if (err || response == null)
                return callback(err);
            // TODO: NODE-2882
            callback(undefined, { server: operation.server, session, response });
        });
    }
}
exports.ListIndexesCursor = ListIndexesCursor;
/** @internal */
class IndexExistsOperation extends operation_1.AbstractOperation {
    constructor(collection, indexes, options) {
        super(options);
        this.options = options;
        this.collection = collection;
        this.indexes = indexes;
    }
    execute(server, session, callback) {
        const coll = this.collection;
        const indexes = this.indexes;
        (0, common_functions_1.indexInformation)(coll.s.db, coll.collectionName, { ...this.options, readPreference: this.readPreference, session }, (err, indexInformation) => {
            // If we have an error return
            if (err != null)
                return callback(err);
            // Let's check for the index names
            if (!Array.isArray(indexes))
                return callback(undefined, indexInformation[indexes] != null);
            // Check in list of indexes
            for (let i = 0; i < indexes.length; i++) {
                if (indexInformation[indexes[i]] == null) {
                    return callback(undefined, false);
                }
            }
            // All keys found return true
            return callback(undefined, true);
        });
    }
}
exports.IndexExistsOperation = IndexExistsOperation;
/** @internal */
class IndexInformationOperation extends operation_1.AbstractOperation {
    constructor(db, name, options) {
        super(options);
        this.options = options !== null && options !== void 0 ? options : {};
        this.db = db;
        this.name = name;
    }
    execute(server, session, callback) {
        const db = this.db;
        const name = this.name;
        (0, common_functions_1.indexInformation)(db, name, { ...this.options, readPreference: this.readPreference, session }, callback);
    }
}
exports.IndexInformationOperation = IndexInformationOperation;
(0, operation_1.defineAspects)(ListIndexesOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.CURSOR_CREATING
]);
(0, operation_1.defineAspects)(CreateIndexesOperation, [operation_1.Aspect.WRITE_OPERATION]);
(0, operation_1.defineAspects)(CreateIndexOperation, [operation_1.Aspect.WRITE_OPERATION]);
(0, operation_1.defineAspects)(EnsureIndexOperation, [operation_1.Aspect.WRITE_OPERATION]);
(0, operation_1.defineAspects)(DropIndexOperation, [operation_1.Aspect.WRITE_OPERATION]);
(0, operation_1.defineAspects)(DropIndexesOperation, [operation_1.Aspect.WRITE_OPERATION]);
//# sourceMappingURL=indexes.js.map
}, function(modId) { var map = {"./common_functions":1647755346556,"./operation":1647755346531,"../error":1647755346514,"../utils":1647755346512,"./command":1647755346535,"../read_preference":1647755346519,"../cursor/abstract_cursor":1647755346511,"./execute_operation":1647755346530}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346556, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareDocs = exports.indexInformation = void 0;
const error_1 = require("../error");
const utils_1 = require("../utils");
function indexInformation(db, name, _optionsOrCallback, _callback) {
    let options = _optionsOrCallback;
    let callback = _callback;
    if ('function' === typeof _optionsOrCallback) {
        callback = _optionsOrCallback;
        options = {};
    }
    // If we specified full information
    const full = options.full == null ? false : options.full;
    // Did the user destroy the topology
    if ((0, utils_1.getTopology)(db).isDestroyed())
        return callback(new error_1.MongoTopologyClosedError());
    // Process all the results from the index command and collection
    function processResults(indexes) {
        // Contains all the information
        const info = {};
        // Process all the indexes
        for (let i = 0; i < indexes.length; i++) {
            const index = indexes[i];
            // Let's unpack the object
            info[index.name] = [];
            for (const name in index.key) {
                info[index.name].push([name, index.key[name]]);
            }
        }
        return info;
    }
    // Get the list of indexes of the specified collection
    db.collection(name)
        .listIndexes(options)
        .toArray((err, indexes) => {
        if (err)
            return callback(err);
        if (!Array.isArray(indexes))
            return callback(undefined, []);
        if (full)
            return callback(undefined, indexes);
        callback(undefined, processResults(indexes));
    });
}
exports.indexInformation = indexInformation;
function prepareDocs(coll, docs, options) {
    var _a;
    const forceServerObjectId = typeof options.forceServerObjectId === 'boolean'
        ? options.forceServerObjectId
        : (_a = coll.s.db.options) === null || _a === void 0 ? void 0 : _a.forceServerObjectId;
    // no need to modify the docs if server sets the ObjectId
    if (forceServerObjectId === true) {
        return docs;
    }
    return docs.map(doc => {
        if (doc._id == null) {
            doc._id = coll.s.pkFactory.createPk();
        }
        return doc;
    });
}
exports.prepareDocs = prepareDocs;
//# sourceMappingURL=common_functions.js.map
}, function(modId) { var map = {"../error":1647755346514,"../utils":1647755346512}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346557, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCollectionsCursor = exports.ListCollectionsOperation = void 0;
const command_1 = require("./command");
const operation_1 = require("./operation");
const utils_1 = require("../utils");
const CONSTANTS = require("../constants");
const abstract_cursor_1 = require("../cursor/abstract_cursor");
const execute_operation_1 = require("./execute_operation");
const LIST_COLLECTIONS_WIRE_VERSION = 3;
/** @internal */
class ListCollectionsOperation extends command_1.CommandOperation {
    constructor(db, filter, options) {
        super(db, options);
        this.options = options !== null && options !== void 0 ? options : {};
        this.db = db;
        this.filter = filter;
        this.nameOnly = !!this.options.nameOnly;
        this.authorizedCollections = !!this.options.authorizedCollections;
        if (typeof this.options.batchSize === 'number') {
            this.batchSize = this.options.batchSize;
        }
    }
    execute(server, session, callback) {
        if ((0, utils_1.maxWireVersion)(server) < LIST_COLLECTIONS_WIRE_VERSION) {
            let filter = this.filter;
            const databaseName = this.db.s.namespace.db;
            // If we have legacy mode and have not provided a full db name filter it
            if (typeof filter.name === 'string' && !new RegExp(`^${databaseName}\\.`).test(filter.name)) {
                filter = Object.assign({}, filter);
                filter.name = this.db.s.namespace.withCollection(filter.name).toString();
            }
            // No filter, filter by current database
            if (filter == null) {
                filter = { name: `/${databaseName}/` };
            }
            // Rewrite the filter to use $and to filter out indexes
            if (filter.name) {
                filter = { $and: [{ name: filter.name }, { name: /^((?!\$).)*$/ }] };
            }
            else {
                filter = { name: /^((?!\$).)*$/ };
            }
            const documentTransform = (doc) => {
                const matching = `${databaseName}.`;
                const index = doc.name.indexOf(matching);
                // Remove database name if available
                if (doc.name && index === 0) {
                    doc.name = doc.name.substr(index + matching.length);
                }
                return doc;
            };
            server.query(new utils_1.MongoDBNamespace(databaseName, CONSTANTS.SYSTEM_NAMESPACE_COLLECTION), { query: filter }, { batchSize: this.batchSize || 1000, readPreference: this.readPreference }, (err, result) => {
                if (result && result.documents && Array.isArray(result.documents)) {
                    result.documents = result.documents.map(documentTransform);
                }
                callback(err, result);
            });
            return;
        }
        return super.executeCommand(server, session, this.generateCommand(), callback);
    }
    /* This is here for the purpose of unit testing the final command that gets sent. */
    generateCommand() {
        return {
            listCollections: 1,
            filter: this.filter,
            cursor: this.batchSize ? { batchSize: this.batchSize } : {},
            nameOnly: this.nameOnly,
            authorizedCollections: this.authorizedCollections
        };
    }
}
exports.ListCollectionsOperation = ListCollectionsOperation;
/** @public */
class ListCollectionsCursor extends abstract_cursor_1.AbstractCursor {
    constructor(db, filter, options) {
        super((0, utils_1.getTopology)(db), db.s.namespace, options);
        this.parent = db;
        this.filter = filter;
        this.options = options;
    }
    clone() {
        return new ListCollectionsCursor(this.parent, this.filter, {
            ...this.options,
            ...this.cursorOptions
        });
    }
    /** @internal */
    _initialize(session, callback) {
        const operation = new ListCollectionsOperation(this.parent, this.filter, {
            ...this.cursorOptions,
            ...this.options,
            session
        });
        (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this.parent), operation, (err, response) => {
            if (err || response == null)
                return callback(err);
            // TODO: NODE-2882
            callback(undefined, { server: operation.server, session, response });
        });
    }
}
exports.ListCollectionsCursor = ListCollectionsCursor;
(0, operation_1.defineAspects)(ListCollectionsOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.CURSOR_CREATING
]);
//# sourceMappingURL=list_collections.js.map
}, function(modId) { var map = {"./command":1647755346535,"./operation":1647755346531,"../utils":1647755346512,"../constants":1647755346558,"../cursor/abstract_cursor":1647755346511,"./execute_operation":1647755346530}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346558, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.SYSTEM_JS_COLLECTION = exports.SYSTEM_COMMAND_COLLECTION = exports.SYSTEM_USER_COLLECTION = exports.SYSTEM_PROFILE_COLLECTION = exports.SYSTEM_INDEX_COLLECTION = exports.SYSTEM_NAMESPACE_COLLECTION = void 0;
exports.SYSTEM_NAMESPACE_COLLECTION = 'system.namespaces';
exports.SYSTEM_INDEX_COLLECTION = 'system.indexes';
exports.SYSTEM_PROFILE_COLLECTION = 'system.profile';
exports.SYSTEM_USER_COLLECTION = 'system.users';
exports.SYSTEM_COMMAND_COLLECTION = '$cmd';
exports.SYSTEM_JS_COLLECTION = 'system.js';
//# sourceMappingURL=constants.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346559, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const add_user_1 = require("./operations/add_user");
const remove_user_1 = require("./operations/remove_user");
const validate_collection_1 = require("./operations/validate_collection");
const list_databases_1 = require("./operations/list_databases");
const execute_operation_1 = require("./operations/execute_operation");
const run_command_1 = require("./operations/run_command");
const utils_1 = require("./utils");
/**
 * The **Admin** class is an internal class that allows convenient access to
 * the admin functionality and commands for MongoDB.
 *
 * **ADMIN Cannot directly be instantiated**
 * @public
 *
 * @example
 * ```js
 * const MongoClient = require('mongodb').MongoClient;
 * const test = require('assert');
 * // Connection url
 * const url = 'mongodb://localhost:27017';
 * // Database Name
 * const dbName = 'test';
 *
 * // Connect using MongoClient
 * MongoClient.connect(url, function(err, client) {
 *   // Use the admin database for the operation
 *   const adminDb = client.db(dbName).admin();
 *
 *   // List all the available databases
 *   adminDb.listDatabases(function(err, dbs) {
 *     expect(err).to.not.exist;
 *     test.ok(dbs.databases.length > 0);
 *     client.close();
 *   });
 * });
 * ```
 */
class Admin {
    /**
     * Create a new Admin instance
     * @internal
     */
    constructor(db) {
        this.s = { db };
    }
    command(command, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = Object.assign({ dbName: 'admin' }, options);
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this.s.db), new run_command_1.RunCommandOperation(this.s.db, command, options), callback);
    }
    buildInfo(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        return this.command({ buildinfo: 1 }, options, callback);
    }
    serverInfo(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        return this.command({ buildinfo: 1 }, options, callback);
    }
    serverStatus(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        return this.command({ serverStatus: 1 }, options, callback);
    }
    ping(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        return this.command({ ping: 1 }, options, callback);
    }
    addUser(username, password, options, callback) {
        if (typeof password === 'function') {
            (callback = password), (password = undefined), (options = {});
        }
        else if (typeof password !== 'string') {
            if (typeof options === 'function') {
                (callback = options), (options = password), (password = undefined);
            }
            else {
                (options = password), (callback = undefined), (password = undefined);
            }
        }
        else {
            if (typeof options === 'function')
                (callback = options), (options = {});
        }
        options = Object.assign({ dbName: 'admin' }, options);
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this.s.db), new add_user_1.AddUserOperation(this.s.db, username, password, options), callback);
    }
    removeUser(username, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = Object.assign({ dbName: 'admin' }, options);
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this.s.db), new remove_user_1.RemoveUserOperation(this.s.db, username, options), callback);
    }
    validateCollection(collectionName, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this.s.db), new validate_collection_1.ValidateCollectionOperation(this, collectionName, options), callback);
    }
    listDatabases(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this.s.db), new list_databases_1.ListDatabasesOperation(this.s.db, options), callback);
    }
    replSetGetStatus(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        return this.command({ replSetGetStatus: 1 }, options, callback);
    }
}
exports.Admin = Admin;
//# sourceMappingURL=admin.js.map
}, function(modId) { var map = {"./operations/add_user":1647755346560,"./operations/remove_user":1647755346561,"./operations/validate_collection":1647755346562,"./operations/list_databases":1647755346563,"./operations/execute_operation":1647755346530,"./operations/run_command":1647755346534,"./utils":1647755346512}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346560, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserOperation = void 0;
const crypto = require("crypto");
const operation_1 = require("./operation");
const command_1 = require("./command");
const error_1 = require("../error");
const utils_1 = require("../utils");
/** @internal */
class AddUserOperation extends command_1.CommandOperation {
    constructor(db, username, password, options) {
        super(db, options);
        this.db = db;
        this.username = username;
        this.password = password;
        this.options = options !== null && options !== void 0 ? options : {};
    }
    execute(server, session, callback) {
        const db = this.db;
        const username = this.username;
        const password = this.password;
        const options = this.options;
        // Error out if digestPassword set
        if (options.digestPassword != null) {
            return callback(new error_1.MongoInvalidArgumentError('Option "digestPassword" not supported via addUser, use db.command(...) instead'));
        }
        let roles;
        if (!options.roles || (Array.isArray(options.roles) && options.roles.length === 0)) {
            (0, utils_1.emitWarningOnce)('Creating a user without roles is deprecated. Defaults to "root" if db is "admin" or "dbOwner" otherwise');
            if (db.databaseName.toLowerCase() === 'admin') {
                roles = ['root'];
            }
            else {
                roles = ['dbOwner'];
            }
        }
        else {
            roles = Array.isArray(options.roles) ? options.roles : [options.roles];
        }
        const digestPassword = (0, utils_1.getTopology)(db).lastIsMaster().maxWireVersion >= 7;
        let userPassword = password;
        if (!digestPassword) {
            // Use node md5 generator
            const md5 = crypto.createHash('md5');
            // Generate keys used for authentication
            md5.update(`${username}:mongo:${password}`);
            userPassword = md5.digest('hex');
        }
        // Build the command to execute
        const command = {
            createUser: username,
            customData: options.customData || {},
            roles: roles,
            digestPassword
        };
        // No password
        if (typeof password === 'string') {
            command.pwd = userPassword;
        }
        super.executeCommand(server, session, command, callback);
    }
}
exports.AddUserOperation = AddUserOperation;
(0, operation_1.defineAspects)(AddUserOperation, [operation_1.Aspect.WRITE_OPERATION]);
//# sourceMappingURL=add_user.js.map
}, function(modId) { var map = {"./operation":1647755346531,"./command":1647755346535,"../error":1647755346514,"../utils":1647755346512}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346561, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveUserOperation = void 0;
const operation_1 = require("./operation");
const command_1 = require("./command");
/** @internal */
class RemoveUserOperation extends command_1.CommandOperation {
    constructor(db, username, options) {
        super(db, options);
        this.options = options;
        this.username = username;
    }
    execute(server, session, callback) {
        super.executeCommand(server, session, { dropUser: this.username }, err => {
            callback(err, err ? false : true);
        });
    }
}
exports.RemoveUserOperation = RemoveUserOperation;
(0, operation_1.defineAspects)(RemoveUserOperation, [operation_1.Aspect.WRITE_OPERATION]);
//# sourceMappingURL=remove_user.js.map
}, function(modId) { var map = {"./operation":1647755346531,"./command":1647755346535}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346562, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateCollectionOperation = void 0;
const command_1 = require("./command");
const error_1 = require("../error");
/** @internal */
class ValidateCollectionOperation extends command_1.CommandOperation {
    constructor(admin, collectionName, options) {
        // Decorate command with extra options
        const command = { validate: collectionName };
        const keys = Object.keys(options);
        for (let i = 0; i < keys.length; i++) {
            if (Object.prototype.hasOwnProperty.call(options, keys[i]) && keys[i] !== 'session') {
                command[keys[i]] = options[keys[i]];
            }
        }
        super(admin.s.db, options);
        this.options = options;
        this.command = command;
        this.collectionName = collectionName;
    }
    execute(server, session, callback) {
        const collectionName = this.collectionName;
        super.executeCommand(server, session, this.command, (err, doc) => {
            if (err != null)
                return callback(err);
            // TODO(NODE-3483): Replace these with MongoUnexpectedServerResponseError
            if (doc.ok === 0)
                return callback(new error_1.MongoRuntimeError('Error with validate command'));
            if (doc.result != null && typeof doc.result !== 'string')
                return callback(new error_1.MongoRuntimeError('Error with validation data'));
            if (doc.result != null && doc.result.match(/exception|corrupt/) != null)
                return callback(new error_1.MongoRuntimeError(`Invalid collection ${collectionName}`));
            if (doc.valid != null && !doc.valid)
                return callback(new error_1.MongoRuntimeError(`Invalid collection ${collectionName}`));
            return callback(undefined, doc);
        });
    }
}
exports.ValidateCollectionOperation = ValidateCollectionOperation;
//# sourceMappingURL=validate_collection.js.map
}, function(modId) { var map = {"./command":1647755346535,"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346563, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDatabasesOperation = void 0;
const command_1 = require("./command");
const operation_1 = require("./operation");
const utils_1 = require("../utils");
/** @internal */
class ListDatabasesOperation extends command_1.CommandOperation {
    constructor(db, options) {
        super(db, options);
        this.options = options !== null && options !== void 0 ? options : {};
        this.ns = new utils_1.MongoDBNamespace('admin', '$cmd');
    }
    execute(server, session, callback) {
        const cmd = { listDatabases: 1 };
        if (this.options.nameOnly) {
            cmd.nameOnly = Number(cmd.nameOnly);
        }
        if (this.options.filter) {
            cmd.filter = this.options.filter;
        }
        if (typeof this.options.authorizedDatabases === 'boolean') {
            cmd.authorizedDatabases = this.options.authorizedDatabases;
        }
        super.executeCommand(server, session, cmd, callback);
    }
}
exports.ListDatabasesOperation = ListDatabasesOperation;
(0, operation_1.defineAspects)(ListDatabasesOperation, [operation_1.Aspect.READ_OPERATION, operation_1.Aspect.RETRYABLE]);
//# sourceMappingURL=list_databases.js.map
}, function(modId) { var map = {"./command":1647755346535,"./operation":1647755346531,"../utils":1647755346512}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346564, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoClient = exports.ServerApiVersion = void 0;
const db_1 = require("./db");
const change_stream_1 = require("./change_stream");
const error_1 = require("./error");
const utils_1 = require("./utils");
const connect_1 = require("./operations/connect");
const promise_provider_1 = require("./promise_provider");
const bson_1 = require("./bson");
const connection_string_1 = require("./connection_string");
const mongo_types_1 = require("./mongo_types");
/** @public */
exports.ServerApiVersion = Object.freeze({
    v1: '1'
});
/** @internal */
const kOptions = Symbol('options');
/**
 * The **MongoClient** class is a class that allows for making Connections to MongoDB.
 * @public
 *
 * @remarks
 * The programmatically provided options take precedent over the URI options.
 *
 * @example
 * ```js
 * // Connect using a MongoClient instance
 * const MongoClient = require('mongodb').MongoClient;
 * const test = require('assert');
 * // Connection url
 * const url = 'mongodb://localhost:27017';
 * // Database Name
 * const dbName = 'test';
 * // Connect using MongoClient
 * const mongoClient = new MongoClient(url);
 * mongoClient.connect(function(err, client) {
 *   const db = client.db(dbName);
 *   client.close();
 * });
 * ```
 *
 * @example
 * ```js
 * // Connect using the MongoClient.connect static method
 * const MongoClient = require('mongodb').MongoClient;
 * const test = require('assert');
 * // Connection url
 * const url = 'mongodb://localhost:27017';
 * // Database Name
 * const dbName = 'test';
 * // Connect using MongoClient
 * MongoClient.connect(url, function(err, client) {
 *   const db = client.db(dbName);
 *   client.close();
 * });
 * ```
 */
class MongoClient extends mongo_types_1.TypedEventEmitter {
    constructor(url, options) {
        super();
        this[kOptions] = (0, connection_string_1.parseOptions)(url, this, options);
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const client = this;
        // The internal state
        this.s = {
            url,
            sessions: new Set(),
            bsonOptions: (0, bson_1.resolveBSONOptions)(this[kOptions]),
            namespace: (0, utils_1.ns)('admin'),
            get options() {
                return client[kOptions];
            },
            get readConcern() {
                return client[kOptions].readConcern;
            },
            get writeConcern() {
                return client[kOptions].writeConcern;
            },
            get readPreference() {
                return client[kOptions].readPreference;
            },
            get logger() {
                return client[kOptions].logger;
            }
        };
    }
    get options() {
        return Object.freeze({ ...this[kOptions] });
    }
    get serverApi() {
        return this[kOptions].serverApi && Object.freeze({ ...this[kOptions].serverApi });
    }
    /**
     * Intended for APM use only
     * @internal
     */
    get monitorCommands() {
        return this[kOptions].monitorCommands;
    }
    set monitorCommands(value) {
        this[kOptions].monitorCommands = value;
    }
    get autoEncrypter() {
        return this[kOptions].autoEncrypter;
    }
    get readConcern() {
        return this.s.readConcern;
    }
    get writeConcern() {
        return this.s.writeConcern;
    }
    get readPreference() {
        return this.s.readPreference;
    }
    get bsonOptions() {
        return this.s.bsonOptions;
    }
    get logger() {
        return this.s.logger;
    }
    connect(callback) {
        if (callback && typeof callback !== 'function') {
            throw new error_1.MongoInvalidArgumentError('Method `connect` only accepts a callback');
        }
        return (0, utils_1.maybePromise)(callback, cb => {
            (0, connect_1.connect)(this, this[kOptions], err => {
                if (err)
                    return cb(err);
                cb(undefined, this);
            });
        });
    }
    close(forceOrCallback, callback) {
        if (typeof forceOrCallback === 'function') {
            callback = forceOrCallback;
        }
        const force = typeof forceOrCallback === 'boolean' ? forceOrCallback : false;
        return (0, utils_1.maybePromise)(callback, callback => {
            if (this.topology == null) {
                return callback();
            }
            // clear out references to old topology
            const topology = this.topology;
            this.topology = undefined;
            topology.close({ force }, error => {
                if (error)
                    return callback(error);
                const { encrypter } = this[kOptions];
                if (encrypter) {
                    return encrypter.close(this, force, error => {
                        callback(error);
                    });
                }
                callback();
            });
        });
    }
    /**
     * Create a new Db instance sharing the current socket connections.
     *
     * @param dbName - The name of the database we want to use. If not provided, use database name from connection string.
     * @param options - Optional settings for Db construction
     */
    db(dbName, options) {
        options = options !== null && options !== void 0 ? options : {};
        // Default to db from connection string if not provided
        if (!dbName) {
            dbName = this.options.dbName;
        }
        // Copy the options and add out internal override of the not shared flag
        const finalOptions = Object.assign({}, this[kOptions], options);
        // Return the db object
        const db = new db_1.Db(this, dbName, finalOptions);
        // Return the database
        return db;
    }
    static connect(url, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        try {
            // Create client
            const mongoClient = new MongoClient(url, options);
            // Execute the connect method
            if (callback) {
                return mongoClient.connect(callback);
            }
            else {
                return mongoClient.connect();
            }
        }
        catch (error) {
            if (callback)
                return callback(error);
            else
                return promise_provider_1.PromiseProvider.get().reject(error);
        }
    }
    startSession(options) {
        options = Object.assign({ explicit: true }, options);
        if (!this.topology) {
            throw new error_1.MongoNotConnectedError('MongoClient must be connected to start a session');
        }
        return this.topology.startSession(options, this.s.options);
    }
    withSession(optionsOrOperation, callback) {
        let options = optionsOrOperation;
        if (typeof optionsOrOperation === 'function') {
            callback = optionsOrOperation;
            options = { owner: Symbol() };
        }
        if (callback == null) {
            throw new error_1.MongoInvalidArgumentError('Missing required callback parameter');
        }
        const session = this.startSession(options);
        const Promise = promise_provider_1.PromiseProvider.get();
        let cleanupHandler = ((err, result, opts) => {
            // prevent multiple calls to cleanupHandler
            cleanupHandler = () => {
                // TODO(NODE-3483)
                throw new error_1.MongoRuntimeError('cleanupHandler was called too many times');
            };
            opts = Object.assign({ throw: true }, opts);
            session.endSession();
            if (err) {
                if (opts.throw)
                    throw err;
                return Promise.reject(err);
            }
        });
        try {
            const result = callback(session);
            return Promise.resolve(result).then(result => cleanupHandler(undefined, result, undefined), err => cleanupHandler(err, null, { throw: true }));
        }
        catch (err) {
            return cleanupHandler(err, null, { throw: false });
        }
    }
    /**
     * Create a new Change Stream, watching for new changes (insertions, updates,
     * replacements, deletions, and invalidations) in this cluster. Will ignore all
     * changes to system collections, as well as the local, admin, and config databases.
     *
     * @param pipeline - An array of {@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/|aggregation pipeline stages} through which to pass change stream documents. This allows for filtering (using $match) and manipulating the change stream documents.
     * @param options - Optional settings for the command
     */
    watch(pipeline = [], options = {}) {
        // Allow optionally not specifying a pipeline
        if (!Array.isArray(pipeline)) {
            options = pipeline;
            pipeline = [];
        }
        return new change_stream_1.ChangeStream(this, pipeline, (0, utils_1.resolveOptions)(this, options));
    }
    /** Return the mongo client logger */
    getLogger() {
        return this.s.logger;
    }
}
exports.MongoClient = MongoClient;
//# sourceMappingURL=mongo_client.js.map
}, function(modId) { var map = {"./db":1647755346565,"./change_stream":1647755346579,"./error":1647755346514,"./utils":1647755346512,"./operations/connect":1647755346596,"./promise_provider":1647755346513,"./mongo_types":1647755346546}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346565, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Db = void 0;
const utils_1 = require("./utils");
const aggregation_cursor_1 = require("./cursor/aggregation_cursor");
const bson_1 = require("./bson");
const read_preference_1 = require("./read_preference");
const error_1 = require("./error");
const collection_1 = require("./collection");
const change_stream_1 = require("./change_stream");
const CONSTANTS = require("./constants");
const write_concern_1 = require("./write_concern");
const read_concern_1 = require("./read_concern");
const logger_1 = require("./logger");
const add_user_1 = require("./operations/add_user");
const collections_1 = require("./operations/collections");
const stats_1 = require("./operations/stats");
const run_command_1 = require("./operations/run_command");
const create_collection_1 = require("./operations/create_collection");
const indexes_1 = require("./operations/indexes");
const drop_1 = require("./operations/drop");
const list_collections_1 = require("./operations/list_collections");
const profiling_level_1 = require("./operations/profiling_level");
const remove_user_1 = require("./operations/remove_user");
const rename_1 = require("./operations/rename");
const set_profiling_level_1 = require("./operations/set_profiling_level");
const execute_operation_1 = require("./operations/execute_operation");
const admin_1 = require("./admin");
// Allowed parameters
const DB_OPTIONS_ALLOW_LIST = [
    'writeConcern',
    'readPreference',
    'readPreferenceTags',
    'native_parser',
    'forceServerObjectId',
    'pkFactory',
    'serializeFunctions',
    'raw',
    'authSource',
    'ignoreUndefined',
    'readConcern',
    'retryMiliSeconds',
    'numberOfRetries',
    'loggerLevel',
    'logger',
    'promoteBuffers',
    'promoteLongs',
    'bsonRegExp',
    'promoteValues',
    'compression',
    'retryWrites'
];
/**
 * The **Db** class is a class that represents a MongoDB Database.
 * @public
 *
 * @example
 * ```js
 * const { MongoClient } = require('mongodb');
 * // Connection url
 * const url = 'mongodb://localhost:27017';
 * // Database Name
 * const dbName = 'test';
 * // Connect using MongoClient
 * MongoClient.connect(url, function(err, client) {
 *   // Select the database by name
 *   const testDb = client.db(dbName);
 *   client.close();
 * });
 * ```
 */
class Db {
    /**
     * Creates a new Db instance
     *
     * @param client - The MongoClient for the database.
     * @param databaseName - The name of the database this instance represents.
     * @param options - Optional settings for Db construction
     */
    constructor(client, databaseName, options) {
        var _a;
        options = options !== null && options !== void 0 ? options : {};
        // Filter the options
        options = (0, utils_1.filterOptions)(options, DB_OPTIONS_ALLOW_LIST);
        // Ensure we have a valid db name
        validateDatabaseName(databaseName);
        // Internal state of the db object
        this.s = {
            // Client
            client,
            // Options
            options,
            // Logger instance
            logger: new logger_1.Logger('Db', options),
            // Unpack read preference
            readPreference: read_preference_1.ReadPreference.fromOptions(options),
            // Merge bson options
            bsonOptions: (0, bson_1.resolveBSONOptions)(options, client),
            // Set up the primary key factory or fallback to ObjectId
            pkFactory: (_a = options === null || options === void 0 ? void 0 : options.pkFactory) !== null && _a !== void 0 ? _a : utils_1.DEFAULT_PK_FACTORY,
            // ReadConcern
            readConcern: read_concern_1.ReadConcern.fromOptions(options),
            writeConcern: write_concern_1.WriteConcern.fromOptions(options),
            // Namespace
            namespace: new utils_1.MongoDBNamespace(databaseName)
        };
    }
    get databaseName() {
        return this.s.namespace.db;
    }
    // Options
    get options() {
        return this.s.options;
    }
    // slaveOk specified
    get slaveOk() {
        var _a;
        return ((_a = this.s.readPreference) === null || _a === void 0 ? void 0 : _a.preference) !== 'primary' || false;
    }
    get readConcern() {
        return this.s.readConcern;
    }
    /**
     * The current readPreference of the Db. If not explicitly defined for
     * this Db, will be inherited from the parent MongoClient
     */
    get readPreference() {
        if (this.s.readPreference == null) {
            return this.s.client.readPreference;
        }
        return this.s.readPreference;
    }
    get bsonOptions() {
        return this.s.bsonOptions;
    }
    // get the write Concern
    get writeConcern() {
        return this.s.writeConcern;
    }
    get namespace() {
        return this.s.namespace.toString();
    }
    createCollection(name, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this), new create_collection_1.CreateCollectionOperation(this, name, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    command(command, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        // Intentionally, we do not inherit options from parent for this operation.
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this), new run_command_1.RunCommandOperation(this, command, options !== null && options !== void 0 ? options : {}), callback);
    }
    /**
     * Execute an aggregation framework pipeline against the database, needs MongoDB \>= 3.6
     *
     * @param pipeline - An array of aggregation stages to be executed
     * @param options - Optional settings for the command
     */
    aggregate(pipeline = [], options) {
        if (arguments.length > 2) {
            throw new error_1.MongoInvalidArgumentError('Method "db.aggregate()" accepts at most two arguments');
        }
        if (typeof pipeline === 'function') {
            throw new error_1.MongoInvalidArgumentError('Argument "pipeline" must not be function');
        }
        if (typeof options === 'function') {
            throw new error_1.MongoInvalidArgumentError('Argument "options" must not be function');
        }
        return new aggregation_cursor_1.AggregationCursor((0, utils_1.getTopology)(this), this.s.namespace, pipeline, (0, utils_1.resolveOptions)(this, options));
    }
    /** Return the Admin db instance */
    admin() {
        return new admin_1.Admin(this);
    }
    /**
     * Returns a reference to a MongoDB Collection. If it does not exist it will be created implicitly.
     *
     * @param name - the collection name we wish to access.
     * @returns return the new Collection instance
     */
    collection(name, options = {}) {
        if (typeof options === 'function') {
            throw new error_1.MongoInvalidArgumentError('The callback form of this helper has been removed.');
        }
        const finalOptions = (0, utils_1.resolveOptions)(this, options);
        return new collection_1.Collection(this, name, finalOptions);
    }
    stats(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this), new stats_1.DbStatsOperation(this, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    listCollections(filter = {}, options = {}) {
        return new list_collections_1.ListCollectionsCursor(this, filter, (0, utils_1.resolveOptions)(this, options));
    }
    renameCollection(fromCollection, toCollection, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        // Intentionally, we do not inherit options from parent for this operation.
        options = { ...options, readPreference: read_preference_1.ReadPreference.PRIMARY };
        // Add return new collection
        options.new_collection = true;
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this), new rename_1.RenameOperation(this.collection(fromCollection), toCollection, options), callback);
    }
    dropCollection(name, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this), new drop_1.DropCollectionOperation(this, name, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    dropDatabase(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this), new drop_1.DropDatabaseOperation(this, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    collections(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this), new collections_1.CollectionsOperation(this, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    createIndex(name, indexSpec, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this), new indexes_1.CreateIndexOperation(this, name, indexSpec, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    addUser(username, password, options, callback) {
        if (typeof password === 'function') {
            (callback = password), (password = undefined), (options = {});
        }
        else if (typeof password !== 'string') {
            if (typeof options === 'function') {
                (callback = options), (options = password), (password = undefined);
            }
            else {
                (options = password), (callback = undefined), (password = undefined);
            }
        }
        else {
            if (typeof options === 'function')
                (callback = options), (options = {});
        }
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this), new add_user_1.AddUserOperation(this, username, password, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    removeUser(username, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this), new remove_user_1.RemoveUserOperation(this, username, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    setProfilingLevel(level, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this), new set_profiling_level_1.SetProfilingLevelOperation(this, level, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    profilingLevel(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this), new profiling_level_1.ProfilingLevelOperation(this, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    indexInformation(name, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_1.getTopology)(this), new indexes_1.IndexInformationOperation(this, name, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    /**
     * Unref all sockets
     * @deprecated This function is deprecated and will be removed in the next major version.
     */
    unref() {
        (0, utils_1.getTopology)(this).unref();
    }
    /**
     * Create a new Change Stream, watching for new changes (insertions, updates,
     * replacements, deletions, and invalidations) in this database. Will ignore all
     * changes to system collections.
     *
     * @param pipeline - An array of {@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/|aggregation pipeline stages} through which to pass change stream documents. This allows for filtering (using $match) and manipulating the change stream documents.
     * @param options - Optional settings for the command
     */
    watch(pipeline = [], options = {}) {
        // Allow optionally not specifying a pipeline
        if (!Array.isArray(pipeline)) {
            options = pipeline;
            pipeline = [];
        }
        return new change_stream_1.ChangeStream(this, pipeline, (0, utils_1.resolveOptions)(this, options));
    }
    /** Return the db logger */
    getLogger() {
        return this.s.logger;
    }
    get logger() {
        return this.s.logger;
    }
}
exports.Db = Db;
Db.SYSTEM_NAMESPACE_COLLECTION = CONSTANTS.SYSTEM_NAMESPACE_COLLECTION;
Db.SYSTEM_INDEX_COLLECTION = CONSTANTS.SYSTEM_INDEX_COLLECTION;
Db.SYSTEM_PROFILE_COLLECTION = CONSTANTS.SYSTEM_PROFILE_COLLECTION;
Db.SYSTEM_USER_COLLECTION = CONSTANTS.SYSTEM_USER_COLLECTION;
Db.SYSTEM_COMMAND_COLLECTION = CONSTANTS.SYSTEM_COMMAND_COLLECTION;
Db.SYSTEM_JS_COLLECTION = CONSTANTS.SYSTEM_JS_COLLECTION;
// TODO(NODE-3484): Refactor into MongoDBNamespace
// Validate the database name
function validateDatabaseName(databaseName) {
    if (typeof databaseName !== 'string')
        throw new error_1.MongoInvalidArgumentError('Database name must be a string');
    if (databaseName.length === 0)
        throw new error_1.MongoInvalidArgumentError('Database name cannot be the empty string');
    if (databaseName === '$external')
        return;
    const invalidChars = [' ', '.', '$', '/', '\\'];
    for (let i = 0; i < invalidChars.length; i++) {
        if (databaseName.indexOf(invalidChars[i]) !== -1)
            throw new error_1.MongoAPIError(`database names cannot contain the character '${invalidChars[i]}'`);
    }
}
//# sourceMappingURL=db.js.map
}, function(modId) { var map = {"./utils":1647755346512,"./cursor/aggregation_cursor":1647755346549,"./read_preference":1647755346519,"./error":1647755346514,"./collection":1647755346567,"./change_stream":1647755346579,"./constants":1647755346558,"./write_concern":1647755346515,"./read_concern":1647755346517,"./logger":1647755346591,"./operations/add_user":1647755346560,"./operations/collections":1647755346592,"./operations/stats":1647755346590,"./operations/run_command":1647755346534,"./operations/create_collection":1647755346593,"./operations/indexes":1647755346555,"./operations/drop":1647755346582,"./operations/list_collections":1647755346557,"./operations/profiling_level":1647755346594,"./operations/remove_user":1647755346561,"./operations/rename":1647755346589,"./operations/set_profiling_level":1647755346595,"./operations/execute_operation":1647755346530,"./admin":1647755346559}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346567, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const utils_1 = require("./utils");
const read_preference_1 = require("./read_preference");
const utils_2 = require("./utils");
const bson_1 = require("./bson");
const error_1 = require("./error");
const unordered_1 = require("./bulk/unordered");
const ordered_1 = require("./bulk/ordered");
const change_stream_1 = require("./change_stream");
const write_concern_1 = require("./write_concern");
const read_concern_1 = require("./read_concern");
const aggregation_cursor_1 = require("./cursor/aggregation_cursor");
const bulk_write_1 = require("./operations/bulk_write");
const count_documents_1 = require("./operations/count_documents");
const indexes_1 = require("./operations/indexes");
const distinct_1 = require("./operations/distinct");
const drop_1 = require("./operations/drop");
const estimated_document_count_1 = require("./operations/estimated_document_count");
const find_and_modify_1 = require("./operations/find_and_modify");
const insert_1 = require("./operations/insert");
const update_1 = require("./operations/update");
const delete_1 = require("./operations/delete");
const is_capped_1 = require("./operations/is_capped");
const map_reduce_1 = require("./operations/map_reduce");
const options_operation_1 = require("./operations/options_operation");
const rename_1 = require("./operations/rename");
const stats_1 = require("./operations/stats");
const execute_operation_1 = require("./operations/execute_operation");
const find_cursor_1 = require("./cursor/find_cursor");
/**
 * The **Collection** class is an internal class that embodies a MongoDB collection
 * allowing for insert/update/remove/find and other command operation on that MongoDB collection.
 *
 * **COLLECTION Cannot directly be instantiated**
 * @public
 *
 * @example
 * ```js
 * const MongoClient = require('mongodb').MongoClient;
 * const test = require('assert');
 * // Connection url
 * const url = 'mongodb://localhost:27017';
 * // Database Name
 * const dbName = 'test';
 * // Connect using MongoClient
 * MongoClient.connect(url, function(err, client) {
 *   // Create a collection we want to drop later
 *   const col = client.db(dbName).collection('createIndexExample1');
 *   // Show that duplicate records got dropped
 *   col.find({}).toArray(function(err, items) {
 *     expect(err).to.not.exist;
 *     test.equal(4, items.length);
 *     client.close();
 *   });
 * });
 * ```
 */
class Collection {
    /**
     * Create a new Collection instance
     * @internal
     */
    constructor(db, name, options) {
        var _a, _b;
        (0, utils_2.checkCollectionName)(name);
        // Internal state
        this.s = {
            db,
            options,
            namespace: new utils_2.MongoDBNamespace(db.databaseName, name),
            pkFactory: (_b = (_a = db.options) === null || _a === void 0 ? void 0 : _a.pkFactory) !== null && _b !== void 0 ? _b : utils_1.DEFAULT_PK_FACTORY,
            readPreference: read_preference_1.ReadPreference.fromOptions(options),
            bsonOptions: (0, bson_1.resolveBSONOptions)(options, db),
            readConcern: read_concern_1.ReadConcern.fromOptions(options),
            writeConcern: write_concern_1.WriteConcern.fromOptions(options),
            slaveOk: options == null || options.slaveOk == null ? db.slaveOk : options.slaveOk
        };
    }
    /**
     * The name of the database this collection belongs to
     */
    get dbName() {
        return this.s.namespace.db;
    }
    /**
     * The name of this collection
     */
    get collectionName() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.s.namespace.collection;
    }
    /**
     * The namespace of this collection, in the format `${this.dbName}.${this.collectionName}`
     */
    get namespace() {
        return this.s.namespace.toString();
    }
    /**
     * The current readConcern of the collection. If not explicitly defined for
     * this collection, will be inherited from the parent DB
     */
    get readConcern() {
        if (this.s.readConcern == null) {
            return this.s.db.readConcern;
        }
        return this.s.readConcern;
    }
    /**
     * The current readPreference of the collection. If not explicitly defined for
     * this collection, will be inherited from the parent DB
     */
    get readPreference() {
        if (this.s.readPreference == null) {
            return this.s.db.readPreference;
        }
        return this.s.readPreference;
    }
    get bsonOptions() {
        return this.s.bsonOptions;
    }
    /**
     * The current writeConcern of the collection. If not explicitly defined for
     * this collection, will be inherited from the parent DB
     */
    get writeConcern() {
        if (this.s.writeConcern == null) {
            return this.s.db.writeConcern;
        }
        return this.s.writeConcern;
    }
    /** The current index hint for the collection */
    get hint() {
        return this.s.collectionHint;
    }
    set hint(v) {
        this.s.collectionHint = (0, utils_2.normalizeHintField)(v);
    }
    insertOne(doc, options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        // CSFLE passes in { w: 'majority' } to ensure the lib works in both 3.x and 4.x
        // we support that option style here only
        if (options && Reflect.get(options, 'w')) {
            options.writeConcern = write_concern_1.WriteConcern.fromOptions(Reflect.get(options, 'w'));
        }
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new insert_1.InsertOneOperation(this, doc, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    insertMany(docs, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options ? Object.assign({}, options) : { ordered: true };
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new insert_1.InsertManyOperation(this, docs, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    bulkWrite(operations, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options || { ordered: true };
        if (!Array.isArray(operations)) {
            throw new error_1.MongoInvalidArgumentError('Argument "operations" must be an array of documents');
        }
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new bulk_write_1.BulkWriteOperation(this, operations, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    updateOne(filter, update, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new update_1.UpdateOneOperation(this, filter, update, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    replaceOne(filter, replacement, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new update_1.ReplaceOneOperation(this, filter, replacement, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    updateMany(filter, update, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new update_1.UpdateManyOperation(this, filter, update, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    deleteOne(filter, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new delete_1.DeleteOneOperation(this, filter, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    deleteMany(filter, options, callback) {
        if (filter == null) {
            filter = {};
            options = {};
            callback = undefined;
        }
        else if (typeof filter === 'function') {
            callback = filter;
            filter = {};
            options = {};
        }
        else if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new delete_1.DeleteManyOperation(this, filter, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    rename(newName, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        // Intentionally, we do not inherit options from parent for this operation.
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new rename_1.RenameOperation(this, newName, {
            ...options,
            readPreference: read_preference_1.ReadPreference.PRIMARY
        }), callback);
    }
    drop(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new drop_1.DropCollectionOperation(this.s.db, this.collectionName, options), callback);
    }
    findOne(filter, options, callback) {
        if (callback != null && typeof callback !== 'function') {
            throw new error_1.MongoInvalidArgumentError('Third parameter to `findOne()` must be a callback or undefined');
        }
        if (typeof filter === 'function') {
            callback = filter;
            filter = {};
            options = {};
        }
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        const finalFilter = filter !== null && filter !== void 0 ? filter : {};
        const finalOptions = options !== null && options !== void 0 ? options : {};
        return this.find(finalFilter, finalOptions).limit(-1).batchSize(1).next(callback);
    }
    find(filter, options) {
        if (arguments.length > 2) {
            throw new error_1.MongoInvalidArgumentError('Method "collection.find()" accepts at most two arguments');
        }
        if (typeof options === 'function') {
            throw new error_1.MongoInvalidArgumentError('Argument "options" must not be function');
        }
        return new find_cursor_1.FindCursor((0, utils_2.getTopology)(this), this.s.namespace, filter, (0, utils_1.resolveOptions)(this, options));
    }
    options(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new options_operation_1.OptionsOperation(this, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    isCapped(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new is_capped_1.IsCappedOperation(this, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    createIndex(indexSpec, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new indexes_1.CreateIndexOperation(this, this.collectionName, indexSpec, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    createIndexes(indexSpecs, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options ? Object.assign({}, options) : {};
        if (typeof options.maxTimeMS !== 'number')
            delete options.maxTimeMS;
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new indexes_1.CreateIndexesOperation(this, this.collectionName, indexSpecs, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    dropIndex(indexName, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = (0, utils_1.resolveOptions)(this, options);
        // Run only against primary
        options.readPreference = read_preference_1.ReadPreference.primary;
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new indexes_1.DropIndexOperation(this, indexName, options), callback);
    }
    dropIndexes(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new indexes_1.DropIndexesOperation(this, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    /**
     * Get the list of all indexes information for the collection.
     *
     * @param options - Optional settings for the command
     */
    listIndexes(options) {
        return new indexes_1.ListIndexesCursor(this, (0, utils_1.resolveOptions)(this, options));
    }
    indexExists(indexes, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new indexes_1.IndexExistsOperation(this, indexes, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    indexInformation(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new indexes_1.IndexInformationOperation(this.s.db, this.collectionName, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    estimatedDocumentCount(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new estimated_document_count_1.EstimatedDocumentCountOperation(this, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    countDocuments(filter, options, callback) {
        if (filter == null) {
            (filter = {}), (options = {}), (callback = undefined);
        }
        else if (typeof filter === 'function') {
            (callback = filter), (filter = {}), (options = {});
        }
        else {
            if (arguments.length === 2) {
                if (typeof options === 'function')
                    (callback = options), (options = {});
            }
        }
        filter !== null && filter !== void 0 ? filter : (filter = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new count_documents_1.CountDocumentsOperation(this, filter, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    // Implementation
    distinct(key, filter, options, callback) {
        if (typeof filter === 'function') {
            (callback = filter), (filter = {}), (options = {});
        }
        else {
            if (arguments.length === 3 && typeof options === 'function') {
                (callback = options), (options = {});
            }
        }
        filter !== null && filter !== void 0 ? filter : (filter = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new distinct_1.DistinctOperation(this, key, filter, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    indexes(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new indexes_1.IndexesOperation(this, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    stats(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new stats_1.CollStatsOperation(this, options), callback);
    }
    findOneAndDelete(filter, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new find_and_modify_1.FindOneAndDeleteOperation(this, filter, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    findOneAndReplace(filter, replacement, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new find_and_modify_1.FindOneAndReplaceOperation(this, filter, replacement, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    findOneAndUpdate(filter, update, options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new find_and_modify_1.FindOneAndUpdateOperation(this, filter, update, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    /**
     * Execute an aggregation framework pipeline against the collection, needs MongoDB \>= 2.2
     *
     * @param pipeline - An array of aggregation pipelines to execute
     * @param options - Optional settings for the command
     */
    aggregate(pipeline = [], options) {
        if (arguments.length > 2) {
            throw new error_1.MongoInvalidArgumentError('Method "collection.aggregate()" accepts at most two arguments');
        }
        if (!Array.isArray(pipeline)) {
            throw new error_1.MongoInvalidArgumentError('Argument "pipeline" must be an array of aggregation stages');
        }
        if (typeof options === 'function') {
            throw new error_1.MongoInvalidArgumentError('Argument "options" must not be function');
        }
        return new aggregation_cursor_1.AggregationCursor((0, utils_2.getTopology)(this), this.s.namespace, pipeline, (0, utils_1.resolveOptions)(this, options));
    }
    /**
     * Create a new Change Stream, watching for new changes (insertions, updates, replacements, deletions, and invalidations) in this collection.
     *
     * @since 3.0.0
     * @param pipeline - An array of {@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/|aggregation pipeline stages} through which to pass change stream documents. This allows for filtering (using $match) and manipulating the change stream documents.
     * @param options - Optional settings for the command
     */
    watch(pipeline = [], options = {}) {
        // Allow optionally not specifying a pipeline
        if (!Array.isArray(pipeline)) {
            options = pipeline;
            pipeline = [];
        }
        return new change_stream_1.ChangeStream(this, pipeline, (0, utils_1.resolveOptions)(this, options));
    }
    mapReduce(map, reduce, options, callback) {
        (0, utils_1.emitWarningOnce)('collection.mapReduce is deprecated. Use the aggregation pipeline instead. Visit https://docs.mongodb.com/manual/reference/map-reduce-to-aggregation-pipeline for more information on how to translate map-reduce operations to the aggregation pipeline.');
        if ('function' === typeof options)
            (callback = options), (options = {});
        // Out must always be defined (make sure we don't break weirdly on pre 1.8+ servers)
        // TODO NODE-3339: Figure out if this is still necessary given we no longer officially support pre-1.8
        if ((options === null || options === void 0 ? void 0 : options.out) == null) {
            throw new error_1.MongoInvalidArgumentError('Option "out" must be defined, see mongodb docs for possible values');
        }
        if ('function' === typeof map) {
            map = map.toString();
        }
        if ('function' === typeof reduce) {
            reduce = reduce.toString();
        }
        if ('function' === typeof options.finalize) {
            options.finalize = options.finalize.toString();
        }
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new map_reduce_1.MapReduceOperation(this, map, reduce, (0, utils_1.resolveOptions)(this, options)), callback);
    }
    /** Initiate an Out of order batch write operation. All operations will be buffered into insert/update/remove commands executed out of order. */
    initializeUnorderedBulkOp(options) {
        return new unordered_1.UnorderedBulkOperation(this, (0, utils_1.resolveOptions)(this, options));
    }
    /** Initiate an In order bulk write operation. Operations will be serially executed in the order they are added, creating a new operation for each switch in types. */
    initializeOrderedBulkOp(options) {
        return new ordered_1.OrderedBulkOperation(this, (0, utils_1.resolveOptions)(this, options));
    }
    /** Get the db scoped logger */
    getLogger() {
        return this.s.db.s.logger;
    }
    get logger() {
        return this.s.db.s.logger;
    }
    /**
     * Inserts a single document or a an array of documents into MongoDB. If documents passed in do not contain the **_id** field,
     * one will be added to each of the documents missing it by the driver, mutating the document. This behavior
     * can be overridden by setting the **forceServerObjectId** flag.
     *
     * @deprecated Use insertOne, insertMany or bulkWrite instead.
     * @param docs - The documents to insert
     * @param options - Optional settings for the command
     * @param callback - An optional callback, a Promise will be returned if none is provided
     */
    insert(docs, options, callback) {
        (0, utils_1.emitWarningOnce)('collection.insert is deprecated. Use insertOne, insertMany or bulkWrite instead.');
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options || { ordered: false };
        docs = !Array.isArray(docs) ? [docs] : docs;
        if (options.keepGoing === true) {
            options.ordered = false;
        }
        return this.insertMany(docs, options, callback);
    }
    /**
     * Updates documents.
     *
     * @deprecated use updateOne, updateMany or bulkWrite
     * @param selector - The selector for the update operation.
     * @param update - The update operations to be applied to the documents
     * @param options - Optional settings for the command
     * @param callback - An optional callback, a Promise will be returned if none is provided
     */
    update(selector, update, options, callback) {
        (0, utils_1.emitWarningOnce)('collection.update is deprecated. Use updateOne, updateMany, or bulkWrite instead.');
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        return this.updateMany(selector, update, options, callback);
    }
    /**
     * Remove documents.
     *
     * @deprecated use deleteOne, deleteMany or bulkWrite
     * @param selector - The selector for the update operation.
     * @param options - Optional settings for the command
     * @param callback - An optional callback, a Promise will be returned if none is provided
     */
    remove(selector, options, callback) {
        (0, utils_1.emitWarningOnce)('collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead.');
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        return this.deleteMany(selector, options, callback);
    }
    count(filter, options, callback) {
        if (typeof filter === 'function') {
            (callback = filter), (filter = {}), (options = {});
        }
        else {
            if (typeof options === 'function')
                (callback = options), (options = {});
        }
        filter !== null && filter !== void 0 ? filter : (filter = {});
        return (0, execute_operation_1.executeOperation)((0, utils_2.getTopology)(this), new count_documents_1.CountDocumentsOperation(this, filter, (0, utils_1.resolveOptions)(this, options)), callback);
    }
}
exports.Collection = Collection;
//# sourceMappingURL=collection.js.map
}, function(modId) { var map = {"./utils":1647755346512,"./read_preference":1647755346519,"./error":1647755346514,"./bulk/unordered":1647755346569,"./bulk/ordered":1647755346577,"./change_stream":1647755346579,"./write_concern":1647755346515,"./read_concern":1647755346517,"./cursor/aggregation_cursor":1647755346549,"./operations/bulk_write":1647755346574,"./operations/count_documents":1647755346580,"./operations/indexes":1647755346555,"./operations/distinct":1647755346581,"./operations/drop":1647755346582,"./operations/estimated_document_count":1647755346583,"./operations/find_and_modify":1647755346584,"./operations/insert":1647755346573,"./operations/update":1647755346575,"./operations/delete":1647755346576,"./operations/is_capped":1647755346585,"./operations/map_reduce":1647755346586,"./operations/options_operation":1647755346588,"./operations/rename":1647755346589,"./operations/stats":1647755346590,"./operations/execute_operation":1647755346530,"./cursor/find_cursor":1647755346551}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346569, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnorderedBulkOperation = void 0;
const BSON = require("../bson");
const common_1 = require("./common");
const error_1 = require("../error");
/** @public */
class UnorderedBulkOperation extends common_1.BulkOperationBase {
    constructor(collection, options) {
        super(collection, options, false);
    }
    handleWriteError(callback, writeResult) {
        if (this.s.batches.length) {
            return false;
        }
        return super.handleWriteError(callback, writeResult);
    }
    addToOperationsList(batchType, document) {
        // Get the bsonSize
        const bsonSize = BSON.calculateObjectSize(document, {
            checkKeys: false,
            // Since we don't know what the user selected for BSON options here,
            // err on the safe side, and check the size with ignoreUndefined: false.
            ignoreUndefined: false
        });
        // Throw error if the doc is bigger than the max BSON size
        if (bsonSize >= this.s.maxBsonObjectSize) {
            // TODO(NODE-3483): Change this to MongoBSONError
            throw new error_1.MongoInvalidArgumentError(`Document is larger than the maximum size ${this.s.maxBsonObjectSize}`);
        }
        // Holds the current batch
        this.s.currentBatch = undefined;
        // Get the right type of batch
        if (batchType === common_1.BatchType.INSERT) {
            this.s.currentBatch = this.s.currentInsertBatch;
        }
        else if (batchType === common_1.BatchType.UPDATE) {
            this.s.currentBatch = this.s.currentUpdateBatch;
        }
        else if (batchType === common_1.BatchType.DELETE) {
            this.s.currentBatch = this.s.currentRemoveBatch;
        }
        const maxKeySize = this.s.maxKeySize;
        // Create a new batch object if we don't have a current one
        if (this.s.currentBatch == null) {
            this.s.currentBatch = new common_1.Batch(batchType, this.s.currentIndex);
        }
        // Check if we need to create a new batch
        if (
        // New batch if we exceed the max batch op size
        this.s.currentBatch.size + 1 >= this.s.maxWriteBatchSize ||
            // New batch if we exceed the maxBatchSizeBytes. Only matters if batch already has a doc,
            // since we can't sent an empty batch
            (this.s.currentBatch.size > 0 &&
                this.s.currentBatch.sizeBytes + maxKeySize + bsonSize >= this.s.maxBatchSizeBytes) ||
            // New batch if the new op does not have the same op type as the current batch
            this.s.currentBatch.batchType !== batchType) {
            // Save the batch to the execution stack
            this.s.batches.push(this.s.currentBatch);
            // Create a new batch
            this.s.currentBatch = new common_1.Batch(batchType, this.s.currentIndex);
        }
        // We have an array of documents
        if (Array.isArray(document)) {
            throw new error_1.MongoInvalidArgumentError('Operation passed in cannot be an Array');
        }
        this.s.currentBatch.operations.push(document);
        this.s.currentBatch.originalIndexes.push(this.s.currentIndex);
        this.s.currentIndex = this.s.currentIndex + 1;
        // Save back the current Batch to the right type
        if (batchType === common_1.BatchType.INSERT) {
            this.s.currentInsertBatch = this.s.currentBatch;
            this.s.bulkResult.insertedIds.push({
                index: this.s.bulkResult.insertedIds.length,
                _id: document._id
            });
        }
        else if (batchType === common_1.BatchType.UPDATE) {
            this.s.currentUpdateBatch = this.s.currentBatch;
        }
        else if (batchType === common_1.BatchType.DELETE) {
            this.s.currentRemoveBatch = this.s.currentBatch;
        }
        // Update current batch size
        this.s.currentBatch.size += 1;
        this.s.currentBatch.sizeBytes += maxKeySize + bsonSize;
        return this;
    }
}
exports.UnorderedBulkOperation = UnorderedBulkOperation;
//# sourceMappingURL=unordered.js.map
}, function(modId) { var map = {"./common":1647755346571,"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346571, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkOperationBase = exports.FindOperators = exports.MongoBulkWriteError = exports.mergeBatchResults = exports.WriteError = exports.WriteConcernError = exports.BulkWriteResult = exports.Batch = exports.BatchType = void 0;
const promise_provider_1 = require("../promise_provider");
const bson_1 = require("../bson");
const error_1 = require("../error");
const utils_1 = require("../utils");
const execute_operation_1 = require("../operations/execute_operation");
const insert_1 = require("../operations/insert");
const update_1 = require("../operations/update");
const delete_1 = require("../operations/delete");
const write_concern_1 = require("../write_concern");
/** @internal */
const kServerError = Symbol('serverError');
/** @public */
exports.BatchType = Object.freeze({
    INSERT: 1,
    UPDATE: 2,
    DELETE: 3
});
/**
 * Keeps the state of a unordered batch so we can rewrite the results
 * correctly after command execution
 *
 * @public
 */
class Batch {
    constructor(batchType, originalZeroIndex) {
        this.originalZeroIndex = originalZeroIndex;
        this.currentIndex = 0;
        this.originalIndexes = [];
        this.batchType = batchType;
        this.operations = [];
        this.size = 0;
        this.sizeBytes = 0;
    }
}
exports.Batch = Batch;
/**
 * @public
 * The result of a bulk write.
 */
class BulkWriteResult {
    /**
     * Create a new BulkWriteResult instance
     * @internal
     */
    constructor(bulkResult) {
        this.result = bulkResult;
    }
    /** Number of documents inserted. */
    get insertedCount() {
        var _a;
        return (_a = this.result.nInserted) !== null && _a !== void 0 ? _a : 0;
    }
    /** Number of documents matched for update. */
    get matchedCount() {
        var _a;
        return (_a = this.result.nMatched) !== null && _a !== void 0 ? _a : 0;
    }
    /** Number of documents modified. */
    get modifiedCount() {
        var _a;
        return (_a = this.result.nModified) !== null && _a !== void 0 ? _a : 0;
    }
    /** Number of documents deleted. */
    get deletedCount() {
        var _a;
        return (_a = this.result.nRemoved) !== null && _a !== void 0 ? _a : 0;
    }
    /** Number of documents upserted. */
    get upsertedCount() {
        var _a;
        return (_a = this.result.upserted.length) !== null && _a !== void 0 ? _a : 0;
    }
    /** Upserted document generated Id's, hash key is the index of the originating operation */
    get upsertedIds() {
        var _a;
        const upserted = {};
        for (const doc of (_a = this.result.upserted) !== null && _a !== void 0 ? _a : []) {
            upserted[doc.index] = doc._id;
        }
        return upserted;
    }
    /** Inserted document generated Id's, hash key is the index of the originating operation */
    get insertedIds() {
        var _a;
        const inserted = {};
        for (const doc of (_a = this.result.insertedIds) !== null && _a !== void 0 ? _a : []) {
            inserted[doc.index] = doc._id;
        }
        return inserted;
    }
    /** Evaluates to true if the bulk operation correctly executes */
    get ok() {
        return this.result.ok;
    }
    /** The number of inserted documents */
    get nInserted() {
        return this.result.nInserted;
    }
    /** Number of upserted documents */
    get nUpserted() {
        return this.result.nUpserted;
    }
    /** Number of matched documents */
    get nMatched() {
        return this.result.nMatched;
    }
    /** Number of documents updated physically on disk */
    get nModified() {
        return this.result.nModified;
    }
    /** Number of removed documents */
    get nRemoved() {
        return this.result.nRemoved;
    }
    /** Returns an array of all inserted ids */
    getInsertedIds() {
        return this.result.insertedIds;
    }
    /** Returns an array of all upserted ids */
    getUpsertedIds() {
        return this.result.upserted;
    }
    /** Returns the upserted id at the given index */
    getUpsertedIdAt(index) {
        return this.result.upserted[index];
    }
    /** Returns raw internal result */
    getRawResponse() {
        return this.result;
    }
    /** Returns true if the bulk operation contains a write error */
    hasWriteErrors() {
        return this.result.writeErrors.length > 0;
    }
    /** Returns the number of write errors off the bulk operation */
    getWriteErrorCount() {
        return this.result.writeErrors.length;
    }
    /** Returns a specific write error object */
    getWriteErrorAt(index) {
        if (index < this.result.writeErrors.length) {
            return this.result.writeErrors[index];
        }
    }
    /** Retrieve all write errors */
    getWriteErrors() {
        return this.result.writeErrors;
    }
    /** Retrieve lastOp if available */
    getLastOp() {
        return this.result.opTime;
    }
    /** Retrieve the write concern error if one exists */
    getWriteConcernError() {
        if (this.result.writeConcernErrors.length === 0) {
            return;
        }
        else if (this.result.writeConcernErrors.length === 1) {
            // Return the error
            return this.result.writeConcernErrors[0];
        }
        else {
            // Combine the errors
            let errmsg = '';
            for (let i = 0; i < this.result.writeConcernErrors.length; i++) {
                const err = this.result.writeConcernErrors[i];
                errmsg = errmsg + err.errmsg;
                // TODO: Something better
                if (i === 0)
                    errmsg = errmsg + ' and ';
            }
            return new WriteConcernError({ errmsg, code: error_1.MONGODB_ERROR_CODES.WriteConcernFailed });
        }
    }
    toJSON() {
        return this.result;
    }
    toString() {
        return `BulkWriteResult(${this.toJSON()})`;
    }
    isOk() {
        return this.result.ok === 1;
    }
}
exports.BulkWriteResult = BulkWriteResult;
/**
 * An error representing a failure by the server to apply the requested write concern to the bulk operation.
 * @public
 * @category Error
 */
class WriteConcernError {
    constructor(error) {
        this[kServerError] = error;
    }
    /** Write concern error code. */
    get code() {
        return this[kServerError].code;
    }
    /** Write concern error message. */
    get errmsg() {
        return this[kServerError].errmsg;
    }
    /** Write concern error info. */
    get errInfo() {
        return this[kServerError].errInfo;
    }
    /** @deprecated The `err` prop that contained a MongoServerError has been deprecated. */
    get err() {
        return this[kServerError];
    }
    toJSON() {
        return this[kServerError];
    }
    toString() {
        return `WriteConcernError(${this.errmsg})`;
    }
}
exports.WriteConcernError = WriteConcernError;
/**
 * An error that occurred during a BulkWrite on the server.
 * @public
 * @category Error
 */
class WriteError {
    constructor(err) {
        this.err = err;
    }
    /** WriteError code. */
    get code() {
        return this.err.code;
    }
    /** WriteError original bulk operation index. */
    get index() {
        return this.err.index;
    }
    /** WriteError message. */
    get errmsg() {
        return this.err.errmsg;
    }
    /** WriteError details. */
    get errInfo() {
        return this.err.errInfo;
    }
    /** Returns the underlying operation that caused the error */
    getOperation() {
        return this.err.op;
    }
    toJSON() {
        return { code: this.err.code, index: this.err.index, errmsg: this.err.errmsg, op: this.err.op };
    }
    toString() {
        return `WriteError(${JSON.stringify(this.toJSON())})`;
    }
}
exports.WriteError = WriteError;
/** Converts the number to a Long or returns it. */
function longOrConvert(value) {
    return typeof value === 'number' ? bson_1.Long.fromNumber(value) : value;
}
/** Merges results into shared data structure */
function mergeBatchResults(batch, bulkResult, err, result) {
    // If we have an error set the result to be the err object
    if (err) {
        result = err;
    }
    else if (result && result.result) {
        result = result.result;
    }
    if (result == null) {
        return;
    }
    // Do we have a top level error stop processing and return
    if (result.ok === 0 && bulkResult.ok === 1) {
        bulkResult.ok = 0;
        const writeError = {
            index: 0,
            code: result.code || 0,
            errmsg: result.message,
            errInfo: result.errInfo,
            op: batch.operations[0]
        };
        bulkResult.writeErrors.push(new WriteError(writeError));
        return;
    }
    else if (result.ok === 0 && bulkResult.ok === 0) {
        return;
    }
    // The server write command specification states that lastOp is an optional
    // mongod only field that has a type of timestamp. Across various scarce specs
    // where opTime is mentioned, it is an "opaque" object that can have a "ts" and
    // "t" field with Timestamp and Long as their types respectively.
    // The "lastOp" field of the bulk write result is never mentioned in the driver
    // specifications or the bulk write spec, so we should probably just keep its
    // value consistent since it seems to vary.
    // See: https://github.com/mongodb/specifications/blob/master/source/driver-bulk-update.rst#results-object
    if (result.opTime || result.lastOp) {
        let opTime = result.lastOp || result.opTime;
        // If the opTime is a Timestamp, convert it to a consistent format to be
        // able to compare easily. Converting to the object from a timestamp is
        // much more straightforward than the other direction.
        if (opTime._bsontype === 'Timestamp') {
            opTime = { ts: opTime, t: bson_1.Long.ZERO };
        }
        // If there's no lastOp, just set it.
        if (!bulkResult.opTime) {
            bulkResult.opTime = opTime;
        }
        else {
            // First compare the ts values and set if the opTimeTS value is greater.
            const lastOpTS = longOrConvert(bulkResult.opTime.ts);
            const opTimeTS = longOrConvert(opTime.ts);
            if (opTimeTS.greaterThan(lastOpTS)) {
                bulkResult.opTime = opTime;
            }
            else if (opTimeTS.equals(lastOpTS)) {
                // If the ts values are equal, then compare using the t values.
                const lastOpT = longOrConvert(bulkResult.opTime.t);
                const opTimeT = longOrConvert(opTime.t);
                if (opTimeT.greaterThan(lastOpT)) {
                    bulkResult.opTime = opTime;
                }
            }
        }
    }
    // If we have an insert Batch type
    if (isInsertBatch(batch) && result.n) {
        bulkResult.nInserted = bulkResult.nInserted + result.n;
    }
    // If we have an insert Batch type
    if (isDeleteBatch(batch) && result.n) {
        bulkResult.nRemoved = bulkResult.nRemoved + result.n;
    }
    let nUpserted = 0;
    // We have an array of upserted values, we need to rewrite the indexes
    if (Array.isArray(result.upserted)) {
        nUpserted = result.upserted.length;
        for (let i = 0; i < result.upserted.length; i++) {
            bulkResult.upserted.push({
                index: result.upserted[i].index + batch.originalZeroIndex,
                _id: result.upserted[i]._id
            });
        }
    }
    else if (result.upserted) {
        nUpserted = 1;
        bulkResult.upserted.push({
            index: batch.originalZeroIndex,
            _id: result.upserted
        });
    }
    // If we have an update Batch type
    if (isUpdateBatch(batch) && result.n) {
        const nModified = result.nModified;
        bulkResult.nUpserted = bulkResult.nUpserted + nUpserted;
        bulkResult.nMatched = bulkResult.nMatched + (result.n - nUpserted);
        if (typeof nModified === 'number') {
            bulkResult.nModified = bulkResult.nModified + nModified;
        }
        else {
            bulkResult.nModified = 0;
        }
    }
    if (Array.isArray(result.writeErrors)) {
        for (let i = 0; i < result.writeErrors.length; i++) {
            const writeError = {
                index: batch.originalIndexes[result.writeErrors[i].index],
                code: result.writeErrors[i].code,
                errmsg: result.writeErrors[i].errmsg,
                errInfo: result.writeErrors[i].errInfo,
                op: batch.operations[result.writeErrors[i].index]
            };
            bulkResult.writeErrors.push(new WriteError(writeError));
        }
    }
    if (result.writeConcernError) {
        bulkResult.writeConcernErrors.push(new WriteConcernError(result.writeConcernError));
    }
}
exports.mergeBatchResults = mergeBatchResults;
function executeCommands(bulkOperation, options, callback) {
    if (bulkOperation.s.batches.length === 0) {
        return callback(undefined, new BulkWriteResult(bulkOperation.s.bulkResult));
    }
    const batch = bulkOperation.s.batches.shift();
    function resultHandler(err, result) {
        // Error is a driver related error not a bulk op error, return early
        if (err && 'message' in err && !(err instanceof error_1.MongoWriteConcernError)) {
            return callback(new MongoBulkWriteError(err, new BulkWriteResult(bulkOperation.s.bulkResult)));
        }
        if (err instanceof error_1.MongoWriteConcernError) {
            return handleMongoWriteConcernError(batch, bulkOperation.s.bulkResult, err, callback);
        }
        // Merge the results together
        const writeResult = new BulkWriteResult(bulkOperation.s.bulkResult);
        const mergeResult = mergeBatchResults(batch, bulkOperation.s.bulkResult, err, result);
        if (mergeResult != null) {
            return callback(undefined, writeResult);
        }
        if (bulkOperation.handleWriteError(callback, writeResult))
            return;
        // Execute the next command in line
        executeCommands(bulkOperation, options, callback);
    }
    const finalOptions = (0, utils_1.resolveOptions)(bulkOperation, {
        ...options,
        ordered: bulkOperation.isOrdered
    });
    if (finalOptions.bypassDocumentValidation !== true) {
        delete finalOptions.bypassDocumentValidation;
    }
    // Set an operationIf if provided
    if (bulkOperation.operationId) {
        resultHandler.operationId = bulkOperation.operationId;
    }
    // Is the bypassDocumentValidation options specific
    if (bulkOperation.s.bypassDocumentValidation === true) {
        finalOptions.bypassDocumentValidation = true;
    }
    // Is the checkKeys option disabled
    if (bulkOperation.s.checkKeys === false) {
        finalOptions.checkKeys = false;
    }
    if (finalOptions.retryWrites) {
        if (isUpdateBatch(batch)) {
            finalOptions.retryWrites = finalOptions.retryWrites && !batch.operations.some(op => op.multi);
        }
        if (isDeleteBatch(batch)) {
            finalOptions.retryWrites =
                finalOptions.retryWrites && !batch.operations.some(op => op.limit === 0);
        }
    }
    try {
        if (isInsertBatch(batch)) {
            (0, execute_operation_1.executeOperation)(bulkOperation.s.topology, new insert_1.InsertOperation(bulkOperation.s.namespace, batch.operations, finalOptions), resultHandler);
        }
        else if (isUpdateBatch(batch)) {
            (0, execute_operation_1.executeOperation)(bulkOperation.s.topology, new update_1.UpdateOperation(bulkOperation.s.namespace, batch.operations, finalOptions), resultHandler);
        }
        else if (isDeleteBatch(batch)) {
            (0, execute_operation_1.executeOperation)(bulkOperation.s.topology, new delete_1.DeleteOperation(bulkOperation.s.namespace, batch.operations, finalOptions), resultHandler);
        }
    }
    catch (err) {
        // Force top level error
        err.ok = 0;
        // Merge top level error and return
        mergeBatchResults(batch, bulkOperation.s.bulkResult, err, undefined);
        callback();
    }
}
function handleMongoWriteConcernError(batch, bulkResult, err, callback) {
    var _a, _b;
    mergeBatchResults(batch, bulkResult, undefined, err.result);
    callback(new MongoBulkWriteError({
        message: (_a = err.result) === null || _a === void 0 ? void 0 : _a.writeConcernError.errmsg,
        code: (_b = err.result) === null || _b === void 0 ? void 0 : _b.writeConcernError.result
    }, new BulkWriteResult(bulkResult)));
}
/**
 * An error indicating an unsuccessful Bulk Write
 * @public
 * @category Error
 */
class MongoBulkWriteError extends error_1.MongoServerError {
    /** Creates a new MongoBulkWriteError */
    constructor(error, result) {
        var _a;
        super(error);
        this.writeErrors = [];
        if (error instanceof WriteConcernError)
            this.err = error;
        else if (!(error instanceof Error)) {
            this.message = error.message;
            this.code = error.code;
            this.writeErrors = (_a = error.writeErrors) !== null && _a !== void 0 ? _a : [];
        }
        this.result = result;
        Object.assign(this, error);
    }
    get name() {
        return 'MongoBulkWriteError';
    }
    /** Number of documents inserted. */
    get insertedCount() {
        return this.result.insertedCount;
    }
    /** Number of documents matched for update. */
    get matchedCount() {
        return this.result.matchedCount;
    }
    /** Number of documents modified. */
    get modifiedCount() {
        return this.result.modifiedCount;
    }
    /** Number of documents deleted. */
    get deletedCount() {
        return this.result.deletedCount;
    }
    /** Number of documents upserted. */
    get upsertedCount() {
        return this.result.upsertedCount;
    }
    /** Inserted document generated Id's, hash key is the index of the originating operation */
    get insertedIds() {
        return this.result.insertedIds;
    }
    /** Upserted document generated Id's, hash key is the index of the originating operation */
    get upsertedIds() {
        return this.result.upsertedIds;
    }
}
exports.MongoBulkWriteError = MongoBulkWriteError;
/**
 * A builder object that is returned from {@link BulkOperationBase#find}.
 * Is used to build a write operation that involves a query filter.
 *
 * @public
 */
class FindOperators {
    /**
     * Creates a new FindOperators object.
     * @internal
     */
    constructor(bulkOperation) {
        this.bulkOperation = bulkOperation;
    }
    /** Add a multiple update operation to the bulk operation */
    update(updateDocument) {
        const currentOp = buildCurrentOp(this.bulkOperation);
        return this.bulkOperation.addToOperationsList(exports.BatchType.UPDATE, (0, update_1.makeUpdateStatement)(currentOp.selector, updateDocument, {
            ...currentOp,
            multi: true
        }));
    }
    /** Add a single update operation to the bulk operation */
    updateOne(updateDocument) {
        if (!(0, utils_1.hasAtomicOperators)(updateDocument)) {
            throw new error_1.MongoInvalidArgumentError('Update document requires atomic operators');
        }
        const currentOp = buildCurrentOp(this.bulkOperation);
        return this.bulkOperation.addToOperationsList(exports.BatchType.UPDATE, (0, update_1.makeUpdateStatement)(currentOp.selector, updateDocument, { ...currentOp, multi: false }));
    }
    /** Add a replace one operation to the bulk operation */
    replaceOne(replacement) {
        if ((0, utils_1.hasAtomicOperators)(replacement)) {
            throw new error_1.MongoInvalidArgumentError('Replacement document must not use atomic operators');
        }
        const currentOp = buildCurrentOp(this.bulkOperation);
        return this.bulkOperation.addToOperationsList(exports.BatchType.UPDATE, (0, update_1.makeUpdateStatement)(currentOp.selector, replacement, { ...currentOp, multi: false }));
    }
    /** Add a delete one operation to the bulk operation */
    deleteOne() {
        const currentOp = buildCurrentOp(this.bulkOperation);
        return this.bulkOperation.addToOperationsList(exports.BatchType.DELETE, (0, delete_1.makeDeleteStatement)(currentOp.selector, { ...currentOp, limit: 1 }));
    }
    /** Add a delete many operation to the bulk operation */
    delete() {
        const currentOp = buildCurrentOp(this.bulkOperation);
        return this.bulkOperation.addToOperationsList(exports.BatchType.DELETE, (0, delete_1.makeDeleteStatement)(currentOp.selector, { ...currentOp, limit: 0 }));
    }
    /** Upsert modifier for update bulk operation, noting that this operation is an upsert. */
    upsert() {
        if (!this.bulkOperation.s.currentOp) {
            this.bulkOperation.s.currentOp = {};
        }
        this.bulkOperation.s.currentOp.upsert = true;
        return this;
    }
    /** Specifies the collation for the query condition. */
    collation(collation) {
        if (!this.bulkOperation.s.currentOp) {
            this.bulkOperation.s.currentOp = {};
        }
        this.bulkOperation.s.currentOp.collation = collation;
        return this;
    }
    /** Specifies arrayFilters for UpdateOne or UpdateMany bulk operations. */
    arrayFilters(arrayFilters) {
        if (!this.bulkOperation.s.currentOp) {
            this.bulkOperation.s.currentOp = {};
        }
        this.bulkOperation.s.currentOp.arrayFilters = arrayFilters;
        return this;
    }
}
exports.FindOperators = FindOperators;
/** @public */
class BulkOperationBase {
    /**
     * Create a new OrderedBulkOperation or UnorderedBulkOperation instance
     * @internal
     */
    constructor(collection, options, isOrdered) {
        // determine whether bulkOperation is ordered or unordered
        this.isOrdered = isOrdered;
        const topology = (0, utils_1.getTopology)(collection);
        options = options == null ? {} : options;
        // TODO Bring from driver information in isMaster
        // Get the namespace for the write operations
        const namespace = collection.s.namespace;
        // Used to mark operation as executed
        const executed = false;
        // Current item
        const currentOp = undefined;
        // Set max byte size
        const isMaster = topology.lastIsMaster();
        // If we have autoEncryption on, batch-splitting must be done on 2mb chunks, but single documents
        // over 2mb are still allowed
        const usingAutoEncryption = !!(topology.s.options && topology.s.options.autoEncrypter);
        const maxBsonObjectSize = isMaster && isMaster.maxBsonObjectSize ? isMaster.maxBsonObjectSize : 1024 * 1024 * 16;
        const maxBatchSizeBytes = usingAutoEncryption ? 1024 * 1024 * 2 : maxBsonObjectSize;
        const maxWriteBatchSize = isMaster && isMaster.maxWriteBatchSize ? isMaster.maxWriteBatchSize : 1000;
        // Calculates the largest possible size of an Array key, represented as a BSON string
        // element. This calculation:
        //     1 byte for BSON type
        //     # of bytes = length of (string representation of (maxWriteBatchSize - 1))
        //   + 1 bytes for null terminator
        const maxKeySize = (maxWriteBatchSize - 1).toString(10).length + 2;
        // Final options for retryable writes
        let finalOptions = Object.assign({}, options);
        finalOptions = (0, utils_1.applyRetryableWrites)(finalOptions, collection.s.db);
        // Final results
        const bulkResult = {
            ok: 1,
            writeErrors: [],
            writeConcernErrors: [],
            insertedIds: [],
            nInserted: 0,
            nUpserted: 0,
            nMatched: 0,
            nModified: 0,
            nRemoved: 0,
            upserted: []
        };
        // Internal state
        this.s = {
            // Final result
            bulkResult,
            // Current batch state
            currentBatch: undefined,
            currentIndex: 0,
            // ordered specific
            currentBatchSize: 0,
            currentBatchSizeBytes: 0,
            // unordered specific
            currentInsertBatch: undefined,
            currentUpdateBatch: undefined,
            currentRemoveBatch: undefined,
            batches: [],
            // Write concern
            writeConcern: write_concern_1.WriteConcern.fromOptions(options),
            // Max batch size options
            maxBsonObjectSize,
            maxBatchSizeBytes,
            maxWriteBatchSize,
            maxKeySize,
            // Namespace
            namespace,
            // Topology
            topology,
            // Options
            options: finalOptions,
            // BSON options
            bsonOptions: (0, bson_1.resolveBSONOptions)(options),
            // Current operation
            currentOp,
            // Executed
            executed,
            // Collection
            collection,
            // Fundamental error
            err: undefined,
            // check keys
            checkKeys: typeof options.checkKeys === 'boolean' ? options.checkKeys : false
        };
        // bypass Validation
        if (options.bypassDocumentValidation === true) {
            this.s.bypassDocumentValidation = true;
        }
    }
    /**
     * Add a single insert document to the bulk operation
     *
     * @example
     * ```js
     * const bulkOp = collection.initializeOrderedBulkOp();
     *
     * // Adds three inserts to the bulkOp.
     * bulkOp
     *   .insert({ a: 1 })
     *   .insert({ b: 2 })
     *   .insert({ c: 3 });
     * await bulkOp.execute();
     * ```
     */
    insert(document) {
        if (document._id == null && !shouldForceServerObjectId(this)) {
            document._id = new bson_1.ObjectId();
        }
        return this.addToOperationsList(exports.BatchType.INSERT, document);
    }
    /**
     * Builds a find operation for an update/updateOne/delete/deleteOne/replaceOne.
     * Returns a builder object used to complete the definition of the operation.
     *
     * @example
     * ```js
     * const bulkOp = collection.initializeOrderedBulkOp();
     *
     * // Add an updateOne to the bulkOp
     * bulkOp.find({ a: 1 }).updateOne({ $set: { b: 2 } });
     *
     * // Add an updateMany to the bulkOp
     * bulkOp.find({ c: 3 }).update({ $set: { d: 4 } });
     *
     * // Add an upsert
     * bulkOp.find({ e: 5 }).upsert().updateOne({ $set: { f: 6 } });
     *
     * // Add a deletion
     * bulkOp.find({ g: 7 }).deleteOne();
     *
     * // Add a multi deletion
     * bulkOp.find({ h: 8 }).delete();
     *
     * // Add a replaceOne
     * bulkOp.find({ i: 9 }).replaceOne({writeConcern: { j: 10 }});
     *
     * // Update using a pipeline (requires Mongodb 4.2 or higher)
     * bulk.find({ k: 11, y: { $exists: true }, z: { $exists: true } }).updateOne([
     *   { $set: { total: { $sum: [ '$y', '$z' ] } } }
     * ]);
     *
     * // All of the ops will now be executed
     * await bulkOp.execute();
     * ```
     */
    find(selector) {
        if (!selector) {
            throw new error_1.MongoInvalidArgumentError('Bulk find operation must specify a selector');
        }
        // Save a current selector
        this.s.currentOp = {
            selector: selector
        };
        return new FindOperators(this);
    }
    /** Specifies a raw operation to perform in the bulk write. */
    raw(op) {
        if ('insertOne' in op) {
            const forceServerObjectId = shouldForceServerObjectId(this);
            if (op.insertOne && op.insertOne.document == null) {
                // NOTE: provided for legacy support, but this is a malformed operation
                if (forceServerObjectId !== true && op.insertOne._id == null) {
                    op.insertOne._id = new bson_1.ObjectId();
                }
                return this.addToOperationsList(exports.BatchType.INSERT, op.insertOne);
            }
            if (forceServerObjectId !== true && op.insertOne.document._id == null) {
                op.insertOne.document._id = new bson_1.ObjectId();
            }
            return this.addToOperationsList(exports.BatchType.INSERT, op.insertOne.document);
        }
        if ('replaceOne' in op || 'updateOne' in op || 'updateMany' in op) {
            if ('replaceOne' in op) {
                if ('q' in op.replaceOne) {
                    throw new error_1.MongoInvalidArgumentError('Raw operations are not allowed');
                }
                const updateStatement = (0, update_1.makeUpdateStatement)(op.replaceOne.filter, op.replaceOne.replacement, { ...op.replaceOne, multi: false });
                if ((0, utils_1.hasAtomicOperators)(updateStatement.u)) {
                    throw new error_1.MongoInvalidArgumentError('Replacement document must not use atomic operators');
                }
                return this.addToOperationsList(exports.BatchType.UPDATE, updateStatement);
            }
            if ('updateOne' in op) {
                if ('q' in op.updateOne) {
                    throw new error_1.MongoInvalidArgumentError('Raw operations are not allowed');
                }
                const updateStatement = (0, update_1.makeUpdateStatement)(op.updateOne.filter, op.updateOne.update, {
                    ...op.updateOne,
                    multi: false
                });
                if (!(0, utils_1.hasAtomicOperators)(updateStatement.u)) {
                    throw new error_1.MongoInvalidArgumentError('Update document requires atomic operators');
                }
                return this.addToOperationsList(exports.BatchType.UPDATE, updateStatement);
            }
            if ('updateMany' in op) {
                if ('q' in op.updateMany) {
                    throw new error_1.MongoInvalidArgumentError('Raw operations are not allowed');
                }
                const updateStatement = (0, update_1.makeUpdateStatement)(op.updateMany.filter, op.updateMany.update, {
                    ...op.updateMany,
                    multi: true
                });
                if (!(0, utils_1.hasAtomicOperators)(updateStatement.u)) {
                    throw new error_1.MongoInvalidArgumentError('Update document requires atomic operators');
                }
                return this.addToOperationsList(exports.BatchType.UPDATE, updateStatement);
            }
        }
        if ('deleteOne' in op) {
            if ('q' in op.deleteOne) {
                throw new error_1.MongoInvalidArgumentError('Raw operations are not allowed');
            }
            return this.addToOperationsList(exports.BatchType.DELETE, (0, delete_1.makeDeleteStatement)(op.deleteOne.filter, { ...op.deleteOne, limit: 1 }));
        }
        if ('deleteMany' in op) {
            if ('q' in op.deleteMany) {
                throw new error_1.MongoInvalidArgumentError('Raw operations are not allowed');
            }
            return this.addToOperationsList(exports.BatchType.DELETE, (0, delete_1.makeDeleteStatement)(op.deleteMany.filter, { ...op.deleteMany, limit: 0 }));
        }
        // otherwise an unknown operation was provided
        throw new error_1.MongoInvalidArgumentError('bulkWrite only supports insertOne, updateOne, updateMany, deleteOne, deleteMany');
    }
    get bsonOptions() {
        return this.s.bsonOptions;
    }
    get writeConcern() {
        return this.s.writeConcern;
    }
    get batches() {
        const batches = [...this.s.batches];
        if (this.isOrdered) {
            if (this.s.currentBatch)
                batches.push(this.s.currentBatch);
        }
        else {
            if (this.s.currentInsertBatch)
                batches.push(this.s.currentInsertBatch);
            if (this.s.currentUpdateBatch)
                batches.push(this.s.currentUpdateBatch);
            if (this.s.currentRemoveBatch)
                batches.push(this.s.currentRemoveBatch);
        }
        return batches;
    }
    execute(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        if (this.s.executed) {
            return handleEarlyError(new error_1.MongoBatchReExecutionError(), callback);
        }
        const writeConcern = write_concern_1.WriteConcern.fromOptions(options);
        if (writeConcern) {
            this.s.writeConcern = writeConcern;
        }
        // If we have current batch
        if (this.isOrdered) {
            if (this.s.currentBatch)
                this.s.batches.push(this.s.currentBatch);
        }
        else {
            if (this.s.currentInsertBatch)
                this.s.batches.push(this.s.currentInsertBatch);
            if (this.s.currentUpdateBatch)
                this.s.batches.push(this.s.currentUpdateBatch);
            if (this.s.currentRemoveBatch)
                this.s.batches.push(this.s.currentRemoveBatch);
        }
        // If we have no operations in the bulk raise an error
        if (this.s.batches.length === 0) {
            const emptyBatchError = new error_1.MongoInvalidArgumentError('Invalid BulkOperation, Batch cannot be empty');
            return handleEarlyError(emptyBatchError, callback);
        }
        this.s.executed = true;
        const finalOptions = { ...this.s.options, ...options };
        return (0, utils_1.executeLegacyOperation)(this.s.topology, executeCommands, [this, finalOptions, callback]);
    }
    /**
     * Handles the write error before executing commands
     * @internal
     */
    handleWriteError(callback, writeResult) {
        if (this.s.bulkResult.writeErrors.length > 0) {
            const msg = this.s.bulkResult.writeErrors[0].errmsg
                ? this.s.bulkResult.writeErrors[0].errmsg
                : 'write operation failed';
            callback(new MongoBulkWriteError({
                message: msg,
                code: this.s.bulkResult.writeErrors[0].code,
                writeErrors: this.s.bulkResult.writeErrors
            }, writeResult));
            return true;
        }
        const writeConcernError = writeResult.getWriteConcernError();
        if (writeConcernError) {
            callback(new MongoBulkWriteError(writeConcernError, writeResult));
            return true;
        }
    }
}
exports.BulkOperationBase = BulkOperationBase;
Object.defineProperty(BulkOperationBase.prototype, 'length', {
    enumerable: true,
    get() {
        return this.s.currentIndex;
    }
});
/** helper function to assist with promiseOrCallback behavior */
function handleEarlyError(err, callback) {
    const Promise = promise_provider_1.PromiseProvider.get();
    if (typeof callback === 'function') {
        callback(err);
        return;
    }
    return Promise.reject(err);
}
function shouldForceServerObjectId(bulkOperation) {
    var _a, _b;
    if (typeof bulkOperation.s.options.forceServerObjectId === 'boolean') {
        return bulkOperation.s.options.forceServerObjectId;
    }
    if (typeof ((_a = bulkOperation.s.collection.s.db.options) === null || _a === void 0 ? void 0 : _a.forceServerObjectId) === 'boolean') {
        return (_b = bulkOperation.s.collection.s.db.options) === null || _b === void 0 ? void 0 : _b.forceServerObjectId;
    }
    return false;
}
function isInsertBatch(batch) {
    return batch.batchType === exports.BatchType.INSERT;
}
function isUpdateBatch(batch) {
    return batch.batchType === exports.BatchType.UPDATE;
}
function isDeleteBatch(batch) {
    return batch.batchType === exports.BatchType.DELETE;
}
function buildCurrentOp(bulkOp) {
    let { currentOp } = bulkOp.s;
    bulkOp.s.currentOp = undefined;
    if (!currentOp)
        currentOp = {};
    return currentOp;
}
//# sourceMappingURL=common.js.map
}, function(modId) { var map = {"../promise_provider":1647755346513,"../error":1647755346514,"../utils":1647755346512,"../operations/execute_operation":1647755346530,"../operations/insert":1647755346573,"../operations/update":1647755346575,"../operations/delete":1647755346576,"../write_concern":1647755346515}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346573, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertManyOperation = exports.InsertOneOperation = exports.InsertOperation = void 0;
const error_1 = require("../error");
const operation_1 = require("./operation");
const command_1 = require("./command");
const common_functions_1 = require("./common_functions");
const write_concern_1 = require("../write_concern");
const bulk_write_1 = require("./bulk_write");
/** @internal */
class InsertOperation extends command_1.CommandOperation {
    constructor(ns, documents, options) {
        var _a;
        super(undefined, options);
        this.options = { ...options, checkKeys: (_a = options.checkKeys) !== null && _a !== void 0 ? _a : false };
        this.ns = ns;
        this.documents = documents;
    }
    execute(server, session, callback) {
        var _a;
        const options = (_a = this.options) !== null && _a !== void 0 ? _a : {};
        const ordered = typeof options.ordered === 'boolean' ? options.ordered : true;
        const command = {
            insert: this.ns.collection,
            documents: this.documents,
            ordered
        };
        if (typeof options.bypassDocumentValidation === 'boolean') {
            command.bypassDocumentValidation = options.bypassDocumentValidation;
        }
        if (options.comment != null) {
            command.comment = options.comment;
        }
        super.executeCommand(server, session, command, callback);
    }
}
exports.InsertOperation = InsertOperation;
class InsertOneOperation extends InsertOperation {
    constructor(collection, doc, options) {
        super(collection.s.namespace, (0, common_functions_1.prepareDocs)(collection, [doc], options), options);
    }
    execute(server, session, callback) {
        super.execute(server, session, (err, res) => {
            var _a, _b;
            if (err || res == null)
                return callback(err);
            if (res.code)
                return callback(new error_1.MongoServerError(res));
            if (res.writeErrors) {
                // This should be a WriteError but we can't change it now because of error hierarchy
                return callback(new error_1.MongoServerError(res.writeErrors[0]));
            }
            callback(undefined, {
                acknowledged: (_b = ((_a = this.writeConcern) === null || _a === void 0 ? void 0 : _a.w) !== 0) !== null && _b !== void 0 ? _b : true,
                insertedId: this.documents[0]._id
            });
        });
    }
}
exports.InsertOneOperation = InsertOneOperation;
/** @internal */
class InsertManyOperation extends operation_1.AbstractOperation {
    constructor(collection, docs, options) {
        super(options);
        if (!Array.isArray(docs)) {
            throw new error_1.MongoInvalidArgumentError('Argument "docs" must be an array of documents');
        }
        this.options = options;
        this.collection = collection;
        this.docs = docs;
    }
    execute(server, session, callback) {
        const coll = this.collection;
        const options = { ...this.options, ...this.bsonOptions, readPreference: this.readPreference };
        const writeConcern = write_concern_1.WriteConcern.fromOptions(options);
        const bulkWriteOperation = new bulk_write_1.BulkWriteOperation(coll, (0, common_functions_1.prepareDocs)(coll, this.docs, options).map(document => ({ insertOne: { document } })), options);
        bulkWriteOperation.execute(server, session, (err, res) => {
            var _a;
            if (err || res == null)
                return callback(err);
            callback(undefined, {
                acknowledged: (_a = (writeConcern === null || writeConcern === void 0 ? void 0 : writeConcern.w) !== 0) !== null && _a !== void 0 ? _a : true,
                insertedCount: res.insertedCount,
                insertedIds: res.insertedIds
            });
        });
    }
}
exports.InsertManyOperation = InsertManyOperation;
(0, operation_1.defineAspects)(InsertOperation, [operation_1.Aspect.RETRYABLE, operation_1.Aspect.WRITE_OPERATION]);
(0, operation_1.defineAspects)(InsertOneOperation, [operation_1.Aspect.RETRYABLE, operation_1.Aspect.WRITE_OPERATION]);
(0, operation_1.defineAspects)(InsertManyOperation, [operation_1.Aspect.WRITE_OPERATION]);
//# sourceMappingURL=insert.js.map
}, function(modId) { var map = {"../error":1647755346514,"./operation":1647755346531,"./command":1647755346535,"./common_functions":1647755346556,"../write_concern":1647755346515,"./bulk_write":1647755346574}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346574, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkWriteOperation = void 0;
const operation_1 = require("./operation");
/** @internal */
class BulkWriteOperation extends operation_1.AbstractOperation {
    constructor(collection, operations, options) {
        super(options);
        this.options = options;
        this.collection = collection;
        this.operations = operations;
    }
    execute(server, session, callback) {
        const coll = this.collection;
        const operations = this.operations;
        const options = { ...this.options, ...this.bsonOptions, readPreference: this.readPreference };
        // Create the bulk operation
        const bulk = options.ordered === false
            ? coll.initializeUnorderedBulkOp(options)
            : coll.initializeOrderedBulkOp(options);
        // for each op go through and add to the bulk
        try {
            for (let i = 0; i < operations.length; i++) {
                bulk.raw(operations[i]);
            }
        }
        catch (err) {
            return callback(err);
        }
        // Execute the bulk
        bulk.execute({ ...options, session }, (err, r) => {
            // We have connection level error
            if (!r && err) {
                return callback(err);
            }
            // Return the results
            callback(undefined, r);
        });
    }
}
exports.BulkWriteOperation = BulkWriteOperation;
(0, operation_1.defineAspects)(BulkWriteOperation, [operation_1.Aspect.WRITE_OPERATION]);
//# sourceMappingURL=bulk_write.js.map
}, function(modId) { var map = {"./operation":1647755346531}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346575, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateStatement = exports.ReplaceOneOperation = exports.UpdateManyOperation = exports.UpdateOneOperation = exports.UpdateOperation = void 0;
const operation_1 = require("./operation");
const utils_1 = require("../utils");
const command_1 = require("./command");
const error_1 = require("../error");
/** @internal */
class UpdateOperation extends command_1.CommandOperation {
    constructor(ns, statements, options) {
        super(undefined, options);
        this.options = options;
        this.ns = ns;
        this.statements = statements;
    }
    get canRetryWrite() {
        if (super.canRetryWrite === false) {
            return false;
        }
        return this.statements.every(op => op.multi == null || op.multi === false);
    }
    execute(server, session, callback) {
        var _a;
        const options = (_a = this.options) !== null && _a !== void 0 ? _a : {};
        const ordered = typeof options.ordered === 'boolean' ? options.ordered : true;
        const command = {
            update: this.ns.collection,
            updates: this.statements,
            ordered
        };
        if (typeof options.bypassDocumentValidation === 'boolean') {
            command.bypassDocumentValidation = options.bypassDocumentValidation;
        }
        if (options.let) {
            command.let = options.let;
        }
        const statementWithCollation = this.statements.find(statement => !!statement.collation);
        if ((0, utils_1.collationNotSupported)(server, options) ||
            (statementWithCollation && (0, utils_1.collationNotSupported)(server, statementWithCollation))) {
            callback(new error_1.MongoCompatibilityError(`Server ${server.name} does not support collation`));
            return;
        }
        const unacknowledgedWrite = this.writeConcern && this.writeConcern.w === 0;
        if (unacknowledgedWrite || (0, utils_1.maxWireVersion)(server) < 5) {
            if (this.statements.find((o) => o.hint)) {
                callback(new error_1.MongoCompatibilityError(`Servers < 3.4 do not support hint on update`));
                return;
            }
        }
        if (this.explain && (0, utils_1.maxWireVersion)(server) < 3) {
            callback(new error_1.MongoCompatibilityError(`Server ${server.name} does not support explain on update`));
            return;
        }
        if (this.statements.some(statement => !!statement.arrayFilters) && (0, utils_1.maxWireVersion)(server) < 6) {
            callback(new error_1.MongoCompatibilityError('Option "arrayFilters" is only supported on MongoDB 3.6+'));
            return;
        }
        super.executeCommand(server, session, command, callback);
    }
}
exports.UpdateOperation = UpdateOperation;
/** @internal */
class UpdateOneOperation extends UpdateOperation {
    constructor(collection, filter, update, options) {
        super(collection.s.namespace, [makeUpdateStatement(filter, update, { ...options, multi: false })], options);
        if (!(0, utils_1.hasAtomicOperators)(update)) {
            throw new error_1.MongoInvalidArgumentError('Update document requires atomic operators');
        }
    }
    execute(server, session, callback) {
        super.execute(server, session, (err, res) => {
            var _a, _b;
            if (err || !res)
                return callback(err);
            if (this.explain != null)
                return callback(undefined, res);
            if (res.code)
                return callback(new error_1.MongoServerError(res));
            if (res.writeErrors)
                return callback(new error_1.MongoServerError(res.writeErrors[0]));
            callback(undefined, {
                acknowledged: (_b = ((_a = this.writeConcern) === null || _a === void 0 ? void 0 : _a.w) !== 0) !== null && _b !== void 0 ? _b : true,
                modifiedCount: res.nModified != null ? res.nModified : res.n,
                upsertedId: Array.isArray(res.upserted) && res.upserted.length > 0 ? res.upserted[0]._id : null,
                upsertedCount: Array.isArray(res.upserted) && res.upserted.length ? res.upserted.length : 0,
                matchedCount: Array.isArray(res.upserted) && res.upserted.length > 0 ? 0 : res.n
            });
        });
    }
}
exports.UpdateOneOperation = UpdateOneOperation;
/** @internal */
class UpdateManyOperation extends UpdateOperation {
    constructor(collection, filter, update, options) {
        super(collection.s.namespace, [makeUpdateStatement(filter, update, { ...options, multi: true })], options);
        if (!(0, utils_1.hasAtomicOperators)(update)) {
            throw new error_1.MongoInvalidArgumentError('Update document requires atomic operators');
        }
    }
    execute(server, session, callback) {
        super.execute(server, session, (err, res) => {
            var _a, _b;
            if (err || !res)
                return callback(err);
            if (this.explain != null)
                return callback(undefined, res);
            if (res.code)
                return callback(new error_1.MongoServerError(res));
            if (res.writeErrors)
                return callback(new error_1.MongoServerError(res.writeErrors[0]));
            callback(undefined, {
                acknowledged: (_b = ((_a = this.writeConcern) === null || _a === void 0 ? void 0 : _a.w) !== 0) !== null && _b !== void 0 ? _b : true,
                modifiedCount: res.nModified != null ? res.nModified : res.n,
                upsertedId: Array.isArray(res.upserted) && res.upserted.length > 0 ? res.upserted[0]._id : null,
                upsertedCount: Array.isArray(res.upserted) && res.upserted.length ? res.upserted.length : 0,
                matchedCount: Array.isArray(res.upserted) && res.upserted.length > 0 ? 0 : res.n
            });
        });
    }
}
exports.UpdateManyOperation = UpdateManyOperation;
/** @internal */
class ReplaceOneOperation extends UpdateOperation {
    constructor(collection, filter, replacement, options) {
        super(collection.s.namespace, [makeUpdateStatement(filter, replacement, { ...options, multi: false })], options);
        if ((0, utils_1.hasAtomicOperators)(replacement)) {
            throw new error_1.MongoInvalidArgumentError('Replacement document must not contain atomic operators');
        }
    }
    execute(server, session, callback) {
        super.execute(server, session, (err, res) => {
            var _a, _b;
            if (err || !res)
                return callback(err);
            if (this.explain != null)
                return callback(undefined, res);
            if (res.code)
                return callback(new error_1.MongoServerError(res));
            if (res.writeErrors)
                return callback(new error_1.MongoServerError(res.writeErrors[0]));
            callback(undefined, {
                acknowledged: (_b = ((_a = this.writeConcern) === null || _a === void 0 ? void 0 : _a.w) !== 0) !== null && _b !== void 0 ? _b : true,
                modifiedCount: res.nModified != null ? res.nModified : res.n,
                upsertedId: Array.isArray(res.upserted) && res.upserted.length > 0 ? res.upserted[0]._id : null,
                upsertedCount: Array.isArray(res.upserted) && res.upserted.length ? res.upserted.length : 0,
                matchedCount: Array.isArray(res.upserted) && res.upserted.length > 0 ? 0 : res.n
            });
        });
    }
}
exports.ReplaceOneOperation = ReplaceOneOperation;
function makeUpdateStatement(filter, update, options) {
    if (filter == null || typeof filter !== 'object') {
        throw new error_1.MongoInvalidArgumentError('Selector must be a valid JavaScript object');
    }
    if (update == null || typeof update !== 'object') {
        throw new error_1.MongoInvalidArgumentError('Document must be a valid JavaScript object');
    }
    const op = { q: filter, u: update };
    if (typeof options.upsert === 'boolean') {
        op.upsert = options.upsert;
    }
    if (options.multi) {
        op.multi = options.multi;
    }
    if (options.hint) {
        op.hint = options.hint;
    }
    if (options.arrayFilters) {
        op.arrayFilters = options.arrayFilters;
    }
    if (options.collation) {
        op.collation = options.collation;
    }
    return op;
}
exports.makeUpdateStatement = makeUpdateStatement;
(0, operation_1.defineAspects)(UpdateOperation, [operation_1.Aspect.RETRYABLE, operation_1.Aspect.WRITE_OPERATION, operation_1.Aspect.SKIP_COLLATION]);
(0, operation_1.defineAspects)(UpdateOneOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.SKIP_COLLATION
]);
(0, operation_1.defineAspects)(UpdateManyOperation, [
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.SKIP_COLLATION
]);
(0, operation_1.defineAspects)(ReplaceOneOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.SKIP_COLLATION
]);
//# sourceMappingURL=update.js.map
}, function(modId) { var map = {"./operation":1647755346531,"../utils":1647755346512,"./command":1647755346535,"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346576, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteStatement = exports.DeleteManyOperation = exports.DeleteOneOperation = exports.DeleteOperation = void 0;
const operation_1 = require("./operation");
const command_1 = require("./command");
const utils_1 = require("../utils");
const error_1 = require("../error");
/** @internal */
class DeleteOperation extends command_1.CommandOperation {
    constructor(ns, statements, options) {
        super(undefined, options);
        this.options = options;
        this.ns = ns;
        this.statements = statements;
    }
    get canRetryWrite() {
        if (super.canRetryWrite === false) {
            return false;
        }
        return this.statements.every(op => (op.limit != null ? op.limit > 0 : true));
    }
    execute(server, session, callback) {
        var _a;
        const options = (_a = this.options) !== null && _a !== void 0 ? _a : {};
        const ordered = typeof options.ordered === 'boolean' ? options.ordered : true;
        const command = {
            delete: this.ns.collection,
            deletes: this.statements,
            ordered
        };
        if (options.let) {
            command.let = options.let;
        }
        if (options.explain != null && (0, utils_1.maxWireVersion)(server) < 3) {
            return callback
                ? callback(new error_1.MongoCompatibilityError(`Server ${server.name} does not support explain on delete`))
                : undefined;
        }
        const unacknowledgedWrite = this.writeConcern && this.writeConcern.w === 0;
        if (unacknowledgedWrite || (0, utils_1.maxWireVersion)(server) < 5) {
            if (this.statements.find((o) => o.hint)) {
                callback(new error_1.MongoCompatibilityError(`Servers < 3.4 do not support hint on delete`));
                return;
            }
        }
        const statementWithCollation = this.statements.find(statement => !!statement.collation);
        if (statementWithCollation && (0, utils_1.collationNotSupported)(server, statementWithCollation)) {
            callback(new error_1.MongoCompatibilityError(`Server ${server.name} does not support collation`));
            return;
        }
        super.executeCommand(server, session, command, callback);
    }
}
exports.DeleteOperation = DeleteOperation;
class DeleteOneOperation extends DeleteOperation {
    constructor(collection, filter, options) {
        super(collection.s.namespace, [makeDeleteStatement(filter, { ...options, limit: 1 })], options);
    }
    execute(server, session, callback) {
        super.execute(server, session, (err, res) => {
            var _a, _b;
            if (err || res == null)
                return callback(err);
            if (res.code)
                return callback(new error_1.MongoServerError(res));
            if (res.writeErrors)
                return callback(new error_1.MongoServerError(res.writeErrors[0]));
            if (this.explain)
                return callback(undefined, res);
            callback(undefined, {
                acknowledged: (_b = ((_a = this.writeConcern) === null || _a === void 0 ? void 0 : _a.w) !== 0) !== null && _b !== void 0 ? _b : true,
                deletedCount: res.n
            });
        });
    }
}
exports.DeleteOneOperation = DeleteOneOperation;
class DeleteManyOperation extends DeleteOperation {
    constructor(collection, filter, options) {
        super(collection.s.namespace, [makeDeleteStatement(filter, options)], options);
    }
    execute(server, session, callback) {
        super.execute(server, session, (err, res) => {
            var _a, _b;
            if (err || res == null)
                return callback(err);
            if (res.code)
                return callback(new error_1.MongoServerError(res));
            if (res.writeErrors)
                return callback(new error_1.MongoServerError(res.writeErrors[0]));
            if (this.explain)
                return callback(undefined, res);
            callback(undefined, {
                acknowledged: (_b = ((_a = this.writeConcern) === null || _a === void 0 ? void 0 : _a.w) !== 0) !== null && _b !== void 0 ? _b : true,
                deletedCount: res.n
            });
        });
    }
}
exports.DeleteManyOperation = DeleteManyOperation;
function makeDeleteStatement(filter, options) {
    const op = {
        q: filter,
        limit: typeof options.limit === 'number' ? options.limit : 0
    };
    if (options.single === true) {
        op.limit = 1;
    }
    if (options.collation) {
        op.collation = options.collation;
    }
    if (options.hint) {
        op.hint = options.hint;
    }
    if (options.comment) {
        op.comment = options.comment;
    }
    return op;
}
exports.makeDeleteStatement = makeDeleteStatement;
(0, operation_1.defineAspects)(DeleteOperation, [operation_1.Aspect.RETRYABLE, operation_1.Aspect.WRITE_OPERATION]);
(0, operation_1.defineAspects)(DeleteOneOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.SKIP_COLLATION
]);
(0, operation_1.defineAspects)(DeleteManyOperation, [
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.SKIP_COLLATION
]);
//# sourceMappingURL=delete.js.map
}, function(modId) { var map = {"./operation":1647755346531,"./command":1647755346535,"../utils":1647755346512,"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346577, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderedBulkOperation = void 0;
const BSON = require("../bson");
const common_1 = require("./common");
const error_1 = require("../error");
/** @public */
class OrderedBulkOperation extends common_1.BulkOperationBase {
    constructor(collection, options) {
        super(collection, options, true);
    }
    addToOperationsList(batchType, document) {
        // Get the bsonSize
        const bsonSize = BSON.calculateObjectSize(document, {
            checkKeys: false,
            // Since we don't know what the user selected for BSON options here,
            // err on the safe side, and check the size with ignoreUndefined: false.
            ignoreUndefined: false
        });
        // Throw error if the doc is bigger than the max BSON size
        if (bsonSize >= this.s.maxBsonObjectSize)
            // TODO(NODE-3483): Change this to MongoBSONError
            throw new error_1.MongoInvalidArgumentError(`Document is larger than the maximum size ${this.s.maxBsonObjectSize}`);
        // Create a new batch object if we don't have a current one
        if (this.s.currentBatch == null) {
            this.s.currentBatch = new common_1.Batch(batchType, this.s.currentIndex);
        }
        const maxKeySize = this.s.maxKeySize;
        // Check if we need to create a new batch
        if (
        // New batch if we exceed the max batch op size
        this.s.currentBatchSize + 1 >= this.s.maxWriteBatchSize ||
            // New batch if we exceed the maxBatchSizeBytes. Only matters if batch already has a doc,
            // since we can't sent an empty batch
            (this.s.currentBatchSize > 0 &&
                this.s.currentBatchSizeBytes + maxKeySize + bsonSize >= this.s.maxBatchSizeBytes) ||
            // New batch if the new op does not have the same op type as the current batch
            this.s.currentBatch.batchType !== batchType) {
            // Save the batch to the execution stack
            this.s.batches.push(this.s.currentBatch);
            // Create a new batch
            this.s.currentBatch = new common_1.Batch(batchType, this.s.currentIndex);
            // Reset the current size trackers
            this.s.currentBatchSize = 0;
            this.s.currentBatchSizeBytes = 0;
        }
        if (batchType === common_1.BatchType.INSERT) {
            this.s.bulkResult.insertedIds.push({
                index: this.s.currentIndex,
                _id: document._id
            });
        }
        // We have an array of documents
        if (Array.isArray(document)) {
            throw new error_1.MongoInvalidArgumentError('Operation passed in cannot be an Array');
        }
        this.s.currentBatch.originalIndexes.push(this.s.currentIndex);
        this.s.currentBatch.operations.push(document);
        this.s.currentBatchSize += 1;
        this.s.currentBatchSizeBytes += maxKeySize + bsonSize;
        this.s.currentIndex += 1;
        return this;
    }
}
exports.OrderedBulkOperation = OrderedBulkOperation;
//# sourceMappingURL=ordered.js.map
}, function(modId) { var map = {"./common":1647755346571,"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346579, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeStreamCursor = exports.ChangeStream = void 0;
const Denque = require("denque");
const error_1 = require("./error");
const aggregate_1 = require("./operations/aggregate");
const utils_1 = require("./utils");
const mongo_client_1 = require("./mongo_client");
const db_1 = require("./db");
const collection_1 = require("./collection");
const abstract_cursor_1 = require("./cursor/abstract_cursor");
const execute_operation_1 = require("./operations/execute_operation");
const mongo_types_1 = require("./mongo_types");
/** @internal */
const kResumeQueue = Symbol('resumeQueue');
/** @internal */
const kCursorStream = Symbol('cursorStream');
/** @internal */
const kClosed = Symbol('closed');
/** @internal */
const kMode = Symbol('mode');
const CHANGE_STREAM_OPTIONS = ['resumeAfter', 'startAfter', 'startAtOperationTime', 'fullDocument'];
const CURSOR_OPTIONS = ['batchSize', 'maxAwaitTimeMS', 'collation', 'readPreference'].concat(CHANGE_STREAM_OPTIONS);
const CHANGE_DOMAIN_TYPES = {
    COLLECTION: Symbol('Collection'),
    DATABASE: Symbol('Database'),
    CLUSTER: Symbol('Cluster')
};
const NO_RESUME_TOKEN_ERROR = 'A change stream document has been received that lacks a resume token (_id).';
const NO_CURSOR_ERROR = 'ChangeStream has no cursor';
const CHANGESTREAM_CLOSED_ERROR = 'ChangeStream is closed';
/**
 * Creates a new Change Stream instance. Normally created using {@link Collection#watch|Collection.watch()}.
 * @public
 */
class ChangeStream extends mongo_types_1.TypedEventEmitter {
    /**
     * @internal
     *
     * @param parent - The parent object that created this change stream
     * @param pipeline - An array of {@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/|aggregation pipeline stages} through which to pass change stream documents
     */
    constructor(parent, pipeline = [], options = {}) {
        super();
        this.pipeline = pipeline;
        this.options = options;
        if (parent instanceof collection_1.Collection) {
            this.type = CHANGE_DOMAIN_TYPES.COLLECTION;
        }
        else if (parent instanceof db_1.Db) {
            this.type = CHANGE_DOMAIN_TYPES.DATABASE;
        }
        else if (parent instanceof mongo_client_1.MongoClient) {
            this.type = CHANGE_DOMAIN_TYPES.CLUSTER;
        }
        else {
            throw new error_1.MongoChangeStreamError('Parent provided to ChangeStream constructor must be an instance of Collection, Db, or MongoClient');
        }
        this.parent = parent;
        this.namespace = parent.s.namespace;
        if (!this.options.readPreference && parent.readPreference) {
            this.options.readPreference = parent.readPreference;
        }
        this[kResumeQueue] = new Denque();
        // Create contained Change Stream cursor
        this.cursor = createChangeStreamCursor(this, options);
        this[kClosed] = false;
        this[kMode] = false;
        // Listen for any `change` listeners being added to ChangeStream
        this.on('newListener', eventName => {
            if (eventName === 'change' && this.cursor && this.listenerCount('change') === 0) {
                streamEvents(this, this.cursor);
            }
        });
        this.on('removeListener', eventName => {
            var _a;
            if (eventName === 'change' && this.listenerCount('change') === 0 && this.cursor) {
                (_a = this[kCursorStream]) === null || _a === void 0 ? void 0 : _a.removeAllListeners('data');
            }
        });
    }
    /** @internal */
    get cursorStream() {
        return this[kCursorStream];
    }
    /** The cached resume token that is used to resume after the most recently returned change. */
    get resumeToken() {
        var _a;
        return (_a = this.cursor) === null || _a === void 0 ? void 0 : _a.resumeToken;
    }
    hasNext(callback) {
        setIsIterator(this);
        return (0, utils_1.maybePromise)(callback, cb => {
            getCursor(this, (err, cursor) => {
                if (err || !cursor)
                    return cb(err); // failed to resume, raise an error
                cursor.hasNext(cb);
            });
        });
    }
    next(callback) {
        setIsIterator(this);
        return (0, utils_1.maybePromise)(callback, cb => {
            getCursor(this, (err, cursor) => {
                if (err || !cursor)
                    return cb(err); // failed to resume, raise an error
                cursor.next((error, change) => {
                    if (error) {
                        this[kResumeQueue].push(() => this.next(cb));
                        processError(this, error, cb);
                        return;
                    }
                    processNewChange(this, change, cb);
                });
            });
        });
    }
    /** Is the cursor closed */
    get closed() {
        var _a, _b;
        return this[kClosed] || ((_b = (_a = this.cursor) === null || _a === void 0 ? void 0 : _a.closed) !== null && _b !== void 0 ? _b : false);
    }
    /** Close the Change Stream */
    close(callback) {
        this[kClosed] = true;
        return (0, utils_1.maybePromise)(callback, cb => {
            if (!this.cursor) {
                return cb();
            }
            const cursor = this.cursor;
            return cursor.close(err => {
                endStream(this);
                this.cursor = undefined;
                return cb(err);
            });
        });
    }
    /**
     * Return a modified Readable stream including a possible transform method.
     * @throws MongoDriverError if this.cursor is undefined
     */
    stream(options) {
        this.streamOptions = options;
        if (!this.cursor)
            throw new error_1.MongoChangeStreamError(NO_CURSOR_ERROR);
        return this.cursor.stream(options);
    }
    tryNext(callback) {
        setIsIterator(this);
        return (0, utils_1.maybePromise)(callback, cb => {
            getCursor(this, (err, cursor) => {
                if (err || !cursor)
                    return cb(err); // failed to resume, raise an error
                return cursor.tryNext(cb);
            });
        });
    }
}
exports.ChangeStream = ChangeStream;
/** @event */
ChangeStream.RESPONSE = 'response';
/** @event */
ChangeStream.MORE = 'more';
/** @event */
ChangeStream.INIT = 'init';
/** @event */
ChangeStream.CLOSE = 'close';
/**
 * Fired for each new matching change in the specified namespace. Attaching a `change`
 * event listener to a Change Stream will switch the stream into flowing mode. Data will
 * then be passed as soon as it is available.
 * @event
 */
ChangeStream.CHANGE = 'change';
/** @event */
ChangeStream.END = 'end';
/** @event */
ChangeStream.ERROR = 'error';
/**
 * Emitted each time the change stream stores a new resume token.
 * @event
 */
ChangeStream.RESUME_TOKEN_CHANGED = 'resumeTokenChanged';
/** @internal */
class ChangeStreamCursor extends abstract_cursor_1.AbstractCursor {
    constructor(topology, namespace, pipeline = [], options = {}) {
        super(topology, namespace, options);
        this.pipeline = pipeline;
        this.options = options;
        this._resumeToken = null;
        this.startAtOperationTime = options.startAtOperationTime;
        if (options.startAfter) {
            this.resumeToken = options.startAfter;
        }
        else if (options.resumeAfter) {
            this.resumeToken = options.resumeAfter;
        }
    }
    set resumeToken(token) {
        this._resumeToken = token;
        this.emit(ChangeStream.RESUME_TOKEN_CHANGED, token);
    }
    get resumeToken() {
        return this._resumeToken;
    }
    get resumeOptions() {
        const result = {};
        for (const optionName of CURSOR_OPTIONS) {
            if (Reflect.has(this.options, optionName)) {
                Reflect.set(result, optionName, Reflect.get(this.options, optionName));
            }
        }
        if (this.resumeToken || this.startAtOperationTime) {
            ['resumeAfter', 'startAfter', 'startAtOperationTime'].forEach(key => Reflect.deleteProperty(result, key));
            if (this.resumeToken) {
                const resumeKey = this.options.startAfter && !this.hasReceived ? 'startAfter' : 'resumeAfter';
                Reflect.set(result, resumeKey, this.resumeToken);
            }
            else if (this.startAtOperationTime && (0, utils_1.maxWireVersion)(this.server) >= 7) {
                result.startAtOperationTime = this.startAtOperationTime;
            }
        }
        return result;
    }
    cacheResumeToken(resumeToken) {
        if (this.bufferedCount() === 0 && this.postBatchResumeToken) {
            this.resumeToken = this.postBatchResumeToken;
        }
        else {
            this.resumeToken = resumeToken;
        }
        this.hasReceived = true;
    }
    _processBatch(batchName, response) {
        const cursor = (response === null || response === void 0 ? void 0 : response.cursor) || {};
        if (cursor.postBatchResumeToken) {
            this.postBatchResumeToken = cursor.postBatchResumeToken;
            if (cursor[batchName].length === 0) {
                this.resumeToken = cursor.postBatchResumeToken;
            }
        }
    }
    clone() {
        return new ChangeStreamCursor(this.topology, this.namespace, this.pipeline, {
            ...this.cursorOptions
        });
    }
    _initialize(session, callback) {
        const aggregateOperation = new aggregate_1.AggregateOperation(this.namespace, this.pipeline, {
            ...this.cursorOptions,
            ...this.options,
            session
        });
        (0, execute_operation_1.executeOperation)(this.topology, aggregateOperation, (err, response) => {
            if (err || response == null) {
                return callback(err);
            }
            const server = aggregateOperation.server;
            if (this.startAtOperationTime == null &&
                this.resumeAfter == null &&
                this.startAfter == null &&
                (0, utils_1.maxWireVersion)(server) >= 7) {
                this.startAtOperationTime = response.operationTime;
            }
            this._processBatch('firstBatch', response);
            this.emit(ChangeStream.INIT, response);
            this.emit(ChangeStream.RESPONSE);
            // TODO: NODE-2882
            callback(undefined, { server, session, response });
        });
    }
    _getMore(batchSize, callback) {
        super._getMore(batchSize, (err, response) => {
            if (err) {
                return callback(err);
            }
            this._processBatch('nextBatch', response);
            this.emit(ChangeStream.MORE, response);
            this.emit(ChangeStream.RESPONSE);
            callback(err, response);
        });
    }
}
exports.ChangeStreamCursor = ChangeStreamCursor;
const CHANGE_STREAM_EVENTS = [
    ChangeStream.RESUME_TOKEN_CHANGED,
    ChangeStream.END,
    ChangeStream.CLOSE
];
function setIsEmitter(changeStream) {
    if (changeStream[kMode] === 'iterator') {
        // TODO(NODE-3485): Replace with MongoChangeStreamModeError
        throw new error_1.MongoAPIError('ChangeStream cannot be used as an EventEmitter after being used as an iterator');
    }
    changeStream[kMode] = 'emitter';
}
function setIsIterator(changeStream) {
    if (changeStream[kMode] === 'emitter') {
        // TODO(NODE-3485): Replace with MongoChangeStreamModeError
        throw new error_1.MongoAPIError('ChangeStream cannot be used as an iterator after being used as an EventEmitter');
    }
    changeStream[kMode] = 'iterator';
}
/**
 * Create a new change stream cursor based on self's configuration
 * @internal
 */
function createChangeStreamCursor(changeStream, options) {
    const changeStreamStageOptions = { fullDocument: options.fullDocument || 'default' };
    applyKnownOptions(changeStreamStageOptions, options, CHANGE_STREAM_OPTIONS);
    if (changeStream.type === CHANGE_DOMAIN_TYPES.CLUSTER) {
        changeStreamStageOptions.allChangesForCluster = true;
    }
    const pipeline = [{ $changeStream: changeStreamStageOptions }].concat(changeStream.pipeline);
    const cursorOptions = applyKnownOptions({}, options, CURSOR_OPTIONS);
    const changeStreamCursor = new ChangeStreamCursor((0, utils_1.getTopology)(changeStream.parent), changeStream.namespace, pipeline, cursorOptions);
    for (const event of CHANGE_STREAM_EVENTS) {
        changeStreamCursor.on(event, e => changeStream.emit(event, e));
    }
    if (changeStream.listenerCount(ChangeStream.CHANGE) > 0) {
        streamEvents(changeStream, changeStreamCursor);
    }
    return changeStreamCursor;
}
function applyKnownOptions(target, source, optionNames) {
    optionNames.forEach(name => {
        if (source[name]) {
            target[name] = source[name];
        }
    });
    return target;
}
// This method performs a basic server selection loop, satisfying the requirements of
// ChangeStream resumability until the new SDAM layer can be used.
const SELECTION_TIMEOUT = 30000;
function waitForTopologyConnected(topology, options, callback) {
    setTimeout(() => {
        if (options && options.start == null) {
            options.start = (0, utils_1.now)();
        }
        const start = options.start || (0, utils_1.now)();
        const timeout = options.timeout || SELECTION_TIMEOUT;
        if (topology.isConnected()) {
            return callback();
        }
        if ((0, utils_1.calculateDurationInMs)(start) > timeout) {
            // TODO(NODE-3497): Replace with MongoNetworkTimeoutError
            return callback(new error_1.MongoRuntimeError('Timed out waiting for connection'));
        }
        waitForTopologyConnected(topology, options, callback);
    }, 500); // this is an arbitrary wait time to allow SDAM to transition
}
function closeWithError(changeStream, error, callback) {
    if (!callback) {
        changeStream.emit(ChangeStream.ERROR, error);
    }
    changeStream.close(() => callback && callback(error));
}
function streamEvents(changeStream, cursor) {
    setIsEmitter(changeStream);
    const stream = changeStream[kCursorStream] || cursor.stream();
    changeStream[kCursorStream] = stream;
    stream.on('data', change => processNewChange(changeStream, change));
    stream.on('error', error => processError(changeStream, error));
}
function endStream(changeStream) {
    const cursorStream = changeStream[kCursorStream];
    if (cursorStream) {
        ['data', 'close', 'end', 'error'].forEach(event => cursorStream.removeAllListeners(event));
        cursorStream.destroy();
    }
    changeStream[kCursorStream] = undefined;
}
function processNewChange(changeStream, change, callback) {
    var _a;
    if (changeStream[kClosed]) {
        // TODO(NODE-3485): Replace with MongoChangeStreamClosedError
        if (callback)
            callback(new error_1.MongoAPIError(CHANGESTREAM_CLOSED_ERROR));
        return;
    }
    // a null change means the cursor has been notified, implicitly closing the change stream
    if (change == null) {
        // TODO(NODE-3485): Replace with MongoChangeStreamClosedError
        return closeWithError(changeStream, new error_1.MongoRuntimeError(CHANGESTREAM_CLOSED_ERROR), callback);
    }
    if (change && !change._id) {
        return closeWithError(changeStream, new error_1.MongoChangeStreamError(NO_RESUME_TOKEN_ERROR), callback);
    }
    // cache the resume token
    (_a = changeStream.cursor) === null || _a === void 0 ? void 0 : _a.cacheResumeToken(change._id);
    // wipe the startAtOperationTime if there was one so that there won't be a conflict
    // between resumeToken and startAtOperationTime if we need to reconnect the cursor
    changeStream.options.startAtOperationTime = undefined;
    // Return the change
    if (!callback)
        return changeStream.emit(ChangeStream.CHANGE, change);
    return callback(undefined, change);
}
function processError(changeStream, error, callback) {
    const cursor = changeStream.cursor;
    // If the change stream has been closed explicitly, do not process error.
    if (changeStream[kClosed]) {
        // TODO(NODE-3485): Replace with MongoChangeStreamClosedError
        if (callback)
            callback(new error_1.MongoAPIError(CHANGESTREAM_CLOSED_ERROR));
        return;
    }
    // if the resume succeeds, continue with the new cursor
    function resumeWithCursor(newCursor) {
        changeStream.cursor = newCursor;
        processResumeQueue(changeStream);
    }
    // otherwise, raise an error and close the change stream
    function unresumableError(err) {
        if (!callback) {
            changeStream.emit(ChangeStream.ERROR, err);
        }
        changeStream.close(() => processResumeQueue(changeStream, err));
    }
    if (cursor && (0, error_1.isResumableError)(error, (0, utils_1.maxWireVersion)(cursor.server))) {
        changeStream.cursor = undefined;
        // stop listening to all events from old cursor
        endStream(changeStream);
        // close internal cursor, ignore errors
        cursor.close();
        const topology = (0, utils_1.getTopology)(changeStream.parent);
        waitForTopologyConnected(topology, { readPreference: cursor.readPreference }, err => {
            // if the topology can't reconnect, close the stream
            if (err)
                return unresumableError(err);
            // create a new cursor, preserving the old cursor's options
            const newCursor = createChangeStreamCursor(changeStream, cursor.resumeOptions);
            // attempt to continue in emitter mode
            if (!callback)
                return resumeWithCursor(newCursor);
            // attempt to continue in iterator mode
            newCursor.hasNext(err => {
                // if there's an error immediately after resuming, close the stream
                if (err)
                    return unresumableError(err);
                resumeWithCursor(newCursor);
            });
        });
        return;
    }
    // if initial error wasn't resumable, raise an error and close the change stream
    return closeWithError(changeStream, error, callback);
}
/**
 * Safely provides a cursor across resume attempts
 *
 * @param changeStream - the parent ChangeStream
 */
function getCursor(changeStream, callback) {
    if (changeStream[kClosed]) {
        // TODO(NODE-3485): Replace with MongoChangeStreamClosedError
        callback(new error_1.MongoAPIError(CHANGESTREAM_CLOSED_ERROR));
        return;
    }
    // if a cursor exists and it is open, return it
    if (changeStream.cursor) {
        callback(undefined, changeStream.cursor);
        return;
    }
    // no cursor, queue callback until topology reconnects
    changeStream[kResumeQueue].push(callback);
}
/**
 * Drain the resume queue when a new has become available
 *
 * @param changeStream - the parent ChangeStream
 * @param err - error getting a new cursor
 */
function processResumeQueue(changeStream, err) {
    while (changeStream[kResumeQueue].length) {
        const request = changeStream[kResumeQueue].pop();
        if (!request)
            break; // Should never occur but TS can't use the length check in the while condition
        if (!err) {
            if (changeStream[kClosed]) {
                // TODO(NODE-3485): Replace with MongoChangeStreamClosedError
                request(new error_1.MongoAPIError(CHANGESTREAM_CLOSED_ERROR));
                return;
            }
            if (!changeStream.cursor) {
                request(new error_1.MongoChangeStreamError(NO_CURSOR_ERROR));
                return;
            }
        }
        request(err, changeStream.cursor);
    }
}
//# sourceMappingURL=change_stream.js.map
}, function(modId) { var map = {"./error":1647755346514,"./operations/aggregate":1647755346550,"./utils":1647755346512,"./mongo_client":1647755346564,"./db":1647755346565,"./collection":1647755346567,"./cursor/abstract_cursor":1647755346511,"./operations/execute_operation":1647755346530,"./mongo_types":1647755346546}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346580, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CountDocumentsOperation = void 0;
const aggregate_1 = require("./aggregate");
/** @internal */
class CountDocumentsOperation extends aggregate_1.AggregateOperation {
    constructor(collection, query, options) {
        const pipeline = [];
        pipeline.push({ $match: query });
        if (typeof options.skip === 'number') {
            pipeline.push({ $skip: options.skip });
        }
        if (typeof options.limit === 'number') {
            pipeline.push({ $limit: options.limit });
        }
        pipeline.push({ $group: { _id: 1, n: { $sum: 1 } } });
        super(collection.s.namespace, pipeline, options);
    }
    execute(server, session, callback) {
        super.execute(server, session, (err, result) => {
            if (err || !result) {
                callback(err);
                return;
            }
            // NOTE: We're avoiding creating a cursor here to reduce the callstack.
            const response = result;
            if (response.cursor == null || response.cursor.firstBatch == null) {
                callback(undefined, 0);
                return;
            }
            const docs = response.cursor.firstBatch;
            callback(undefined, docs.length ? docs[0].n : 0);
        });
    }
}
exports.CountDocumentsOperation = CountDocumentsOperation;
//# sourceMappingURL=count_documents.js.map
}, function(modId) { var map = {"./aggregate":1647755346550}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346581, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.DistinctOperation = void 0;
const operation_1 = require("./operation");
const command_1 = require("./command");
const utils_1 = require("../utils");
const error_1 = require("../error");
/**
 * Return a list of distinct values for the given key across a collection.
 * @internal
 */
class DistinctOperation extends command_1.CommandOperation {
    /**
     * Construct a Distinct operation.
     *
     * @param collection - Collection instance.
     * @param key - Field of the document to find distinct values for.
     * @param query - The query for filtering the set of documents to which we apply the distinct filter.
     * @param options - Optional settings. See Collection.prototype.distinct for a list of options.
     */
    constructor(collection, key, query, options) {
        super(collection, options);
        this.options = options !== null && options !== void 0 ? options : {};
        this.collection = collection;
        this.key = key;
        this.query = query;
    }
    execute(server, session, callback) {
        const coll = this.collection;
        const key = this.key;
        const query = this.query;
        const options = this.options;
        // Distinct command
        const cmd = {
            distinct: coll.collectionName,
            key: key,
            query: query
        };
        // Add maxTimeMS if defined
        if (typeof options.maxTimeMS === 'number') {
            cmd.maxTimeMS = options.maxTimeMS;
        }
        // Do we have a readConcern specified
        (0, utils_1.decorateWithReadConcern)(cmd, coll, options);
        // Have we specified collation
        try {
            (0, utils_1.decorateWithCollation)(cmd, coll, options);
        }
        catch (err) {
            return callback(err);
        }
        if (this.explain && (0, utils_1.maxWireVersion)(server) < 4) {
            callback(new error_1.MongoCompatibilityError(`Server ${server.name} does not support explain on distinct`));
            return;
        }
        super.executeCommand(server, session, cmd, (err, result) => {
            if (err) {
                callback(err);
                return;
            }
            callback(undefined, this.explain ? result : result.values);
        });
    }
}
exports.DistinctOperation = DistinctOperation;
(0, operation_1.defineAspects)(DistinctOperation, [operation_1.Aspect.READ_OPERATION, operation_1.Aspect.RETRYABLE, operation_1.Aspect.EXPLAINABLE]);
//# sourceMappingURL=distinct.js.map
}, function(modId) { var map = {"./operation":1647755346531,"./command":1647755346535,"../utils":1647755346512,"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346582, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDatabaseOperation = exports.DropCollectionOperation = void 0;
const operation_1 = require("./operation");
const command_1 = require("./command");
/** @internal */
class DropCollectionOperation extends command_1.CommandOperation {
    constructor(db, name, options) {
        super(db, options);
        this.options = options;
        this.name = name;
    }
    execute(server, session, callback) {
        super.executeCommand(server, session, { drop: this.name }, (err, result) => {
            if (err)
                return callback(err);
            if (result.ok)
                return callback(undefined, true);
            callback(undefined, false);
        });
    }
}
exports.DropCollectionOperation = DropCollectionOperation;
/** @internal */
class DropDatabaseOperation extends command_1.CommandOperation {
    constructor(db, options) {
        super(db, options);
        this.options = options;
    }
    execute(server, session, callback) {
        super.executeCommand(server, session, { dropDatabase: 1 }, (err, result) => {
            if (err)
                return callback(err);
            if (result.ok)
                return callback(undefined, true);
            callback(undefined, false);
        });
    }
}
exports.DropDatabaseOperation = DropDatabaseOperation;
(0, operation_1.defineAspects)(DropCollectionOperation, [operation_1.Aspect.WRITE_OPERATION]);
(0, operation_1.defineAspects)(DropDatabaseOperation, [operation_1.Aspect.WRITE_OPERATION]);
//# sourceMappingURL=drop.js.map
}, function(modId) { var map = {"./operation":1647755346531,"./command":1647755346535}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346583, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.EstimatedDocumentCountOperation = void 0;
const operation_1 = require("./operation");
const command_1 = require("./command");
const utils_1 = require("../utils");
/** @internal */
class EstimatedDocumentCountOperation extends command_1.CommandOperation {
    constructor(collection, options = {}) {
        super(collection, options);
        this.options = options;
        this.collectionName = collection.collectionName;
    }
    execute(server, session, callback) {
        if ((0, utils_1.maxWireVersion)(server) < 12) {
            return this.executeLegacy(server, session, callback);
        }
        const pipeline = [{ $collStats: { count: {} } }, { $group: { _id: 1, n: { $sum: '$count' } } }];
        const cmd = { aggregate: this.collectionName, pipeline, cursor: {} };
        if (typeof this.options.maxTimeMS === 'number') {
            cmd.maxTimeMS = this.options.maxTimeMS;
        }
        super.executeCommand(server, session, cmd, (err, response) => {
            var _a, _b;
            if (err && err.code !== 26) {
                callback(err);
                return;
            }
            callback(undefined, ((_b = (_a = response === null || response === void 0 ? void 0 : response.cursor) === null || _a === void 0 ? void 0 : _a.firstBatch[0]) === null || _b === void 0 ? void 0 : _b.n) || 0);
        });
    }
    executeLegacy(server, session, callback) {
        const cmd = { count: this.collectionName };
        if (typeof this.options.maxTimeMS === 'number') {
            cmd.maxTimeMS = this.options.maxTimeMS;
        }
        super.executeCommand(server, session, cmd, (err, response) => {
            if (err) {
                callback(err);
                return;
            }
            callback(undefined, response.n || 0);
        });
    }
}
exports.EstimatedDocumentCountOperation = EstimatedDocumentCountOperation;
(0, operation_1.defineAspects)(EstimatedDocumentCountOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.CURSOR_CREATING
]);
//# sourceMappingURL=estimated_document_count.js.map
}, function(modId) { var map = {"./operation":1647755346531,"./command":1647755346535,"../utils":1647755346512}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346584, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOneAndUpdateOperation = exports.FindOneAndReplaceOperation = exports.FindOneAndDeleteOperation = exports.ReturnDocument = void 0;
const read_preference_1 = require("../read_preference");
const utils_1 = require("../utils");
const error_1 = require("../error");
const command_1 = require("./command");
const operation_1 = require("./operation");
const sort_1 = require("../sort");
/** @public */
exports.ReturnDocument = Object.freeze({
    BEFORE: 'before',
    AFTER: 'after'
});
function configureFindAndModifyCmdBaseUpdateOpts(cmdBase, options) {
    cmdBase.new = options.returnDocument === exports.ReturnDocument.AFTER;
    cmdBase.upsert = options.upsert === true;
    if (options.bypassDocumentValidation === true) {
        cmdBase.bypassDocumentValidation = options.bypassDocumentValidation;
    }
    return cmdBase;
}
/** @internal */
class FindAndModifyOperation extends command_1.CommandOperation {
    constructor(collection, query, options) {
        super(collection, options);
        this.options = options !== null && options !== void 0 ? options : {};
        this.cmdBase = {
            remove: false,
            new: false,
            upsert: false
        };
        const sort = (0, sort_1.formatSort)(options.sort);
        if (sort) {
            this.cmdBase.sort = sort;
        }
        if (options.projection) {
            this.cmdBase.fields = options.projection;
        }
        if (options.maxTimeMS) {
            this.cmdBase.maxTimeMS = options.maxTimeMS;
        }
        // Decorate the findAndModify command with the write Concern
        if (options.writeConcern) {
            this.cmdBase.writeConcern = options.writeConcern;
        }
        if (options.let) {
            this.cmdBase.let = options.let;
        }
        // force primary read preference
        this.readPreference = read_preference_1.ReadPreference.primary;
        this.collection = collection;
        this.query = query;
    }
    execute(server, session, callback) {
        var _a;
        const coll = this.collection;
        const query = this.query;
        const options = { ...this.options, ...this.bsonOptions };
        // Create findAndModify command object
        const cmd = {
            findAndModify: coll.collectionName,
            query: query,
            ...this.cmdBase
        };
        // Have we specified collation
        try {
            (0, utils_1.decorateWithCollation)(cmd, coll, options);
        }
        catch (err) {
            return callback(err);
        }
        if (options.hint) {
            // TODO: once this method becomes a CommandOperation we will have the server
            // in place to check.
            const unacknowledgedWrite = ((_a = this.writeConcern) === null || _a === void 0 ? void 0 : _a.w) === 0;
            if (unacknowledgedWrite || (0, utils_1.maxWireVersion)(server) < 8) {
                callback(new error_1.MongoCompatibilityError('The current topology does not support a hint on findAndModify commands'));
                return;
            }
            cmd.hint = options.hint;
        }
        if (this.explain && (0, utils_1.maxWireVersion)(server) < 4) {
            callback(new error_1.MongoCompatibilityError(`Server ${server.name} does not support explain on findAndModify`));
            return;
        }
        // Execute the command
        super.executeCommand(server, session, cmd, (err, result) => {
            if (err)
                return callback(err);
            return callback(undefined, result);
        });
    }
}
/** @internal */
class FindOneAndDeleteOperation extends FindAndModifyOperation {
    constructor(collection, filter, options) {
        // Basic validation
        if (filter == null || typeof filter !== 'object') {
            throw new error_1.MongoInvalidArgumentError('Argument "filter" must be an object');
        }
        super(collection, filter, options);
        this.cmdBase.remove = true;
    }
}
exports.FindOneAndDeleteOperation = FindOneAndDeleteOperation;
/** @internal */
class FindOneAndReplaceOperation extends FindAndModifyOperation {
    constructor(collection, filter, replacement, options) {
        if (filter == null || typeof filter !== 'object') {
            throw new error_1.MongoInvalidArgumentError('Argument "filter" must be an object');
        }
        if (replacement == null || typeof replacement !== 'object') {
            throw new error_1.MongoInvalidArgumentError('Argument "replacement" must be an object');
        }
        if ((0, utils_1.hasAtomicOperators)(replacement)) {
            throw new error_1.MongoInvalidArgumentError('Replacement document must not contain atomic operators');
        }
        super(collection, filter, options);
        this.cmdBase.update = replacement;
        configureFindAndModifyCmdBaseUpdateOpts(this.cmdBase, options);
    }
}
exports.FindOneAndReplaceOperation = FindOneAndReplaceOperation;
/** @internal */
class FindOneAndUpdateOperation extends FindAndModifyOperation {
    constructor(collection, filter, update, options) {
        if (filter == null || typeof filter !== 'object') {
            throw new error_1.MongoInvalidArgumentError('Argument "filter" must be an object');
        }
        if (update == null || typeof update !== 'object') {
            throw new error_1.MongoInvalidArgumentError('Argument "update" must be an object');
        }
        if (!(0, utils_1.hasAtomicOperators)(update)) {
            throw new error_1.MongoInvalidArgumentError('Update document requires atomic operators');
        }
        super(collection, filter, options);
        this.cmdBase.update = update;
        configureFindAndModifyCmdBaseUpdateOpts(this.cmdBase, options);
        if (options.arrayFilters) {
            this.cmdBase.arrayFilters = options.arrayFilters;
        }
    }
}
exports.FindOneAndUpdateOperation = FindOneAndUpdateOperation;
(0, operation_1.defineAspects)(FindAndModifyOperation, [
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.EXPLAINABLE
]);
//# sourceMappingURL=find_and_modify.js.map
}, function(modId) { var map = {"../read_preference":1647755346519,"../utils":1647755346512,"../error":1647755346514,"./command":1647755346535,"./operation":1647755346531,"../sort":1647755346554}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346585, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCappedOperation = void 0;
const operation_1 = require("./operation");
const error_1 = require("../error");
/** @internal */
class IsCappedOperation extends operation_1.AbstractOperation {
    constructor(collection, options) {
        super(options);
        this.options = options;
        this.collection = collection;
    }
    execute(server, session, callback) {
        const coll = this.collection;
        coll.s.db
            .listCollections({ name: coll.collectionName }, { ...this.options, nameOnly: false, readPreference: this.readPreference, session })
            .toArray((err, collections) => {
            if (err || !collections)
                return callback(err);
            if (collections.length === 0) {
                // TODO(NODE-3485)
                return callback(new error_1.MongoAPIError(`collection ${coll.namespace} not found`));
            }
            const collOptions = collections[0].options;
            callback(undefined, !!(collOptions && collOptions.capped));
        });
    }
}
exports.IsCappedOperation = IsCappedOperation;
//# sourceMappingURL=is_capped.js.map
}, function(modId) { var map = {"./operation":1647755346531,"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346586, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MapReduceOperation = void 0;
const bson_1 = require("../bson");
const utils_1 = require("../utils");
const read_preference_1 = require("../read_preference");
const command_1 = require("./command");
const error_1 = require("../error");
const operation_1 = require("./operation");
const db_1 = require("../db");
const exclusionList = [
    'explain',
    'readPreference',
    'readConcern',
    'session',
    'bypassDocumentValidation',
    'writeConcern',
    'raw',
    'fieldsAsRaw',
    'promoteLongs',
    'promoteValues',
    'promoteBuffers',
    'bsonRegExp',
    'serializeFunctions',
    'ignoreUndefined',
    'scope' // this option is reformatted thus exclude the original
];
/**
 * Run Map Reduce across a collection. Be aware that the inline option for out will return an array of results not a collection.
 * @internal
 */
class MapReduceOperation extends command_1.CommandOperation {
    /**
     * Constructs a MapReduce operation.
     *
     * @param collection - Collection instance.
     * @param map - The mapping function.
     * @param reduce - The reduce function.
     * @param options - Optional settings. See Collection.prototype.mapReduce for a list of options.
     */
    constructor(collection, map, reduce, options) {
        super(collection, options);
        this.options = options !== null && options !== void 0 ? options : {};
        this.collection = collection;
        this.map = map;
        this.reduce = reduce;
    }
    execute(server, session, callback) {
        const coll = this.collection;
        const map = this.map;
        const reduce = this.reduce;
        let options = this.options;
        const mapCommandHash = {
            mapReduce: coll.collectionName,
            map: map,
            reduce: reduce
        };
        if (options.scope) {
            mapCommandHash.scope = processScope(options.scope);
        }
        // Add any other options passed in
        for (const n in options) {
            // Only include if not in exclusion list
            if (exclusionList.indexOf(n) === -1) {
                mapCommandHash[n] = options[n];
            }
        }
        options = Object.assign({}, options);
        // If we have a read preference and inline is not set as output fail hard
        if (this.readPreference.mode === read_preference_1.ReadPreferenceMode.primary &&
            options.out &&
            options.out.inline !== 1 &&
            options.out !== 'inline') {
            // Force readPreference to primary
            options.readPreference = read_preference_1.ReadPreference.primary;
            // Decorate command with writeConcern if supported
            (0, utils_1.applyWriteConcern)(mapCommandHash, { db: coll.s.db, collection: coll }, options);
        }
        else {
            (0, utils_1.decorateWithReadConcern)(mapCommandHash, coll, options);
        }
        // Is bypassDocumentValidation specified
        if (options.bypassDocumentValidation === true) {
            mapCommandHash.bypassDocumentValidation = options.bypassDocumentValidation;
        }
        // Have we specified collation
        try {
            (0, utils_1.decorateWithCollation)(mapCommandHash, coll, options);
        }
        catch (err) {
            return callback(err);
        }
        if (this.explain && (0, utils_1.maxWireVersion)(server) < 9) {
            callback(new error_1.MongoCompatibilityError(`Server ${server.name} does not support explain on mapReduce`));
            return;
        }
        // Execute command
        super.executeCommand(server, session, mapCommandHash, (err, result) => {
            if (err)
                return callback(err);
            // Check if we have an error
            if (1 !== result.ok || result.err || result.errmsg) {
                return callback(new error_1.MongoServerError(result));
            }
            // If an explain option was executed, don't process the server results
            if (this.explain)
                return callback(undefined, result);
            // Create statistics value
            const stats = {};
            if (result.timeMillis)
                stats['processtime'] = result.timeMillis;
            if (result.counts)
                stats['counts'] = result.counts;
            if (result.timing)
                stats['timing'] = result.timing;
            // invoked with inline?
            if (result.results) {
                // If we wish for no verbosity
                if (options['verbose'] == null || !options['verbose']) {
                    return callback(undefined, result.results);
                }
                return callback(undefined, { results: result.results, stats: stats });
            }
            // The returned collection
            let collection = null;
            // If we have an object it's a different db
            if (result.result != null && typeof result.result === 'object') {
                const doc = result.result;
                // Return a collection from another db
                collection = new db_1.Db(coll.s.db.s.client, doc.db, coll.s.db.s.options).collection(doc.collection);
            }
            else {
                // Create a collection object that wraps the result collection
                collection = coll.s.db.collection(result.result);
            }
            // If we wish for no verbosity
            if (options['verbose'] == null || !options['verbose']) {
                return callback(err, collection);
            }
            // Return stats as third set of values
            callback(err, { collection, stats });
        });
    }
}
exports.MapReduceOperation = MapReduceOperation;
/** Functions that are passed as scope args must be converted to Code instances. */
function processScope(scope) {
    if (!(0, utils_1.isObject)(scope) || scope._bsontype === 'ObjectID') {
        return scope;
    }
    const newScope = {};
    for (const key of Object.keys(scope)) {
        if ('function' === typeof scope[key]) {
            newScope[key] = new bson_1.Code(String(scope[key]));
        }
        else if (scope[key]._bsontype === 'Code') {
            newScope[key] = scope[key];
        }
        else {
            newScope[key] = processScope(scope[key]);
        }
    }
    return newScope;
}
(0, operation_1.defineAspects)(MapReduceOperation, [operation_1.Aspect.EXPLAINABLE]);
//# sourceMappingURL=map_reduce.js.map
}, function(modId) { var map = {"../utils":1647755346512,"../read_preference":1647755346519,"./command":1647755346535,"../error":1647755346514,"./operation":1647755346531,"../db":1647755346565}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346588, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsOperation = void 0;
const operation_1 = require("./operation");
const error_1 = require("../error");
/** @internal */
class OptionsOperation extends operation_1.AbstractOperation {
    constructor(collection, options) {
        super(options);
        this.options = options;
        this.collection = collection;
    }
    execute(server, session, callback) {
        const coll = this.collection;
        coll.s.db
            .listCollections({ name: coll.collectionName }, { ...this.options, nameOnly: false, readPreference: this.readPreference, session })
            .toArray((err, collections) => {
            if (err || !collections)
                return callback(err);
            if (collections.length === 0) {
                // TODO(NODE-3485)
                return callback(new error_1.MongoAPIError(`collection ${coll.namespace} not found`));
            }
            callback(err, collections[0].options);
        });
    }
}
exports.OptionsOperation = OptionsOperation;
//# sourceMappingURL=options_operation.js.map
}, function(modId) { var map = {"./operation":1647755346531,"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346589, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.RenameOperation = void 0;
const utils_1 = require("../utils");
const run_command_1 = require("./run_command");
const operation_1 = require("./operation");
const collection_1 = require("../collection");
const error_1 = require("../error");
/** @internal */
class RenameOperation extends run_command_1.RunAdminCommandOperation {
    constructor(collection, newName, options) {
        // Check the collection name
        (0, utils_1.checkCollectionName)(newName);
        // Build the command
        const renameCollection = collection.namespace;
        const toCollection = collection.s.namespace.withCollection(newName).toString();
        const dropTarget = typeof options.dropTarget === 'boolean' ? options.dropTarget : false;
        const cmd = { renameCollection: renameCollection, to: toCollection, dropTarget: dropTarget };
        super(collection, cmd, options);
        this.options = options;
        this.collection = collection;
        this.newName = newName;
    }
    execute(server, session, callback) {
        const coll = this.collection;
        super.execute(server, session, (err, doc) => {
            if (err)
                return callback(err);
            // We have an error
            if (doc.errmsg) {
                return callback(new error_1.MongoServerError(doc));
            }
            let newColl;
            try {
                newColl = new collection_1.Collection(coll.s.db, this.newName, coll.s.options);
            }
            catch (err) {
                return callback(err);
            }
            return callback(undefined, newColl);
        });
    }
}
exports.RenameOperation = RenameOperation;
(0, operation_1.defineAspects)(RenameOperation, [operation_1.Aspect.WRITE_OPERATION]);
//# sourceMappingURL=rename.js.map
}, function(modId) { var map = {"../utils":1647755346512,"./run_command":1647755346534,"./operation":1647755346531,"../collection":1647755346567,"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346590, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.DbStatsOperation = exports.CollStatsOperation = void 0;
const operation_1 = require("./operation");
const command_1 = require("./command");
/**
 * Get all the collection statistics.
 * @internal
 */
class CollStatsOperation extends command_1.CommandOperation {
    /**
     * Construct a Stats operation.
     *
     * @param collection - Collection instance
     * @param options - Optional settings. See Collection.prototype.stats for a list of options.
     */
    constructor(collection, options) {
        super(collection, options);
        this.options = options !== null && options !== void 0 ? options : {};
        this.collectionName = collection.collectionName;
    }
    execute(server, session, callback) {
        const command = { collStats: this.collectionName };
        if (this.options.scale != null) {
            command.scale = this.options.scale;
        }
        super.executeCommand(server, session, command, callback);
    }
}
exports.CollStatsOperation = CollStatsOperation;
/** @internal */
class DbStatsOperation extends command_1.CommandOperation {
    constructor(db, options) {
        super(db, options);
        this.options = options;
    }
    execute(server, session, callback) {
        const command = { dbStats: true };
        if (this.options.scale != null) {
            command.scale = this.options.scale;
        }
        super.executeCommand(server, session, command, callback);
    }
}
exports.DbStatsOperation = DbStatsOperation;
(0, operation_1.defineAspects)(CollStatsOperation, [operation_1.Aspect.READ_OPERATION]);
(0, operation_1.defineAspects)(DbStatsOperation, [operation_1.Aspect.READ_OPERATION]);
//# sourceMappingURL=stats.js.map
}, function(modId) { var map = {"./operation":1647755346531,"./command":1647755346535}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346591, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LoggerLevel = void 0;
const util_1 = require("util");
const utils_1 = require("./utils");
const error_1 = require("./error");
// Filters for classes
const classFilters = {};
let filteredClasses = {};
let level;
// Save the process id
const pid = process.pid;
// current logger
// eslint-disable-next-line no-console
let currentLogger = console.warn;
/** @public */
exports.LoggerLevel = Object.freeze({
    ERROR: 'error',
    WARN: 'warn',
    INFO: 'info',
    DEBUG: 'debug',
    error: 'error',
    warn: 'warn',
    info: 'info',
    debug: 'debug'
});
/**
 * @public
 */
class Logger {
    /**
     * Creates a new Logger instance
     *
     * @param className - The Class name associated with the logging instance
     * @param options - Optional logging settings
     */
    constructor(className, options) {
        options = options !== null && options !== void 0 ? options : {};
        // Current reference
        this.className = className;
        // Current logger
        if (!(options.logger instanceof Logger) && typeof options.logger === 'function') {
            currentLogger = options.logger;
        }
        // Set level of logging, default is error
        if (options.loggerLevel) {
            level = options.loggerLevel || exports.LoggerLevel.ERROR;
        }
        // Add all class names
        if (filteredClasses[this.className] == null) {
            classFilters[this.className] = true;
        }
    }
    /**
     * Log a message at the debug level
     *
     * @param message - The message to log
     * @param object - Additional meta data to log
     */
    debug(message, object) {
        if (this.isDebug() &&
            ((Object.keys(filteredClasses).length > 0 && filteredClasses[this.className]) ||
                (Object.keys(filteredClasses).length === 0 && classFilters[this.className]))) {
            const dateTime = new Date().getTime();
            const msg = (0, util_1.format)('[%s-%s:%s] %s %s', 'DEBUG', this.className, pid, dateTime, message);
            const state = {
                type: exports.LoggerLevel.DEBUG,
                message,
                className: this.className,
                pid,
                date: dateTime
            };
            if (object)
                state.meta = object;
            currentLogger(msg, state);
        }
    }
    /**
     * Log a message at the warn level
     *
     * @param message - The message to log
     * @param object - Additional meta data to log
     */
    warn(message, object) {
        if (this.isWarn() &&
            ((Object.keys(filteredClasses).length > 0 && filteredClasses[this.className]) ||
                (Object.keys(filteredClasses).length === 0 && classFilters[this.className]))) {
            const dateTime = new Date().getTime();
            const msg = (0, util_1.format)('[%s-%s:%s] %s %s', 'WARN', this.className, pid, dateTime, message);
            const state = {
                type: exports.LoggerLevel.WARN,
                message,
                className: this.className,
                pid,
                date: dateTime
            };
            if (object)
                state.meta = object;
            currentLogger(msg, state);
        }
    }
    /**
     * Log a message at the info level
     *
     * @param message - The message to log
     * @param object - Additional meta data to log
     */
    info(message, object) {
        if (this.isInfo() &&
            ((Object.keys(filteredClasses).length > 0 && filteredClasses[this.className]) ||
                (Object.keys(filteredClasses).length === 0 && classFilters[this.className]))) {
            const dateTime = new Date().getTime();
            const msg = (0, util_1.format)('[%s-%s:%s] %s %s', 'INFO', this.className, pid, dateTime, message);
            const state = {
                type: exports.LoggerLevel.INFO,
                message,
                className: this.className,
                pid,
                date: dateTime
            };
            if (object)
                state.meta = object;
            currentLogger(msg, state);
        }
    }
    /**
     * Log a message at the error level
     *
     * @param message - The message to log
     * @param object - Additional meta data to log
     */
    error(message, object) {
        if (this.isError() &&
            ((Object.keys(filteredClasses).length > 0 && filteredClasses[this.className]) ||
                (Object.keys(filteredClasses).length === 0 && classFilters[this.className]))) {
            const dateTime = new Date().getTime();
            const msg = (0, util_1.format)('[%s-%s:%s] %s %s', 'ERROR', this.className, pid, dateTime, message);
            const state = {
                type: exports.LoggerLevel.ERROR,
                message,
                className: this.className,
                pid,
                date: dateTime
            };
            if (object)
                state.meta = object;
            currentLogger(msg, state);
        }
    }
    /** Is the logger set at info level */
    isInfo() {
        return level === exports.LoggerLevel.INFO || level === exports.LoggerLevel.DEBUG;
    }
    /** Is the logger set at error level */
    isError() {
        return level === exports.LoggerLevel.ERROR || level === exports.LoggerLevel.INFO || level === exports.LoggerLevel.DEBUG;
    }
    /** Is the logger set at error level */
    isWarn() {
        return (level === exports.LoggerLevel.ERROR ||
            level === exports.LoggerLevel.WARN ||
            level === exports.LoggerLevel.INFO ||
            level === exports.LoggerLevel.DEBUG);
    }
    /** Is the logger set at debug level */
    isDebug() {
        return level === exports.LoggerLevel.DEBUG;
    }
    /** Resets the logger to default settings, error and no filtered classes */
    static reset() {
        level = exports.LoggerLevel.ERROR;
        filteredClasses = {};
    }
    /** Get the current logger function */
    static currentLogger() {
        return currentLogger;
    }
    /**
     * Set the current logger function
     *
     * @param logger - Custom logging function
     */
    static setCurrentLogger(logger) {
        if (typeof logger !== 'function') {
            throw new error_1.MongoInvalidArgumentError('Current logger must be a function');
        }
        currentLogger = logger;
    }
    /**
     * Filter log messages for a particular class
     *
     * @param type - The type of filter (currently only class)
     * @param values - The filters to apply
     */
    static filter(type, values) {
        if (type === 'class' && Array.isArray(values)) {
            filteredClasses = {};
            values.forEach(x => (filteredClasses[x] = true));
        }
    }
    /**
     * Set the current log level
     *
     * @param newLevel - Set current log level (debug, warn, info, error)
     */
    static setLevel(newLevel) {
        if (newLevel !== exports.LoggerLevel.INFO &&
            newLevel !== exports.LoggerLevel.ERROR &&
            newLevel !== exports.LoggerLevel.DEBUG &&
            newLevel !== exports.LoggerLevel.WARN) {
            throw new error_1.MongoInvalidArgumentError(`Argument "newLevel" should be one of ${(0, utils_1.enumToString)(exports.LoggerLevel)}`);
        }
        level = newLevel;
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map
}, function(modId) { var map = {"./utils":1647755346512,"./error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346592, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsOperation = void 0;
const operation_1 = require("./operation");
const collection_1 = require("../collection");
/** @internal */
class CollectionsOperation extends operation_1.AbstractOperation {
    constructor(db, options) {
        super(options);
        this.options = options;
        this.db = db;
    }
    execute(server, session, callback) {
        const db = this.db;
        // Let's get the collection names
        db.listCollections({}, { ...this.options, nameOnly: true, readPreference: this.readPreference, session }).toArray((err, documents) => {
            if (err || !documents)
                return callback(err);
            // Filter collections removing any illegal ones
            documents = documents.filter(doc => doc.name.indexOf('$') === -1);
            // Return the collection objects
            callback(undefined, documents.map(d => {
                return new collection_1.Collection(db, d.name, db.s.options);
            }));
        });
    }
}
exports.CollectionsOperation = CollectionsOperation;
//# sourceMappingURL=collections.js.map
}, function(modId) { var map = {"./operation":1647755346531,"../collection":1647755346567}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346593, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCollectionOperation = void 0;
const command_1 = require("./command");
const operation_1 = require("./operation");
const collection_1 = require("../collection");
const ILLEGAL_COMMAND_FIELDS = new Set([
    'w',
    'wtimeout',
    'j',
    'fsync',
    'autoIndexId',
    'pkFactory',
    'raw',
    'readPreference',
    'session',
    'readConcern',
    'writeConcern',
    'raw',
    'fieldsAsRaw',
    'promoteLongs',
    'promoteValues',
    'promoteBuffers',
    'bsonRegExp',
    'serializeFunctions',
    'ignoreUndefined'
]);
/** @internal */
class CreateCollectionOperation extends command_1.CommandOperation {
    constructor(db, name, options = {}) {
        super(db, options);
        this.options = options;
        this.db = db;
        this.name = name;
    }
    execute(server, session, callback) {
        const db = this.db;
        const name = this.name;
        const options = this.options;
        const done = err => {
            if (err) {
                return callback(err);
            }
            callback(undefined, new collection_1.Collection(db, name, options));
        };
        const cmd = { create: name };
        for (const n in options) {
            if (options[n] != null &&
                typeof options[n] !== 'function' &&
                !ILLEGAL_COMMAND_FIELDS.has(n)) {
                cmd[n] = options[n];
            }
        }
        // otherwise just execute the command
        super.executeCommand(server, session, cmd, done);
    }
}
exports.CreateCollectionOperation = CreateCollectionOperation;
(0, operation_1.defineAspects)(CreateCollectionOperation, [operation_1.Aspect.WRITE_OPERATION]);
//# sourceMappingURL=create_collection.js.map
}, function(modId) { var map = {"./command":1647755346535,"./operation":1647755346531,"../collection":1647755346567}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346594, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilingLevelOperation = void 0;
const command_1 = require("./command");
const error_1 = require("../error");
/** @internal */
class ProfilingLevelOperation extends command_1.CommandOperation {
    constructor(db, options) {
        super(db, options);
        this.options = options;
    }
    execute(server, session, callback) {
        super.executeCommand(server, session, { profile: -1 }, (err, doc) => {
            if (err == null && doc.ok === 1) {
                const was = doc.was;
                if (was === 0)
                    return callback(undefined, 'off');
                if (was === 1)
                    return callback(undefined, 'slow_only');
                if (was === 2)
                    return callback(undefined, 'all');
                // TODO(NODE-3483)
                return callback(new error_1.MongoRuntimeError(`Illegal profiling level value ${was}`));
            }
            else {
                // TODO(NODE-3483): Consider MongoUnexpectedServerResponseError
                err != null ? callback(err) : callback(new error_1.MongoRuntimeError('Error with profile command'));
            }
        });
    }
}
exports.ProfilingLevelOperation = ProfilingLevelOperation;
//# sourceMappingURL=profiling_level.js.map
}, function(modId) { var map = {"./command":1647755346535,"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346595, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.SetProfilingLevelOperation = exports.ProfilingLevel = void 0;
const command_1 = require("./command");
const utils_1 = require("../utils");
const error_1 = require("../error");
const levelValues = new Set(['off', 'slow_only', 'all']);
/** @public */
exports.ProfilingLevel = Object.freeze({
    off: 'off',
    slowOnly: 'slow_only',
    all: 'all'
});
/** @internal */
class SetProfilingLevelOperation extends command_1.CommandOperation {
    constructor(db, level, options) {
        super(db, options);
        this.options = options;
        switch (level) {
            case exports.ProfilingLevel.off:
                this.profile = 0;
                break;
            case exports.ProfilingLevel.slowOnly:
                this.profile = 1;
                break;
            case exports.ProfilingLevel.all:
                this.profile = 2;
                break;
            default:
                this.profile = 0;
                break;
        }
        this.level = level;
    }
    execute(server, session, callback) {
        const level = this.level;
        if (!levelValues.has(level)) {
            return callback(new error_1.MongoInvalidArgumentError(`Profiling level must be one of "${(0, utils_1.enumToString)(exports.ProfilingLevel)}"`));
        }
        // TODO(NODE-3483): Determine error to put here
        super.executeCommand(server, session, { profile: this.profile }, (err, doc) => {
            if (err == null && doc.ok === 1)
                return callback(undefined, level);
            return err != null
                ? callback(err)
                : callback(new error_1.MongoRuntimeError('Error with profile command'));
        });
    }
}
exports.SetProfilingLevelOperation = SetProfilingLevelOperation;
//# sourceMappingURL=set_profiling_level.js.map
}, function(modId) { var map = {"./command":1647755346535,"../utils":1647755346512,"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346596, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.MONGO_CLIENT_EVENTS = void 0;
const error_1 = require("../error");
const topology_1 = require("../sdam/topology");
const connection_string_1 = require("../connection_string");
const connection_pool_1 = require("../cmap/connection_pool");
const connection_1 = require("../cmap/connection");
const server_1 = require("../sdam/server");
/** @public */
exports.MONGO_CLIENT_EVENTS = [
    ...connection_pool_1.CMAP_EVENTS,
    ...connection_1.APM_EVENTS,
    ...topology_1.TOPOLOGY_EVENTS,
    ...server_1.HEARTBEAT_EVENTS
];
function connect(mongoClient, options, callback) {
    if (!callback) {
        throw new error_1.MongoInvalidArgumentError('Callback function must be provided');
    }
    // If a connection already been established, we can terminate early
    if (mongoClient.topology && mongoClient.topology.isConnected()) {
        return callback(undefined, mongoClient);
    }
    const logger = mongoClient.logger;
    const connectCallback = err => {
        const warningMessage = 'seed list contains no mongos proxies, replicaset connections requires ' +
            'the parameter replicaSet to be supplied in the URI or options object, ' +
            'mongodb://server:port/db?replicaSet=name';
        if (err && err.message === 'no mongos proxies found in seed list') {
            if (logger.isWarn()) {
                logger.warn(warningMessage);
            }
            // Return a more specific error message for MongoClient.connect
            // TODO(NODE-3483)
            return callback(new error_1.MongoRuntimeError(warningMessage));
        }
        callback(err, mongoClient);
    };
    if (typeof options.srvHost === 'string') {
        return (0, connection_string_1.resolveSRVRecord)(options, (err, hosts) => {
            if (err || !hosts)
                return callback(err);
            for (const [index, host] of hosts.entries()) {
                options.hosts[index] = host;
            }
            return createTopology(mongoClient, options, connectCallback);
        });
    }
    return createTopology(mongoClient, options, connectCallback);
}
exports.connect = connect;
function createTopology(mongoClient, options, callback) {
    // Create the topology
    const topology = new topology_1.Topology(options.hosts, options);
    // Events can be emitted before initialization is complete so we have to
    // save the reference to the topology on the client ASAP if the event handlers need to access it
    mongoClient.topology = topology;
    topology.once(topology_1.Topology.OPEN, () => mongoClient.emit('open', mongoClient));
    for (const event of exports.MONGO_CLIENT_EVENTS) {
        topology.on(event, (...args) => mongoClient.emit(event, ...args));
    }
    // initialize CSFLE if requested
    if (mongoClient.autoEncrypter) {
        mongoClient.autoEncrypter.init(err => {
            if (err) {
                return callback(err);
            }
            topology.connect(options, err => {
                if (err) {
                    topology.close({ force: true });
                    return callback(err);
                }
                options.encrypter.connectInternalClient(error => {
                    if (error)
                        return callback(error);
                    callback(undefined, topology);
                });
            });
        });
        return;
    }
    // otherwise connect normally
    topology.connect(options, err => {
        if (err) {
            topology.close({ force: true });
            return callback(err);
        }
        callback(undefined, topology);
        return;
    });
}
//# sourceMappingURL=connect.js.map
}, function(modId) { var map = {"../error":1647755346514,"../sdam/topology":1647755346597,"../cmap/connection_pool":1647755346599,"../cmap/connection":1647755346537,"../sdam/server":1647755346598}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346597, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerCapabilities = exports.TOPOLOGY_EVENTS = exports.Topology = void 0;
const Denque = require("denque");
const read_preference_1 = require("../read_preference");
const server_description_1 = require("./server_description");
const topology_description_1 = require("./topology_description");
const server_1 = require("./server");
const sessions_1 = require("../sessions");
const srv_polling_1 = require("./srv_polling");
const connection_pool_1 = require("../cmap/connection_pool");
const error_1 = require("../error");
const server_selection_1 = require("./server_selection");
const utils_1 = require("../utils");
const common_1 = require("./common");
const events_1 = require("./events");
const connection_1 = require("../cmap/connection");
const connection_string_1 = require("../connection_string");
const bson_1 = require("../bson");
const mongo_types_1 = require("../mongo_types");
// Global state
let globalTopologyCounter = 0;
// events that we relay to the `Topology`
const SERVER_RELAY_EVENTS = [
    server_1.Server.SERVER_HEARTBEAT_STARTED,
    server_1.Server.SERVER_HEARTBEAT_SUCCEEDED,
    server_1.Server.SERVER_HEARTBEAT_FAILED,
    connection_1.Connection.COMMAND_STARTED,
    connection_1.Connection.COMMAND_SUCCEEDED,
    connection_1.Connection.COMMAND_FAILED,
    ...connection_pool_1.CMAP_EVENTS
];
// all events we listen to from `Server` instances
const LOCAL_SERVER_EVENTS = [
    server_1.Server.CONNECT,
    server_1.Server.DESCRIPTION_RECEIVED,
    server_1.Server.CLOSED,
    server_1.Server.ENDED
];
const stateTransition = (0, utils_1.makeStateMachine)({
    [common_1.STATE_CLOSED]: [common_1.STATE_CLOSED, common_1.STATE_CONNECTING],
    [common_1.STATE_CONNECTING]: [common_1.STATE_CONNECTING, common_1.STATE_CLOSING, common_1.STATE_CONNECTED, common_1.STATE_CLOSED],
    [common_1.STATE_CONNECTED]: [common_1.STATE_CONNECTED, common_1.STATE_CLOSING, common_1.STATE_CLOSED],
    [common_1.STATE_CLOSING]: [common_1.STATE_CLOSING, common_1.STATE_CLOSED]
});
/** @internal */
const kCancelled = Symbol('cancelled');
/** @internal */
const kWaitQueue = Symbol('waitQueue');
/**
 * A container of server instances representing a connection to a MongoDB topology.
 * @internal
 */
class Topology extends mongo_types_1.TypedEventEmitter {
    /**
     * @param seedlist - a list of HostAddress instances to connect to
     */
    constructor(seeds, options) {
        var _a;
        super();
        // Legacy CSFLE support
        this.bson = Object.create(null);
        this.bson.serialize = bson_1.serialize;
        this.bson.deserialize = bson_1.deserialize;
        // Options should only be undefined in tests, MongoClient will always have defined options
        options = options !== null && options !== void 0 ? options : {
            hosts: [utils_1.HostAddress.fromString('localhost:27017')],
            retryReads: connection_string_1.DEFAULT_OPTIONS.get('retryReads'),
            retryWrites: connection_string_1.DEFAULT_OPTIONS.get('retryWrites'),
            serverSelectionTimeoutMS: connection_string_1.DEFAULT_OPTIONS.get('serverSelectionTimeoutMS'),
            directConnection: connection_string_1.DEFAULT_OPTIONS.get('directConnection'),
            loadBalanced: connection_string_1.DEFAULT_OPTIONS.get('loadBalanced'),
            metadata: connection_string_1.DEFAULT_OPTIONS.get('metadata'),
            monitorCommands: connection_string_1.DEFAULT_OPTIONS.get('monitorCommands'),
            tls: connection_string_1.DEFAULT_OPTIONS.get('tls'),
            maxPoolSize: connection_string_1.DEFAULT_OPTIONS.get('maxPoolSize'),
            minPoolSize: connection_string_1.DEFAULT_OPTIONS.get('minPoolSize'),
            waitQueueTimeoutMS: connection_string_1.DEFAULT_OPTIONS.get('waitQueueTimeoutMS'),
            connectionType: connection_string_1.DEFAULT_OPTIONS.get('connectionType'),
            connectTimeoutMS: connection_string_1.DEFAULT_OPTIONS.get('connectTimeoutMS'),
            maxIdleTimeMS: connection_string_1.DEFAULT_OPTIONS.get('maxIdleTimeMS'),
            heartbeatFrequencyMS: connection_string_1.DEFAULT_OPTIONS.get('heartbeatFrequencyMS'),
            minHeartbeatFrequencyMS: connection_string_1.DEFAULT_OPTIONS.get('minHeartbeatFrequencyMS')
        };
        if (typeof seeds === 'string') {
            seeds = [utils_1.HostAddress.fromString(seeds)];
        }
        else if (!Array.isArray(seeds)) {
            seeds = [seeds];
        }
        const seedlist = [];
        for (const seed of seeds) {
            if (typeof seed === 'string') {
                seedlist.push(utils_1.HostAddress.fromString(seed));
            }
            else if (seed instanceof utils_1.HostAddress) {
                seedlist.push(seed);
            }
            else {
                // FIXME(NODE-3483): May need to be a MongoParseError
                throw new error_1.MongoRuntimeError(`Topology cannot be constructed from ${JSON.stringify(seed)}`);
            }
        }
        const topologyType = topologyTypeFromOptions(options);
        const topologyId = globalTopologyCounter++;
        const selectedHosts = options.srvMaxHosts == null ||
            options.srvMaxHosts === 0 ||
            options.srvMaxHosts >= seedlist.length
            ? seedlist
            : (0, utils_1.shuffle)(seedlist, options.srvMaxHosts);
        const serverDescriptions = new Map();
        for (const hostAddress of selectedHosts) {
            serverDescriptions.set(hostAddress.toString(), new server_description_1.ServerDescription(hostAddress));
        }
        this[kWaitQueue] = new Denque();
        this.s = {
            // the id of this topology
            id: topologyId,
            // passed in options
            options,
            // initial seedlist of servers to connect to
            seedlist,
            // initial state
            state: common_1.STATE_CLOSED,
            // the topology description
            description: new topology_description_1.TopologyDescription(topologyType, serverDescriptions, options.replicaSet, undefined, undefined, undefined, options),
            serverSelectionTimeoutMS: options.serverSelectionTimeoutMS,
            heartbeatFrequencyMS: options.heartbeatFrequencyMS,
            minHeartbeatFrequencyMS: options.minHeartbeatFrequencyMS,
            // a map of server instances to normalized addresses
            servers: new Map(),
            // Server Session Pool
            sessionPool: new sessions_1.ServerSessionPool(this),
            // Active client sessions
            sessions: new Set(),
            credentials: options === null || options === void 0 ? void 0 : options.credentials,
            clusterTime: undefined,
            // timer management
            connectionTimers: new Set(),
            detectShardedTopology: ev => this.detectShardedTopology(ev),
            detectSrvRecords: ev => this.detectSrvRecords(ev)
        };
        if (options.srvHost && !options.loadBalanced) {
            this.s.srvPoller =
                (_a = options.srvPoller) !== null && _a !== void 0 ? _a : new srv_polling_1.SrvPoller({
                    heartbeatFrequencyMS: this.s.heartbeatFrequencyMS,
                    srvHost: options.srvHost,
                    srvMaxHosts: options.srvMaxHosts,
                    srvServiceName: options.srvServiceName
                });
            this.on(Topology.TOPOLOGY_DESCRIPTION_CHANGED, this.s.detectShardedTopology);
        }
    }
    detectShardedTopology(event) {
        var _a, _b, _c;
        const previousType = event.previousDescription.type;
        const newType = event.newDescription.type;
        const transitionToSharded = previousType !== common_1.TopologyType.Sharded && newType === common_1.TopologyType.Sharded;
        const srvListeners = (_a = this.s.srvPoller) === null || _a === void 0 ? void 0 : _a.listeners(srv_polling_1.SrvPoller.SRV_RECORD_DISCOVERY);
        const listeningToSrvPolling = !!(srvListeners === null || srvListeners === void 0 ? void 0 : srvListeners.includes(this.s.detectSrvRecords));
        if (transitionToSharded && !listeningToSrvPolling) {
            (_b = this.s.srvPoller) === null || _b === void 0 ? void 0 : _b.on(srv_polling_1.SrvPoller.SRV_RECORD_DISCOVERY, this.s.detectSrvRecords);
            (_c = this.s.srvPoller) === null || _c === void 0 ? void 0 : _c.start();
        }
    }
    detectSrvRecords(ev) {
        const previousTopologyDescription = this.s.description;
        this.s.description = this.s.description.updateFromSrvPollingEvent(ev, this.s.options.srvMaxHosts);
        if (this.s.description === previousTopologyDescription) {
            // Nothing changed, so return
            return;
        }
        updateServers(this);
        this.emit(Topology.TOPOLOGY_DESCRIPTION_CHANGED, new events_1.TopologyDescriptionChangedEvent(this.s.id, previousTopologyDescription, this.s.description));
    }
    /**
     * @returns A `TopologyDescription` for this topology
     */
    get description() {
        return this.s.description;
    }
    get loadBalanced() {
        return this.s.options.loadBalanced;
    }
    get capabilities() {
        return new ServerCapabilities(this.lastIsMaster());
    }
    /** Initiate server connect */
    connect(options, callback) {
        var _a;
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = options !== null && options !== void 0 ? options : {};
        if (this.s.state === common_1.STATE_CONNECTED) {
            if (typeof callback === 'function') {
                callback();
            }
            return;
        }
        stateTransition(this, common_1.STATE_CONNECTING);
        // emit SDAM monitoring events
        this.emit(Topology.TOPOLOGY_OPENING, new events_1.TopologyOpeningEvent(this.s.id));
        // emit an event for the topology change
        this.emit(Topology.TOPOLOGY_DESCRIPTION_CHANGED, new events_1.TopologyDescriptionChangedEvent(this.s.id, new topology_description_1.TopologyDescription(common_1.TopologyType.Unknown), // initial is always Unknown
        this.s.description));
        // connect all known servers, then attempt server selection to connect
        const serverDescriptions = Array.from(this.s.description.servers.values());
        connectServers(this, serverDescriptions);
        // In load balancer mode we need to fake a server description getting
        // emitted from the monitor, since the monitor doesn't exist.
        if (this.s.options.loadBalanced) {
            for (const description of serverDescriptions) {
                const newDescription = new server_description_1.ServerDescription(description.hostAddress, undefined, {
                    loadBalanced: this.s.options.loadBalanced
                });
                this.serverUpdateHandler(newDescription);
            }
        }
        const readPreference = (_a = options.readPreference) !== null && _a !== void 0 ? _a : read_preference_1.ReadPreference.primary;
        this.selectServer((0, server_selection_1.readPreferenceServerSelector)(readPreference), options, (err, server) => {
            if (err) {
                this.close();
                typeof callback === 'function' ? callback(err) : this.emit(Topology.ERROR, err);
                return;
            }
            // TODO: NODE-2471
            if (server && this.s.credentials) {
                server.command((0, utils_1.ns)('admin.$cmd'), { ping: 1 }, err => {
                    if (err) {
                        typeof callback === 'function' ? callback(err) : this.emit(Topology.ERROR, err);
                        return;
                    }
                    stateTransition(this, common_1.STATE_CONNECTED);
                    this.emit(Topology.OPEN, this);
                    this.emit(Topology.CONNECT, this);
                    if (typeof callback === 'function')
                        callback(undefined, this);
                });
                return;
            }
            stateTransition(this, common_1.STATE_CONNECTED);
            this.emit(Topology.OPEN, this);
            this.emit(Topology.CONNECT, this);
            if (typeof callback === 'function')
                callback(undefined, this);
        });
    }
    /** Close this topology */
    close(options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        if (typeof options === 'boolean') {
            options = { force: options };
        }
        options = options !== null && options !== void 0 ? options : {};
        if (this.s.state === common_1.STATE_CLOSED || this.s.state === common_1.STATE_CLOSING) {
            if (typeof callback === 'function') {
                callback();
            }
            return;
        }
        stateTransition(this, common_1.STATE_CLOSING);
        drainWaitQueue(this[kWaitQueue], new error_1.MongoTopologyClosedError());
        (0, common_1.drainTimerQueue)(this.s.connectionTimers);
        if (this.s.srvPoller) {
            this.s.srvPoller.stop();
            this.s.srvPoller.removeListener(srv_polling_1.SrvPoller.SRV_RECORD_DISCOVERY, this.s.detectSrvRecords);
        }
        this.removeListener(Topology.TOPOLOGY_DESCRIPTION_CHANGED, this.s.detectShardedTopology);
        (0, utils_1.eachAsync)(Array.from(this.s.sessions.values()), (session, cb) => session.endSession(cb), () => {
            this.s.sessionPool.endAllPooledSessions(() => {
                (0, utils_1.eachAsync)(Array.from(this.s.servers.values()), (server, cb) => destroyServer(server, this, options, cb), err => {
                    this.s.servers.clear();
                    // emit an event for close
                    this.emit(Topology.TOPOLOGY_CLOSED, new events_1.TopologyClosedEvent(this.s.id));
                    stateTransition(this, common_1.STATE_CLOSED);
                    if (typeof callback === 'function') {
                        callback(err);
                    }
                });
            });
        });
    }
    selectServer(selector, _options, _callback) {
        let options = _options;
        const callback = (_callback !== null && _callback !== void 0 ? _callback : _options);
        if (typeof options === 'function') {
            options = {};
        }
        let serverSelector;
        if (typeof selector !== 'function') {
            if (typeof selector === 'string') {
                serverSelector = (0, server_selection_1.readPreferenceServerSelector)(read_preference_1.ReadPreference.fromString(selector));
            }
            else {
                let readPreference;
                if (selector instanceof read_preference_1.ReadPreference) {
                    readPreference = selector;
                }
                else {
                    read_preference_1.ReadPreference.translate(options);
                    readPreference = options.readPreference || read_preference_1.ReadPreference.primary;
                }
                serverSelector = (0, server_selection_1.readPreferenceServerSelector)(readPreference);
            }
        }
        else {
            serverSelector = selector;
        }
        options = Object.assign({}, { serverSelectionTimeoutMS: this.s.serverSelectionTimeoutMS }, options);
        const isSharded = this.description.type === common_1.TopologyType.Sharded;
        const session = options.session;
        const transaction = session && session.transaction;
        if (isSharded && transaction && transaction.server) {
            callback(undefined, transaction.server);
            return;
        }
        const waitQueueMember = {
            serverSelector,
            transaction,
            callback
        };
        const serverSelectionTimeoutMS = options.serverSelectionTimeoutMS;
        if (serverSelectionTimeoutMS) {
            waitQueueMember.timer = setTimeout(() => {
                waitQueueMember[kCancelled] = true;
                waitQueueMember.timer = undefined;
                const timeoutError = new error_1.MongoServerSelectionError(`Server selection timed out after ${serverSelectionTimeoutMS} ms`, this.description);
                waitQueueMember.callback(timeoutError);
            }, serverSelectionTimeoutMS);
        }
        this[kWaitQueue].push(waitQueueMember);
        processWaitQueue(this);
    }
    // Sessions related methods
    /**
     * @returns Whether the topology should initiate selection to determine session support
     */
    shouldCheckForSessionSupport() {
        if (this.description.type === common_1.TopologyType.Single) {
            return !this.description.hasKnownServers;
        }
        return !this.description.hasDataBearingServers;
    }
    /**
     * @returns Whether sessions are supported on the current topology
     */
    hasSessionSupport() {
        return this.loadBalanced || this.description.logicalSessionTimeoutMinutes != null;
    }
    /** Start a logical session */
    startSession(options, clientOptions) {
        const session = new sessions_1.ClientSession(this, this.s.sessionPool, options, clientOptions);
        session.once('ended', () => {
            this.s.sessions.delete(session);
        });
        this.s.sessions.add(session);
        return session;
    }
    /** Send endSessions command(s) with the given session ids */
    endSessions(sessions, callback) {
        if (!Array.isArray(sessions)) {
            sessions = [sessions];
        }
        this.selectServer((0, server_selection_1.readPreferenceServerSelector)(read_preference_1.ReadPreference.primaryPreferred), (err, server) => {
            if (err || !server) {
                if (typeof callback === 'function')
                    callback(err);
                return;
            }
            server.command((0, utils_1.ns)('admin.$cmd'), { endSessions: sessions }, { noResponse: true }, (err, result) => {
                if (typeof callback === 'function')
                    callback(err, result);
            });
        });
    }
    /**
     * Update the internal TopologyDescription with a ServerDescription
     *
     * @param serverDescription - The server to update in the internal list of server descriptions
     */
    serverUpdateHandler(serverDescription) {
        if (!this.s.description.hasServer(serverDescription.address)) {
            return;
        }
        // ignore this server update if its from an outdated topologyVersion
        if (isStaleServerDescription(this.s.description, serverDescription)) {
            return;
        }
        // these will be used for monitoring events later
        const previousTopologyDescription = this.s.description;
        const previousServerDescription = this.s.description.servers.get(serverDescription.address);
        if (!previousServerDescription) {
            return;
        }
        // Driver Sessions Spec: "Whenever a driver receives a cluster time from
        // a server it MUST compare it to the current highest seen cluster time
        // for the deployment. If the new cluster time is higher than the
        // highest seen cluster time it MUST become the new highest seen cluster
        // time. Two cluster times are compared using only the BsonTimestamp
        // value of the clusterTime embedded field."
        const clusterTime = serverDescription.$clusterTime;
        if (clusterTime) {
            (0, common_1._advanceClusterTime)(this, clusterTime);
        }
        // If we already know all the information contained in this updated description, then
        // we don't need to emit SDAM events, but still need to update the description, in order
        // to keep client-tracked attributes like last update time and round trip time up to date
        const equalDescriptions = previousServerDescription && previousServerDescription.equals(serverDescription);
        // first update the TopologyDescription
        this.s.description = this.s.description.update(serverDescription);
        if (this.s.description.compatibilityError) {
            this.emit(Topology.ERROR, new error_1.MongoCompatibilityError(this.s.description.compatibilityError));
            return;
        }
        // emit monitoring events for this change
        if (!equalDescriptions) {
            const newDescription = this.s.description.servers.get(serverDescription.address);
            if (newDescription) {
                this.emit(Topology.SERVER_DESCRIPTION_CHANGED, new events_1.ServerDescriptionChangedEvent(this.s.id, serverDescription.address, previousServerDescription, newDescription));
            }
        }
        // update server list from updated descriptions
        updateServers(this, serverDescription);
        // attempt to resolve any outstanding server selection attempts
        if (this[kWaitQueue].length > 0) {
            processWaitQueue(this);
        }
        if (!equalDescriptions) {
            this.emit(Topology.TOPOLOGY_DESCRIPTION_CHANGED, new events_1.TopologyDescriptionChangedEvent(this.s.id, previousTopologyDescription, this.s.description));
        }
    }
    auth(credentials, callback) {
        if (typeof credentials === 'function')
            (callback = credentials), (credentials = undefined);
        if (typeof callback === 'function')
            callback(undefined, true);
    }
    get clientMetadata() {
        return this.s.options.metadata;
    }
    isConnected() {
        return this.s.state === common_1.STATE_CONNECTED;
    }
    isDestroyed() {
        return this.s.state === common_1.STATE_CLOSED;
    }
    /**
     * @deprecated This function is deprecated and will be removed in the next major version.
     */
    unref() {
        (0, utils_1.emitWarning)('`unref` is a noop and will be removed in the next major version');
    }
    // NOTE: There are many places in code where we explicitly check the last isMaster
    //       to do feature support detection. This should be done any other way, but for
    //       now we will just return the first isMaster seen, which should suffice.
    lastIsMaster() {
        const serverDescriptions = Array.from(this.description.servers.values());
        if (serverDescriptions.length === 0)
            return {};
        const sd = serverDescriptions.filter((sd) => sd.type !== common_1.ServerType.Unknown)[0];
        const result = sd || { maxWireVersion: this.description.commonWireVersion };
        return result;
    }
    get commonWireVersion() {
        return this.description.commonWireVersion;
    }
    get logicalSessionTimeoutMinutes() {
        return this.description.logicalSessionTimeoutMinutes;
    }
    get clusterTime() {
        return this.s.clusterTime;
    }
    set clusterTime(clusterTime) {
        this.s.clusterTime = clusterTime;
    }
}
exports.Topology = Topology;
/** @event */
Topology.SERVER_OPENING = 'serverOpening';
/** @event */
Topology.SERVER_CLOSED = 'serverClosed';
/** @event */
Topology.SERVER_DESCRIPTION_CHANGED = 'serverDescriptionChanged';
/** @event */
Topology.TOPOLOGY_OPENING = 'topologyOpening';
/** @event */
Topology.TOPOLOGY_CLOSED = 'topologyClosed';
/** @event */
Topology.TOPOLOGY_DESCRIPTION_CHANGED = 'topologyDescriptionChanged';
/** @event */
Topology.ERROR = 'error';
/** @event */
Topology.OPEN = 'open';
/** @event */
Topology.CONNECT = 'connect';
/** @event */
Topology.CLOSE = 'close';
/** @event */
Topology.TIMEOUT = 'timeout';
/** @public */
exports.TOPOLOGY_EVENTS = [
    Topology.SERVER_OPENING,
    Topology.SERVER_CLOSED,
    Topology.SERVER_DESCRIPTION_CHANGED,
    Topology.TOPOLOGY_OPENING,
    Topology.TOPOLOGY_CLOSED,
    Topology.TOPOLOGY_DESCRIPTION_CHANGED,
    Topology.ERROR,
    Topology.TIMEOUT,
    Topology.CLOSE
];
/** Destroys a server, and removes all event listeners from the instance */
function destroyServer(server, topology, options, callback) {
    options = options !== null && options !== void 0 ? options : {};
    for (const event of LOCAL_SERVER_EVENTS) {
        server.removeAllListeners(event);
    }
    server.destroy(options, () => {
        topology.emit(Topology.SERVER_CLOSED, new events_1.ServerClosedEvent(topology.s.id, server.description.address));
        for (const event of SERVER_RELAY_EVENTS) {
            server.removeAllListeners(event);
        }
        if (typeof callback === 'function') {
            callback();
        }
    });
}
/** Predicts the TopologyType from options */
function topologyTypeFromOptions(options) {
    if (options === null || options === void 0 ? void 0 : options.directConnection) {
        return common_1.TopologyType.Single;
    }
    if (options === null || options === void 0 ? void 0 : options.replicaSet) {
        return common_1.TopologyType.ReplicaSetNoPrimary;
    }
    if (options === null || options === void 0 ? void 0 : options.loadBalanced) {
        return common_1.TopologyType.LoadBalanced;
    }
    return common_1.TopologyType.Unknown;
}
function randomSelection(array) {
    return array[Math.floor(Math.random() * array.length)];
}
/**
 * Creates new server instances and attempts to connect them
 *
 * @param topology - The topology that this server belongs to
 * @param serverDescription - The description for the server to initialize and connect to
 * @param connectDelay - Time to wait before attempting initial connection
 */
function createAndConnectServer(topology, serverDescription, connectDelay) {
    topology.emit(Topology.SERVER_OPENING, new events_1.ServerOpeningEvent(topology.s.id, serverDescription.address));
    const server = new server_1.Server(topology, serverDescription, topology.s.options);
    for (const event of SERVER_RELAY_EVENTS) {
        server.on(event, (e) => topology.emit(event, e));
    }
    server.on(server_1.Server.DESCRIPTION_RECEIVED, description => topology.serverUpdateHandler(description));
    if (connectDelay) {
        const connectTimer = setTimeout(() => {
            (0, common_1.clearAndRemoveTimerFrom)(connectTimer, topology.s.connectionTimers);
            server.connect();
        }, connectDelay);
        topology.s.connectionTimers.add(connectTimer);
        return server;
    }
    server.connect();
    return server;
}
/**
 * Create `Server` instances for all initially known servers, connect them, and assign
 * them to the passed in `Topology`.
 *
 * @param topology - The topology responsible for the servers
 * @param serverDescriptions - A list of server descriptions to connect
 */
function connectServers(topology, serverDescriptions) {
    topology.s.servers = serverDescriptions.reduce((servers, serverDescription) => {
        const server = createAndConnectServer(topology, serverDescription);
        servers.set(serverDescription.address, server);
        return servers;
    }, new Map());
}
/**
 * @param topology - Topology to update.
 * @param incomingServerDescription - New server description.
 */
function updateServers(topology, incomingServerDescription) {
    // update the internal server's description
    if (incomingServerDescription && topology.s.servers.has(incomingServerDescription.address)) {
        const server = topology.s.servers.get(incomingServerDescription.address);
        if (server) {
            server.s.description = incomingServerDescription;
        }
    }
    // add new servers for all descriptions we currently don't know about locally
    for (const serverDescription of topology.description.servers.values()) {
        if (!topology.s.servers.has(serverDescription.address)) {
            const server = createAndConnectServer(topology, serverDescription);
            topology.s.servers.set(serverDescription.address, server);
        }
    }
    // for all servers no longer known, remove their descriptions and destroy their instances
    for (const entry of topology.s.servers) {
        const serverAddress = entry[0];
        if (topology.description.hasServer(serverAddress)) {
            continue;
        }
        if (!topology.s.servers.has(serverAddress)) {
            continue;
        }
        const server = topology.s.servers.get(serverAddress);
        topology.s.servers.delete(serverAddress);
        // prepare server for garbage collection
        if (server) {
            destroyServer(server, topology);
        }
    }
}
function drainWaitQueue(queue, err) {
    while (queue.length) {
        const waitQueueMember = queue.shift();
        if (!waitQueueMember) {
            continue;
        }
        if (waitQueueMember.timer) {
            clearTimeout(waitQueueMember.timer);
        }
        if (!waitQueueMember[kCancelled]) {
            waitQueueMember.callback(err);
        }
    }
}
function processWaitQueue(topology) {
    if (topology.s.state === common_1.STATE_CLOSED) {
        drainWaitQueue(topology[kWaitQueue], new error_1.MongoTopologyClosedError());
        return;
    }
    const isSharded = topology.description.type === common_1.TopologyType.Sharded;
    const serverDescriptions = Array.from(topology.description.servers.values());
    const membersToProcess = topology[kWaitQueue].length;
    for (let i = 0; i < membersToProcess; ++i) {
        const waitQueueMember = topology[kWaitQueue].shift();
        if (!waitQueueMember) {
            continue;
        }
        if (waitQueueMember[kCancelled]) {
            continue;
        }
        let selectedDescriptions;
        try {
            const serverSelector = waitQueueMember.serverSelector;
            selectedDescriptions = serverSelector
                ? serverSelector(topology.description, serverDescriptions)
                : serverDescriptions;
        }
        catch (e) {
            if (waitQueueMember.timer) {
                clearTimeout(waitQueueMember.timer);
            }
            waitQueueMember.callback(e);
            continue;
        }
        if (selectedDescriptions.length === 0) {
            topology[kWaitQueue].push(waitQueueMember);
            continue;
        }
        const selectedServerDescription = randomSelection(selectedDescriptions);
        const selectedServer = topology.s.servers.get(selectedServerDescription.address);
        const transaction = waitQueueMember.transaction;
        if (isSharded && transaction && transaction.isActive && selectedServer) {
            transaction.pinServer(selectedServer);
        }
        if (waitQueueMember.timer) {
            clearTimeout(waitQueueMember.timer);
        }
        waitQueueMember.callback(undefined, selectedServer);
    }
    if (topology[kWaitQueue].length > 0) {
        // ensure all server monitors attempt monitoring soon
        for (const [, server] of topology.s.servers) {
            process.nextTick(function scheduleServerCheck() {
                return server.requestCheck();
            });
        }
    }
}
function isStaleServerDescription(topologyDescription, incomingServerDescription) {
    const currentServerDescription = topologyDescription.servers.get(incomingServerDescription.address);
    const currentTopologyVersion = currentServerDescription === null || currentServerDescription === void 0 ? void 0 : currentServerDescription.topologyVersion;
    return ((0, server_description_1.compareTopologyVersion)(currentTopologyVersion, incomingServerDescription.topologyVersion) > 0);
}
/** @public */
class ServerCapabilities {
    constructor(ismaster) {
        this.minWireVersion = ismaster.minWireVersion || 0;
        this.maxWireVersion = ismaster.maxWireVersion || 0;
    }
    get hasAggregationCursor() {
        return this.maxWireVersion >= 1;
    }
    get hasWriteCommands() {
        return this.maxWireVersion >= 2;
    }
    get hasTextSearch() {
        return this.minWireVersion >= 0;
    }
    get hasAuthCommands() {
        return this.maxWireVersion >= 1;
    }
    get hasListCollectionsCommand() {
        return this.maxWireVersion >= 3;
    }
    get hasListIndexesCommand() {
        return this.maxWireVersion >= 3;
    }
    get supportsSnapshotReads() {
        return this.maxWireVersion >= 13;
    }
    get commandsTakeWriteConcern() {
        return this.maxWireVersion >= 5;
    }
    get commandsTakeCollation() {
        return this.maxWireVersion >= 5;
    }
}
exports.ServerCapabilities = ServerCapabilities;
//# sourceMappingURL=topology.js.map
}, function(modId) { var map = {"../read_preference":1647755346519,"./server_description":1647755346528,"./topology_description":1647755346527,"./server":1647755346598,"../sessions":1647755346523,"./srv_polling":1647755346622,"../cmap/connection_pool":1647755346599,"../error":1647755346514,"./server_selection":1647755346533,"../utils":1647755346512,"./common":1647755346516,"./events":1647755346621,"../cmap/connection":1647755346537,"../mongo_types":1647755346546}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346598, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.HEARTBEAT_EVENTS = exports.Server = void 0;
const logger_1 = require("../logger");
const connection_pool_1 = require("../cmap/connection_pool");
const server_description_1 = require("./server_description");
const monitor_1 = require("./monitor");
const transactions_1 = require("../transactions");
const utils_1 = require("../utils");
const common_1 = require("./common");
const error_1 = require("../error");
const connection_1 = require("../cmap/connection");
const mongo_types_1 = require("../mongo_types");
const utils_2 = require("../utils");
const stateTransition = (0, utils_1.makeStateMachine)({
    [common_1.STATE_CLOSED]: [common_1.STATE_CLOSED, common_1.STATE_CONNECTING],
    [common_1.STATE_CONNECTING]: [common_1.STATE_CONNECTING, common_1.STATE_CLOSING, common_1.STATE_CONNECTED, common_1.STATE_CLOSED],
    [common_1.STATE_CONNECTED]: [common_1.STATE_CONNECTED, common_1.STATE_CLOSING, common_1.STATE_CLOSED],
    [common_1.STATE_CLOSING]: [common_1.STATE_CLOSING, common_1.STATE_CLOSED]
});
/** @internal */
const kMonitor = Symbol('monitor');
/** @internal */
class Server extends mongo_types_1.TypedEventEmitter {
    /**
     * Create a server
     */
    constructor(topology, description, options) {
        super();
        this.serverApi = options.serverApi;
        const poolOptions = { hostAddress: description.hostAddress, ...options };
        this.s = {
            description,
            options,
            logger: new logger_1.Logger('Server'),
            state: common_1.STATE_CLOSED,
            topology,
            pool: new connection_pool_1.ConnectionPool(poolOptions)
        };
        for (const event of [...connection_pool_1.CMAP_EVENTS, ...connection_1.APM_EVENTS]) {
            this.s.pool.on(event, (e) => this.emit(event, e));
        }
        this.s.pool.on(connection_1.Connection.CLUSTER_TIME_RECEIVED, (clusterTime) => {
            this.clusterTime = clusterTime;
        });
        // monitoring is disabled in load balancing mode
        if (this.loadBalanced)
            return;
        // create the monitor
        this[kMonitor] = new monitor_1.Monitor(this, this.s.options);
        for (const event of exports.HEARTBEAT_EVENTS) {
            this[kMonitor].on(event, (e) => this.emit(event, e));
        }
        this[kMonitor].on('resetConnectionPool', () => {
            this.s.pool.clear();
        });
        this[kMonitor].on('resetServer', (error) => markServerUnknown(this, error));
        this[kMonitor].on(Server.SERVER_HEARTBEAT_SUCCEEDED, (event) => {
            this.emit(Server.DESCRIPTION_RECEIVED, new server_description_1.ServerDescription(this.description.hostAddress, event.reply, {
                roundTripTime: calculateRoundTripTime(this.description.roundTripTime, event.duration)
            }));
            if (this.s.state === common_1.STATE_CONNECTING) {
                stateTransition(this, common_1.STATE_CONNECTED);
                this.emit(Server.CONNECT, this);
            }
        });
    }
    get description() {
        return this.s.description;
    }
    get name() {
        return this.s.description.address;
    }
    get autoEncrypter() {
        if (this.s.options && this.s.options.autoEncrypter) {
            return this.s.options.autoEncrypter;
        }
    }
    get loadBalanced() {
        return this.s.topology.description.type === common_1.TopologyType.LoadBalanced;
    }
    /**
     * Initiate server connect
     */
    connect() {
        if (this.s.state !== common_1.STATE_CLOSED) {
            return;
        }
        stateTransition(this, common_1.STATE_CONNECTING);
        // If in load balancer mode we automatically set the server to
        // a load balancer. It never transitions out of this state and
        // has no monitor.
        if (!this.loadBalanced) {
            this[kMonitor].connect();
        }
        else {
            stateTransition(this, common_1.STATE_CONNECTED);
            this.emit(Server.CONNECT, this);
        }
    }
    /** Destroy the server connection */
    destroy(options, callback) {
        if (typeof options === 'function')
            (callback = options), (options = {});
        options = Object.assign({}, { force: false }, options);
        if (this.s.state === common_1.STATE_CLOSED) {
            if (typeof callback === 'function') {
                callback();
            }
            return;
        }
        stateTransition(this, common_1.STATE_CLOSING);
        if (!this.loadBalanced) {
            this[kMonitor].close();
        }
        this.s.pool.close(options, err => {
            stateTransition(this, common_1.STATE_CLOSED);
            this.emit('closed');
            if (typeof callback === 'function') {
                callback(err);
            }
        });
    }
    /**
     * Immediately schedule monitoring of this server. If there already an attempt being made
     * this will be a no-op.
     */
    requestCheck() {
        if (!this.loadBalanced) {
            this[kMonitor].requestCheck();
        }
    }
    command(ns, cmd, options, callback) {
        if (typeof options === 'function') {
            (callback = options), (options = {}), (options = options !== null && options !== void 0 ? options : {});
        }
        if (callback == null) {
            throw new error_1.MongoInvalidArgumentError('Callback must be provided');
        }
        if (ns.db == null || typeof ns === 'string') {
            throw new error_1.MongoInvalidArgumentError('Namespace must not be a string');
        }
        if (this.s.state === common_1.STATE_CLOSING || this.s.state === common_1.STATE_CLOSED) {
            callback(new error_1.MongoServerClosedError());
            return;
        }
        // Clone the options
        const finalOptions = Object.assign({}, options, { wireProtocolCommand: false });
        // There are cases where we need to flag the read preference not to get sent in
        // the command, such as pre-5.0 servers attempting to perform an aggregate write
        // with a non-primary read preference. In this case the effective read preference
        // (primary) is not the same as the provided and must be removed completely.
        if (finalOptions.omitReadPreference) {
            delete finalOptions.readPreference;
        }
        // error if collation not supported
        if ((0, utils_1.collationNotSupported)(this, cmd)) {
            callback(new error_1.MongoCompatibilityError(`Server ${this.name} does not support collation`));
            return;
        }
        const session = finalOptions.session;
        const conn = session === null || session === void 0 ? void 0 : session.pinnedConnection;
        // NOTE: This is a hack! We can't retrieve the connections used for executing an operation
        //       (and prevent them from being checked back in) at the point of operation execution.
        //       This should be considered as part of the work for NODE-2882
        if (this.loadBalanced && session && conn == null && isPinnableCommand(cmd, session)) {
            this.s.pool.checkOut((err, checkedOut) => {
                if (err || checkedOut == null) {
                    if (callback)
                        return callback(err);
                    return;
                }
                session.pin(checkedOut);
                this.command(ns, cmd, finalOptions, callback);
            });
            return;
        }
        this.s.pool.withConnection(conn, (err, conn, cb) => {
            if (err || !conn) {
                markServerUnknown(this, err);
                return cb(err);
            }
            conn.command(ns, cmd, finalOptions, makeOperationHandler(this, conn, cmd, finalOptions, cb));
        }, callback);
    }
    /**
     * Execute a query against the server
     * @internal
     */
    query(ns, cmd, options, callback) {
        if (this.s.state === common_1.STATE_CLOSING || this.s.state === common_1.STATE_CLOSED) {
            callback(new error_1.MongoServerClosedError());
            return;
        }
        this.s.pool.withConnection(undefined, (err, conn, cb) => {
            if (err || !conn) {
                markServerUnknown(this, err);
                return cb(err);
            }
            conn.query(ns, cmd, options, makeOperationHandler(this, conn, cmd, options, cb));
        }, callback);
    }
    /**
     * Execute a `getMore` against the server
     * @internal
     */
    getMore(ns, cursorId, options, callback) {
        var _a;
        if (this.s.state === common_1.STATE_CLOSING || this.s.state === common_1.STATE_CLOSED) {
            callback(new error_1.MongoServerClosedError());
            return;
        }
        this.s.pool.withConnection((_a = options.session) === null || _a === void 0 ? void 0 : _a.pinnedConnection, (err, conn, cb) => {
            if (err || !conn) {
                markServerUnknown(this, err);
                return cb(err);
            }
            conn.getMore(ns, cursorId, options, makeOperationHandler(this, conn, {}, options, cb));
        }, callback);
    }
    /**
     * Execute a `killCursors` command against the server
     * @internal
     */
    killCursors(ns, cursorIds, options, callback) {
        var _a;
        if (this.s.state === common_1.STATE_CLOSING || this.s.state === common_1.STATE_CLOSED) {
            if (typeof callback === 'function') {
                callback(new error_1.MongoServerClosedError());
            }
            return;
        }
        this.s.pool.withConnection((_a = options.session) === null || _a === void 0 ? void 0 : _a.pinnedConnection, (err, conn, cb) => {
            if (err || !conn) {
                markServerUnknown(this, err);
                return cb(err);
            }
            conn.killCursors(ns, cursorIds, options, makeOperationHandler(this, conn, {}, undefined, cb));
        }, callback);
    }
}
exports.Server = Server;
/** @event */
Server.SERVER_HEARTBEAT_STARTED = 'serverHeartbeatStarted';
/** @event */
Server.SERVER_HEARTBEAT_SUCCEEDED = 'serverHeartbeatSucceeded';
/** @event */
Server.SERVER_HEARTBEAT_FAILED = 'serverHeartbeatFailed';
/** @event */
Server.CONNECT = 'connect';
/** @event */
Server.DESCRIPTION_RECEIVED = 'descriptionReceived';
/** @event */
Server.CLOSED = 'closed';
/** @event */
Server.ENDED = 'ended';
exports.HEARTBEAT_EVENTS = [
    Server.SERVER_HEARTBEAT_STARTED,
    Server.SERVER_HEARTBEAT_SUCCEEDED,
    Server.SERVER_HEARTBEAT_FAILED
];
Object.defineProperty(Server.prototype, 'clusterTime', {
    get() {
        return this.s.topology.clusterTime;
    },
    set(clusterTime) {
        this.s.topology.clusterTime = clusterTime;
    }
});
function calculateRoundTripTime(oldRtt, duration) {
    if (oldRtt === -1) {
        return duration;
    }
    const alpha = 0.2;
    return alpha * duration + (1 - alpha) * oldRtt;
}
function markServerUnknown(server, error) {
    // Load balancer servers can never be marked unknown.
    if (server.loadBalanced) {
        return;
    }
    if (error instanceof error_1.MongoNetworkError && !(error instanceof error_1.MongoNetworkTimeoutError)) {
        server[kMonitor].reset();
    }
    server.emit(Server.DESCRIPTION_RECEIVED, new server_description_1.ServerDescription(server.description.hostAddress, undefined, {
        error,
        topologyVersion: error && error.topologyVersion ? error.topologyVersion : server.description.topologyVersion
    }));
}
function isPinnableCommand(cmd, session) {
    if (session) {
        return (session.inTransaction() ||
            'aggregate' in cmd ||
            'find' in cmd ||
            'getMore' in cmd ||
            'listCollections' in cmd ||
            'listIndexes' in cmd);
    }
    return false;
}
function connectionIsStale(pool, connection) {
    if (connection.serviceId) {
        return (connection.generation !== pool.serviceGenerations.get(connection.serviceId.toHexString()));
    }
    return connection.generation !== pool.generation;
}
function shouldHandleStateChangeError(server, err) {
    const etv = err.topologyVersion;
    const stv = server.description.topologyVersion;
    return (0, server_description_1.compareTopologyVersion)(stv, etv) < 0;
}
function inActiveTransaction(session, cmd) {
    return session && session.inTransaction() && !(0, transactions_1.isTransactionCommand)(cmd);
}
/** this checks the retryWrites option passed down from the client options, it
 * does not check if the server supports retryable writes */
function isRetryableWritesEnabled(topology) {
    return topology.s.options.retryWrites !== false;
}
function makeOperationHandler(server, connection, cmd, options, callback) {
    const session = options === null || options === void 0 ? void 0 : options.session;
    return function handleOperationResult(err, result) {
        if (err && !connectionIsStale(server.s.pool, connection)) {
            if (err instanceof error_1.MongoNetworkError) {
                if (session && !session.hasEnded && session.serverSession) {
                    session.serverSession.isDirty = true;
                }
                // inActiveTransaction check handles commit and abort.
                if (inActiveTransaction(session, cmd) && !err.hasErrorLabel('TransientTransactionError')) {
                    err.addErrorLabel('TransientTransactionError');
                }
                if ((isRetryableWritesEnabled(server.s.topology) || (0, transactions_1.isTransactionCommand)(cmd)) &&
                    (0, utils_2.supportsRetryableWrites)(server) &&
                    !inActiveTransaction(session, cmd)) {
                    err.addErrorLabel('RetryableWriteError');
                }
                if (!(err instanceof error_1.MongoNetworkTimeoutError) || (0, error_1.isNetworkErrorBeforeHandshake)(err)) {
                    // In load balanced mode we never mark the server as unknown and always
                    // clear for the specific service id.
                    server.s.pool.clear(connection.serviceId);
                    if (!server.loadBalanced) {
                        markServerUnknown(server, err);
                    }
                }
            }
            else {
                // if pre-4.4 server, then add error label if its a retryable write error
                if ((isRetryableWritesEnabled(server.s.topology) || (0, transactions_1.isTransactionCommand)(cmd)) &&
                    (0, utils_1.maxWireVersion)(server) < 9 &&
                    (0, error_1.isRetryableWriteError)(err) &&
                    !inActiveTransaction(session, cmd)) {
                    err.addErrorLabel('RetryableWriteError');
                }
                if ((0, error_1.isSDAMUnrecoverableError)(err)) {
                    if (shouldHandleStateChangeError(server, err)) {
                        if ((0, utils_1.maxWireVersion)(server) <= 7 || (0, error_1.isNodeShuttingDownError)(err)) {
                            server.s.pool.clear(connection.serviceId);
                        }
                        if (!server.loadBalanced) {
                            markServerUnknown(server, err);
                            process.nextTick(() => server.requestCheck());
                        }
                    }
                }
            }
            if (session && session.isPinned && err.hasErrorLabel('TransientTransactionError')) {
                session.unpin({ force: true });
            }
        }
        callback(err, result);
    };
}
//# sourceMappingURL=server.js.map
}, function(modId) { var map = {"../logger":1647755346591,"../cmap/connection_pool":1647755346599,"./server_description":1647755346528,"./monitor":1647755346619,"../transactions":1647755346525,"../utils":1647755346512,"./common":1647755346516,"../error":1647755346514,"../cmap/connection":1647755346537,"../mongo_types":1647755346546}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346599, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CMAP_EVENTS = exports.ConnectionPool = void 0;
const Denque = require("denque");
const connection_1 = require("./connection");
const logger_1 = require("../logger");
const metrics_1 = require("./metrics");
const connect_1 = require("./connect");
const utils_1 = require("../utils");
const error_1 = require("../error");
const errors_1 = require("./errors");
const connection_pool_events_1 = require("./connection_pool_events");
const mongo_types_1 = require("../mongo_types");
/** @internal */
const kLogger = Symbol('logger');
/** @internal */
const kConnections = Symbol('connections');
/** @internal */
const kPermits = Symbol('permits');
/** @internal */
const kMinPoolSizeTimer = Symbol('minPoolSizeTimer');
/** @internal */
const kGeneration = Symbol('generation');
/** @internal */
const kServiceGenerations = Symbol('serviceGenerations');
/** @internal */
const kConnectionCounter = Symbol('connectionCounter');
/** @internal */
const kCancellationToken = Symbol('cancellationToken');
/** @internal */
const kWaitQueue = Symbol('waitQueue');
/** @internal */
const kCancelled = Symbol('cancelled');
/** @internal */
const kMetrics = Symbol('metrics');
/** @internal */
const kCheckedOut = Symbol('checkedOut');
/** @internal */
const kProcessingWaitQueue = Symbol('processingWaitQueue');
/**
 * A pool of connections which dynamically resizes, and emit events related to pool activity
 * @internal
 */
class ConnectionPool extends mongo_types_1.TypedEventEmitter {
    /** @internal */
    constructor(options) {
        var _a, _b, _c, _d;
        super();
        this.closed = false;
        this.options = Object.freeze({
            ...options,
            connectionType: connection_1.Connection,
            maxPoolSize: (_a = options.maxPoolSize) !== null && _a !== void 0 ? _a : 100,
            minPoolSize: (_b = options.minPoolSize) !== null && _b !== void 0 ? _b : 0,
            maxIdleTimeMS: (_c = options.maxIdleTimeMS) !== null && _c !== void 0 ? _c : 0,
            waitQueueTimeoutMS: (_d = options.waitQueueTimeoutMS) !== null && _d !== void 0 ? _d : 0,
            autoEncrypter: options.autoEncrypter,
            metadata: options.metadata
        });
        if (this.options.minPoolSize > this.options.maxPoolSize) {
            throw new error_1.MongoInvalidArgumentError('Connection pool minimum size must not be greater than maximum pool size');
        }
        this[kLogger] = new logger_1.Logger('ConnectionPool');
        this[kConnections] = new Denque();
        this[kPermits] = this.options.maxPoolSize;
        this[kMinPoolSizeTimer] = undefined;
        this[kGeneration] = 0;
        this[kServiceGenerations] = new Map();
        this[kConnectionCounter] = (0, utils_1.makeCounter)(1);
        this[kCancellationToken] = new mongo_types_1.CancellationToken();
        this[kCancellationToken].setMaxListeners(Infinity);
        this[kWaitQueue] = new Denque();
        this[kMetrics] = new metrics_1.ConnectionPoolMetrics();
        this[kCheckedOut] = 0;
        this[kProcessingWaitQueue] = false;
        process.nextTick(() => {
            this.emit(ConnectionPool.CONNECTION_POOL_CREATED, new connection_pool_events_1.ConnectionPoolCreatedEvent(this));
            ensureMinPoolSize(this);
        });
    }
    /** The address of the endpoint the pool is connected to */
    get address() {
        return this.options.hostAddress.toString();
    }
    /** An integer representing the SDAM generation of the pool */
    get generation() {
        return this[kGeneration];
    }
    /** An integer expressing how many total connections (active + in use) the pool currently has */
    get totalConnectionCount() {
        return this[kConnections].length + (this.options.maxPoolSize - this[kPermits]);
    }
    /** An integer expressing how many connections are currently available in the pool. */
    get availableConnectionCount() {
        return this[kConnections].length;
    }
    get waitQueueSize() {
        return this[kWaitQueue].length;
    }
    get loadBalanced() {
        return this.options.loadBalanced;
    }
    get serviceGenerations() {
        return this[kServiceGenerations];
    }
    get currentCheckedOutCount() {
        return this[kCheckedOut];
    }
    /**
     * Get the metrics information for the pool when a wait queue timeout occurs.
     */
    waitQueueErrorMetrics() {
        return this[kMetrics].info(this.options.maxPoolSize);
    }
    /**
     * Check a connection out of this pool. The connection will continue to be tracked, but no reference to it
     * will be held by the pool. This means that if a connection is checked out it MUST be checked back in or
     * explicitly destroyed by the new owner.
     */
    checkOut(callback) {
        this.emit(ConnectionPool.CONNECTION_CHECK_OUT_STARTED, new connection_pool_events_1.ConnectionCheckOutStartedEvent(this));
        if (this.closed) {
            this.emit(ConnectionPool.CONNECTION_CHECK_OUT_FAILED, new connection_pool_events_1.ConnectionCheckOutFailedEvent(this, 'poolClosed'));
            callback(new errors_1.PoolClosedError(this));
            return;
        }
        const waitQueueMember = { callback };
        const waitQueueTimeoutMS = this.options.waitQueueTimeoutMS;
        if (waitQueueTimeoutMS) {
            waitQueueMember.timer = setTimeout(() => {
                waitQueueMember[kCancelled] = true;
                waitQueueMember.timer = undefined;
                this.emit(ConnectionPool.CONNECTION_CHECK_OUT_FAILED, new connection_pool_events_1.ConnectionCheckOutFailedEvent(this, 'timeout'));
                waitQueueMember.callback(new errors_1.WaitQueueTimeoutError(this.loadBalanced
                    ? this.waitQueueErrorMetrics()
                    : 'Timed out while checking out a connection from connection pool', this.address));
            }, waitQueueTimeoutMS);
        }
        this[kCheckedOut] = this[kCheckedOut] + 1;
        this[kWaitQueue].push(waitQueueMember);
        process.nextTick(processWaitQueue, this);
    }
    /**
     * Check a connection into the pool.
     *
     * @param connection - The connection to check in
     */
    checkIn(connection) {
        const poolClosed = this.closed;
        const stale = connectionIsStale(this, connection);
        const willDestroy = !!(poolClosed || stale || connection.closed);
        if (!willDestroy) {
            connection.markAvailable();
            this[kConnections].unshift(connection);
        }
        this[kCheckedOut] = this[kCheckedOut] - 1;
        this.emit(ConnectionPool.CONNECTION_CHECKED_IN, new connection_pool_events_1.ConnectionCheckedInEvent(this, connection));
        if (willDestroy) {
            const reason = connection.closed ? 'error' : poolClosed ? 'poolClosed' : 'stale';
            destroyConnection(this, connection, reason);
        }
        process.nextTick(processWaitQueue, this);
    }
    /**
     * Clear the pool
     *
     * Pool reset is handled by incrementing the pool's generation count. Any existing connection of a
     * previous generation will eventually be pruned during subsequent checkouts.
     */
    clear(serviceId) {
        if (this.loadBalanced && serviceId) {
            const sid = serviceId.toHexString();
            const generation = this.serviceGenerations.get(sid);
            // Only need to worry if the generation exists, since it should
            // always be there but typescript needs the check.
            if (generation == null) {
                // TODO(NODE-3483)
                throw new error_1.MongoRuntimeError('Service generations are required in load balancer mode.');
            }
            else {
                // Increment the generation for the service id.
                this.serviceGenerations.set(sid, generation + 1);
            }
        }
        else {
            this[kGeneration] += 1;
        }
        this.emit('connectionPoolCleared', new connection_pool_events_1.ConnectionPoolClearedEvent(this, serviceId));
    }
    close(_options, _cb) {
        let options = _options;
        const callback = (_cb !== null && _cb !== void 0 ? _cb : _options);
        if (typeof options === 'function') {
            options = {};
        }
        options = Object.assign({ force: false }, options);
        if (this.closed) {
            return callback();
        }
        // immediately cancel any in-flight connections
        this[kCancellationToken].emit('cancel');
        // drain the wait queue
        while (this.waitQueueSize) {
            const waitQueueMember = this[kWaitQueue].pop();
            if (waitQueueMember) {
                if (waitQueueMember.timer) {
                    clearTimeout(waitQueueMember.timer);
                }
                if (!waitQueueMember[kCancelled]) {
                    // TODO(NODE-3483): Replace with MongoConnectionPoolClosedError
                    waitQueueMember.callback(new error_1.MongoRuntimeError('Connection pool closed'));
                }
            }
        }
        // clear the min pool size timer
        const minPoolSizeTimer = this[kMinPoolSizeTimer];
        if (minPoolSizeTimer) {
            clearTimeout(minPoolSizeTimer);
        }
        // end the connection counter
        if (typeof this[kConnectionCounter].return === 'function') {
            this[kConnectionCounter].return(undefined);
        }
        // mark the pool as closed immediately
        this.closed = true;
        (0, utils_1.eachAsync)(this[kConnections].toArray(), (conn, cb) => {
            this.emit(ConnectionPool.CONNECTION_CLOSED, new connection_pool_events_1.ConnectionClosedEvent(this, conn, 'poolClosed'));
            conn.destroy(options, cb);
        }, err => {
            this[kConnections].clear();
            this.emit(ConnectionPool.CONNECTION_POOL_CLOSED, new connection_pool_events_1.ConnectionPoolClosedEvent(this));
            callback(err);
        });
    }
    /**
     * Runs a lambda with an implicitly checked out connection, checking that connection back in when the lambda
     * has completed by calling back.
     *
     * NOTE: please note the required signature of `fn`
     *
     * @remarks When in load balancer mode, connections can be pinned to cursors or transactions.
     *   In these cases we pass the connection in to this method to ensure it is used and a new
     *   connection is not checked out.
     *
     * @param conn - A pinned connection for use in load balancing mode.
     * @param fn - A function which operates on a managed connection
     * @param callback - The original callback
     */
    withConnection(conn, fn, callback) {
        if (conn) {
            // use the provided connection, and do _not_ check it in after execution
            fn(undefined, conn, (fnErr, result) => {
                if (typeof callback === 'function') {
                    if (fnErr) {
                        callback(fnErr);
                    }
                    else {
                        callback(undefined, result);
                    }
                }
            });
            return;
        }
        this.checkOut((err, conn) => {
            // don't callback with `err` here, we might want to act upon it inside `fn`
            fn(err, conn, (fnErr, result) => {
                if (typeof callback === 'function') {
                    if (fnErr) {
                        callback(fnErr);
                    }
                    else {
                        callback(undefined, result);
                    }
                }
                if (conn) {
                    this.checkIn(conn);
                }
            });
        });
    }
}
exports.ConnectionPool = ConnectionPool;
/**
 * Emitted when the connection pool is created.
 * @event
 */
ConnectionPool.CONNECTION_POOL_CREATED = 'connectionPoolCreated';
/**
 * Emitted once when the connection pool is closed
 * @event
 */
ConnectionPool.CONNECTION_POOL_CLOSED = 'connectionPoolClosed';
/**
 * Emitted each time the connection pool is cleared and it's generation incremented
 * @event
 */
ConnectionPool.CONNECTION_POOL_CLEARED = 'connectionPoolCleared';
/**
 * Emitted when a connection is created.
 * @event
 */
ConnectionPool.CONNECTION_CREATED = 'connectionCreated';
/**
 * Emitted when a connection becomes established, and is ready to use
 * @event
 */
ConnectionPool.CONNECTION_READY = 'connectionReady';
/**
 * Emitted when a connection is closed
 * @event
 */
ConnectionPool.CONNECTION_CLOSED = 'connectionClosed';
/**
 * Emitted when an attempt to check out a connection begins
 * @event
 */
ConnectionPool.CONNECTION_CHECK_OUT_STARTED = 'connectionCheckOutStarted';
/**
 * Emitted when an attempt to check out a connection fails
 * @event
 */
ConnectionPool.CONNECTION_CHECK_OUT_FAILED = 'connectionCheckOutFailed';
/**
 * Emitted each time a connection is successfully checked out of the connection pool
 * @event
 */
ConnectionPool.CONNECTION_CHECKED_OUT = 'connectionCheckedOut';
/**
 * Emitted each time a connection is successfully checked into the connection pool
 * @event
 */
ConnectionPool.CONNECTION_CHECKED_IN = 'connectionCheckedIn';
function ensureMinPoolSize(pool) {
    if (pool.closed || pool.options.minPoolSize === 0) {
        return;
    }
    const minPoolSize = pool.options.minPoolSize;
    for (let i = pool.totalConnectionCount; i < minPoolSize; ++i) {
        createConnection(pool);
    }
    pool[kMinPoolSizeTimer] = setTimeout(() => ensureMinPoolSize(pool), 10);
}
function connectionIsStale(pool, connection) {
    const serviceId = connection.serviceId;
    if (pool.loadBalanced && serviceId) {
        const sid = serviceId.toHexString();
        const generation = pool.serviceGenerations.get(sid);
        return connection.generation !== generation;
    }
    return connection.generation !== pool[kGeneration];
}
function connectionIsIdle(pool, connection) {
    return !!(pool.options.maxIdleTimeMS && connection.idleTime > pool.options.maxIdleTimeMS);
}
function createConnection(pool, callback) {
    const connectOptions = {
        ...pool.options,
        id: pool[kConnectionCounter].next().value,
        generation: pool[kGeneration],
        cancellationToken: pool[kCancellationToken]
    };
    pool[kPermits]--;
    (0, connect_1.connect)(connectOptions, (err, connection) => {
        if (err || !connection) {
            pool[kPermits]++;
            pool[kLogger].debug(`connection attempt failed with error [${JSON.stringify(err)}]`);
            if (typeof callback === 'function') {
                callback(err);
            }
            return;
        }
        // The pool might have closed since we started trying to create a connection
        if (pool.closed) {
            connection.destroy({ force: true });
            return;
        }
        // forward all events from the connection to the pool
        for (const event of [...connection_1.APM_EVENTS, connection_1.Connection.CLUSTER_TIME_RECEIVED]) {
            connection.on(event, (e) => pool.emit(event, e));
        }
        pool.emit(ConnectionPool.CONNECTION_CREATED, new connection_pool_events_1.ConnectionCreatedEvent(pool, connection));
        if (pool.loadBalanced) {
            connection.on(connection_1.Connection.PINNED, pinType => pool[kMetrics].markPinned(pinType));
            connection.on(connection_1.Connection.UNPINNED, pinType => pool[kMetrics].markUnpinned(pinType));
            const serviceId = connection.serviceId;
            if (serviceId) {
                let generation;
                const sid = serviceId.toHexString();
                if ((generation = pool.serviceGenerations.get(sid))) {
                    connection.generation = generation;
                }
                else {
                    pool.serviceGenerations.set(sid, 0);
                    connection.generation = 0;
                }
            }
        }
        connection.markAvailable();
        pool.emit(ConnectionPool.CONNECTION_READY, new connection_pool_events_1.ConnectionReadyEvent(pool, connection));
        // if a callback has been provided, check out the connection immediately
        if (typeof callback === 'function') {
            callback(undefined, connection);
            return;
        }
        // otherwise add it to the pool for later acquisition, and try to process the wait queue
        pool[kConnections].push(connection);
        process.nextTick(processWaitQueue, pool);
    });
}
function destroyConnection(pool, connection, reason) {
    pool.emit(ConnectionPool.CONNECTION_CLOSED, new connection_pool_events_1.ConnectionClosedEvent(pool, connection, reason));
    // allow more connections to be created
    pool[kPermits]++;
    // destroy the connection
    process.nextTick(() => connection.destroy());
}
function processWaitQueue(pool) {
    if (pool.closed || pool[kProcessingWaitQueue]) {
        return;
    }
    pool[kProcessingWaitQueue] = true;
    while (pool.waitQueueSize) {
        const waitQueueMember = pool[kWaitQueue].peekFront();
        if (!waitQueueMember) {
            pool[kWaitQueue].shift();
            continue;
        }
        if (waitQueueMember[kCancelled]) {
            pool[kWaitQueue].shift();
            continue;
        }
        if (!pool.availableConnectionCount) {
            break;
        }
        const connection = pool[kConnections].shift();
        if (!connection) {
            break;
        }
        const isStale = connectionIsStale(pool, connection);
        const isIdle = connectionIsIdle(pool, connection);
        if (!isStale && !isIdle && !connection.closed) {
            pool.emit(ConnectionPool.CONNECTION_CHECKED_OUT, new connection_pool_events_1.ConnectionCheckedOutEvent(pool, connection));
            if (waitQueueMember.timer) {
                clearTimeout(waitQueueMember.timer);
            }
            pool[kWaitQueue].shift();
            waitQueueMember.callback(undefined, connection);
        }
        else {
            const reason = connection.closed ? 'error' : isStale ? 'stale' : 'idle';
            destroyConnection(pool, connection, reason);
        }
    }
    const maxPoolSize = pool.options.maxPoolSize;
    if (pool.waitQueueSize && (maxPoolSize <= 0 || pool.totalConnectionCount < maxPoolSize)) {
        createConnection(pool, (err, connection) => {
            const waitQueueMember = pool[kWaitQueue].shift();
            if (!waitQueueMember || waitQueueMember[kCancelled]) {
                if (!err && connection) {
                    pool[kConnections].push(connection);
                }
                pool[kProcessingWaitQueue] = false;
                return;
            }
            if (err) {
                pool.emit(ConnectionPool.CONNECTION_CHECK_OUT_FAILED, new connection_pool_events_1.ConnectionCheckOutFailedEvent(pool, err));
            }
            else if (connection) {
                pool.emit(ConnectionPool.CONNECTION_CHECKED_OUT, new connection_pool_events_1.ConnectionCheckedOutEvent(pool, connection));
            }
            if (waitQueueMember.timer) {
                clearTimeout(waitQueueMember.timer);
            }
            waitQueueMember.callback(err, connection);
            pool[kProcessingWaitQueue] = false;
            process.nextTick(() => processWaitQueue(pool));
        });
    }
    else {
        pool[kProcessingWaitQueue] = false;
    }
}
exports.CMAP_EVENTS = [
    ConnectionPool.CONNECTION_POOL_CREATED,
    ConnectionPool.CONNECTION_POOL_CLOSED,
    ConnectionPool.CONNECTION_CREATED,
    ConnectionPool.CONNECTION_READY,
    ConnectionPool.CONNECTION_CLOSED,
    ConnectionPool.CONNECTION_CHECK_OUT_STARTED,
    ConnectionPool.CONNECTION_CHECK_OUT_FAILED,
    ConnectionPool.CONNECTION_CHECKED_OUT,
    ConnectionPool.CONNECTION_CHECKED_IN,
    ConnectionPool.CONNECTION_POOL_CLEARED
];
//# sourceMappingURL=connection_pool.js.map
}, function(modId) { var map = {"./connection":1647755346537,"../logger":1647755346591,"./metrics":1647755346547,"./connect":1647755346600,"../utils":1647755346512,"../error":1647755346514,"./errors":1647755346617,"./connection_pool_events":1647755346618,"../mongo_types":1647755346546}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346600, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.LEGAL_TCP_SOCKET_OPTIONS = exports.LEGAL_TLS_SOCKET_OPTIONS = exports.connect = void 0;
const net = require("net");
const tls = require("tls");
const connection_1 = require("./connection");
const error_1 = require("../error");
const defaultAuthProviders_1 = require("./auth/defaultAuthProviders");
const auth_provider_1 = require("./auth/auth_provider");
const utils_1 = require("../utils");
const constants_1 = require("./wire_protocol/constants");
const bson_1 = require("../bson");
const FAKE_MONGODB_SERVICE_ID = typeof process.env.FAKE_MONGODB_SERVICE_ID === 'string' &&
    process.env.FAKE_MONGODB_SERVICE_ID.toLowerCase() === 'true';
function connect(options, callback) {
    makeConnection(options, (err, socket) => {
        var _a;
        if (err || !socket) {
            return callback(err);
        }
        let ConnectionType = (_a = options.connectionType) !== null && _a !== void 0 ? _a : connection_1.Connection;
        if (options.autoEncrypter) {
            ConnectionType = connection_1.CryptoConnection;
        }
        performInitialHandshake(new ConnectionType(socket, options), options, callback);
    });
}
exports.connect = connect;
function checkSupportedServer(ismaster, options) {
    var _a;
    const serverVersionHighEnough = ismaster &&
        (typeof ismaster.maxWireVersion === 'number' || ismaster.maxWireVersion instanceof bson_1.Int32) &&
        ismaster.maxWireVersion >= constants_1.MIN_SUPPORTED_WIRE_VERSION;
    const serverVersionLowEnough = ismaster &&
        (typeof ismaster.minWireVersion === 'number' || ismaster.minWireVersion instanceof bson_1.Int32) &&
        ismaster.minWireVersion <= constants_1.MAX_SUPPORTED_WIRE_VERSION;
    if (serverVersionHighEnough) {
        if (serverVersionLowEnough) {
            return null;
        }
        const message = `Server at ${options.hostAddress} reports minimum wire version ${JSON.stringify(ismaster.minWireVersion)}, but this version of the Node.js Driver requires at most ${constants_1.MAX_SUPPORTED_WIRE_VERSION} (MongoDB ${constants_1.MAX_SUPPORTED_SERVER_VERSION})`;
        return new error_1.MongoCompatibilityError(message);
    }
    const message = `Server at ${options.hostAddress} reports maximum wire version ${(_a = JSON.stringify(ismaster.maxWireVersion)) !== null && _a !== void 0 ? _a : 0}, but this version of the Node.js Driver requires at least ${constants_1.MIN_SUPPORTED_WIRE_VERSION} (MongoDB ${constants_1.MIN_SUPPORTED_SERVER_VERSION})`;
    return new error_1.MongoCompatibilityError(message);
}
function performInitialHandshake(conn, options, _callback) {
    const callback = function (err, ret) {
        if (err && conn) {
            conn.destroy();
        }
        _callback(err, ret);
    };
    const credentials = options.credentials;
    if (credentials) {
        if (!(credentials.mechanism === defaultAuthProviders_1.AuthMechanism.MONGODB_DEFAULT) &&
            !defaultAuthProviders_1.AUTH_PROVIDERS.get(credentials.mechanism)) {
            callback(new error_1.MongoInvalidArgumentError(`AuthMechanism '${credentials.mechanism}' not supported`));
            return;
        }
    }
    const authContext = new auth_provider_1.AuthContext(conn, credentials, options);
    prepareHandshakeDocument(authContext, (err, handshakeDoc) => {
        if (err || !handshakeDoc) {
            return callback(err);
        }
        const handshakeOptions = Object.assign({}, options);
        if (typeof options.connectTimeoutMS === 'number') {
            // The handshake technically is a monitoring check, so its socket timeout should be connectTimeoutMS
            handshakeOptions.socketTimeoutMS = options.connectTimeoutMS;
        }
        const start = new Date().getTime();
        conn.command((0, utils_1.ns)('admin.$cmd'), handshakeDoc, handshakeOptions, (err, response) => {
            if (err) {
                callback(err);
                return;
            }
            if ((response === null || response === void 0 ? void 0 : response.ok) === 0) {
                callback(new error_1.MongoServerError(response));
                return;
            }
            if ('isWritablePrimary' in response) {
                // Provide pre-hello-style response document.
                response.ismaster = response.isWritablePrimary;
            }
            if (response.helloOk) {
                conn.helloOk = true;
            }
            const supportedServerErr = checkSupportedServer(response, options);
            if (supportedServerErr) {
                callback(supportedServerErr);
                return;
            }
            if (options.loadBalanced) {
                // TODO: Durran: Remove when server support exists. (NODE-3431)
                if (FAKE_MONGODB_SERVICE_ID) {
                    response.serviceId = response.topologyVersion.processId;
                }
                if (!response.serviceId) {
                    return callback(new error_1.MongoCompatibilityError('Driver attempted to initialize in load balancing mode, ' +
                        'but the server does not support this mode.'));
                }
            }
            // NOTE: This is metadata attached to the connection while porting away from
            //       handshake being done in the `Server` class. Likely, it should be
            //       relocated, or at very least restructured.
            conn.ismaster = response;
            conn.lastIsMasterMS = new Date().getTime() - start;
            if (!response.arbiterOnly && credentials) {
                // store the response on auth context
                authContext.response = response;
                const resolvedCredentials = credentials.resolveAuthMechanism(response);
                const provider = defaultAuthProviders_1.AUTH_PROVIDERS.get(resolvedCredentials.mechanism);
                if (!provider) {
                    return callback(new error_1.MongoInvalidArgumentError(`No AuthProvider for ${resolvedCredentials.mechanism} defined.`));
                }
                provider.auth(authContext, err => {
                    if (err)
                        return callback(err);
                    callback(undefined, conn);
                });
                return;
            }
            callback(undefined, conn);
        });
    });
}
function prepareHandshakeDocument(authContext, callback) {
    const options = authContext.options;
    const compressors = options.compressors ? options.compressors : [];
    const { serverApi } = authContext.connection;
    const handshakeDoc = {
        [(serverApi === null || serverApi === void 0 ? void 0 : serverApi.version) ? 'hello' : 'ismaster']: true,
        helloOk: true,
        client: options.metadata || (0, utils_1.makeClientMetadata)(options),
        compression: compressors,
        loadBalanced: options.loadBalanced
    };
    const credentials = authContext.credentials;
    if (credentials) {
        if (credentials.mechanism === defaultAuthProviders_1.AuthMechanism.MONGODB_DEFAULT && credentials.username) {
            handshakeDoc.saslSupportedMechs = `${credentials.source}.${credentials.username}`;
            const provider = defaultAuthProviders_1.AUTH_PROVIDERS.get(defaultAuthProviders_1.AuthMechanism.MONGODB_SCRAM_SHA256);
            if (!provider) {
                // This auth mechanism is always present.
                return callback(new error_1.MongoInvalidArgumentError(`No AuthProvider for ${defaultAuthProviders_1.AuthMechanism.MONGODB_SCRAM_SHA256} defined.`));
            }
            return provider.prepare(handshakeDoc, authContext, callback);
        }
        const provider = defaultAuthProviders_1.AUTH_PROVIDERS.get(credentials.mechanism);
        if (!provider) {
            return callback(new error_1.MongoInvalidArgumentError(`No AuthProvider for ${credentials.mechanism} defined.`));
        }
        return provider.prepare(handshakeDoc, authContext, callback);
    }
    callback(undefined, handshakeDoc);
}
/** @public */
exports.LEGAL_TLS_SOCKET_OPTIONS = [
    'ALPNProtocols',
    'ca',
    'cert',
    'checkServerIdentity',
    'ciphers',
    'crl',
    'ecdhCurve',
    'key',
    'minDHSize',
    'passphrase',
    'pfx',
    'rejectUnauthorized',
    'secureContext',
    'secureProtocol',
    'servername',
    'session'
];
/** @public */
exports.LEGAL_TCP_SOCKET_OPTIONS = [
    'family',
    'hints',
    'localAddress',
    'localPort',
    'lookup'
];
function parseConnectOptions(options) {
    const hostAddress = options.hostAddress;
    if (!hostAddress)
        throw new error_1.MongoInvalidArgumentError('Option "hostAddress" is required');
    const result = {};
    for (const name of exports.LEGAL_TCP_SOCKET_OPTIONS) {
        if (options[name] != null) {
            result[name] = options[name];
        }
    }
    if (typeof hostAddress.socketPath === 'string') {
        result.path = hostAddress.socketPath;
        return result;
    }
    else if (typeof hostAddress.host === 'string') {
        result.host = hostAddress.host;
        result.port = hostAddress.port;
        return result;
    }
    else {
        // This should never happen since we set up HostAddresses
        // But if we don't throw here the socket could hang until timeout
        // TODO(NODE-3483)
        throw new error_1.MongoRuntimeError(`Unexpected HostAddress ${JSON.stringify(hostAddress)}`);
    }
}
function parseSslOptions(options) {
    const result = parseConnectOptions(options);
    // Merge in valid SSL options
    for (const name of exports.LEGAL_TLS_SOCKET_OPTIONS) {
        if (options[name] != null) {
            result[name] = options[name];
        }
    }
    // Set default sni servername to be the same as host
    if (result.servername == null && result.host && !net.isIP(result.host)) {
        result.servername = result.host;
    }
    return result;
}
const SOCKET_ERROR_EVENT_LIST = ['error', 'close', 'timeout', 'parseError'];
const SOCKET_ERROR_EVENTS = new Set(SOCKET_ERROR_EVENT_LIST);
function makeConnection(options, _callback) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const useTLS = (_a = options.tls) !== null && _a !== void 0 ? _a : false;
    const keepAlive = (_b = options.keepAlive) !== null && _b !== void 0 ? _b : true;
    const socketTimeoutMS = (_d = (_c = options.socketTimeoutMS) !== null && _c !== void 0 ? _c : Reflect.get(options, 'socketTimeout')) !== null && _d !== void 0 ? _d : 0;
    const noDelay = (_e = options.noDelay) !== null && _e !== void 0 ? _e : true;
    const connectionTimeout = (_f = options.connectTimeoutMS) !== null && _f !== void 0 ? _f : 30000;
    const rejectUnauthorized = (_g = options.rejectUnauthorized) !== null && _g !== void 0 ? _g : true;
    const keepAliveInitialDelay = (_j = (((_h = options.keepAliveInitialDelay) !== null && _h !== void 0 ? _h : 120000) > socketTimeoutMS
        ? Math.round(socketTimeoutMS / 2)
        : options.keepAliveInitialDelay)) !== null && _j !== void 0 ? _j : 120000;
    let socket;
    const callback = function (err, ret) {
        if (err && socket) {
            socket.destroy();
        }
        _callback(err, ret);
    };
    if (useTLS) {
        const tlsSocket = tls.connect(parseSslOptions(options));
        if (typeof tlsSocket.disableRenegotiation === 'function') {
            tlsSocket.disableRenegotiation();
        }
        socket = tlsSocket;
    }
    else {
        socket = net.createConnection(parseConnectOptions(options));
    }
    socket.setKeepAlive(keepAlive, keepAliveInitialDelay);
    socket.setTimeout(connectionTimeout);
    socket.setNoDelay(noDelay);
    const connectEvent = useTLS ? 'secureConnect' : 'connect';
    let cancellationHandler;
    function errorHandler(eventName) {
        return (err) => {
            SOCKET_ERROR_EVENTS.forEach(event => socket.removeAllListeners(event));
            if (cancellationHandler && options.cancellationToken) {
                options.cancellationToken.removeListener('cancel', cancellationHandler);
            }
            socket.removeListener(connectEvent, connectHandler);
            callback(connectionFailureError(eventName, err));
        };
    }
    function connectHandler() {
        SOCKET_ERROR_EVENTS.forEach(event => socket.removeAllListeners(event));
        if (cancellationHandler && options.cancellationToken) {
            options.cancellationToken.removeListener('cancel', cancellationHandler);
        }
        if ('authorizationError' in socket) {
            if (socket.authorizationError && rejectUnauthorized) {
                return callback(socket.authorizationError);
            }
        }
        socket.setTimeout(socketTimeoutMS);
        callback(undefined, socket);
    }
    SOCKET_ERROR_EVENTS.forEach(event => socket.once(event, errorHandler(event)));
    if (options.cancellationToken) {
        cancellationHandler = errorHandler('cancel');
        options.cancellationToken.once('cancel', cancellationHandler);
    }
    socket.once(connectEvent, connectHandler);
}
function connectionFailureError(type, err) {
    switch (type) {
        case 'error':
            return new error_1.MongoNetworkError(err);
        case 'timeout':
            return new error_1.MongoNetworkTimeoutError('connection timed out');
        case 'close':
            return new error_1.MongoNetworkError('connection closed');
        case 'cancel':
            return new error_1.MongoNetworkError('connection establishment was cancelled');
        default:
            return new error_1.MongoNetworkError('unknown network error');
    }
}
//# sourceMappingURL=connect.js.map
}, function(modId) { var map = {"./connection":1647755346537,"../error":1647755346514,"./auth/defaultAuthProviders":1647755346601,"./auth/auth_provider":1647755346603,"../utils":1647755346512,"./wire_protocol/constants":1647755346520}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346601, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_PROVIDERS = exports.AuthMechanism = void 0;
const mongocr_1 = require("./mongocr");
const x509_1 = require("./x509");
const plain_1 = require("./plain");
const gssapi_1 = require("./gssapi");
const scram_1 = require("./scram");
const mongodb_aws_1 = require("./mongodb_aws");
/** @public */
exports.AuthMechanism = Object.freeze({
    MONGODB_AWS: 'MONGODB-AWS',
    MONGODB_CR: 'MONGODB-CR',
    MONGODB_DEFAULT: 'DEFAULT',
    MONGODB_GSSAPI: 'GSSAPI',
    MONGODB_PLAIN: 'PLAIN',
    MONGODB_SCRAM_SHA1: 'SCRAM-SHA-1',
    MONGODB_SCRAM_SHA256: 'SCRAM-SHA-256',
    MONGODB_X509: 'MONGODB-X509'
});
exports.AUTH_PROVIDERS = new Map([
    [exports.AuthMechanism.MONGODB_AWS, new mongodb_aws_1.MongoDBAWS()],
    [exports.AuthMechanism.MONGODB_CR, new mongocr_1.MongoCR()],
    [exports.AuthMechanism.MONGODB_GSSAPI, new gssapi_1.GSSAPI()],
    [exports.AuthMechanism.MONGODB_PLAIN, new plain_1.Plain()],
    [exports.AuthMechanism.MONGODB_SCRAM_SHA1, new scram_1.ScramSHA1()],
    [exports.AuthMechanism.MONGODB_SCRAM_SHA256, new scram_1.ScramSHA256()],
    [exports.AuthMechanism.MONGODB_X509, new x509_1.X509()]
]);
//# sourceMappingURL=defaultAuthProviders.js.map
}, function(modId) { var map = {"./mongocr":1647755346602,"./x509":1647755346604,"./plain":1647755346605,"./gssapi":1647755346607,"./scram":1647755346609,"./mongodb_aws":1647755346612}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346602, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoCR = void 0;
const crypto = require("crypto");
const auth_provider_1 = require("./auth_provider");
const utils_1 = require("../../utils");
const error_1 = require("../../error");
class MongoCR extends auth_provider_1.AuthProvider {
    auth(authContext, callback) {
        const { connection, credentials } = authContext;
        if (!credentials) {
            return callback(new error_1.MongoMissingCredentialsError('AuthContext must provide credentials.'));
        }
        const username = credentials.username;
        const password = credentials.password;
        const source = credentials.source;
        connection.command((0, utils_1.ns)(`${source}.$cmd`), { getnonce: 1 }, undefined, (err, r) => {
            let nonce = null;
            let key = null;
            // Get nonce
            if (err == null) {
                nonce = r.nonce;
                // Use node md5 generator
                let md5 = crypto.createHash('md5');
                // Generate keys used for authentication
                md5.update(`${username}:mongo:${password}`, 'utf8');
                const hash_password = md5.digest('hex');
                // Final key
                md5 = crypto.createHash('md5');
                md5.update(nonce + username + hash_password, 'utf8');
                key = md5.digest('hex');
            }
            const authenticateCommand = {
                authenticate: 1,
                user: username,
                nonce,
                key
            };
            connection.command((0, utils_1.ns)(`${source}.$cmd`), authenticateCommand, undefined, callback);
        });
    }
}
exports.MongoCR = MongoCR;
//# sourceMappingURL=mongocr.js.map
}, function(modId) { var map = {"./auth_provider":1647755346603,"../../utils":1647755346512,"../../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346603, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = exports.AuthContext = void 0;
const error_1 = require("../../error");
/** Context used during authentication */
class AuthContext {
    constructor(connection, credentials, options) {
        this.connection = connection;
        this.credentials = credentials;
        this.options = options;
    }
}
exports.AuthContext = AuthContext;
class AuthProvider {
    /**
     * Prepare the handshake document before the initial handshake.
     *
     * @param handshakeDoc - The document used for the initial handshake on a connection
     * @param authContext - Context for authentication flow
     */
    prepare(handshakeDoc, authContext, callback) {
        callback(undefined, handshakeDoc);
    }
    /**
     * Authenticate
     *
     * @param context - A shared context for authentication flow
     * @param callback - The callback to return the result from the authentication
     */
    auth(context, callback) {
        // TODO(NODE-3483): Replace this with MongoMethodOverrideError
        callback(new error_1.MongoRuntimeError('`auth` method must be overridden by subclass'));
    }
}
exports.AuthProvider = AuthProvider;
//# sourceMappingURL=auth_provider.js.map
}, function(modId) { var map = {"../../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346604, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.X509 = void 0;
const auth_provider_1 = require("./auth_provider");
const error_1 = require("../../error");
const utils_1 = require("../../utils");
class X509 extends auth_provider_1.AuthProvider {
    prepare(handshakeDoc, authContext, callback) {
        const { credentials } = authContext;
        if (!credentials) {
            return callback(new error_1.MongoMissingCredentialsError('AuthContext must provide credentials.'));
        }
        Object.assign(handshakeDoc, {
            speculativeAuthenticate: x509AuthenticateCommand(credentials)
        });
        callback(undefined, handshakeDoc);
    }
    auth(authContext, callback) {
        const connection = authContext.connection;
        const credentials = authContext.credentials;
        if (!credentials) {
            return callback(new error_1.MongoMissingCredentialsError('AuthContext must provide credentials.'));
        }
        const response = authContext.response;
        if (response && response.speculativeAuthenticate) {
            return callback();
        }
        connection.command((0, utils_1.ns)('$external.$cmd'), x509AuthenticateCommand(credentials), undefined, callback);
    }
}
exports.X509 = X509;
function x509AuthenticateCommand(credentials) {
    const command = { authenticate: 1, mechanism: 'MONGODB-X509' };
    if (credentials.username) {
        command.user = credentials.username;
    }
    return command;
}
//# sourceMappingURL=x509.js.map
}, function(modId) { var map = {"./auth_provider":1647755346603,"../../error":1647755346514,"../../utils":1647755346512}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346605, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Plain = void 0;
const bson_1 = require("../../bson");
const auth_provider_1 = require("./auth_provider");
const error_1 = require("../../error");
const utils_1 = require("../../utils");
class Plain extends auth_provider_1.AuthProvider {
    auth(authContext, callback) {
        const { connection, credentials } = authContext;
        if (!credentials) {
            return callback(new error_1.MongoMissingCredentialsError('AuthContext must provide credentials.'));
        }
        const username = credentials.username;
        const password = credentials.password;
        const payload = new bson_1.Binary(Buffer.from(`\x00${username}\x00${password}`));
        const command = {
            saslStart: 1,
            mechanism: 'PLAIN',
            payload: payload,
            autoAuthorize: 1
        };
        connection.command((0, utils_1.ns)('$external.$cmd'), command, undefined, callback);
    }
}
exports.Plain = Plain;
//# sourceMappingURL=plain.js.map
}, function(modId) { var map = {"./auth_provider":1647755346603,"../../error":1647755346514,"../../utils":1647755346512}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346607, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.GSSAPI = void 0;
const auth_provider_1 = require("./auth_provider");
const error_1 = require("../../error");
const deps_1 = require("../../deps");
const utils_1 = require("../../utils");
const dns = require("dns");
class GSSAPI extends auth_provider_1.AuthProvider {
    auth(authContext, callback) {
        const { connection, credentials } = authContext;
        if (credentials == null)
            return callback(new error_1.MongoMissingCredentialsError('Credentials required for GSSAPI authentication'));
        const { username } = credentials;
        function externalCommand(command, cb) {
            return connection.command((0, utils_1.ns)('$external.$cmd'), command, undefined, cb);
        }
        makeKerberosClient(authContext, (err, client) => {
            if (err)
                return callback(err);
            if (client == null)
                return callback(new error_1.MongoMissingDependencyError('GSSAPI client missing'));
            client.step('', (err, payload) => {
                if (err)
                    return callback(err);
                externalCommand(saslStart(payload), (err, result) => {
                    if (err)
                        return callback(err);
                    if (result == null)
                        return callback();
                    negotiate(client, 10, result.payload, (err, payload) => {
                        if (err)
                            return callback(err);
                        externalCommand(saslContinue(payload, result.conversationId), (err, result) => {
                            if (err)
                                return callback(err);
                            if (result == null)
                                return callback();
                            finalize(client, username, result.payload, (err, payload) => {
                                if (err)
                                    return callback(err);
                                externalCommand({
                                    saslContinue: 1,
                                    conversationId: result.conversationId,
                                    payload
                                }, (err, result) => {
                                    if (err)
                                        return callback(err);
                                    callback(undefined, result);
                                });
                            });
                        });
                    });
                });
            });
        });
    }
}
exports.GSSAPI = GSSAPI;
function makeKerberosClient(authContext, callback) {
    var _a;
    const { hostAddress } = authContext.options;
    const { credentials } = authContext;
    if (!hostAddress || typeof hostAddress.host !== 'string' || !credentials) {
        return callback(new error_1.MongoInvalidArgumentError('Connection must have host and port and credentials defined.'));
    }
    if ('kModuleError' in deps_1.Kerberos) {
        return callback(deps_1.Kerberos['kModuleError']);
    }
    const { initializeClient } = deps_1.Kerberos;
    const { username, password } = credentials;
    const mechanismProperties = credentials.mechanismProperties;
    const serviceName = (_a = mechanismProperties.SERVICE_NAME) !== null && _a !== void 0 ? _a : 'mongodb';
    performGssapiCanonicalizeHostName(hostAddress.host, mechanismProperties, (err, host) => {
        if (err)
            return callback(err);
        const initOptions = {};
        if (password != null) {
            Object.assign(initOptions, { user: username, password: password });
        }
        let spn = `${serviceName}${process.platform === 'win32' ? '/' : '@'}${host}`;
        if ('SERVICE_REALM' in mechanismProperties) {
            spn = `${spn}@${mechanismProperties.SERVICE_REALM}`;
        }
        initializeClient(spn, initOptions, (err, client) => {
            // TODO(NODE-3483)
            if (err)
                return callback(new error_1.MongoRuntimeError(err));
            callback(undefined, client);
        });
    });
}
function saslStart(payload) {
    return {
        saslStart: 1,
        mechanism: 'GSSAPI',
        payload,
        autoAuthorize: 1
    };
}
function saslContinue(payload, conversationId) {
    return {
        saslContinue: 1,
        conversationId,
        payload
    };
}
function negotiate(client, retries, payload, callback) {
    client.step(payload, (err, response) => {
        // Retries exhausted, raise error
        if (err && retries === 0)
            return callback(err);
        // Adjust number of retries and call step again
        if (err)
            return negotiate(client, retries - 1, payload, callback);
        // Return the payload
        callback(undefined, response || '');
    });
}
function finalize(client, user, payload, callback) {
    // GSS Client Unwrap
    client.unwrap(payload, (err, response) => {
        if (err)
            return callback(err);
        // Wrap the response
        client.wrap(response || '', { user }, (err, wrapped) => {
            if (err)
                return callback(err);
            // Return the payload
            callback(undefined, wrapped);
        });
    });
}
function performGssapiCanonicalizeHostName(host, mechanismProperties, callback) {
    if (!mechanismProperties.gssapiCanonicalizeHostName)
        return callback(undefined, host);
    // Attempt to resolve the host name
    dns.resolveCname(host, (err, r) => {
        if (err)
            return callback(err);
        // Get the first resolve host id
        if (Array.isArray(r) && r.length > 0) {
            return callback(undefined, r[0]);
        }
        callback(undefined, host);
    });
}
//# sourceMappingURL=gssapi.js.map
}, function(modId) { var map = {"./auth_provider":1647755346603,"../../error":1647755346514,"../../utils":1647755346512}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346609, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScramSHA256 = exports.ScramSHA1 = void 0;
const crypto = require("crypto");
const bson_1 = require("../../bson");
const error_1 = require("../../error");
const auth_provider_1 = require("./auth_provider");
const utils_1 = require("../../utils");
const deps_1 = require("../../deps");
const defaultAuthProviders_1 = require("./defaultAuthProviders");
class ScramSHA extends auth_provider_1.AuthProvider {
    constructor(cryptoMethod) {
        super();
        this.cryptoMethod = cryptoMethod || 'sha1';
    }
    prepare(handshakeDoc, authContext, callback) {
        const cryptoMethod = this.cryptoMethod;
        const credentials = authContext.credentials;
        if (!credentials) {
            return callback(new error_1.MongoMissingCredentialsError('AuthContext must provide credentials.'));
        }
        if (cryptoMethod === 'sha256' && deps_1.saslprep == null) {
            (0, utils_1.emitWarning)('Warning: no saslprep library specified. Passwords will not be sanitized');
        }
        crypto.randomBytes(24, (err, nonce) => {
            if (err) {
                return callback(err);
            }
            // store the nonce for later use
            Object.assign(authContext, { nonce });
            const request = Object.assign({}, handshakeDoc, {
                speculativeAuthenticate: Object.assign(makeFirstMessage(cryptoMethod, credentials, nonce), {
                    db: credentials.source
                })
            });
            callback(undefined, request);
        });
    }
    auth(authContext, callback) {
        const response = authContext.response;
        if (response && response.speculativeAuthenticate) {
            continueScramConversation(this.cryptoMethod, response.speculativeAuthenticate, authContext, callback);
            return;
        }
        executeScram(this.cryptoMethod, authContext, callback);
    }
}
function cleanUsername(username) {
    return username.replace('=', '=3D').replace(',', '=2C');
}
function clientFirstMessageBare(username, nonce) {
    // NOTE: This is done b/c Javascript uses UTF-16, but the server is hashing in UTF-8.
    // Since the username is not sasl-prep-d, we need to do this here.
    return Buffer.concat([
        Buffer.from('n=', 'utf8'),
        Buffer.from(username, 'utf8'),
        Buffer.from(',r=', 'utf8'),
        Buffer.from(nonce.toString('base64'), 'utf8')
    ]);
}
function makeFirstMessage(cryptoMethod, credentials, nonce) {
    const username = cleanUsername(credentials.username);
    const mechanism = cryptoMethod === 'sha1' ? defaultAuthProviders_1.AuthMechanism.MONGODB_SCRAM_SHA1 : defaultAuthProviders_1.AuthMechanism.MONGODB_SCRAM_SHA256;
    // NOTE: This is done b/c Javascript uses UTF-16, but the server is hashing in UTF-8.
    // Since the username is not sasl-prep-d, we need to do this here.
    return {
        saslStart: 1,
        mechanism,
        payload: new bson_1.Binary(Buffer.concat([Buffer.from('n,,', 'utf8'), clientFirstMessageBare(username, nonce)])),
        autoAuthorize: 1,
        options: { skipEmptyExchange: true }
    };
}
function executeScram(cryptoMethod, authContext, callback) {
    const { connection, credentials } = authContext;
    if (!credentials) {
        return callback(new error_1.MongoMissingCredentialsError('AuthContext must provide credentials.'));
    }
    if (!authContext.nonce) {
        return callback(new error_1.MongoInvalidArgumentError('AuthContext must contain a valid nonce property'));
    }
    const nonce = authContext.nonce;
    const db = credentials.source;
    const saslStartCmd = makeFirstMessage(cryptoMethod, credentials, nonce);
    connection.command((0, utils_1.ns)(`${db}.$cmd`), saslStartCmd, undefined, (_err, result) => {
        const err = resolveError(_err, result);
        if (err) {
            return callback(err);
        }
        continueScramConversation(cryptoMethod, result, authContext, callback);
    });
}
function continueScramConversation(cryptoMethod, response, authContext, callback) {
    const connection = authContext.connection;
    const credentials = authContext.credentials;
    if (!credentials) {
        return callback(new error_1.MongoMissingCredentialsError('AuthContext must provide credentials.'));
    }
    if (!authContext.nonce) {
        return callback(new error_1.MongoInvalidArgumentError('Unable to continue SCRAM without valid nonce'));
    }
    const nonce = authContext.nonce;
    const db = credentials.source;
    const username = cleanUsername(credentials.username);
    const password = credentials.password;
    let processedPassword;
    if (cryptoMethod === 'sha256') {
        processedPassword = 'kModuleError' in deps_1.saslprep ? password : (0, deps_1.saslprep)(password);
    }
    else {
        try {
            processedPassword = passwordDigest(username, password);
        }
        catch (e) {
            return callback(e);
        }
    }
    const payload = Buffer.isBuffer(response.payload)
        ? new bson_1.Binary(response.payload)
        : response.payload;
    const dict = parsePayload(payload.value());
    const iterations = parseInt(dict.i, 10);
    if (iterations && iterations < 4096) {
        callback(
        // TODO(NODE-3483)
        new error_1.MongoRuntimeError(`Server returned an invalid iteration count ${iterations}`), false);
        return;
    }
    const salt = dict.s;
    const rnonce = dict.r;
    if (rnonce.startsWith('nonce')) {
        // TODO(NODE-3483)
        callback(new error_1.MongoRuntimeError(`Server returned an invalid nonce: ${rnonce}`), false);
        return;
    }
    // Set up start of proof
    const withoutProof = `c=biws,r=${rnonce}`;
    const saltedPassword = HI(processedPassword, Buffer.from(salt, 'base64'), iterations, cryptoMethod);
    const clientKey = HMAC(cryptoMethod, saltedPassword, 'Client Key');
    const serverKey = HMAC(cryptoMethod, saltedPassword, 'Server Key');
    const storedKey = H(cryptoMethod, clientKey);
    const authMessage = [clientFirstMessageBare(username, nonce), payload.value(), withoutProof].join(',');
    const clientSignature = HMAC(cryptoMethod, storedKey, authMessage);
    const clientProof = `p=${xor(clientKey, clientSignature)}`;
    const clientFinal = [withoutProof, clientProof].join(',');
    const serverSignature = HMAC(cryptoMethod, serverKey, authMessage);
    const saslContinueCmd = {
        saslContinue: 1,
        conversationId: response.conversationId,
        payload: new bson_1.Binary(Buffer.from(clientFinal))
    };
    connection.command((0, utils_1.ns)(`${db}.$cmd`), saslContinueCmd, undefined, (_err, r) => {
        const err = resolveError(_err, r);
        if (err) {
            return callback(err);
        }
        const parsedResponse = parsePayload(r.payload.value());
        if (!compareDigest(Buffer.from(parsedResponse.v, 'base64'), serverSignature)) {
            callback(new error_1.MongoRuntimeError('Server returned an invalid signature'));
            return;
        }
        if (!r || r.done !== false) {
            return callback(err, r);
        }
        const retrySaslContinueCmd = {
            saslContinue: 1,
            conversationId: r.conversationId,
            payload: Buffer.alloc(0)
        };
        connection.command((0, utils_1.ns)(`${db}.$cmd`), retrySaslContinueCmd, undefined, callback);
    });
}
function parsePayload(payload) {
    const dict = {};
    const parts = payload.split(',');
    for (let i = 0; i < parts.length; i++) {
        const valueParts = parts[i].split('=');
        dict[valueParts[0]] = valueParts[1];
    }
    return dict;
}
function passwordDigest(username, password) {
    if (typeof username !== 'string') {
        throw new error_1.MongoInvalidArgumentError('Username must be a string');
    }
    if (typeof password !== 'string') {
        throw new error_1.MongoInvalidArgumentError('Password must be a string');
    }
    if (password.length === 0) {
        throw new error_1.MongoInvalidArgumentError('Password cannot be empty');
    }
    const md5 = crypto.createHash('md5');
    md5.update(`${username}:mongo:${password}`, 'utf8');
    return md5.digest('hex');
}
// XOR two buffers
function xor(a, b) {
    if (!Buffer.isBuffer(a)) {
        a = Buffer.from(a);
    }
    if (!Buffer.isBuffer(b)) {
        b = Buffer.from(b);
    }
    const length = Math.max(a.length, b.length);
    const res = [];
    for (let i = 0; i < length; i += 1) {
        res.push(a[i] ^ b[i]);
    }
    return Buffer.from(res).toString('base64');
}
function H(method, text) {
    return crypto.createHash(method).update(text).digest();
}
function HMAC(method, key, text) {
    return crypto.createHmac(method, key).update(text).digest();
}
let _hiCache = {};
let _hiCacheCount = 0;
function _hiCachePurge() {
    _hiCache = {};
    _hiCacheCount = 0;
}
const hiLengthMap = {
    sha256: 32,
    sha1: 20
};
function HI(data, salt, iterations, cryptoMethod) {
    // omit the work if already generated
    const key = [data, salt.toString('base64'), iterations].join('_');
    if (_hiCache[key] != null) {
        return _hiCache[key];
    }
    // generate the salt
    const saltedData = crypto.pbkdf2Sync(data, salt, iterations, hiLengthMap[cryptoMethod], cryptoMethod);
    // cache a copy to speed up the next lookup, but prevent unbounded cache growth
    if (_hiCacheCount >= 200) {
        _hiCachePurge();
    }
    _hiCache[key] = saltedData;
    _hiCacheCount += 1;
    return saltedData;
}
function compareDigest(lhs, rhs) {
    if (lhs.length !== rhs.length) {
        return false;
    }
    if (typeof crypto.timingSafeEqual === 'function') {
        return crypto.timingSafeEqual(lhs, rhs);
    }
    let result = 0;
    for (let i = 0; i < lhs.length; i++) {
        result |= lhs[i] ^ rhs[i];
    }
    return result === 0;
}
function resolveError(err, result) {
    if (err)
        return err;
    if (result) {
        if (result.$err || result.errmsg)
            return new error_1.MongoServerError(result);
    }
}
class ScramSHA1 extends ScramSHA {
    constructor() {
        super('sha1');
    }
}
exports.ScramSHA1 = ScramSHA1;
class ScramSHA256 extends ScramSHA {
    constructor() {
        super('sha256');
    }
}
exports.ScramSHA256 = ScramSHA256;
//# sourceMappingURL=scram.js.map
}, function(modId) { var map = {"../../error":1647755346514,"./auth_provider":1647755346603,"../../utils":1647755346512,"./defaultAuthProviders":1647755346601}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346612, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBAWS = void 0;
const http = require("http");
const crypto = require("crypto");
const url = require("url");
const BSON = require("../../bson");
const auth_provider_1 = require("./auth_provider");
const mongo_credentials_1 = require("./mongo_credentials");
const error_1 = require("../../error");
const utils_1 = require("../../utils");
const deps_1 = require("../../deps");
const defaultAuthProviders_1 = require("./defaultAuthProviders");
const ASCII_N = 110;
const AWS_RELATIVE_URI = 'http://169.254.170.2';
const AWS_EC2_URI = 'http://169.254.169.254';
const AWS_EC2_PATH = '/latest/meta-data/iam/security-credentials';
const bsonOptions = {
    promoteLongs: true,
    promoteValues: true,
    promoteBuffers: false,
    bsonRegExp: false
};
class MongoDBAWS extends auth_provider_1.AuthProvider {
    auth(authContext, callback) {
        const { connection, credentials } = authContext;
        if (!credentials) {
            return callback(new error_1.MongoMissingCredentialsError('AuthContext must provide credentials.'));
        }
        if ('kModuleError' in deps_1.aws4) {
            return callback(deps_1.aws4['kModuleError']);
        }
        const { sign } = deps_1.aws4;
        if ((0, utils_1.maxWireVersion)(connection) < 9) {
            callback(new error_1.MongoCompatibilityError('MONGODB-AWS authentication requires MongoDB version 4.4 or later'));
            return;
        }
        if (!credentials.username) {
            makeTempCredentials(credentials, (err, tempCredentials) => {
                if (err || !tempCredentials)
                    return callback(err);
                authContext.credentials = tempCredentials;
                this.auth(authContext, callback);
            });
            return;
        }
        const accessKeyId = credentials.username;
        const secretAccessKey = credentials.password;
        const sessionToken = credentials.mechanismProperties.AWS_SESSION_TOKEN;
        // If all three defined, include sessionToken, else include username and pass, else no credentials
        const awsCredentials = accessKeyId && secretAccessKey && sessionToken
            ? { accessKeyId, secretAccessKey, sessionToken }
            : accessKeyId && secretAccessKey
                ? { accessKeyId, secretAccessKey }
                : undefined;
        const db = credentials.source;
        crypto.randomBytes(32, (err, nonce) => {
            if (err) {
                callback(err);
                return;
            }
            const saslStart = {
                saslStart: 1,
                mechanism: 'MONGODB-AWS',
                payload: BSON.serialize({ r: nonce, p: ASCII_N }, bsonOptions)
            };
            connection.command((0, utils_1.ns)(`${db}.$cmd`), saslStart, undefined, (err, res) => {
                if (err)
                    return callback(err);
                const serverResponse = BSON.deserialize(res.payload.buffer, bsonOptions);
                const host = serverResponse.h;
                const serverNonce = serverResponse.s.buffer;
                if (serverNonce.length !== 64) {
                    callback(
                    // TODO(NODE-3483)
                    new error_1.MongoRuntimeError(`Invalid server nonce length ${serverNonce.length}, expected 64`));
                    return;
                }
                if (serverNonce.compare(nonce, 0, nonce.length, 0, nonce.length) !== 0) {
                    // TODO(NODE-3483)
                    callback(new error_1.MongoRuntimeError('Server nonce does not begin with client nonce'));
                    return;
                }
                if (host.length < 1 || host.length > 255 || host.indexOf('..') !== -1) {
                    // TODO(NODE-3483)
                    callback(new error_1.MongoRuntimeError(`Server returned an invalid host: "${host}"`));
                    return;
                }
                const body = 'Action=GetCallerIdentity&Version=2011-06-15';
                const options = sign({
                    method: 'POST',
                    host,
                    region: deriveRegion(serverResponse.h),
                    service: 'sts',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Content-Length': body.length,
                        'X-MongoDB-Server-Nonce': serverNonce.toString('base64'),
                        'X-MongoDB-GS2-CB-Flag': 'n'
                    },
                    path: '/',
                    body
                }, awsCredentials);
                const payload = {
                    a: options.headers.Authorization,
                    d: options.headers['X-Amz-Date']
                };
                if (sessionToken) {
                    payload.t = sessionToken;
                }
                const saslContinue = {
                    saslContinue: 1,
                    conversationId: 1,
                    payload: BSON.serialize(payload, bsonOptions)
                };
                connection.command((0, utils_1.ns)(`${db}.$cmd`), saslContinue, undefined, callback);
            });
        });
    }
}
exports.MongoDBAWS = MongoDBAWS;
function makeTempCredentials(credentials, callback) {
    function done(creds) {
        if (!creds.AccessKeyId || !creds.SecretAccessKey || !creds.Token) {
            callback(new error_1.MongoMissingCredentialsError('Could not obtain temporary MONGODB-AWS credentials'));
            return;
        }
        callback(undefined, new mongo_credentials_1.MongoCredentials({
            username: creds.AccessKeyId,
            password: creds.SecretAccessKey,
            source: credentials.source,
            mechanism: defaultAuthProviders_1.AuthMechanism.MONGODB_AWS,
            mechanismProperties: {
                AWS_SESSION_TOKEN: creds.Token
            }
        }));
    }
    // If the environment variable AWS_CONTAINER_CREDENTIALS_RELATIVE_URI
    // is set then drivers MUST assume that it was set by an AWS ECS agent
    if (process.env.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI) {
        request(`${AWS_RELATIVE_URI}${process.env.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI}`, undefined, (err, res) => {
            if (err)
                return callback(err);
            done(res);
        });
        return;
    }
    // Otherwise assume we are on an EC2 instance
    // get a token
    request(`${AWS_EC2_URI}/latest/api/token`, { method: 'PUT', json: false, headers: { 'X-aws-ec2-metadata-token-ttl-seconds': 30 } }, (err, token) => {
        if (err)
            return callback(err);
        // get role name
        request(`${AWS_EC2_URI}/${AWS_EC2_PATH}`, { json: false, headers: { 'X-aws-ec2-metadata-token': token } }, (err, roleName) => {
            if (err)
                return callback(err);
            // get temp credentials
            request(`${AWS_EC2_URI}/${AWS_EC2_PATH}/${roleName}`, { headers: { 'X-aws-ec2-metadata-token': token } }, (err, creds) => {
                if (err)
                    return callback(err);
                done(creds);
            });
        });
    });
}
function deriveRegion(host) {
    const parts = host.split('.');
    if (parts.length === 1 || parts[1] === 'amazonaws') {
        return 'us-east-1';
    }
    return parts[1];
}
function request(uri, _options, callback) {
    const options = Object.assign({
        method: 'GET',
        timeout: 10000,
        json: true
    }, url.parse(uri), _options);
    const req = http.request(options, res => {
        res.setEncoding('utf8');
        let data = '';
        res.on('data', d => (data += d));
        res.on('end', () => {
            if (options.json === false) {
                callback(undefined, data);
                return;
            }
            try {
                const parsed = JSON.parse(data);
                callback(undefined, parsed);
            }
            catch (err) {
                // TODO(NODE-3483)
                callback(new error_1.MongoRuntimeError(`Invalid JSON response: "${data}"`));
            }
        });
    });
    req.on('error', err => callback(err));
    req.end();
}
//# sourceMappingURL=mongodb_aws.js.map
}, function(modId) { var map = {"./auth_provider":1647755346603,"./mongo_credentials":1647755346614,"../../error":1647755346514,"../../utils":1647755346512,"./defaultAuthProviders":1647755346601}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346614, function(require, module, exports) {

// Resolves the default auth mechanism according to
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoCredentials = void 0;
const error_1 = require("../../error");
const defaultAuthProviders_1 = require("./defaultAuthProviders");
// https://github.com/mongodb/specifications/blob/master/source/auth/auth.rst
function getDefaultAuthMechanism(ismaster) {
    if (ismaster) {
        // If ismaster contains saslSupportedMechs, use scram-sha-256
        // if it is available, else scram-sha-1
        if (Array.isArray(ismaster.saslSupportedMechs)) {
            return ismaster.saslSupportedMechs.includes(defaultAuthProviders_1.AuthMechanism.MONGODB_SCRAM_SHA256)
                ? defaultAuthProviders_1.AuthMechanism.MONGODB_SCRAM_SHA256
                : defaultAuthProviders_1.AuthMechanism.MONGODB_SCRAM_SHA1;
        }
        // Fallback to legacy selection method. If wire version >= 3, use scram-sha-1
        if (ismaster.maxWireVersion >= 3) {
            return defaultAuthProviders_1.AuthMechanism.MONGODB_SCRAM_SHA1;
        }
    }
    // Default for wireprotocol < 3
    return defaultAuthProviders_1.AuthMechanism.MONGODB_CR;
}
/**
 * A representation of the credentials used by MongoDB
 * @public
 */
class MongoCredentials {
    constructor(options) {
        this.username = options.username;
        this.password = options.password;
        this.source = options.source;
        if (!this.source && options.db) {
            this.source = options.db;
        }
        this.mechanism = options.mechanism || defaultAuthProviders_1.AuthMechanism.MONGODB_DEFAULT;
        this.mechanismProperties = options.mechanismProperties || {};
        if (this.mechanism.match(/MONGODB-AWS/i)) {
            if (!this.username && process.env.AWS_ACCESS_KEY_ID) {
                this.username = process.env.AWS_ACCESS_KEY_ID;
            }
            if (!this.password && process.env.AWS_SECRET_ACCESS_KEY) {
                this.password = process.env.AWS_SECRET_ACCESS_KEY;
            }
            if (this.mechanismProperties.AWS_SESSION_TOKEN == null &&
                process.env.AWS_SESSION_TOKEN != null) {
                this.mechanismProperties = {
                    ...this.mechanismProperties,
                    AWS_SESSION_TOKEN: process.env.AWS_SESSION_TOKEN
                };
            }
        }
        Object.freeze(this.mechanismProperties);
        Object.freeze(this);
    }
    /** Determines if two MongoCredentials objects are equivalent */
    equals(other) {
        return (this.mechanism === other.mechanism &&
            this.username === other.username &&
            this.password === other.password &&
            this.source === other.source);
    }
    /**
     * If the authentication mechanism is set to "default", resolves the authMechanism
     * based on the server version and server supported sasl mechanisms.
     *
     * @param ismaster - An ismaster response from the server
     */
    resolveAuthMechanism(ismaster) {
        // If the mechanism is not "default", then it does not need to be resolved
        if (this.mechanism.match(/DEFAULT/i)) {
            return new MongoCredentials({
                username: this.username,
                password: this.password,
                source: this.source,
                mechanism: getDefaultAuthMechanism(ismaster),
                mechanismProperties: this.mechanismProperties
            });
        }
        return this;
    }
    validate() {
        if ((this.mechanism === defaultAuthProviders_1.AuthMechanism.MONGODB_GSSAPI ||
            this.mechanism === defaultAuthProviders_1.AuthMechanism.MONGODB_CR ||
            this.mechanism === defaultAuthProviders_1.AuthMechanism.MONGODB_PLAIN ||
            this.mechanism === defaultAuthProviders_1.AuthMechanism.MONGODB_SCRAM_SHA1 ||
            this.mechanism === defaultAuthProviders_1.AuthMechanism.MONGODB_SCRAM_SHA256) &&
            !this.username) {
            throw new error_1.MongoMissingCredentialsError(`Username required for mechanism '${this.mechanism}'`);
        }
        if (this.mechanism === defaultAuthProviders_1.AuthMechanism.MONGODB_GSSAPI ||
            this.mechanism === defaultAuthProviders_1.AuthMechanism.MONGODB_AWS ||
            this.mechanism === defaultAuthProviders_1.AuthMechanism.MONGODB_X509) {
            if (this.source != null && this.source !== '$external') {
                // TODO(NODE-3485): Replace this with a MongoAuthValidationError
                throw new error_1.MongoAPIError(`Invalid source '${this.source}' for mechanism '${this.mechanism}' specified.`);
            }
        }
        if (this.mechanism === defaultAuthProviders_1.AuthMechanism.MONGODB_PLAIN && this.source == null) {
            // TODO(NODE-3485): Replace this with a MongoAuthValidationError
            throw new error_1.MongoAPIError('PLAIN Authentication Mechanism needs an auth source');
        }
        if (this.mechanism === defaultAuthProviders_1.AuthMechanism.MONGODB_X509 && this.password != null) {
            if (this.password === '') {
                Reflect.set(this, 'password', undefined);
                return;
            }
            // TODO(NODE-3485): Replace this with a MongoAuthValidationError
            throw new error_1.MongoAPIError(`Password not allowed for mechanism MONGODB-X509`);
        }
    }
    static merge(creds, options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return new MongoCredentials({
            username: (_b = (_a = options.username) !== null && _a !== void 0 ? _a : creds === null || creds === void 0 ? void 0 : creds.username) !== null && _b !== void 0 ? _b : '',
            password: (_d = (_c = options.password) !== null && _c !== void 0 ? _c : creds === null || creds === void 0 ? void 0 : creds.password) !== null && _d !== void 0 ? _d : '',
            mechanism: (_f = (_e = options.mechanism) !== null && _e !== void 0 ? _e : creds === null || creds === void 0 ? void 0 : creds.mechanism) !== null && _f !== void 0 ? _f : defaultAuthProviders_1.AuthMechanism.MONGODB_DEFAULT,
            mechanismProperties: (_h = (_g = options.mechanismProperties) !== null && _g !== void 0 ? _g : creds === null || creds === void 0 ? void 0 : creds.mechanismProperties) !== null && _h !== void 0 ? _h : {},
            source: (_l = (_k = (_j = options.source) !== null && _j !== void 0 ? _j : options.db) !== null && _k !== void 0 ? _k : creds === null || creds === void 0 ? void 0 : creds.source) !== null && _l !== void 0 ? _l : 'admin'
        });
    }
}
exports.MongoCredentials = MongoCredentials;
//# sourceMappingURL=mongo_credentials.js.map
}, function(modId) { var map = {"../../error":1647755346514,"./defaultAuthProviders":1647755346601}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346617, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitQueueTimeoutError = exports.PoolClosedError = void 0;
const error_1 = require("../error");
/**
 * An error indicating a connection pool is closed
 * @category Error
 */
class PoolClosedError extends error_1.MongoDriverError {
    constructor(pool) {
        super('Attempted to check out a connection from closed connection pool');
        this.address = pool.address;
    }
    get name() {
        return 'MongoPoolClosedError';
    }
}
exports.PoolClosedError = PoolClosedError;
/**
 * An error thrown when a request to check out a connection times out
 * @category Error
 */
class WaitQueueTimeoutError extends error_1.MongoDriverError {
    constructor(message, address) {
        super(message);
        this.address = address;
    }
    get name() {
        return 'MongoWaitQueueTimeoutError';
    }
}
exports.WaitQueueTimeoutError = WaitQueueTimeoutError;
//# sourceMappingURL=errors.js.map
}, function(modId) { var map = {"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346618, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionPoolClearedEvent = exports.ConnectionCheckedInEvent = exports.ConnectionCheckedOutEvent = exports.ConnectionCheckOutFailedEvent = exports.ConnectionCheckOutStartedEvent = exports.ConnectionClosedEvent = exports.ConnectionReadyEvent = exports.ConnectionCreatedEvent = exports.ConnectionPoolClosedEvent = exports.ConnectionPoolCreatedEvent = exports.ConnectionPoolMonitoringEvent = void 0;
/**
 * The base export class for all monitoring events published from the connection pool
 * @public
 * @category Event
 */
class ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool) {
        this.time = new Date();
        this.address = pool.address;
    }
}
exports.ConnectionPoolMonitoringEvent = ConnectionPoolMonitoringEvent;
/**
 * An event published when a connection pool is created
 * @public
 * @category Event
 */
class ConnectionPoolCreatedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool) {
        super(pool);
        this.options = pool.options;
    }
}
exports.ConnectionPoolCreatedEvent = ConnectionPoolCreatedEvent;
/**
 * An event published when a connection pool is closed
 * @public
 * @category Event
 */
class ConnectionPoolClosedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool) {
        super(pool);
    }
}
exports.ConnectionPoolClosedEvent = ConnectionPoolClosedEvent;
/**
 * An event published when a connection pool creates a new connection
 * @public
 * @category Event
 */
class ConnectionCreatedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, connection) {
        super(pool);
        this.connectionId = connection.id;
    }
}
exports.ConnectionCreatedEvent = ConnectionCreatedEvent;
/**
 * An event published when a connection is ready for use
 * @public
 * @category Event
 */
class ConnectionReadyEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, connection) {
        super(pool);
        this.connectionId = connection.id;
    }
}
exports.ConnectionReadyEvent = ConnectionReadyEvent;
/**
 * An event published when a connection is closed
 * @public
 * @category Event
 */
class ConnectionClosedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, connection, reason) {
        super(pool);
        this.connectionId = connection.id;
        this.reason = reason || 'unknown';
        this.serviceId = connection.serviceId;
    }
}
exports.ConnectionClosedEvent = ConnectionClosedEvent;
/**
 * An event published when a request to check a connection out begins
 * @public
 * @category Event
 */
class ConnectionCheckOutStartedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool) {
        super(pool);
    }
}
exports.ConnectionCheckOutStartedEvent = ConnectionCheckOutStartedEvent;
/**
 * An event published when a request to check a connection out fails
 * @public
 * @category Event
 */
class ConnectionCheckOutFailedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, reason) {
        super(pool);
        this.reason = reason;
    }
}
exports.ConnectionCheckOutFailedEvent = ConnectionCheckOutFailedEvent;
/**
 * An event published when a connection is checked out of the connection pool
 * @public
 * @category Event
 */
class ConnectionCheckedOutEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, connection) {
        super(pool);
        this.connectionId = connection.id;
    }
}
exports.ConnectionCheckedOutEvent = ConnectionCheckedOutEvent;
/**
 * An event published when a connection is checked into the connection pool
 * @public
 * @category Event
 */
class ConnectionCheckedInEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, connection) {
        super(pool);
        this.connectionId = connection.id;
    }
}
exports.ConnectionCheckedInEvent = ConnectionCheckedInEvent;
/**
 * An event published when a connection pool is cleared
 * @public
 * @category Event
 */
class ConnectionPoolClearedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, serviceId) {
        super(pool);
        this.serviceId = serviceId;
    }
}
exports.ConnectionPoolClearedEvent = ConnectionPoolClearedEvent;
//# sourceMappingURL=connection_pool_events.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346619, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.RTTPinger = exports.Monitor = void 0;
const common_1 = require("./common");
const utils_1 = require("../utils");
const connect_1 = require("../cmap/connect");
const connection_1 = require("../cmap/connection");
const error_1 = require("../error");
const bson_1 = require("../bson");
const events_1 = require("./events");
const server_1 = require("./server");
const mongo_types_1 = require("../mongo_types");
/** @internal */
const kServer = Symbol('server');
/** @internal */
const kMonitorId = Symbol('monitorId');
/** @internal */
const kConnection = Symbol('connection');
/** @internal */
const kCancellationToken = Symbol('cancellationToken');
/** @internal */
const kRTTPinger = Symbol('rttPinger');
/** @internal */
const kRoundTripTime = Symbol('roundTripTime');
const STATE_IDLE = 'idle';
const STATE_MONITORING = 'monitoring';
const stateTransition = (0, utils_1.makeStateMachine)({
    [common_1.STATE_CLOSING]: [common_1.STATE_CLOSING, STATE_IDLE, common_1.STATE_CLOSED],
    [common_1.STATE_CLOSED]: [common_1.STATE_CLOSED, STATE_MONITORING],
    [STATE_IDLE]: [STATE_IDLE, STATE_MONITORING, common_1.STATE_CLOSING],
    [STATE_MONITORING]: [STATE_MONITORING, STATE_IDLE, common_1.STATE_CLOSING]
});
const INVALID_REQUEST_CHECK_STATES = new Set([common_1.STATE_CLOSING, common_1.STATE_CLOSED, STATE_MONITORING]);
function isInCloseState(monitor) {
    return monitor.s.state === common_1.STATE_CLOSED || monitor.s.state === common_1.STATE_CLOSING;
}
/** @internal */
class Monitor extends mongo_types_1.TypedEventEmitter {
    constructor(server, options) {
        var _a, _b, _c;
        super();
        this[kServer] = server;
        this[kConnection] = undefined;
        this[kCancellationToken] = new mongo_types_1.CancellationToken();
        this[kCancellationToken].setMaxListeners(Infinity);
        this[kMonitorId] = undefined;
        this.s = {
            state: common_1.STATE_CLOSED
        };
        this.address = server.description.address;
        this.options = Object.freeze({
            connectTimeoutMS: (_a = options.connectTimeoutMS) !== null && _a !== void 0 ? _a : 10000,
            heartbeatFrequencyMS: (_b = options.heartbeatFrequencyMS) !== null && _b !== void 0 ? _b : 10000,
            minHeartbeatFrequencyMS: (_c = options.minHeartbeatFrequencyMS) !== null && _c !== void 0 ? _c : 500
        });
        const cancellationToken = this[kCancellationToken];
        // TODO: refactor this to pull it directly from the pool, requires new ConnectionPool integration
        const connectOptions = Object.assign({
            id: '<monitor>',
            generation: server.s.pool.generation,
            connectionType: connection_1.Connection,
            cancellationToken,
            hostAddress: server.description.hostAddress
        }, options, 
        // force BSON serialization options
        {
            raw: false,
            promoteLongs: true,
            promoteValues: true,
            promoteBuffers: true
        });
        // ensure no authentication is used for monitoring
        delete connectOptions.credentials;
        if (connectOptions.autoEncrypter) {
            delete connectOptions.autoEncrypter;
        }
        this.connectOptions = Object.freeze(connectOptions);
    }
    connect() {
        if (this.s.state !== common_1.STATE_CLOSED) {
            return;
        }
        // start
        const heartbeatFrequencyMS = this.options.heartbeatFrequencyMS;
        const minHeartbeatFrequencyMS = this.options.minHeartbeatFrequencyMS;
        this[kMonitorId] = (0, utils_1.makeInterruptibleAsyncInterval)(monitorServer(this), {
            interval: heartbeatFrequencyMS,
            minInterval: minHeartbeatFrequencyMS,
            immediate: true
        });
    }
    requestCheck() {
        var _a;
        if (INVALID_REQUEST_CHECK_STATES.has(this.s.state)) {
            return;
        }
        (_a = this[kMonitorId]) === null || _a === void 0 ? void 0 : _a.wake();
    }
    reset() {
        const topologyVersion = this[kServer].description.topologyVersion;
        if (isInCloseState(this) || topologyVersion == null) {
            return;
        }
        stateTransition(this, common_1.STATE_CLOSING);
        resetMonitorState(this);
        // restart monitor
        stateTransition(this, STATE_IDLE);
        // restart monitoring
        const heartbeatFrequencyMS = this.options.heartbeatFrequencyMS;
        const minHeartbeatFrequencyMS = this.options.minHeartbeatFrequencyMS;
        this[kMonitorId] = (0, utils_1.makeInterruptibleAsyncInterval)(monitorServer(this), {
            interval: heartbeatFrequencyMS,
            minInterval: minHeartbeatFrequencyMS
        });
    }
    close() {
        if (isInCloseState(this)) {
            return;
        }
        stateTransition(this, common_1.STATE_CLOSING);
        resetMonitorState(this);
        // close monitor
        this.emit('close');
        stateTransition(this, common_1.STATE_CLOSED);
    }
}
exports.Monitor = Monitor;
function resetMonitorState(monitor) {
    var _a, _b, _c;
    (_a = monitor[kMonitorId]) === null || _a === void 0 ? void 0 : _a.stop();
    monitor[kMonitorId] = undefined;
    (_b = monitor[kRTTPinger]) === null || _b === void 0 ? void 0 : _b.close();
    monitor[kRTTPinger] = undefined;
    monitor[kCancellationToken].emit('cancel');
    (_c = monitor[kConnection]) === null || _c === void 0 ? void 0 : _c.destroy({ force: true });
    monitor[kConnection] = undefined;
}
function checkServer(monitor, callback) {
    let start = (0, utils_1.now)();
    monitor.emit(server_1.Server.SERVER_HEARTBEAT_STARTED, new events_1.ServerHeartbeatStartedEvent(monitor.address));
    function failureHandler(err) {
        var _a;
        (_a = monitor[kConnection]) === null || _a === void 0 ? void 0 : _a.destroy({ force: true });
        monitor[kConnection] = undefined;
        monitor.emit(server_1.Server.SERVER_HEARTBEAT_FAILED, new events_1.ServerHeartbeatFailedEvent(monitor.address, (0, utils_1.calculateDurationInMs)(start), err));
        monitor.emit('resetServer', err);
        monitor.emit('resetConnectionPool');
        callback(err);
    }
    const connection = monitor[kConnection];
    if (connection && !connection.closed) {
        const { serverApi, helloOk } = connection;
        const connectTimeoutMS = monitor.options.connectTimeoutMS;
        const maxAwaitTimeMS = monitor.options.heartbeatFrequencyMS;
        const topologyVersion = monitor[kServer].description.topologyVersion;
        const isAwaitable = topologyVersion != null;
        const cmd = {
            [(serverApi === null || serverApi === void 0 ? void 0 : serverApi.version) || helloOk ? 'hello' : 'ismaster']: true,
            ...(isAwaitable && topologyVersion
                ? { maxAwaitTimeMS, topologyVersion: makeTopologyVersion(topologyVersion) }
                : {})
        };
        const options = isAwaitable
            ? {
                socketTimeoutMS: connectTimeoutMS ? connectTimeoutMS + maxAwaitTimeMS : 0,
                exhaustAllowed: true
            }
            : { socketTimeoutMS: connectTimeoutMS };
        if (isAwaitable && monitor[kRTTPinger] == null) {
            monitor[kRTTPinger] = new RTTPinger(monitor[kCancellationToken], Object.assign({ heartbeatFrequencyMS: monitor.options.heartbeatFrequencyMS }, monitor.connectOptions));
        }
        connection.command((0, utils_1.ns)('admin.$cmd'), cmd, options, (err, isMaster) => {
            var _a;
            if (err) {
                failureHandler(err);
                return;
            }
            if ('isWritablePrimary' in isMaster) {
                // Provide pre-hello-style response document.
                isMaster.ismaster = isMaster.isWritablePrimary;
            }
            const rttPinger = monitor[kRTTPinger];
            const duration = isAwaitable && rttPinger ? rttPinger.roundTripTime : (0, utils_1.calculateDurationInMs)(start);
            monitor.emit(server_1.Server.SERVER_HEARTBEAT_SUCCEEDED, new events_1.ServerHeartbeatSucceededEvent(monitor.address, duration, isMaster));
            // if we are using the streaming protocol then we immediately issue another `started`
            // event, otherwise the "check" is complete and return to the main monitor loop
            if (isAwaitable && isMaster.topologyVersion) {
                monitor.emit(server_1.Server.SERVER_HEARTBEAT_STARTED, new events_1.ServerHeartbeatStartedEvent(monitor.address));
                start = (0, utils_1.now)();
            }
            else {
                (_a = monitor[kRTTPinger]) === null || _a === void 0 ? void 0 : _a.close();
                monitor[kRTTPinger] = undefined;
                callback(undefined, isMaster);
            }
        });
        return;
    }
    // connecting does an implicit `ismaster`
    (0, connect_1.connect)(monitor.connectOptions, (err, conn) => {
        if (err) {
            monitor[kConnection] = undefined;
            // we already reset the connection pool on network errors in all cases
            if (!(err instanceof error_1.MongoNetworkError)) {
                monitor.emit('resetConnectionPool');
            }
            failureHandler(err);
            return;
        }
        if (conn) {
            if (isInCloseState(monitor)) {
                conn.destroy({ force: true });
                return;
            }
            monitor[kConnection] = conn;
            monitor.emit(server_1.Server.SERVER_HEARTBEAT_SUCCEEDED, new events_1.ServerHeartbeatSucceededEvent(monitor.address, (0, utils_1.calculateDurationInMs)(start), conn.ismaster));
            callback(undefined, conn.ismaster);
        }
    });
}
function monitorServer(monitor) {
    return (callback) => {
        stateTransition(monitor, STATE_MONITORING);
        function done() {
            if (!isInCloseState(monitor)) {
                stateTransition(monitor, STATE_IDLE);
            }
            callback();
        }
        checkServer(monitor, (err, isMaster) => {
            if (err) {
                // otherwise an error occurred on initial discovery, also bail
                if (monitor[kServer].description.type === common_1.ServerType.Unknown) {
                    monitor.emit('resetServer', err);
                    return done();
                }
            }
            // if the check indicates streaming is supported, immediately reschedule monitoring
            if (isMaster && isMaster.topologyVersion) {
                setTimeout(() => {
                    var _a;
                    if (!isInCloseState(monitor)) {
                        (_a = monitor[kMonitorId]) === null || _a === void 0 ? void 0 : _a.wake();
                    }
                }, 0);
            }
            done();
        });
    };
}
function makeTopologyVersion(tv) {
    return {
        processId: tv.processId,
        // tests mock counter as just number, but in a real situation counter should always be a Long
        counter: bson_1.Long.isLong(tv.counter) ? tv.counter : bson_1.Long.fromNumber(tv.counter)
    };
}
/** @internal */
class RTTPinger {
    constructor(cancellationToken, options) {
        this[kConnection] = undefined;
        this[kCancellationToken] = cancellationToken;
        this[kRoundTripTime] = 0;
        this.closed = false;
        const heartbeatFrequencyMS = options.heartbeatFrequencyMS;
        this[kMonitorId] = setTimeout(() => measureRoundTripTime(this, options), heartbeatFrequencyMS);
    }
    get roundTripTime() {
        return this[kRoundTripTime];
    }
    close() {
        var _a;
        this.closed = true;
        clearTimeout(this[kMonitorId]);
        (_a = this[kConnection]) === null || _a === void 0 ? void 0 : _a.destroy({ force: true });
        this[kConnection] = undefined;
    }
}
exports.RTTPinger = RTTPinger;
function measureRoundTripTime(rttPinger, options) {
    const start = (0, utils_1.now)();
    options.cancellationToken = rttPinger[kCancellationToken];
    const heartbeatFrequencyMS = options.heartbeatFrequencyMS;
    if (rttPinger.closed) {
        return;
    }
    function measureAndReschedule(conn) {
        if (rttPinger.closed) {
            conn === null || conn === void 0 ? void 0 : conn.destroy({ force: true });
            return;
        }
        if (rttPinger[kConnection] == null) {
            rttPinger[kConnection] = conn;
        }
        rttPinger[kRoundTripTime] = (0, utils_1.calculateDurationInMs)(start);
        rttPinger[kMonitorId] = setTimeout(() => measureRoundTripTime(rttPinger, options), heartbeatFrequencyMS);
    }
    const connection = rttPinger[kConnection];
    if (connection == null) {
        (0, connect_1.connect)(options, (err, conn) => {
            if (err) {
                rttPinger[kConnection] = undefined;
                rttPinger[kRoundTripTime] = 0;
                return;
            }
            measureAndReschedule(conn);
        });
        return;
    }
    connection.command((0, utils_1.ns)('admin.$cmd'), { ismaster: 1 }, undefined, err => {
        if (err) {
            rttPinger[kConnection] = undefined;
            rttPinger[kRoundTripTime] = 0;
            return;
        }
        measureAndReschedule();
    });
}
//# sourceMappingURL=monitor.js.map
}, function(modId) { var map = {"./common":1647755346516,"../utils":1647755346512,"../cmap/connect":1647755346600,"../cmap/connection":1647755346537,"../error":1647755346514,"./events":1647755346621,"./server":1647755346598,"../mongo_types":1647755346546}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346621, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerHeartbeatFailedEvent = exports.ServerHeartbeatSucceededEvent = exports.ServerHeartbeatStartedEvent = exports.TopologyClosedEvent = exports.TopologyOpeningEvent = exports.TopologyDescriptionChangedEvent = exports.ServerClosedEvent = exports.ServerOpeningEvent = exports.ServerDescriptionChangedEvent = void 0;
/**
 * Emitted when server description changes, but does NOT include changes to the RTT.
 * @public
 * @category Event
 */
class ServerDescriptionChangedEvent {
    /** @internal */
    constructor(topologyId, address, previousDescription, newDescription) {
        this.topologyId = topologyId;
        this.address = address;
        this.previousDescription = previousDescription;
        this.newDescription = newDescription;
    }
}
exports.ServerDescriptionChangedEvent = ServerDescriptionChangedEvent;
/**
 * Emitted when server is initialized.
 * @public
 * @category Event
 */
class ServerOpeningEvent {
    /** @internal */
    constructor(topologyId, address) {
        this.topologyId = topologyId;
        this.address = address;
    }
}
exports.ServerOpeningEvent = ServerOpeningEvent;
/**
 * Emitted when server is closed.
 * @public
 * @category Event
 */
class ServerClosedEvent {
    /** @internal */
    constructor(topologyId, address) {
        this.topologyId = topologyId;
        this.address = address;
    }
}
exports.ServerClosedEvent = ServerClosedEvent;
/**
 * Emitted when topology description changes.
 * @public
 * @category Event
 */
class TopologyDescriptionChangedEvent {
    /** @internal */
    constructor(topologyId, previousDescription, newDescription) {
        this.topologyId = topologyId;
        this.previousDescription = previousDescription;
        this.newDescription = newDescription;
    }
}
exports.TopologyDescriptionChangedEvent = TopologyDescriptionChangedEvent;
/**
 * Emitted when topology is initialized.
 * @public
 * @category Event
 */
class TopologyOpeningEvent {
    /** @internal */
    constructor(topologyId) {
        this.topologyId = topologyId;
    }
}
exports.TopologyOpeningEvent = TopologyOpeningEvent;
/**
 * Emitted when topology is closed.
 * @public
 * @category Event
 */
class TopologyClosedEvent {
    /** @internal */
    constructor(topologyId) {
        this.topologyId = topologyId;
    }
}
exports.TopologyClosedEvent = TopologyClosedEvent;
/**
 * Emitted when the server monitor’s ismaster command is started - immediately before
 * the ismaster command is serialized into raw BSON and written to the socket.
 *
 * @public
 * @category Event
 */
class ServerHeartbeatStartedEvent {
    /** @internal */
    constructor(connectionId) {
        this.connectionId = connectionId;
    }
}
exports.ServerHeartbeatStartedEvent = ServerHeartbeatStartedEvent;
/**
 * Emitted when the server monitor’s ismaster succeeds.
 * @public
 * @category Event
 */
class ServerHeartbeatSucceededEvent {
    /** @internal */
    constructor(connectionId, duration, reply) {
        this.connectionId = connectionId;
        this.duration = duration;
        this.reply = reply;
    }
}
exports.ServerHeartbeatSucceededEvent = ServerHeartbeatSucceededEvent;
/**
 * Emitted when the server monitor’s ismaster fails, either with an “ok: 0” or a socket exception.
 * @public
 * @category Event
 */
class ServerHeartbeatFailedEvent {
    /** @internal */
    constructor(connectionId, duration, failure) {
        this.connectionId = connectionId;
        this.duration = duration;
        this.failure = failure;
    }
}
exports.ServerHeartbeatFailedEvent = ServerHeartbeatFailedEvent;
//# sourceMappingURL=events.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346622, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvPoller = exports.SrvPollingEvent = void 0;
const dns = require("dns");
const logger_1 = require("../logger");
const utils_1 = require("../utils");
const mongo_types_1 = require("../mongo_types");
const error_1 = require("../error");
/**
 * Determines whether a provided address matches the provided parent domain in order
 * to avoid certain attack vectors.
 *
 * @param srvAddress - The address to check against a domain
 * @param parentDomain - The domain to check the provided address against
 * @returns Whether the provided address matches the parent domain
 */
function matchesParentDomain(srvAddress, parentDomain) {
    const regex = /^.*?\./;
    const srv = `.${srvAddress.replace(regex, '')}`;
    const parent = `.${parentDomain.replace(regex, '')}`;
    return srv.endsWith(parent);
}
/**
 * @internal
 * @category Event
 */
class SrvPollingEvent {
    constructor(srvRecords) {
        this.srvRecords = srvRecords;
    }
    hostnames() {
        return new Set(this.srvRecords.map(r => utils_1.HostAddress.fromSrvRecord(r).toString()));
    }
}
exports.SrvPollingEvent = SrvPollingEvent;
/** @internal */
class SrvPoller extends mongo_types_1.TypedEventEmitter {
    constructor(options) {
        var _a, _b, _c;
        super();
        if (!options || !options.srvHost) {
            throw new error_1.MongoRuntimeError('Options for SrvPoller must exist and include srvHost');
        }
        this.srvHost = options.srvHost;
        this.srvMaxHosts = (_a = options.srvMaxHosts) !== null && _a !== void 0 ? _a : 0;
        this.srvServiceName = (_b = options.srvServiceName) !== null && _b !== void 0 ? _b : 'mongodb';
        this.rescanSrvIntervalMS = 60000;
        this.heartbeatFrequencyMS = (_c = options.heartbeatFrequencyMS) !== null && _c !== void 0 ? _c : 10000;
        this.logger = new logger_1.Logger('srvPoller', options);
        this.haMode = false;
        this.generation = 0;
        this._timeout = undefined;
    }
    get srvAddress() {
        return `_${this.srvServiceName}._tcp.${this.srvHost}`;
    }
    get intervalMS() {
        return this.haMode ? this.heartbeatFrequencyMS : this.rescanSrvIntervalMS;
    }
    start() {
        if (!this._timeout) {
            this.schedule();
        }
    }
    stop() {
        if (this._timeout) {
            clearTimeout(this._timeout);
            this.generation += 1;
            this._timeout = undefined;
        }
    }
    schedule() {
        if (this._timeout) {
            clearTimeout(this._timeout);
        }
        this._timeout = setTimeout(() => this._poll(), this.intervalMS);
    }
    success(srvRecords) {
        this.haMode = false;
        this.schedule();
        this.emit(SrvPoller.SRV_RECORD_DISCOVERY, new SrvPollingEvent(srvRecords));
    }
    failure(message, obj) {
        this.logger.warn(message, obj);
        this.haMode = true;
        this.schedule();
    }
    parentDomainMismatch(srvRecord) {
        this.logger.warn(`parent domain mismatch on SRV record (${srvRecord.name}:${srvRecord.port})`, srvRecord);
    }
    _poll() {
        const generation = this.generation;
        dns.resolveSrv(this.srvAddress, (err, srvRecords) => {
            if (generation !== this.generation) {
                return;
            }
            if (err) {
                this.failure('DNS error', err);
                return;
            }
            const finalAddresses = [];
            for (const record of srvRecords) {
                if (matchesParentDomain(record.name, this.srvHost)) {
                    finalAddresses.push(record);
                }
                else {
                    this.parentDomainMismatch(record);
                }
            }
            if (!finalAddresses.length) {
                this.failure('No valid addresses found at host');
                return;
            }
            this.success(finalAddresses);
        });
    }
}
exports.SrvPoller = SrvPoller;
/** @event */
SrvPoller.SRV_RECORD_DISCOVERY = 'srvRecordDiscovery';
//# sourceMappingURL=srv_polling.js.map
}, function(modId) { var map = {"../logger":1647755346591,"../utils":1647755346512,"../mongo_types":1647755346546,"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346628, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.GridFSBucket = void 0;
const error_1 = require("../error");
const download_1 = require("./download");
const upload_1 = require("./upload");
const utils_1 = require("../utils");
const write_concern_1 = require("../write_concern");
const mongo_types_1 = require("../mongo_types");
const DEFAULT_GRIDFS_BUCKET_OPTIONS = {
    bucketName: 'fs',
    chunkSizeBytes: 255 * 1024
};
/**
 * Constructor for a streaming GridFS interface
 * @public
 */
class GridFSBucket extends mongo_types_1.TypedEventEmitter {
    constructor(db, options) {
        super();
        this.setMaxListeners(0);
        const privateOptions = {
            ...DEFAULT_GRIDFS_BUCKET_OPTIONS,
            ...options,
            writeConcern: write_concern_1.WriteConcern.fromOptions(options)
        };
        this.s = {
            db,
            options: privateOptions,
            _chunksCollection: db.collection(privateOptions.bucketName + '.chunks'),
            _filesCollection: db.collection(privateOptions.bucketName + '.files'),
            checkedIndexes: false,
            calledOpenUploadStream: false
        };
    }
    /**
     * Returns a writable stream (GridFSBucketWriteStream) for writing
     * buffers to GridFS. The stream's 'id' property contains the resulting
     * file's id.
     *
     * @param filename - The value of the 'filename' key in the files doc
     * @param options - Optional settings.
     */
    openUploadStream(filename, options) {
        return new upload_1.GridFSBucketWriteStream(this, filename, options);
    }
    /**
     * Returns a writable stream (GridFSBucketWriteStream) for writing
     * buffers to GridFS for a custom file id. The stream's 'id' property contains the resulting
     * file's id.
     */
    openUploadStreamWithId(id, filename, options) {
        return new upload_1.GridFSBucketWriteStream(this, filename, { ...options, id });
    }
    /** Returns a readable stream (GridFSBucketReadStream) for streaming file data from GridFS. */
    openDownloadStream(id, options) {
        return new download_1.GridFSBucketReadStream(this.s._chunksCollection, this.s._filesCollection, this.s.options.readPreference, { _id: id }, options);
    }
    delete(id, callback) {
        return (0, utils_1.executeLegacyOperation)((0, utils_1.getTopology)(this.s.db), _delete, [this, id, callback], {
            skipSessions: true
        });
    }
    /** Convenience wrapper around find on the files collection */
    find(filter, options) {
        filter !== null && filter !== void 0 ? filter : (filter = {});
        options = options !== null && options !== void 0 ? options : {};
        return this.s._filesCollection.find(filter, options);
    }
    /**
     * Returns a readable stream (GridFSBucketReadStream) for streaming the
     * file with the given name from GridFS. If there are multiple files with
     * the same name, this will stream the most recent file with the given name
     * (as determined by the `uploadDate` field). You can set the `revision`
     * option to change this behavior.
     */
    openDownloadStreamByName(filename, options) {
        let sort = { uploadDate: -1 };
        let skip = undefined;
        if (options && options.revision != null) {
            if (options.revision >= 0) {
                sort = { uploadDate: 1 };
                skip = options.revision;
            }
            else {
                skip = -options.revision - 1;
            }
        }
        return new download_1.GridFSBucketReadStream(this.s._chunksCollection, this.s._filesCollection, this.s.options.readPreference, { filename }, { ...options, sort, skip });
    }
    rename(id, filename, callback) {
        return (0, utils_1.executeLegacyOperation)((0, utils_1.getTopology)(this.s.db), _rename, [this, id, filename, callback], {
            skipSessions: true
        });
    }
    drop(callback) {
        return (0, utils_1.executeLegacyOperation)((0, utils_1.getTopology)(this.s.db), _drop, [this, callback], {
            skipSessions: true
        });
    }
    /** Get the Db scoped logger. */
    getLogger() {
        return this.s.db.s.logger;
    }
}
exports.GridFSBucket = GridFSBucket;
/**
 * When the first call to openUploadStream is made, the upload stream will
 * check to see if it needs to create the proper indexes on the chunks and
 * files collections. This event is fired either when 1) it determines that
 * no index creation is necessary, 2) when it successfully creates the
 * necessary indexes.
 * @event
 */
GridFSBucket.INDEX = 'index';
function _delete(bucket, id, callback) {
    return bucket.s._filesCollection.deleteOne({ _id: id }, (error, res) => {
        if (error) {
            return callback(error);
        }
        return bucket.s._chunksCollection.deleteMany({ files_id: id }, error => {
            if (error) {
                return callback(error);
            }
            // Delete orphaned chunks before returning FileNotFound
            if (!(res === null || res === void 0 ? void 0 : res.deletedCount)) {
                // TODO(NODE-3483): Replace with more appropriate error
                // Consider creating new error MongoGridFSFileNotFoundError
                return callback(new error_1.MongoRuntimeError(`File not found for id ${id}`));
            }
            return callback();
        });
    });
}
function _rename(bucket, id, filename, callback) {
    const filter = { _id: id };
    const update = { $set: { filename } };
    return bucket.s._filesCollection.updateOne(filter, update, (error, res) => {
        if (error) {
            return callback(error);
        }
        if (!(res === null || res === void 0 ? void 0 : res.matchedCount)) {
            return callback(new error_1.MongoRuntimeError(`File with id ${id} not found`));
        }
        return callback();
    });
}
function _drop(bucket, callback) {
    return bucket.s._filesCollection.drop((error) => {
        if (error) {
            return callback(error);
        }
        return bucket.s._chunksCollection.drop((error) => {
            if (error) {
                return callback(error);
            }
            return callback();
        });
    });
}
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"../error":1647755346514,"./download":1647755346629,"./upload":1647755346630,"../utils":1647755346512,"../write_concern":1647755346515,"../mongo_types":1647755346546}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346629, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.GridFSBucketReadStream = void 0;
const stream_1 = require("stream");
const error_1 = require("../error");
/**
 * A readable stream that enables you to read buffers from GridFS.
 *
 * Do not instantiate this class directly. Use `openDownloadStream()` instead.
 * @public
 */
class GridFSBucketReadStream extends stream_1.Readable {
    /** @internal
     * @param chunks - Handle for chunks collection
     * @param files - Handle for files collection
     * @param readPreference - The read preference to use
     * @param filter - The filter to use to find the file document
     */
    constructor(chunks, files, readPreference, filter, options) {
        super();
        this.s = {
            bytesToTrim: 0,
            bytesToSkip: 0,
            bytesRead: 0,
            chunks,
            expected: 0,
            files,
            filter,
            init: false,
            expectedEnd: 0,
            options: {
                start: 0,
                end: 0,
                ...options
            },
            readPreference
        };
    }
    /**
     * Reads from the cursor and pushes to the stream.
     * Private Impl, do not call directly
     * @internal
     */
    _read() {
        if (this.destroyed)
            return;
        waitForFile(this, () => doRead(this));
    }
    /**
     * Sets the 0-based offset in bytes to start streaming from. Throws
     * an error if this stream has entered flowing mode
     * (e.g. if you've already called `on('data')`)
     *
     * @param start - 0-based offset in bytes to start streaming from
     */
    start(start = 0) {
        throwIfInitialized(this);
        this.s.options.start = start;
        return this;
    }
    /**
     * Sets the 0-based offset in bytes to start streaming from. Throws
     * an error if this stream has entered flowing mode
     * (e.g. if you've already called `on('data')`)
     *
     * @param end - Offset in bytes to stop reading at
     */
    end(end = 0) {
        throwIfInitialized(this);
        this.s.options.end = end;
        return this;
    }
    /**
     * Marks this stream as aborted (will never push another `data` event)
     * and kills the underlying cursor. Will emit the 'end' event, and then
     * the 'close' event once the cursor is successfully killed.
     *
     * @param callback - called when the cursor is successfully closed or an error occurred.
     */
    abort(callback) {
        this.push(null);
        this.destroyed = true;
        if (this.s.cursor) {
            this.s.cursor.close(error => {
                this.emit(GridFSBucketReadStream.CLOSE);
                callback && callback(error);
            });
        }
        else {
            if (!this.s.init) {
                // If not initialized, fire close event because we will never
                // get a cursor
                this.emit(GridFSBucketReadStream.CLOSE);
            }
            callback && callback();
        }
    }
}
exports.GridFSBucketReadStream = GridFSBucketReadStream;
/**
 * An error occurred
 * @event
 */
GridFSBucketReadStream.ERROR = 'error';
/**
 * Fires when the stream loaded the file document corresponding to the provided id.
 * @event
 */
GridFSBucketReadStream.FILE = 'file';
/**
 * Emitted when a chunk of data is available to be consumed.
 * @event
 */
GridFSBucketReadStream.DATA = 'data';
/**
 * Fired when the stream is exhausted (no more data events).
 * @event
 */
GridFSBucketReadStream.END = 'end';
/**
 * Fired when the stream is exhausted and the underlying cursor is killed
 * @event
 */
GridFSBucketReadStream.CLOSE = 'close';
function throwIfInitialized(stream) {
    if (stream.s.init) {
        throw new error_1.MongoGridFSStreamError('Options cannot be changed after the stream is initialized');
    }
}
function doRead(stream) {
    if (stream.destroyed)
        return;
    if (!stream.s.cursor)
        return;
    if (!stream.s.file)
        return;
    stream.s.cursor.next((error, doc) => {
        if (stream.destroyed) {
            return;
        }
        if (error) {
            stream.emit(GridFSBucketReadStream.ERROR, error);
            return;
        }
        if (!doc) {
            stream.push(null);
            process.nextTick(() => {
                if (!stream.s.cursor)
                    return;
                stream.s.cursor.close(error => {
                    if (error) {
                        stream.emit(GridFSBucketReadStream.ERROR, error);
                        return;
                    }
                    stream.emit(GridFSBucketReadStream.CLOSE);
                });
            });
            return;
        }
        if (!stream.s.file)
            return;
        const bytesRemaining = stream.s.file.length - stream.s.bytesRead;
        const expectedN = stream.s.expected++;
        const expectedLength = Math.min(stream.s.file.chunkSize, bytesRemaining);
        if (doc.n > expectedN) {
            return stream.emit(GridFSBucketReadStream.ERROR, new error_1.MongoGridFSChunkError(`ChunkIsMissing: Got unexpected n: ${doc.n}, expected: ${expectedN}`));
        }
        if (doc.n < expectedN) {
            return stream.emit(GridFSBucketReadStream.ERROR, new error_1.MongoGridFSChunkError(`ExtraChunk: Got unexpected n: ${doc.n}, expected: ${expectedN}`));
        }
        let buf = Buffer.isBuffer(doc.data) ? doc.data : doc.data.buffer;
        if (buf.byteLength !== expectedLength) {
            if (bytesRemaining <= 0) {
                return stream.emit(GridFSBucketReadStream.ERROR, new error_1.MongoGridFSChunkError(`ExtraChunk: Got unexpected n: ${doc.n}`));
            }
            return stream.emit(GridFSBucketReadStream.ERROR, new error_1.MongoGridFSChunkError(`ChunkIsWrongSize: Got unexpected length: ${buf.byteLength}, expected: ${expectedLength}`));
        }
        stream.s.bytesRead += buf.byteLength;
        if (buf.byteLength === 0) {
            return stream.push(null);
        }
        let sliceStart = null;
        let sliceEnd = null;
        if (stream.s.bytesToSkip != null) {
            sliceStart = stream.s.bytesToSkip;
            stream.s.bytesToSkip = 0;
        }
        const atEndOfStream = expectedN === stream.s.expectedEnd - 1;
        const bytesLeftToRead = stream.s.options.end - stream.s.bytesToSkip;
        if (atEndOfStream && stream.s.bytesToTrim != null) {
            sliceEnd = stream.s.file.chunkSize - stream.s.bytesToTrim;
        }
        else if (stream.s.options.end && bytesLeftToRead < doc.data.byteLength) {
            sliceEnd = bytesLeftToRead;
        }
        if (sliceStart != null || sliceEnd != null) {
            buf = buf.slice(sliceStart || 0, sliceEnd || buf.byteLength);
        }
        stream.push(buf);
    });
}
function init(stream) {
    const findOneOptions = {};
    if (stream.s.readPreference) {
        findOneOptions.readPreference = stream.s.readPreference;
    }
    if (stream.s.options && stream.s.options.sort) {
        findOneOptions.sort = stream.s.options.sort;
    }
    if (stream.s.options && stream.s.options.skip) {
        findOneOptions.skip = stream.s.options.skip;
    }
    stream.s.files.findOne(stream.s.filter, findOneOptions, (error, doc) => {
        if (error) {
            return stream.emit(GridFSBucketReadStream.ERROR, error);
        }
        if (!doc) {
            const identifier = stream.s.filter._id
                ? stream.s.filter._id.toString()
                : stream.s.filter.filename;
            const errmsg = `FileNotFound: file ${identifier} was not found`;
            // TODO(NODE-3483)
            const err = new error_1.MongoRuntimeError(errmsg);
            err.code = 'ENOENT'; // TODO: NODE-3338 set property as part of constructor
            return stream.emit(GridFSBucketReadStream.ERROR, err);
        }
        // If document is empty, kill the stream immediately and don't
        // execute any reads
        if (doc.length <= 0) {
            stream.push(null);
            return;
        }
        if (stream.destroyed) {
            // If user destroys the stream before we have a cursor, wait
            // until the query is done to say we're 'closed' because we can't
            // cancel a query.
            stream.emit(GridFSBucketReadStream.CLOSE);
            return;
        }
        try {
            stream.s.bytesToSkip = handleStartOption(stream, doc, stream.s.options);
        }
        catch (error) {
            return stream.emit(GridFSBucketReadStream.ERROR, error);
        }
        const filter = { files_id: doc._id };
        // Currently (MongoDB 3.4.4) skip function does not support the index,
        // it needs to retrieve all the documents first and then skip them. (CS-25811)
        // As work around we use $gte on the "n" field.
        if (stream.s.options && stream.s.options.start != null) {
            const skip = Math.floor(stream.s.options.start / doc.chunkSize);
            if (skip > 0) {
                filter['n'] = { $gte: skip };
            }
        }
        stream.s.cursor = stream.s.chunks.find(filter).sort({ n: 1 });
        if (stream.s.readPreference) {
            stream.s.cursor.withReadPreference(stream.s.readPreference);
        }
        stream.s.expectedEnd = Math.ceil(doc.length / doc.chunkSize);
        stream.s.file = doc;
        try {
            stream.s.bytesToTrim = handleEndOption(stream, doc, stream.s.cursor, stream.s.options);
        }
        catch (error) {
            return stream.emit(GridFSBucketReadStream.ERROR, error);
        }
        stream.emit(GridFSBucketReadStream.FILE, doc);
    });
}
function waitForFile(stream, callback) {
    if (stream.s.file) {
        return callback();
    }
    if (!stream.s.init) {
        init(stream);
        stream.s.init = true;
    }
    stream.once('file', () => {
        callback();
    });
}
function handleStartOption(stream, doc, options) {
    if (options && options.start != null) {
        if (options.start > doc.length) {
            throw new error_1.MongoInvalidArgumentError(`Stream start (${options.start}) must not be more than the length of the file (${doc.length})`);
        }
        if (options.start < 0) {
            throw new error_1.MongoInvalidArgumentError(`Stream start (${options.start}) must not be negative`);
        }
        if (options.end != null && options.end < options.start) {
            throw new error_1.MongoInvalidArgumentError(`Stream start (${options.start}) must not be greater than stream end (${options.end})`);
        }
        stream.s.bytesRead = Math.floor(options.start / doc.chunkSize) * doc.chunkSize;
        stream.s.expected = Math.floor(options.start / doc.chunkSize);
        return options.start - stream.s.bytesRead;
    }
    throw new error_1.MongoInvalidArgumentError('Start option must be defined');
}
function handleEndOption(stream, doc, cursor, options) {
    if (options && options.end != null) {
        if (options.end > doc.length) {
            throw new error_1.MongoInvalidArgumentError(`Stream end (${options.end}) must not be more than the length of the file (${doc.length})`);
        }
        if (options.start == null || options.start < 0) {
            throw new error_1.MongoInvalidArgumentError(`Stream end (${options.end}) must not be negative`);
        }
        const start = options.start != null ? Math.floor(options.start / doc.chunkSize) : 0;
        cursor.limit(Math.ceil(options.end / doc.chunkSize) - start);
        stream.s.expectedEnd = Math.ceil(options.end / doc.chunkSize);
        return Math.ceil(options.end / doc.chunkSize) * doc.chunkSize - options.end;
    }
    throw new error_1.MongoInvalidArgumentError('End option must be defined');
}
//# sourceMappingURL=download.js.map
}, function(modId) { var map = {"../error":1647755346514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346630, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.GridFSBucketWriteStream = void 0;
const stream_1 = require("stream");
const bson_1 = require("../bson");
const error_1 = require("../error");
const utils_1 = require("../utils");
const write_concern_1 = require("./../write_concern");
/**
 * A writable stream that enables you to write buffers to GridFS.
 *
 * Do not instantiate this class directly. Use `openUploadStream()` instead.
 * @public
 */
class GridFSBucketWriteStream extends stream_1.Writable {
    /** @internal
     * @param bucket - Handle for this stream's corresponding bucket
     * @param filename - The value of the 'filename' key in the files doc
     * @param options - Optional settings.
     */
    constructor(bucket, filename, options) {
        super();
        options = options !== null && options !== void 0 ? options : {};
        this.bucket = bucket;
        this.chunks = bucket.s._chunksCollection;
        this.filename = filename;
        this.files = bucket.s._filesCollection;
        this.options = options;
        this.writeConcern = write_concern_1.WriteConcern.fromOptions(options) || bucket.s.options.writeConcern;
        // Signals the write is all done
        this.done = false;
        this.id = options.id ? options.id : new bson_1.ObjectId();
        // properly inherit the default chunksize from parent
        this.chunkSizeBytes = options.chunkSizeBytes || this.bucket.s.options.chunkSizeBytes;
        this.bufToStore = Buffer.alloc(this.chunkSizeBytes);
        this.length = 0;
        this.n = 0;
        this.pos = 0;
        this.state = {
            streamEnd: false,
            outstandingRequests: 0,
            errored: false,
            aborted: false
        };
        if (!this.bucket.s.calledOpenUploadStream) {
            this.bucket.s.calledOpenUploadStream = true;
            checkIndexes(this, () => {
                this.bucket.s.checkedIndexes = true;
                this.bucket.emit('index');
            });
        }
    }
    write(chunk, encodingOrCallback, callback) {
        const encoding = typeof encodingOrCallback === 'function' ? undefined : encodingOrCallback;
        callback = typeof encodingOrCallback === 'function' ? encodingOrCallback : callback;
        return waitForIndexes(this, () => doWrite(this, chunk, encoding, callback));
    }
    abort(callback) {
        return (0, utils_1.maybePromise)(callback, callback => {
            if (this.state.streamEnd) {
                // TODO(NODE-3485): Replace with MongoGridFSStreamClosed
                return callback(new error_1.MongoAPIError('Cannot abort a stream that has already completed'));
            }
            if (this.state.aborted) {
                // TODO(NODE-3485): Replace with MongoGridFSStreamClosed
                return callback(new error_1.MongoAPIError('Cannot call abort() on a stream twice'));
            }
            this.state.aborted = true;
            this.chunks.deleteMany({ files_id: this.id }, error => callback(error));
        });
    }
    end(chunkOrCallback, encodingOrCallback, callback) {
        const chunk = typeof chunkOrCallback === 'function' ? undefined : chunkOrCallback;
        const encoding = typeof encodingOrCallback === 'function' ? undefined : encodingOrCallback;
        callback =
            typeof chunkOrCallback === 'function'
                ? chunkOrCallback
                : typeof encodingOrCallback === 'function'
                    ? encodingOrCallback
                    : callback;
        if (checkAborted(this, callback))
            return;
        this.state.streamEnd = true;
        if (callback) {
            this.once(GridFSBucketWriteStream.FINISH, (result) => {
                if (callback)
                    callback(undefined, result);
            });
        }
        if (!chunk) {
            waitForIndexes(this, () => !!writeRemnant(this));
            return;
        }
        this.write(chunk, encoding, () => {
            writeRemnant(this);
        });
    }
}
exports.GridFSBucketWriteStream = GridFSBucketWriteStream;
/** @event */
GridFSBucketWriteStream.CLOSE = 'close';
/** @event */
GridFSBucketWriteStream.ERROR = 'error';
/**
 * `end()` was called and the write stream successfully wrote the file metadata and all the chunks to MongoDB.
 * @event
 */
GridFSBucketWriteStream.FINISH = 'finish';
function __handleError(stream, error, callback) {
    if (stream.state.errored) {
        return;
    }
    stream.state.errored = true;
    if (callback) {
        return callback(error);
    }
    stream.emit(GridFSBucketWriteStream.ERROR, error);
}
function createChunkDoc(filesId, n, data) {
    return {
        _id: new bson_1.ObjectId(),
        files_id: filesId,
        n,
        data
    };
}
function checkChunksIndex(stream, callback) {
    stream.chunks.listIndexes().toArray((error, indexes) => {
        let index;
        if (error) {
            // Collection doesn't exist so create index
            if (error instanceof error_1.MongoError && error.code === error_1.MONGODB_ERROR_CODES.NamespaceNotFound) {
                index = { files_id: 1, n: 1 };
                stream.chunks.createIndex(index, { background: false, unique: true }, error => {
                    if (error) {
                        return callback(error);
                    }
                    callback();
                });
                return;
            }
            return callback(error);
        }
        let hasChunksIndex = false;
        if (indexes) {
            indexes.forEach((index) => {
                if (index.key) {
                    const keys = Object.keys(index.key);
                    if (keys.length === 2 && index.key.files_id === 1 && index.key.n === 1) {
                        hasChunksIndex = true;
                    }
                }
            });
        }
        if (hasChunksIndex) {
            callback();
        }
        else {
            index = { files_id: 1, n: 1 };
            const writeConcernOptions = getWriteOptions(stream);
            stream.chunks.createIndex(index, {
                ...writeConcernOptions,
                background: true,
                unique: true
            }, callback);
        }
    });
}
function checkDone(stream, callback) {
    if (stream.done)
        return true;
    if (stream.state.streamEnd && stream.state.outstandingRequests === 0 && !stream.state.errored) {
        // Set done so we do not trigger duplicate createFilesDoc
        stream.done = true;
        // Create a new files doc
        const filesDoc = createFilesDoc(stream.id, stream.length, stream.chunkSizeBytes, stream.filename, stream.options.contentType, stream.options.aliases, stream.options.metadata);
        if (checkAborted(stream, callback)) {
            return false;
        }
        stream.files.insertOne(filesDoc, getWriteOptions(stream), (error) => {
            if (error) {
                return __handleError(stream, error, callback);
            }
            stream.emit(GridFSBucketWriteStream.FINISH, filesDoc);
            stream.emit(GridFSBucketWriteStream.CLOSE);
        });
        return true;
    }
    return false;
}
function checkIndexes(stream, callback) {
    stream.files.findOne({}, { projection: { _id: 1 } }, (error, doc) => {
        if (error) {
            return callback(error);
        }
        if (doc) {
            return callback();
        }
        stream.files.listIndexes().toArray((error, indexes) => {
            let index;
            if (error) {
                // Collection doesn't exist so create index
                if (error instanceof error_1.MongoError && error.code === error_1.MONGODB_ERROR_CODES.NamespaceNotFound) {
                    index = { filename: 1, uploadDate: 1 };
                    stream.files.createIndex(index, { background: false }, (error) => {
                        if (error) {
                            return callback(error);
                        }
                        checkChunksIndex(stream, callback);
                    });
                    return;
                }
                return callback(error);
            }
            let hasFileIndex = false;
            if (indexes) {
                indexes.forEach((index) => {
                    const keys = Object.keys(index.key);
                    if (keys.length === 2 && index.key.filename === 1 && index.key.uploadDate === 1) {
                        hasFileIndex = true;
                    }
                });
            }
            if (hasFileIndex) {
                checkChunksIndex(stream, callback);
            }
            else {
                index = { filename: 1, uploadDate: 1 };
                const writeConcernOptions = getWriteOptions(stream);
                stream.files.createIndex(index, {
                    ...writeConcernOptions,
                    background: false
                }, (error) => {
                    if (error) {
                        return callback(error);
                    }
                    checkChunksIndex(stream, callback);
                });
            }
        });
    });
}
function createFilesDoc(_id, length, chunkSize, filename, contentType, aliases, metadata) {
    const ret = {
        _id,
        length,
        chunkSize,
        uploadDate: new Date(),
        filename
    };
    if (contentType) {
        ret.contentType = contentType;
    }
    if (aliases) {
        ret.aliases = aliases;
    }
    if (metadata) {
        ret.metadata = metadata;
    }
    return ret;
}
function doWrite(stream, chunk, encoding, callback) {
    if (checkAborted(stream, callback)) {
        return false;
    }
    const inputBuf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, encoding);
    stream.length += inputBuf.length;
    // Input is small enough to fit in our buffer
    if (stream.pos + inputBuf.length < stream.chunkSizeBytes) {
        inputBuf.copy(stream.bufToStore, stream.pos);
        stream.pos += inputBuf.length;
        callback && callback();
        // Note that we reverse the typical semantics of write's return value
        // to be compatible with node's `.pipe()` function.
        // True means client can keep writing.
        return true;
    }
    // Otherwise, buffer is too big for current chunk, so we need to flush
    // to MongoDB.
    let inputBufRemaining = inputBuf.length;
    let spaceRemaining = stream.chunkSizeBytes - stream.pos;
    let numToCopy = Math.min(spaceRemaining, inputBuf.length);
    let outstandingRequests = 0;
    while (inputBufRemaining > 0) {
        const inputBufPos = inputBuf.length - inputBufRemaining;
        inputBuf.copy(stream.bufToStore, stream.pos, inputBufPos, inputBufPos + numToCopy);
        stream.pos += numToCopy;
        spaceRemaining -= numToCopy;
        let doc;
        if (spaceRemaining === 0) {
            doc = createChunkDoc(stream.id, stream.n, Buffer.from(stream.bufToStore));
            ++stream.state.outstandingRequests;
            ++outstandingRequests;
            if (checkAborted(stream, callback)) {
                return false;
            }
            stream.chunks.insertOne(doc, getWriteOptions(stream), (error) => {
                if (error) {
                    return __handleError(stream, error);
                }
                --stream.state.outstandingRequests;
                --outstandingRequests;
                if (!outstandingRequests) {
                    stream.emit('drain', doc);
                    callback && callback();
                    checkDone(stream);
                }
            });
            spaceRemaining = stream.chunkSizeBytes;
            stream.pos = 0;
            ++stream.n;
        }
        inputBufRemaining -= numToCopy;
        numToCopy = Math.min(spaceRemaining, inputBufRemaining);
    }
    // Note that we reverse the typical semantics of write's return value
    // to be compatible with node's `.pipe()` function.
    // False means the client should wait for the 'drain' event.
    return false;
}
function getWriteOptions(stream) {
    const obj = {};
    if (stream.writeConcern) {
        obj.writeConcern = {
            w: stream.writeConcern.w,
            wtimeout: stream.writeConcern.wtimeout,
            j: stream.writeConcern.j
        };
    }
    return obj;
}
function waitForIndexes(stream, callback) {
    if (stream.bucket.s.checkedIndexes) {
        return callback(false);
    }
    stream.bucket.once('index', () => {
        callback(true);
    });
    return true;
}
function writeRemnant(stream, callback) {
    // Buffer is empty, so don't bother to insert
    if (stream.pos === 0) {
        return checkDone(stream, callback);
    }
    ++stream.state.outstandingRequests;
    // Create a new buffer to make sure the buffer isn't bigger than it needs
    // to be.
    const remnant = Buffer.alloc(stream.pos);
    stream.bufToStore.copy(remnant, 0, 0, stream.pos);
    const doc = createChunkDoc(stream.id, stream.n, remnant);
    // If the stream was aborted, do not write remnant
    if (checkAborted(stream, callback)) {
        return false;
    }
    stream.chunks.insertOne(doc, getWriteOptions(stream), (error) => {
        if (error) {
            return __handleError(stream, error);
        }
        --stream.state.outstandingRequests;
        checkDone(stream);
    });
    return true;
}
function checkAborted(stream, callback) {
    if (stream.state.aborted) {
        if (typeof callback === 'function') {
            // TODO(NODE-3485): Replace with MongoGridFSStreamClosedError
            callback(new error_1.MongoAPIError('Stream has been aborted'));
        }
        return true;
    }
    return false;
}
//# sourceMappingURL=upload.js.map
}, function(modId) { var map = {"../error":1647755346514,"../utils":1647755346512,"./../write_concern":1647755346515}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1647755346510);
})()
//miniprogram-npm-outsideDeps=["./bson","bson","./deps","../bson","stream","os","crypto","url","zlib","../../deps","events","./connection_string","denque","util","../connection_string","net","tls","../../bson","dns","http"]
//# sourceMappingURL=index.js.map