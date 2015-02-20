istanbul-lite [![NPM](https://img.shields.io/npm/v/istanbul-lite.svg?style=flat-square)](https://www.npmjs.org/package/istanbul-lite)
===========
lightweight browser/nodejs version of istanbul coverage with zero dependencies



## build status [![travis-ci.org build status](https://api.travis-ci.org/kaizhu256/node-istanbul-lite.svg)](https://travis-ci.org/kaizhu256/node-istanbul-lite)

[![build commit status](https://kaizhu256.github.io/node-istanbul-lite/build.badge.svg)](https://travis-ci.org/kaizhu256/node-istanbul-lite)

 git branch | test-report | coverage | build artifact
:----------:|:-----------:|:---------------:|:--------------:
[master](https://github.com/kaizhu256/node-istanbul-lite/tree/master) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/master/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/master/test-report.html) | [![istanbul-lite coverage](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/master/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/master/coverage.html/node-istanbul-lite/index.html) | [![build artifacts](https://kaizhu256.github.io/node-istanbul-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build.travis-ci.org/master)
[beta](https://github.com/kaizhu256/node-istanbul-lite/tree/beta) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/beta/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/beta/test-report.html) | [![istanbul-lite coverage](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/beta/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/beta/coverage.html/node-istanbul-lite/index.html) | [![build artifacts](https://kaizhu256.github.io/node-istanbul-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build.travis-ci.org/beta)
|[alpha](https://github.com/kaizhu256/node-istanbul-lite/tree/alpha) | [![test-report](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/alpha/test-report.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/alpha/test-report.html) | [![istanbul-lite coverage](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/alpha/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build.travis-ci.org/alpha/coverage.html/node-istanbul-lite/index.html) | [![build artifacts](https://kaizhu256.github.io/node-istanbul-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-istanbul-lite/tree/gh-pages/build.travis-ci.org/alpha)|



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
#### output
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
#### output
![screen-capture](https://kaizhu256.github.io/node-istanbul-lite/screen-capture.testExampleJs.png)



## npm dependencies
- none



## package content
[![screen-capture](https://kaizhu256.github.io/node-istanbul-lite/screen-capture.gitLsTree.png)](https://github.com/kaizhu256/node-istanbul-lite)



## build script
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



## recent changelog
#### todo
- add web demo

#### 2015.2
- add quickstart example
- add run-with-cover

#### 2014.8
- add browser code and tests
- change api from exports.instrument to exports.instrumentSync,
  which closely matches istanbul's Instrumenter.instrumentSync method

#### 2014.7
- initial commit
