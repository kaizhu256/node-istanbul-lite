istanbul-lite [![NPM](https://img.shields.io/npm/v/istanbul-lite.svg?style=flat-square)](https://www.npmjs.org/package/istanbul-lite)
=============
lightweight browser/nodejs version of istanbul coverage with zero dependencies



## build-status [![travis-ci.org build-status](https://api.travis-ci.org/kaizhu256/node-istanbul-lite.svg)](https://travis-ci.org/kaizhu256/node-istanbul-lite) ![codeship.io build-status](https://codeship.com/projects/df8f44c0-2ee3-0132-0af5-6a016ae0b812/status)

[![build commit status](https://kaizhu256.github.io/node-istanbul-lite/build/build.badge.svg)](https://travis-ci.org/kaizhu256/node-istanbul-lite)

| git-branch | test-server | test-report | coverage | build-artifacts |
|:----------:|:-----------:|:-----------:|:--------:|:---------------:|
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
/*
  example.js

  this example nodejs code runs coverage on itself

  instruction
  1. save this nodejs code as example.js
  2. run the following shell command:
     $ npm install istanbul-lite && node example.js
*/
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
[![screen-capture](https://kaizhu256.github.io/node-istanbul-lite/build/screen-capture.gitLsTree.png)](https://github.com/kaizhu256/node-istanbul-lite)



## npm-dependencies
- none



## todo
- add web demo



## changelog of last 50 commits
![screen-capture](https://kaizhu256.github.io/node-istanbul-lite/build/screen-capture.gitLog.png)



## internal build-script
```
# build.sh
# this shell script runs the build process for this package
shBuild() {
  # init env
  . node_modules/.bin/utility2 && shInit || return $?
  # run npm test on published package
  shRun shNpmTestPublished || return $?
  # test example script
  MODE_BUILD=testExampleJs shRunScreenCapture shTestScriptJs example.js ||\
    return $?
  #!! # screen-capture example.js coverage
  #!! MODE_BUILD=testExampleJs shRun shPhantomScreenCapture\
    #!! /tmp/app/.tmp/build/coverage.html/app/example.js.html
  #!! # copy phantomjs screen-capture to $npm_package_dir_build
  #!! cp /tmp/app/.tmp/build/screen-capture.*.png $npm_package_dir_build ||\
    #!! return $?
  # run npm test
  MODE_BUILD=npmTest shRunScreenCapture npm test || return $?
  #!! # deploy to heroku
  #!! if [ "$TRAVIS" ]
  #!! then
    #!! shRun shTestHeroku || return $?
    #!! # if number of commits > 1000, then squash older commits
    #!! shRun shGitBackupAndSquashAndPush 1000 > /dev/null || return $?
  #!! fi
}
# run build
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
    $npm_package_dir_build/screen-capture.*.phantomjs*.png\
    $npm_package_dir_build/screen-capture.*.slimerjs*.png\
    2>/dev/null)" || return $?
  if [ "$FILE_LIST" ] && (mogrify --version > /dev/null 2>&1)
  then
    printf "$FILE_LIST" |\
      xargs -n 1 mogrify -frame 1 -mattecolor black || return $?
  fi
}
shBuildCleanup
# upload build-artifacts to github
if [ "$TRAVIS" ]
then
  shBuildGithubUploadCleanup() {
    # this function will cleanup build-artifacts in local gh-pages repo
    return
  }
  # if number of commits > 16, then squash older commits
  COMMIT_LIMIT=16 shRun shBuildGithubUpload || exit $?
fi
# exit with $EXIT_CODE
exit $EXIT_CODE
```
