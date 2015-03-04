/*jslint
browser: true,
maxerr: 4,
maxlen: 80,
node: true,
nomen: true,
stupid: true
*/
(function () {
    /*
    this function will test this module
    */
    'use strict';
    var app;



    // run shared js-env code
    (function () {
        // init app
        app = {};
        app.modeJs = (function () {
            try {
                return module.exports &&
                    typeof process.versions.node === 'string' &&
                    typeof require('http').createServer === 'function' &&
                    'node';
            } catch (errorCaughtNode) {
                return typeof navigator.userAgent === 'string' &&
                    typeof document.querySelector('body') === 'object' &&
                    'browser';
            }
        }());
        app.istanbul_lite = app.modeJs === 'browser'
            ? window.istanbul_lite
            : require('./index.js');
        app.utility2 = app.modeJs === 'browser'
            ? window.utility2
            : require('utility2');
        // init tests
        app._ajax_404_test = function (onError) {
            /*
            this function will test ajax's 404 http statusCode handling behavior
            */
            // test '/test/undefined'
            app.utility2.ajax({
                url: '/test/undefined'
            }, function (error) {
                app.utility2.testTryCatch(function () {
                    // validate error occurred
                    app.utility2.assert(error instanceof Error, error);
                    // validate 404 http statusCode
                    app.utility2.assert(
                        error.statusCode === 404,
                        error.statusCode
                    );
                    onError();
                }, onError);
            });
        };
        app._instrumentSync_default_test = function (onError) {
            /*
            this function will test instrumentSync's default handling behavior
            */
            var data;
            data = app.istanbul_lite.instrumentSync('1', 'test.js');
            // validate data
            app.utility2.assert(data.indexOf(".s[\'1\']++;1;\n") >= 0, data);
            onError();
        };
    }());
    switch (app.modeJs) {



    // run browser js-env code
    case 'browser':
        // export app
        window.app = app;
        // init tests
        app._coverAndEval_default_test = function (onError) {
            var data, istanbulInputTextarea, value;
            istanbulInputTextarea =
                document.querySelector('.istanbulInputTextarea');
            /*
            this function will test coverAndEval's default handling behavior
            */
            // save value
            value = istanbulInputTextarea.value;
            // test default handling behavior
            istanbulInputTextarea.value = 'console.log("hello world");';
            data = app.istanbul_lite.coverAndEval();
            // validate data
            app.utility2.assert(data.indexOf('<tr>' +
                '<td class="line-count">1</td>' +
                '<td class="line-coverage">' +
                    '<span class="cline-any cline-yes">1</span>' +
                '</td>' +
                '<td class="text"><pre class="prettyprint lang-js">' +
                    'console.log("hello world");</pre>' +
                '</td>' +
                '</tr>') >= 0, data);
            // test syntax error handling behavior
            istanbulInputTextarea.value = 'syntax error';
            data = app.istanbul_lite.coverAndEval();
            // validate data
            app.utility2.assert(data.indexOf('<pre>') === 0, data);
            // restore value
            istanbulInputTextarea.value = value;
            app.istanbul_lite.coverAndEval();
            onError();
        };
        // run test
        app.utility2.testRun(app);
        break;



    // run node js-env code
    case 'node':
        // require modules
        app.fs = require('fs');
        app.path = require('path');
        // init tests
        app._coverageReportCreate_default_test = function (onError) {
            /*
            this function will test coverageReportCreate's
            default handling behavior
            */
            var dir;
            app.utility2.testMock([
                // suppress console.log
                [console, { log: app.utility2.nop }]
            ], onError, function (onError) {
                dir = process.env.npm_config_dir_tmp +
                    '/coverage.tmp/' + Math.random() + '/' + Math.random();
                app.istanbul_lite.coverageReportCreate({
                    coverage: {},
                    // test mkdirpSync handling behavior
                    dir: dir
                });
                try {
                    app.istanbul_lite.coverageReportCreate({
                        coverage: {},
                        // test mkdirpSync error handling behavior
                        dir: dir + '/index.html'
                    });
                } catch (errorCaught) {
                    // validate error occurred
                    app.utility2.assert(
                        errorCaught instanceof Error,
                        errorCaught
                    );
                    onError();
                }
            });
        };
        app._testPage_default_test = function (onError) {
            /*
            this function will test the test-page's default handling behavior
            */
            app.utility2.phantomTest({
                url: 'http://localhost:' +
                    app.utility2.envDict.npm_config_server_port +
                    '?modeTest=phantom&' +
                    '_testSecret={{_testSecret}}&' +
                    'timeoutDefault=' + app.utility2.timeoutDefault
            }, onError);
        };
        // init assets
        app['/'] =
            app.utility2.textFormat(app.utility2.fs
                .readFileSync(__dirname + '/README.md', 'utf8')
                .replace(
                    (/[\S\s]+?(<!DOCTYPE html>[\S\s]+?<\/html>)[\S\s]+/),
                    '$1'
                )
                .replace((/\\n' \+(\s*?)'/g), '$1'), {
                    envDict: app.utility2.envDict
                });
        app['/assets/istanbul-lite.js'] =
            app.utility2.istanbulInstrumentInPackage(
                app.utility2.istanbul_lite['/assets/istanbul-lite.js'],
                __dirname + '/index.js',
                'istanbul-lite'
            );
        app['/assets/utility2.css'] =
            app.utility2['/assets/utility2.css'];
        app['/assets/utility2.js'] =
            app.utility2['/assets/utility2.js'];
        app['/test/test.js'] =
            app.utility2.istanbulInstrumentInPackage(
                app.utility2.fs.readFileSync(__filename, 'utf8'),
                __filename,
                'istanbul-lite'
            );
        // init server-middlewares
        app.serverMiddlewareList = [
            function (request, response, onNext) {
                /*
                this function is the main test-middleware
                */
                switch (request.urlPathNormalized) {
                // serve assets
                case '/':
                case '/assets/istanbul-lite.js':
                case '/assets/utility2.css':
                case '/assets/utility2.js':
                case '/test/test.js':
                    response.end(app[request.urlPathNormalized]);
                    break;
                // default to next middleware
                default:
                    onNext();
                }
            }
        ];
        // run server-test
        app.utility2.testRunServer(app);
        // init dir
        app.fs.readdirSync(__dirname).forEach(function (file) {
            file = __dirname + '/' + file;
            switch (app.path.extname(file)) {
            case '.js':
            case '.json':
                // jslint the file
                app.utility2.jslint_lite.jslintAndPrint(
                    app.fs.readFileSync(file, 'utf8'),
                    file
                );
                break;
            }
            // if the file is modified, then restart the process
            app.utility2.onFileModifiedRestart(file);
        });
        // init repl debugger
        app.utility2.replStart({ app: app });
        break;
    }
}());
