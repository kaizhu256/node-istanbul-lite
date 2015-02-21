istanbul-lite [![NPM](https://img.shields.io/npm/v/istanbul-lite.svg?style=flat-square)](https://www.npmjs.org/package/istanbul-lite)
=============
lightweight browser/nodejs version of istanbul coverage with zero dependencies



## build-status [![travis-ci.org build-status](https://api.travis-ci.org/kaizhu256/node-istanbul-lite.svg)](https://travis-ci.org/kaizhu256/node-istanbul-lite) ![codeship.io build-status](https://codeship.com/projects/df8f44c0-2ee3-0132-0af5-6a016ae0b812/status)

[![build commit status](https://kaizhu256.github.io/node-istanbul-lite/build/build.badge.svg)](https://travis-ci.org/kaizhu256/node-istanbul-lite)

| git-branch | test-server | test-report | coverage | build-artifacts |
|:----------:|:-----------:|:-----------:|:---------:|:---------------:|
|[master](https://github.com/kaizhu256/node-istanbul-lite/tree/master) | [![heroku.com test-server](https://kaizhu256.github.io/node-istanbul-lite/heroku-logo.75x25.png)](https://hrku01-istanbul-lite-master.herokuapp.com?modeTest=1) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/test-report.html) | [![istanbul-lite coverage](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..master..travis-ci.org/coverage.html/node-istanbul-lite/index.html) | [![build-artifacts](https://kaizhu256.github.io/node-istanbul-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build..master..travis-ci.org)|
|[beta](https://github.com/kaizhu256/node-istanbul-lite/tree/beta) | [![heroku.com test-server](https://kaizhu256.github.io/node-istanbul-lite/heroku-logo.75x25.png)](https://hrku01-istanbul-lite-beta.herokuapp.com?modeTest=1) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/test-report.html) | [![istanbul-lite coverage](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/coverage.html/node-istanbul-lite/index.html) | [![build-artifacts](https://kaizhu256.github.io/node-istanbul-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build..beta..travis-ci.org)|
|[alpha](https://github.com/kaizhu256/node-istanbul-lite/tree/alpha) | [![heroku.com test-server](https://kaizhu256.github.io/node-istanbul-lite/heroku-logo.75x25.png)](https://hrku01-istanbul-lite-alpha.herokuapp.com?modeTest=1) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/test-report.html) | [![istanbul-lite coverage](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build..alpha..travis-ci.org/coverage.html/node-istanbul-lite/index.html) | [![build-artifacts](https://kaizhu256.github.io/node-istanbul-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build..alpha..travis-ci.org)|



## quickstart
```
# quickstart.sh
shQuickstartSh() {
  # npm install istanbul-lite
  npm install istanbul-lite || return $?
  # create foo.js
  printf "if (true) { console.log('hello'); } else { console.log('bye'); }" > foo.js || return $?
  # init coverage-dir
  export npm_config_coverage_dir=coverage-dir
  # run coverage on foo.js
  node_modules/.bin/istanbul-lite cover foo.js || return $?
  # create coverage
  node_modules/.bin/istanbul-lite report || return $?
}
shQuickstartSh
```
#### output from shell
![screen-capture](https://kaizhu256.github.io/node-istanbul-lite/screen-capture.testQuickstartSh.png)



## quickstart nodejs code
```
// example.js
// this example nodejs code runs coverage on itself
// 1. create a clean app directory (e.g /tmp/app)
// 2. inside app directory, save this nodejs code as example.js
// 3. inside app directory, run the following shell command:
//    $ npm install istanbul-lite && node example.js
/*jslint
  evil: true,
  indent:2,
  node: true, nomen: true,
  stupid: true
*/
(function () {
  'use strict';
  // require modules
  var fs, instrumentedScript, istanbul_lite;
  fs = require('fs');
  istanbul_lite = require('istanbul-lite');
  // instrument this file
  instrumentedScript = istanbul_lite.instrumenter.instrumentSync(
    fs.readFileSync(__filename, 'utf8'),
    __filename
  );
  if (!global.__coverage__) {
    // re-run this file with coverage
    eval(instrumentedScript);
    // create coverage in coverage-dir
    istanbul_lite.coverageReportWriteSync({
      dir: __dirname + '/coverage-dir'
    });
  }
}());
```
#### output from shell
![screen-capture](https://kaizhu256.github.io/node-istanbul-lite/screen-capture.testExampleJs.png)



## package-listing
[![screen-capture](https://kaizhu256.github.io/node-utility2/build/screen-capture.gitLsTree.png)](https://github.com/kaizhu256/node-utility2)



## npm-dependencies
- none



## todo
- update internal build to use utility2@2015.2.20-12
- add web demo






## changelog of last 50 commits
![screen-capture](https://kaizhu256.github.io/node-utility2/build/screen-capture.gitLog.png)



## internal build-script
```
# build-ci.sh
# this shell code runs the ci-build process for this package
shBuildCi() {
  # init env
  . node_modules/.bin/utility2 && shInit && mkdir -p .tmp/build/coverage-report.html || return $?
  # create package content listing
  MODE_CI_BUILD=gitLsTree shRunScreenCapture git ls-tree --abbrev=8 --full-name -l -r HEAD || return $?
  # run npm test on published package
  shNpmTestPublished
  # test quickstart
  MODE_CI_BUILD=testQuickstartSh shRunScreenCapture shTestScriptSh quickstart.sh || return $?
  # test example code
  MODE_CI_BUILD=testExampleJs shRunScreenCapture shTestScriptJs example.js || return $?
  # run npm test
  MODE_CI_BUILD=npmTest shRunScreenCapture npm test || return $?
}
# run ci-build
shBuildCi
# save exit-code
EXIT_CODE=$?
# upload build artifacts to github
if [ "$TRAVIS" ]
then
  shRun shBuildGithubUpload || exit $?
fi
# exit with $EXIT_CODE
exit $EXIT_CODE
```
