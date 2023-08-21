class Solution {
    fun isCovered(ranges: Array<IntArray>, left: Int, right: Int): Boolean {
        val arr = IntArray(52){0}
        for (i in 0..ranges.size-1) {
            arr[ranges[i][0]]++
            arr[ranges[i][1]+1]--
        }
        var overlap = 0
        for (i in 1..right) {
            overlap += arr[i]
            if (i >= left && overlap === 0) {
                return false
            }
        }
        return true
    }
}