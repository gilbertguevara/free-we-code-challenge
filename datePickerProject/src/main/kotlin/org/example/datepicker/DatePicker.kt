package org.example.datepicker

import kotlinx.html.*
import kotlinx.html.dom.append
import kotlinx.html.js.div
import kotlinx.html.js.onClickFunction
import org.example.*
import org.w3c.dom.*
import org.w3c.dom.events.Event
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass
import kotlin.dom.createElement
import kotlin.js.Date

/**
 * Created by gilbert.
 *
 * Date Picker component.
 */
class DatePicker(private val datePickerModel: datePickerModel) {

    companion object {
        val MONTH_NAMES: Array<String> = arrayOf("January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December")
        val WEEK_DAYS: Array<String> = arrayOf("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
        val DATE_PICKER_PREFIX = "datepicker"
        val DATE_PICKER_SELECTED_CSS_CLASS = DATE_PICKER_PREFIX + "-selected"
    }

    private val datePickerView = document.createElement("div", { id = DATE_PICKER_PREFIX }) as HTMLDivElement
    private val datePickerCalendar = document.createElement("div", { addClass(DATE_PICKER_PREFIX + "-calendar") }) as HTMLDivElement
    private val datePickerDays = document.createElement("table", { addClass(DATE_PICKER_PREFIX + "-days") }) as HTMLTableElement
    private val datePickerTitle = document.createElement("div", { addClass(DATE_PICKER_PREFIX + "-title") }) as HTMLDivElement

    init {
        datePickerModel.inputField.apply {
            addClass(DATE_PICKER_PREFIX + "-input")
            readOnly = true
            onclick = { event ->
                datePickerView.toggle()
                event.stopPropagation()
            }
        }

        buildDatePicker(datePickerModel.inputField)
        window.addEventListener("click", { datePickerView.hide() })
    }

    /**
     * Creates the date picker DOM nodes
     */
    private fun buildDatePicker(inputField: HTMLElement) {
        datePickerView.hide()

        inputField.insertAdjacentElement("afterend", datePickerView)
        buildHeader(datePickerCalendar)
        buildCalendar(datePickerCalendar)
        datePickerView.appendChild(datePickerCalendar)
        buildFilters(datePickerView)
    }

    /**
     * Build the component header
     */
    private fun buildHeader(datePickerCalendar: HTMLDivElement) {
        val date = datePickerModel.date
        populateTitle(date)

        datePickerCalendar.append {
            nav(DATE_PICKER_PREFIX + "-header") {
                div(DATE_PICKER_PREFIX + "-prev") {
                    i("material-icons") {
                        +"keyboard_arrow_left"
                    }
                    onClickFunction = { event ->
                        populateMonth(datePickerDays, date.addMonth(-1), true)
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
                        populateMonth(datePickerDays, date.addMonth(1), true)
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
    private fun buildCalendar(datePickerCalendar: HTMLDivElement) {
        datePickerDays.append {
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

        populateMonth(datePickerDays, datePickerModel.date)
        datePickerCalendar.appendChild(datePickerDays)
    }

    /**
     * Creates the filter to select the days that can be selectable
     */
    private fun buildFilters(datePickerView: HTMLDivElement) {
        if (datePickerModel.showFilters) {
            datePickerView.append {
                div(DATE_PICKER_PREFIX + "-filter") {
                    h4 { +"Filter calendar by: " }

                    for (filter in FilterCalendar.values()) {
                        radioInput(classes = "state", name = "filter") {
                            id = filter.name.toLowerCase()

                            if (filter.ordinal == 0) {
                                checked = true
                            }

                            onClickFunction = { event ->
                                filterCalendar(event)
                            }
                        }
                    }

                    div("tabs") {
                        for (filter in FilterCalendar.values()) {
                            label("tab") {
                                for_ = filter.toString()
                                id = "label-$filter"
                                +filter.label
                            }
                        }
                    }

                    onClickFunction = Event::stopPropagation
                }
            }
        }
    }

    /**
     * Filter the given calendar
     */
    private fun filterCalendar(event: Event) {
        val filterSelected = event.target as HTMLInputElement
        this@DatePicker.datePickerModel.filter = FilterCalendar.from(filterSelected.id)
        populateMonth(datePickerDays, datePickerModel.date, true)
    }

    /**
     * Populate the month values
     */
    private fun populateMonth(datePickerDays: HTMLTableElement, date: Date, replace: Boolean = false) {
        if (replace) {
            datePickerDays.tBodies[0]?.remove()
            populateTitle(date)
        }
        val tBody = datePickerDays.createTBody()

        var dayIndex = 0
        val days = getDays(date)
        var firstDay = days[dayIndex].date.getDayOfWeek()
        var tableRow = tBody.insertRow() as HTMLTableRowElement

        (0 until firstDay).forEach {
            tableRow.insertCell()
        }

        while (dayIndex < days.size) {
            dayIndex = buildWeek(tableRow, days, dayIndex, firstDay)
            tableRow = tBody.insertRow() as HTMLTableRowElement
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
                    if (day.enable) {
                        onclick = {
                            select(this, day)
                            datePickerModel.onSelect?.let { onSelect -> onSelect(datePickerModel.date) }
                        }
                    } else {
                        addClass(DATE_PICKER_PREFIX + "-disabled")
                    }

                    innerText = "" + day.date.getDate()
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
        datePickerModel.date = day.date

        datePickerModel.inputField.value = day.date.toShortString()
        datePickerView.toggle()
    }

    /**
     * Get the days from the given month and year
     */
    private fun getDays(date: Date): List<Day> {
        val currentDate = Date()

        return (1..31).map {
            val dayDate = date.clone()
            dayDate.setDate(it)
            var enable = true

            // Filtering options
            if (datePickerModel.disablePreviousCurrentDate) {
                enable = (dayDate.dateInt() >= currentDate.dateInt())
            }
            when (datePickerModel.filter) {
                FilterCalendar.WEEKDAYS -> {
                    enable = enable && dayDate.isWeekday()
                }
                FilterCalendar.WEEKENDS -> {
                    enable = enable && dayDate.isWeekend()
                }
                else -> {
                }
            }

            Day(dayDate,
                    selected = (currentDate.toShortString() == dayDate.toShortString()),
                    enable = enable)
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

    fun clear() {
        datePickerModel.inputField.value = ""
    }

    fun getDate(): Date = this.datePickerModel.date

}

data class Day(val date: Date, var selected: Boolean = false, var enable: Boolean = true)

data class datePickerModel(val inputField: HTMLInputElement, var date: Date = Date(),
                           val disablePreviousCurrentDate: Boolean = true, var filter: FilterCalendar = FilterCalendar.ANY,
                           val showFilters: Boolean = false, val onSelect: ((date: Date) -> Unit)? = null)

enum class FilterCalendar(val label: String) {
    ANY("Any date"), WEEKDAYS("Only weekdays"), WEEKENDS("Only weekends");

    companion object {
        fun from(string: String): FilterCalendar = valueOf(string.toUpperCase())
    }

    override fun toString(): String {
        return name.toLowerCase()
    }
}