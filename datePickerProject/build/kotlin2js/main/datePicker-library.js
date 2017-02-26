if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'datePicker-library'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'datePicker-library'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'datePicker-library'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'datePicker-library'.");
}
this['datePicker-library'] = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var div = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var i = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var a = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var nav = $module$kotlinx_html_js.kotlinx.html.nav_pa7bap$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_fqsp1s$;
  var set_title = $module$kotlinx_html_js.kotlinx.html.set_title_ueiko3$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var span_0 = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var th = $module$kotlinx_html_js.kotlinx.html.th_bncpyi$;
  var tr = $module$kotlinx_html_js.kotlinx.html.tr_lut1f9$;
  var thead = $module$kotlinx_html_js.kotlinx.html.thead_fwe93y$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var get_classes = $module$kotlinx_html_js.kotlinx.html.get_classes_fxodxh$;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var a_0 = $module$kotlinx_html_js.kotlinx.html.a_5skjyn$;
  var createElement = Kotlin.kotlin.dom.createElement_7cgwi1$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  function DatePicker(inputField, date) {
    DatePicker$Companion_getInstance();
    if (date === void 0)
      date = new Date();
    this.inputField_0 = inputField;
    this.date_0 = date;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.datePickerView_0 = Kotlin.isType(tmp$ = createElement(document, 'div', DatePicker$datePickerView$lambda), HTMLDivElement) ? tmp$ : Kotlin.throwCCE();
    this.datePickerCalendar_0 = Kotlin.isType(tmp$_0 = createElement(document, 'table', DatePicker$datePickerCalendar$lambda), HTMLTableElement) ? tmp$_0 : Kotlin.throwCCE();
    this.datePickerTitle_0 = Kotlin.isType(tmp$_1 = createElement(document, 'div', DatePicker$datePickerTitle$lambda), HTMLDivElement) ? tmp$_1 : Kotlin.throwCCE();
    window.onclick = DatePicker_init$lambda(this);
    var $receiver = this.inputField_0;
    addClass($receiver, ['datePickerInput']);
    $receiver.readOnly = true;
    $receiver.onclick = DatePicker_init$lambda$lambda(this);
    var inputParent = Kotlin.isType(tmp$_2 = $receiver.parentElement, HTMLElement) ? tmp$_2 : Kotlin.throwCCE();
    this.buildDatePicker_0(inputParent);
  }
  function DatePicker$Companion() {
    DatePicker$Companion_instance = this;
    this.MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }
  DatePicker$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DatePicker$Companion_instance = null;
  function DatePicker$Companion_getInstance() {
    if (DatePicker$Companion_instance === null) {
      new DatePicker$Companion();
    }
    return DatePicker$Companion_instance;
  }
  function DatePicker$buildDatePicker$lambda$lambda($receiver) {
  }
  function DatePicker$buildDatePicker$lambda(this$DatePicker) {
    return function ($receiver) {
      div($receiver, void 0, DatePicker$buildDatePicker$lambda$lambda).append(this$DatePicker.datePickerView_0);
    };
  }
  DatePicker.prototype.buildDatePicker_0 = function (inputParent) {
    this.datePickerView_0.style.display = 'none';
    this.buildHeader_0(this.datePickerView_0);
    this.buildCalendar_0(this.datePickerView_0);
    append(inputParent, DatePicker$buildDatePicker$lambda(this));
  };
  function DatePicker$buildHeader$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('keyboard_arrow_left');
  }
  function DatePicker$buildHeader$lambda$lambda$lambda$lambda$lambda_0(this$DatePicker) {
    return function (event) {
      var tmp$ = this$DatePicker;
      var tmp$_0 = this$DatePicker.datePickerCalendar_0;
      var $receiver = this$DatePicker.date_0;
      $receiver.setMonth($receiver.getMonth() + -1 | 0);
      tmp$.populateMonth_0(tmp$_0, $receiver, true);
      event.stopPropagation();
    };
  }
  function DatePicker$buildHeader$lambda$lambda$lambda$lambda(this$DatePicker) {
    return function ($receiver) {
      i($receiver, 'material-icons', DatePicker$buildHeader$lambda$lambda$lambda$lambda$lambda);
      set_onClickFunction($receiver, DatePicker$buildHeader$lambda$lambda$lambda$lambda$lambda_0(this$DatePicker));
    };
  }
  function DatePicker$buildHeader$lambda$lambda$lambda(this$DatePicker) {
    return function ($receiver) {
      a($receiver, '#', void 0, void 0, DatePicker$buildHeader$lambda$lambda$lambda$lambda(this$DatePicker));
    };
  }
  function DatePicker$buildHeader$lambda$lambda(this$DatePicker) {
    return function ($receiver) {
      div_0($receiver, 'datepicker-prev', DatePicker$buildHeader$lambda$lambda$lambda(this$DatePicker));
    };
  }
  function DatePicker$buildHeader$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('keyboard_arrow_right');
  }
  function DatePicker$buildHeader$lambda$lambda$lambda$lambda$lambda_2(this$DatePicker) {
    return function (event) {
      var tmp$ = this$DatePicker;
      var tmp$_0 = this$DatePicker.datePickerCalendar_0;
      var $receiver = this$DatePicker.date_0;
      $receiver.setMonth($receiver.getMonth() + 1 | 0);
      tmp$.populateMonth_0(tmp$_0, $receiver, true);
      event.stopPropagation();
    };
  }
  function DatePicker$buildHeader$lambda$lambda$lambda$lambda_0(this$DatePicker) {
    return function ($receiver) {
      i($receiver, 'material-icons', DatePicker$buildHeader$lambda$lambda$lambda$lambda$lambda_1);
      set_onClickFunction($receiver, DatePicker$buildHeader$lambda$lambda$lambda$lambda$lambda_2(this$DatePicker));
    };
  }
  function DatePicker$buildHeader$lambda$lambda$lambda_0(this$DatePicker) {
    return function ($receiver) {
      a($receiver, '#', void 0, void 0, DatePicker$buildHeader$lambda$lambda$lambda$lambda_0(this$DatePicker));
    };
  }
  function DatePicker$buildHeader$lambda$lambda_0(this$DatePicker) {
    return function ($receiver) {
      div($receiver, 'datepicker-next', DatePicker$buildHeader$lambda$lambda$lambda_0(this$DatePicker));
    };
  }
  function DatePicker$buildHeader$lambda(this$DatePicker) {
    return function ($receiver) {
      var $receiver_0 = nav($receiver, 'datepicker-header', DatePicker$buildHeader$lambda$lambda(this$DatePicker));
      $receiver_0.appendChild(this$DatePicker.datePickerTitle_0);
      append($receiver_0, DatePicker$buildHeader$lambda$lambda_0(this$DatePicker));
    };
  }
  DatePicker.prototype.buildHeader_0 = function (datePickerView) {
    this.populateTitle_0(this.date_0);
    append(datePickerView, DatePicker$buildHeader$lambda(this));
  };
  function DatePicker$populateTitle$lambda$lambda(closure$monthName, closure$year) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$monthName + ' ' + closure$year);
    };
  }
  function DatePicker$populateTitle$lambda(closure$monthName, closure$year) {
    return function ($receiver) {
      span($receiver, void 0, DatePicker$populateTitle$lambda$lambda(closure$monthName, closure$year));
    };
  }
  DatePicker.prototype.populateTitle_0 = function (date) {
    var tmp$;
    var monthName = DatePicker$Companion_getInstance().MONTH_NAMES[date.getMonth()];
    var year = date.getFullYear();
    if ((tmp$ = this.datePickerTitle_0.firstChild) != null) {
      this.datePickerTitle_0.removeChild(tmp$);
    }
    append(this.datePickerTitle_0, DatePicker$populateTitle$lambda(monthName, year));
  };
  function DatePicker$buildCalendar$lambda$lambda$lambda$lambda$lambda$lambda(closure$weekDay) {
    return function ($receiver) {
      set_title($receiver, closure$weekDay);
      var weekDayShort = substring(closure$weekDay, new IntRange(0, 1));
      $receiver.unaryPlus_pdl1vz$(weekDayShort);
    };
  }
  function DatePicker$buildCalendar$lambda$lambda$lambda$lambda$lambda(closure$weekDay) {
    return function ($receiver) {
      span_0($receiver, void 0, DatePicker$buildCalendar$lambda$lambda$lambda$lambda$lambda$lambda(closure$weekDay));
    };
  }
  function DatePicker$buildCalendar$lambda$lambda$lambda($receiver) {
    var $receiver_0 = DatePicker$Companion_getInstance().WEEK_DAYS;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      th($receiver, void 0, void 0, DatePicker$buildCalendar$lambda$lambda$lambda$lambda$lambda(element));
    }
  }
  function DatePicker$buildCalendar$lambda$lambda($receiver) {
    tr($receiver, void 0, DatePicker$buildCalendar$lambda$lambda$lambda);
  }
  function DatePicker$buildCalendar$lambda($receiver) {
    thead($receiver, void 0, DatePicker$buildCalendar$lambda$lambda);
  }
  DatePicker.prototype.buildCalendar_0 = function (datePickerView) {
    append(this.datePickerCalendar_0, DatePicker$buildCalendar$lambda);
    this.populateMonth_0(this.datePickerCalendar_0, this.date_0);
    datePickerView.appendChild(this.datePickerCalendar_0);
  };
  DatePicker.prototype.populateMonth_0 = function (datePickerCalendar, date, replace) {
    if (replace === void 0)
      replace = false;
    var tmp$, tmp$_0, tmp$_1;
    if (replace) {
      (tmp$ = datePickerCalendar.tBodies[0]) != null ? tmp$.remove() : null;
      this.populateTitle_0(date);
    }
    var tbody = datePickerCalendar.createTBody();
    var dayIndex = 0;
    var days = this.getDays_0(date);
    var firstDay = days.get_za3lpa$(dayIndex).date.getDay();
    var tableRow = {v: Kotlin.isType(tmp$_0 = tbody.insertRow(), HTMLTableRowElement) ? tmp$_0 : Kotlin.throwCCE()};
    var tmp$_2;
    tmp$_2 = until(0, firstDay).iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      tableRow.v.insertCell();
    }
    while (dayIndex < days.size) {
      dayIndex = this.buildWeek_0(tableRow.v, days, dayIndex, firstDay);
      tableRow.v = Kotlin.isType(tmp$_1 = tbody.insertRow(), HTMLTableRowElement) ? tmp$_1 : Kotlin.throwCCE();
      firstDay = 0;
    }
  };
  function DatePicker$buildWeek$lambda$lambda$lambda$lambda$lambda(closure$day, this$DatePicker) {
    return function (it) {
      this$DatePicker.inputField_0.value = toShortString(closure$day.date);
      this$DatePicker.toggle();
    };
  }
  function DatePicker$buildWeek$lambda$lambda$lambda$lambda(closure$day, this$DatePicker) {
    return function ($receiver) {
      if (closure$day.selected)
        set_classes($receiver, plus(get_classes($receiver), 'selected'));
      $receiver.unaryPlus_pdl1vz$('' + Kotlin.toString(closure$day.date.getDate()));
      set_onClickFunction($receiver, DatePicker$buildWeek$lambda$lambda$lambda$lambda$lambda(closure$day, this$DatePicker));
    };
  }
  function DatePicker$buildWeek$lambda$lambda$lambda(closure$day, this$DatePicker) {
    return function ($receiver) {
      a_0($receiver, '#', void 0, void 0, DatePicker$buildWeek$lambda$lambda$lambda$lambda(closure$day, this$DatePicker));
    };
  }
  DatePicker.prototype.buildWeek_0 = function (tableRow, days, startDay, startAt) {
    if (startAt === void 0)
      startAt = 0;
    var dayIndex = {v: startDay};
    var tmp$;
    tmp$ = until(startAt, DatePicker$Companion_getInstance().WEEK_DAYS.length).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      var cell = tableRow.insertCell();
      if ((tmp$_0 = getOrNull(days, dayIndex.v)) != null) {
        append(cell, DatePicker$buildWeek$lambda$lambda$lambda(tmp$_0, this));
        dayIndex.v = dayIndex.v + 1 | 0;
      }
    }
    return dayIndex.v;
  };
  DatePicker.prototype.getDays_0 = function (date) {
    var $receiver = new IntRange(1, 31);
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var dayDate = new Date();
      dayDate.setTime(date.getTime());
      dayDate.setDate(item);
      tmp$_0.call(destination, new Day(dayDate, date.getDate() === item));
    }
    var destination_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var innerDate = element.component1();
      if (date.getMonth() === innerDate.getMonth()) {
        destination_0.add_11rb$(element);
      }
    }
    return destination_0;
  };
  DatePicker.prototype.toggle = function () {
    this.datePickerView_0.style.display = Kotlin.equals(this.datePickerView_0.style.display, 'none') ? 'flex' : 'none';
    this.datePickerView_0.style.opacity = '255';
  };
  DatePicker.prototype.hide = function () {
    this.datePickerView_0.style.display = 'none';
  };
  function DatePicker$datePickerView$lambda($receiver) {
    $receiver.id = 'datepicker';
  }
  function DatePicker$datePickerCalendar$lambda($receiver) {
    addClass($receiver, ['datepicker-calendar']);
  }
  function DatePicker$datePickerTitle$lambda($receiver) {
    addClass($receiver, ['datepicker-title']);
  }
  function DatePicker_init$lambda(this$DatePicker) {
    return function (it) {
      this$DatePicker.hide();
    };
  }
  function DatePicker_init$lambda$lambda(this$DatePicker) {
    return function (event) {
      this$DatePicker.toggle();
      event.stopPropagation();
    };
  }
  DatePicker.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DatePicker',
    interfaces: []
  };
  function Day(date, selected, enable) {
    if (selected === void 0)
      selected = false;
    if (enable === void 0)
      enable = true;
    this.date = date;
    this.selected = selected;
    this.enable = enable;
  }
  Day.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Day',
    interfaces: []
  };
  Day.prototype.component1 = function () {
    return this.date;
  };
  Day.prototype.component2 = function () {
    return this.selected;
  };
  Day.prototype.component3 = function () {
    return this.enable;
  };
  Day.prototype.copy_byk45i$ = function (date, selected, enable) {
    return new Day(date === void 0 ? this.date : date, selected === void 0 ? this.selected : selected, enable === void 0 ? this.enable : enable);
  };
  Day.prototype.toString = function () {
    return 'Day(date=' + Kotlin.toString(this.date) + (', selected=' + Kotlin.toString(this.selected)) + (', enable=' + Kotlin.toString(this.enable)) + ')';
  };
  Day.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.selected) | 0;
    result = result * 31 + Kotlin.hashCode(this.enable) | 0;
    return result;
  };
  Day.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.date, other.date) && Kotlin.equals(this.selected, other.selected) && Kotlin.equals(this.enable, other.enable)))));
  };
  var getDayOfMonth = Kotlin.defineInlineFunction('datePicker-library.com.hugeinc.datepicker.getDayOfMonth_t5kl13$', function ($receiver) {
    return $receiver.getDay();
  });
  var getDate = Kotlin.defineInlineFunction('datePicker-library.com.hugeinc.datepicker.getDate_t5kl13$', function ($receiver) {
    return $receiver.getDate();
  });
  var getMonth = Kotlin.defineInlineFunction('datePicker-library.com.hugeinc.datepicker.getMonth_t5kl13$', function ($receiver) {
    return $receiver.getMonth();
  });
  var getFullYear = Kotlin.defineInlineFunction('datePicker-library.com.hugeinc.datepicker.getFullYear_t5kl13$', function ($receiver) {
    return $receiver.getFullYear();
  });
  function toShortString($receiver) {
    var monthStr = appendZero($receiver.getMonth() + 1 | 0);
    var dayStr = appendZero($receiver.getDate());
    return monthStr + '/' + dayStr + '/' + $receiver.getFullYear();
  }
  function appendZero(value) {
    return value > 9 ? value.toString() : '0' + Kotlin.toString(value);
  }
  var setTime = Kotlin.defineInlineFunction('datePicker-library.com.hugeinc.datepicker.setTime_peg6ln$', function ($receiver, time) {
    return $receiver.setTime(time);
  });
  var setDate = Kotlin.defineInlineFunction('datePicker-library.com.hugeinc.datepicker.setDate_79if1n$', function ($receiver, day) {
    return $receiver.setDate(day);
  });
  var setMonth = Kotlin.defineInlineFunction('datePicker-library.com.hugeinc.datepicker.setMonth_79if1n$', function ($receiver, month) {
    return $receiver.setMonth(month);
  });
  function addMonth$lambda(closure$interval) {
    return function ($receiver) {
      $receiver.setMonth($receiver.getMonth() + closure$interval | 0);
    };
  }
  var addMonth = Kotlin.defineInlineFunction('datePicker-library.com.hugeinc.datepicker.addMonth_79if1n$', function ($receiver, interval) {
    $receiver.setMonth($receiver.getMonth() + interval | 0);
    return $receiver;
  });
  Object.defineProperty(DatePicker, 'Companion', {
    get: DatePicker$Companion_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$hugeinc = package$com.hugeinc || (package$com.hugeinc = {});
  var package$datepicker = package$hugeinc.datepicker || (package$hugeinc.datepicker = {});
  package$datepicker.DatePicker = DatePicker;
  package$datepicker.Day = Day;
  package$datepicker.getDayOfMonth_t5kl13$ = getDayOfMonth;
  package$datepicker.getDate_t5kl13$ = getDate;
  package$datepicker.getMonth_t5kl13$ = getMonth;
  package$datepicker.getFullYear_t5kl13$ = getFullYear;
  package$datepicker.toShortString_t5kl13$ = toShortString;
  package$datepicker.setTime_peg6ln$ = setTime;
  package$datepicker.setDate_79if1n$ = setDate;
  package$datepicker.setMonth_79if1n$ = setMonth;
  package$datepicker.addMonth$f = addMonth$lambda;
  package$datepicker.addMonth_79if1n$ = addMonth;
  Kotlin.defineModule('datePicker-library', _);
  return _;
}(typeof this['datePicker-library'] === 'undefined' ? {} : this['datePicker-library'], kotlin, this['kotlinx-html-js']);

//@ sourceMappingURL=datePicker-library.js.map
