package org.example.timepicker

import kotlinx.html.classes
import kotlinx.html.dom.append
import kotlinx.html.dom.create
import kotlinx.html.li
import kotlinx.html.nav
import org.example.*
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLLIElement
import org.w3c.dom.asList
import kotlin.browser.document
import kotlin.browser.window
import kotlin.collections.set
import kotlin.dom.addClass
import kotlin.dom.createElement
import kotlin.js.Date

/**
 * User: HUGE-gilbert
 * Date: 2/27/17
 * Time: 10:31 AM
 */
class TimePicker(private val inputField: HTMLInputElement, var selectedTime: Time = DEFAULT_TIME_VALUE,
                 val disablePreviousCurrentTime: Boolean = true) {
    companion object {
        const val TIME_PICKER_PREFIX = "timepicker"
        const val TIME_PICKER_SELECTED_CSS_CLASS = TIME_PICKER_PREFIX + "-selected"
        const val INTERVAL_ATTRIBUTE = "data-interval"
        const val MAX_TIME_RANGE = 15 * 4 * 24 // Four intervals every hour per 24 hours minus 1 interval
        val DEFAULT_TIME_VALUE = Time(60 * 12)
    }

    private val timePickerView = document.createElement("ul", {
        id = TIME_PICKER_PREFIX
    }) as HTMLElement

    init {
        inputField.apply {
            addClass(TIME_PICKER_PREFIX + "-input")
            readOnly = true
            onclick = { event ->
                toggle(timePickerView)
                event.stopPropagation()
            }
        }

        inputField.insertAdjacentElement("afterend", document.create.nav {}.apply {
            append(timePickerView)
        })
        initTimePicker()
    }

    /**
     * Initialize time picker creation
     */
    private fun initTimePicker(timePickerView: HTMLElement = this.timePickerView, date: Date = Date()) {
        buildTimePicker(timePickerView, date)
        selectTime()
        window.addEventListener("click", { timePickerView.hide() })
    }

    /**
     * Builds the UI of the given time picker view
     */
    private fun buildTimePicker(timePickerView: HTMLElement, date: Date) {
        timePickerView.hide()

        var intervals = getIntervals(date)
        if (disablePreviousCurrentTime) {
            intervals = intervals.filter(Time::enabled)
            intervals[0].selected = true
        }

        intervals.forEach { time ->
            timePickerView.append {
                li {
                    classes += TIME_PICKER_PREFIX + "-item"
                    attributes[INTERVAL_ATTRIBUTE] = time.interval.toString()
                }.apply {
                    innerText = time.toString()
                    if (time.selected) addClass(TIME_PICKER_SELECTED_CSS_CLASS)

                    onclick = { event ->
                        val element = event.target as HTMLLIElement
                        select(element, time)
                    }
                }
            }
        }
    }

    /**
     * Return a list of time intervals (every 15 minutes)
     */
    private fun getIntervals(date: Date): List<Time> {
        return (0 until MAX_TIME_RANGE step 15).map { interval ->
            val time = Time(interval, selected = (interval == selectedTime.interval))
            val intervalDate = Date().setHours(time.getHour(), time.getMinute())

            val enabled = if (disablePreviousCurrentTime && intervalDate.dateInt() == date.dateInt()) {
                (intervalDate.getTime() > date.getTime())
            } else true
            time.apply { this.enabled = enabled }
        }
    }

    /**
     * Select the default time
     */
    private fun selectTime() {
        document.getElementsByClassName(TIME_PICKER_SELECTED_CSS_CLASS).asList().forEach { element ->
            val liElement = element as HTMLLIElement
            liElement.getAttribute(INTERVAL_ATTRIBUTE)?.let { interval ->
                select(liElement, Time(interval.toInt()))
            }
        }
    }

    /**
     * Toggle the component, if it becomes visible then scroll to the selected value
     */
    fun toggle(element: HTMLElement) {
        element.toggle()
        if (element.style.display != "none") {
            selectTime()
        }
    }

    /**
     * Select a given time in the component
     */
    fun select(element: HTMLLIElement, time: Time) {
        clearSelected()
        element.addClass(TIME_PICKER_SELECTED_CSS_CLASS)

        time.selected = true
        inputField.value = time.toString()
        selectedTime = time
        timePickerView.scrollTop = element.offsetTop.toDouble()
    }

    private fun clearSelected() {
        document.getElementsByClassName(TIME_PICKER_SELECTED_CSS_CLASS).removeCssClass(TIME_PICKER_SELECTED_CSS_CLASS)
    }

    /**
     * Reset the time picker to the default value
     */
    fun reset() {
        clearSelected()
        document.querySelector("""li[$INTERVAL_ATTRIBUTE="${DEFAULT_TIME_VALUE.interval}"]""")?.let { element ->
            if (element is HTMLLIElement) select(element, DEFAULT_TIME_VALUE)
        }
    }

    /**
     * Changes the current date for the time picker
     */
    fun changeDate(date: Date) {
        while (timePickerView.hasChildNodes()) {
            timePickerView.lastChild?.let { child ->
                timePickerView.removeChild(child)
            }
        }

        initTimePicker(timePickerView, date)
    }
}

data class Time(val interval: Int, var selected: Boolean = false, var enabled: Boolean = true) {
    companion object {
        val AM_PM_INDICATOR = 60 * 12
    }

    inline fun getHour() = interval / 60

    fun getHourAmPm(): Int {
        if (interval / 60 == 12) {
            return 12
        } else {
            return (interval / 60) % 12
        }
    }

    fun getMinute() = interval % 60
    fun isAm() = interval < AM_PM_INDICATOR
    fun getTimeFormat() = if (isAm()) "AM" else "PM"

    override fun toString(): String = "${getHourAmPm().appendZero()}:${getMinute().appendZero()} ${getTimeFormat()}"
}