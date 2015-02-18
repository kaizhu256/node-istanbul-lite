/*jslint
  bitwise: true, browser: true,
  evil: true,
  indent: 2,
  maxerr: 8,
  node: true, nomen: true,
  regexp: true,
  stupid: true
*/
(function (local) {
  'use strict';
  switch (local.modeJs) {
  // init browser js-env
  case 'browser':
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
    local.utility2 = require('utility2');
    // watch the following files, and if they are modified, then re-cache and re-parse them
    [{
      cache: '/assets/istanbul-lite.js',
      coverage: 'istanbul-lite',
      file: __dirname + '/index.js'
    }, {
      cache: '/test/istanbul-lite.js',
      coverage: 'istanbul-lite',
      file: __dirname + '/test.js'
    }].forEach(function (options) {
      // cache and parse the file
      local.utility2.fileCacheAndParse(options);
    });
    local._dummy_test = function (onError) {
      /*
        this function is a dummy test
      */
      onError();
    };
    // add local test-case's
    local.utility2.testCaseAdd(local);
    // init server test
    local.utility2.testRunServer(process.exit, [
      local.utility2.testMiddleware,
      function (request, response, next) {
        // nop hack to pass jslint
        local.utility2.nop(request);
        local.utility2.nop(response);
        // test next middleware handling behavior
        next();
      }, function (request, response, next) {
        /*
          this function is the main test middleware
        */
        switch (request.urlPathNormalized) {
        // serve main page
        case '/':
          response.end('<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
              '<meta charset="UTF-8">\n' +
              '<title>istanbul-lite demo</title>\n' +
              '<style>\n' +
              '* {\n' +
                'box-sizing: border-box;\n' +
              '}\n' +
              'body {\n' +
                'font-family: Helvetical Neue, Helvetica, Arial, sans-serif;\n' +
                'margin: 10px;\n' +
              '}\n' +
              'body > div {\n' +
                'margin-top: 10px;\n' +
              '}\n' +
              'textarea {\n' +
                'font-family: monospace;\n' +
                'height: 8em;\n' +
                'width: 100%;\n' +
              '}\n' +
              '</style>\n' +
            '</head>\n' +
            '<body>\n' +
              '<div>edit / paste script below to eval and cover</div>\n' +
              '<div><textarea class="istanbulLiteEvalInputTextarea">if (true) {\n' +
              '  console.log("hello");\n' +
              '} else {\n' +
              '  console.log("bye");\n' +
              '}</textarea></div>\n' +
              '<div class="istanbulLiteCoverageReportDiv"></div>\n' +
              '<script src="/assets/utility2.js"></script>\n' +
              '<script src="/assets/istanbul-lite.js"></script>\n' +
              '<script src="/test/istanbul-lite.js"></script>\n' +
            '</body>\n' +
            '</html>');
          break;
        case '/assets/istanbul-lite.js':
        case '/test/istanbul-lite.js':
          response.end(local.utility2.fileCacheDict[request.urlPathNormalized].data);
          break;
        // fallback to 404-not-found-error
        default:
          next();
        }
      // exit after test-run ends
      }
    ]);
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
      if (process.env.npm_config_mode_auto_restart && local.fs.statSync(file).isFile()) {
        local.fs.watchFile(file, {
          interval: 1000,
          persistent: false
        }, function (stat2, stat1) {
          if (stat2.mtime > stat1.mtime) {
            process.exit();
          }
        });
      }
    });
    // init repl debugger
    local.utility2.replStart({ local: local });
    break;
  }
}((function () {
  'use strict';
  var local;
  // init shared js-env
  (function () {
    // init local
    local = {};
    local._testPrefix = 'istanbul-lite';
    local.modeJs = (function () {
      try {
        return module.exports && typeof process.versions.node === 'string' &&
          typeof require('child_process').spawn === 'function' && 'node';
      } catch (errorCaughtNode) {
        return typeof navigator.userAgent === 'string' &&
          typeof document.querySelector('body') === 'object' && 'browser';
      }
    }());
    // init global
    local.global = local.modeJs === 'browser' ? window : global;
    // export local
    local.global.local = local;
  }());
  return local;
}())));
