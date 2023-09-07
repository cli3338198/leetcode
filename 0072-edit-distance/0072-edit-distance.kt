class Solution {
    fun minDistance(word1: String, word2: String): Int {
        val m = word1.length
        val n = word2.length
        val dp = Array(m+1){IntArray(n+1){500}}
        for (i in 0..m) {
            dp[i][0] = i
        }
        for (i in 0..n) {
            dp[0][i] = i
        }
        for (i in 1..m) {
            for (j in 1..n) {
                if (word1[i-1] === word2[j-1]) {
                    dp[i][j] = dp[i-1][j-1]
                } else {
                    dp[i][j] = 1 + Math.min(Math.min(dp[i-1][j-1], dp[i-1][j]), dp[i][j-1])
                }
            }
        }
        return dp[m][n]
    }
}