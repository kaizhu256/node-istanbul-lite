/*jslint
  bitwise: true, browser: true,
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



  // run shared js-env code
  (function () {
    // init local
    local = {};
    local.modeJs = (function () {
      try {
        return module.exports && typeof process.versions.node === 'string' &&
          typeof require('http').createServer === 'function' && 'node';
      } catch (errorCaughtNode) {
        return typeof navigator.userAgent === 'string' &&
          typeof document.querySelector('body') === 'object' && 'browser';
      }
    }());
    local.istanbul_lite = local.modeJs === 'browser'
      ? window.istanbul_lite
      : require('./index.js');
    local.utility2 = local.modeJs === 'browser'
      ? window.utility2
      : require('utility2');
  }());
  switch (local.modeJs) {



  // run browser js-env code
  case 'browser':
    window.local = local;
    local.istanbulLiteInputTextareaDiv = document.querySelector('.istanbulLiteInputTextareaDiv');
    local._coverAndEval_default_test = function (onError) {
      /*
        this function test coverAndEval's default handling behavior
      */
      var data, value;
      // save value
      value = local.istanbulLiteInputTextareaDiv.value;
      // test default handling behavior
      local.istanbulLiteInputTextareaDiv.value = 'console.log("hello world");';
      data = local.istanbul_lite.coverAndEval();
      // validate data
      local.utility2.assert(data.indexOf('<tr>' +
        '<td class="line-count">1</td>' +
        '<td class="line-coverage"><span class="cline-any cline-yes">1</span></td>' +
        '<td class="text"><pre class="prettyprint lang-js">' +
          'console.log("hello world");</pre>' +
        '</td>' +
        '</tr>') >= 0, data);
      // test syntax-error handling behavior
      local.istanbulLiteInputTextareaDiv.value = 'syntax-error!';
      data = local.istanbul_lite.coverAndEval();
      // validate data
      local.utility2.assert(data.indexOf('<pre>') === 0, data);
      // restore value
      local.istanbulLiteInputTextareaDiv.value = value;
      local.istanbul_lite.coverAndEval();
      onError();
    };
    local.utility2.testRun(local);
    break;



  // run node js-env code
  case 'node':
    // require modules
    local.fs = require('fs');
    local.path = require('path');
    local._coverageReportCreate_default_test = function (onError) {
      /*
        this function test coverageReportCreate's default handling behavior
      */
      var dir;
      local.utility2.testMock([
        // suppress console.log
        [console, { log: local.utility2.nop }]
      ], onError, function (onError) {
        dir = process.env.npm_config_dir_tmp +
          '/coverage.tmp/' + Math.random() + '/' + Math.random();
        local.istanbul_lite.coverageReportCreate({
          coverage: {},
          // test mkdirpSync handling behavior
          dir: dir
        });
        try {
          local.istanbul_lite.coverageReportCreate({
            coverage: {},
            // test mkdirpSync error handling behavior
            dir: dir + '/index.html'
          });
        } catch (errorCaught) {
          // validate error occurred
          local.utility2.assert(errorCaught instanceof Error, errorCaught);
          onError();
        }
      });
    };
    local._testPage_default_test = function (onError) {
      /*
        this function will test the test-page's default handling behavior
      */
      local.utility2.phantomTest({
        url: 'http://localhost:' + local.utility2.envDict.npm_config_server_port +
          '?modeTest=phantom&' +
          '_testSecret={{_testSecret}}&' +
          'timeoutDefault=' + local.utility2.timeoutDefault
      }, onError);
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
    }, {
      cache: '/',
      data: local.utility2.textFormat(String() +
        '<!DOCTYPE html>\n' +
        '<html>\n' +
        '<head>\n' +
          '<meta charset="UTF-8">\n' +
          '<link rel="stylesheet" href="/assets/utility2.css">\n' +
          '<style>\n' +
            '* {\n' +
              'box-sizing: border-box;\n' +
            '}\n' +
            'body {\n' +
              'background-color: #fff;\n' +
              'font-family: Helvetical Neue, Helvetica, Arial, sans-serif;\n' +
            '}\n' +
            'body > div {\n' +
              'margin-top: 20px;\n' +
            '}\n' +
            '.testReportDiv {\n' +
              'display: none;\n' +
            '}\n' +
            'textarea {\n' +
              'font-family: monospace;\n' +
              'height: 8em;\n' +
              'width: 100%;\n' +
            '}\n' +
          '</style>\n' +
          '<title>{{envDict.npm_package_name}} [{{envDict.npm_package_version}}]</title>\n' +
        '</head>\n' +
        '<body>\n' +
          '<div class="ajaxProgressDiv" style="display: none;">\n' +
            '<div class="ajaxProgressBarDiv ajaxProgressBarDivLoading">loading</div>\n' +
          '</div>\n' +
          '<h1>{{envDict.npm_package_name}} [{{envDict.npm_package_version}}]</h1>\n' +
          '<h3>{{envDict.npm_package_description}}</h3>\n' +
          '<div>\n' +
            '<div>edit or paste script below to cover and eval</div>\n' +
            '<div><textarea class="istanbulLiteInputTextareaDiv">if (true) {\n' +
              'console.log("hello");\n' +
            '} else {\n' +
              'console.log("bye");\n' +
            '}</textarea></div>\n' +
          '</div>\n' +
          '<div class="istanbulLiteCoverageDiv"></div>\n' +
          '<div class="testReportDiv"></div>\n' +
          '<script src="/assets/istanbul-lite.js"></script>\n' +
          '<script src="/assets/utility2.js"></script>\n' +
          '<script>window.utility2.envDict = {\n' +
            'npm_package_description: "{{envDict.npm_package_description}}",\n' +
            'npm_package_name: "{{envDict.npm_package_name}}",\n' +
            'npm_package_version: "{{envDict.npm_package_version}}"\n' +
          '};\n' +
          'document.querySelector(\n' +
            '".istanbulLiteInputTextareaDiv"\n' +
          ').addEventListener("keyup", window.istanbul_lite.coverAndEval);\n' +
          'window.istanbul_lite.coverAndEval();</script>\n' +
          '<script src="/test/test.js"></script>\n' +
        '</body>\n' +
        '</html>\n' +
        String(), { envDict: local.utility2.envDict })
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
        case '/':
        case '/assets/istanbul-lite.js':
        case '/test/test.js':
          response.end(local.utility2.fileCacheDict[request.urlPathNormalized].data);
          break;
        // default to next middleware
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
