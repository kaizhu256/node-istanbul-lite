#!/usr/bin/env node
/*jslint
  bitwise: true, browser: true,
  indent: 2,
  maxerr: 8,
  node: true, nomen: true,
  regexp: true,
  stupid: true,
  todo: true
*/
// declare module vars
var exports, required, state, stateRestore;
stateRestore = function (state2) {
  /*
    this function is used by testMock to restore the local state var
  */
  'use strict';
  state = state2;
};



(function submoduleMainNodejs() {
  /*
    this nodejs submodule exports the main api
  */
  'use strict';
  var local = {
    _name: 'main.submoduleMainNodejs',

    _init: function () {
      /*
        this function inits the submodule
      */
      // init export object
      exports = module.exports = require(__dirname + '/utility2.js');
      // export __dirname
      exports.__dirname = __dirname;
      // export __filename
      exports.__filename = __filename;
      // init this submodule
      exports.initSubmodule(local);
      // init required object
      required = exports.required;
      // init state object
      state = exports.state;
    }

  };
  local._init();
}());



(function submoduleMainShared() {
  /*
    this shared submodule exports the main api
  */
  'use strict';
  var local = {
    _name: 'main.submoduleMainShared',

    _init: function () {
      /*
        this function inits the submodule
      */
      // init this submodule
      exports.initSubmodule(local);
    },

    instrumentSync: function (script, file) {
      /*
        this function instruments the script with the given file name,
        writing coverage data to the global __coverage__ object.
        it closely matches istanbul's Instrumenter.instrumentSync method
      */
      var instrumenter;
      instrumenter = new exports.Instrumenter({
        codeGenerationOptions: { format: { compact: true, indent: {} } }
      });
      return instrumenter.instrumentSync(script, file);
    },

    _instrumentSync_default_test: function (onEventError) {
      /*
        this function tests instrumentSync's default handling behavior
      */
      var data;
      data = exports.instrumentSync(
        'console.log("_instrument_default_test");',
        '_instrument_default_test.js'
      ).replace((/;\n$/), '\n');
      // validate data
      exports.assert(data === "\nvar __cov_1 = (Function('return this'))();\n" +
        "if (!__cov_1.__coverage__) { __cov_1.__coverage__ = {}; }\n" +
        "__cov_1 = __cov_1.__coverage__;\n" +
        "if (!(__cov_1['_instrument_default_test.js'])) {\n" +
        "   __cov_1['_instrument_default_test.js'] = " + JSON.stringify({
          "path": "_instrument_default_test.js",
          "s": { "1": 0 },
          "b": {},
          "f": {},
          "fnMap": {},
          "statementMap": {
            "1": { "start": { "line": 1, "column": 0 }, "end": { "line": 1, "column": 40 } }
          },
          "branchMap": {}
        }) + ";\n" +
        "}\n" +
        "__cov_1 = __cov_1['_instrument_default_test.js'];\n" +
        "__cov_1.s['1']++;console.log('_instrument_default_test')\n", JSON.stringify(data));
      onEventError();
    }

  };
  local._init();
}());
