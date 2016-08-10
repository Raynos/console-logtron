'use strict';

var process = global.process;
var os = require('os');

function LogData(level, msg, meta, time) {
    this.name = null;
    this.hostname = os.hostname();
    this.pid = process.pid;
    this.component = null;
    this.level = level
    this.msg = msg;
    this.time = time || (new Date()).toISOString()
    this.src = null;
    this.v = 0;

    // Non standard
    this.fields = meta;
}

function ConsoleLogtron(stream) {
    this.stream = stream || process.stdout;
}

ConsoleLogtron.prototype._log = function _log(level, msg, meta, cb) {
    var record = JSON.stringify(new LogData(level, msg, meta)) + '\n';

    this.stream.write(record);
};

ConsoleLogtron.prototype.writeEntry = function writeEntry(entry, cb) {
    this._log(entry.level, entry.message, entry.meta, cb);
};

ConsoleLogtron.prototype.trace = function trace(msg, meta, cb) {
    this._log('trace', msg, meta, cb);
};

ConsoleLogtron.prototype.debug = function debug(msg, meta, cb) {
    this._log('debug', msg, meta, cb);
};

ConsoleLogtron.prototype.info = function info(msg, meta, cb) {
    this._log('info', msg, meta, cb);
};

ConsoleLogtron.prototype.access = function access(msg, meta, cb) {
    this._log('access', msg, meta, cb);
};

ConsoleLogtron.prototype.warn = function warn(msg, meta, cb) {
    this._log('warn', msg, meta, cb);
};

ConsoleLogtron.prototype.error = function error(msg, meta, cb) {
    this._log('error', msg, meta, cb);
};

ConsoleLogtron.prototype.fatal = function fatal(msg, meta, cb) {
    this._log('fatal', msg, meta, cb);
};

module.exports = ConsoleLogtron;
