(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define('app', ['exports', 'kotlin', 'timepicker-library', 'datepicker-library', 'common-library'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('timepicker-library'), require('datepicker-library'), require('common-library'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
    }
    if (typeof this['timepicker-library'] === 'undefined') {
      throw new Error("Error loading module 'app'. Its dependency 'timepicker-library' was not found. Please, check whether 'timepicker-library' is loaded prior to 'app'.");
    }
    if (typeof this['datepicker-library'] === 'undefined') {
      throw new Error("Error loading module 'app'. Its dependency 'datepicker-library' was not found. Please, check whether 'datepicker-library' is loaded prior to 'app'.");
    }
    if (typeof this['common-library'] === 'undefined') {
      throw new Error("Error loading module 'app'. Its dependency 'common-library' was not found. Please, check whether 'common-library' is loaded prior to 'app'.");
    }
    root.app = factory(typeof app === 'undefined' ? {} : app, kotlin, this['timepicker-library'], this['datepicker-library'], this['common-library']);
  }
}(this, function (_, Kotlin, $module$timepicker_library, $module$datepicker_library, $module$common_library) {
  'use strict';
  var TimePicker = $module$timepicker_library.org.example.timepicker.TimePicker;
  var datePickerModel = $module$datepicker_library.org.example.datepicker.datePickerModel;
  var DatePicker = $module$datepicker_library.org.example.datepicker.DatePicker;
  var toShortString = $module$common_library.org.example.toShortString_t5kl13$;
  function main$lambda(closure$timePicker) {
    return function (date) {
      closure$timePicker.changeDate_qjzqsm$(date);
    };
  }
  function main$lambda_0(closure$datePicker, closure$timePicker) {
    return function (it) {
      buildMessage(closure$datePicker, closure$timePicker);
    };
  }
  function main$lambda_1(closure$datePicker, closure$timePicker) {
    return function (it) {
      cancel(closure$datePicker, closure$timePicker);
    };
  }
  function main(args) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var inputDatePicker = Kotlin.isType(tmp$ = document.getElementById('datepickerinput'), HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
    var inputTimePicker = Kotlin.isType(tmp$_0 = document.getElementById('timepickerinput'), HTMLInputElement) ? tmp$_0 : Kotlin.throwCCE();
    var timePicker = new TimePicker(inputTimePicker);
    var params = new datePickerModel(inputDatePicker, void 0, void 0, void 0, true, main$lambda(timePicker));
    var datePicker = new DatePicker(params);
    var saveButton = Kotlin.isType(tmp$_1 = document.getElementById('save'), HTMLElement) ? tmp$_1 : Kotlin.throwCCE();
    saveButton.onclick = main$lambda_0(datePicker, timePicker);
    var cancelButton = Kotlin.isType(tmp$_2 = document.getElementById('cancel'), HTMLElement) ? tmp$_2 : Kotlin.throwCCE();
    cancelButton.onclick = main$lambda_1(datePicker, timePicker);
  }
  function cancel(datePicker, timePicker) {
    var tmp$;
    datePicker.clear();
    timePicker.reset();
    var message = Kotlin.isType(tmp$ = document.getElementById('message'), HTMLElement) ? tmp$ : Kotlin.throwCCE();
    message.innerText = '';
  }
  function buildMessage(datePicker, timePicker) {
    var tmp$;
    var message = Kotlin.isType(tmp$ = document.getElementById('message'), HTMLElement) ? tmp$ : Kotlin.throwCCE();
    message.innerText = 'Good! Your appointment is set for ' + toShortString(datePicker.getDate()) + ' at ' + timePicker.selectedTime + '. Thanks.';
  }
  _.main_kand9s$ = main;
  Kotlin.defineModule('app', _);
  main([]);
  return _;
}));

//@ sourceMappingURL=app.js.map
