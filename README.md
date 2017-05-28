# istanbul-lite
this zero-dependency package will provide a browser-compatible version of the istanbul v0.4.5 coverage-tool

[![travis-ci.org build-status](https://api.travis-ci.org/kaizhu256/node-istanbul-lite.svg)](https://travis-ci.org/kaizhu256/node-istanbul-lite) [![coverage](https://kaizhu256.github.io/node-utility2/build/coverage.badge.svg)](https://kaizhu256.github.io/node-utility2/build/coverage.html/index.html)

[![NPM](https://nodei.co/npm/istanbul-lite.png?downloads=true)](https://www.npmjs.com/package/istanbul-lite)

[![build commit status](https://kaizhu256.github.io/node-istanbul-lite/build/build.badge.svg)](https://travis-ci.org/kaizhu256/node-istanbul-lite)

| git-branch : | [master](https://github.com/kaizhu256/node-istanbul-lite/tree/master) | [beta](https://github.com/kaizhu256/node-istanbul-lite/tree/beta) | [alpha](https://github.com/kaizhu256/node-istanbul-lite/tree/alpha)|
|--:|:--|:--|:--|
| test-server-github : | [![github.com test-server](https://kaizhu256.github.io/node-istanbul-lite/GitHub-Mark-32px.png)](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/app) | [![github.com test-server](https://kaizhu256.github.io/node-istanbul-lite/GitHub-Mark-32px.png)](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app) | [![github.com test-server](https://kaizhu256.github.io/node-istanbul-lite/GitHub-Mark-32px.png)](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/app)|
| test-server-heroku : | [![heroku.com test-server](https://kaizhu256.github.io/node-istanbul-lite/heroku-logo.75x25.png)](https://h1-istanbul-master.herokuapp.com) | [![heroku.com test-server](https://kaizhu256.github.io/node-istanbul-lite/heroku-logo.75x25.png)](https://h1-istanbul-beta.herokuapp.com) | [![heroku.com test-server](https://kaizhu256.github.io/node-istanbul-lite/heroku-logo.75x25.png)](https://h1-istanbul-alpha.herokuapp.com)|
| test-report : | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/test-report.html) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/test-report.html) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/test-report.html)|
| coverage : | [![coverage](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/coverage.html/index.html) | [![coverage](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/coverage.html/index.html) | [![coverage](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/coverage.html/index.html)|
| build-artifacts : | [![build-artifacts](https://kaizhu256.github.io/node-istanbul-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build..master..travis-ci.org) | [![build-artifacts](https://kaizhu256.github.io/node-istanbul-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build..beta..travis-ci.org) | [![build-artifacts](https://kaizhu256.github.io/node-istanbul-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build..alpha..travis-ci.org)|

[![npmPackageListing](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.npmPackageListing.svg)](https://github.com/kaizhu256/node-istanbul-lite)

![npmPackageDependencyTree](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.npmPackageDependencyTree.svg)



# table of contents
1. [cdn download](#cdn-download)
1. [live demo](#live-demo)
1. [documentation](#documentation)
1. [quickstart standalone app](#quickstart-standalone-app)
1. [quickstart example.js](#quickstart-examplejs)
1. [all screenshots](#all-screenshots)
1. [package.json](#packagejson)
1. [changelog of last 50 commits](#changelog-of-last-50-commits)
1. [internal build script](#internal-build-script)
1. [misc](#misc)



# cdn download
- [https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app/assets.istanbul.js](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app/assets.istanbul.js)



# live demo
- [https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app)

[![github.com test-server](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithub.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png)](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app)



# documentation
#### apidoc
- [https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/apidoc.html](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/apidoc.html)

[![apidoc](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/apidoc.html)

#### todo
- none

#### changelog for v2017.5.27
- npm publish 2017.5.27
- deduplicate file assets.istanbul.rollup.js
- merge file lib.example.es6.js into test.js
- upgrade to esprima v2.7.3
- upgrade to escodegen v1.8.1
- upgrade to istanbul v0.4.5
- add README section 'all screenshots'
- add README section 'quickstart standalone app'
- auto-create README section 'table of contents'
- none

#### this package requires
- darwin or linux os

#### additional info
- istanbul code derived from https://github.com/gotwarlost/istanbul/tree/v0.2.16



# quickstart standalone app
#### to run this example, follow the instruction in the script below
- [assets.app.js](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app/assets.app.js)
```shell
# example.sh

# this shell script will download and run a web demo of istanbul-lite as a standalone app

# 1. download standalone app
curl -O https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app/assets.app.js
# 2. run standalone app
node ./assets.app.js
# 3. open a browser to http://127.0.0.1:8081 and play with the web demo
# 4. edit file assets.app.js to suit your needs
```

#### output from browser
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleSh.browser.%252F.png)](https://kaizhu256.github.io/node-istanbul-lite/build/app/assets.example.html)

#### output from shell
![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleSh.svg)



# quickstart example.js
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleJs.browser.%252F.png)](https://kaizhu256.github.io/node-istanbul-lite/build/app/assets.example.html)

#### to run this example, follow the instruction in the script below
- [example.js](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/example.js)
```javascript
/*
example.js

this script will create a web demo of istanbul-lite

instruction
    1. save this script as example.js
    2. run the shell command:
        $ npm install istanbul-lite && PORT=8081 node example.js
    3. open a browser to http://127.0.0.1:8081 and play with the web demo
*/



/* istanbul instrument in package istanbul */
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



    // run shared js-env code - init-before
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
        // init utility2_rollup
        local = local.global.utility2_rollup || (local.modeJs === 'browser'
            ? local.global.utility2_istanbul
            : require('istanbul-lite'));
        // init exports
        local.global.local = local;
    }());
    switch (local.modeJs) {



    // init-after
    // run browser js-env code - init-after
    /* istanbul ignore next */
    case 'browser':
        local.testRunBrowser = function (event) {
            if (!event || (event &&
                    event.currentTarget &&
                    event.currentTarget.className &&
                    event.currentTarget.className.includes &&
                    event.currentTarget.className.includes('onreset'))) {
                // reset output
                Array.from(
                    document.querySelectorAll('body > .resettable')
                ).forEach(function (element) {
                    switch (element.tagName) {
                    case 'INPUT':
                    case 'TEXTAREA':
                        element.value = '';
                        break;
                    default:
                        element.textContent = '';
                    }
                });
            }
            switch (event && event.currentTarget && event.currentTarget.id) {
            case 'testRunButton1':
                // show tests
                if (document.querySelector('#testReportDiv1').style.display === 'none') {
                    document.querySelector('#testReportDiv1').style.display = 'block';
                    document.querySelector('#testRunButton1').textContent =
                        'hide internal test';
                    local.modeTest = true;
                    local.testRunDefault(local);
                // hide tests
                } else {
                    document.querySelector('#testReportDiv1').style.display = 'none';
                    document.querySelector('#testRunButton1').textContent = 'run internal test';
                }
                break;
            // custom-case
            default:
                // try to cleanup __coverage__
                try {
                    delete local.global.__coverage__['/inputTextarea1.js'];
                } catch (ignore) {
                }
                // try to cover and eval input-code
                try {
                    /*jslint evil: true*/
                    document.querySelector('#outputTextarea1').value =
                        local.istanbul.instrumentSync(
                            document.querySelector('#inputTextarea1').value,
                            '/inputTextarea1.js'
                        );
                    eval(document.querySelector('#outputTextarea1').value);
                    document.querySelector('#coverageReportDiv1').innerHTML =
                        local.istanbul.coverageReportCreate({
                            coverage: window.__coverage__
                        });
                } catch (errorCaught) {
                    console.error(errorCaught.stack);
                }
            }
            if (document.querySelector('#inputTextareaEval1') && (!event || (event &&
                    event.currentTarget &&
                    event.currentTarget.className &&
                    event.currentTarget.className.includes &&
                    event.currentTarget.className.includes('oneval')))) {
                // try to eval input-code
                try {
                    /*jslint evil: true*/
                    eval(document.querySelector('#inputTextareaEval1').value);
                } catch (errorCaught) {
                    console.error(errorCaught);
                }
            }
        };
        // log stderr and stdout to #outputTextareaStdout1
        ['error', 'log'].forEach(function (key) {
            console[key + '_original'] = console[key];
            console[key] = function () {
                var element;
                console[key + '_original'].apply(console, arguments);
                element = document.querySelector('#outputTextareaStdout1');
                if (!element) {
                    return;
                }
                // append text to #outputTextareaStdout1
                element.value += Array.from(arguments).map(function (arg) {
                    return typeof arg === 'string'
                        ? arg
                        : JSON.stringify(arg, null, 4);
                }).join(' ') + '\n';
                // scroll textarea to bottom
                element.scrollTop = element.scrollHeight;
            };
        });
        // init event-handling
        ['change', 'click', 'keyup'].forEach(function (event) {
            Array.from(document.querySelectorAll('.on' + event)).forEach(function (element) {
                element.addEventListener(event, local.testRunBrowser);
            });
        });
        // run tests
        local.testRunBrowser();
        break;



    // run node js-env code - init-after
    /* istanbul ignore next */
    case 'node':
        // init exports
        module.exports = local;
        // require modules
        local.fs = require('fs');
        local.http = require('http');
        local.url = require('url');
        // init assets
        local.assetsDict = local.assetsDict || {};
        /* jslint-ignore-begin */
        local.assetsDict['/assets.index.template.html'] = '\
<!doctype html>\n\
<html lang="en">\n\
<head>\n\
<meta charset="UTF-8">\n\
<meta name="viewport" content="width=device-width, initial-scale=1">\n\
<title>{{env.npm_package_name}} (v{{env.npm_package_version}})</title>\n\
<style>\n\
/*csslint\n\
    box-sizing: false,\n\
    universal-selector: false\n\
*/\n\
* {\n\
    box-sizing: border-box;\n\
}\n\
body {\n\
    background: #dde;\n\
    font-family: Arial, Helvetica, sans-serif;\n\
    margin: 2rem;\n\
}\n\
body > * {\n\
    margin-bottom: 1rem;\n\
}\n\
.utility2FooterDiv {\n\
    margin-top: 20px;\n\
    text-align: center;\n\
}\n\
</style>\n\
<style>\n\
/*csslint\n\
*/\n\
textarea {\n\
    font-family: monospace;\n\
    height: 10rem;\n\
    width: 100%;\n\
}\n\
textarea[readonly] {\n\
    background: #ddd;\n\
}\n\
</style>\n\
</head>\n\
<body>\n\
<!-- utility2-comment\n\
<div id="ajaxProgressDiv1" style="background: #d00; height: 2px; left: 0; margin: 0; padding: 0; position: fixed; top: 0; width: 25%;"></div>\n\
utility2-comment -->\n\
<h1>\n\
<!-- utility2-comment\n\
    <a\n\
        {{#if env.npm_package_homepage}}\n\
        href="{{env.npm_package_homepage}}"\n\
        {{/if env.npm_package_homepage}}\n\
        target="_blank"\n\
    >\n\
utility2-comment -->\n\
        {{env.npm_package_name}} (v{{env.npm_package_version}})\n\
<!-- utility2-comment\n\
    </a>\n\
utility2-comment -->\n\
</h1>\n\
<h3>{{env.npm_package_description}}</h3>\n\
<!-- utility2-comment\n\
<h4><a download href="assets.app.js">download standalone app</a></h4>\n\
<button class="onclick onreset" id="testRunButton1">run internal test</button><br>\n\
<div id="testReportDiv1" style="display: none;"></div>\n\
utility2-comment -->\n\
\n\
\n\
\n\
<label>edit or paste script below to cover and eval</label>\n\
<textarea class="onkeyup onreset" id="inputTextarea1">\n\
if (true) {\n\
    console.log("hello");\n\
} else {\n\
    console.log("bye");\n\
}\n\
let fibonacci = {\n\
    [Symbol.iterator]() {\n\
        let pre = 0, cur = 1;\n\
        return {\n\
            next() {\n\
                [pre, cur] = [cur, pre + cur];\n\
                return { done: false, value: cur }\n\
            }\n\
        }\n\
    }\n\
}\n\
for (var n of fibonacci) {\n\
    // truncate the sequence at 1000\n\
    if (n > 1000)\n\
        break;\n\
    console.log(n);\n\
}\n\
</textarea>\n\
<label>instrumented-code</label>\n\
<textarea class="resettable" id="outputTextarea1" readonly></textarea>\n\
<label>stderr and stdout</label>\n\
<textarea class="resettable" id="outputTextareaStdout1" readonly></textarea>\n\
<div id="coverageReportDiv1" class="resettable"></div>\n\
<!-- utility2-comment\n\
{{#if isRollup}}\n\
<script src="assets.app.js"></script>\n\
{{#unless isRollup}}\n\
utility2-comment -->\n\
<script src="assets.utility2.rollup.js"></script>\n\
<script>window.utility2.onResetBefore.counter += 1;</script>\n\
<script src="jsonp.utility2.stateInit?callback=window.utility2.stateInit"></script>\n\
<script src="assets.istanbul.js"></script>\n\
<script src="assets.example.js"></script>\n\
<script src="assets.test.js"></script>\n\
<script>window.utility2.onResetBefore();</script>\n\
<!-- utility2-comment\n\
{{/if isRollup}}\n\
utility2-comment -->\n\
<div class="utility2FooterDiv">\n\
    [ this app was created with\n\
    <a href="https://github.com/kaizhu256/node-utility2" target="_blank">utility2</a>\n\
    ]\n\
</div>\n\
</body>\n\
</html>\n\
';
        /* jslint-ignore-end */
        [
            'assets.index.css',
            'assets.index.template.html',
            'assets.swgg.swagger.json',
            'assets.swgg.swagger.server.json'
        ].forEach(function (file) {
            local.assetsDict['/' + file] = local.assetsDict['/' + file] || '';
            if (local.fs.existsSync(local.__dirname + '/' + file)) {
                local.assetsDict['/' + file] = local.fs.readFileSync(
                    local.__dirname + '/' + file,
                    'utf8'
                );
            }
        });
        local.assetsDict['/'] =
            local.assetsDict['/assets.example.html'] =
            local.assetsDict['/assets.index.template.html']
            .replace((/\{\{env\.(\w+?)\}\}/g), function (match0, match1) {
                // jslint-hack
                String(match0);
                switch (match1) {
                case 'npm_package_description':
                    return 'the greatest app in the world!';
                case 'npm_package_name':
                    return 'istanbul-lite';
                case 'npm_package_nameAlias':
                    return 'istanbul';
                case 'npm_package_version':
                    return '0.0.1';
                default:
                    return match0;
                }
            });
        // run the cli
        if (local.global.utility2_rollup || module !== require.main) {
            break;
        }
        local.assetsDict['/assets.example.js'] =
            local.assetsDict['/assets.example.js'] ||
            local.fs.readFileSync(__filename, 'utf8');
        // bug-workaround - long $npm_package_buildCustomOrg
        /* jslint-ignore-begin */
        local.assetsDict['/assets.istanbul.js'] =
            local.assetsDict['/assets.istanbul.js'] ||
            local.fs.readFileSync(
                local.istanbul.__dirname + '/lib.istanbul.js',
                'utf8'
            ).replace((/^#!/), '//');
        /* jslint-ignore-end */
        local.assetsDict['/favicon.ico'] = local.assetsDict['/favicon.ico'] || '';
        // if $npm_config_timeout_exit exists,
        // then exit this process after $npm_config_timeout_exit ms
        if (Number(process.env.npm_config_timeout_exit)) {
            setTimeout(process.exit, Number(process.env.npm_config_timeout_exit));
        }
        // start server
        if (local.global.utility2_serverHttp1) {
            break;
        }
        process.env.PORT = process.env.PORT || '8081';
        console.error('server starting on port ' + process.env.PORT);
        local.http.createServer(function (request, response) {
            request.urlParsed = local.url.parse(request.url);
            if (local.assetsDict[request.urlParsed.pathname] !== undefined) {
                response.end(local.assetsDict[request.urlParsed.pathname]);
                return;
            }
            response.statusCode = 404;
            response.end();
        }).listen(process.env.PORT);
        break;
    }
}());
```

#### output from browser
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleJs.browser.%252F.png)](https://kaizhu256.github.io/node-istanbul-lite/build/app/assets.example.html)

#### output from shell
![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleJs.svg)



# all screenshots
1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithub.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp%252Fassets.swgg.html.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithub.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp%252Fassets.swgg.html.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithub.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp%252Fassets.swgg.html.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithub.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp%252Fassets.swgg.html.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithub.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithub.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithub.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithub.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithubTest.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithubTest.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithubTest.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithubTest.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHeroku.browser.%252Fassets.swgg.html.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHeroku.browser.%252Fassets.swgg.html.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHeroku.browser.%252Fassets.swgg.html.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHeroku.browser.%252Fassets.swgg.html.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHeroku.browser.%252F.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHeroku.browser.%252F.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHeroku.browser.%252F.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHeroku.browser.%252F.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHerokuTest.browser.%252F.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHerokuTest.browser.%252F.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHerokuTest.browser.%252F.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHerokuTest.browser.%252F.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.npmTest.browser.%252F.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.npmTest.browser.%252F.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.npmTest.browser.%252F.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.npmTest.browser.%252F.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.npmTestPublished.browser.%252F.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.npmTestPublished.browser.%252F.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.npmTestPublished.browser.%252F.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.npmTestPublished.browser.%252F.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleJs.browser.%252F.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleJs.browser.%252F.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleJs.browser.%252F.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleJs.browser.%252F.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleSh.browser.%252F.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleSh.browser.%252F.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleSh.browser.%252F.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleSh.browser.%252F.png)



# package.json
```json
{
    "author": "kai zhu <kaizhu256@gmail.com>",
    "bin": {
        "istanbul-lite": "lib.istanbul.js"
    },
    "description": "this zero-dependency package will provide a browser-compatible version of the istanbul v0.4.5 coverage-tool",
    "devDependencies": {
        "electron-lite": "kaizhu256/node-electron-lite#alpha",
        "utility2": "kaizhu256/node-utility2#alpha"
    },
    "engines": {
        "node": ">=4.0"
    },
    "homepage": "https://github.com/kaizhu256/node-istanbul-lite",
    "keywords": [
        "browser",
        "code-coverage",
        "cover",
        "coverage",
        "instrument",
        "istanbul",
        "jscover",
        "jscoverage",
        "test-coverage"
    ],
    "license": "MIT",
    "main": "lib.istanbul.js",
    "name": "istanbul-lite",
    "nameAlias": "istanbul",
    "nameOriginal": "istanbul-lite",
    "os": [
        "darwin",
        "linux"
    ],
    "repository": {
        "type": "git",
        "url": "https://github.com/kaizhu256/node-istanbul-lite.git"
    },
    "scripts": {
        "build-ci": "utility2 shReadmeTest build_ci.sh",
        "env": "env",
        "heroku-postbuild": "npm install \"kaizhu256/node-utility2#alpha\" && utility2 shDeployHeroku",
        "postinstall": "[ ! -f npm_scripts.sh ] || ./npm_scripts.sh postinstall",
        "start": "PORT=${PORT:-8080} utility2 start test.js",
        "test": "PORT=$(utility2 shServerPortRandom) utility2 test test.js"
    },
    "version": "2017.5.27"
}
```



# changelog of last 50 commits
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.gitLog.svg)](https://github.com/kaizhu256/node-istanbul-lite/commits)



# internal build script
- build_ci.sh
```shell
# build_ci.sh

# this shell script will run the build for this package

shBuildCiAfter() {(set -e
    shDeployGithub
    shDeployHeroku
    shReadmeTest example.sh
)}

shBuildCiBefore() {(set -e
    shNpmTestPublished
    shReadmeTest example.js
)}

# run shBuildCi
eval $(utility2 source)
shBuildCi
```



# misc
- this package was created with [utility2](https://github.com/kaizhu256/node-utility2)
