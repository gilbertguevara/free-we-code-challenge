(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define('app', ['exports', 'kotlin', 'datePicker-library'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('datePicker-library'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
    }
    if (typeof this['datePicker-library'] === 'undefined') {
      throw new Error("Error loading module 'app'. Its dependency 'datePicker-library' was not found. Please, check whether 'datePicker-library' is loaded prior to 'app'.");
    }
    root.app = factory(typeof app === 'undefined' ? {} : app, kotlin, this['datePicker-library']);
  }
}(this, function (_, Kotlin, $module$datePicker_library) {
  'use strict';
  var DatePicker = $module$datePicker_library.com.hugeinc.datepicker.DatePicker;
  function main(args) {
    var tmp$;
    var input = Kotlin.isType(tmp$ = document.getElementById('datepickerinput'), HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
    new DatePicker(input);
  }
  _.main_kand9s$ = main;
  Kotlin.defineModule('app', _);
  main([]);
  return _;
}));

//@ sourceMappingURL=app.js.map
