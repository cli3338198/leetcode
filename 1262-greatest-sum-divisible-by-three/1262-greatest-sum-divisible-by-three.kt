class Solution {
    fun maxSumDivThree(nums: IntArray): Int {
        val dp = Array(nums.size+1){IntArray(3){0}}
        for (i in 1..nums.size) {
            dp[i] = dp[i-1].copyOf()
            for (j in 0..2) {
                val sum = dp[i-1][j] + nums[i-1]
                val mod = sum % 3
                dp[i][mod] = Math.max(dp[i][mod], sum)
            }
        }
        return dp[nums.size][0]
    }
}