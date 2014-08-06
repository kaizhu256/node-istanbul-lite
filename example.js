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
