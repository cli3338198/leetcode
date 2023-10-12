class Solution {
    fun maxArea(height: IntArray): Int {
        var max = 0
        var l = 0
        var r = height.size-1
        while (l < r) {
            max = Math.max(max, ((r-l) * Math.min(height[r], height[l])).toInt())
            if (height[l] < height[r]) {
                l++
            } else {
                r--
            }
        }
        return max
    }
}