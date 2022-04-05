module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1647755346474, function(require, module, exports) {
/*
 * Jake JavaScript build tool
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

if (!global.jake) {

  let EventEmitter = require('events').EventEmitter;
  // And so it begins
  global.jake = new EventEmitter();

  let fs = require('fs');
  let chalk = require('chalk');
  let taskNs = require('./task');
  let Task = taskNs.Task;
  let FileTask = taskNs.FileTask;
  let DirectoryTask = taskNs.DirectoryTask;
  let Rule = require('./rule').Rule;
  let Namespace = require('./namespace').Namespace;
  let RootNamespace = require('./namespace').RootNamespace;
  let api = require('./api');
  let utils = require('./utils');
  let Program = require('./program').Program;
  let loader = require('./loader')();
  let pkg = JSON.parse(fs.readFileSync(__dirname + '/../package.json').toString());

  const MAX_RULE_RECURSION_LEVEL = 16;

  // Globalize jake and top-level API methods (e.g., `task`, `desc`)
  Object.assign(global, api);

  // Copy utils onto base jake
  jake.logger = utils.logger;
  jake.exec = utils.exec;

  // File utils should be aliased directly on base jake as well
  Object.assign(jake, utils.file);

  // Also add top-level API methods to exported object for those who don't want to
  // use the globals (`file` here will overwrite the 'file' utils namespace)
  Object.assign(jake, api);

  Object.assign(jake, new (function () {

    this._invocationChain = [];
    this._taskTimeout = 30000;

    // Public properties
    // =================
    this.version = pkg.version;
    // Used when Jake exits with a specific error-code
    this.errorCode = null;
    // Loads Jakefiles/jakelibdirs
    this.loader = loader;
    // The root of all ... namespaces
    this.rootNamespace = new RootNamespace();
    // Non-namespaced tasks are placed into the default
    this.defaultNamespace = this.rootNamespace;
    // Start in the default
    this.currentNamespace = this.defaultNamespace;
    // Saves the description created by a 'desc' call that prefaces a
    // 'task' call that defines a task.
    this.currentTaskDescription = null;
    this.program = new Program();
    this.FileList = require('filelist').FileList;
    this.PackageTask = require('./package_task').PackageTask;
    this.PublishTask = require('./publish_task').PublishTask;
    this.TestTask = require('./test_task').TestTask;
    this.Task = Task;
    this.FileTask = FileTask;
    this.DirectoryTask = DirectoryTask;
    this.Namespace = Namespace;
    this.Rule = Rule;

    this.parseAllTasks = function () {
      let _parseNs = function (ns) {
        let nsTasks = ns.tasks;
        let nsNamespaces = ns.childNamespaces;
        for (let q in nsTasks) {
          let nsTask = nsTasks[q];
          jake.Task[nsTask.fullName] = nsTask;
        }
        for (let p in nsNamespaces) {
          let nsNamespace = nsNamespaces[p];
          _parseNs(nsNamespace);
        }
      };
      _parseNs(jake.defaultNamespace);
    };

    /**
     * Displays the list of descriptions avaliable for tasks defined in
     * a Jakefile
     */
    this.showAllTaskDescriptions = function (f) {
      let p;
      let maxTaskNameLength = 0;
      let task;
      let padding;
      let name;
      let descr;
      let filter = typeof f == 'string' ? f : null;

      for (p in jake.Task) {
        if (!Object.prototype.hasOwnProperty.call(jake.Task, p)) {
          continue;
        }
        if (filter && p.indexOf(filter) == -1) {
          continue;
        }
        task = jake.Task[p];
        // Record the length of the longest task name -- used for
        // pretty alignment of the task descriptions
        if (task.description) {
          maxTaskNameLength = p.length > maxTaskNameLength ?
            p.length : maxTaskNameLength;
        }
      }
      // Print out each entry with descriptions neatly aligned
      for (p in jake.Task) {
        if (!Object.prototype.hasOwnProperty.call(jake.Task, p)) {
          continue;
        }
        if (filter && p.indexOf(filter) == -1) {
          continue;
        }
        task = jake.Task[p];

        //name = '\033[32m' + p + '\033[39m ';
        name = chalk.green(p);

        descr = task.description;
        if (descr) {
          descr = chalk.gray('# ' + descr);

          // Create padding-string with calculated length
          padding = (new Array(maxTaskNameLength - p.length + 2)).join(' ');

          console.log('jake ' + name + padding + descr);
        }
      }
    };

    this.createTask = function () {
      let args = Array.prototype.slice.call(arguments);
      let arg;
      let obj;
      let task;
      let type;
      let name;
      let action;
      let opts = {};
      let prereqs = [];

      type = args.shift();

      // name, [deps], [action]
      // Name (string) + deps (array) format
      if (typeof args[0] == 'string') {
        name = args.shift();
        if (Array.isArray(args[0])) {
          prereqs = args.shift();
        }
      }
      // name:deps, [action]
      // Legacy object-literal syntax, e.g.: {'name': ['depA', 'depB']}
      else {
        obj = args.shift();
        for (let p in obj) {
          prereqs = prereqs.concat(obj[p]);
          name = p;
        }
      }

      // Optional opts/callback or callback/opts
      while ((arg = args.shift())) {
        if (typeof arg == 'function') {
          action = arg;
        }
        else {
          opts = Object.assign(Object.create(null), arg);
        }
      }

      task = jake.currentNamespace.resolveTask(name);
      if (task && !action) {
        // Task already exists and no action, just update prereqs, and return it.
        task.prereqs = task.prereqs.concat(prereqs);
        return task;
      }

      switch (type) {
      case 'directory':
        action = function () {
          jake.mkdirP(name);
        };
        task = new DirectoryTask(name, prereqs, action, opts);
        break;
      case 'file':
        task = new FileTask(name, prereqs, action, opts);
        break;
      default:
        task = new Task(name, prereqs, action, opts);
      }

      jake.currentNamespace.addTask(task);

      if (jake.currentTaskDescription) {
        task.description = jake.currentTaskDescription;
        jake.currentTaskDescription = null;
      }

      // FIXME: Should only need to add a new entry for the current
      // task-definition, not reparse the entire structure
      jake.parseAllTasks();

      return task;
    };

    this.attemptRule = function (name, ns, level) {
      let prereqRule;
      let prereq;
      if (level > MAX_RULE_RECURSION_LEVEL) {
        return null;
      }
      // Check Rule
      prereqRule = ns.matchRule(name);
      if (prereqRule) {
        prereq = prereqRule.createTask(name, level);
      }
      return prereq || null;
    };

    this.createPlaceholderFileTask = function (name, namespace) {
      let parsed = name.split(':');
      let filePath = parsed.pop(); // Strip any namespace
      let task;

      task = namespace.resolveTask(name);

      // If there's not already an existing dummy FileTask for it,
      // create one
      if (!task) {
        // Create a dummy FileTask only if file actually exists
        if (fs.existsSync(filePath)) {
          task = new jake.FileTask(filePath);
          task.dummy = true;
          let ns;
          if (parsed.length) {
            ns = namespace.resolveNamespace(parsed.join(':'));
          }
          else {
            ns = namespace;
          }
          if (!namespace) {
            throw new Error('Invalid namespace, cannot add FileTask');
          }
          ns.addTask(task);
          // Put this dummy Task in the global Tasks list so
          // modTime will be eval'd correctly
          jake.Task[`${ns.path}:${filePath}`] = task;
        }
      }

      return task || null;
    };


    this.run = function () {
      let args = Array.prototype.slice.call(arguments);
      let program = this.program;
      let loader = this.loader;
      let preempt;
      let opts;

      program.parseArgs(args);
      program.init();

      preempt = program.firstPreemptiveOption();
      if (preempt) {
        preempt();
      }
      else {
        opts = program.opts;
        // jakefile flag set but no jakefile yet
        if (opts.autocomplete && opts.jakefile === true) {
          process.stdout.write('no-complete');
          return;
        }
        // Load Jakefile and jakelibdir files
        let jakefileLoaded = loader.loadFile(opts.jakefile);
        let jakelibdirLoaded = loader.loadDirectory(opts.jakelibdir);

        if(!jakefileLoaded && !jakelibdirLoaded && !opts.autocomplete) {
          fail('No Jakefile. Specify a valid path with -f/--jakefile, ' +
              'or place one in the current directory.');
        }

        program.run();
      }
    };

  })());
}

