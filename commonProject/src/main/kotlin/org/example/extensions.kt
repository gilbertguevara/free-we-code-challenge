package org.example

import org.w3c.dom.HTMLCollection
import org.w3c.dom.HTMLElement
import org.w3c.dom.asList
import kotlin.dom.removeClass
import kotlin.js.Date

/**
 * Extension functions
 *
 * User: HUGE-gilbert
 * Date: 2/24/17
 * Time: 1:14 PM
 */

// Date related extensions
inline fun Date.getDayOfMonth(): Int = asDynamic().getDay()

inline fun Date.getDate(): Int = asDynamic().getDate()
inline fun Date.getMonth(): Int = asDynamic().getMonth()
inline fun Date.getFullYear(): Int = asDynamic().getFullYear()

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

fun Int.appendZero(): String = if (this > 9) "$this" else "0" + this

inline fun Date.setTime(time: Double) = asDynamic().setTime(time)
inline fun Date.setDate(day: Int) = asDynamic().setDate(day)
inline fun Date.setMonth(month: Int) = asDynamic().setMonth(month)

inline fun Date.addMonth(interval: Int): Date {
    return this.apply {
        setMonth(getMonth() + interval)
    }
}

// HTML related extensions
fun HTMLElement.hide() {
    style.display = "none"
}

fun HTMLElement.toggle() {
    style.display = if (style.display == "none") "flex" else "none"
    style.opacity = "255"
}

inline fun HTMLCollection.removeCssClass(vararg cssClassName: String) = asList().forEach { element -> element.removeClass(*cssClassName) }