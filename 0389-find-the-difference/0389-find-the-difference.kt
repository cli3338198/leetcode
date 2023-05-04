class Solution {
    fun findTheDifference(s: String, t: String): Char {
        val k = s + t
        var n = 0
        for (i in 0..(k.length-1)) {
            n = n xor k[i].toInt()
        }
        return n.toChar()
    }
}