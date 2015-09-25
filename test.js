/*jslint
    browser: true,
    maxerr: 8,
    maxlen: 96,
    node: true,
    nomen: true,
    stupid: true
*/
(function (local) {
    'use strict';



    // run shared js-env code
    (function () {
        // init tests
        local.testCase_coverageReportCreate_default = function (options, onError) {
            /*
             * this function will test coverageReportCreate's default handling-behavior
             */
            // jslint-hack
            local.utility2.nop(options);
            local.utility2.testMock([
                // suppress console.log
                [console, { log: local.utility2.nop }]
            ], function (onError) {
                /*jslint evil: true*/
                // test path handling-behavior
                [
                    // test relative-path handing-behavior
                    ['.', '..', '../', '../../', './', '././', '/'],
                    // test dir-path handling-behavior
                    ['/aa.js', '/aa/bb.js']
                ].forEach(function (pathList) {
                    pathList.forEach(function (path) {
                        // cover path
                        eval(local.istanbul_lite.instrumentSync(
                            // test skip handling-behavior
                            'null',
                            path
                        ));
                    });
                    // create report with covered path
                    local.istanbul_lite.coverageReportCreate();
                    // reset coverage
                    Object.keys(local.global.__coverage__).forEach(function (key) {
                        if (!(/index|istanbul|test|utility2/).test(key)) {
                            delete local.global.__coverage__[key];
                        }
                    });
                });
                // test file-content handling-behavior
                [
                    // test no-content handling-behavior
                    '',
                    // test uncovereed-code handling-behavior
                    'null && null',
                    // test skip handling-behavior
                    '/* istanbul ignore next */\nnull && null'
                ].forEach(function (content) {
                    // cover path
                    eval(local.istanbul_lite.instrumentSync(content, 'aa.js'));
                    // create report with covered content
                    local.istanbul_lite.coverageReportCreate();
                    // reset coverage
                    Object.keys(local.global.__coverage__).forEach(function (key) {
                        if (!(/index|istanbul|test|utility2/).test(key)) {
                            delete local.global.__coverage__[key];
                        }
                    });
                });
                onError();
            }, onError);
        };

        local.testCase_instrumentSync_default = function (options, onError) {
            /*
             * this function will test instrumentSync's default handling-behavior
             */
            var data;
            // jslint-hack
            local.utility2.nop(options);
            data = local.istanbul_lite.instrumentSync('1', 'test.js');
            // validate data
            local.utility2.assert(data.indexOf(".s[\'1\']++;1;\n") >= 0, data);
            onError();
        };
    }());
    switch (local.modeJs) {



    // run browser js-env code
    case 'browser':
        // init tests
        local.testCase_coverTextarea_default = function (options, onError) {
            /*
             * this function will test coverTextarea's default handling-behavior
             */
            var data, istanbulInputTextarea, modeHtml, value;
            // jslint-hack
            local.utility2.nop(options);
            istanbulInputTextarea = document.querySelector('.istanbulInputTextarea') || {};
            // save value
            modeHtml = value = istanbulInputTextarea && istanbulInputTextarea.value;
            // test default handling-behavior
            istanbulInputTextarea.value = 'console.log("hello");';
            data = local.istanbul_lite.coverTextarea();
            // validate data
            if (modeHtml) {
                local.utility2.assert(data.indexOf('<tr>\n' +
                    '<td class="line-count">1\n</td>\n' +
                    '<td class="line-coverage">' +
                        '<span class="cline-any cline-yes">1</span>\n' +
                    '</td>\n' +
                    '<td class="text"><pre class="prettyprint lang-js">' +
                        'console.log("hello");</pre>' +
                    '</td>\n' +
                    '</tr>\n') >= 0, data);
            }
            // test syntax error handling-behavior
            istanbulInputTextarea.value = 'syntax error';
            data = local.istanbul_lite.coverTextarea();
            // validate data
            if (modeHtml) {
                local.utility2.assert(data.indexOf('<pre>') === 0, data);
            }
            // restore value
            istanbulInputTextarea.value = value;
            local.istanbul_lite.coverTextarea();
            onError();
        };
        break;


    // run node js-env code
    case 'node':
        // init tests
        local.testCase_coverageReportCreate_mkdirp = function (options, onError) {
            /*
             * this function will test coverageReportCreate's mkdirp handling-behavior
             */
            options = {};
            options.dir = process.env.npm_config_dir_tmp +
                '/testCase_coverageReportCreate_mkdirp';
            // cleanup dir
            local.utility2.fsRmrSync(options.dir);
            // test mkdirp handling-behavior
            options.dir += '/aa/bb/cc';
            options.file = options.dir + '/index.html';
            // validate no file exists
            local.utility2.assert(!local.fs.existsSync(options.file), options.file);
            local.utility2.testMock([
                // suppress console.log
                [console, { log: local.utility2.nop }],
                // test coverageDirDefault handling-behavior
                [local.istanbul_lite, { coverageDirDefault: options.dir }],
                // test coverageDirDefault handling-behavior
                [process.env, { npm_config_dir_coverage: '' }]
            ], function (onError) {
                // test no __coverage__ handling-behavior
                options.data = local.istanbul_lite
                    .coverageReportCreate({ modeNoCoverage: true });
                // validate data
                local.utility2.assert(!options.data, options.data);
                // validate no file exists
                local.utility2.assert(!local.fs.existsSync(options.file), options.file);
                // test __coverage__ handling-behavior
                options.data = local.istanbul_lite.coverageReportCreate({ coverage: {} });
                // validate data
                local.utility2.assert(options.data, options.data);
                // validate file exists
                local.utility2.assert(local.fs.existsSync(options.file), options.file);
                try {
                    local.istanbul_lite.coverageReportCreate({
                        coverage: {},
                        // test mkdirpSync error handling-behavior
                        dir: options.file
                    });
                } catch (errorCaught) {
                    // validate error occurred
                    local.utility2.assert(errorCaught, errorCaught);
                    onError();
                }
            }, onError);
        };

        local.testCase_instrumentInPackage_default = function (options, onError) {
            /*
             * this function will test instrumentInPackage's default handling-behavior
             */
            var data;
            // jslint-hack
            local.utility2.nop(options);
            local.utility2.testMock([
                [global, { __coverage__: {} }]
            ], function (onError) {
                // test no cover handling-behavior
                data = local.istanbul_lite.instrumentInPackage('1', 'test.js', '');
                // validate data
                local.utility2.assert(data === '1', data);
                // test cover handling-behavior
                data = local.istanbul_lite.instrumentInPackage('1', 'test.js', 'istanbul-lite');
                // validate data
                local.utility2.assert(data.indexOf(".s[\'1\']++;1;\n") >= 0, data);
                onError();
            }, onError);
        };

        local.testCase_testPage_default = function (options, onError) {
            /*
             * this function will test the test-page's default handling-behavior
             */
            var onParallel;
            // jslint-hack
            local.utility2.nop(options);
            onParallel = local.utility2.onParallel(onError);
            onParallel.counter += 1;
            // test test-page handling-behavior
            onParallel.counter += 1;
            local.utility2.phantomTest({
                url: 'http://localhost:' +
                    local.utility2.envDict.npm_config_server_port +
                    '?modeTest=phantom&timeExit={{timeExit}}'
            }, onParallel);
            // test script-only handling-behavior
            onParallel.counter += 1;
            local.utility2.phantomTest({
                url: 'http://localhost:' +
                    local.utility2.envDict.npm_config_server_port +
                    '/test/script-only.html' +
                    '?modeTest=phantom&timeExit={{timeExit}}'
            }, onParallel);
            onParallel();
        };
        break;
    }
    switch (local.modeJs) {



    // run browser js-env code
    case 'browser':
        // run test
        local.utility2.testRun(local);
        break;



    // run node js-env code
    case 'node':
        // require modules
        local.fs = require('fs');
        local.path = require('path');
        // init assets
        local.utility2.cacheDict.assets['/'] =
            local.utility2.cacheDict.assets['/test/test.html'] =
            local.utility2.stringFormat(local.fs
                .readFileSync(__dirname + '/README.md', 'utf8')
                // extract html
                .replace((/[\S\s]+?(<!DOCTYPE html>[\S\s]+?<\/html>)[\S\s]+/), '$1')
                // parse '\' line-continuation
                .replace((/\\\n/g), '')
                // remove "\\n' +" and "'"
                .replace((/\\n' \+(\s*?)'/g), '$1'), { envDict: local.utility2.envDict }, '');
        local.utility2.cacheDict.assets['/assets/istanbul-lite.js'] =
            local.utility2.istanbul_lite.instrumentInPackage(
                local.istanbul_lite['/assets/istanbul-lite.js'],
                __dirname + '/index.js',
                'istanbul-lite'
            );
        local.utility2.cacheDict.assets['/test/script-only.html'] =
            '<h1>script-only test</h1>\n' +
            '<script src="/assets/utility2.js"></script>\n' +
            '<script src="/assets/istanbul-lite.js"></script>\n' +
            '<script>window.istanbul_lite.coverTextarea()</script>\n' +
            '<script src="/test/test.js"></script>\n';
        local.utility2.cacheDict.assets['/test/test.js'] =
            local.utility2.istanbul_lite.instrumentInPackage(
                local.fs.readFileSync(__filename, 'utf8'),
                __filename,
                'istanbul-lite'
            );
        // init middleware
        local.middleware = local.utility2.middlewareGroupCreate([
            local.utility2.middlewareInit,
            local.utility2.middlewareAssetsCached
        ]);
        // init error-middleware
        local.middlewareError = local.utility2.middlewareError;
        // run server-test
        local.utility2.testRunServer(local);
        // jslint dir
        [
            __dirname
        ].forEach(function (dir) {
            local.fs.readdirSync(dir).forEach(function (file) {
                file = dir + '/' + file;
                // if the file is modified, then restart the process
                local.utility2.onFileModifiedRestart(file);
                switch (local.path.extname(file)) {
                case '.js':
                case '.json':
                    // jslint file
                    local.utility2.jslint_lite
                        .jslintAndPrint(local.fs.readFileSync(file, 'utf8'), file);
                    break;
                }
            });
        });
        // init repl debugger
        local.utility2.replStart();
        break;
    }
}((function () {
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
        // init global
        local.global = local.modeJs === 'browser'
            ? window
            : global;
        // export local
        local.global.local = local;
        // init utility2
        local.utility2 = local.modeJs === 'browser'
            ? window.utility2
            : require('utility2');
        // init onReady
        local.utility2.onReadyInit();
        // init istanbul_lite
        local.istanbul_lite = local.modeJs === 'browser'
            ? window.istanbul_lite
            : require('./index.js');
        // import istanbul_lite.local
        Object.keys(local.istanbul_lite.local).forEach(function (key) {
            local[key] = local[key] || local.istanbul_lite.local[key];
        });
    }());
    return local;
}())));
