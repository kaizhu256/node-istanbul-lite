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
    var local;



    // run shared js-env code
    (function () {
        // init local
        local = {};
        local.modeJs = (function () {
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
        // init utility2
        local.utility2 = local.modeJs === 'browser'
            ? window.utility2
            : require('utility2');
        // init istanbul_lite
        local.istanbul_lite = local.modeJs === 'browser'
            ? window.istanbul_lite
            : require('./index.js');
        // init jslint_lite
        local.jslint_lite = local.utility2.local.jslint_lite;
        // init tests
        local.testCase_ajax_404 = function (onError) {
            /*
                this function will test ajax's
                404 http statusCode handling behavior
            */
            // test '/test/undefined'
            local.utility2.ajax({
                url: '/test/undefined'
            }, function (error) {
                local.utility2.testTryCatch(function () {
                    // validate error occurred
                    local.utility2.assert(error instanceof Error, error);
                    // validate 404 http statusCode
                    local.utility2.assert(
                        error.statusCode === 404,
                        error.statusCode
                    );
                    onError();
                }, onError);
            });
        };
        local.testCase_instrumentSync_default = function (onError) {
            /*
                this function will test instrumentSync's
                default handling behavior
            */
            var data;
            data = local.istanbul_lite.instrumentSync('1', 'test.js');
            // validate data
            local.utility2.assert(data.indexOf(".s[\'1\']++;1;\n") >= 0, data);
            onError();
        };
    }());
    switch (local.modeJs) {



    // run browser js-env code
    case 'browser':
        // export local
        window.local = local;
        // init onErrorExit
        local.utility2.onErrorExit = function () {
            delete window.__coverage__['/istanbulInputTextarea.js'];
        };
        // init tests
        local.testCase_coverTextarea_default = function (onError) {
            /*
                this function will test coverTextarea's
                default handling behavior
            */
            var data, istanbulInputTextarea, value;
            istanbulInputTextarea =
                document.querySelector('.istanbulInputTextarea');
            if (!istanbulInputTextarea) {
                onError();
                return;
            }
            // save value
            value = istanbulInputTextarea.value;
            // test default handling behavior
            istanbulInputTextarea.value = 'console.log("hello");';
            data = local.istanbul_lite.coverTextarea();
            // validate data
            local.utility2.assert(data.indexOf('<tr>' +
                '<td class="line-count">1</td>' +
                '<td class="line-coverage">' +
                    '<span class="cline-any cline-yes">1</span>' +
                '</td>' +
                '<td class="text"><pre class="prettyprint lang-js">' +
                    'console.log("hello");</pre>' +
                '</td>' +
                '</tr>') >= 0, data);
            // test syntax error handling behavior
            istanbulInputTextarea.value = 'syntax error';
            data = local.istanbul_lite.coverTextarea();
            // validate data
            local.utility2.assert(data.indexOf('<pre>') === 0, data);
            // restore value
            istanbulInputTextarea.value = value;
            local.istanbul_lite.coverTextarea();
            onError();
        };
        // run test
        local.utility2.testRun(local);
        break;



    // run node js-env code
    case 'node':
        // require modules
        local.fs = require('fs');
        local.path = require('path');
        // init tests
        local.testCase_coverageReportCreate_default = function (onError) {
            /*
                this function will test coverageReportCreate's
                default handling behavior
            */
            var dir;
            local.utility2.testMock([
                // suppress console.log
                [console, { log: local.utility2.nop }]
            ], function (onError) {
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
                    local.utility2.assert(
                        errorCaught instanceof Error,
                        errorCaught
                    );
                    onError();
                }
            }, onError);
        };
        local.testCase_instrumentInPackage_default = function (onError) {
            /*
                this function will test instrumentInPackage's
                default handling behavior
            */
            var data;
            local.utility2.testMock([
                [global, { __coverage__: {} }]
            ], function (onError) {
                // test no cover handling behavior
                data = local.istanbul_lite.instrumentInPackage(
                    '1',
                    'test.js',
                    ''
                );
                // validate data
                local.utility2.assert(data === '1', data);
                // test cover handling behavior
                data = local.istanbul_lite.instrumentInPackage(
                    '1',
                    'test.js',
                    'istanbul-lite'
                );
                // validate data
                local.utility2.assert(
                    data.indexOf(".s[\'1\']++;1;\n") >= 0,
                    data
                );
                onError();
            }, onError);
        };
        local.testCase_testPage_default = function (onError) {
            /*
                this function will test the test-page's
                default handling behavior
            */
            var onParallel;
            onParallel = local.utility2.onParallel(onError);
            onParallel.counter += 1;
            // test test-page handling behavior
            onParallel.counter += 1;
            local.utility2.phantomTest({
                url: 'http://localhost:' +
                    local.utility2.envDict.npm_config_server_port +
                    '?modeTest=phantom'
            }, onParallel);
            // test standalone-script handling behavior
            onParallel.counter += 1;
            local.utility2.phantomTest({
                url: 'http://localhost:' +
                    local.utility2.envDict.npm_config_server_port +
                    '/test/script.html' +
                    '?modeTest=phantom'
            }, onParallel);
            onParallel();
        };
        // init assets
        local['/'] =
            local.utility2.stringFormat(local.fs
                .readFileSync(__dirname + '/README.md', 'utf8')
                .replace(
                    (/[\S\s]+?(<!DOCTYPE html>[\S\s]+?<\/html>)[\S\s]+/),
                    '$1'
                )
                // parse '\' line-continuation
                .replace((/\\\n/g), '')
                .replace((/\\n' \+(\s*?)'/g), '$1'), {
                    envDict: local.utility2.envDict
                });
        local['/assets/istanbul-lite.js'] =
            local.istanbul_lite.instrumentInPackage(
                local.istanbul_lite['/assets/istanbul-lite.js'],
                __dirname + '/index.js',
                'istanbul-lite'
            );
        local['/assets/utility2.css'] =
            local.utility2['/assets/utility2.css'];
        local['/assets/utility2.js'] =
            local.utility2['/assets/utility2.js'];
        local['/test/script.html'] =
            '<script src="/assets/utility2.js"></script>\n' +
            '<script src="/assets/istanbul-lite.js"></script>\n' +
            '<script>window.istanbul_lite.coverTextarea()</script>\n' +
            '<script src="/test/test.js"></script>\n';
        local['/test/test.js'] =
            local.istanbul_lite.instrumentInPackage(
                local.fs.readFileSync(__filename, 'utf8'),
                __filename,
                'istanbul-lite'
            );
        // init server-middlewares
        local.serverMiddlewareList = [
            function (request, response, nextMiddleware) {
                /*
                    this function is the main test-middleware
                */
                switch (request.urlParsed.pathnameNormalized) {
                // serve assets
                case '/':
                case '/assets/istanbul-lite.js':
                case '/assets/utility2.css':
                case '/assets/utility2.js':
                case '/test/script.html':
                case '/test/test.js':
                    response.end(local[request.urlParsed.pathnameNormalized]);
                    break;
                // default to next middleware
                default:
                    nextMiddleware();
                }
            }
        ];
        // run server-test
        local.utility2.testRunServer(local);
        // init dir
        local.fs.readdirSync(__dirname).forEach(function (file) {
            file = __dirname + '/' + file;
            switch (local.path.extname(file)) {
            case '.js':
            case '.json':
                // jslint the file
                local.jslint_lite.jslintAndPrint(
                    local.fs.readFileSync(file, 'utf8'),
                    file
                );
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
