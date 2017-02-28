import org.example.datepicker.DatePicker
import org.example.timepicker.TimePicker
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document

/**
 * User: HUGE-gilbert
 * Date: 2/21/17
 * Time: 5:04 PM
 */
fun main(args: Array<String>) {
    val inputDatePicker = document.getElementById("datepickerinput") as HTMLInputElement
    val inputTimePicker = document.getElementById("timepickerinput") as HTMLInputElement

    DatePicker(inputDatePicker)
    TimePicker(inputTimePicker)
}
