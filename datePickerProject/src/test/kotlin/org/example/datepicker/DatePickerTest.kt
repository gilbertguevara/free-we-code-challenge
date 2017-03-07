package org.example.datepicker

import kotlinx.html.InputType
import kotlinx.html.dom.create
import kotlinx.html.js.div
import kotlinx.html.js.input
import org.example.*
import org.junit.Test
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.asList
import kotlin.browser.document
import kotlin.js.Date
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals
import kotlin.test.assertTrue

/**
 * Created by gilbert.
 *
 * Date picker tests.
 */
class DatePickerTest {
    companion object {
        val DATE_PICKER_SELECTED = "." + DatePicker.DATE_PICKER_SELECTED_CSS_CLASS
    }

    private val date: Date by lazy {
        Date().apply {
            asDynamic().setDate(1)
            asDynamic().setMonth(0)
            asDynamic().setFullYear(2017)
        }
    }
    private val inputDatePicker: HTMLInputElement by lazy {
        document.create.input(type = InputType.text) {}
    }
    private val datePicker: DatePicker by lazy {
        document.create.div {}.appendChild(inputDatePicker)
        val params = datePickerModel(inputDatePicker, date = date, showFilters = true)
        DatePicker(params)
    }

    @Test
    fun shouldBuildDatePickerWithFilter() {
        datePicker
        val datePickerView = inputDatePicker.nextElementSibling as HTMLDivElement
        val expected = """<div id="datepicker" style="display: none;"><div class="datepicker-calendar"><nav class="datepicker-header"><div class="datepicker-prev"><i class="material-icons">keyboard_arrow_left</i></div><div class="datepicker-title"><span>January 2017</span></div><div class="datepicker-next"><i class="material-icons">keyboard_arrow_right</i></div></nav><table class="datepicker-days"><thead><tr><th><span class="datepicker-dayname" title="Sunday">Su</span></th><th><span class="datepicker-dayname" title="Monday">Mo</span></th><th><span class="datepicker-dayname" title="Tuesday">Tu</span></th><th><span class="datepicker-dayname" title="Wednesday">We</span></th><th><span class="datepicker-dayname" title="Thursday">Th</span></th><th><span class="datepicker-dayname" title="Friday">Fr</span></th><th><span class="datepicker-dayname" title="Saturday">Sa</span></th></tr></thead><tbody><tr><td class="datepicker-day datepicker-disabled">1</td><td class="datepicker-day datepicker-disabled">2</td><td class="datepicker-day datepicker-disabled">3</td><td class="datepicker-day datepicker-disabled">4</td><td class="datepicker-day datepicker-disabled">5</td><td class="datepicker-day datepicker-disabled">6</td><td class="datepicker-day datepicker-disabled">7</td></tr><tr><td class="datepicker-day datepicker-disabled">8</td><td class="datepicker-day datepicker-disabled">9</td><td class="datepicker-day datepicker-disabled">10</td><td class="datepicker-day datepicker-disabled">11</td><td class="datepicker-day datepicker-disabled">12</td><td class="datepicker-day datepicker-disabled">13</td><td class="datepicker-day datepicker-disabled">14</td></tr><tr><td class="datepicker-day datepicker-disabled">15</td><td class="datepicker-day datepicker-disabled">16</td><td class="datepicker-day datepicker-disabled">17</td><td class="datepicker-day datepicker-disabled">18</td><td class="datepicker-day datepicker-disabled">19</td><td class="datepicker-day datepicker-disabled">20</td><td class="datepicker-day datepicker-disabled">21</td></tr><tr><td class="datepicker-day datepicker-disabled">22</td><td class="datepicker-day datepicker-disabled">23</td><td class="datepicker-day datepicker-disabled">24</td><td class="datepicker-day datepicker-disabled">25</td><td class="datepicker-day datepicker-disabled">26</td><td class="datepicker-day datepicker-disabled">27</td><td class="datepicker-day datepicker-disabled">28</td></tr><tr><td class="datepicker-day datepicker-disabled">29</td><td class="datepicker-day datepicker-disabled">30</td><td class="datepicker-day datepicker-disabled">31</td><td></td><td></td><td></td><td></td></tr><tr></tr></tbody></table></div><div class="datepicker-filter"><h4>Filter calendar by: </h4><input type="radio" name="filter" class="state" id="any" checked="checked"><input type="radio" name="filter" class="state" id="weekdays"><input type="radio" name="filter" class="state" id="weekends"><div class="tabs"><label class="tab" for="any" id="label-any">Any date</label><label class="tab" for="weekdays" id="label-weekdays">Only weekdays</label><label class="tab" for="weekends" id="label-weekends">Only weekends</label></div></div></div>"""
        assertEquals(expected, datePickerView.outerHTML)
    }

