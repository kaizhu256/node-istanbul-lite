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
        // init global
        local.global = local.modeJs === 'browser'
            ? window
            : global;
        switch (local.modeJs) {
        // re-init local from window.local
        case 'browser':
            local = local.global.utility2_rollup || local.global.local;
            local.global.utility2.objectSetDefault(local, local.global.utility2);
            break;
        // re-init local from example.js
        case 'node':
            local = (local.global.utility2_rollup || require('utility2'))
                .requireExampleJsFromReadme();
            local.assetsDict['/assets.lib.example.es6.js'] =
                local['/assets.lib.example.es6.js'];
            // test es6 handling-behavior
            local.vm.runInThisContext(local.assetsDict['/assets.lib.example.es6.js']);
            break;
        }
    }());



    // run shared js-env code - function
    (function () {
        local.testCase_istanbulCoverageReportCreate_default = function (options, onError) {
        /*
         * this function will test istanbulCoverageReportCreate's default handling-behavior
         */
            options = [
                [local.istanbul, { coverageMerge: local.echo }],
                // test $npm_config_mode_coverage_merge handling-behavior
                [local.env, { npm_config_mode_coverage_merge: '1' }]
            ];
            local.env.npm_config_mode_coverage_merge = '';
            local.testMock(options, function (onError) {
                /*jslint evil: true*/
                // cleanup old coverage
                if (local.modeJs === 'node') {
                    local.fsRmrSync('tmp/build/coverage.html/aa');
                }
                // test path handling-behavior
                ['/', local.__dirname].forEach(function (dir) {
                    [
                        'zz.js',
                        'aa/zz.js',
                        'aa/bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb/zz.js'
                    ].forEach(function (file) {
                        // cover file
                        eval(local.istanbul.instrumentSync(
                            // test skip handling-behavior
                            'null',
                            dir + '/' + file
                        ));
                    });
                });
                // create report with covered path
                local.istanbul.coverageReportCreate();
                // test file-content handling-behavior
                [
                    // test no content handling-behavior
                    '',
                    // test uncovereed-code handling-behavior
                    'null && null && null',
                    // test trailing-whitespace handling-behavior
                    'null ',
                    // test skip handling-behavior
                    '/* istanbul ignore next */\nnull && null'
                ].forEach(function (content) {
                    // cleanup
                    local.tryCatchOnError(function () {
                        Object.keys(local.global.__coverage__).forEach(function (file) {
                            if (file.indexOf('zz.js') >= 0) {
                                local.global.__coverage__[file] = null;
                            }
                        });
                    }, local.nop);
                    // cover path
                    eval(local.istanbul.instrumentSync(content, 'zz.js'));
                    // create report with covered content
                    local.istanbul.coverageReportCreate();
                });
                // cleanup
                Object.keys(local.global.__coverage__).forEach(function (file) {
                    if (file.indexOf('zz.js') >= 0) {
                        local.global.__coverage__[file] = null;
                    }
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
            local.assert(options.data.indexOf(".s['1']++;1;\n") >= 0, options);
            onError();
        };
    }());
    switch (local.modeJs) {



    // run node js-env code - function
    case 'node':
        local.testCase_buildApiDoc_default = function (options, onError) {
        /*
         * this function will test buildApiDoc's handling-behavior
         */
            options = {};
            local.buildApiDoc(options, onError);
        };

        local.testCase_buildApp_default = function (options, onError) {
        /*
         * this function will test buildApp's handling-behavior
         */
            local.testCase_buildReadme_default(options, local.onErrorDefault);
            options = [];
            local.buildApp(options, onError);
        };

        local.testCase_buildReadme_default = function (options, onError) {
        /*
         * this function will test buildReadme's handling-behavior
         */
            options = {};
            options.customize = function () {
                // search-and-replace - customize readmeTo
                [
                    // customize quickstart-html-script
                    (/<script [^`]*?<\/body>/)
                ].forEach(function (rgx) {
                    options.readmeFrom.replace(rgx, function (match0) {
                        options.readmeTo = options.readmeTo.replace(rgx, match0);
                    });
                });
            };
            local.buildReadme(options, onError);
        };

        local.testCase_istanbulCoverageMerge_default = function (options, onError) {
        /*
         * this function will test istanbulCoverageMerge's default handling-behavior
         */
            options = {};
            options.data = local.istanbul.instrumentSync(
                '(function () {\nreturn arg ' +
                    '? __coverage__ ' +
                    ': __coverage__;\n}());',
                'test'
            );
            local.arg = 0;
            // test null-case handling-behavior
            options.coverage1 = null;
            options.coverage2 = null;
            local.istanbul.coverageMerge(options.coverage1, options.coverage2);
            // validate merged options.coverage1
            local.assertJsonEqual(options.coverage1, null);
            options.coverage2 = { undefined: null };
            local.istanbul.coverageMerge(options.coverage1, options.coverage2);
            // validate merged options.coverage1
            local.assertJsonEqual(options.coverage1, null);
            // init options.coverage1
            options.coverage1 = local.vm.runInNewContext(options.data, { arg: 0 });
/* jslint-ignore-begin */
// validate options.coverage1
local.assertJsonEqual(options.coverage1,
{"/test":{"b":{"1":[0,1]},"branchMap":{"1":{"line":2,"locations":[{"end":{"column":25,"line":2},"start":{"column":13,"line":2}},{"end":{"column":40,"line":2},"start":{"column":28,"line":2}}],"type":"cond-expr"}},"code":["(function () {","return arg ? __coverage__ : __coverage__;","}());"],"f":{"1":1},"fnMap":{"1":{"line":1,"loc":{"end":{"column":13,"line":1},"start":{"column":1,"line":1}},"name":"(anonymous_1)"}},"path":"/test","s":{"1":1,"2":1},"statementMap":{"1":{"end":{"column":5,"line":3},"start":{"column":0,"line":1}},"2":{"end":{"column":41,"line":2},"start":{"column":0,"line":2}}}}}
);
// test merge-create handling-behavior
options.coverage1 = local.istanbul.coverageMerge({}, options.coverage1);
// validate options.coverage1
local.assertJsonEqual(options.coverage1,
{"/test":{"b":{"1":[0,1]},"branchMap":{"1":{"line":2,"locations":[{"end":{"column":25,"line":2},"start":{"column":13,"line":2}},{"end":{"column":40,"line":2},"start":{"column":28,"line":2}}],"type":"cond-expr"}},"code":["(function () {","return arg ? __coverage__ : __coverage__;","}());"],"f":{"1":1},"fnMap":{"1":{"line":1,"loc":{"end":{"column":13,"line":1},"start":{"column":1,"line":1}},"name":"(anonymous_1)"}},"path":"/test","s":{"1":1,"2":1},"statementMap":{"1":{"end":{"column":5,"line":3},"start":{"column":0,"line":1}},"2":{"end":{"column":41,"line":2},"start":{"column":0,"line":2}}}}}
);
// init options.coverage2
options.coverage2 = local.vm.runInNewContext(options.data, { arg: 1 });
// validate options.coverage2
local.assertJsonEqual(options.coverage2,
{"/test":{"b":{"1":[1,0]},"branchMap":{"1":{"line":2,"locations":[{"end":{"column":25,"line":2},"start":{"column":13,"line":2}},{"end":{"column":40,"line":2},"start":{"column":28,"line":2}}],"type":"cond-expr"}},"code":["(function () {","return arg ? __coverage__ : __coverage__;","}());"],"f":{"1":1},"fnMap":{"1":{"line":1,"loc":{"end":{"column":13,"line":1},"start":{"column":1,"line":1}},"name":"(anonymous_1)"}},"path":"/test","s":{"1":1,"2":1},"statementMap":{"1":{"end":{"column":5,"line":3},"start":{"column":0,"line":1}},"2":{"end":{"column":41,"line":2},"start":{"column":0,"line":2}}}}}
);
// test merge-update handling-behavior
local.istanbul.coverageMerge(options.coverage1, options.coverage2);
// validate merged options.coverage1
local.assertJsonEqual(options.coverage1,
{"/test":{"b":{"1":[1,1]},"branchMap":{"1":{"line":2,"locations":[{"end":{"column":25,"line":2},"start":{"column":13,"line":2}},{"end":{"column":40,"line":2},"start":{"column":28,"line":2}}],"type":"cond-expr"}},"code":["(function () {","return arg ? __coverage__ : __coverage__;","}());"],"f":{"1":2},"fnMap":{"1":{"line":1,"loc":{"end":{"column":13,"line":1},"start":{"column":1,"line":1}},"name":"(anonymous_1)"}},"path":"/test","s":{"1":2,"2":2},"statementMap":{"1":{"end":{"column":5,"line":3},"start":{"column":0,"line":1}},"2":{"end":{"column":41,"line":2},"start":{"column":0,"line":2}}}}}
);
/* jslint-ignore-end */
            onError();
        };

        local.testCase_webpage_default = function (options, onError) {
        /*
         * this function will test the webpage's default handling-behavior
         */
            options = { modeCoverageMerge: true, url: local.serverLocalHost + '?modeTest=1' };
            local.browserTest(options, onError);
        };
        break;
    }
    switch (local.modeJs) {



    // run browser js-env code - post-init
    case 'browser':
        // run tests
        local.nop(local.modeTest && document.querySelector('#testRunButton1').click());
        break;



    // run node js-env code - post-init
    case 'node':
        // run test-server
        local.testRunServer(local);
        break;
    }
}());
