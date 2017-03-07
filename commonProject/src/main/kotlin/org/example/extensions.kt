package org.example

import org.w3c.dom.HTMLCollection
import org.w3c.dom.HTMLElement
import org.w3c.dom.asList
import kotlin.dom.removeClass
import kotlin.js.Date

/**
 * Extension functions
 */

// Int related extensions
fun Int.appendZero(): String = if (this > 9 || this < 0) "$this" else "0" + this

// Date related extensions
inline fun Date.getDayOfWeek(): Int = asDynamic().getDay()
inline fun Date.getDate(): Int = asDynamic().getDate()
inline fun Date.getMonth(): Int = asDynamic().getMonth()
inline fun Date.getFullYear(): Int = asDynamic().getFullYear()
inline fun Date.getHours(): Int = asDynamic().getHours()
inline fun Date.getMinutes(): Int = asDynamic().getMinutes()

fun Date.clone(): Date {
    val clonedDate = Date()
    clonedDate.setTime(this.getTime())
    return clonedDate
}

fun Date.toShortString(): String {
    val monthStr = (getMonth() + 1).appendZero()
    val dayStr = getDate().appendZero()

    return "$monthStr/$dayStr/${getFullYear()}"
}

fun Date.dateInt(): Int {
    val monthStr = (getMonth() + 1).appendZero()
    val dayStr = getDate().appendZero()

    return "${getFullYear()}$monthStr$dayStr".toInt()
}

inline fun Date.setTime(time: Double) = asDynamic().setTime(time)
inline fun Date.setDate(day: Int) = asDynamic().setDate(day)
inline fun Date.setMonth(month: Int) = asDynamic().setMonth(month)
inline fun Date.setHours(hours: Int, minutes: Int = 0, seconds: Int = 0, ms: Int = 0) = apply { asDynamic().setHours(hours, minutes, seconds, ms) }

inline fun Date.addMonth(interval: Int): Date {
    return this.apply {
        setMonth(getMonth() + interval)
    }
}

inline fun Date.isWeekend() = (getDayOfWeek() == 0 || getDayOfWeek() == 6)
inline fun Date.isWeekday() = !isWeekend()

// HTML related extensions
fun HTMLElement.hide() {
    style.display = "none"
}

fun HTMLElement.toggle() {
    style.display = if (style.display == "none") "flex" else "none"
}

inline fun HTMLCollection.removeCssClass(vararg cssClassName: String) = asList().forEach { element -> element.removeClass(*cssClassName) }