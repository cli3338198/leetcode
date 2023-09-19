class Solution {
    fun minSteps(n: Int): Int {
        val dp = IntArray(n+1){0}
        for (i in 2..n) {
            dp[i] = i
            for (j in 2..i) {
                if (i % j === 0) {
                    dp[i] = Math.min(dp[i], (i / j).toInt() + dp[j])
                }
            }
        }
        return dp[n].toInt()
    }
}