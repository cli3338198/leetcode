class Solution {
    fun maxCoins(nums: IntArray): Int {
        val n = nums.size
        val newNums = IntArray(n+2)
        newNums[0] = 1
        newNums[n + 1] = 1
        for (i in 1..n) {
            newNums[i] = nums[i-1]
        }
        val dp = Array(n+2){IntArray(n+2)}
        for (len in 2..n + 1) {
            for (i in 0 until n+2-len) {
                val j = i+len
                for (k in i+1 until j) {
                    dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + newNums[i] * newNums[k] * newNums[j])
                }
            }
        }
        return dp[0][n + 1]
    }
}