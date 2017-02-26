package com.hugeinc.datepicker

import kotlin.js.Date

/**
 * Extension functions
 *
 * User: HUGE-gilbert
 * Date: 2/24/17
 * Time: 1:14 PM
 */
inline fun Date.getDayOfMonth(): Int = asDynamic().getDay()

inline fun Date.getDate(): Int = asDynamic().getDate()
inline fun Date.getMonth(): Int = asDynamic().getMonth()
inline fun Date.getFullYear(): Int = asDynamic().getFullYear()

fun Date.toShortString(): String {
    val monthStr = appendZero(getMonth() + 1)
    val dayStr = appendZero(getDate())

    return "${monthStr}/${dayStr}/${getFullYear()}"
}

private fun appendZero(value: Int): String = if (value > 9) "$value" else "0" + value

inline fun Date.setTime(time: Double) = asDynamic().setTime(time)
inline fun Date.setDate(day: Int) = asDynamic().setDate(day)
inline fun Date.setMonth(month: Int) = asDynamic().setMonth(month)

inline fun Date.addMonth(interval: Int): Date {
    return this.apply {
        setMonth(getMonth() + interval)
    }
}