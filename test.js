/* istanbul instrument in package istanbul-lite */
/*jslint
    bitwise: true,
    browser: true,
    maxerr: 8,
    maxlen: 96,
    node: true,
    nomen: true,
    regexp: true,
    stupid: true
*/
(function () {
    'use strict';
    var local;



    // run shared js-env code - pre-init
    (function () {
        // init Error.stackTraceLimit
        Error.stackTraceLimit = Infinity;
        // init local
        local = {};
        // init modeJs
        local.modeJs = (function () {
            try {
                return typeof navigator.userAgent === 'string' &&
                    typeof document.querySelector('body') === 'object' &&
                    typeof XMLHttpRequest.prototype.open === 'function' &&
                    'browser';
            } catch (errorCaughtBrowser) {
                return module.exports &&
                    typeof process.versions.node === 'string' &&
                    typeof require('http').createServer === 'function' &&
                    'node';
            }
        }());
        switch (local.modeJs) {
        // re-init local from window.local
        case 'browser':
            local = window.local;
            local.utility2 = window.utility2;
            break;
        // re-init local from example.js
        case 'node':
            local = (module.utility2 || require('utility2')).requireExampleJsFromReadme({
                __dirname: __dirname,
                module: module,
                moduleExports: __dirname + '/index.js',
                moduleName: 'istanbul-lite'
            });
            local.istanbul = local['istanbul-lite'];
            break;
        }
    }());



    // run shared js-env code - function
    (function () {
        // init tests
        local.testCase_istanbulCoverageReportCreate_default = function (options, onError) {
        /*
         * this function will test istanbulCoverageReportCreate's default handling-behavior
         */
            local.utility2.testMock([
                // suppress console.log
                [console, { log: local.utility2.nop }]
            ], function (onError) {
                /*jslint evil: true*/
                // test no coverage handling-behavior
                local.istanbul.coverageReportCreate({});
                options = {};
                options.coverage = local.global.__coverage__mock = {};
                // cleanup old coverage
                if (local.modeJs === 'node') {
                    local.utility2.fsRmrSync('tmp/build/coverage.html/aa');
                }
                // test path handling-behavior
                ['/', local.utility2.__dirname].forEach(function (dir) {
                    ['aa.js', 'aa/bb.js'].forEach(function (path) {
                        // cover path
                        eval(local.istanbul.instrumentSync(
                            // test skip handling-behavior
                            'null',
                            dir + '/' + path,
                            '__coverage__mock'
                        ));
                    });
                });
                // create report with covered path
                local.istanbul.coverageReportCreate(options);
                // test file-content handling-behavior
                [
                    // test no content handling-behavior
                    '',
                    // test uncovereed-code handling-behavior
                    'null && null',
                    // test trailing-whitespace handling-behavior
                    'null ',
                    // test skip handling-behavior
                    '/* istanbul ignore next */\nnull && null'
                ].forEach(function (content) {
                    options = {};
                    options.coverage = local.global.__coverage__mock = {};
                    // cover path
                    eval(local.istanbul.instrumentSync(
                        content,
                        'aa.js',
                        '__coverage__mock'
                    ));
                    // create report with covered content
                    local.istanbul.coverageReportCreate(options);
                });
                onError();
            }, onError);
        };

        local.testCase_istanbulInstrumentSync_default = function (options, onError) {
        /*
         * this function will test istanbulInstrumentSync's default handling-behavior
         */
            options = {};
            options.data = local.istanbul.instrumentSync('1', 'test.js');
            // validate data
            local.utility2.assert(options.data.indexOf('.s[\'1\']++;1;\n') >= 0, options);
            onError();
        };
    }());
    switch (local.modeJs) {



    // run node js-env code - function
    case 'node':
        local.testCase_build_app = function (options, onError) {
        /*
         * this function will test build's app handling-behavior
         */
            var onParallel;
            onParallel = local.utility2.onParallel(onError);
            onParallel.counter += 1;
            options = {};
            options = [{
                file: '/assets.app.js',
                url: '/assets.app.js'
            }, {
                file: '/assets.app.min.js',
                url: '/assets.app.min.js'
            }, {
                file: '/assets.example.js',
                url: '/assets.example.js'
            }, {
                file: '/assets.istanbul-lite.js',
                url: '/assets.istanbul-lite.js'
            }, {
                file: '/assets.test.js',
                url: '/assets.test.js'
            }, {
                file: '/assets.utility2.rollup.js',
                url: '/assets.utility2.rollup.js'
            }, {
                file: '/index.html',
                url: '/index.html'
            }, {
                file: '/jsonp.utility2.stateInit',
                url: '/jsonp.utility2.stateInit?callback=window.utility2.stateInit'
            }];
            options.forEach(function (options) {
                onParallel.counter += 1;
                local.utility2.ajax(options, function (error, xhr) {
                    onParallel.counter += 1;
                    // validate no error occurred
                    onParallel(error);
                    switch (local.path.extname(options.file)) {
                    case '.js':
                    case '.json':
                        local.utility2.jslintAndPrintConditional(
                            xhr.responseText,
                            options.file
                        );
                        // validate no error occurred
                        local.utility2.tryCatchOnError(function () {
                            local.utility2.assert(
                                !local.utility2.jslint.errorText,
                                local.utility2.jslint.errorText
                            );
                        }, onError);
                        break;
                    }
                    local.utility2.fsWriteFileWithMkdirp(
                        local.utility2.envDict.npm_config_dir_build + '/app' + options.file,
                        xhr.response,
                        onParallel
                    );
                });
            });
            onParallel();
        };

        local.testCase_build_doc = function (options, onError) {
        /*
         * this function will test build's doc handling-behavior
         */
            var modeNext, onNext;
            modeNext = 0;
            onNext = function (error) {
                local.utility2.tryCatchOnError(function () {
                    // validate no error occurred
                    local.utility2.assert(!error, error);
                    modeNext += 1;
                    switch (modeNext) {
                    case 1:
                        options = {};
                        options.moduleDict = {
                            'istanbul-lite': {
                                exampleList: [],
                                exports: local.istanbul
                            }
                        };
                        Object.keys(options.moduleDict).forEach(function (key) {
                            options.moduleDict[key].example =
                                options.moduleDict[key].exampleList
                                .concat([
                                    'README.md',
                                    'test.js',
                                    'index.js'
                                ])
                                .map(function (file) {
                                    return '\n\n\n\n\n\n\n\n' +
                                        local.fs.readFileSync(file, 'utf8') +
                                        '\n\n\n\n\n\n\n\n';
                                }).join('');
                        });
                        // create doc.api.html
                        local.utility2.fsWriteFileWithMkdirp(
                            local.utility2.envDict.npm_config_dir_build + '/doc.api.html',
                            local.utility2.docApiCreate(options),
                            onNext
                        );
                        break;
                    case 2:
                        local.utility2.browserTest({
                            modeBrowserTest: 'screenCapture',
                            url: 'file://' + local.utility2.envDict.npm_config_dir_build +
                                '/doc.api.html'
                        }, onNext);
                        break;
                    default:
                        onError(error);
                    }
                }, onError);
            };
            onNext();
        };

        local.testCase_webpage_default = function (options, onError) {
        /*
         * this function will test the webpage's default handling-behavior
         */
            options = {
                modeCoverageMerge: true,
                url: local.utility2.serverLocalHost + '?modeTest=1'
            };
            local.utility2.browserTest(options, onError);
        };
        break;
    }
    switch (local.modeJs) {



    // run browser js-env code - post-init
    case 'browser':
        // run tests
        local.utility2.testRun(local);
        break;



    /* istanbul ignore next */
    // run node js-env code - post-init
    case 'node':
        // run test-server
        local.utility2.testRunServer(local);
        // init repl debugger
        local.utility2.replStart();
        /* istanbul ignore next */
        if (module !== require.main || module.isRollup) {
            break;
        }
        // init assets
        local.utility2.assetsDict['/assets.app.js'] = [
            'header',
            '/assets.utility2.rollup.js',
            'local.utility2.stateInit',
            '/assets.istanbul-lite.js',
            '/assets.example.js',
            '/assets.test.js'
        ].map(function (key) {
            switch (key) {
/* jslint-ignore-begin */
case 'header':
return '\
/*\n\
app.js\n\
\n' + local.utility2.envDict.npm_package_description + '\n\
\n\
instruction\n\
    1. save this script as app.js\n\
    2. run the shell command:\n\
        $ PORT=8081 node app.js\n\
    3. open a browser to http://localhost:8081\n\
    4. edit or paste script in browser to jslint and csslint\n\
*/\n\
';
/* jslint-ignore-end */
            case 'local.utility2.stateInit':
                return '// ' + key + '\n' +
                    local.utility2.assetsDict['/assets.utility2.rollup.content.js']
                    .replace(
                        '/* utility2.rollup.js content */',
                        key + '(' + JSON.stringify(
                            local.utility2.middlewareJsonpStateInit({ stateInit: true })
                        ) + ');'
                    );
            default:
                return '// ' + key + '\n' + local.utility2.assetsDict[key];
            }
        }).join('\n\n\n\n');
        local.utility2.assetsDict['/assets.app.min.js'] =
            local.utility2.uglifyIfProduction(local.utility2.assetsDict['/assets.app.js']);
        break;
    }
}());
