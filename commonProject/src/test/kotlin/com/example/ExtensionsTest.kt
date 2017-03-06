package com.example

import org.example.appendZero
import org.junit.Test
import kotlin.test.assertEquals

/**
 * User: HUGE-gilbert
 * Date: 3/6/17
 * Time: 9:15 AM
 */
class ExtensionsTest {

    @Test
    fun shouldAppendZero() {
        (1..9).forEach { i ->
            assertEquals("0$i", i.appendZero())
        }
    }

    @Test
    fun shouldNotAppendZero() {
        assertEquals("11", 11.appendZero())
        assertEquals("0", 0.appendZero())
        assertEquals("-1", (-1).appendZero())
    }


}