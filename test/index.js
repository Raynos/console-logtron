'use strict';

var test = require('tape');

var consoleLogtron = require('../index.js');

test('consoleLogtron is a function', function t(assert) {
    assert.equal(typeof consoleLogtron, 'function');
    assert.end();
});
