package org.example.datepicker

import kotlinx.html.*
import kotlinx.html.dom.append
import kotlinx.html.dom.create
import kotlinx.html.js.div
import kotlinx.html.js.onClickFunction
import org.example.*
import org.w3c.dom.*
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass
import kotlin.dom.createElement
import kotlin.js.Date

/**
 * User: HUGE-gilbert
 * Date: 2/22/17
 * Time: 6:07 PM
 */
class DatePicker(private val inputField: HTMLInputElement, private var date: Date = Date()) {
    companion object {
        val MONTH_NAMES: Array<String> = arrayOf("January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December")
        val WEEK_DAYS: Array<String> = arrayOf("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
        val DATE_PICKER_PREFIX = "datepicker"
        val DATE_PICKER_SELECTED_CSS_CLASS = DATE_PICKER_PREFIX + "-selected"
    }

    private val datePickerView = document.createElement("div", { id = DATE_PICKER_PREFIX }) as HTMLDivElement
    private val datePickerCalendar = document.createElement("table", { addClass(DATE_PICKER_PREFIX + "-calendar") }) as HTMLTableElement
    private val datePickerTitle = document.createElement("div", { addClass(DATE_PICKER_PREFIX + "-title") }) as HTMLDivElement

    init {
        window.onclick = {
            datePickerView.hide()
        }
        inputField.apply {
            addClass(DATE_PICKER_PREFIX + "-input")
            readOnly = true
            onclick = { event ->
                datePickerView.toggle()
                event.stopPropagation()
            }
        }

        buildDatePicker(inputField)
    }

    /**
     * Creates the date picker DOM nodes
     */
    private fun buildDatePicker(inputField: HTMLElement) {
        datePickerView.hide()
        buildHeader(datePickerView)
        buildCalendar(datePickerView)

        inputField.insertAdjacentElement("afterend", document.create.div {}.apply {
            append(datePickerView)
        })
    }

    /**
     * Build the component header
     */
    private fun buildHeader(datePickerView: HTMLDivElement) {
        populateTitle(date)

        datePickerView.append {
            nav(DATE_PICKER_PREFIX + "-header") {
                div(DATE_PICKER_PREFIX + "-prev") {
                    i("material-icons") {
                        +"keyboard_arrow_left"
                    }
                    onClickFunction = { event ->
                        populateMonth(datePickerCalendar, date.addMonth(-1), true)
                        event.stopPropagation()
                    }
                }
            }.apply {
                appendChild(datePickerTitle)
            }.append {
                div(DATE_PICKER_PREFIX + "-next") {
                    i("material-icons") {
                        +"keyboard_arrow_right"
                    }
                    onClickFunction = { event ->
                        populateMonth(datePickerCalendar, date.addMonth(1), true)
                        event.stopPropagation()
                    }
                }
            }
        }
    }

    /**
     * Populates the title
     */
    private fun populateTitle(date: Date) {
        val monthName = MONTH_NAMES[date.getMonth()]
        val year = date.getFullYear()

        datePickerTitle.firstChild?.let { child -> datePickerTitle.removeChild(child) }
        datePickerTitle.append {
            span { +"$monthName $year" }
        }
    }

    /**
     * Build the component calendar
     */
    private fun buildCalendar(datePickerView: HTMLDivElement) {
        datePickerCalendar.append {
            thead {
                tr {
                    WEEK_DAYS.forEach { weekDay ->
                        th {
                            span {
                                classes += DATE_PICKER_PREFIX + "-dayname"
                                title = weekDay
                                val weekDayShort = weekDay.substring(0..1)
                                +weekDayShort
                            }
                        }
                    }
                }
            }
        }

        populateMonth(datePickerCalendar, date)
        datePickerView.appendChild(datePickerCalendar)
    }

    /**
     * Populate the month values
     */
    private fun populateMonth(datePickerCalendar: HTMLTableElement, date: Date, replace: Boolean = false) {
        if (replace) {
            datePickerCalendar.tBodies[0]?.remove()
            populateTitle(date)
        }
        val tbody = datePickerCalendar.createTBody()

        var dayIndex = 0
        val days = getDays(date)
        var firstDay = days[dayIndex].date.getDayOfMonth()
        var tableRow = tbody.insertRow() as HTMLTableRowElement

        (0 until firstDay).forEach {
            tableRow.insertCell()
        }

        while (dayIndex < days.size) {
            dayIndex = buildWeek(tableRow, days, dayIndex, firstDay)
            tableRow = tbody.insertRow() as HTMLTableRowElement
            firstDay = 0
        }
    }

    /**
     * Build a complete week view
     */
    private fun buildWeek(tableRow: HTMLTableRowElement, days: List<Day>, startDay: Int, startAt: Int = 0): Int {
        var dayIndex = startDay
        (startAt until WEEK_DAYS.size).forEach {
            val cell = tableRow.insertCell()
            days.getOrNull(dayIndex)?.let { day ->
                cell.apply {
                    addClass(DATE_PICKER_PREFIX + "-day")
                    if (day.selected) addClass(DATE_PICKER_SELECTED_CSS_CLASS)

                    innerText = "" + day.date.getDate()
                    onclick = {
                        select(this, day)
                    }
                }

                dayIndex++
            }

        }
        return dayIndex
    }

    /**
     * Selects a given day in the calendar
     */
    fun select(element: HTMLElement, day: Day) {
        clearSelected()
        day.selected = true
        element.addClass(DATE_PICKER_SELECTED_CSS_CLASS)
        date = day.date

        inputField.value = day.date.toShortString()
        datePickerView.toggle()
    }

    /**
     * Get the days from the given month and year
     */
    private fun getDays(date: Date): List<Day> {
        return (1..31).map {
            val dayDate = date.clone()
            dayDate.setDate(it)
            Day(dayDate, selected = (this@DatePicker.date.toShortString() == dayDate.toShortString()))
        }.filter { (innerDate) ->
            date.getMonth() == innerDate.getMonth()
        }
    }

    /**
     * Clear selected days
     */
    private fun clearSelected() {
        document.getElementsByClassName(DATE_PICKER_SELECTED_CSS_CLASS).removeCssClass(DATE_PICKER_SELECTED_CSS_CLASS)
    }

}

data class Day(val date: Date, var selected: Boolean = false, var enable: Boolean = true)
