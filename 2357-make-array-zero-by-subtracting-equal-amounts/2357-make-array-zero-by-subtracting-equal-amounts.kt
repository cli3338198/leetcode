class Solution {
    fun minimumOperations(nums: IntArray): Int {
        var res = 0
        while (true) {
            var min = 101
            for (n in nums) {
                if (n > 0) {
                    min = Math.min(min, n)
                }
            }
            if (min === 101) break
            for (i in 0 until nums.size) {
                nums[i] -= min
            }
            res++
        }
        return res
    }
}