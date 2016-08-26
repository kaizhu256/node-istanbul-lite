istanbul-lite
=============
this package will run a standalone, browser-compatible version of the istanbul coverage-tool with zero npm-dependencies

[![travis-ci.org build-status](https://api.travis-ci.org/kaizhu256/node-istanbul-lite.svg)](https://travis-ci.org/kaizhu256/node-istanbul-lite)

[![NPM](https://nodei.co/npm/istanbul-lite.png?downloads=true)](https://www.npmjs.com/package/istanbul-lite)

[![package-listing](https://kaizhu256.github.io/node-istanbul-lite/build/screen-capture.gitLsTree.svg)](https://github.com/kaizhu256/node-istanbul-lite)



# live demo
- [https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app/index.html](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app/index.html)

[![github.com test-server](https://kaizhu256.github.io/node-istanbul-lite/build/screen-capture.githubDeploy.browser._2Fnode-istanbul-lite_2Fbuild..alpha..travis-ci.org_2Fapp_2Findex.html.png)](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app/index.html)



# documentation
#### todo
- none

#### change since 03cfd082
- npm publish 2015.7.2
- streamline build
- none

#### this package requires
- darwin or linux os

#### additional info
- istanbul derived from https://github.com/gotwarlost/istanbul/tree/v0.2.16 (this version does not support es6 or higher)

#### api-doc
- [https://kaizhu256.github.io/node-istanbul-lite/build/doc.api.html](https://kaizhu256.github.io/node-istanbul-lite/build/doc.api.html)

[![api-doc](https://kaizhu256.github.io/node-istanbul-lite/build/screen-capture.docApiCreate.browser._2Fhome_2Ftravis_2Fbuild_2Fkaizhu256_2Fnode-istanbul-lite_2Ftmp_2Fbuild_2Fdoc.api.html.png)](https://kaizhu256.github.io/node-istanbul-lite/build/doc.api.html)



# build-status [![travis-ci.org build-status](https://api.travis-ci.org/kaizhu256/node-istanbul-lite.svg)](https://travis-ci.org/kaizhu256/node-istanbul-lite)
[![build commit status](https://kaizhu256.github.io/node-istanbul-lite/build/build.badge.svg)](https://travis-ci.org/kaizhu256/node-istanbul-lite)

| git-branch : | [master](https://github.com/kaizhu256/node-istanbul-lite/tree/master) | [beta](https://github.com/kaizhu256/node-istanbul-lite/tree/beta) | [alpha](https://github.com/kaizhu256/node-istanbul-lite/tree/alpha)|
|--:|:--|:--|:--|
| test-server 1 : | [![github.com test-server](https://kaizhu256.github.io/node-istanbul-lite/GitHub-Mark-32px.png)](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/app/index.html) | [![github.com test-server](https://kaizhu256.github.io/node-istanbul-lite/GitHub-Mark-32px.png)](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app/index.html) | [![github.com test-server](https://kaizhu256.github.io/node-istanbul-lite/GitHub-Mark-32px.png)](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/app/index.html)|
| test-server 2 : | [![heroku.com test-server](https://kaizhu256.github.io/node-istanbul-lite/heroku-logo.75x25.png)](https://hrku01-istanbul-lite-master.herokuapp.com) | [![heroku.com test-server](https://kaizhu256.github.io/node-istanbul-lite/heroku-logo.75x25.png)](https://hrku01-istanbul-lite-beta.herokuapp.com) | [![heroku.com test-server](https://kaizhu256.github.io/node-istanbul-lite/heroku-logo.75x25.png)](https://hrku01-istanbul-lite-alpha.herokuapp.com)|
| test-report : | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/test-report.html) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/test-report.html) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/test-report.html)|
| coverage : | [![istanbul coverage](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/coverage.html/index.html) | [![istanbul coverage](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/coverage.html/index.html) | [![istanbul coverage](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/coverage.html/index.html)|
| build-artifacts : | [![build-artifacts](https://kaizhu256.github.io/node-istanbul-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build..master..travis-ci.org) | [![build-artifacts](https://kaizhu256.github.io/node-istanbul-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build..beta..travis-ci.org) | [![build-artifacts](https://kaizhu256.github.io/node-istanbul-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build..alpha..travis-ci.org)|

#### master branch
- stable branch
- HEAD should be tagged, npm-published package

#### beta branch
- semi-stable branch
- HEAD should be latest, npm-published package

#### alpha branch
- unstable branch
- HEAD is arbitrary
- commit history may be rewritten



# quickstart web example
![screen-capture](https://kaizhu256.github.io/node-istanbul-lite/build/screen-capture.testExampleJs.browser..png)

#### to run this example, follow the instruction in the script below
- [example.js](https://kaizhu256.github.io/node-istanbul-lite/build/example.js)
```javascript
/*
example.js

this script will will run a browser version of istanbul

instruction
    1. save this script as example.js
    2. run the shell command:
        $ npm install istanbul-lite && export PORT=8081 && node example.js
    3. open a browser to http://localhost:8081
    4. edit or paste script in browser to cover and eval
*/

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
        /* istanbul ignore next */
        // re-init local
        local = local.modeJs === 'browser'
            ? window.utility2_istanbul.local
            : module.isRollup
            ? module
            : require('istanbul-lite').local;
        // init global
        local.global = local.modeJs === 'browser'
            ? window
            : global;
        // export local
        local.global.local = local;
    }());
    switch (local.modeJs) {



    // run browser js-env code - post-init
    case 'browser':
        /* istanbul ignore next */
        local.testRun = function (event) {
            switch (event && event.currentTarget.id) {
            case 'testRunButton1':
                local.modeTest = true;
                local.utility2.testRun(local);
                break;
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
                    document.querySelector('.istanbulCoverageDiv').innerHTML =
                        local.istanbul.coverageReportCreate({
                            coverage: window.__coverage__
                        });
                } catch (errorCaught) {
                    document.querySelector('.istanbulCoverageDiv').innerHTML =
                        '<pre>' + errorCaught.stack.replace((/</g), '&lt') + '</pre>';
                }
            }
        };
        // init event-handling
        [
            '#inputTextarea1',
            '#testRunButton1'
        ].forEach(function (element) {
            element = document.querySelector(element);
            switch (element && element.id) {
            case 'inputTextarea1':
                element.addEventListener('keyup', local.testRun);
                break;
            case 'testRunButton1':
                element.addEventListener('click', local.testRun);
                break;
            }
        });
        // run tests
        local.testRun();
        break;



    /* istanbul ignore next */
    // run node js-env code - post-init
    case 'node':
        // export local
        module.exports = local;
        // require modules
        local.fs = require('fs');
        local.http = require('http');
        local.path = require('path');
        local.url = require('url');
        // init assets
        /* jslint-ignore-begin */
        local.templateIndexHtml = '\
<!doctype html>\n\
<html lang="en">\n\
<head>\n\
<meta charset="UTF-8">\n\
<title>\n\
{{envDict.npm_package_name}} v{{envDict.npm_package_version}}\n\
</title>\n\
<style>\n\
/*csslint\n\
    box-sizing: false,\n\
    ids: false,\n\
    universal-selector: false\n\
*/\n\
* {\n\
    box-sizing: border-box;\n\
}\n\
body {\n\
    background-color: #fff;\n\
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n\
}\n\
body > * {\n\
    margin-bottom: 1rem;\n\
}\n\
textarea {\n\
    font-family: monospace;\n\
    height: 16rem;\n\
    width: 100%;\n\
}\n\
textarea[readonly] {\n\
    background-color: #ddd;\n\
}\n\
</style>\n\
</head>\n\
<body>\n\
    <h1>\n\
<!-- utility2-comment\n\
        <a\n\
            {{#if envDict.npm_package_homepage}}\n\
            href="{{envDict.npm_package_homepage}}"\n\
            {{/if envDict.npm_package_homepage}}\n\
            target="_blank"\n\
        >\n\
utility2-comment -->\n\
            {{envDict.npm_package_name}} v{{envDict.npm_package_version}}\n\
<!-- utility2-comment\n\
        </a>\n\
utility2-comment -->\n\
<!-- utility2-comment\n\
        {{#if envDict.NODE_ENV}}\n\
        (NODE_ENV={{envDict.NODE_ENV}})\n\
        {{/if envDict.NODE_ENV}}\n\
utility2-comment -->\n\
    </h1>\n\
    <h3>{{envDict.npm_package_description}}</h3>\n\
<!-- utility2-comment\n\
    <h4><a download href="assets.app.js">download standalone app</a></h4>\n\
    <button id="testRunButton1">run internal test</button><br>\n\
utility2-comment -->\n\
    <div class="testReportDiv" style="display: none;"></div>\n\
\n\
    <label>edit or paste script below to cover and eval</label>\n\
<textarea id="inputTextarea1">\n\
if (true) {\n\
    console.log("hello");\n\
} else {\n\
    console.log("bye");\n\
}\n\
</textarea>\n\
    <label>instrumented code</label>\n\
    <textarea id="outputTextarea1" readonly></textarea>\n\
    <h2>coverage-report</h2>\n\
    <div class="istanbulCoverageDiv"></div>\n\
<!-- utility2-comment\n\
    {{#if isRollup}}\n\
    <script src="assets.app.min.js"></script>\n\
    {{#unless isRollup}}\n\
utility2-comment -->\n\
    <script src="assets.utility2.rollup.js"></script>\n\
    <script src="jsonp.utility2.stateInit?callback=window.utility2.stateInit"></script>\n\
    <script src="assets.istanbul-lite.js"></script>\n\
    <script src="assets.example.js"></script>\n\
    <script src="assets.test.js"></script>\n\
<!-- utility2-comment\n\
    {{/if isRollup}}\n\
utility2-comment -->\n\
</body>\n\
</html>\n\
';
        /* jslint-ignore-end */
        local['/'] = local.templateIndexHtml
            .replace((/\{\{envDict\.(\w+?)\}\}/g), function (match0, match1) {
                // jslint-hack
                String(match0);
                switch (match1) {
                case 'npm_package_description':
                    return 'example module';
                case 'npm_package_name':
                    return 'example';
                case 'npm_package_version':
                    return '0.0.1';
                }
            });
        if (module.isRollup) {
            break;
        }
        try {
            local['/assets.example.js'] = local.fs.readFileSync(__filename, 'utf8');
        } catch (ignore) {
        }
        local['/assets.istanbul-lite.js'] = '//' + local.fs.readFileSync(
            local.istanbul.__dirname + '/index.js',
            'utf8'
        );
        // run the cli
        if (module !== require.main) {
            break;
        }
        // start server
        console.log('server starting on port ' + process.env.PORT);
        local.http.createServer(function (request, response) {
            switch (local.url.parse(request.url).pathname) {
            case '/':
            case '/assets.example.js':
            case '/assets.istanbul-lite.js':
            case '/assets.test.js':
                response.end(local[local.url.parse(request.url).pathname]);
                break;
            default:
                response.end();
            }
        }).listen(process.env.PORT);
        // if $npm_config_timeout_exit is defined,
        // then exit this process after $npm_config_timeout_exit ms
        if (Number(process.env.npm_config_timeout_exit)) {
            setTimeout(process.exit, Number(process.env.npm_config_timeout_exit));
        }
        break;
    }
}());
```

#### output from electron
![screen-capture](https://kaizhu256.github.io/node-istanbul-lite/build/screen-capture.testExampleJs.browser..png)

#### output from shell
![screen-capture](https://kaizhu256.github.io/node-istanbul-lite/build/screen-capture.testExampleJs.svg)



# package.json
```json
{
    "package.json": true,
    "author": "kai zhu <kaizhu256@gmail.com>",
    "bin": { "istanbul-lite": "index.js" },
    "description": "{{packageJson.description}}",
    "devDependencies": {
        "electron-lite": "kaizhu256/node-electron-lite#alpha",
        "utility2": "kaizhu256/node-utility2#alpha"
    },
    "engines": { "node": ">=4.0" },
    "homepage": "https://github.com/kaizhu256/node-istanbul-lite",
    "keywords": [
        "browser",
        "code", "cover", "coverage",
        "instrument", "istanbul",
        "jscover", "jscoverage",
        "web"
    ],
    "license": "MIT",
    "name": "istanbul-lite",
    "os": ["darwin", "linux"],
    "repository" : {
        "type" : "git",
        "url" : "https://github.com/kaizhu256/node-istanbul-lite.git"
    },
    "scripts": {
        "build-ci": "utility2 shRun shReadmeBuild",
        "start": "\
export PORT=${PORT:-8080} && \
export npm_config_mode_auto_restart=1 && \
utility2 shRun shIstanbulCover test.js",
        "test": "export PORT=$(utility2 shServerPortRandom) && utility2 test test.js"
    },
    "version": "2015.7.2"
}
```



# changelog of last 50 commits
[![screen-capture](https://kaizhu256.github.io/node-istanbul-lite/build/screen-capture.gitLog.svg)](https://github.com/kaizhu256/node-istanbul-lite/commits)



# internal build-script
- build.sh
```shell
# build.sh

# this shell script will run the build for this package

shBuildCiTestPre() {(set -e
# this function will run the pre-test build
    # test example.js
    (export MODE_BUILD=testExampleJs &&
        shRunScreenCapture shReadmeTestJs example.js) || return $?
    # test published-package
    (export MODE_BUILD=npmTestPublished &&
        shRunScreenCapture shNpmTestPublished) || return $?
)}

shBuildCiTestPost() {(set -e
# this function will run the post-test build
    # if running legacy-node, then return
    [ "$(node --version)" \< "v5.0" ] && return || true
    export NODE_ENV=production
    # deploy app to gh-pages
    export TEST_URL="https://$(printf "$GITHUB_REPO" | \
        sed 's/\//.github.io\//')/build..$CI_BRANCH..travis-ci.org/app/index.html"
    (export MODE_BUILD=githubDeploy &&
        shGithubDeploy) || return $?
    # test deployed app to gh-pages
    (export MODE_BUILD=githubTest &&
        export modeBrowserTest=test &&
        export url="$TEST_URL?modeTest=1&timeExit={{timeExit}}" &&
        shBrowserTest) || return $?
    # deploy app to heroku
    export HEROKU_REPO="hrku01-$npm_package_name-$CI_BRANCH"
    export TEST_URL="https://$HEROKU_REPO.herokuapp.com"
    shGitRepoBranchUpdateLocal() {(set -e
    # this function will local-update git-repo-branch
        cp "$npm_config_dir_build/app/assets.app.js" .
        printf "web: npm_config_mode_backend=1 node assets.app.js" > Procfile
    )}
    (export MODE_BUILD=herokuDeploy &&
        shHerokuDeploy) || return $?
    # test deployed app to heroku
    (export MODE_BUILD=herokuTest &&
        export modeBrowserTest=test &&
        export url="$TEST_URL?modeTest=1&timeExit={{timeExit}}" &&
        shBrowserTest) || return $?
)}

shBuild() {(set -e
# this function will run the main build
    # init env
    . node_modules/.bin/utility2 && shInit
    # cleanup github-gh-pages dir
    # export BUILD_GITHUB_UPLOAD_PRE_SH="rm -fr build"
    # init github-gh-pages commit-limit
    export COMMIT_LIMIT=16
    # if branch is alpha, beta, or master, then run default build
    if [ "$CI_BRANCH" = alpha ] ||
        [ "$CI_BRANCH" = beta ] ||
        [ "$CI_BRANCH" = master ]
    then
        shBuildCiDefault
    fi
)}
shBuild
```
