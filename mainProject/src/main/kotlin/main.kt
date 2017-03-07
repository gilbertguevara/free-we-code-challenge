import org.example.datepicker.DatePicker
import org.example.datepicker.datePickerModel
import org.example.timepicker.TimePicker
import org.example.toShortString
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document

/**
 * Main function
 */
fun main(args: Array<String>) {
    val inputDatePicker = document.getElementById("datepickerinput") as HTMLInputElement
    val inputTimePicker = document.getElementById("timepickerinput") as HTMLInputElement

    val timePicker = TimePicker(inputTimePicker)
    val params = datePickerModel(inputDatePicker, showFilters = true, onSelect = { date ->
        timePicker.changeDate(date)
    })
    val datePicker = DatePicker(params)

    val saveButton = document.getElementById("save") as HTMLElement
    saveButton.onclick = {
        buildMessage(datePicker, timePicker)
    }

    val cancelButton = document.getElementById("cancel") as HTMLElement
    cancelButton.onclick = {
        cancel(datePicker, timePicker)
    }
}

/**
 * Clear out the form resetting all the values to the default ones
 */
private fun cancel(datePicker: DatePicker, timePicker: TimePicker) {
    datePicker.clear()
    timePicker.reset()
    val message = document.getElementById("message") as HTMLElement
    message.innerText = ""
}

/**
 * Build the message to be shown when saving the
 */
private fun buildMessage(datePicker: DatePicker, timePicker: TimePicker) {
    val message = document.getElementById("message") as HTMLElement
    message.innerText = "Good! Your appointment is set for ${datePicker.getDate().toShortString()} at ${timePicker.selectedTime}. Thanks."
}
