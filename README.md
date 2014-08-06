istanbul-lite
=============
lightweight version of istanbul coverage utility with no external dependencies

[![heroku.com test server](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/beta/test-report.screenshot.heroku.png)](https://hrku01-istanbul-lite-beta.herokuapp.com/test/test.html)
<br><br><br><br>



## build status [![travis.ci-org build status](https://api.travis-ci.org/kaizhu256/node-istanbul-lite.svg)](https://travis-ci.org/kaizhu256/node-istanbul-lite)

![build commit status](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/build.badge.svg)

[![saucelabs.com selenium test status](https://saucelabs.com/browser-matrix/sclb01-istanbul-lite.svg)](https://saucelabs.com/u/sclb01-istanbul-lite)

 branch | test server | test report | coverage report | build artifact
:------:|:-----------:|:-----------:|:---------------:|:--------------:
[master](https://github.com/kaizhu256/node-istanbul-lite/tree/master) | [![heroku.com test server](https://kaizhu256.github.io/public/heroku-logo-light-88x31.png)](https://hrku01-istanbul-lite-master.herokuapp.com/test/test.html) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/master/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/master/test-report.html) | [![istanbul coverage report](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/master/coverage-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/master/coverage-report.html/node-istanbul-lite/index.html) | [![build artifacts](https://kaizhu256.github.io/public/glyphicons_free/glyphicons/png/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build.travis-ci.org/master)
[beta](https://github.com/kaizhu256/node-istanbul-lite/tree/beta) | [![heroku.com test server](https://kaizhu256.github.io/public/heroku-logo-light-88x31.png)](https://hrku01-istanbul-lite-beta.herokuapp.com/test/test.html) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/beta/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/beta/test-report.html) | [![istanbul coverage report](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/beta/coverage-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/beta/coverage-report.html/node-istanbul-lite/index.html) | [![build artifacts](https://kaizhu256.github.io/public/glyphicons_free/glyphicons/png/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build.travis-ci.org/beta)
[alpha](https://github.com/kaizhu256/node-istanbul-lite/tree/alpha) | [![heroku.com test server](https://kaizhu256.github.io/public/heroku-logo-light-88x31.png)](https://hrku01-istanbul-lite-alpha.herokuapp.com/test/test.html) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/alpha/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/alpha/test-report.html) | [![istanbul coverage report](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/alpha/coverage-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/alpha/coverage-report.html/node-istanbul-lite/index.html) | [![build artifacts](https://kaizhu256.github.io/public/glyphicons_free/glyphicons/png/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build.travis-ci.org/alpha)



## quickstart
```
npm install istanbul-lite
cd node_modules/istanbul-lite
## start istanbul-lite server on port 8080
npm start --server-port=8080
```



## library usage example
```
// example.js
/*jslint
  bitwise: true,
  indent:2,
  node: true
*/
(function () {
  'use strict';
  var file, istanbul_lite, script;
  // require istanbul-lite module
  try {
    istanbul_lite = require('istanbul-lite');
  } catch (error) {
    istanbul_lite = require('./main.js');
  }
  // init file and script var
  file = 'hello.js';
  script = 'console.log("hello world");';
  console.log('instrumenting file ' + file + ' with content ' + JSON.stringify(script));
  /*
    instrument the script with the given file name and print to stdout.
    expected output:
    var __cov_1 = (Function('return this'))();
    if (!__cov_1.__coverage__) { __cov_1.__coverage__ = {}; }
    __cov_1 = __cov_1.__coverage__;
    if (!(__cov_1['hello.js'])) {
       __cov_1['hello.js'] = {"path":"hello.js","s":{"1":0},"b":{},"f":{},"fnMap":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":27}}},"branchMap":{}};
    }
    __cov_1 = __cov_1['hello.js'];
    __cov_1.s['1']++;console.log('hello world')
  */
  console.log(istanbul_lite.instrumentSync(script, file));
}());
```



## description of files
- .travis.yml
  - travis-ci config file
- README.md
  - readme file
- example.js
  - example nodejs script demonstrating how to use this app
- main.data
  - data file containing embedded resources specific to this app
- main.js
  - this app's main program / library
- package.json
  - npm config file
- utility2.data
  - data file containing embedded resources used by travis-ci
- utility2.js
  - nodejs build script used by travis-ci
- utility2.sh
  - shell build script used by travis-ci



## todo



## changelog
#### 2014.8.7
- add browser code and tests
- change api from exports.instrument to exports.instrumentSync,
  which closely matches istanbul's Instrumenter.instrumentSync method

#### 2014.7.27
- initial commit
