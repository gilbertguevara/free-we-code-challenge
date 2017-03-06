package com.example

import kotlinx.html.dom.create
import kotlinx.html.js.ul
import kotlinx.html.li
import org.example.*
import org.junit.Test
import org.w3c.dom.HTMLCollection
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.asList
import kotlin.browser.document
import kotlin.dom.hasClass
import kotlin.js.Date
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotEquals
import kotlin.test.assertTrue

/**
 * User: HUGE-gilbert
 * Date: 3/6/17
 * Time: 9:15 AM
 */
class ExtensionsTest {
    companion object {
        val STYLE_CLASS = "style-class"
    }

    private val date: Date by lazy {
        Date().apply {
            asDynamic().setDate(1)
            asDynamic().setMonth(2)
            asDynamic().setFullYear(2017)
        }
    }
    private val div: HTMLDivElement by lazy {
        document.createElement("div") as HTMLDivElement
    }
    private val htmlCollection: HTMLCollection by lazy {
        document.create.ul {
            li(STYLE_CLASS) {}
            li(STYLE_CLASS) {}
        }.children
    }

    @Test
    fun shouldAppendZero() {
        (0..9).forEach { i ->
            assertEquals("0$i", i.appendZero())
        }
    }

    @Test
    fun shouldNotAppendZero() {
        assertEquals("11", 11.appendZero())
        assertEquals("-1", (-1).appendZero())
    }

    @Test
    fun shouldCreateDateClone() {
        val clonedDate = date.clone()
        assertEquals(date.getTime(), clonedDate.getTime())
    }

    @Test
    fun shouldShowShortString() {
        assertEquals("03/01/2017", date.toShortString())
    }

    @Test
    fun shouldShowDateAsInt() {
        assertEquals(20170301, date.dateInt())
    }

    @Test
    fun shouldAddMonth() {
        assertEquals("07/01/2017", date.addMonth(4).toShortString())
    }

    @Test
    fun shouldSubstractMonth() {
        assertEquals("02/01/2017", date.addMonth(-1).toShortString())
    }

    @Test
    fun shouldSubstractMonthLastYear() {
        assertEquals("12/01/2016", date.addMonth(-3).toShortString())
    }

    @Test
    fun shouldGetDayOfTheWeek() {
        assertEquals(3, date.getDayOfWeek())
    }

    @Test
    fun shouldNotGetIsWeekend() {
        assertFalse { date.isWeekend() }
    }

    @Test
    fun shouldGetIsWeekday() {
        assertTrue { date.isWeekday() }
    }

    @Test
    fun shouldHideHtmlElement() {
        div.hide()
        assertEquals("none", div.style.display)
    }

    @Test
    fun shouldShowHideHtmlElementUsingToggle() {
        div.toggle()
        assertEquals("none", div.style.display)

        div.toggle()
        assertNotEquals("none", div.style.display)
    }

    @Test
    fun shouldRemoveCssClassFromHtmlCollection() {
        htmlCollection.removeCssClass(STYLE_CLASS)
        htmlCollection.asList().forEach { element ->
            assertFalse { element.hasClass(STYLE_CLASS) }
        }
    }

}