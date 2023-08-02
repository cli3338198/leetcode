class Solution {
    fun maxSubArray(nums: IntArray): Int {
        val n = nums.size
        val dp = IntArray(n) {0}
        var max = nums[0]
        dp[0] = nums[0]
        for (i in 1..n-1) {
            dp[i] = Math.max(nums[i], dp[i-1] + nums[i])
            max = Math.max(max, dp[i])
        }
        return max
    }
}