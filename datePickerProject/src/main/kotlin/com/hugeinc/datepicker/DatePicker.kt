package com.hugeinc.datepicker

import kotlinx.html.*
import kotlinx.html.dom.append
import kotlinx.html.js.div
import kotlinx.html.js.onClickFunction
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
class DatePicker(private val inputField: HTMLInputElement, private val date: Date = Date()) {
    companion object {
        val MONTH_NAMES: Array<String> = arrayOf("January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December")
        val WEEK_DAYS: Array<String> = arrayOf("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
    }

    private val datePickerView = document.createElement("div", {
        id = "datepicker"
    }) as HTMLDivElement
    private val datePickerCalendar = document.createElement("table", { addClass("datepicker-calendar") }) as HTMLTableElement
    private val datePickerTitle = document.createElement("div", { addClass("datepicker-title") }) as HTMLDivElement

    init {
        window.onclick = {
            hide()
        }
        val inputParent = inputField.apply {
            addClass("datePickerInput")
            readOnly = true
            onclick = { event ->
                toggle()
                event.stopPropagation()
            }
        }.parentElement as HTMLElement

        buildDatePicker(inputParent)
    }

    /**
     * Creates the date picker DOM nodes
     */
    private fun buildDatePicker(inputParent: HTMLElement) {
        datePickerView.style.display = "none"
        buildHeader(datePickerView)
        buildCalendar(datePickerView)

        inputParent.append {
            div {}.append(datePickerView)
        }
    }

    /**
     * Build the component header
     */
    private fun buildHeader(datePickerView: HTMLDivElement) {
        populateTitle(date)

        datePickerView.append {
            nav("datepicker-header") {
                div("datepicker-prev") {
                    a("#") {
                        i("material-icons") {
                            +"keyboard_arrow_left"
                        }
                        onClickFunction = { event ->
                            populateMonth(datePickerCalendar, date.addMonth(-1), true)
                            event.stopPropagation()
                        }
                    }
                }
            }.apply {
                appendChild(datePickerTitle)
            }.append {
                div("datepicker-next") {
                    a("#") {
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
                cell.append {
                    a("#") {
                        if (day.selected) classes += "selected"

                        +"".plus(day.date.getDate())
                        onClickFunction = {
                            inputField.value = day.date.toShortString()
                            toggle()
                        }
                    }
                }
                dayIndex++
            }

        }
        return dayIndex
    }

    /**
     * Get the days from the given month and year
     */
    private fun getDays(date: Date): List<Day> {
        return (1..31).map {
            val dayDate = Date()
            dayDate.setTime(date.getTime())
            dayDate.setDate(it)
            Day(dayDate, selected = (date.getDate() == it))
        }.filter { (innerDate) ->
            date.getMonth() == innerDate.getMonth()
        }
    }

    /**
     * Shows the date picker
     */
    fun toggle() {
        datePickerView.style.display = if (datePickerView.style.display == "none") "flex" else "none"
        datePickerView.style.opacity = "255"
    }

    fun hide() {
        datePickerView.style.display = "none"
    }

}

data class Day(val date: Date, var selected: Boolean = false, var enable: Boolean = true)
