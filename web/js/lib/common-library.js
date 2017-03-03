if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'common-library'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'common-library'.");
}
this['common-library'] = function (_, Kotlin) {
  'use strict';
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  function appendZero($receiver) {
    return $receiver > 9 ? $receiver.toString() : '0' + Kotlin.toString($receiver);
  }
  var getDayOfWeek = Kotlin.defineInlineFunction('common-library.org.example.getDayOfWeek_t5kl13$', function ($receiver) {
    return $receiver.getDay();
  });
  var getDate = Kotlin.defineInlineFunction('common-library.org.example.getDate_t5kl13$', function ($receiver) {
    return $receiver.getDate();
  });
  var getMonth = Kotlin.defineInlineFunction('common-library.org.example.getMonth_t5kl13$', function ($receiver) {
    return $receiver.getMonth();
  });
  var getFullYear = Kotlin.defineInlineFunction('common-library.org.example.getFullYear_t5kl13$', function ($receiver) {
    return $receiver.getFullYear();
  });
  var getHours = Kotlin.defineInlineFunction('common-library.org.example.getHours_t5kl13$', function ($receiver) {
    return $receiver.getHours();
  });
  var getMinutes = Kotlin.defineInlineFunction('common-library.org.example.getMinutes_t5kl13$', function ($receiver) {
    return $receiver.getMinutes();
  });
  function clone($receiver) {
    var clonedDate = new Date();
    clonedDate.setTime($receiver.getTime());
    return clonedDate;
  }
  function toShortString($receiver) {
    var monthStr = appendZero($receiver.getMonth() + 1 | 0);
    var dayStr = appendZero($receiver.getDate());
    return monthStr + '/' + dayStr + '/' + $receiver.getFullYear();
  }
  function dateInt($receiver) {
    var monthStr = appendZero($receiver.getMonth() + 1 | 0);
    var dayStr = appendZero($receiver.getDate());
    return toInt($receiver.getFullYear().toString() + monthStr + dayStr);
  }
  var setTime = Kotlin.defineInlineFunction('common-library.org.example.setTime_peg6ln$', function ($receiver, time) {
    return $receiver.setTime(time);
  });
  var setDate = Kotlin.defineInlineFunction('common-library.org.example.setDate_79if1n$', function ($receiver, day) {
    return $receiver.setDate(day);
  });
  var setMonth = Kotlin.defineInlineFunction('common-library.org.example.setMonth_79if1n$', function ($receiver, month) {
    return $receiver.setMonth(month);
  });
  function setHours$lambda(closure$hours, closure$minutes, closure$seconds, closure$ms) {
    return function ($receiver) {
      $receiver.setHours(closure$hours, closure$minutes, closure$seconds, closure$ms);
    };
  }
  var setHours = Kotlin.defineInlineFunction('common-library.org.example.setHours_x04zjx$', function ($receiver, hours, minutes, seconds, ms) {
    if (minutes === void 0)
      minutes = 0;
    if (seconds === void 0)
      seconds = 0;
    if (ms === void 0)
      ms = 0;
    $receiver.setHours(hours, minutes, seconds, ms);
    return $receiver;
  });
  function addMonth$lambda(closure$interval) {
    return function ($receiver) {
      $receiver.setMonth($receiver.getMonth() + closure$interval | 0);
    };
  }
  var addMonth = Kotlin.defineInlineFunction('common-library.org.example.addMonth_79if1n$', function ($receiver, interval) {
    $receiver.setMonth($receiver.getMonth() + interval | 0);
    return $receiver;
  });
  var isWeekend = Kotlin.defineInlineFunction('common-library.org.example.isWeekend_t5kl13$', function ($receiver) {
    var tmp$ = $receiver.getDay() === 0;
    if (!tmp$) {
      tmp$ = $receiver.getDay() === 6;
    }
    return tmp$;
  });
  var isWeekday = Kotlin.defineInlineFunction('common-library.org.example.isWeekday_t5kl13$', function ($receiver) {
    var tmp$ = $receiver.getDay() === 0;
    if (!tmp$) {
      tmp$ = $receiver.getDay() === 6;
    }
    return !tmp$;
  });
  function hide($receiver) {
    $receiver.style.display = 'none';
  }
  function toggle($receiver) {
    $receiver.style.display = Kotlin.equals($receiver.style.display, 'none') ? 'flex' : 'none';
  }
  function removeCssClass$lambda(closure$cssClassName) {
    return function (element) {
      Kotlin.kotlin.dom.removeClass_hhb33f$(element, closure$cssClassName.slice());
    };
  }
  var removeCssClass = Kotlin.defineInlineFunction('common-library.org.example.removeCssClass_6mlcho$', function ($receiver, cssClassName) {
    var tmp$;
    tmp$ = Kotlin.org.w3c.dom.asList_kt9thq$($receiver).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      Kotlin.kotlin.dom.removeClass_hhb33f$(element, cssClassName.slice());
    }
  });
  var package$org = _.org || (_.org = {});
  var package$example = package$org.example || (package$org.example = {});
  package$example.appendZero_s8ev3n$ = appendZero;
  package$example.getDayOfWeek_t5kl13$ = getDayOfWeek;
  package$example.getDate_t5kl13$ = getDate;
  package$example.getMonth_t5kl13$ = getMonth;
  package$example.getFullYear_t5kl13$ = getFullYear;
  package$example.getHours_t5kl13$ = getHours;
  package$example.getMinutes_t5kl13$ = getMinutes;
  package$example.clone_t5kl13$ = clone;
  package$example.toShortString_t5kl13$ = toShortString;
  package$example.dateInt_t5kl13$ = dateInt;
  package$example.setTime_peg6ln$ = setTime;
  package$example.setDate_79if1n$ = setDate;
  package$example.setMonth_79if1n$ = setMonth;
  package$example.setHours$f = setHours$lambda;
  package$example.setHours_x04zjx$ = setHours;
  package$example.addMonth$f = addMonth$lambda;
  package$example.addMonth_79if1n$ = addMonth;
  package$example.isWeekend_t5kl13$ = isWeekend;
  package$example.isWeekday_t5kl13$ = isWeekday;
  package$example.hide_y4uc6z$ = hide;
  package$example.toggle_y4uc6z$ = toggle;
  package$example.removeCssClass$f = removeCssClass$lambda;
  package$example.removeCssClass_6mlcho$ = removeCssClass;
  Kotlin.defineModule('common-library', _);
  return _;
}(typeof this['common-library'] === 'undefined' ? {} : this['common-library'], kotlin);

//@ sourceMappingURL=common-library.js.map
