# console-logtron

<!--
    [![build status][build-png]][build]
    [![Coverage Status][cover-png]][cover]
    [![Davis Dependency status][dep-png]][dep]
-->

<!-- [![NPM][npm-png]][npm] -->

A console logger with a logtron interface.

## Example

This logger is designed for scripts and one off programs.
It has a `logtron` compatible interface and writes to STDOUT.


```js
var ConsoleLogtron = require("console-logtron");

var logger = ConsoleLogtron('mylibrary');

logger.debug('some fixed string', { some: 'meta object' });
logger.info('some fixed string', { some: 'meta object' });
logger.warn('some fixed string', { some: 'meta object' });
logger.error('some fixed string', { some: 'meta object' });
```

It writes all logs to stdout using new line JSON

## Alternatives

**Warning:** This a logger for scripts! Not a default logger.

If you want to add a default logger to your `dependencies`
  then I strongly recommend you use [`null-logtron`][null-logtron]

Alternatively, if you want a logger meant for tests then I strongly
  recommend that you use [`debug-logtron`][debug-logtron]

## Motivation

You have a script that you want to run once off or on a cron.

You do not want to have to deal with a heavy weight logger, you
just want JSON on stdout and redirect it to a file.

This is where `console-logtron` comes in, it's like `console.log`
  but it will write new line JSON to stdout so you can use `jq`
  to process the log data.

## Docs

// TODO. State what the module does.

## Installation

`npm install console-logtron`

## Tests

`npm test`

## Contributors

 - Raynos

## MIT Licensed

  [build-png]: https://secure.travis-ci.org/Raynos/console-logtron.png
  [build]: https://travis-ci.org/Raynos/console-logtron
  [cover-png]: https://coveralls.io/repos/Raynos/console-logtron/badge.png
  [cover]: https://coveralls.io/r/Raynos/console-logtron
  [dep-png]: https://david-dm.org/Raynos/console-logtron.png
  [dep]: https://david-dm.org/Raynos/console-logtron
  [npm-png]: https://nodei.co/npm/console-logtron.png?stars&downloads
  [npm]: https://nodei.co/npm/console-logtron
  [null-logtron]: https://github.com/Raynos/null-logtron
  [debuglog]: https://github.com/sam-github/node-debuglog
  [debug-logtron]: https://github.com/Raynos/debug-logtron
