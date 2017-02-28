package org.example.timepicker

import kotlinx.html.classes
import kotlinx.html.dom.append
import kotlinx.html.dom.create
import kotlinx.html.li
import kotlinx.html.nav
import org.example.appendZero
import org.example.hide
import org.example.removeCssClass
import org.example.toggle
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLLIElement
import org.w3c.dom.HTMLUListElement
import org.w3c.dom.asList
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass
import kotlin.dom.createElement

/**
 * User: HUGE-gilbert
 * Date: 2/27/17
 * Time: 10:31 AM
 */
class TimePicker(private val inputField: HTMLInputElement, private var selectedTime: Time = Time(60 * 12)) {
    companion object {
        val TIME_PICKER_PREFIX = "timepicker"
        val TIME_PICKER_SELECTED_CSS_CLASS = TIME_PICKER_PREFIX + "-selected"
        val INTERVAL_ATTRIBUTE = "data-interval"
        val MAX_TIME_RANGE = 15 * 4 * 24 - 15 // Four intervals every hour per 24 hours minus 1 interval
    }

    private val timePickerView = document.createElement("ul", {
        id = TIME_PICKER_PREFIX
    }) as HTMLUListElement

    init {
        window.onclick = {
            timePickerView.hide()
        }
        inputField.apply {
            addClass(TIME_PICKER_PREFIX + "-input")
            readOnly = true
            onclick = { event ->
                toggle(timePickerView)
                event.stopPropagation()
            }
        }

        buildTimePicker(inputField)
        selectTime()
    }

    /**
     * Builds the UI of the given time picker view
     */
    private fun buildTimePicker(inputField: HTMLInputElement) {
        timePickerView.hide()

        for (interval in 0..MAX_TIME_RANGE step 15) {
            timePickerView.append {
                li {
                    classes += TIME_PICKER_PREFIX + "-item"
                    attributes[INTERVAL_ATTRIBUTE] = interval.toString()
                }.apply {
                    val time = Time(interval)
                    time.selected = (time.interval == selectedTime.interval)
                    innerText = "$time"
                    if (time.selected) addClass(TIME_PICKER_SELECTED_CSS_CLASS)

                    onclick = { event ->
                        val element = event.target as HTMLLIElement
                        select(element, time)
                    }
                }
            }
        }

        inputField.insertAdjacentElement("afterend", document.create.nav {}.apply {
            append(timePickerView)
        })
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
    fun toggle(element: HTMLUListElement) {
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
}

data class Time(val interval: Int, var selected: Boolean = false) {
    companion object {
        val AM_PM_INDICATOR = 60 * 12
    }

    fun getHour(): Int {
        if (interval / 60 == 12) {
            return 12
        } else {
            return (interval / 60) % 12
        }
    }

    fun getMinute() = interval % 60
    fun isAm() = interval < AM_PM_INDICATOR
    fun getTimeFormat() = if (isAm()) "AM" else "PM"

    override fun toString(): String = "${getHour().appendZero()}:${getMinute().appendZero()} ${getTimeFormat()}"
}