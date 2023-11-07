class Solution {
    fun combinationSum4(nums: IntArray, target: Int): Int {
        val dp = IntArray(target+1){0}
        dp[0] = 1
        for (t in 1..target) {
            for (n in nums) {
                if (n <= t) {
                    dp[t] += dp[t-n]
                }
            }
        }
        return dp[target]
    }
}