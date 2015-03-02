istanbul-lite [![NPM](https://img.shields.io/npm/v/istanbul-lite.svg?style=flat-square)](https://www.npmjs.org/package/istanbul-lite)
=============
lightweight browser version of istanbul coverage with zero npm dependencies



# build-status [![travis-ci.org build-status](https://api.travis-ci.org/kaizhu256/node-istanbul-lite.svg)](https://travis-ci.org/kaizhu256/node-istanbul-lite)

[![build commit status](https://kaizhu256.github.io/node-istanbul-lite/build/build.badge.svg)](https://travis-ci.org/kaizhu256/node-istanbul-lite)

| git-branch | test-server | test-report | coverage | build-artifacts |
|:----------:|:-----------:|:-----------:|:--------:|:---------------:|
|[master](https://github.com/kaizhu256/node-istanbul-lite/tree/master) | [![heroku.com test-server](https://kaizhu256.github.io/node-istanbul-lite/heroku-logo.75x25.png)](https://hrku01-istanbul-lite-master.herokuapp.com) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/test-report.html) | [![istanbul-lite coverage](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/coverage.html/node-istanbul-lite/index.html) | [![build-artifacts](https://kaizhu256.github.io/node-istanbul-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build..master..travis-ci.org)|
|[beta](https://github.com/kaizhu256/node-istanbul-lite/tree/beta) | [![heroku.com test-server](https://kaizhu256.github.io/node-istanbul-lite/heroku-logo.75x25.png)](https://hrku01-istanbul-lite-beta.herokuapp.com) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/test-report.html) | [![istanbul-lite coverage](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/coverage.html/node-istanbul-lite/index.html) | [![build-artifacts](https://kaizhu256.github.io/node-istanbul-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build..beta..travis-ci.org)|
|[alpha](https://github.com/kaizhu256/node-istanbul-lite/tree/alpha) | [![heroku.com test-server](https://kaizhu256.github.io/node-istanbul-lite/heroku-logo.75x25.png)](https://hrku01-istanbul-lite-alpha.herokuapp.com) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/test-report.html) | [![istanbul-lite coverage](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/coverage.html/node-istanbul-lite/index.html) | [![build-artifacts](https://kaizhu256.github.io/node-istanbul-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build..alpha..travis-ci.org)|



# live test-server
[![heroku.com test-server](https://kaizhu256.github.io/node-istanbul-lite/build/screen-capture.herokuTest.slimerjs.png)](https://hrku01-istanbul-lite-beta.herokuapp.com)



# quickstart to run dynamic web-coverage
#### follow the instruction in this script
```
/*
  example.js

  this shared browser / node script will serve a web-page
  with dynamic web-coverage and web-reporting

  instruction
  1. save this script as example.js
  2. run the shell command:
     $ npm install istanbul-lite && node example.js
  3. open a browser to http://localhost:1337
*/
/*jslint
  browser: true,
  indent: 2,
  maxerr: 8,
  maxlen: 80,
  node: true, nomen: true,
  stupid: true
*/
(function () {
  /*
    this function will test this module
  */
  'use strict';
  var app;
  // init app
  app = {};
  app.istanbul_lite = typeof window === 'object'
    ? window.istanbul_lite
    : require('istanbul-lite');



  // run browser js-env code
  if (typeof window === 'object') {
    app.coverAndEval = function () {
      /*
        this function will cover and eval the text in .istanbulLiteInputTextarea
      */
      /*jslint evil: true*/
      try {
        window.__coverage__ = {};
        eval(window.istanbul_lite.instrumentSync(
          document.querySelector('.istanbulLiteInputTextarea').value,
          '/istanbulLiteInputTextarea.js'
        ));
        document.querySelector(
          '.istanbulLiteCoverageDiv'
        ).innerHTML = window.istanbul_lite.coverageReportCreate();
      } catch (errorCaught) {
        document.querySelector('.istanbulLiteCoverageDiv').innerHTML =
          '<pre>' + errorCaught.stack.replace((/</g), '&lt') + '</pre>';
      }
    };
    // init event handling
    document.querySelector('.istanbulLiteInputTextarea').addEventListener(
      'keyup',
      app.coverAndEval
    );
    // cover and eval input
    app.coverAndEval();



  // run node js-env code
  } else {
    // require modules
    app.fs = require('fs');
    app.http = require('http');
    app.url = require('url');
    // init assets
    app['/'] =
      (String() +
/* jslint-ignore-begin */
'<!DOCTYPE html>\n' +
'<html>\n' +
'<head>\n' +
  '<meta charset="UTF-8">\n' +
  '<title>\n' +
  '{{envDict.npm_package_name}} [{{envDict.npm_package_version}}]\n' +
  '</title>\n' +
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
'</head>\n' +
'<body>\n' +
  '<div class="ajaxProgressDiv" style="display: none;">\n' +
  '<div class="ajaxProgressBarDiv ajaxProgressBarDivLoading">loading</div>\n' +
  '</div>\n' +
  '<h1>{{envDict.npm_package_name}} [{{envDict.npm_package_version}}]</h1>\n' +
  '<h3>{{envDict.npm_package_description}}</h3>\n' +
  '<div>edit or paste script below to cover and test</div>\n' +
  '<textarea class="istanbulLiteInputTextarea">\n' +
'if (true) {\n' +
  'console.log("hello");\n' +
'} else {\n' +
  'console.log("bye");\n' +
'}\n' +
  '</textarea>\n' +
  '<div class="istanbulLiteCoverageDiv"></div>\n' +
  '<div class="testReportDiv"></div>\n' +
  '<script src="/assets/istanbul-lite.js"></script>\n' +
  '<script src="/assets/utility2.js"></script>\n' +
  '<script>\n' +
  'window.utility2 = window.utility2 || {};\n' +
  'window.utility2.envDict = {\n' +
    'npm_package_description: "{{envDict.npm_package_description}}",\n' +
    'npm_package_name: "{{envDict.npm_package_name}}",\n' +
    'npm_package_version: "{{envDict.npm_package_version}}"\n' +
  '};\n' +
  'document.querySelector(\n' +
    '".istanbulLiteInputTextarea"\n' +
  ').addEventListener("keyup", window.istanbul_lite.coverAndEval);\n' +
  'window.istanbul_lite.coverAndEval();\n' +
  '</script>\n' +
  '<script src="/test/test.js"></script>\n' +
'</body>\n' +
'</html>\n' +
/* jslint-ignore-end */
      String()).replace((/\{\{envDict\.\w+?\}\}/g), function (match0) {
        switch (match0) {
        case '{{envDict.npm_package_description}}':
          return 'coverage demo';
        case '{{envDict.npm_package_name}}':
          return 'istanbul-lite';
        case '{{envDict.npm_package_version}}':
          return '0.0.1';
        }
      });
    app['/assets/istanbul-lite.js'] =
      app.istanbul_lite['/assets/istanbul-lite.js'];
    app['/assets/utility2.css'] =
      '';
    app['/assets/utility2.js'] =
      '';
    app['/test/test.js'] =
      app.fs.readFileSync(__filename);
    // create server
    app.server = app.http.createServer(function (request, response) {
      switch (app.url.parse(request.url).pathname) {
      // serve assets
      case '/':
      case '/assets/istanbul-lite.js':
      case '/assets/utility2.css':
      case '/assets/utility2.js':
      case '/test/test.js':
        response.end(app[app.url.parse(request.url).pathname]);
        break;
      // default to 404 Not Found
      default:
        response.statusCode = 404;
        response.end('404 Not Found');
      }
    });
    // start server
    app.serverPort = 1337;
    console.log('server starting on port ' + app.serverPort);
    app.server.listen(app.serverPort, function () {
      // this internal build-code will screen-capture the server and then exit
      if (process.env.MODE_BUILD === 'testExampleJs') {
        console.log('server stopping on port ' + app.serverPort);
        require(
          process.env.npm_config_dir_utility2 + '/index.js'
        ).phantomScreenCapture({
          url: 'http://localhost:' + app.serverPort
        }, process.exit);
      }
    });
  }
}());
```
#### output from shell
![screen-capture](https://kaizhu256.github.io/node-istanbul-lite/build/screen-capture.testExampleJs.png)
#### output from [phantomjs-lite](https://www.npmjs.com/package/phantomjs-lite)
![screen-capture](https://kaizhu256.github.io/node-istanbul-lite/build/screen-capture.testExampleJs.slimerjs.png)



# quickstart to run traditional offline-coverage
#### follow the instruction in this script
```
# example.sh

# this shell script will
  # 1. npm install istanbul-lite
  # 2. create test-script foo.js
  # 3. run offline-coverage for foo.js and create an offline-report

# instruction:
  # 1. copy and paste this entire shell script into a console and press enter
  # 2. open ./html-report/index.html to view coverage of foo.js

shExampleSh() {
  # 1. npm install istanbul-lite
  npm install istanbul-lite || return $?

  # 2. create test-script foo.js
  local SCRIPT="if (true) { console.log('hello'); }" || return $?
  SCRIPT="$SCRIPT else { console.log('bye'); }" || return $?
  printf "$SCRIPT" > foo.js || return $?

  # 3. run offline-coverage for foo.js and create an offline-report
  node_modules/.bin/istanbul-lite cover foo.js || return $?
}
shExampleSh
```
#### output from shell
![screen-capture](https://kaizhu256.github.io/node-istanbul-lite/build/screen-capture.testExampleSh.png)
#### output from [istanbul-lite](https://www.npmjs.com/package/istanbul-lite)
![screen-capture](https://kaizhu256.github.io/node-istanbul-lite//build/screen-capture.testExampleSh.slimerjs._2Ftmp_2Fapp_2Fhtml-report_2Fapp_2Ffoo.js.html.png)



# npm-dependencies
- none



# package-listing
[![screen-capture](https://kaizhu256.github.io/node-istanbul-lite/build/screen-capture.gitLsTree.png)](https://github.com/kaizhu256/node-istanbul-lite)



# package.json
```
{
  "_packageJson": true,
  "author": "kai zhu <kaizhu256@gmail.com>",
  "bin": { "istanbul-lite" : "index.js" },
  "description": "lightweight browser version of istanbul coverage with zero npm dependencies",
  "devDependencies": {
    "utility2": "2015.3.2-12",
    "phantomjs-lite": "^2015.1.4-103"
  },
  "engines": { "node": ">=0.10 <=0.12" },
  "keywords": [
    "browser",
    "code",
    "cover",
    "coverage",
    "istanbul",
    "instrument",
    "lightweight",
    "utility2",
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
    "build2": "node_modules/.bin/utility2 shRun shBuild",
    "start": "npm_config_mode_auto_restart=1 node_modules/.bin/utility2 shRun node test.js",
    "test": "node_modules/.bin/utility2 shRun shReadmePackageJsonExport && mkdir -p tmp && node -e \"require('fs').writeFileSync('tmp/covered.istanbul-lite.js', '#!/usr/bin/env node\\n' + require('./index.js').instrumentSync(require('fs').readFileSync('./index.js', 'utf8'), process.cwd() + '/index.js'), { mode: 0755 })\" && npm_config_file_istanbul='tmp/covered.istanbul-lite.js' node_modules/.bin/utility2 shRun shNpmTest test.js"
  },
  "version": "2015.3.2-12"
}
```



# todo
- jslint - use 4 space indent and 80 col maxlen
- none



# changelog of last 50 commits
![screen-capture](https://kaizhu256.github.io/node-istanbul-lite/build/screen-capture.gitLog.png)



# internal build-script
```
# build.sh
# this shell script will run the build process for this package
shBuild() {
  # init env
  export npm_config_mode_slimerjs=1 || return $?
  . node_modules/.bin/utility2 && shInit || return $?

  # run npm-test on published package
  shRun shNpmTestPublished || return $?

  # test example js script
  MODE_BUILD=testExampleJs\
  shRunScreenCapture shReadmeTestJs example.js || return $?
  # copy phantomjs screen-capture to $npm_config_dir_build
  cp /tmp/app/tmp/build/screen-capture.*.png $npm_config_dir_build || return $?

  # test example shell script
  MODE_BUILD=testExampleSh\
  shRunScreenCapture shReadmeTestSh example.sh || return $?
  # screen-capture example.sh coverage
  MODE_BUILD=testExampleSh shRun shPhantomScreenCapture\
    /tmp/app/html-report/app/foo.js.html || :

  # run npm-test
  MODE_BUILD=npmTest shRunScreenCapture npm test || return $?

  # deploy app to heroku
  shRun shHerokuDeploy hrku01-istanbul-lite-$CI_BRANCH || return $?

  # test deployed app to heroku
  if [ "$CI_BRANCH" = alpha ] ||
    [ "$CI_BRANCH" = beta ] ||
    [ "$CI_BRANCH" = master ]
  then
    local TEST_URL="https://hrku01-istanbul-lite-$CI_BRANCH.herokuapp.com" ||\
      return $?
    TEST_URL="$TEST_URL?modeTest=phantom&_testSecret={{_testSecret}}" ||\
      return $?
    MODE_BUILD=herokuTest shRun shPhantomTest $TEST_URL || return $?
  fi

  # if number of commits > 1024, then squash older commits
  shRun shGitBackupAndSquashAndPush 1024 > /dev/null || return $?
}
shBuild

# save exit-code
EXIT_CODE=$?

shBuildCleanup() {
  # this function will cleanup build-artifacts in local build dir
  # init env
  . node_modules/.bin/utility2 && shInit || return $?
  # create package-listing
  MODE_BUILD=gitLsTree shRunScreenCapture shGitLsTree || return $?
  # create recent changelog of last 50 commits
  MODE_BUILD=gitLog shRunScreenCapture git log -50 --pretty="%ai\u000a%B" ||\
    return $?
  # add black border around phantomjs screen-capture
  shBuildPrint phantomScreenCapture\
    "add black border around phantomjs screen-capture" || return $?
  local FILE_LIST="$(ls\
    $npm_config_dir_build/screen-capture.*.phantomjs*.png\
    $npm_config_dir_build/screen-capture.*.slimerjs*.png\
    2>/dev/null)" || return $?
  if [ "$FILE_LIST" ] && (mogrify --version > /dev/null 2>&1)
  then
    printf "$FILE_LIST" |\
      xargs -n 1 mogrify -frame 1 -mattecolor black || return $?
  fi
}
shBuildCleanup || exit $?

shBuildGithubUploadCleanup() {
  # this function will cleanup build-artifacts in local gh-pages repo
  return
}

# upload build-artifacts to github,
# and if number of commits > 16, then squash older commits
COMMIT_LIMIT=16 shRun shBuildGithubUpload || exit $?

# exit with $EXIT_CODE
exit $EXIT_CODE
```
