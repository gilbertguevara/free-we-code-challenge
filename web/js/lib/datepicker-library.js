if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'datepicker-library'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'datepicker-library'.");
}
if (typeof this['common-library'] === 'undefined') {
  throw new Error("Error loading module 'datepicker-library'. Its dependency 'common-library' was not found. Please, check whether 'common-library' is loaded prior to 'datepicker-library'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'datepicker-library'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'datepicker-library'.");
}
this['datepicker-library'] = function (_, Kotlin, $module$common_library, $module$kotlinx_html_js) {
  'use strict';
  var hide = $module$common_library.org.example.hide_y4uc6z$;
  var i = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var nav = $module$kotlinx_html_js.kotlinx.html.nav_pa7bap$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_fqsp1s$;
  var get_classes = $module$kotlinx_html_js.kotlinx.html.get_classes_fxodxh$;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var set_title = $module$kotlinx_html_js.kotlinx.html.set_title_ueiko3$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var span_0 = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var th = $module$kotlinx_html_js.kotlinx.html.th_bncpyi$;
  var tr = $module$kotlinx_html_js.kotlinx.html.tr_lut1f9$;
  var thead = $module$kotlinx_html_js.kotlinx.html.thead_fwe93y$;
  var h4 = $module$kotlinx_html_js.kotlinx.html.h4_zdyoc7$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var radioInput = $module$kotlinx_html_js.kotlinx.html.radioInput_ap9uf6$;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var toShortString = $module$common_library.org.example.toShortString_t5kl13$;
  var toggle = $module$common_library.org.example.toggle_y4uc6z$;
  var clone = $module$common_library.org.example.clone_t5kl13$;
  var dateInt = $module$common_library.org.example.dateInt_t5kl13$;
  var createElement = Kotlin.kotlin.dom.createElement_7cgwi1$;
  var Enum = Kotlin.kotlin.Enum;
  FilterCalendar.prototype = Object.create(Enum.prototype);
  FilterCalendar.prototype.constructor = FilterCalendar;
  function DatePicker(datePickerModel_0) {
    DatePicker$Companion_getInstance();
    this.datePickerModel_0 = datePickerModel_0;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.datePickerView_0 = Kotlin.isType(tmp$ = createElement(document, 'div', DatePicker$datePickerView$lambda), HTMLDivElement) ? tmp$ : Kotlin.throwCCE();
    this.datePickerCalendar_0 = Kotlin.isType(tmp$_0 = createElement(document, 'div', DatePicker$datePickerCalendar$lambda), HTMLDivElement) ? tmp$_0 : Kotlin.throwCCE();
    this.datePickerDays_0 = Kotlin.isType(tmp$_1 = createElement(document, 'table', DatePicker$datePickerDays$lambda), HTMLTableElement) ? tmp$_1 : Kotlin.throwCCE();
    this.datePickerTitle_0 = Kotlin.isType(tmp$_2 = createElement(document, 'div', DatePicker$datePickerTitle$lambda), HTMLDivElement) ? tmp$_2 : Kotlin.throwCCE();
    var $receiver = this.datePickerModel_0.inputField;
    addClass($receiver, [DatePicker$Companion_getInstance().DATE_PICKER_PREFIX + '-input']);
    $receiver.readOnly = true;
    $receiver.onclick = DatePicker_init$lambda$lambda(this);
    this.buildDatePicker_0(this.datePickerModel_0.inputField);
    window.addEventListener('click', DatePicker_init$lambda(this));
  }
  function DatePicker$Companion() {
    DatePicker$Companion_instance = this;
    this.MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.DATE_PICKER_PREFIX = 'datepicker';
    this.DATE_PICKER_SELECTED_CSS_CLASS = this.DATE_PICKER_PREFIX + '-selected';
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
  DatePicker.prototype.buildDatePicker_0 = function (inputField) {
    hide(this.datePickerView_0);
    inputField.insertAdjacentElement('afterend', this.datePickerView_0);
    this.buildHeader_0(this.datePickerCalendar_0);
    this.buildCalendar_0(this.datePickerCalendar_0);
    this.datePickerView_0.appendChild(this.datePickerCalendar_0);
    this.buildFilters_0(this.datePickerView_0);
  };
  function DatePicker$buildHeader$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('keyboard_arrow_left');
  }
  function DatePicker$buildHeader$lambda$lambda$lambda$lambda_0(this$DatePicker, closure$date) {
    return function (event) {
      var tmp$ = this$DatePicker;
      var tmp$_0 = this$DatePicker.datePickerDays_0;
      var $receiver = closure$date;
      $receiver.setMonth($receiver.getMonth() + -1 | 0);
      tmp$.populateMonth_0(tmp$_0, $receiver, true);
      event.stopPropagation();
    };
  }
  function DatePicker$buildHeader$lambda$lambda$lambda(this$DatePicker, closure$date) {
    return function ($receiver) {
      i($receiver, 'material-icons', DatePicker$buildHeader$lambda$lambda$lambda$lambda);
      set_onClickFunction($receiver, DatePicker$buildHeader$lambda$lambda$lambda$lambda_0(this$DatePicker, closure$date));
    };
  }
  function DatePicker$buildHeader$lambda$lambda(this$DatePicker, closure$date) {
    return function ($receiver) {
      div($receiver, DatePicker$Companion_getInstance().DATE_PICKER_PREFIX + '-prev', DatePicker$buildHeader$lambda$lambda$lambda(this$DatePicker, closure$date));
    };
  }
  function DatePicker$buildHeader$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('keyboard_arrow_right');
  }
  function DatePicker$buildHeader$lambda$lambda$lambda$lambda_2(this$DatePicker, closure$date) {
    return function (event) {
      var tmp$ = this$DatePicker;
      var tmp$_0 = this$DatePicker.datePickerDays_0;
      var $receiver = closure$date;
      $receiver.setMonth($receiver.getMonth() + 1 | 0);
      tmp$.populateMonth_0(tmp$_0, $receiver, true);
      event.stopPropagation();
    };
  }
  function DatePicker$buildHeader$lambda$lambda$lambda_0(this$DatePicker, closure$date) {
    return function ($receiver) {
      i($receiver, 'material-icons', DatePicker$buildHeader$lambda$lambda$lambda$lambda_1);
      set_onClickFunction($receiver, DatePicker$buildHeader$lambda$lambda$lambda$lambda_2(this$DatePicker, closure$date));
    };
  }
  function DatePicker$buildHeader$lambda$lambda_0(this$DatePicker, closure$date) {
    return function ($receiver) {
      div_0($receiver, DatePicker$Companion_getInstance().DATE_PICKER_PREFIX + '-next', DatePicker$buildHeader$lambda$lambda$lambda_0(this$DatePicker, closure$date));
    };
  }
  function DatePicker$buildHeader$lambda(this$DatePicker, closure$date) {
    return function ($receiver) {
      var $receiver_0 = nav($receiver, DatePicker$Companion_getInstance().DATE_PICKER_PREFIX + '-header', DatePicker$buildHeader$lambda$lambda(this$DatePicker, closure$date));
      $receiver_0.appendChild(this$DatePicker.datePickerTitle_0);
      append($receiver_0, DatePicker$buildHeader$lambda$lambda_0(this$DatePicker, closure$date));
    };
  }
  DatePicker.prototype.buildHeader_0 = function (datePickerCalendar) {
    var date = this.datePickerModel_0.date;
    this.populateTitle_0(date);
    append(datePickerCalendar, DatePicker$buildHeader$lambda(this, date));
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
      set_classes($receiver, plus(get_classes($receiver), DatePicker$Companion_getInstance().DATE_PICKER_PREFIX + '-dayname'));
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
  DatePicker.prototype.buildCalendar_0 = function (datePickerCalendar) {
    append(this.datePickerDays_0, DatePicker$buildCalendar$lambda);
    this.populateMonth_0(this.datePickerDays_0, this.datePickerModel_0.date);
    datePickerCalendar.appendChild(this.datePickerDays_0);
  };
  function DatePicker$buildFilters$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Filter calendar by: ');
  }
  function DatePicker$buildFilters$lambda$lambda$lambda$lambda(this$DatePicker) {
    return function (event) {
      this$DatePicker.filterCalendar_0(event);
    };
  }
  function DatePicker$buildFilters$lambda$lambda$lambda_0(closure$filter, this$DatePicker) {
    return function ($receiver) {
      set_id($receiver, closure$filter.name.toLowerCase());
      if (closure$filter.ordinal === 0) {
        $receiver.checked = true;
      }
      set_onClickFunction($receiver, DatePicker$buildFilters$lambda$lambda$lambda$lambda(this$DatePicker));
    };
  }
  function DatePicker$buildFilters$lambda$lambda$lambda$lambda_0(closure$filter) {
    return function ($receiver) {
      $receiver.for_ = closure$filter.toString();
      set_id($receiver, 'label-' + closure$filter);
      $receiver.unaryPlus_pdl1vz$(closure$filter.label);
    };
  }
  function DatePicker$buildFilters$lambda$lambda$lambda_1($receiver) {
    var tmp$, tmp$_0;
    tmp$ = FilterCalendar$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var filter_0 = tmp$[tmp$_0];
      label($receiver, 'tab', DatePicker$buildFilters$lambda$lambda$lambda$lambda_0(filter_0));
    }
  }
  function DatePicker$buildFilters$lambda$lambda(this$DatePicker) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      h4($receiver, void 0, DatePicker$buildFilters$lambda$lambda$lambda);
      tmp$ = FilterCalendar$values();
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var filter_0 = tmp$[tmp$_0];
        radioInput($receiver, void 0, void 0, 'filter', 'state', DatePicker$buildFilters$lambda$lambda$lambda_0(filter_0, this$DatePicker));
      }
      div($receiver, 'tabs', DatePicker$buildFilters$lambda$lambda$lambda_1);
      set_onClickFunction($receiver, Kotlin.getCallableRef('stopPropagation', function ($receiver_0) {
        return $receiver_0.stopPropagation();
      }));
    };
  }
  function DatePicker$buildFilters$lambda(this$DatePicker) {
    return function ($receiver) {
      div_0($receiver, DatePicker$Companion_getInstance().DATE_PICKER_PREFIX + '-filter', DatePicker$buildFilters$lambda$lambda(this$DatePicker));
    };
  }
  DatePicker.prototype.buildFilters_0 = function (datePickerView) {
    if (this.datePickerModel_0.showFilters) {
      append(datePickerView, DatePicker$buildFilters$lambda(this));
    }
  };
  DatePicker.prototype.filterCalendar_0 = function (event) {
    var tmp$;
    var filterSelected = Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
    this.datePickerModel_0.filter = FilterCalendar$Companion_getInstance().from_61zpoe$(filterSelected.id);
    this.populateMonth_0(this.datePickerDays_0, this.datePickerModel_0.date, true);
  };
  DatePicker.prototype.populateMonth_0 = function (datePickerDays, date, replace) {
    if (replace === void 0)
      replace = false;
    var tmp$, tmp$_0, tmp$_1;
    if (replace) {
      (tmp$ = datePickerDays.tBodies[0]) != null ? tmp$.remove() : null;
      this.populateTitle_0(date);
    }
    var tBody = datePickerDays.createTBody();
    var dayIndex = 0;
    var days = this.getDays_0(date);
    var firstDay = days.get_za3lpa$(dayIndex).date.getDay();
    var tableRow = {v: Kotlin.isType(tmp$_0 = tBody.insertRow(), HTMLTableRowElement) ? tmp$_0 : Kotlin.throwCCE()};
    var tmp$_2;
    tmp$_2 = until(0, firstDay).iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      tableRow.v.insertCell();
    }
    while (dayIndex < days.size) {
      dayIndex = this.buildWeek_0(tableRow.v, days, dayIndex, firstDay);
      tableRow.v = Kotlin.isType(tmp$_1 = tBody.insertRow(), HTMLTableRowElement) ? tmp$_1 : Kotlin.throwCCE();
      firstDay = 0;
    }
  };
  function DatePicker$buildWeek$lambda$lambda$lambda$lambda(this$, closure$day, this$DatePicker) {
    return function (it) {
      var tmp$;
      this$DatePicker.select_ymerww$(this$, closure$day);
      var tmp$_0;
      if ((tmp$ = this$DatePicker.datePickerModel_0.onSelect) != null) {
        var block$result;
        tmp$(this$DatePicker.datePickerModel_0.date);
        tmp$_0 = block$result;
      }
       else
        tmp$_0 = null;
      return tmp$_0;
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
        addClass(cell, [DatePicker$Companion_getInstance().DATE_PICKER_PREFIX + '-day']);
        if (tmp$_0.selected)
          addClass(cell, [DatePicker$Companion_getInstance().DATE_PICKER_SELECTED_CSS_CLASS]);
        if (tmp$_0.enable) {
          cell.onclick = DatePicker$buildWeek$lambda$lambda$lambda$lambda(cell, tmp$_0, this);
        }
         else {
          addClass(cell, [DatePicker$Companion_getInstance().DATE_PICKER_PREFIX + '-disabled']);
        }
        cell.innerText = '' + Kotlin.toString(tmp$_0.date.getDate());
        dayIndex.v = dayIndex.v + 1 | 0;
      }
    }
    return dayIndex.v;
  };
  DatePicker.prototype.select_ymerww$ = function (element, day) {
    this.clearSelected_0();
    day.selected = true;
    addClass(element, [DatePicker$Companion_getInstance().DATE_PICKER_SELECTED_CSS_CLASS]);
    this.datePickerModel_0.date = day.date;
    this.datePickerModel_0.inputField.value = toShortString(day.date);
    toggle(this.datePickerView_0);
  };
  DatePicker.prototype.getDays_0 = function (date) {
    var currentDate = new Date();
    var $receiver = new IntRange(1, 31);
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var dayDate = clone(date);
      dayDate.setDate(item);
      var enable = true;
      if (this.datePickerModel_0.disablePreviousCurrentDate) {
        enable = dateInt(dayDate) >= dateInt(currentDate);
      }
      tmp$_1 = this.datePickerModel_0.filter;
      if (Kotlin.equals(tmp$_1, FilterCalendar$WEEKDAYS_getInstance())) {
        var tmp$_2 = enable;
        if (tmp$_2) {
          var tmp$_3 = dayDate.getDay() === 0;
          if (!tmp$_3) {
            tmp$_3 = dayDate.getDay() === 6;
          }
          tmp$_2 = !tmp$_3;
        }
        enable = tmp$_2;
      }
       else if (Kotlin.equals(tmp$_1, FilterCalendar$WEEKENDS_getInstance())) {
        var tmp$_4 = enable;
        if (tmp$_4) {
          var tmp$_5 = dayDate.getDay() === 0;
          if (!tmp$_5) {
            tmp$_5 = dayDate.getDay() === 6;
          }
          tmp$_4 = tmp$_5;
        }
        enable = tmp$_4;
      }
      tmp$_0.call(destination, new Day(dayDate, Kotlin.equals(toShortString(currentDate), toShortString(dayDate)), enable));
    }
    var destination_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_6;
    tmp$_6 = destination.iterator();
    while (tmp$_6.hasNext()) {
      var element = tmp$_6.next();
      var innerDate = element.component1();
      if (date.getMonth() === innerDate.getMonth()) {
        destination_0.add_11rb$(element);
      }
    }
    return destination_0;
  };
  DatePicker.prototype.clearSelected_0 = function () {
    var $receiver = document.getElementsByClassName(DatePicker$Companion_getInstance().DATE_PICKER_SELECTED_CSS_CLASS);
    var cssClassName = [DatePicker$Companion_getInstance().DATE_PICKER_SELECTED_CSS_CLASS];
    var tmp$;
    tmp$ = Kotlin.org.w3c.dom.asList_kt9thq$($receiver).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      Kotlin.kotlin.dom.removeClass_hhb33f$(element, cssClassName.slice());
    }
  };
  DatePicker.prototype.clear = function () {
    this.datePickerModel_0.inputField.value = '';
  };
  DatePicker.prototype.getDate = function () {
    return this.datePickerModel_0.date;
  };
  function DatePicker$datePickerView$lambda($receiver) {
    $receiver.id = DatePicker$Companion_getInstance().DATE_PICKER_PREFIX;
  }
  function DatePicker$datePickerCalendar$lambda($receiver) {
    addClass($receiver, [DatePicker$Companion_getInstance().DATE_PICKER_PREFIX + '-calendar']);
  }
  function DatePicker$datePickerDays$lambda($receiver) {
    addClass($receiver, [DatePicker$Companion_getInstance().DATE_PICKER_PREFIX + '-days']);
  }
  function DatePicker$datePickerTitle$lambda($receiver) {
    addClass($receiver, [DatePicker$Companion_getInstance().DATE_PICKER_PREFIX + '-title']);
  }
  function DatePicker_init$lambda$lambda(this$DatePicker) {
    return function (event) {
      toggle(this$DatePicker.datePickerView_0);
      event.stopPropagation();
    };
  }
  function DatePicker_init$lambda(this$DatePicker) {
    return function (it) {
      hide(this$DatePicker.datePickerView_0);
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
  function datePickerModel(inputField, date, disablePreviousCurrentDate, filter_0, showFilters, onSelect) {
    if (date === void 0)
      date = new Date();
    if (disablePreviousCurrentDate === void 0)
      disablePreviousCurrentDate = true;
    if (filter_0 === void 0)
      filter_0 = FilterCalendar$ANY_getInstance();
    if (showFilters === void 0)
      showFilters = false;
    if (onSelect === void 0)
      onSelect = null;
    this.inputField = inputField;
    this.date = date;
    this.disablePreviousCurrentDate = disablePreviousCurrentDate;
    this.filter = filter_0;
    this.showFilters = showFilters;
    this.onSelect = onSelect;
  }
  datePickerModel.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'datePickerModel',
    interfaces: []
  };
  datePickerModel.prototype.component1 = function () {
    return this.inputField;
  };
  datePickerModel.prototype.component2 = function () {
    return this.date;
  };
  datePickerModel.prototype.component3 = function () {
    return this.disablePreviousCurrentDate;
  };
  datePickerModel.prototype.component4 = function () {
    return this.filter;
  };
  datePickerModel.prototype.component5 = function () {
    return this.showFilters;
  };
  datePickerModel.prototype.component6 = function () {
    return this.onSelect;
  };
  datePickerModel.prototype.copy_38knwu$ = function (inputField, date, disablePreviousCurrentDate, filter_0, showFilters, onSelect) {
    return new datePickerModel(inputField === void 0 ? this.inputField : inputField, date === void 0 ? this.date : date, disablePreviousCurrentDate === void 0 ? this.disablePreviousCurrentDate : disablePreviousCurrentDate, filter_0 === void 0 ? this.filter : filter_0, showFilters === void 0 ? this.showFilters : showFilters, onSelect === void 0 ? this.onSelect : onSelect);
  };
  datePickerModel.prototype.toString = function () {
    return 'datePickerModel(inputField=' + Kotlin.toString(this.inputField) + (', date=' + Kotlin.toString(this.date)) + (', disablePreviousCurrentDate=' + Kotlin.toString(this.disablePreviousCurrentDate)) + (', filter=' + Kotlin.toString(this.filter)) + (', showFilters=' + Kotlin.toString(this.showFilters)) + (', onSelect=' + Kotlin.toString(this.onSelect)) + ')';
  };
  datePickerModel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.inputField) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.disablePreviousCurrentDate) | 0;
    result = result * 31 + Kotlin.hashCode(this.filter) | 0;
    result = result * 31 + Kotlin.hashCode(this.showFilters) | 0;
    result = result * 31 + Kotlin.hashCode(this.onSelect) | 0;
    return result;
  };
  datePickerModel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.inputField, other.inputField) && Kotlin.equals(this.date, other.date) && Kotlin.equals(this.disablePreviousCurrentDate, other.disablePreviousCurrentDate) && Kotlin.equals(this.filter, other.filter) && Kotlin.equals(this.showFilters, other.showFilters) && Kotlin.equals(this.onSelect, other.onSelect)))));
  };
  function FilterCalendar(name, ordinal, label_0) {
    FilterCalendar$Companion_getInstance();
    Enum.call(this);
    this.label = label_0;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FilterCalendar_initFields() {
    FilterCalendar_initFields = function () {
    };
    FilterCalendar$ANY_instance = new FilterCalendar('ANY', 0, 'Any date');
    FilterCalendar$WEEKDAYS_instance = new FilterCalendar('WEEKDAYS', 1, 'Only weekdays');
    FilterCalendar$WEEKENDS_instance = new FilterCalendar('WEEKENDS', 2, 'Only weekends');
  }
  var FilterCalendar$ANY_instance;
  function FilterCalendar$ANY_getInstance() {
    FilterCalendar_initFields();
    return FilterCalendar$ANY_instance;
  }
  var FilterCalendar$WEEKDAYS_instance;
  function FilterCalendar$WEEKDAYS_getInstance() {
    FilterCalendar_initFields();
    return FilterCalendar$WEEKDAYS_instance;
  }
  var FilterCalendar$WEEKENDS_instance;
  function FilterCalendar$WEEKENDS_getInstance() {
    FilterCalendar_initFields();
    return FilterCalendar$WEEKENDS_instance;
  }
  function FilterCalendar$Companion() {
    FilterCalendar$Companion_instance = this;
  }
  FilterCalendar$Companion.prototype.from_61zpoe$ = function (string) {
    return FilterCalendar$valueOf(string.toUpperCase());
  };
  FilterCalendar$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FilterCalendar$Companion_instance = null;
  function FilterCalendar$Companion_getInstance() {
    if (FilterCalendar$Companion_instance === null) {
      new FilterCalendar$Companion();
    }
    return FilterCalendar$Companion_instance;
  }
  FilterCalendar.prototype.toString = function () {
    return this.name.toLowerCase();
  };
  FilterCalendar.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FilterCalendar',
    interfaces: [Enum]
  };
  function FilterCalendar$values() {
    return [FilterCalendar$ANY_getInstance(), FilterCalendar$WEEKDAYS_getInstance(), FilterCalendar$WEEKENDS_getInstance()];
  }
  FilterCalendar.values = FilterCalendar$values;
  function FilterCalendar$valueOf(name) {
    switch (name) {
      case 'ANY':
        return FilterCalendar$ANY_getInstance();
      case 'WEEKDAYS':
        return FilterCalendar$WEEKDAYS_getInstance();
      case 'WEEKENDS':
        return FilterCalendar$WEEKENDS_getInstance();
      default:Kotlin.throwISE('No enum constant org.example.datepicker.FilterCalendar.' + name);
    }
  }
  FilterCalendar.valueOf_61zpoe$ = FilterCalendar$valueOf;
  Object.defineProperty(DatePicker, 'Companion', {
    get: DatePicker$Companion_getInstance
  });
  var package$org = _.org || (_.org = {});
  var package$example = package$org.example || (package$org.example = {});
  var package$datepicker = package$example.datepicker || (package$example.datepicker = {});
  package$datepicker.DatePicker = DatePicker;
  package$datepicker.Day = Day;
  package$datepicker.datePickerModel = datePickerModel;
  Object.defineProperty(FilterCalendar, 'ANY', {
    get: FilterCalendar$ANY_getInstance
  });
  Object.defineProperty(FilterCalendar, 'WEEKDAYS', {
    get: FilterCalendar$WEEKDAYS_getInstance
  });
  Object.defineProperty(FilterCalendar, 'WEEKENDS', {
    get: FilterCalendar$WEEKENDS_getInstance
  });
  Object.defineProperty(FilterCalendar, 'Companion', {
    get: FilterCalendar$Companion_getInstance
  });
  package$datepicker.FilterCalendar = FilterCalendar;
  Kotlin.defineModule('datepicker-library', _);
  return _;
}(typeof this['datepicker-library'] === 'undefined' ? {} : this['datepicker-library'], kotlin, this['common-library'], this['kotlinx-html-js']);

//@ sourceMappingURL=datepicker-library.js.map
