import com.hugeinc.datepicker.DatePicker
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document

/**
 * User: HUGE-gilbert
 * Date: 2/21/17
 * Time: 5:04 PM
 */
fun main(args: Array<String>) {
    val input = document.getElementById("datepickerinput") as HTMLInputElement
    DatePicker(input)
}
