class Solution {
    fun longestPalindromeSubseq(s: String): Int {
        val n = s.length
        val dp = Array(n) {IntArray(n) {0}}
        for (i in 0..n-1) {
            dp[i][i] = 1
        }
        for (i in 0..n-2) {
            if (s[i] === s[i+1]) {
                dp[i][i+1] = 2
            } else {
                dp[i][i+1] = 1
            }
        }
        for (l in 3..n) {
            for (i in 0..n-l) {
                val j = i+l-1
                if (s[i] === s[j]) {
                    dp[i][j] = 2 + dp[i+1][j-1]
                } else {
                    dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
                }
            }
        }
        return dp[0][n-1]
    }
}