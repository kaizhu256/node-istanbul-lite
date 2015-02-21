/*jslint
  bitwise: true, browser: true,
  evil: true,
  indent: 2,
  maxerr: 8,
  node: true, nomen: true,
  regexp: true,
  stupid: true
*/
(function () {
  /*
    this function will test this module
  */
  'use strict';
  var local;



  // init shared js-env
  (function () {
    // init local
    local = {};
    local.modeJs = (function () {
      try {
        return module.exports && typeof process.versions.node === 'string' &&
          typeof require('child_process').spawn === 'function' && 'node';
      } catch (errorCaughtNode) {
        return typeof navigator.userAgent === 'string' &&
          typeof document.querySelector('body') === 'object' && 'browser';
      }
    }());
    local.global = local.modeJs === 'browser' ? window : global;
    local.utility2 = local.modeJs === 'browser' ? window.utility2 : require('utility2');
  }());
  switch (local.modeJs) {



  // init browser js-env
  case 'browser':
    window.local = local;
    if (location.pathname === '/test/test.html') {
      // run test
      local.utility2.testRun(local);
      return;
    }
    local.evalAndCover = function () {
      try {
        local.global.__coverage__ = {};
        eval(local.global.istanbul_lite.instrumentSync(
          local.istanbulLiteEvalInputTextarea.value,
          '/input.js'
        ));
        local.global.istanbul_lite.coverageReportWriteSync({
          coverage: local.global.__coverage__
        });
      } catch (errorCaught) {
        document.querySelector('.istanbulLiteCoverageReportDiv').innerHTML = '<pre>' +
          errorCaught.stack.replace((/</g), '&lt') +
          '</pre>';
      }
    };
    local.istanbulLiteEvalInputTextarea =
      document.querySelector('.istanbulLiteEvalInputTextarea');
    local.istanbulLiteEvalInputTextarea.addEventListener('keyup', local.evalAndCover);
    local.evalAndCover();
    break;



  // init node js-env
  case 'node':
    // require modules
    local.fs = require('fs');
    local.istanbul_lite = require('./index.js');
    local.path = require('path');

    local._dummy_test = function (onError) {
      /*
        this function is a dummy test
      */
      onError();
    };
    // init server-assets
    [{
      cache: '/assets/istanbul-lite.js',
      coverage: 'istanbul-lite',
      file: __dirname + '/index.js'
    }, {
      cache: '/test/test.js',
      coverage: 'istanbul-lite',
      file: __filename
    }].forEach(function (options) {
      console.log('cache and parse ' + options.file);
      // cache and parse the file
      local.utility2.fileCacheAndParse(options);
    });
    // init server-middlewares
    local.serverMiddlewareList = [
      function (request, response, onNext) {
        /*
          this user-defined middleware will override the builtin test-middleware
        */
        switch (request.urlPathNormalized) {
        // serve main-page
        case '/':
/* jslint-ignore-begin */
response.end('<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta charset="UTF-8">\n\
  <title>istanbul-lite demo</title>\n\
  <style>\n\
  * {\n\
    box-sizing: border-box;\n\
  }\n\
  body {\n\
    font-family: Helvetical Neue, Helvetica, Arial, sans-serif;\n\
    margin: 10px;\n\
  }\n\
  body > div {\n\
    margin-top: 10px;\n\
  }\n\
  textarea {\n\
    font-family: monospace;\n\
    height: 8em;\n\
    width: 100%;\n\
  }\n\
  </style>\n\
</head>\n\
<body>\n\
  <div>edit / paste script below to eval and cover</div>\n\
  <div><textarea class="istanbulLiteEvalInputTextarea">if (true) {\n\
    console.log("hello");\n\
  } else {\n\
    console.log("bye");\n\
  }</textarea></div>\n\
  <div class="istanbulLiteCoverageReportDiv"></div>\n\
  <script src="/assets/utility2.js"></script>\n\
  <script src="/assets/istanbul-lite.js"></script>\n\
  <script src="/test/test.js"></script>\n\
</body>\n\
</html>');
/* jslint-ignore-end */
          break;
        case '/assets/istanbul-lite.js':
        case '/test/test.js':
          response.end(local.utility2.fileCacheDict[request.urlPathNormalized].data);
          break;
        // fallback to next middleware
        default:
          onNext();
        }
      },
      // builtin test-middleware
      local.utility2.testMiddleware
    ];
    // run server-test
    local.utility2.testRunServer(local);
    local.fs.readdirSync(__dirname).forEach(function (file) {
      file = __dirname + '/' + file;
      switch (local.path.extname(file)) {
      case '.js':
      case '.json':
        // jslint the file
        local.utility2.jslint_lite.jslintAndPrint(local.fs.readFileSync(file, 'utf8'), file);
        break;
      }
      // if the file is modified, then restart the process
      local.utility2.onFileModifiedRestart(file);
    });
    // init repl debugger
    local.utility2.replStart({ local: local });
    break;
  }
}());
