if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'timepicker-library'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'timepicker-library'.");
}
if (typeof this['common-library'] === 'undefined') {
  throw new Error("Error loading module 'timepicker-library'. Its dependency 'common-library' was not found. Please, check whether 'common-library' is loaded prior to 'timepicker-library'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'timepicker-library'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'timepicker-library'.");
}
this['timepicker-library'] = function (_, Kotlin, $module$common_library, $module$kotlinx_html_js) {
  'use strict';
  var hide = $module$common_library.org.example.hide_y4uc6z$;
  var get_classes = $module$kotlinx_html_js.kotlinx.html.get_classes_fxodxh$;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_jf6zlv$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var step = Kotlin.kotlin.ranges.step_xsgg7u$;
  var dateInt = $module$common_library.org.example.dateInt_t5kl13$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toggle = $module$common_library.org.example.toggle_y4uc6z$;
  var createElement = Kotlin.kotlin.dom.createElement_7cgwi1$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var nav = $module$kotlinx_html_js.kotlinx.html.nav_pa7bap$;
  var appendZero = $module$common_library.org.example.appendZero_s8ev3n$;
  function TimePicker(inputField, selectedTime, disablePreviousCurrentTime) {
    TimePicker$Companion_getInstance();
    if (selectedTime === void 0)
      selectedTime = TimePicker$Companion_getInstance().DEFAULT_TIME_VALUE;
    if (disablePreviousCurrentTime === void 0)
      disablePreviousCurrentTime = true;
    this.inputField_0 = inputField;
    this.selectedTime = selectedTime;
    this.disablePreviousCurrentTime = disablePreviousCurrentTime;
    var tmp$;
    this.timePickerView_0 = Kotlin.isType(tmp$ = createElement(document, 'ul', TimePicker$timePickerView$lambda), HTMLElement) ? tmp$ : Kotlin.throwCCE();
    var $receiver = this.inputField_0;
    addClass($receiver, [TimePicker$Companion_getInstance().TIME_PICKER_PREFIX + '-input']);
    $receiver.readOnly = true;
    $receiver.onclick = TimePicker_init$lambda$lambda(this);
    var tmp$_0 = this.inputField_0;
    var $receiver_0 = nav(get_create(document), void 0, TimePicker_init$lambda);
    $receiver_0.append(this.timePickerView_0);
    tmp$_0.insertAdjacentElement('afterend', $receiver_0);
    this.initTimePicker_0();
  }
  function TimePicker$Companion() {
    TimePicker$Companion_instance = this;
    this.TIME_PICKER_PREFIX = 'timepicker';
    this.TIME_PICKER_SELECTED_CSS_CLASS = this.TIME_PICKER_PREFIX + '-selected';
    this.INTERVAL_ATTRIBUTE = 'data-interval';
    this.MAX_TIME_RANGE = (15 * 4 | 0) * 24 | 0;
    this.DEFAULT_TIME_VALUE = new Time(60 * 12 | 0);
  }
  TimePicker$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimePicker$Companion_instance = null;
  function TimePicker$Companion_getInstance() {
    if (TimePicker$Companion_instance === null) {
      new TimePicker$Companion();
    }
    return TimePicker$Companion_instance;
  }
  function TimePicker$initTimePicker$lambda(closure$timePickerView) {
    return function (it) {
      hide(closure$timePickerView);
    };
  }
  TimePicker.prototype.initTimePicker_0 = function (timePickerView, date) {
    if (timePickerView === void 0)
      timePickerView = this.timePickerView_0;
    if (date === void 0)
      date = new Date();
    this.buildTimePicker_0(timePickerView, date);
    this.selectTime_0();
    window.addEventListener('click', TimePicker$initTimePicker$lambda(timePickerView));
  };
  function TimePicker$buildTimePicker$lambda$lambda$lambda(closure$time) {
    return function ($receiver) {
      set_classes($receiver, plus(get_classes($receiver), TimePicker$Companion_getInstance().TIME_PICKER_PREFIX + '-item'));
      var $receiver_0 = $receiver.attributes;
      var key = TimePicker$Companion_getInstance().INTERVAL_ATTRIBUTE;
      var value = closure$time.interval.toString();
      $receiver_0.put_xwzc9p$(key, value);
    };
  }
  function TimePicker$buildTimePicker$lambda$lambda$lambda$lambda(closure$time, this$TimePicker) {
    return function (event) {
      var tmp$;
      var element = Kotlin.isType(tmp$ = event.target, HTMLLIElement) ? tmp$ : Kotlin.throwCCE();
      this$TimePicker.select_h88h6l$(element, closure$time);
    };
  }
  function TimePicker$buildTimePicker$lambda$lambda(closure$time, this$TimePicker) {
    return function ($receiver) {
      var $receiver_0 = li($receiver, void 0, TimePicker$buildTimePicker$lambda$lambda$lambda(closure$time));
      var closure$time_0 = closure$time;
      var this$TimePicker_0 = this$TimePicker;
      $receiver_0.innerText = closure$time_0.toString();
      if (closure$time_0.selected)
        addClass($receiver_0, [TimePicker$Companion_getInstance().TIME_PICKER_SELECTED_CSS_CLASS]);
      $receiver_0.onclick = TimePicker$buildTimePicker$lambda$lambda$lambda$lambda(closure$time_0, this$TimePicker_0);
    };
  }
  TimePicker.prototype.buildTimePicker_0 = function (timePickerView, date) {
    hide(timePickerView);
    var intervals = this.getIntervals_0(date);
    if (this.disablePreviousCurrentTime) {
      var $receiver = intervals;
      var predicate = Kotlin.getPropertyCallableRef('enabled', 1, function ($receiver_0) {
        return $receiver_0.enabled;
      }, function ($receiver_0, value) {
        $receiver_0.enabled = value;
      });
      var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (predicate(element)) {
          destination.add_11rb$(element);
        }
      }
      intervals = destination;
      intervals.get_za3lpa$(0).selected = true;
    }
    var tmp$_0;
    tmp$_0 = intervals.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      append(timePickerView, TimePicker$buildTimePicker$lambda$lambda(element_0, this));
    }
  };
  TimePicker.prototype.getIntervals_0 = function (date) {
    var $receiver = step(until(0, TimePicker$Companion_getInstance().MAX_TIME_RANGE), 15);
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var time = new Time(item, item === this.selectedTime.interval);
      var tmp$_2 = new Date();
      var hours = time.interval / 60 | 0;
      var minutes = time.getMinute();
      var seconds;
      var ms;
      if (minutes === void 0)
        minutes = 0;
      if (seconds === void 0)
        seconds = 0;
      if (ms === void 0)
        ms = 0;
      tmp$_2.setHours(hours, minutes, seconds, ms);
      var intervalDate = tmp$_2;
      if (this.disablePreviousCurrentTime && dateInt(intervalDate) === dateInt(date)) {
        tmp$_1 = intervalDate.getTime() > date.getTime();
      }
       else
        tmp$_1 = true;
      var enabled = tmp$_1;
      time.enabled = enabled;
      tmp$_0.call(destination, time);
    }
    return destination;
  };
  TimePicker.prototype.selectTime_0 = function () {
    var tmp$;
    tmp$ = asList(document.getElementsByClassName(TimePicker$Companion_getInstance().TIME_PICKER_SELECTED_CSS_CLASS)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1;
      var liElement = Kotlin.isType(tmp$_0 = element, HTMLLIElement) ? tmp$_0 : Kotlin.throwCCE();
      if ((tmp$_1 = liElement.getAttribute(TimePicker$Companion_getInstance().INTERVAL_ATTRIBUTE)) != null) {
        this.select_h88h6l$(liElement, new Time(toInt(tmp$_1)));
      }
    }
  };
  TimePicker.prototype.toggle_lt8gi4$ = function (element) {
    toggle(element);
    if (!Kotlin.equals(element.style.display, 'none')) {
      this.selectTime_0();
    }
  };
  TimePicker.prototype.select_h88h6l$ = function (element, time) {
    this.clearSelected_0();
    addClass(element, [TimePicker$Companion_getInstance().TIME_PICKER_SELECTED_CSS_CLASS]);
    time.selected = true;
    this.inputField_0.value = time.toString();
    this.selectedTime = time;
    this.timePickerView_0.scrollTop = element.offsetTop;
  };
  TimePicker.prototype.clearSelected_0 = function () {
    var $receiver = document.getElementsByClassName(TimePicker$Companion_getInstance().TIME_PICKER_SELECTED_CSS_CLASS);
    var cssClassName = [TimePicker$Companion_getInstance().TIME_PICKER_SELECTED_CSS_CLASS];
    var tmp$;
    tmp$ = Kotlin.org.w3c.dom.asList_kt9thq$($receiver).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      Kotlin.kotlin.dom.removeClass_hhb33f$(element, cssClassName.slice());
    }
  };
  TimePicker.prototype.reset = function () {
    var tmp$;
    this.clearSelected_0();
    if ((tmp$ = document.querySelector('li[' + TimePicker$Companion_getInstance().INTERVAL_ATTRIBUTE + '=' + '"' + TimePicker$Companion_getInstance().DEFAULT_TIME_VALUE.interval + '"' + ']')) != null) {
      if (Kotlin.isType(tmp$, HTMLLIElement))
        this.select_h88h6l$(tmp$, TimePicker$Companion_getInstance().DEFAULT_TIME_VALUE);
    }
  };
  TimePicker.prototype.changeDate_qjzqsm$ = function (date) {
    var tmp$;
    while (this.timePickerView_0.hasChildNodes()) {
      if ((tmp$ = this.timePickerView_0.lastChild) != null) {
        this.timePickerView_0.removeChild(tmp$);
      }
    }
    this.initTimePicker_0(this.timePickerView_0, date);
  };
  function TimePicker$timePickerView$lambda($receiver) {
    $receiver.id = TimePicker$Companion_getInstance().TIME_PICKER_PREFIX;
  }
  function TimePicker_init$lambda$lambda(this$TimePicker) {
    return function (event) {
      this$TimePicker.toggle_lt8gi4$(this$TimePicker.timePickerView_0);
      event.stopPropagation();
    };
  }
  function TimePicker_init$lambda($receiver) {
  }
  TimePicker.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TimePicker',
    interfaces: []
  };
  function Time(interval, selected, enabled) {
    Time$Companion_getInstance();
    if (selected === void 0)
      selected = false;
    if (enabled === void 0)
      enabled = true;
    this.interval = interval;
    this.selected = selected;
    this.enabled = enabled;
  }
  function Time$Companion() {
    Time$Companion_instance = this;
    this.AM_PM_INDICATOR = 60 * 12 | 0;
  }
  Time$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Time$Companion_instance = null;
  function Time$Companion_getInstance() {
    if (Time$Companion_instance === null) {
      new Time$Companion();
    }
    return Time$Companion_instance;
  }
  Time.prototype.getHour = Kotlin.defineInlineFunction('timepicker-library.org.example.timepicker.Time.getHour', function () {
    return this.interval / 60 | 0;
  });
  Time.prototype.getHourAmPm = function () {
    if ((this.interval / 60 | 0) === 12) {
      return 12;
    }
     else {
      return (this.interval / 60 | 0) % 12;
    }
  };
  Time.prototype.getMinute = function () {
    return this.interval % 60;
  };
  Time.prototype.isAm = function () {
    return this.interval < Time$Companion_getInstance().AM_PM_INDICATOR;
  };
  Time.prototype.getTimeFormat = function () {
    return this.isAm() ? 'AM' : 'PM';
  };
  Time.prototype.toString = function () {
    return appendZero(this.getHourAmPm()) + ':' + appendZero(this.getMinute()) + ' ' + this.getTimeFormat();
  };
  Time.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Time',
    interfaces: []
  };
  Time.prototype.component1 = function () {
    return this.interval;
  };
  Time.prototype.component2 = function () {
    return this.selected;
  };
  Time.prototype.component3 = function () {
    return this.enabled;
  };
  Time.prototype.copy_103y6$ = function (interval, selected, enabled) {
    return new Time(interval === void 0 ? this.interval : interval, selected === void 0 ? this.selected : selected, enabled === void 0 ? this.enabled : enabled);
  };
  Time.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.interval) | 0;
    result = result * 31 + Kotlin.hashCode(this.selected) | 0;
    result = result * 31 + Kotlin.hashCode(this.enabled) | 0;
    return result;
  };
  Time.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.interval, other.interval) && Kotlin.equals(this.selected, other.selected) && Kotlin.equals(this.enabled, other.enabled)))));
  };
  Object.defineProperty(TimePicker, 'Companion', {
    get: TimePicker$Companion_getInstance
  });
  var package$org = _.org || (_.org = {});
  var package$example = package$org.example || (package$org.example = {});
  var package$timepicker = package$example.timepicker || (package$example.timepicker = {});
  package$timepicker.TimePicker = TimePicker;
  Object.defineProperty(Time, 'Companion', {
    get: Time$Companion_getInstance
  });
  package$timepicker.Time = Time;
  Kotlin.defineModule('timepicker-library', _);
  return _;
}(typeof this['timepicker-library'] === 'undefined' ? {} : this['timepicker-library'], kotlin, this['common-library'], this['kotlinx-html-js']);

//@ sourceMappingURL=timepicker-library.js.map