    @Test
    fun shouldBuildDatePickerWithoutFilter() {
        document.create.div {}.appendChild(inputDatePicker)
        val params = datePickerModel(inputDatePicker, date = date)
        DatePicker(params)

        val datePickerView = inputDatePicker.nextElementSibling as HTMLDivElement
        val expected = """<div id="datepicker" style="display: none;"><div class="datepicker-calendar"><nav class="datepicker-header"><div class="datepicker-prev"><i class="material-icons">keyboard_arrow_left</i></div><div class="datepicker-title"><span>January 2017</span></div><div class="datepicker-next"><i class="material-icons">keyboard_arrow_right</i></div></nav><table class="datepicker-days"><thead><tr><th><span class="datepicker-dayname" title="Sunday">Su</span></th><th><span class="datepicker-dayname" title="Monday">Mo</span></th><th><span class="datepicker-dayname" title="Tuesday">Tu</span></th><th><span class="datepicker-dayname" title="Wednesday">We</span></th><th><span class="datepicker-dayname" title="Thursday">Th</span></th><th><span class="datepicker-dayname" title="Friday">Fr</span></th><th><span class="datepicker-dayname" title="Saturday">Sa</span></th></tr></thead><tbody><tr><td class="datepicker-day datepicker-disabled">1</td><td class="datepicker-day datepicker-disabled">2</td><td class="datepicker-day datepicker-disabled">3</td><td class="datepicker-day datepicker-disabled">4</td><td class="datepicker-day datepicker-disabled">5</td><td class="datepicker-day datepicker-disabled">6</td><td class="datepicker-day datepicker-disabled">7</td></tr><tr><td class="datepicker-day datepicker-disabled">8</td><td class="datepicker-day datepicker-disabled">9</td><td class="datepicker-day datepicker-disabled">10</td><td class="datepicker-day datepicker-disabled">11</td><td class="datepicker-day datepicker-disabled">12</td><td class="datepicker-day datepicker-disabled">13</td><td class="datepicker-day datepicker-disabled">14</td></tr><tr><td class="datepicker-day datepicker-disabled">15</td><td class="datepicker-day datepicker-disabled">16</td><td class="datepicker-day datepicker-disabled">17</td><td class="datepicker-day datepicker-disabled">18</td><td class="datepicker-day datepicker-disabled">19</td><td class="datepicker-day datepicker-disabled">20</td><td class="datepicker-day datepicker-disabled">21</td></tr><tr><td class="datepicker-day datepicker-disabled">22</td><td class="datepicker-day datepicker-disabled">23</td><td class="datepicker-day datepicker-disabled">24</td><td class="datepicker-day datepicker-disabled">25</td><td class="datepicker-day datepicker-disabled">26</td><td class="datepicker-day datepicker-disabled">27</td><td class="datepicker-day datepicker-disabled">28</td></tr><tr><td class="datepicker-day datepicker-disabled">29</td><td class="datepicker-day datepicker-disabled">30</td><td class="datepicker-day datepicker-disabled">31</td><td></td><td></td><td></td><td></td></tr><tr></tr></tbody></table></div></div>"""
        assertEquals(expected, datePickerView.outerHTML)
    }

    @Test
    fun shouldShowDatePicker() {
        datePicker
        inputDatePicker.click()
        val datePickerView = inputDatePicker.nextElementSibling as HTMLDivElement
        assertNotEquals("none", datePickerView.style.display)
    }