module.exports = jake;

}, function(modId) {var map = {"./task":1647755346475,"./rule":1647755346477,"./namespace":1647755346480,"./api":1647755346481,"./utils":1647755346482,"./program":1647755346485,"./loader":1647755346487,"./package_task":1647755346488,"./publish_task":1647755346489,"./test_task":1647755346490}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346475, function(require, module, exports) {

let Task = require('./task').Task;
let FileTask = require('./file_task').FileTask;
let DirectoryTask = require('./directory_task').DirectoryTask;

exports.Task = Task;
exports.FileTask = FileTask;
exports.DirectoryTask = DirectoryTask;


}, function(modId) { var map = {"./task":1647755346476,"./file_task":1647755346478,"./directory_task":1647755346479}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346476, function(require, module, exports) {
let EventEmitter = require('events').EventEmitter;
let async = require('async');
let chalk = require('chalk');
// 'rule' module is required at the bottom because circular deps

// Used for task value, so better not to use
// null, since value should be unset/uninitialized
let UNDEFINED_VALUE;

const ROOT_TASK_NAME = '__rootTask__';
const POLLING_INTERVAL = 100;

// Parse any positional args attached to the task-name
function parsePrereqName(name) {
  let taskArr = name.split('[');
  let taskName = taskArr[0];
  let taskArgs = [];
  if (taskArr[1]) {
    taskArgs = taskArr[1].replace(/\]$/, '');
    taskArgs = taskArgs.split(',');
  }
  return {
    name: taskName,
    args: taskArgs
  };
}

/**
  @name jake.Task
  @class
  @extends EventEmitter
  @description A Jake Task

  @param {String} name The name of the Task
  @param {Array} [prereqs] Prerequisites to be run before this task
  @param {Function} [action] The action to perform for this task
  @param {Object} [opts]
    @param {Array} [opts.asyc=false] Perform this task asynchronously.
    If you flag a task with this option, you must call the global
    `complete` method inside the task's action, for execution to proceed
    to the next task.
 */
class Task extends EventEmitter {

  constructor(name, prereqs, action, options) {
    // EventEmitter ctor takes no args
    super();

    if (name.indexOf(':') > -1) {
      throw new Error('Task name cannot include a colon. It is used internally as namespace delimiter.');
    }
    let opts = options || {};

    this._currentPrereqIndex = 0;
    this._internal = false;
    this._skipped = false;

    this.name = name;
    this.prereqs = prereqs;
    this.action = action;
    this.async = false;
    this.taskStatus = Task.runStatuses.UNSTARTED;
    this.description = null;
    this.args = [];
    this.value = UNDEFINED_VALUE;
    this.concurrency = 1;
    this.startTime = null;
    this.endTime = null;
    this.directory = null;
    this.namespace = null;

    // Support legacy async-flag -- if not explicitly passed or falsy, will
    // be set to empty-object
    if (typeof opts == 'boolean' && opts === true) {
      this.async = true;
    }
    else {
      if (opts.async) {
        this.async = true;
      }
      if (opts.concurrency) {
        this.concurrency = opts.concurrency;
      }
    }

    //Do a test on self dependencies for this task
    if(Array.isArray(this.prereqs) && this.prereqs.indexOf(this.name) !== -1) {
      throw new Error("Cannot use prereq " + this.name + " as a dependency of itself");
    }
  }

  get fullName() {
    return this._getFullName();
  }

  _initInvocationChain() {
    // Legacy global invocation chain
    jake._invocationChain.push(this);

    // New root chain
    if (!this._invocationChain) {
      this._invocationChainRoot = true;
      this._invocationChain = [];
      if (jake.currentRunningTask) {
        jake.currentRunningTask._waitForChains = jake.currentRunningTask._waitForChains || [];
        jake.currentRunningTask._waitForChains.push(this._invocationChain);
      }
    }
  }

  /**
    @name jake.Task#invoke
    @function
    @description Runs prerequisites, then this task. If the task has already
    been run, will not run the task again.
   */
  invoke() {
    this._initInvocationChain();

    this.args = Array.prototype.slice.call(arguments);
    this.reenabled = false
    this.runPrereqs();
  }

  /**
    @name jake.Task#execute
    @function
    @description Run only this task, without prereqs. If the task has already
    been run, *will* run the task again.
   */
  execute() {
    this._initInvocationChain();

    this.args = Array.prototype.slice.call(arguments);
    this.reenable();
    this.reenabled = true
    this.run();
  }

  runPrereqs() {
    if (this.prereqs && this.prereqs.length) {

      if (this.concurrency > 1) {
        async.eachLimit(this.prereqs, this.concurrency,

          (name, cb) => {
            let parsed = parsePrereqName(name);

            let prereq = this.namespace.resolveTask(parsed.name) ||
          jake.attemptRule(name, this.namespace, 0) ||
          jake.createPlaceholderFileTask(name, this.namespace);

            if (!prereq) {
              throw new Error('Unknown task "' + name + '"');
            }

            //Test for circular invocation
            if(prereq === this) {
              setImmediate(function () {
                cb(new Error("Cannot use prereq " + prereq.name + " as a dependency of itself"));
              });
            }

            if (prereq.taskStatus == Task.runStatuses.DONE) {
            //prereq already done, return
              setImmediate(cb);
            }
            else {
            //wait for complete before calling cb
              prereq.once('_done', () => {
                prereq.removeAllListeners('_done');
                setImmediate(cb);
              });
              // Start the prereq if we are the first to encounter it
              if (prereq.taskStatus === Task.runStatuses.UNSTARTED) {
                prereq.taskStatus = Task.runStatuses.STARTED;
                prereq.invoke.apply(prereq, parsed.args);
              }
            }
          },

          (err) => {
          //async callback is called after all prereqs have run.
            if (err) {
              throw err;
            }
            else {
              setImmediate(this.run.bind(this));
            }
          }
        );
      }
      else {
        setImmediate(this.nextPrereq.bind(this));
      }
    }
    else {
      setImmediate(this.run.bind(this));
    }
  }

  nextPrereq() {
    let self = this;
    let index = this._currentPrereqIndex;
    let name = this.prereqs[index];
    let prereq;
    let parsed;

    if (name) {

      parsed = parsePrereqName(name);

      prereq = this.namespace.resolveTask(parsed.name) ||
          jake.attemptRule(name, this.namespace, 0) ||
          jake.createPlaceholderFileTask(name, this.namespace);

      if (!prereq) {
        throw new Error('Unknown task "' + name + '"');
      }

      // Do when done
      if (prereq.taskStatus == Task.runStatuses.DONE) {
        self.handlePrereqDone(prereq);
      }
      else {
        prereq.once('_done', () => {
          this.handlePrereqDone(prereq);
          prereq.removeAllListeners('_done');
        });
        if (prereq.taskStatus == Task.runStatuses.UNSTARTED) {
          prereq.taskStatus = Task.runStatuses.STARTED;
          prereq._invocationChain = this._invocationChain;
          prereq.invoke.apply(prereq, parsed.args);
        }
      }
    }
  }

  /**
    @name jake.Task#reenable
    @function
    @description Reenables a task so that it can be run again.
   */
  reenable(deep) {
    let prereqs;
    let prereq;
    this._skipped = false;
    this.taskStatus = Task.runStatuses.UNSTARTED;
    this.value = UNDEFINED_VALUE;
    if (deep && this.prereqs) {
      prereqs = this.prereqs;
      for (let i = 0, ii = prereqs.length; i < ii; i++) {
        prereq = jake.Task[prereqs[i]];
        if (prereq) {
          prereq.reenable(deep);
        }
      }
    }
  }

  handlePrereqDone(prereq) {
    this._currentPrereqIndex++;
    if (this._currentPrereqIndex < this.prereqs.length) {
      setImmediate(this.nextPrereq.bind(this));
    }
    else {
      setImmediate(this.run.bind(this));
    }
  }

  isNeeded() {
    let needed = true;
    if (this.taskStatus == Task.runStatuses.DONE) {
      needed = false;
    }
    return needed;
  }

  run() {
    let val, previous;
    let hasAction = typeof this.action == 'function';

    if (!this.isNeeded()) {
      this.emit('skip');
      this.emit('_done');
    }
    else {
      if (this._invocationChain.length) {
        previous = this._invocationChain[this._invocationChain.length - 1];
        // If this task is repeating and its previous is equal to this, don't check its status because it was set to UNSTARTED by the reenable() method
        if (!(this.reenabled && previous == this)) {
          if (previous.taskStatus != Task.runStatuses.DONE) {
            let now = (new Date()).getTime();
            if (now - this.startTime > jake._taskTimeout) {
              return jake.fail(`Timed out waiting for task: ${previous.name} with status of ${previous.taskStatus}`);
            }
            setTimeout(this.run.bind(this), POLLING_INTERVAL);
            return;
          }
        }
      }
      if (!(this.reenabled && previous == this)) {
        this._invocationChain.push(this);
      }

      if (!(this._internal || jake.program.opts.quiet)) {
        console.log("Starting '" + chalk.green(this.fullName) + "'...");
      }

      this.startTime = (new Date()).getTime();
      this.emit('start');

      jake.currentRunningTask = this;

      if (hasAction) {
        try {
          if (this.directory) {
            process.chdir(this.directory);
          }

          val = this.action.apply(this, this.args);

          if (typeof val == 'object' && typeof val.then == 'function') {
            this.async = true;

            val.then(
              (result) => {
                setImmediate(() => {
                  this.complete(result);
                });
              },
              (err) => {
                setImmediate(() => {
                  this.errorOut(err);
                });
              });
          }
        }
        catch (err) {
          this.errorOut(err);
          return; // Bail out, not complete
        }
      }

      if (!(hasAction && this.async)) {
        setImmediate(() => {
          this.complete(val);
        });
      }
    }
  }

  errorOut(err) {
    this.taskStatus = Task.runStatuses.ERROR;
    this._invocationChain.chainStatus = Task.runStatuses.ERROR;
    this.emit('error', err);
  }

  complete(val) {

    if (Array.isArray(this._waitForChains)) {
      let stillWaiting = this._waitForChains.some((chain) => {
        return !(chain.chainStatus == Task.runStatuses.DONE ||
              chain.chainStatus == Task.runStatuses.ERROR);
      });
      if (stillWaiting) {
        let now = (new Date()).getTime();
        let elapsed = now - this.startTime;
        if (elapsed > jake._taskTimeout) {
          return jake.fail(`Timed out waiting for task: ${this.name} with status of ${this.taskStatus}. Elapsed: ${elapsed}`);
        }
        setTimeout(() => {
          this.complete(val);
        }, POLLING_INTERVAL);
        return;
      }
    }

    jake._invocationChain.splice(jake._invocationChain.indexOf(this), 1);

    if (this._invocationChainRoot) {
      this._invocationChain.chainStatus = Task.runStatuses.DONE;
    }

    this._currentPrereqIndex = 0;

    // If 'complete' getting called because task has been
    // run already, value will not be passed -- leave in place
    if (!this._skipped) {
      this.taskStatus = Task.runStatuses.DONE;
      this.value = val;

      this.emit('complete', this.value);
      this.emit('_done');

      this.endTime = (new Date()).getTime();
      let taskTime = this.endTime - this.startTime;

      if (!(this._internal || jake.program.opts.quiet)) {
        console.log("Finished '" + chalk.green(this.fullName) + "' after " + chalk.magenta(taskTime + ' ms'));
      }

    }
  }

  _getFullName() {
    let ns = this.namespace;
    let path = (ns && ns.path) || '';
    path = (path && path.split(':')) || [];
    if (this.namespace !== jake.defaultNamespace) {
      path.push(this.namespace.name);
    }
    path.push(this.name);
    return path.join(':');
  }

  static getBaseNamespacePath(fullName) {
    return fullName.split(':').slice(0, -1).join(':');
  }

  static getBaseTaskName(fullName) {
    return fullName.split(':').pop();
  }
}

Task.runStatuses = {
  UNSTARTED: 'unstarted',
  DONE: 'done',
  STARTED: 'started',
  ERROR: 'error'
};

Task.ROOT_TASK_NAME = ROOT_TASK_NAME;

exports.Task = Task;

// Required here because circular deps
require('../rule');


}, function(modId) { var map = {"../rule":1647755346477}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346477, function(require, module, exports) {
let path = require('path');
let fs = require('fs');
let Task = require('./task/task').Task;

// Split a task to two parts, name space and task name.
// For example, given 'foo:bin/a%.c', return an object with
// - 'ns'     : foo
// - 'name'   : bin/a%.c
function splitNs(task) {
  let parts = task.split(':');
  let name = parts.pop();
  let ns = resolveNs(parts);
  return {
    'name' : name,
    'ns'   : ns
  };
}

// Return the namespace based on an array of names.
// For example, given ['foo', 'baz' ], return the namespace
//
//   default -> foo -> baz
//
// where default is the global root namespace
// and -> means child namespace.
function resolveNs(parts) {
  let  ns = jake.defaultNamespace;
  for(let i = 0, l = parts.length; ns && i < l; i++) {
    ns = ns.childNamespaces[parts[i]];
  }
  return ns;
}

// Given a pattern p, say 'foo:bin/a%.c'
// Return an object with
// - 'ns'     : foo
// - 'dir'    : bin
// - 'prefix' : a
// - 'suffix' : .c
function resolve(p) {
  let task = splitNs(p);
  let name  = task.name;
  let ns    = task.ns;
  let split = path.basename(name).split('%');
  return {
    ns: ns,
    dir: path.dirname(name),
    prefix: split[0],
    suffix: split[1]
  };
}

// Test whether string a is a suffix of string b
function stringEndWith(a, b) {
  let l;
  return (l = b.lastIndexOf(a)) == -1 ? false : l + a.length == b.length;
}

// Replace the suffix a of the string s with b.
// Note that, it is assumed a is a suffix of s.
function stringReplaceSuffix(s, a, b) {
  return s.slice(0, s.lastIndexOf(a)) + b;
}

class Rule {
  constructor(opts) {
    this.pattern = opts.pattern;
    this.source = opts.source;
    this.prereqs = opts.prereqs;
    this.action = opts.action;
    this.opts = opts.opts;
    this.desc =  opts.desc;
    this.ns = opts.ns;
  }

  // Create a file task based on this rule for the specified
  // task-name
  // ======
  // FIXME: Right now this just throws away any passed-in args
  // for the synthsized task (taskArgs param)
  // ======
  createTask(fullName, level) {
    let self = this;
    let pattern;
    let source;
    let action;
    let opts;
    let prereqs;
    let valid;
    let src;
    let tNs;
    let createdTask;
    let name = Task.getBaseTaskName(fullName);
    let nsPath = Task.getBaseNamespacePath(fullName);
    let ns = this.ns.resolveNamespace(nsPath);

    pattern = this.pattern;
    source = this.source;

    if (typeof source == 'string') {
      src = Rule.getSource(name, pattern, source);
    }
    else {
      src = source(name);
    }

    // TODO: Write a utility function that appends a
    // taskname to a namespace path
    src = nsPath.split(':').filter(function (item) {
      return !!item;
    }).concat(src).join(':');

    // Generate the prerequisite for the matching task.
    //    It is the original prerequisites plus the prerequisite
    //    representing source file, i.e.,
    //
    //      rule( '%.o', '%.c', ['some.h'] ...
    //
    //    If the objective is main.o, then new task should be
    //
    //      file( 'main.o', ['main.c', 'some.h' ] ...
    prereqs = this.prereqs.slice(); // Get a copy to work with
    prereqs.unshift(src);

    // Prereq should be:
    // 1. an existing task
    // 2. an existing file on disk
    // 3. a valid rule (i.e., not at too deep a level)
    valid = prereqs.some(function (p) {
      let ns = self.ns;
      return ns.resolveTask(p) ||
        fs.existsSync(Task.getBaseTaskName(p)) ||
        jake.attemptRule(p, ns, level + 1);
    });

    // If any of the prereqs aren't valid, the rule isn't valid
    if (!valid) {
      return null;
    }
    // Otherwise, hunky-dory, finish creating the task for the rule
    else {
      // Create the action for the task
      action = function () {
        let task = this;
        self.action.apply(task);
      };

      opts = this.opts;

      // Insert the file task into Jake
      //
      // Since createTask function stores the task as a child task
      // of currentNamespace. Here we temporariliy switch the namespace.
      // FIXME: Should allow optional ns passed in instead of this hack
      tNs = jake.currentNamespace;
      jake.currentNamespace = ns;
      createdTask = jake.createTask('file', name, prereqs, action, opts);
      createdTask.source = src.split(':').pop();
      jake.currentNamespace = tNs;

      return createdTask;
    }
  }

  match(name) {
    return Rule.match(this.pattern, name);
  }

  // Test wether the a prerequisite matchs the pattern.
  // The arg 'pattern' does not have namespace as prefix.
  // For example, the following tests are true
  //
  //   pattern      |    name
  //   bin/%.o      |    bin/main.o
  //   bin/%.o      |    foo:bin/main.o
  //
  // The following tests are false (trivally)
  //
  //   pattern      |    name
  //   bin/%.o      |    foobin/main.o
  //   bin/%.o      |    bin/main.oo
  static match(pattern, name) {
    let p;
    let task;
    let obj;
    let filename;

    if (pattern instanceof RegExp) {
      return pattern.test(name);
    }
    else if (pattern.indexOf('%') == -1) {
      // No Pattern. No Folder. No Namespace.
      // A Simple Suffix Rule. Just test suffix
      return stringEndWith(pattern, name);
    }
    else {
      // Resolve the dir, prefix and suffix of pattern
      p = resolve(pattern);

      // Resolve the namespace and task-name
      task = splitNs(name);
      name = task.name;

      // Set the objective as the task-name
      obj = name;

      // Namespace is already matched.

      // Check dir
      if (path.dirname(obj) != p.dir) {
        return false;
      }

      filename = path.basename(obj);

      // Check file name length
      if ((p.prefix.length + p.suffix.length + 1) > filename.length) {
        // Length does not match.
        return false;
      }

      // Check prefix
      if (filename.indexOf(p.prefix) !== 0) {
        return false;
      }

      // Check suffix
      if (!stringEndWith(p.suffix, filename)) {
        return false;
      }

      // OK. Find a match.
      return true;
    }
  }

  // Generate the source based on
  //  - name    name for the synthesized task
  //  - pattern    pattern for the objective
  //  - source    pattern for the source
  //
  // Return the source with properties
  //  - dep      the prerequisite of source
  //             (with the namespace)
  //
  //  - file     the file name of source
  //             (without the namespace)
  //
  // For example, given
  //
  //  - name   foo:bin/main.o
  //  - pattern    bin/%.o
  //  - source    src/%.c
  //
  //    return 'foo:src/main.c',
  //
  static getSource(name, pattern, source) {
    let dep;
    let pat;
    let match;
    let file;
    let src;

    // Regex pattern -- use to look up the extension
    if (pattern instanceof RegExp) {
      match = pattern.exec(name);
      if (match) {
        if (typeof source == 'function') {
          src = source(name);
        }
        else {
          src = stringReplaceSuffix(name, match[0], source);
        }
      }
    }
    // Assume string
    else {
      // Simple string suffix replacement
      if (pattern.indexOf('%') == -1) {
        if (typeof source == 'function') {
          src = source(name);
        }
        else {
          src = stringReplaceSuffix(name, pattern, source);
        }
      }
      // Percent-based substitution
      else {
        pat = pattern.replace('%', '(.*?)');
        pat = new RegExp(pat);
        match = pat.exec(name);
        if (match) {
          if (typeof source == 'function') {
            src = source(name);
          }
          else {
            file = match[1];
            file = source.replace('%', file);
            dep = match[0];
            src = name.replace(dep, file);
          }
        }
      }
    }

    return src;
  }
}


exports.Rule = Rule;

}, function(modId) { var map = {"./task/task":1647755346476}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346478, function(require, module, exports) {
let fs = require('fs');
let Task = require('./task').Task;

function isFileOrDirectory(t) {
  return (t instanceof FileTask ||
          t instanceof DirectoryTask);
}

function isFile(t) {
  return (t instanceof FileTask && !(t instanceof DirectoryTask));
}

/**
  @name jake
  @namespace jake
*/
/**
  @name jake.FileTask
  @class`
  @extentds Task
  @description A Jake FileTask

  @param {String} name The name of the Task
  @param {Array} [prereqs] Prerequisites to be run before this task
  @param {Function} [action] The action to perform to create this file
  @param {Object} [opts]
    @param {Array} [opts.asyc=false] Perform this task asynchronously.
    If you flag a task with this option, you must call the global
    `complete` method inside the task's action, for execution to proceed
    to the next task.
 */
class FileTask extends Task {
  constructor(...args) {
    super(...args);
    this.dummy = false;
    if (fs.existsSync(this.name)) {
      this.updateModTime();
    }
    else {
      this.modTime = null;
    }
  }

  isNeeded() {
    let prereqs = this.prereqs;
    let prereqName;
    let prereqTask;

    // No repeatsies
    if (this.taskStatus == Task.runStatuses.DONE) {
      return false;
    }
    // The always-make override
    else if (jake.program.opts['always-make']) {
      return true;
    }
    // Default case
    else {

      // We need either an existing file, or an action to create one.
      // First try grabbing the actual mod-time of the file
      try {
        this.updateModTime();
      }
      // Then fall back to looking for an action
      catch(e) {
        if (typeof this.action == 'function') {
          return true;
        }
        else {
          throw new Error('File-task ' + this.fullName + ' has no ' +
            'existing file, and no action to create one.');
        }
      }

      // Compare mod-time of all the prereqs with its mod-time
      // If any prereqs are newer, need to run the action to update
      if (prereqs && prereqs.length) {
        for (let i = 0, ii = prereqs.length; i < ii; i++) {
          prereqName = prereqs[i];
          prereqTask = this.namespace.resolveTask(prereqName) ||
            jake.createPlaceholderFileTask(prereqName, this.namespace);
          // Run the action if:
          // 1. The prereq is a normal task (not file/dir)
          // 2. The prereq is a file-task with a mod-date more recent than
          // the one for this file/dir
          if (prereqTask) {
            if (!isFileOrDirectory(prereqTask) ||
                (isFile(prereqTask) && prereqTask.modTime > this.modTime)) {
              return true;
            }
          }
        }
      }
      // File/dir has no prereqs, and exists -- no need to run
      else {
        // Effectively done
        this.taskStatus = Task.runStatuses.DONE;
        return false;
      }
    }
  }

  updateModTime() {
    let stats = fs.statSync(this.name);
    this.modTime = stats.mtime;
  }

  complete() {
    if (!this.dummy) {
      this.updateModTime();
    }
    // Hackity hack
    Task.prototype.complete.apply(this, arguments);
  }

}

exports.FileTask = FileTask;

// DirectoryTask is a subclass of FileTask, depends on it
// being defined
let DirectoryTask = require('./directory_task').DirectoryTask;


}, function(modId) { var map = {"./task":1647755346476,"./directory_task":1647755346479}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346479, function(require, module, exports) {
let fs = require('fs');
let FileTask = require('./file_task').FileTask;

/**
  @name jake
  @namespace jake
*/
/**
  @name jake.DirectoryTask
  @constructor
  @augments EventEmitter
  @augments jake.Task
  @augments jake.FileTask
  @description A Jake DirectoryTask

  @param {String} name The name of the directory to create.
 */
class DirectoryTask extends FileTask {
  constructor(...args) {
    super(...args);
    if (fs.existsSync(this.name)) {
      this.updateModTime();
    }
    else {
      this.modTime = null;
    }
  }
}

exports.DirectoryTask = DirectoryTask;

}, function(modId) { var map = {"./file_task":1647755346478}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346480, function(require, module, exports) {
const ROOT_NAMESPACE_NAME = '__rootNamespace__';

class Namespace {
  constructor(name, parentNamespace) {
    this.name = name;
    this.parentNamespace = parentNamespace;
    this.childNamespaces = {};
    this.tasks = {};
    this.rules = {};
    this.path = this.getPath();
  }

  get fullName() {
    return this._getFullName();
  }

  addTask(task) {
    this.tasks[task.name] = task;
    task.namespace = this;
  }

  resolveTask(name) {
    if (!name) {
      return;
    }

    let taskPath = name.split(':');
    let taskName = taskPath.pop();
    let task;
    let ns;

    // Namespaced, return either relative to current, or from root
    if (taskPath.length) {
      taskPath = taskPath.join(':');
      ns = this.resolveNamespace(taskPath) ||
        Namespace.ROOT_NAMESPACE.resolveNamespace(taskPath);
      task = (ns && ns.resolveTask(taskName));
    }
    // Bare task, return either local, or top-level
    else {
      task = this.tasks[name] || Namespace.ROOT_NAMESPACE.tasks[name];
    }

    return task || null;
  }


  resolveNamespace(relativeName) {
    if (!relativeName) {
      return this;
    }

    let parts = relativeName.split(':');
    let ns = this;

    for (let i = 0, ii = parts.length; (ns && i < ii); i++) {
      ns = ns.childNamespaces[parts[i]];
    }

    return ns || null;
  }

  matchRule(relativeName) {
    let parts = relativeName.split(':');
    parts.pop();
    let ns = this.resolveNamespace(parts.join(':'));
    let rules = ns ? ns.rules : [];
    let r;
    let match;

    for (let p in rules) {
      r = rules[p];
      if (r.match(relativeName)) {
        match = r;
      }
    }

    return (ns && match) ||
        (this.parentNamespace &&
        this.parentNamespace.matchRule(relativeName));
  }

  getPath() {
    let parts = [];
    let next = this.parentNamespace;
    while (next) {
      parts.push(next.name);
      next = next.parentNamespace;
    }
    parts.pop(); // Remove '__rootNamespace__'
    return parts.reverse().join(':');
  }

  _getFullName() {
    let path = this.path;
    path = (path && path.split(':')) || [];
    path.push(this.name);
    return path.join(':');
  }

  isRootNamespace() {
    return !this.parentNamespace;
  }
}

class RootNamespace extends Namespace {
  constructor() {
    super(ROOT_NAMESPACE_NAME, null);
    Namespace.ROOT_NAMESPACE = this;
  }
}

module.exports.Namespace = Namespace;
module.exports.RootNamespace = RootNamespace;


}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346481, function(require, module, exports) {
/*
 * Jake JavaScript build tool
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/
let { uuid } = require('./utils');

let api = new (function () {
  /**
    @name task
    @static
    @function
    @description Creates a Jake Task
    `
    @param {String} name The name of the Task
    @param {Array} [prereqs] Prerequisites to be run before this task
    @param {Function} [action] The action to perform for this task
    @param {Object} [opts]
      @param {Boolean} [opts.asyc=false] Perform this task asynchronously.
      If you flag a task with this option, you must call the global
      `complete` method inside the task's action, for execution to proceed
      to the next task.

    @example
    desc('This is the default task.');
    task('default', function (params) {
      console.log('This is the default task.');
    });

    desc('This task has prerequisites.');
    task('hasPrereqs', ['foo', 'bar', 'baz'], function (params) {
      console.log('Ran some prereqs first.');
    });

    desc('This is an asynchronous task.');
    task('asyncTask', function () {
      setTimeout(complete, 1000);
    }, {async: true});
   */
  this.task = function (name, prereqs, action, opts) {
    let args = Array.prototype.slice.call(arguments);
    let createdTask;
    args.unshift('task');
    createdTask = jake.createTask.apply(global, args);
    jake.currentTaskDescription = null;
    return createdTask;
  };

  /**
    @name rule
    @static
    @function
    @description Creates a Jake Suffix Rule
    `
    @param {String} pattern The suffix name of the objective
    @param {String} source The suffix name of the objective
    @param {Array} [prereqs] Prerequisites to be run before this task
    @param {Function} [action] The action to perform for this task
    @param {Object} [opts]
      @param {Boolean} [opts.asyc=false] Perform this task asynchronously.
      If you flag a task with this option, you must call the global
      `complete` method inside the task's action, for execution to proceed
      to the next task.
    @example
    desc('This is a rule, which does not support namespace or pattern.');
    rule('.o', '.c', {async: true}, function () {
      let cmd = util.format('gcc -o %s %s', this.name, this.source);
      jake.exec([cmd], function () {
        complete();
      }, {printStdout: true});
    });

    desc('This rule has prerequisites.');
    rule('.o', '.c', ['util.h'], {async: true}, function () {
      let cmd = util.format('gcc -o %s %s', this.name, this.source);
      jake.exec([cmd], function () {
        complete();
      }, {printStdout: true});
    });

    desc('This is a rule with patterns.');
    rule('%.o', '%.c', {async: true}, function () {
      let cmd = util.format('gcc -o %s %s', this.name, this.source);
      jake.exec([cmd], function () {
        complete();
      }, {printStdout: true});
    });

    desc('This is another rule with patterns.');
    rule('obj/%.o', 'src/%.c', {async: true}, function () {
      let cmd = util.format('gcc -o %s %s', this.name, this.source);
      jake.exec([cmd], function () {
        complete();
      }, {printStdout: true});
    });

    desc('This is an example with chain rules.');
    rule('%.pdf', '%.dvi', {async: true}, function () {
      let cmd = util.format('dvipdfm %s',this.source);
      jake.exec([cmd], function () {
        complete();
      }, {printStdout: true});
    });

    rule('%.dvi', '%.tex', {async: true}, function () {
      let cmd = util.format('latex %s',this.source);
      jake.exec([cmd], function () {
        complete();
      }, {printStdout: true});
    });

    desc('This rule has a namespace.');
    task('default', ['debug:obj/main.o]);

    namespace('debug', {async: true}, function() {
      rule('obj/%.o', 'src/%.c', function () {
        // ...
      });
    }
   */
  this.rule = function () {
    let args = Array.prototype.slice.call(arguments);
    let arg;
    let pattern = args.shift();
    let source = args.shift();
    let prereqs = [];
    let action = function () {};
    let opts = {};
    let key = pattern.toString(); // May be a RegExp

    while ((arg = args.shift())) {
      if (typeof arg == 'function') {
        action = arg;
      }
      else if (Array.isArray(arg)) {
        prereqs = arg;
      }
      else {
        opts = arg;
      }
    }

    jake.currentNamespace.rules[key] = new jake.Rule({
      pattern: pattern,
      source: source,
      prereqs: prereqs,
      action: action,
      opts: opts,
      desc: jake.currentTaskDescription,
      ns: jake.currentNamespace
    });
    jake.currentTaskDescription = null;
  };

  /**
    @name directory
    @static
    @function
    @description Creates a Jake DirectoryTask. Can be used as a prerequisite
    for FileTasks, or for simply ensuring a directory exists for use with a
    Task's action.
    `
    @param {String} name The name of the DiretoryTask

    @example

    // Creates the package directory for distribution
    directory('pkg');
   */
  this.directory = function (name) {
    let args = Array.prototype.slice.call(arguments);
    let createdTask;
    args.unshift('directory');
    createdTask = jake.createTask.apply(global, args);
    jake.currentTaskDescription = null;
    return createdTask;
  };

  /**
    @name file
    @static
    @function
    @description Creates a Jake FileTask.
    `
    @param {String} name The name of the FileTask
    @param {Array} [prereqs] Prerequisites to be run before this task
    @param {Function} [action] The action to create this file, if it doesn't
    exist already.
    @param {Object} [opts]
      @param {Array} [opts.asyc=false] Perform this task asynchronously.
      If you flag a task with this option, you must call the global
      `complete` method inside the task's action, for execution to proceed
      to the next task.

   */
  this.file = function (name, prereqs, action, opts) {
    let args = Array.prototype.slice.call(arguments);
    let createdTask;
    args.unshift('file');
    createdTask = jake.createTask.apply(global, args);
    jake.currentTaskDescription = null;
    return createdTask;
  };

  /**
    @name desc
    @static
    @function
    @description Creates a description for a Jake Task (or FileTask,
    DirectoryTask). When invoked, the description that iscreated will
    be associated with whatever Task is created next.
    `
    @param {String} description The description for the Task
   */
  this.desc = function (description) {
    jake.currentTaskDescription = description;
  };

  /**
    @name namespace
    @static
    @function
    @description Creates a namespace which allows logical grouping
    of tasks, and prevents name-collisions with task-names. Namespaces
    can be nested inside of other namespaces.
    `
    @param {String} name The name of the namespace
    @param {Function} scope The enclosing scope for the namespaced tasks

    @example
    namespace('doc', function () {
      task('generate', ['doc:clobber'], function () {
        // Generate some docs
      });

      task('clobber', function () {
        // Clobber the doc directory first
      });
    });
   */
  this.namespace = function (name, closure) {
    let curr = jake.currentNamespace;
    let ns = curr.childNamespaces[name] || new jake.Namespace(name, curr);
    let fn = closure || function () {};
    curr.childNamespaces[name] = ns;
    jake.currentNamespace = ns;
    fn();
    jake.currentNamespace = curr;
    jake.currentTaskDescription = null;
    return ns;
  };

  /**
    @name complete
    @static
    @function
    @description Completes an asynchronous task, allowing Jake's
    execution to proceed to the next task. Calling complete globally or without
    arguments completes the last task on the invocationChain. If you use parallel
    execution of prereqs this will probably complete a wrong task. You should call this
    function with this task as the first argument, before the optional return value.
    Alternatively you can call task.complete()
    `
    @example
    task('generate', ['doc:clobber'], function () {
      exec('./generate_docs.sh', function (err, stdout, stderr) {
        if (err || stderr) {
          fail(err || stderr);
        }
        else {
          console.log(stdout);
          complete();
        }
      });
    }, {async: true});
   */
  this.complete = function (task, val) {
    //this should detect if the first arg is a task, but I guess it should be more thorough
    if(task && task. _currentPrereqIndex >=0 ) {
      task.complete(val);
    }
    else {
      val = task;
      if(jake._invocationChain.length > 0) {
        jake._invocationChain[jake._invocationChain.length-1].complete(val);
      }
    }
  };

  /**
    @name fail
    @static
    @function
    @description Causes Jake execution to abort with an error.
    Allows passing an optional error code, which will be used to
    set the exit-code of exiting process.
    `
    @param {Error|String} err The error to thow when aborting execution.
    If this argument is an Error object, it will simply be thrown. If
    a String, it will be used as the error-message. (If it is a multi-line
    String, the first line will be used as the Error message, and the
    remaining lines will be used as the error-stack.)

    @example
    task('createTests, function () {
      if (!fs.existsSync('./tests')) {
        fail('Test directory does not exist.');
      }
      else {
        // Do some testing stuff ...
      }
    });
   */
  this.fail = function (err, code) {
    let msg;
    let errObj;
    if (code) {
      jake.errorCode = code;
    }
    if (err) {
      if (typeof err == 'string') {
        // Use the initial or only line of the error as the error-message
        // If there was a multi-line error, use the rest as the stack
        msg = err.split('\n');
        errObj = new Error(msg.shift());
        if (msg.length) {
          errObj.stack = msg.join('\n');
        }
        throw errObj;
      }
      else if (err instanceof Error) {
        throw err;
      }
      else {
        throw new Error(err.toString());
      }
    }
    else {
      throw new Error();
    }
  };

  this.packageTask = function (name, version, prereqs, definition) {
    return new jake.PackageTask(name, version, prereqs, definition);
  };

  this.publishTask = function (name, prereqs, opts, definition) {
    return new jake.PublishTask(name, prereqs, opts, definition);
  };

  // Backward-compat
  this.npmPublishTask = function (name, prereqs, opts, definition) {
    return new jake.PublishTask(name, prereqs, opts, definition);
  };

  this.testTask = function () {
    let ctor = function () {};
    let t;
    ctor.prototype = jake.TestTask.prototype;
    t = new ctor();
    jake.TestTask.apply(t, arguments);
    return t;
  };

  this.setTaskTimeout = function (t) {
    this._taskTimeout = t;
  };

  this.setSeriesAutoPrefix = function (prefix) {
    this._seriesAutoPrefix = prefix;
  };

  this.series = function (...args) {
    let prereqs = args.map((arg) => {
      let name = (this._seriesAutoPrefix || '') + arg.name;
      jake.task(name, arg);
      return name;
    });
    let seriesName = uuid();
    let seriesTask = jake.task(seriesName, prereqs);
    seriesTask._internal = true;
    let res = function () {
      return new Promise((resolve) => {
        seriesTask.invoke();
        seriesTask.on('complete', (val) => {
          resolve(val);
        });
      });
    };
    Object.defineProperty(res, 'name', {value: uuid(),
      writable: false});
    return res;
  };

})();

module.exports = api;

}, function(modId) { var map = {"./utils":1647755346482}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346482, function(require, module, exports) {
/*
 * Jake JavaScript build tool
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/


let util = require('util'); // Native Node util module
let spawn = require('child_process').spawn;
let EventEmitter = require('events').EventEmitter;
let logger = require('./logger');
let file = require('./file');
let Exec;

const _UUID_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

let parseArgs = function (argumentsObj) {
  let args;
  let arg;
  let cmds;
  let callback;
  let opts = {
    interactive: false,
    printStdout: false,
    printStderr: false,
    breakOnError: true
  };

  args = Array.prototype.slice.call(argumentsObj);

  cmds = args.shift();
  // Arrayize if passed a single string command
  if (typeof cmds == 'string') {
    cmds = [cmds];
  }
  // Make a copy if it's an actual list
  else {
    cmds = cmds.slice();
  }

  // Get optional callback or opts
  while((arg = args.shift())) {
    if (typeof arg == 'function') {
      callback = arg;
    }
    else if (typeof arg == 'object') {
      opts = Object.assign(opts, arg);
    }
  }

  // Backward-compat shim
  if (typeof opts.stdout != 'undefined') {
    opts.printStdout = opts.stdout;
    delete opts.stdout;
  }
  if (typeof opts.stderr != 'undefined') {
    opts.printStderr = opts.stderr;
    delete opts.stderr;
  }

  return {
    cmds: cmds,
    opts: opts,
    callback: callback
  };
};

/**
  @name jake
  @namespace jake
*/
let utils = new (function () {
  /**
    @name jake.exec
    @static
    @function
    @description Executes shell-commands asynchronously with an optional
    final callback.
    `
    @param {String[]} cmds The list of shell-commands to execute
    @param {Object} [opts]
      @param {Boolean} [opts.printStdout=false] Print stdout from each command
      @param {Boolean} [opts.printStderr=false] Print stderr from each command
      @param {Boolean} [opts.breakOnError=true] Stop further execution on
      the first error.
      @param {Boolean} [opts.windowsVerbatimArguments=false] Don't translate
      arguments on Windows.
    @param {Function} [callback] Callback to run after executing  the
    commands

    @example
    let cmds = [
          'echo "showing directories"'
        , 'ls -al | grep ^d'
        , 'echo "moving up a directory"'
        , 'cd ../'
        ]
      , callback = function () {
          console.log('Finished running commands.');
        }
    jake.exec(cmds, {stdout: true}, callback);
   */
  this.exec = function (a, b, c) {
    let parsed = parseArgs(arguments);
    let cmds = parsed.cmds;
    let opts = parsed.opts;
    let callback = parsed.callback;

    let ex = new Exec(cmds, opts, callback);

    ex.addListener('error', function (msg, code) {
      if (opts.breakOnError) {
        fail(msg, code);
      }
    });
    ex.run();

    return ex;
  };

  this.createExec = function (a, b, c) {
    return new Exec(a, b, c);
  };

  // From Math.uuid.js, https://github.com/broofa/node-uuid
  // Robert Kieffer (robert@broofa.com), MIT license
  this.uuid = function (length, radix) {
    var chars = _UUID_CHARS
      , uuid = []
      , r
      , i;

    radix = radix || chars.length;

    if (length) {
      // Compact form
      i = -1;
      while (++i < length) {
        uuid[i] = chars[0 | Math.random()*radix];
      }
    } else {
      // rfc4122, version 4 form

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      i = -1;
      while (++i < 36) {
        if (!uuid[i]) {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  };

})();

Exec = function () {
  let parsed = parseArgs(arguments);
  let cmds = parsed.cmds;
  let opts = parsed.opts;
  let callback = parsed.callback;

  this._cmds = cmds;
  this._callback = callback;
  this._config = opts;
};

util.inherits(Exec, EventEmitter);

Object.assign(Exec.prototype, new (function () {

  let _run = function () {
    let self = this;
    let sh;
    let cmd;
    let args;
    let next = this._cmds.shift();
    let config = this._config;
    let errData = '';
    let shStdio;
    let handleStdoutData = function (data) {
      self.emit('stdout', data);
    };
    let handleStderrData = function (data) {
      let d = data.toString();
      self.emit('stderr', data);
      // Accumulate the error-data so we can use it as the
      // stack if the process exits with an error
      errData += d;
    };

    // Keep running as long as there are commands in the array
    if (next) {
      let spawnOpts = {};
      this.emit('cmdStart', next);

      // Ganking part of Node's child_process.exec to get cmdline args parsed
      if (process.platform == 'win32') {
        cmd = 'cmd';
        args = ['/c', next];
        if (config.windowsVerbatimArguments) {
          spawnOpts.windowsVerbatimArguments = true;
        }
      }
      else {
        cmd = '/bin/sh';
        args = ['-c', next];
      }

      if (config.interactive) {
        spawnOpts.stdio = 'inherit';
        sh = spawn(cmd, args, spawnOpts);
      }
      else {
        shStdio = [
          process.stdin
        ];
        if (config.printStdout) {
          shStdio.push(process.stdout);
        }
        else {
          shStdio.push('pipe');
        }
        if (config.printStderr) {
          shStdio.push(process.stderr);
        }
        else {
          shStdio.push('pipe');
        }
        spawnOpts.stdio = shStdio;
        sh = spawn(cmd, args, spawnOpts);
        if (!config.printStdout) {
          sh.stdout.addListener('data', handleStdoutData);
        }
        if (!config.printStderr) {
          sh.stderr.addListener('data', handleStderrData);
        }
      }

      // Exit, handle err or run next
      sh.on('exit', function (code) {
        let msg;
        if (code !== 0) {
          msg = errData || 'Process exited with error.';
          msg = msg.trim();
          self.emit('error', msg, code);
        }
        if (code === 0 || !config.breakOnError) {
          self.emit('cmdEnd', next);
          setTimeout(function () { _run.call(self); }, 0);
        }
      });

    }
    else {
      self.emit('end');
      if (typeof self._callback == 'function') {
        self._callback();
      }
    }
  };

  this.append = function (cmd) {
    this._cmds.push(cmd);
  };

  this.run = function () {
    _run.call(this);
  };

})());

utils.Exec = Exec;
utils.file = file;
utils.logger = logger;

module.exports = utils;


}, function(modId) { var map = {"./logger":1647755346483,"./file":1647755346484}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346483, function(require, module, exports) {
let util = require('util');

let logger = new (function () {
  let _output = function (type, out) {
    let quiet = typeof jake != 'undefined' && jake.program &&
        jake.program.opts && jake.program.opts.quiet;
    let msg;
    if (!quiet) {
      msg = typeof out == 'string' ? out : util.inspect(out);
      console[type](msg);
    }
  };

  this.log = function (out) {
    _output('log', out);
  };

  this.error = function (out) {
    _output('error', out);
  };

})();

module.exports = logger;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346484, function(require, module, exports) {
/*
 * Utilities: A classic collection of JavaScript utilities
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

let fs = require('fs');
let path = require('path');

/**
  @name file
  @namespace file
*/

let fileUtils = new (function () {

  // Recursively copy files and directories
  let _copyFile = function (fromPath, toPath, opts) {
    let from = path.normalize(fromPath)
    let to = path.normalize(toPath)
    let options = opts || {}
    let fromStat;
    let toStat;
    let destExists;
    let destDoesNotExistErr;
    let content;
    let filename;
    let dirContents;
    let targetDir;

    fromStat = fs.statSync(from);

    try {
      //console.dir(to + ' destExists');
      toStat = fs.statSync(to);
      destExists = true;
    }
    catch(e) {
      //console.dir(to + ' does not exist');
      destDoesNotExistErr = e;
      destExists = false;
    }
    // Destination dir or file exists, copy into (directory)
    // or overwrite (file)
    if (destExists) {

      // If there's a rename-via-copy file/dir name passed, use it.
      // Otherwise use the actual file/dir name
      filename = options.rename || path.basename(from);

      // Copying a directory
      if (fromStat.isDirectory()) {
        dirContents = fs.readdirSync(from);
        targetDir = path.join(to, filename);
        // We don't care if the target dir already exists
        try {
          fs.mkdirSync(targetDir, {mode: fromStat.mode & 0o777});
        }
        catch(e) {
          if (e.code !== 'EEXIST') {
            throw e;
          }
        }
        for (let i = 0, ii = dirContents.length; i < ii; i++) {
          _copyFile(path.join(from, dirContents[i]), targetDir, {preserveMode: options.preserveMode});
        }
      }
      // Copying a file
      else {
        content = fs.readFileSync(from);
        let mode = fromStat.mode & 0o777;
        let targetFile = to;

        if (toStat.isDirectory()) {
          targetFile = path.join(to, filename);
        }

        let fileExists = fs.existsSync(targetFile);
        fs.writeFileSync(targetFile, content);

        // If the file didn't already exist, use the original file mode.
        // Otherwise, only update the mode if preserverMode is true.
        if(!fileExists || options.preserveMode) {
          fs.chmodSync(targetFile, mode);
        }
      }
    }
    // Dest doesn't exist, can't create it
    else {
      throw destDoesNotExistErr;
    }
  };

  // Remove the given directory
  let _rmDir = function (dirPath) {
    let dir = path.normalize(dirPath);
    let paths = [];
    paths = fs.readdirSync(dir);
    paths.forEach(function (p) {
      let curr = path.join(dir, p);
      let stat = fs.lstatSync(curr);
      if (stat.isDirectory()) {
        _rmDir(curr);
      }
      else {
        try {
          fs.unlinkSync(curr);
        } catch(e) {
          if (e.code === 'EPERM') {
            fs.chmodSync(curr, parseInt(666, 8));
            fs.unlinkSync(curr);
          } else {
            throw e;
          }
        }
      }
    });
    fs.rmdirSync(dir);
  };

  /**
    @name file#cpR
    @public
    @function
    @description Copies a directory/file to a destination
    @param {String} fromPath The source path to copy from
    @param {String} toPath The destination path to copy to
    @param {Object} opts Options to use
      @param {Boolean} [opts.preserveMode] If target file already exists, this
        determines whether the original file's mode is copied over. The default of
        false mimics the behavior of the `cp` command line tool. (Default: false)
  */
  this.cpR = function (fromPath, toPath, options) {
    let from = path.normalize(fromPath);
    let to = path.normalize(toPath);
    let toStat;
    let doesNotExistErr;
    let filename;
    let opts = options || {};

    if (from == to) {
      throw new Error('Cannot copy ' + from + ' to itself.');
    }

    // Handle rename-via-copy
    try {
      toStat = fs.statSync(to);
    }
    catch(e) {
      doesNotExistErr = e;

      // Get abs path so it's possible to check parent dir
      if (!this.isAbsolute(to)) {
        to = path.join(process.cwd(), to);
      }

      // Save the file/dir name
      filename = path.basename(to);
      // See if a parent dir exists, so there's a place to put the
      /// renamed file/dir (resets the destination for the copy)
      to = path.dirname(to);
      try {
        toStat = fs.statSync(to);
      }
      catch(e) {}
      if (toStat && toStat.isDirectory()) {
        // Set the rename opt to pass to the copy func, will be used
        // as the new file/dir name
        opts.rename = filename;
        //console.log('filename ' + filename);
      }
      else {
        throw doesNotExistErr;
      }
    }

    _copyFile(from, to, opts);
  };

  /**
    @name file#mkdirP
    @public
    @function
    @description Create the given directory(ies) using the given mode permissions
    @param {String} dir The directory to create
    @param {Number} mode The mode to give the created directory(ies)(Default: 0755)
  */
  this.mkdirP = function (dir, mode) {
    let dirPath = path.normalize(dir);
    let paths = dirPath.split(/\/|\\/);
    let currPath = '';
    let next;

    if (paths[0] == '' || /^[A-Za-z]+:/.test(paths[0])) {
      currPath = paths.shift() || '/';
      currPath = path.join(currPath, paths.shift());
      //console.log('basedir');
    }
    while ((next = paths.shift())) {
      if (next == '..') {
        currPath = path.join(currPath, next);
        continue;
      }
      currPath = path.join(currPath, next);
      try {
        //console.log('making ' + currPath);
        fs.mkdirSync(currPath, mode || parseInt(755, 8));
      }
      catch(e) {
        if (e.code != 'EEXIST') {
          throw e;
        }
      }
    }
  };

  /**
    @name file#rmRf
    @public
    @function
    @description Deletes the given directory/file
    @param {String} p The path to delete, can be a directory or file
  */
  this.rmRf = function (p, options) {
    let stat;
    try {
      stat = fs.lstatSync(p);
      if (stat.isDirectory()) {
        _rmDir(p);
      }
      else {
        fs.unlinkSync(p);
      }
    }
    catch (e) {}
  };

  /**
    @name file#isAbsolute
    @public
    @function
    @return {Boolean/String} If it's absolute the first character is returned otherwise false
    @description Checks if a given path is absolute or relative
    @param {String} p Path to check
  */
  this.isAbsolute = function (p) {
    let match = /^[A-Za-z]+:\\|^\//.exec(p);
    if (match && match.length) {
      return match[0];
    }
    return false;
  };

  /**
    @name file#absolutize
    @public
    @function
    @return {String} Returns the absolute path for the given path
    @description Returns the absolute path for the given path
    @param {String} p The path to get the absolute path for
  */
  this.absolutize = function (p) {
    if (this.isAbsolute(p)) {
      return p;
    }
    else {
      return path.join(process.cwd(), p);
    }
  };

})();

module.exports = fileUtils;


}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346485, function(require, module, exports) {
/*
 * Jake JavaScript build tool
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

let fs = require('fs');
let parseargs = require('./parseargs');
let utils = require('./utils');
let Program;
let usage = require('fs').readFileSync(`${__dirname}/../usage.txt`).toString();
let { Task } = require('./task/task');

function die(msg) {
  console.log(msg);
  process.stdout.write('', function () {
    process.stderr.write('', function () {
      process.exit();
    });
  });
}

let preempts = {
  version: function () {
    die(jake.version);
  },
  help: function () {
    die(usage);
  }
};

let AVAILABLE_OPTS = [
  { full: 'jakefile',
    abbr: 'f',
    expectValue: true
  },
  { full: 'quiet',
    abbr: 'q',
    expectValue: false
  },
  { full: 'directory',
    abbr: 'C',
    expectValue: true
  },
  { full: 'always-make',
    abbr: 'B',
    expectValue: false
  },
  { full: 'tasks',
    abbr: 'T',
    expectValue: false,
    allowValue: true
  },
  // Alias t
  { full: 'tasks',
    abbr: 't',
    expectValue: false,
    allowValue: true
  },
  // Alias ls
  { full: 'tasks',
    abbr: 'ls',
    expectValue: false,
    allowValue: true
  },
  { full: 'help',
    abbr: 'h',
  },
  { full: 'version',
    abbr: 'V',
  },
  // Alias lowercase v
  { full: 'version',
    abbr: 'v',
  },
  { full: 'jakelibdir',
    abbr: 'J',
    expectValue: true
  },
  { full: 'allow-rejection',
    abbr: 'ar',
    expectValue: false
  }
];

Program = function () {
  this.availableOpts = AVAILABLE_OPTS;
  this.opts = {};
  this.taskNames = null;
  this.taskArgs = null;
  this.envVars = null;
  this.die = die;
};

Program.prototype = new (function () {

  this.handleErr = function (err) {
    if (jake.listeners('error').length !== 0) {
      jake.emit('error', err);
      return;
    }

    if (jake.listeners('error').length) {
      jake.emit('error', err);
      return;
    }

    utils.logger.error('jake aborted.');
    if (err.stack) {
      utils.logger.error(err.stack);
    }
    else {
      utils.logger.error(err.message);
    }

    process.stdout.write('', function () {
      process.stderr.write('', function () {
        jake.errorCode = jake.errorCode || 1;
        process.exit(jake.errorCode);
      });
    });
  };

  this.parseArgs = function (args) {
    let result = (new parseargs.Parser(this.availableOpts)).parse(args);
    this.setOpts(result.opts);
    this.setTaskNames(result.taskNames);
    this.setEnvVars(result.envVars);
  };

  this.setOpts = function (options) {
    let opts = options || {};
    Object.assign(this.opts, opts);
  };

  this.internalOpts = function (options) {
    this.availableOpts = this.availableOpts.concat(options);
  };

  this.autocompletions = function (cur) {
    let p; let i; let task;
    let commonPrefix = '';
    let matches = [];

    for (p in jake.Task) {
      task = jake.Task[p];
      if (
        'fullName' in task
          && (
            // if empty string, program converts to true
            cur === true ||
            task.fullName.indexOf(cur) === 0
          )
      ) {
        if (matches.length === 0) {
          commonPrefix = task.fullName;
        }
        else {
          for (i = commonPrefix.length; i > -1; --i) {
            commonPrefix = commonPrefix.substr(0, i);
            if (task.fullName.indexOf(commonPrefix) === 0) {
              break;
            }
          }
        }
        matches.push(task.fullName);
      }
    }

    if (matches.length > 1 && commonPrefix === cur) {
      matches.unshift('yes-space');
    }
    else {
      matches.unshift('no-space');
    }

    process.stdout.write(matches.join(' '));
  };

  this.setTaskNames = function (names) {
    if (names && !Array.isArray(names)) {
      throw new Error('Task names must be an array');
    }
    this.taskNames = (names && names.length) ? names : ['default'];
  };

  this.setEnvVars = function (vars) {
    this.envVars = vars || null;
  };

  this.firstPreemptiveOption = function () {
    let opts = this.opts;
    for (let p in opts) {
      if (preempts[p]) {
        return preempts[p];
      }
    }
    return false;
  };

  this.init = function (configuration) {
    let self = this;
    let config = configuration || {};
    if (config.options) {
      this.setOpts(config.options);
    }
    if (config.taskNames) {
      this.setTaskNames(config.taskNames);
    }
    if (config.envVars) {
      this.setEnvVars(config.envVars);
    }
    process.addListener('uncaughtException', function (err) {
      self.handleErr(err);
    });
    if (!this.opts['allow-rejection']) {
      process.addListener('unhandledRejection', (reason, promise) => {
        utils.logger.error('Unhandled rejection at:', promise, 'reason:', reason);
        self.handleErr(reason);
      });
    }
    if (this.envVars) {
      Object.assign(process.env, this.envVars);
    }
  };

  this.run = function () {
    let rootTask;
    let taskNames;
    let dirname;
    let opts = this.opts;

    if (opts.autocomplete) {
      return this.autocompletions(opts['autocomplete-cur'], opts['autocomplete-prev']);
    }
    // Run with `jake -T`, just show descriptions
    if (opts.tasks) {
      return jake.showAllTaskDescriptions(opts.tasks);
    }

    taskNames = this.taskNames;
    if (!(Array.isArray(taskNames) && taskNames.length)) {
      throw new Error('Please pass jake.runTasks an array of task-names');
    }

    // Set working dir
    dirname = opts.directory;
    if (dirname) {
      if (fs.existsSync(dirname) &&
        fs.statSync(dirname).isDirectory()) {
        process.chdir(dirname);
      }
      else {
        throw new Error(dirname + ' is not a valid directory path');
      }
    }

    rootTask = task(Task.ROOT_TASK_NAME, taskNames, function () {});
    rootTask._internal = true;

    rootTask.once('complete', function () {
      jake.emit('complete');
    });
    jake.emit('start');
    rootTask.invoke();
  };

})();

module.exports.Program = Program;

}, function(modId) { var map = {"./parseargs":1647755346486,"./utils":1647755346482,"./task/task":1647755346476}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346486, function(require, module, exports) {
/*
 * Jake JavaScript build tool
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

let parseargs = {};
let isOpt = function (arg) { return arg.indexOf('-') === 0 };
let removeOptPrefix = function (opt) { return opt.replace(/^--/, '').replace(/^-/, '') };

/**
 * @constructor
 * Parses a list of command-line args into a key/value object of
 * options and an array of positional commands.
 * @ param {Array} opts A list of options in the following format:
 * [{full: 'foo', abbr: 'f'}, {full: 'bar', abbr: 'b'}]]
 */
parseargs.Parser = function (opts) {
  // A key/value object of matching options parsed out of the args
  this.opts = {};
  this.taskNames = null;
  this.envVars = null;

  // Data structures used for parsing
  this.reg = opts;
  this.shortOpts = {};
  this.longOpts = {};

  let self = this;
  [].forEach.call(opts, function (item) {
    self.shortOpts[item.abbr] = item;
    self.longOpts[item.full] = item;
  });
};

parseargs.Parser.prototype = new function () {

  let _trueOrNextVal = function (argParts, args) {
    if (argParts[1]) {
      return argParts[1];
    }
    else {
      return (!args[0] || isOpt(args[0])) ?
        true : args.shift();
    }
  };

  /**
   * Parses an array of arguments into options and positional commands
   * @param {Array} args The command-line args to parse
   */
  this.parse = function (args) {
    let cmds = [];
    let cmd;
    let envVars = {};
    let opts = {};
    let arg;
    let argItem;
    let argParts;
    let cmdItems;
    let taskNames = [];
    let preempt;

    while (args.length) {
      arg = args.shift();

      if (isOpt(arg)) {
        arg = removeOptPrefix(arg);
        argParts = arg.split('=');
        argItem = this.longOpts[argParts[0]] || this.shortOpts[argParts[0]];
        if (argItem) {
          // First-encountered preemptive opt takes precedence -- no further opts
          // or possibility of ambiguity, so just look for a value, or set to
          // true and then bail
          if (argItem.preempts) {
            opts[argItem.full] = _trueOrNextVal(argParts, args);
            preempt = true;
            break;
          }
          // If the opt requires a value, see if we can get a value from the
          // next arg, or infer true from no-arg -- if it's followed by another
          // opt, throw an error
          if (argItem.expectValue || argItem.allowValue) {
            opts[argItem.full] = _trueOrNextVal(argParts, args);
            if (argItem.expectValue && !opts[argItem.full]) {
              throw new Error(argItem.full + ' option expects a value.');
            }
          }
          else {
            opts[argItem.full] = true;
          }
        }
      }
      else {
        cmds.unshift(arg);
      }
    }

    if (!preempt) {
      // Parse out any env-vars and task-name
      while ((cmd = cmds.pop())) {
        cmdItems = cmd.split('=');
        if (cmdItems.length > 1) {
          envVars[cmdItems[0]] = cmdItems[1];
        }
        else {
          taskNames.push(cmd);
        }
      }

    }

    return {
      opts: opts,
      envVars: envVars,
      taskNames: taskNames
    };
  };

};

module.exports = parseargs;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346487, function(require, module, exports) {
/*
 * Jake JavaScript build tool
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

let path = require('path');
let fs = require('fs');
let existsSync = fs.existsSync;
let utils = require('./utils');

// Files like jakelib/foobar.jake.js
const JAKELIB_FILE_PAT = /\.jake$|\.js$/;
const SUPPORTED_EXTENSIONS = {
  'js': null,
  'coffee': function () {
    try {
      let cs = require('coffeescript');
      if (typeof cs.register == 'function') {
        cs.register();
      }
    }
    catch(e) {
      throw new Error('You have a CoffeeScript Jakefile, but have not installed CoffeeScript');
    }
  },
  'ls': function () {
    try {
      require('livescript');
    }
    catch (e) {
      throw new Error('You have a LiveScript Jakefile, but have not installed LiveScript');
    }
  }
};
const IMPLICIT_JAKEFILE_NAMES = [
  'Jakefile',
  'Gulpfile'
];

let Loader = function () {
  // Load a Jakefile, running the code inside -- this may result in
  // tasks getting defined using the original Jake API, e.g.,
  // `task('foo' ['bar', 'baz']);`, or can also auto-create tasks
  // from any functions exported from the file
  function loadFile(filePath) {
    let exported = require(filePath);
    for (let [key, value] of Object.entries(exported)) {
      let t;
      if (typeof value == 'function') {
        t = jake.task(key, value);
        t.description = '(Exported function)';
      }
    }
  }

  function fileExists(name) {
    let nameWithExt = null;
    // Support no file extension as well
    let exts = Object.keys(SUPPORTED_EXTENSIONS).concat(['']);
    exts.some((ext) => {
      let fname = ext ? `${name}.${ext}` : name;
      if (existsSync(fname)) {
        nameWithExt = fname;
        return true;
      }
    });
    return nameWithExt;
  }

  // Recursive
  function findImplicitJakefile() {
    let cwd = process.cwd();
    let names = IMPLICIT_JAKEFILE_NAMES;
    let found = null;
    names.some((name) => {
      let n;
      // Prefer all-lowercase
      n = name.toLowerCase();
      if ((found = fileExists(n))) {
        return found;
      }
      // Check mixed-case as well
      n = name;
      if ((found = fileExists(n))) {
        return found;
      }
    });
    if (found) {
      return found;
    }
    else {
      process.chdir("..");
      // If we've walked all the way up the directory tree,
      // bail out with no result
      if (cwd === process.cwd()) {
        return null;
      }
      return findImplicitJakefile();
    }
  }

  this.loadFile = function (fileSpecified) {
    let jakefile;
    let origCwd = process.cwd();

    if (fileSpecified) {
      if (existsSync(fileSpecified)) {
        jakefile = fileSpecified;
      }
    }
    else {
      jakefile = findImplicitJakefile();
    }

    if (jakefile) {
      let ext = jakefile.split('.')[1];
      let loaderFunc = SUPPORTED_EXTENSIONS[ext];
      loaderFunc && loaderFunc();

      loadFile(utils.file.absolutize(jakefile));
      return true;
    }
    else {
      if (!fileSpecified) {
        // Restore the working directory on failure
        process.chdir(origCwd);
      }
      return false;
    }
  };

  this.loadDirectory = function (d) {
    let dirname = d || 'jakelib';
    let dirlist;
    dirname = utils.file.absolutize(dirname);
    if (existsSync(dirname)) {
      dirlist = fs.readdirSync(dirname);
      dirlist.forEach(function (filePath) {
        if (JAKELIB_FILE_PAT.test(filePath)) {
          loadFile(path.join(dirname, filePath));
        }
      });
      return true;
    }
    return false;
  };

};

module.exports = function () {
  return new Loader();
};

}, function(modId) { var map = {"./utils":1647755346482}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346488, function(require, module, exports) {
/*
 * Jake JavaScript build tool
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

let path = require('path');
let fs = require('fs');
let exec = require('child_process').exec;
let FileList = require('filelist').FileList;

/**
  @name jake
  @namespace jake
*/
/**
  @name jake.PackageTask
  @constructor
  @description Instantiating a PackageTask creates a number of Jake
  Tasks that make packaging and distributing your software easy.

  @param {String} name The name of the project
  @param {String} version The current project version (will be
  appended to the project-name in the package-archive
  @param {Function} definition Defines the contents of the package,
  and format of the package-archive. Will be executed on the instantiated
  PackageTask (i.e., 'this', will be the PackageTask instance),
  to set the various instance-propertiess.

  @example
  let t = new jake.PackageTask('rous', 'v' + version, function () {
    let files = [
      'Capfile'
    , 'Jakefile'
    , 'README.md'
    , 'package.json'
    , 'app/*'
    , 'bin/*'
    , 'config/*'
    , 'lib/*'
    , 'node_modules/*'
    ];
    this.packageFiles.include(files);
    this.packageFiles.exclude('node_modules/foobar');
    this.needTarGz = true;
  });

 */
let PackageTask = function () {
  let args = Array.prototype.slice.call(arguments);
  let name = args.shift();
  let version = args.shift();
  let definition = args.pop();
  let prereqs = args.pop() || []; // Optional

  prereqs = [].concat(prereqs); // Accept string or list

  /**
    @name jake.PackageTask#name
    @public
    @type {String}
    @description The name of the project
   */
  this.name = name;
  /**
    @name jake.PackageTask#version
    @public
    @type {String}
    @description The project version-string
   */
  this.version = version;
  /**
    @name jake.PackageTask#prereqs
    @public
    @type {Array}
    @description Tasks to run before packaging
   */
  this.prereqs = prereqs;
  /**
    @name jake.PackageTask#packageDir
    @public
    @type {String='pkg'}
    @description The directory-name to use for packaging the software
   */
  this.packageDir = 'pkg';
  /**
    @name jake.PackageTask#packageFiles
    @public
    @type {jake.FileList}
    @description The list of files and directories to include in the
    package-archive
   */
  this.packageFiles = new FileList();
  /**
    @name jake.PackageTask#needTar
    @public
    @type {Boolean=false}
    @description If set to true, uses the `tar` utility to create
    a gzip .tgz archive of the package
   */
  this.needTar = false;
  /**
    @name jake.PackageTask#needTarGz
    @public
    @type {Boolean=false}
    @description If set to true, uses the `tar` utility to create
    a gzip .tar.gz archive of the package
   */
  this.needTarGz = false;
  /**
    @name jake.PackageTask#needTarBz2
    @public
    @type {Boolean=false}
    @description If set to true, uses the `tar` utility to create
    a bzip2 .bz2 archive of the package
   */
  this.needTarBz2 = false;
  /**
    @name jake.PackageTask#needJar
    @public
    @type {Boolean=false}
    @description If set to true, uses the `jar` utility to create
    a .jar archive of the package
   */
  this.needJar = false;
  /**
    @name jake.PackageTask#needZip
    @public
    @type {Boolean=false}
    @description If set to true, uses the `zip` utility to create
    a .zip archive of the package
   */
  this.needZip = false;
  /**
    @name jake.PackageTask#manifestFile
    @public
    @type {String=null}
    @description Can be set to point the `jar` utility at a manifest
    file to use in a .jar archive. If unset, one will be automatically
    created by the `jar` utility. This path should be relative to the
    root of the package directory (this.packageDir above, likely 'pkg')
   */
  this.manifestFile = null;
  /**
    @name jake.PackageTask#tarCommand
    @public
    @type {String='tar'}
    @description The shell-command to use for creating tar archives.
   */
  this.tarCommand = 'tar';
  /**
    @name jake.PackageTask#jarCommand
    @public
    @type {String='jar'}
    @description The shell-command to use for creating jar archives.
   */
  this.jarCommand = 'jar';
  /**
    @name jake.PackageTask#zipCommand
    @public
    @type {String='zip'}
    @description The shell-command to use for creating zip archives.
   */
  this.zipCommand = 'zip';
  /**
    @name jake.PackageTask#archiveNoBaseDir
    @public
    @type {Boolean=false}
    @description Simple option for performing the archive on the
    contents of the directory instead of the directory itself
   */
  this.archiveNoBaseDir = false;
  /**
    @name jake.PackageTask#archiveChangeDir
    @public
    @type {String=null}
    @description Equivalent to the '-C' command for the `tar` and `jar`
    commands. ("Change to this directory before adding files.")
   */
  this.archiveChangeDir = null;
  /**
    @name jake.PackageTask#archiveContentDir
    @public
    @type {String=null}
    @description Specifies the files and directories to include in the
    package-archive. If unset, this will default to the main package
    directory -- i.e., name + version.
   */
  this.archiveContentDir = null;

  if (typeof definition == 'function') {
    definition.call(this);
  }
  this.define();
};

PackageTask.prototype = new (function () {

  let _compressOpts = {
    Tar: {
      ext: '.tgz',
      flags: 'czf',
      cmd: 'tar'
    },
    TarGz: {
      ext: '.tar.gz',
      flags: 'czf',
      cmd: 'tar'
    },
    TarBz2: {
      ext: '.tar.bz2',
      flags: 'cjf',
      cmd: 'tar'
    },
    Jar: {
      ext: '.jar',
      flags: 'cf',
      cmd: 'jar'
    },
    Zip: {
      ext: '.zip',
      flags: 'qr',
      cmd: 'zip'
    }
  };

  this.define = function () {
    let self = this;
    let packageDirPath = this.packageDirPath();
    let compressTaskArr = [];

    desc('Build the package for distribution');
    task('package', self.prereqs.concat(['clobberPackage', 'buildPackage']));
    // Backward-compat alias
    task('repackage', ['package']);

    task('clobberPackage', function () {
      jake.rmRf(self.packageDir, {silent: true});
    });

    desc('Remove the package');
    task('clobber', ['clobberPackage']);

    let doCommand = function (p) {
      let filename = path.resolve(self.packageDir + '/' + self.packageName() +
                                  _compressOpts[p].ext);
      if (process.platform == 'win32') {
        // Windows full path may have drive letter, which is going to cause
        // namespace problems, so strip it.
        if (filename.length > 2 && filename[1] == ':') {
          filename = filename.substr(2);
        }
      }
      compressTaskArr.push(filename);

      file(filename, [packageDirPath], function () {
        let cmd;
        let opts = _compressOpts[p];
        // Directory to move to when doing the compression-task
        // Changes in the case of zip for emulating -C option
        let chdir = self.packageDir;
        // Save the current dir so it's possible to pop back up
        // after compressing
        let currDir = process.cwd();
        let archiveChangeDir;
        let archiveContentDir;

        if (self.archiveNoBaseDir) {
          archiveChangeDir = self.packageName();
          archiveContentDir = '.';
        }
        else {
          archiveChangeDir = self.archiveChangeDir;
          archiveContentDir = self.archiveContentDir;
        }

        cmd = self[opts.cmd + 'Command'];
        cmd += ' -' + opts.flags;
        if (opts.cmd == 'jar' && self.manifestFile) {
          cmd += 'm';
        }

        // The name of the archive to create -- use full path
        // so compression can be performed from a different dir
        // if needed
        cmd += ' ' + filename;

        if (opts.cmd == 'jar' && self.manifestFile) {
          cmd += ' ' + self.manifestFile;
        }

        // Where to perform the compression -- -C option isn't
        // supported in zip, so actually do process.chdir for this
        if (archiveChangeDir) {
          if (opts.cmd == 'zip') {
            chdir = path.join(chdir, archiveChangeDir);
          }
          else {
            cmd += ' -C ' + archiveChangeDir;
          }
        }

        // Where to get the archive content
        if (archiveContentDir) {
          cmd += ' ' + archiveContentDir;
        }
        else {
          cmd += ' ' + self.packageName();
        }

        // Move into the desired dir (usually packageDir) to compress
        // Return back up to the current dir after the exec
        process.chdir(chdir);

        exec(cmd, function (err, stdout, stderr) {
          if (err) { throw err; }

          // Return back up to the starting directory (see above,
          // before exec)
          process.chdir(currDir);

          complete();
        });
      }, {async: true});
    };

    for (let p in _compressOpts) {
      if (this['need' + p]) {
        doCommand(p);
      }
    }

    task('buildPackage', compressTaskArr, function () {});

    directory(this.packageDir);

    file(packageDirPath, this.packageFiles, function () {
      jake.mkdirP(packageDirPath);
      let fileList = [];
      self.packageFiles.forEach(function (name) {
        let f = path.join(self.packageDirPath(), name);
        let fDir = path.dirname(f);
        jake.mkdirP(fDir, {silent: true});

        // Add both files and directories
        fileList.push({
          from: name,
          to: f
        });
      });
      let _copyFile = function () {
        let file = fileList.pop();
        let stat;
        if (file) {
          stat = fs.statSync(file.from);
          // Target is a directory, just create it
          if (stat.isDirectory()) {
            jake.mkdirP(file.to, {silent: true});
            _copyFile();
          }
          // Otherwise copy the file
          else {
            jake.cpR(file.from, file.to, {silent: true});
            _copyFile();
          }
        }
        else {
          complete();
        }
      };
      _copyFile();
    }, {async: true});


  };

  this.packageName = function () {
    if (this.version) {
      return this.name + '-' + this.version;
    }
    else {
      return this.name;
    }
  };

  this.packageDirPath = function () {
    return this.packageDir + '/' + this.packageName();
  };

})();

jake.PackageTask = PackageTask;
exports.PackageTask = PackageTask;


}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346489, function(require, module, exports) {
/*
 * Jake JavaScript build tool
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

let fs = require('fs');
let path = require('path');
let exec = require('child_process').execSync;
let FileList = require('filelist').FileList;

let PublishTask = function () {
  let args = Array.prototype.slice.call(arguments).filter(function (item) {
    return typeof item != 'undefined';
  });
  let arg;
  let opts = {};
  let definition;
  let prereqs = [];
  let createDef = function (arg) {
    return function () {
      this.packageFiles.include(arg);
    };
  };

  this.name = args.shift();

  // Old API, just name + list of files
  if (args.length == 1 && (Array.isArray(args[0]) || typeof args[0] == 'string')) {
    definition = createDef(args.pop());
  }
  // Current API, name + [prereqs] + [opts] + definition
  else {
    while ((arg = args.pop())) {
      // Definition func
      if (typeof arg == 'function') {
        definition = arg;
      }
      // Prereqs
      else if (Array.isArray(arg) || typeof arg == 'string') {
        prereqs = arg;
      }
      // Opts
      else {
        opts = arg;
      }
    }
  }

  this.prereqs = prereqs;
  this.packageFiles = new FileList();
  this.publishCmd = opts.publishCmd || 'npm publish %filename';
  this.publishMessage = opts.publishMessage || 'BOOM! Published.';
  this.gitCmd = opts.gitCmd || 'git';
  this.versionFiles = opts.versionFiles || ['package.json'];
  this.scheduleDelay = 5000;

  // Override utility funcs for testing
  this._ensureRepoClean = function (stdout) {
    if (stdout.length) {
      fail(new Error('Git repository is not clean.'));
    }
  };
  this._getCurrentBranch = function (stdout) {
    return String(stdout).trim();
  };

  if (typeof definition == 'function') {
    definition.call(this);
  }
  this.define();
};


PublishTask.prototype = new (function () {

  let _currentBranch = null;

  let getPackage = function () {
    let pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(),
      '/package.json')).toString());
    return pkg;
  };
  let getPackageVersionNumber = function () {
    return getPackage().version;
  };

  this.define = function () {
    let self = this;

    namespace('publish', function () {
      task('fetchTags', function () {
        // Make sure local tags are up to date
        exec(self.gitCmd + ' fetch --tags');
        console.log('Fetched remote tags.');
      });

      task('getCurrentBranch', function () {
        // Figure out what branch to push to
        let stdout = exec(self.gitCmd + ' symbolic-ref --short HEAD').toString();
        if (!stdout) {
          throw new Error('No current Git branch found');
        }
        _currentBranch = self._getCurrentBranch(stdout);
        console.log('On branch ' + _currentBranch);
      });

      task('ensureClean', function () {
        // Only bump, push, and tag if the Git repo is clean
        let stdout = exec(self.gitCmd + ' status --porcelain --untracked-files=no').toString();
        // Throw if there's output
        self._ensureRepoClean(stdout);
      });

      task('updateVersionFiles', function () {
        let pkg;
        let version;
        let arr;
        let patch;

        // Grab the current version-string
        pkg = getPackage();
        version = pkg.version;
        // Increment the patch-number for the version
        arr = version.split('.');
        patch = parseInt(arr.pop(), 10) + 1;
        arr.push(patch);
        version = arr.join('.');

        // Update package.json or other files with the new version-info
        self.versionFiles.forEach(function (file) {
          let p = path.join(process.cwd(), file);
          let data = JSON.parse(fs.readFileSync(p).toString());
          data.version = version;
          fs.writeFileSync(p, JSON.stringify(data, true, 2) + '\n');
        });
        // Return the version string so that listeners for the 'complete' event
        // for this task can use it (e.g., to update other files before pushing
        // to Git)
        return version;
      });

      task('pushVersion', ['ensureClean', 'updateVersionFiles'], function () {
        let version = getPackageVersionNumber();
        let message = 'Version ' + version;
        let cmds = [
          self.gitCmd + ' commit -a -m "' + message + '"',
          self.gitCmd + ' push origin ' + _currentBranch,
          self.gitCmd + ' tag -a v' + version + ' -m "' + message + '"',
          self.gitCmd + ' push --tags'
        ];
        cmds.forEach((cmd) => {
          exec(cmd);
        });
        version = getPackageVersionNumber();
        console.log('Bumped version number to v' + version + '.');
      });

      let defineTask = task('definePackage', function () {
        let version = getPackageVersionNumber();
        new jake.PackageTask(self.name, 'v' + version, self.prereqs, function () {
          // Replace the PackageTask's FileList with the PublishTask's FileList
          this.packageFiles = self.packageFiles;
          this.needTarGz = true; // Default to tar.gz
          // If any of the need<CompressionFormat> or archive opts are set
          // proxy them to the PackageTask
          for (let p in this) {
            if (p.indexOf('need') === 0 || p.indexOf('archive') === 0) {
              if (typeof self[p] != 'undefined') {
                this[p] = self[p];
              }
            }
          }
        });
      });
      defineTask._internal = true;

      task('package', function () {
        let definePack = jake.Task['publish:definePackage'];
        let pack = jake.Task['package'];
        let version = getPackageVersionNumber();

        // May have already been run
        if (definePack.taskStatus == jake.Task.runStatuses.DONE) {
          definePack.reenable(true);
        }
        definePack.invoke();
        // Set manually, completion happens in next tick, creating deadlock
        definePack.taskStatus = jake.Task.runStatuses.DONE;
        pack.invoke();
        console.log('Created package for ' + self.name + ' v' + version);
      });

      task('publish', function () {
        return new Promise((resolve) => {
          let version = getPackageVersionNumber();
          let filename;
          let cmd;

          console.log('Publishing ' + self.name + ' v' + version);

          if (typeof self.createPublishCommand == 'function') {
            cmd = self.createPublishCommand(version);
          }
          else {
            filename = './pkg/' + self.name + '-v' + version + '.tar.gz';
            cmd = self.publishCmd.replace(/%filename/gi, filename);
          }

          if (typeof cmd == 'function') {
            cmd(function (err) {
              if (err) {
                throw err;
              }
              console.log(self.publishMessage);
              resolve();
            });
          }
          else {
            // Hackity hack -- NPM publish sometimes returns errror like:
            // Error sending version data\nnpm ERR!
            // Error: forbidden 0.2.4 is modified, should match modified time
            setTimeout(function () {
              let stdout = exec(cmd).toString() || '';
              stdout = stdout.trim();
              if (stdout) {
                console.log(stdout);
              }
              console.log(self.publishMessage);
              resolve();
            }, self.scheduleDelay);
          }
        });
      });

      task('cleanup', function () {
        return new Promise((resolve) => {
          let clobber = jake.Task.clobber;
          clobber.reenable(true);
          clobber.on('complete', function () {
            console.log('Cleaned up package');
            resolve();
          });
          clobber.invoke();
        });
      });

    });

    let prefixNs = function (item) {
      return 'publish:' + item;
    };

    // Create aliases in the default namespace
    desc('Create a new version and release.');
    task('publish', self.prereqs.concat(['version', 'release']
      .map(prefixNs)));

    desc('Release the existing version.');
    task('publishExisting', self.prereqs.concat(['release']
      .map(prefixNs)));

    task('version', ['fetchTags', 'getCurrentBranch', 'pushVersion']
      .map(prefixNs));

    task('release', ['package', 'publish', 'cleanup']
      .map(prefixNs));

    // Invoke proactively so there will be a callable 'package' task
    // which can be used apart from 'publish'
    jake.Task['publish:definePackage'].invoke();
  };

})();

jake.PublishTask = PublishTask;
exports.PublishTask = PublishTask;


}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1647755346490, function(require, module, exports) {
/*
 * Jake JavaScript build tool
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

let path = require('path');
let currDir = process.cwd();

/**
  @name jake
  @namespace jake
*/
/**
  @name jake.TestTask
  @constructor
  @description Instantiating a TestTask creates a number of Jake
  Tasks that make running tests for your software easy.

  @param {String} name The name of the project
  @param {Function} definition Defines the list of files containing the tests,
  and the name of the namespace/task for running them. Will be executed on the
  instantiated TestTask (i.e., 'this', will be the TestTask instance), to set
  the various instance-propertiess.

  @example
  let t = new jake.TestTask('bij-js', function () {
    this.testName = 'testSpecial';
    this.testFiles.include('test/**');
  });

 */
let TestTask = function () {
  let self = this;
  let args = Array.prototype.slice.call(arguments);
  let name = args.shift();
  let definition = args.pop();
  let prereqs = args.pop() || [];

  /**
    @name jake.TestTask#testNam
    @public
    @type {String}
    @description The name of the namespace to place the tests in, and
    the top-level task for running tests. Defaults to "test"
   */
  this.testName = 'test';

  /**
    @name jake.TestTask#testFiles
    @public
    @type {jake.FileList}
    @description The list of files containing tests to load
   */
  this.testFiles = new jake.FileList();

  /**
    @name jake.TestTask#showDescription
    @public
    @type {Boolean}
    @description Show the created task when doing Jake -T
   */
  this.showDescription = true;

  /*
    @name jake.TestTask#totalTests
    @public
    @type {Number}
    @description The total number of tests to run
  */
  this.totalTests = 0;

  /*
    @name jake.TestTask#executedTests
    @public
    @type {Number}
    @description The number of tests successfully run
  */
  this.executedTests = 0;

  if (typeof definition == 'function') {
    definition.call(this);
  }

  if (this.showDescription) {
    desc('Run the tests for ' + name);
  }

  task(this.testName, prereqs, {async: true}, function () {
    let t = jake.Task[this.fullName + ':run'];
    t.on('complete', function () {
      complete();
    });
    // Pass args to the namespaced test
    t.invoke.apply(t, arguments);
  });

  namespace(self.testName, function () {

    let runTask = task('run', {async: true}, function (pat) {
      let re;
      let testFiles;

      // Don't nest; make a top-level namespace. Don't want
      // re-calling from inside to nest infinitely
      jake.currentNamespace = jake.defaultNamespace;

      re = new RegExp(pat);
      // Get test files that match the passed-in pattern
      testFiles = self.testFiles.toArray()
        .filter(function (f) {
          return (re).test(f);
        }) // Don't load the same file multiple times -- should this be in FileList?
        .reduce(function (p, c) {
          if (p.indexOf(c) < 0) {
            p.push(c);
          }
          return p;
        }, []);

      // Create a namespace for all the testing tasks to live in
      namespace(self.testName + 'Exec', function () {
        // Each test will be a prereq for the dummy top-level task
        let prereqs = [];
        // Continuation to pass to the async tests, wrapping `continune`
        let next = function () {
          complete();
        };
        // Create the task for this test-function
        let createTask = function (name, action) {
          // If the test-function is defined with a continuation
          // param, flag the task as async
          let t;
          let isAsync = !!action.length;

          // Define the actual namespaced task with the name, the
          // wrapped action, and the correc async-flag
          t = task(name, createAction(name, action), {
            async: isAsync
          });
          t.once('complete', function () {
            self.executedTests++;
          });
          t._internal = true;
          return t;
        };
        // Used as the action for the defined task for each test.
        let createAction = function (n, a) {
          // A wrapped function that passes in the `next` function
          // for any tasks that run asynchronously
          return function () {
            let cb;
            if (a.length) {
              cb = next;
            }
            if (!(n == 'before' || n == 'after' ||
                    /_beforeEach$/.test(n) || /_afterEach$/.test(n))) {
              jake.logger.log(n);
            }
            // 'this' will be the task when action is run
            return a.call(this, cb);
          };
        };
          // Dummy top-level task for everything to be prereqs for
        let topLevel;

        // Pull in each test-file, and iterate over any exported
        // test-functions. Register each test-function as a prereq task
        testFiles.forEach(function (file) {
          let exp = require(path.join(currDir, file));

          // Create a namespace for each filename, so test-name collisions
          // won't be a problem
          namespace(file, function () {
            let testPrefix = self.testName + 'Exec:' + file + ':';
            let testName;
            // Dummy task for displaying file banner
            testName = '*** Running ' + file + ' ***';
            prereqs.push(testPrefix + testName);
            createTask(testName, function () {});

            // 'before' setup
            if (typeof exp.before == 'function') {
              prereqs.push(testPrefix + 'before');
              // Create the task
              createTask('before', exp.before);
            }

            // Walk each exported function, and create a task for each
            for (let p in exp) {
              if (p == 'before' || p == 'after' ||
                  p == 'beforeEach' || p == 'afterEach') {
                continue;
              }

              if (typeof exp.beforeEach == 'function') {
                prereqs.push(testPrefix + p + '_beforeEach');
                // Create the task
                createTask(p + '_beforeEach', exp.beforeEach);
              }

              // Add the namespace:name of this test to the list of prereqs
              // for the dummy top-level task
              prereqs.push(testPrefix + p);
              // Create the task
              createTask(p, exp[p]);

              if (typeof exp.afterEach == 'function') {
                prereqs.push(testPrefix + p + '_afterEach');
                // Create the task
                createTask(p + '_afterEach', exp.afterEach);
              }
            }

            // 'after' teardown
            if (typeof exp.after == 'function') {
              prereqs.push(testPrefix + 'after');
              // Create the task
              let afterTask = createTask('after', exp.after);
              afterTask._internal = true;
            }

          });
        });

        self.totalTests = prereqs.length;
        process.on('exit', function () {
          // Throw in the case where the process exits without
          // finishing tests, but no error was thrown
          if (!jake.errorCode && (self.totalTests > self.executedTests)) {
            throw new Error('Process exited without all tests completing.');
          }
        });

        // Create the dummy top-level task. When calling a task internally
        // with `invoke` that is async (or has async prereqs), have to listen
        // for the 'complete' event to know when it's done
        topLevel = task('__top__', prereqs);
        topLevel._internal = true;
        topLevel.addListener('complete', function () {
          jake.logger.log('All tests ran successfully');
          complete();
        });

        topLevel.invoke(); // Do the thing!
      });

    });
    runTask._internal = true;

  });


};

jake.TestTask = TestTask;
exports.TestTask = TestTask;


}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1647755346474);
})()
//miniprogram-npm-outsideDeps=["events","fs","chalk","filelist","async","path","util","child_process","coffeescript","livescript"]
//# sourceMappingURL=index.js.map