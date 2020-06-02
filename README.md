# istanbul-lite
this zero-dependency package will provide browser-compatible version of istanbul coverage-tool (v0.4.5), with working web-demo

# live web demo
- [https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app)

[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithub.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png)](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app)



[![travis-ci.org build-status](https://api.travis-ci.org/kaizhu256/node-istanbul-lite.svg)](https://travis-ci.org/kaizhu256/node-istanbul-lite) [![coverage](https://kaizhu256.github.io/node-istanbul-lite/build/coverage.badge.svg)](https://kaizhu256.github.io/node-istanbul-lite/build/coverage.html/index.html)

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
1. [documentation](#documentation)
1. [quickstart standalone app](#quickstart-standalone-app)
1. [quickstart example.js](#quickstart-examplejs)
1. [extra screenshots](#extra-screenshots)
1. [package.json](#packagejson)
1. [changelog of last 50 commits](#changelog-of-last-50-commits)
1. [internal build script](#internal-build-script)
1. [misc](#misc)



# cdn download
- [https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app/assets.istanbul.js](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app/assets.istanbul.js)



# documentation
#### api doc
- [https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/apidoc.html](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/apidoc.html)

[![apidoc](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/apidoc.html)

#### cli help
![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.npmPackageCliHelp.svg)

#### changelog 2020.5.31
- npm publish 2020.5.31
- replace process.cwd() with path.resolve()
- replace function fsReadFileOrEmptyStringSync with fsReadFileOrDefaultSync
- remove dependency to file lib.swgg.js
- istanbul - inline function templateRender
- none

#### todo
- istanbul - inline function templateRender
- istanbul - remove filesUnderRoot subroutine
- none

#### this package requires
- darwin or linux os

#### additional info
- istanbul code derived from https://github.com/gotwarlost/istanbul/tree/v0.4.5



# quickstart standalone app
#### to run this example, follow instruction in script below
- [assets.app.js](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app/assets.app.js)
```shell
# example.sh

# this shell script will download and run a web-demo of istanbul-lite as a standalone app

# 1. download standalone app
curl -O https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/app/assets.app.js
# 2. run standalone app
PORT=8081 node ./assets.app.js
# 3. open a browser to http://127.0.0.1:8081 and play with web-demo
# 4. edit file assets.app.js to suit your needs
```

#### output from browser
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleSh.browser.%252F.png)](https://kaizhu256.github.io/node-istanbul-lite/build/app/assets.example.html)

#### output from shell
![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleSh.svg)



# quickstart example.js
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleJs.browser.%252F.png)](https://kaizhu256.github.io/node-istanbul-lite/build/app/assets.example.html)

#### to run this example, follow instruction in script below
- [example.js](https://kaizhu256.github.io/node-istanbul-lite/build..beta..travis-ci.org/example.js)
```javascript
/*
example.js

this script will run a web-demo of istanbul-lite

instruction
    1. save this script as example.js
    2. run shell-command:
        $ npm install istanbul-lite && \
            PORT=8081 node example.js
    3. open a browser to http://127.0.0.1:8081 and play with web-demo
    4. edit this script to suit your needs
*/



/* istanbul instrument in package istanbul */
// assets.utility2.header.js - start
/* jslint utility2:true */
/* istanbul ignore next */
(function (globalThis) {
    "use strict";
    let consoleError;
    let debugName;
    let local;
    debugName = "debug" + String("Inline");
    // init globalThis
    globalThis.globalThis = globalThis.globalThis || globalThis;
    // init debug_inline
    if (!globalThis[debugName]) {
        consoleError = console.error;
        globalThis[debugName] = function (...argList) {
        /*
         * this function will both print <argList> to stderr
         * and return <argList>[0]
         */
            consoleError("\n\n" + debugName);
            consoleError(...argList);
            consoleError("\n");
            return argList[0];
        };
    }
    String.prototype.trimEnd = (
        String.prototype.trimEnd || String.prototype.trimRight
    );
    String.prototype.trimStart = (
        String.prototype.trimStart || String.prototype.trimLeft
    );
    // init local
    local = {};
    local.local = local;
    globalThis.globalLocal = local;
    // init isBrowser
    local.isBrowser = (
        typeof globalThis.XMLHttpRequest === "function"
        && globalThis.navigator
        && typeof globalThis.navigator.userAgent === "string"
    );
    // init isWebWorker
    local.isWebWorker = (
        local.isBrowser && typeof globalThis.importScripts === "function"
    );
    // init function
    local.assertOrThrow = function (passed, msg) {
    /*
     * this function will throw err.<msg> if <passed> is falsy
     */
        if (passed) {
            return;
        }
        throw (
            (
                msg
                && typeof msg.message === "string"
                && typeof msg.stack === "string"
            )
            // if msg is err, then leave as is
            ? msg
            : new Error(
                typeof msg === "string"
                // if msg is a string, then leave as is
                ? msg
                // else JSON.stringify msg
                : JSON.stringify(msg, undefined, 4)
            )
        );
    };
    local.coalesce = function (...argList) {
    /*
     * this function will coalesce null, undefined, or "" in <argList>
     */
        let arg;
        let ii;
        ii = 0;
        while (ii < argList.length) {
            arg = argList[ii];
            if (arg !== null && arg !== undefined && arg !== "") {
                break;
            }
            ii += 1;
        }
        return arg;
    };
    local.fsReadFileOrDefaultSync = function (pathname, type, dflt) {
    /*
     * this function will sync-read <pathname> with given <type> and <dflt>
     */
        let fs;
        // do nothing if module does not exist
        try {
            fs = require("fs");
        } catch (ignore) {
            return dflt;
        }
        pathname = require("path").resolve(pathname);
        // try to read pathname
        try {
            return (
                type === "json"
                ? JSON.parse(fs.readFileSync(pathname, "utf8"))
                : fs.readFileSync(pathname, type)
            );
        } catch (ignore) {
            return dflt;
        }
    };
    local.fsRmrfSync = function (pathname) {
    /*
     * this function will sync "rm -rf" <pathname>
     */
        let child_process;
        // do nothing if module does not exist
        try {
            child_process = require("child_process");
        } catch (ignore) {
            return;
        }
        pathname = require("path").resolve(pathname);
        if (process.platform !== "win32") {
            child_process.spawnSync("rm", [
                "-rf", pathname
            ], {
                stdio: [
                    "ignore", 1, 2
                ]
            });
            return;
        }
        try {
            child_process.spawnSync("rd", [
                "/s", "/q", pathname
            ], {
                stdio: [
                    "ignore", 1, "ignore"
                ]
            });
        } catch (ignore) {}
    };
    local.fsWriteFileWithMkdirpSync = function (pathname, data, msg) {
    /*
     * this function will sync write <data> to <pathname> with "mkdir -p"
     */
        let fs;
        let success;
        // do nothing if module does not exist
        try {
            fs = require("fs");
        } catch (ignore) {
            return;
        }
        pathname = require("path").resolve(pathname);
        // try to write pathname
        try {
            fs.writeFileSync(pathname, data);
            success = true;
        } catch (ignore) {
            // mkdir -p
            fs.mkdirSync(require("path").dirname(pathname), {
                recursive: true
            });
            // re-write pathname
            fs.writeFileSync(pathname, data);
            success = true;
        }
        if (success && msg) {
            console.error(msg.replace("{{pathname}}", pathname));
        }
        return success;
    };
    local.identity = function (val) {
    /*
     * this function will return <val>
     */
        return val;
    };
    local.nop = function () {
    /*
     * this function will do nothing
     */
        return;
    };
    local.objectAssignDefault = function (tgt = {}, src = {}, depth = 0) {
    /*
     * this function will if items from <tgt> are null, undefined, or "",
     * then overwrite them with items from <src>
     */
        let recurse;
        recurse = function (tgt, src, depth) {
            Object.entries(src).forEach(function ([
                key, bb
            ]) {
                let aa;
                aa = tgt[key];
                if (aa === undefined || aa === null || aa === "") {
                    tgt[key] = bb;
                    return;
                }
                if (
                    depth !== 0
                    && typeof aa === "object" && aa && !Array.isArray(aa)
                    && typeof bb === "object" && bb && !Array.isArray(bb)
                ) {
                    recurse(aa, bb, depth - 1);
                }
            });
        };
        recurse(tgt, src, depth | 0);
        return tgt;
    };
    // require builtin
    if (!local.isBrowser) {
        local.assert = require("assert");
        local.buffer = require("buffer");
        local.child_process = require("child_process");
        local.cluster = require("cluster");
        local.crypto = require("crypto");
        local.dgram = require("dgram");
        local.dns = require("dns");
        local.domain = require("domain");
        local.events = require("events");
        local.fs = require("fs");
        local.http = require("http");
        local.https = require("https");
        local.net = require("net");
        local.os = require("os");
        local.path = require("path");
        local.querystring = require("querystring");
        local.readline = require("readline");
        local.repl = require("repl");
        local.stream = require("stream");
        local.string_decoder = require("string_decoder");
        local.timers = require("timers");
        local.tls = require("tls");
        local.tty = require("tty");
        local.url = require("url");
        local.util = require("util");
        local.vm = require("vm");
        local.zlib = require("zlib");
    }
}((typeof globalThis === "object" && globalThis) || window));
// assets.utility2.header.js - end



/* jslint utility2:true */
(function (local) {
"use strict";



// run shared js-env code - init-before
(function () {
// init local
local = (
    globalThis.utility2_rollup
    || globalThis.utility2_istanbul
    || require("istanbul-lite")
);
// init exports
globalThis.local = local;
}());



// run browser js-env code - init-test
/* istanbul ignore next */
(function () {
if (!local.isBrowser) {
    return;
}
// log stderr and stdout to #outputStdout1
["error", "log"].forEach(function (key) {
    let elem;
    let fnc;
    elem = document.querySelector("#outputStdout1");
    if (!elem) {
        return;
    }
    fnc = console[key];
    console[key] = function (...argList) {
        fnc(...argList);
        // append text to #outputStdout1
        elem.textContent += argList.map(function (arg) {
            return (
                typeof arg === "string"
                ? arg
                : JSON.stringify(arg, undefined, 4)
            );
        }).join(" ").replace((
            /\u001b\[\d*m/g
        ), "") + "\n";
        // scroll textarea to bottom
        elem.scrollTop = elem.scrollHeight;
    };
});
local.objectAssignDefault(local, globalThis.domOnEventDelegateDict);
globalThis.domOnEventDelegateDict = local;
}());



// run node js-env code - init-test
/* istanbul ignore next */
(function () {
if (local.isBrowser) {
    return;
}
// init exports
module.exports = local;
// init assetsDict
local.assetsDict = local.assetsDict || {};
/* jslint ignore:start */
local.assetsDict["/assets.index.template.html"] = '\
<!doctype html>\n\
<html lang="en">\n\
<head>\n\
<meta charset="utf-8">\n\
<meta name="viewport" content="width=device-width, initial-scale=1">\n\
<!-- "assets.utility2.template.html" -->\n\
<title>{{env.npm_package_name}} ({{env.npm_package_version}})</title>\n\
<style>\n\
/* jslint utility2:true */\n\
/*csslint\n\
*/\n\
/* csslint ignore:start */\n\
*,\n\
*:after,\n\
*:before {\n\
    box-sizing: border-box;\n\
}\n\
.uiAnimateSlide {\n\
    overflow-y: hidden;\n\
    transition: max-height ease-in 250ms, min-height ease-in 250ms, padding-bottom ease-in 250ms, padding-top ease-in 250ms;\n\
}\n\
/* csslint ignore:end */\n\
@keyframes uiAnimateSpin {\n\
0% {\n\
    transform: rotate(0deg);\n\
}\n\
100% {\n\
    transform: rotate(360deg);\n\
}\n\
}\n\
a {\n\
    overflow-wrap: break-word;\n\
}\n\
body {\n\
    background: #f7f7f7;\n\
    font-family: Arial, Helvetica, sans-serif;\n\
    font-size: small;\n\
    margin: 0 40px;\n\
}\n\
body > div,\n\
body > input,\n\
body > pre,\n\
body > .button,\n\
body > .textarea {\n\
    margin-bottom: 20px;\n\
    margin-top: 0;\n\
}\n\
body > input,\n\
body > .button {\n\
    width: 20rem;\n\
}\n\
body > .readonly {\n\
    background: #ddd;\n\
}\n\
body > .textarea {\n\
    height: 10rem;\n\
    resize: vertical;\n\
    width: 100%;\n\
}\n\
code,\n\
pre,\n\
.textarea {\n\
    font-family: Consolas, Menlo, monospace;\n\
    font-size: smaller;\n\
}\n\
pre {\n\
    overflow-wrap: break-word;\n\
    white-space: pre-wrap;\n\
}\n\
.button {\n\
    background: #ddd;\n\
    border: 1px solid #999;\n\
    color: #000;\n\
    cursor: pointer;\n\
    display: inline-block;\n\
    padding: 2px 5px;\n\
    text-align: center;\n\
    text-decoration: none;\n\
}\n\
.button:hover {\n\
    background: #bbb;\n\
}\n\
.colorError {\n\
    color: #d00;\n\
}\n\
.textarea {\n\
    background: #fff;\n\
    border: 1px solid #999;\n\
    border-radius: 0;\n\
    cursor: auto;\n\
    overflow: auto;\n\
    padding: 2px;\n\
}\n\
.zeroPixel {\n\
    border: 0;\n\
    height: 0;\n\
    margin: 0;\n\
    padding: 0;\n\
    width: 0;\n\
}\n\
</style>\n\
</head>\n\
<body>\n\
<div class="uiAnimateSpin" style="animation: uiAnimateSpin 2s linear infinite; border: 5px solid #999; border-radius: 50%; border-top: 5px solid #7d7; display: none; height: 25px; vertical-align: middle; width: 25px;"></div>\n\
<script>\n\
/* jslint utility2:true */\n\
// init domOnEventWindowOnloadTimeElapsed\n\
(function () {\n\
/*\n\
 * this function will measure and print time-elapsed for window.onload\n\
 */\n\
    "use strict";\n\
    if (!(\n\
        typeof window === "object" && window && window.document\n\
        && typeof document.addEventListener === "function"\n\
    ) || window.domOnEventWindowOnloadTimeElapsed) {\n\
        return;\n\
    }\n\
    window.domOnEventWindowOnloadTimeElapsed = Date.now() + 100;\n\
    window.addEventListener("load", function () {\n\
        setTimeout(function () {\n\
            window.domOnEventWindowOnloadTimeElapsed = (\n\
                Date.now()\n\
                - window.domOnEventWindowOnloadTimeElapsed\n\
            );\n\
            console.error(\n\
                "domOnEventWindowOnloadTimeElapsed = "\n\
                + window.domOnEventWindowOnloadTimeElapsed\n\
            );\n\
        }, 100);\n\
    });\n\
}());\n\
\n\
\n\
\n\
// init domOnEventAjaxProgressUpdate\n\
(function () {\n\
/*\n\
 * this function will display incrementing ajax-progress-bar\n\
 */\n\
    "use strict";\n\
    let opt;\n\
    let styleBar0;\n\
    let styleBar;\n\
    let styleModal0;\n\
    let styleModal;\n\
    let timeStart;\n\
    let timerInterval;\n\
    let timerTimeout;\n\
    let tmp;\n\
    let width;\n\
    try {\n\
        if (\n\
            window.domOnEventAjaxProgressUpdate\n\
            || !document.getElementById("domElementAjaxProgressBar1").style\n\
        ) {\n\
            return;\n\
        }\n\
    } catch (ignore) {\n\
        return;\n\
    }\n\
    window.domOnEventAjaxProgressUpdate = function (gotoState, onError) {\n\
        gotoState = (gotoState | 0) + 1;\n\
        switch (gotoState) {\n\
        // ajaxProgress - show\n\
        case 1:\n\
            // init timerInterval and timerTimeout\n\
            if (!timerTimeout) {\n\
                timeStart = Date.now();\n\
                timerInterval = setInterval(opt, 2000, 1, onError);\n\
                timerTimeout = setTimeout(opt, opt.timeout, 2, onError);\n\
            }\n\
            // show ajaxProgressBar\n\
            if (width !== -1) {\n\
                styleBar.background = styleBar0.background;\n\
            }\n\
            setTimeout(opt, 50, gotoState, onError);\n\
            break;\n\
        // ajaxProgress - increment\n\
        case 2:\n\
            // show ajaxProgressBar\n\
            if (width === -1) {\n\
                break;\n\
            }\n\
            styleBar.background = styleBar0.background;\n\
            // reset ajaxProgress if it reaches end\n\
            if ((styleBar.width.slice(0, -1) | 0) > 95) {\n\
                width = 0;\n\
            }\n\
            // this algorithm will indefinitely increment ajaxProgress\n\
            // with successively smaller increments without reaching 100%\n\
            width += 1;\n\
            styleBar.width = Math.max(\n\
                100 - 75 * Math.exp(-0.125 * width),\n\
                styleBar.width.slice(0, -1) | 0\n\
            ) + "%";\n\
            // show ajaxProgressModal\n\
            styleModal.height = "100%";\n\
            styleModal.opacity = styleModal0.opacity;\n\
            if (!opt.cnt) {\n\
                setTimeout(opt, 0, gotoState, onError);\n\
            }\n\
            break;\n\
        // ajaxProgress - 100%\n\
        case 3:\n\
            width = -1;\n\
            styleBar.width = "100%";\n\
            setTimeout(opt, 1000, gotoState, onError);\n\
            break;\n\
        // ajaxProgress - hide\n\
        case 4:\n\
            // debug timeElapsed\n\
            tmp = Date.now();\n\
            console.error(\n\
                "domOnEventAjaxProgressUpdate - timeElapsed - "\n\
                + (tmp - timeStart)\n\
                + " ms"\n\
            );\n\
            // cleanup timerInterval and timerTimeout\n\
            timeStart = tmp;\n\
            clearInterval(timerInterval);\n\
            timerInterval = undefined;\n\
            clearTimeout(timerTimeout);\n\
            timerTimeout = undefined;\n\
            // hide ajaxProgressBar\n\
            styleBar.background = "transparent";\n\
            // hide ajaxProgressModal\n\
            styleModal.opacity = "0";\n\
            if (onError) {\n\
                onError();\n\
            }\n\
            setTimeout(opt, 250, gotoState);\n\
            break;\n\
        // ajaxProgress - reset\n\
        default:\n\
            opt.cnt = 0;\n\
            width = 0;\n\
            styleBar.width = "0%";\n\
            styleModal.height = "0";\n\
        }\n\
    };\n\
    opt = window.domOnEventAjaxProgressUpdate;\n\
    opt.end = function (onError) {\n\
        opt.cnt = 0;\n\
        window.domOnEventAjaxProgressUpdate(2, onError);\n\
    };\n\
    // init styleBar\n\
    styleBar = document.getElementById("domElementAjaxProgressBar1").style;\n\
    styleBar0 = Object.assign({}, styleBar);\n\
    Object.entries({\n\
        background: "#d00",\n\
        height: "2px",\n\
        left: "0",\n\
        margin: "0",\n\
        padding: "0",\n\
        position: "fixed",\n\
        top: "0",\n\
        transition: "background 250ms, width 750ms",\n\
        width: "0%",\n\
        "z-index": "1"\n\
    }).forEach(function (entry) {\n\
        styleBar[entry[0]] = styleBar[entry[0]] || entry[1];\n\
    });\n\
    // init styleModal\n\
    styleModal = document.getElementById("domElementAjaxProgressModal1") || {};\n\
    styleModal = styleModal.style || {};\n\
    styleModal0 = Object.assign({}, styleModal);\n\
    Object.entries({\n\
        height: "0",\n\
        left: "0",\n\
        margin: "0",\n\
        padding: "0",\n\
        position: "fixed",\n\
        top: "0",\n\
        transition: "opacity 125ms",\n\
        width: "100%",\n\
        "z-index": "1"\n\
    }).forEach(function (entry) {\n\
        styleModal[entry[0]] = styleModal[entry[0]] || entry[1];\n\
    });\n\
    // init state\n\
    width = 0;\n\
    opt.cnt = 0;\n\
    opt.timeout = 30000;\n\
    // init ajaxProgress\n\
    window.domOnEventAjaxProgressUpdate();\n\
}());\n\
\n\
\n\
\n\
// init domOnEventDelegateDict\n\
(function () {\n\
/*\n\
 * this function will handle delegated dom-evt\n\
 */\n\
    "use strict";\n\
    let debounce;\n\
    let timerTimeout;\n\
    debounce = function () {\n\
        return setTimeout(function () {\n\
            timerTimeout = undefined;\n\
        }, 30);\n\
    };\n\
    if (!(\n\
        typeof window === "object" && window && window.document\n\
        && typeof document.addEventListener === "function"\n\
    ) || window.domOnEventDelegateDict) {\n\
        return;\n\
    }\n\
    window.domOnEventDelegateDict = {};\n\
    window.domOnEventDelegateDict.domOnEventDelegate = function (evt) {\n\
        evt.targetOnEvent = evt.target.closest("[data-onevent]");\n\
        if (\n\
            !evt.targetOnEvent\n\
            || evt.targetOnEvent.dataset.onevent === "domOnEventNop"\n\
            || evt.target.closest(".disabled,.readonly")\n\
        ) {\n\
            return;\n\
        }\n\
        // filter evt-change\n\
        switch (evt.type !== "change" && evt.target.type) {\n\
        case "checkbox":\n\
        case "file":\n\
        case "select-one":\n\
        case "radio":\n\
            return;\n\
        }\n\
        // filter evt-keyup\n\
        switch (evt.type) {\n\
        case "keyup":\n\
            if (!timerTimeout && (\n\
                evt.target.tagName === "INPUT"\n\
                || evt.target.tagName === "TEXTAREA"\n\
            )) {\n\
                timerTimeout = debounce();\n\
                if (evt.target.dataset.valueOld !== evt.target.value) {\n\
                    evt.target.dataset.valueOld = evt.target.value;\n\
                    break;\n\
                }\n\
            }\n\
            return;\n\
        }\n\
        switch (evt.targetOnEvent.tagName) {\n\
        case "BUTTON":\n\
        case "FORM":\n\
            evt.preventDefault();\n\
            break;\n\
        }\n\
        evt.stopPropagation();\n\
        // handle domOnEventClickTarget\n\
        if (evt.targetOnEvent.dataset.onevent === "domOnEventClickTarget") {\n\
            document.querySelector(\n\
                evt.targetOnEvent.dataset.clickTarget\n\
            ).click();\n\
            return;\n\
        }\n\
        window.domOnEventDelegateDict[evt.targetOnEvent.dataset.onevent](evt);\n\
    };\n\
    // handle evt\n\
    [\n\
        "change",\n\
        "click",\n\
        "keyup",\n\
        "submit"\n\
    ].forEach(function (eventType) {\n\
        document.addEventListener(\n\
            eventType,\n\
            window.domOnEventDelegateDict.domOnEventDelegate\n\
        );\n\
    });\n\
}());\n\
\n\
\n\
\n\
// init domOnEventSelectAllWithinPre\n\
(function () {\n\
/*\n\
 * this function will limit select-all within <pre tabIndex="0"> elem\n\
 * https://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse\n\
 */\n\
    "use strict";\n\
    if (!(\n\
        typeof window === "object" && window && window.document\n\
        && typeof document.addEventListener === "function"\n\
    ) || window.domOnEventSelectAllWithinPre) {\n\
        return;\n\
    }\n\
    window.domOnEventSelectAllWithinPre = function (evt) {\n\
        let range;\n\
        let selection;\n\
        if (\n\
            evt && (evt.ctrlKey || evt.metaKey) && evt.key === "a"\n\
            && evt.target.closest("pre")\n\
        ) {\n\
            range = document.createRange();\n\
            range.selectNodeContents(evt.target.closest("pre"));\n\
            selection = window.getSelection();\n\
            selection.removeAllRanges();\n\
            selection.addRange(range);\n\
            evt.preventDefault();\n\
        }\n\
    };\n\
    // handle evt\n\
    document.addEventListener(\n\
        "keydown",\n\
        window.domOnEventSelectAllWithinPre\n\
    );\n\
}());\n\
</script>\n\
<h1>\n\
<!-- utility2-comment\n\
<a\n\
    {{#if env.npm_package_homepage}}\n\
    href="{{env.npm_package_homepage}}"\n\
    {{/if env.npm_package_homepage}}\n\
    target="_blank"\n\
>\n\
utility2-comment -->\n\
    {{env.npm_package_name}} ({{env.npm_package_version}})\n\
<!-- utility2-comment\n\
</a>\n\
utility2-comment -->\n\
</h1>\n\
<h3>{{env.npm_package_description}}</h3>\n\
<!-- utility2-comment\n\
<a class="button" download href="assets.app.js">download standalone app</a><br>\n\
<button class="button" data-onevent="testRunBrowser" id="buttonTestRun1">run browser-tests</button><br>\n\
<div class="uiAnimateSlide" id="htmlTestReport1" style="border-bottom: 0; border-top: 0; margin-bottom: 0; margin-top: 0; max-height: 0; padding-bottom: 0; padding-top: 0;"></div>\n\
utility2-comment -->\n\
\n\
\n\
\n\
<!-- custom-html-start -->\n\
<label>edit or paste script below to instrument and cover</label>\n\
<textarea class="textarea" data-onevent="domOnEventInputChange" id="inputTextarea1">\n\
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
<textarea class="onevent-reset-output readonly textarea" id="outputTextarea1" readonly></textarea>\n\
<label>stderr and stdout</label>\n\
<textarea class="readonly textarea" id="outputStdout1" readonly></textarea>\n\
<div id="htmlCoverageReport1"></div>\n\
<script>\n\
/* jslint utility2:true */\n\
window.addEventListener("load", function () {\n\
"use strict";\n\
let local;\n\
local = window.utility2_istanbul;\n\
local.domOnEventInputChange = function (evt) {\n\
    switch (evt.type + "." + evt.target.id) {\n\
    case "keyup.inputTextarea1":\n\
        // try to cleanup __coverage__\n\
        try {\n\
            delete globalThis.__coverage__["/inputTextarea1.js"];\n\
        } catch (ignore) {}\n\
        // try to cover and eval #inputTextarea1\n\
        try {\n\
            document.querySelector(\n\
                "#outputTextarea1"\n\
            ).textContent = local.istanbul.instrumentSync(\n\
                document.querySelector("#inputTextarea1").value,\n\
                "/inputTextarea1.js"\n\
            );\n\
            eval( // jslint ignore:line\n\
                document.querySelector("#outputTextarea1").value\n\
            );\n\
            document.querySelector(\n\
                "#htmlCoverageReport1"\n\
            ).innerHTML = local.istanbul.coverageReportCreate({\n\
                coverage: globalThis.__coverage__\n\
            });\n\
        } catch (errCaught) {\n\
            console.error(errCaught);\n\
        }\n\
        break;\n\
    }\n\
};\n\
// handle evt\n\
local.domOnEventInputChange({\n\
    target: {\n\
        id: "inputTextarea1"\n\
    },\n\
    type: "keyup"\n\
});\n\
});\n\
</script>\n\
<!-- custom-html-end -->\n\
\n\
\n\
\n\
<!-- utility2-comment\n\
{{#if isRollup}}\n\
<script src="assets.app.js"></script>\n\
{{#unless isRollup}}\n\
<script src="assets.utility2.rollup.js"></script>\n\
<script>window.utility2_onReadyBefore.cnt += 1;</script>\n\
<script src="jsonp.utility2.stateInit?callback=window.utility2.stateInit"></script>\n\
utility2-comment -->\n\
<script src="assets.istanbul.js"></script>\n\
<script src="assets.example.js"></script>\n\
<script src="assets.test.js"></script>\n\
<script>\n\
if (window.utility2_onReadyBefore) {\n\
    window.utility2_onReadyBefore();\n\
}\n\
</script>\n\
<!-- utility2-comment\n\
{{/if isRollup}}\n\
utility2-comment -->\n\
<div style="text-align: center;">\n\
    [\n\
    this app was created with\n\
    <a\n\
        href="https://github.com/kaizhu256/node-utility2" target="_blank"\n\
    >utility2</a>\n\
    ]\n\
</div>\n\
</body>\n\
</html>\n\
';
/* jslint ignore:end */
local.assetsDict["/assets.istanbul.js"] = (
    local.assetsDict["/assets.istanbul.js"]
    || local.fs.readFileSync(
        local.path.resolve(local.__dirname + "/lib.istanbul.js"),
        "utf8"
    ).replace((
        /^#!\//
    ), "// ")
);
/* validateLineSortedReset */
local.assetsDict["/"] = local.assetsDict[
    "/assets.index.template.html"
].replace((
    /\{\{env\.(\w+?)\}\}/g
), function (match0, match1) {
    switch (match1) {
    case "npm_package_description":
        return "the greatest app in the world!";
    case "npm_package_name":
        return "istanbul-lite";
    case "npm_package_nameLib":
        return "istanbul";
    case "npm_package_version":
        return "0.0.1";
    default:
        return match0;
    }
});
local.assetsDict["/assets.example.html"] = local.assetsDict["/"];
// init cli
if (module !== require.main || globalThis.utility2_rollup) {
    return;
}
local.assetsDict["/assets.example.js"] = (
    local.assetsDict["/assets.example.js"]
    || local.fs.readFileSync(__filename, "utf8")
);
local.assetsDict["/favicon.ico"] = local.assetsDict["/favicon.ico"] || "";
local.assetsDict["/index.html"] = local.assetsDict["/"];
// if $npm_config_timeout_exit exists,
// then exit this process after $npm_config_timeout_exit ms
if (Number(process.env.npm_config_timeout_exit)) {
    setTimeout(process.exit, Number(process.env.npm_config_timeout_exit));
}
// start server
if (globalThis.utility2_serverHttp1) {
    return;
}
process.env.PORT = process.env.PORT || "8081";
console.error("http-server listening on port " + process.env.PORT);
local.http.createServer(function (req, res) {
    req.urlParsed = local.url.parse(req.url);
    if (local.assetsDict[req.urlParsed.pathname] !== undefined) {
        res.end(local.assetsDict[req.urlParsed.pathname]);
        return;
    }
    res.statusCode = 404;
    res.end();
}).listen(process.env.PORT);
}());
}());
```

#### output from browser
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleJs.browser.%252F.png)](https://kaizhu256.github.io/node-istanbul-lite/build/app/assets.example.html)

#### output from shell
![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.testExampleJs.svg)



# extra screenshots
1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithub.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithub.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithub.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithub.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithubTest.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithubTest.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithubTest.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployGithubTest.browser.%252Fnode-istanbul-lite%252Fbuild%252Fapp.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHeroku.browser.%252F.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHeroku.browser.%252F.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHeroku.browser.%252F.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHeroku.browser.%252F.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHerokuTest.browser.%252F.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHerokuTest.browser.%252F.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHerokuTest.browser.%252F.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.deployHerokuTest.browser.%252F.png)

1. [https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.npmTest.browser.%252F.png](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.npmTest.browser.%252F.png)
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.npmTest.browser.%252F.png)](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.npmTest.browser.%252F.png)

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
    "description": "this zero-dependency package will provide browser-compatible version of istanbul coverage-tool (v0.4.5), with working web-demo",
    "devDependencies": {
        "electron-lite": "kaizhu256/node-electron-lite#alpha",
        "utility2": "kaizhu256/node-utility2#alpha"
    },
    "engines": {
        "node": ">=12.0"
    },
    "fileCount": 8,
    "homepage": "https://github.com/kaizhu256/node-istanbul-lite",
    "keywords": [
        "coverage",
        "istanbul"
    ],
    "license": "MIT",
    "main": "lib.istanbul.js",
    "name": "istanbul-lite",
    "nameAliasPublish": "",
    "nameLib": "istanbul",
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
        "build-ci": "./npm_scripts.sh",
        "env": "env",
        "eval": "./npm_scripts.sh",
        "heroku-postbuild": "./npm_scripts.sh",
        "postinstall": "./npm_scripts.sh",
        "start": "./npm_scripts.sh",
        "test": "./npm_scripts.sh",
        "utility2": "./npm_scripts.sh"
    },
    "version": "2020.5.31"
}
```



# changelog of last 50 commits
[![screenshot](https://kaizhu256.github.io/node-istanbul-lite/build/screenshot.gitLog.svg)](https://github.com/kaizhu256/node-istanbul-lite/commits)



# internal build script
- build_ci.sh
```shell
# build_ci.sh

# this shell script will run build-ci for this package

shBuildCiAfter () {(set -e
    # shDeployCustom
    shDeployGithub
    shDeployHeroku
    shReadmeTest example.sh
)}

shBuildCiBefore () {(set -e
    shNpmTestPublished
    shReadmeTest example.js
)}

# run shBuildCi
eval "$(utility2 source)"
shBuildCi
```



# misc
- this package was created with [utility2](https://github.com/kaizhu256/node-utility2)
