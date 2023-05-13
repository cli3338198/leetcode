class Solution {
    fun largestAltitude(gain: IntArray): Int {
        var height = 0
        var max = 0
        for (g in gain) {
            height += g
            max = Math.max(max, height)
        }
        return max
    }
}