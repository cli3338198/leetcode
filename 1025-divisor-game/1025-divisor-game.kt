class Solution {
    fun divisorGame(n: Int): Boolean {
        val dp = BooleanArray(n+1) {false}
        if (n >= 2) {
            dp[2] = true
        }
        for (i in 3..n) {
            for (x in 1..i-1) {
                if (i % x === 0 && !dp[i-x]) {
                    dp[i] = true
                    break
                }
            }
        }
        return dp[n]
    }
}