    @Test
    fun shouldGoOneMonthAgoOnPrevClicked() {
        datePicker
        inputDatePicker.click()
        val datePickerView = inputDatePicker.nextElementSibling as HTMLDivElement
        val previousDiv = datePickerView.querySelector(".datepicker-prev") as HTMLElement
        previousDiv.click()

        val expected = """<div id="datepicker" style="display: flex;"><div class="datepicker-calendar"><nav class="datepicker-header"><div class="datepicker-prev"><i class="material-icons">keyboard_arrow_left</i></div><div class="datepicker-title"><span>December 2016</span></div><div class="datepicker-next"><i class="material-icons">keyboard_arrow_right</i></div></nav><table class="datepicker-days"><thead><tr><th><span class="datepicker-dayname" title="Sunday">Su</span></th><th><span class="datepicker-dayname" title="Monday">Mo</span></th><th><span class="datepicker-dayname" title="Tuesday">Tu</span></th><th><span class="datepicker-dayname" title="Wednesday">We</span></th><th><span class="datepicker-dayname" title="Thursday">Th</span></th><th><span class="datepicker-dayname" title="Friday">Fr</span></th><th><span class="datepicker-dayname" title="Saturday">Sa</span></th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td class="datepicker-day datepicker-disabled">1</td><td class="datepicker-day datepicker-disabled">2</td><td class="datepicker-day datepicker-disabled">3</td></tr><tr><td class="datepicker-day datepicker-disabled">4</td><td class="datepicker-day datepicker-disabled">5</td><td class="datepicker-day datepicker-disabled">6</td><td class="datepicker-day datepicker-disabled">7</td><td class="datepicker-day datepicker-disabled">8</td><td class="datepicker-day datepicker-disabled">9</td><td class="datepicker-day datepicker-disabled">10</td></tr><tr><td class="datepicker-day datepicker-disabled">11</td><td class="datepicker-day datepicker-disabled">12</td><td class="datepicker-day datepicker-disabled">13</td><td class="datepicker-day datepicker-disabled">14</td><td class="datepicker-day datepicker-disabled">15</td><td class="datepicker-day datepicker-disabled">16</td><td class="datepicker-day datepicker-disabled">17</td></tr><tr><td class="datepicker-day datepicker-disabled">18</td><td class="datepicker-day datepicker-disabled">19</td><td class="datepicker-day datepicker-disabled">20</td><td class="datepicker-day datepicker-disabled">21</td><td class="datepicker-day datepicker-disabled">22</td><td class="datepicker-day datepicker-disabled">23</td><td class="datepicker-day datepicker-disabled">24</td></tr><tr><td class="datepicker-day datepicker-disabled">25</td><td class="datepicker-day datepicker-disabled">26</td><td class="datepicker-day datepicker-disabled">27</td><td class="datepicker-day datepicker-disabled">28</td><td class="datepicker-day datepicker-disabled">29</td><td class="datepicker-day datepicker-disabled">30</td><td class="datepicker-day datepicker-disabled">31</td></tr><tr></tr></tbody></table></div><div class="datepicker-filter"><h4>Filter calendar by: </h4><input type="radio" name="filter" class="state" id="any" checked="checked"><input type="radio" name="filter" class="state" id="weekdays"><input type="radio" name="filter" class="state" id="weekends"><div class="tabs"><label class="tab" for="any" id="label-any">Any date</label><label class="tab" for="weekdays" id="label-weekdays">Only weekdays</label><label class="tab" for="weekends" id="label-weekends">Only weekends</label></div></div></div>"""
        assertEquals(expected, datePickerView.outerHTML)
    }

    @Test
    fun shouldGoNextMonthAgoOnNextClicked() {
        datePicker
        inputDatePicker.click()
        val datePickerView = inputDatePicker.nextElementSibling as HTMLDivElement
        val previousDiv = datePickerView.querySelector(".datepicker-next") as HTMLElement
        previousDiv.click()

        val expected = """<div id="datepicker" style="display: flex;"><div class="datepicker-calendar"><nav class="datepicker-header"><div class="datepicker-prev"><i class="material-icons">keyboard_arrow_left</i></div><div class="datepicker-title"><span>February 2017</span></div><div class="datepicker-next"><i class="material-icons">keyboard_arrow_right</i></div></nav><table class="datepicker-days"><thead><tr><th><span class="datepicker-dayname" title="Sunday">Su</span></th><th><span class="datepicker-dayname" title="Monday">Mo</span></th><th><span class="datepicker-dayname" title="Tuesday">Tu</span></th><th><span class="datepicker-dayname" title="Wednesday">We</span></th><th><span class="datepicker-dayname" title="Thursday">Th</span></th><th><span class="datepicker-dayname" title="Friday">Fr</span></th><th><span class="datepicker-dayname" title="Saturday">Sa</span></th></tr></thead><tbody><tr><td></td><td></td><td></td><td class="datepicker-day datepicker-disabled">1</td><td class="datepicker-day datepicker-disabled">2</td><td class="datepicker-day datepicker-disabled">3</td><td class="datepicker-day datepicker-disabled">4</td></tr><tr><td class="datepicker-day datepicker-disabled">5</td><td class="datepicker-day datepicker-disabled">6</td><td class="datepicker-day datepicker-disabled">7</td><td class="datepicker-day datepicker-disabled">8</td><td class="datepicker-day datepicker-disabled">9</td><td class="datepicker-day datepicker-disabled">10</td><td class="datepicker-day datepicker-disabled">11</td></tr><tr><td class="datepicker-day datepicker-disabled">12</td><td class="datepicker-day datepicker-disabled">13</td><td class="datepicker-day datepicker-disabled">14</td><td class="datepicker-day datepicker-disabled">15</td><td class="datepicker-day datepicker-disabled">16</td><td class="datepicker-day datepicker-disabled">17</td><td class="datepicker-day datepicker-disabled">18</td></tr><tr><td class="datepicker-day datepicker-disabled">19</td><td class="datepicker-day datepicker-disabled">20</td><td class="datepicker-day datepicker-disabled">21</td><td class="datepicker-day datepicker-disabled">22</td><td class="datepicker-day datepicker-disabled">23</td><td class="datepicker-day datepicker-disabled">24</td><td class="datepicker-day datepicker-disabled">25</td></tr><tr><td class="datepicker-day datepicker-disabled">26</td><td class="datepicker-day datepicker-disabled">27</td><td class="datepicker-day datepicker-disabled">28</td><td></td><td></td><td></td><td></td></tr><tr></tr></tbody></table></div><div class="datepicker-filter"><h4>Filter calendar by: </h4><input type="radio" name="filter" class="state" id="any" checked="checked"><input type="radio" name="filter" class="state" id="weekdays"><input type="radio" name="filter" class="state" id="weekends"><div class="tabs"><label class="tab" for="any" id="label-any">Any date</label><label class="tab" for="weekdays" id="label-weekdays">Only weekdays</label><label class="tab" for="weekends" id="label-weekends">Only weekends</label></div></div></div>"""
        assertEquals(expected, datePickerView.outerHTML)
    }

