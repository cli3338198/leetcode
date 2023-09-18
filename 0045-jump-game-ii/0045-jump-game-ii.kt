class Solution {
    fun jump(nums: IntArray): Int {
        var i = 0
        var lastPosition = 0
        var maxReach = 0
        var jumps = 0
        while (lastPosition < nums.size-1) {
            maxReach = Math.max(maxReach, i + nums[i])
            if (i === lastPosition) {
                lastPosition = maxReach
                jumps++
            }
            i++
        }
        return jumps
    }
}