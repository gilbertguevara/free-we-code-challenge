package org.example.timepicker

import kotlinx.html.InputType
import kotlinx.html.dom.create
import kotlinx.html.js.div
import kotlinx.html.js.input
import org.example.getDate
import org.example.setDate
import org.junit.Test
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.asList
import kotlin.browser.document
import kotlin.dom.hasClass
import kotlin.js.Date
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

/**
 * Created by gilbert.
 *
 * Time Picker component tests.
 */
class TimePickerTest {
    companion object {
        val TIME_PICKER_SELECTED = "." + TimePicker.TIME_PICKER_SELECTED_CSS_CLASS;
    }

    private val inputTimePicker: HTMLInputElement by lazy {
        document.create.input(type = InputType.text) {}
    }
    private val timePicker: TimePicker by lazy {
        document.create.div {}.appendChild(inputTimePicker)
        TimePicker(inputTimePicker)
    }

    @Test
    fun shouldBuiltTimePicker() {
        timePicker
        val timePickerView = inputTimePicker.nextElementSibling as HTMLElement
        assertNotNull(timePickerView)
        assertNotNull(timePickerView.querySelector(TIME_PICKER_SELECTED))
        assertNotNull(timePickerView.querySelector(".timepicker-item"))
    }

    @Test
    fun shouldToggleTimePicker() {
        timePicker
        val timePickerView = inputTimePicker.nextElementSibling as HTMLElement
        timePicker.toggle(timePickerView)

        assertNotEquals("none", timePickerView.style.display)
    }

    @Test
    fun shouldSelectElement() {
        timePicker
        val timePickerView = inputTimePicker.nextElementSibling as HTMLElement
        val lastItem = timePickerView.querySelectorAll(".timepicker-item").asList().lastOrNull() as HTMLElement
        lastItem?.let { lastItem ->
            lastItem.getAttribute(TimePicker.INTERVAL_ATTRIBUTE)?.let { interval ->
                val time = Time(interval.toInt(), selected = true)
                timePicker.select(lastItem, time)

                assertTrue(lastItem.hasClass(TimePicker.TIME_PICKER_SELECTED_CSS_CLASS))
                assertEquals(time, timePicker.selectedTime)
            }

        }
    }

    @Test
    fun shouldReset() {
        timePicker.reset()
        val timePickerView = inputTimePicker.nextElementSibling as HTMLElement
        assertTrue { timePickerView.querySelectorAll(TIME_PICKER_SELECTED).asList().isNotEmpty() }
    }

    @Test
    fun shouldChangeDate() {
        val date = Date().apply { setDate(getDate() + 1) }
        timePicker.changeDate(date)
        val timePickerView = inputTimePicker.nextElementSibling as HTMLElement

        assertEquals(4 * 24, timePickerView.querySelectorAll(".timepicker-item").length)
    }
}