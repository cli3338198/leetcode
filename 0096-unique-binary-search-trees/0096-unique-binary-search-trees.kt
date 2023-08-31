class Solution {
    fun numTrees(n: Int): Int {
        val dp = IntArray(n+1) {1}
        for (i in 2..n) {
            dp[i] = 0
            for (j in 1..i) {
                dp[i] += dp[j-1] * dp[i-j]
            }
        }
        return dp[n]
    }
}