    @Test
    fun shouldSelectDay() {
        val date = Date()
        document.create.div {}.appendChild(inputDatePicker)
        val params = datePickerModel(inputDatePicker)
        DatePicker(params)
        inputDatePicker.click()
        val datePickerView = inputDatePicker.nextElementSibling as HTMLDivElement
        var selectedDay = datePickerView.querySelector(DATE_PICKER_SELECTED) as HTMLElement
        val nextDay = selectedDay.nextElementSibling as HTMLElement
        if (nextDay != null) {
            nextDay.click()
            date.setDate(date.getDate() + 1)
        }

        selectedDay = datePickerView.querySelectorAll(DATE_PICKER_SELECTED).asList().last() as HTMLElement
        assertEquals((date.getDate()).toString(), selectedDay.innerText)
        assertEquals(date.toShortString(), inputDatePicker.value)
    }

    @Test
    fun shouldGetDate() {
        assertEquals("01/01/2017", datePicker.getDate().toShortString())
    }

    @Test
    fun shouldSelectElement() {
        val datePicker = selectElement()
        assertEquals(datePicker.getDate().toShortString(), inputDatePicker.value)
    }

    /**
     * Select a date in the datePicker component
     */
    private fun selectElement(): DatePicker {
        val date = Date()
        document.create.div {}.appendChild(inputDatePicker)
        val params = datePickerModel(inputDatePicker)
        val datePicker = DatePicker(params)
        inputDatePicker.click()
        val datePickerView = inputDatePicker.nextElementSibling as HTMLDivElement
        var selectedDay = datePickerView.querySelector(DATE_PICKER_SELECTED) as HTMLElement
        val nextDay = selectedDay.nextElementSibling as HTMLElement

        if (nextDay != null) date.setDate(date.getDate() + 1)
        val day = Day(date, selected = true)
        datePicker.select(nextDay, day)
        return datePicker
    }

    @Test
    fun shouldClearValue() {
        val datePicker = selectElement()
        datePicker.clear()
        assertEquals("", inputDatePicker.value)
    }

    @Test
    fun shouldFilterWeekend() {
        val datePickerView = createFilteredDatePicker(FilterCalendar.WEEKENDS)

        datePickerView.querySelectorAll("td:not(.datepicker-disabled)").asList().forEach { day ->
            if (day is HTMLElement && day.innerText.isNotEmpty()) {
                val dayDate = Date()
                dayDate.setDate(day.innerText.toInt())
                assertTrue { dayDate.isWeekend() }
            }
        }
    }

    @Test
    fun shouldFilterWeekday() {
        val datePickerView = createFilteredDatePicker(FilterCalendar.WEEKDAYS)

        datePickerView.querySelectorAll("td:not(.datepicker-disabled)").asList().forEach { day ->
            if (day is HTMLElement && day.innerText.isNotEmpty()) {
                val dayDate = Date()
                dayDate.setDate(day.innerText.toInt())
                assertTrue { dayDate.isWeekday() }
            }
        }
    }

    /**
     * Creates a date picker component with the given filter
     */
    private fun createFilteredDatePicker(filterCalendar: FilterCalendar): HTMLDivElement {
        document.create.div {}.appendChild(inputDatePicker)
        val params = datePickerModel(inputDatePicker, showFilters = true, filter = filterCalendar)
        DatePicker(params)
        val datePickerView = inputDatePicker.nextElementSibling as HTMLDivElement
        return datePickerView
    }
}