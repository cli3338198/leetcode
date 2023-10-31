class Solution {
    fun isInterleave(s1: String, s2: String, s3: String): Boolean {
        val m = s1.length
        val n = s2.length
        val o = s3.length
        if (s1 + s2 === s3 || s2 + s1 === s3) {
            return true
        }
        if (m + n < o || m + n > o) {
            return false
        }
        val dp = Array<IntArray>(m+1){IntArray(n+1){0}}
        dp[m][n] = 1
        for (i in m downTo 0) {
            for (j in n downTo 0) {
                if (i < m && s1[i] == s3[i+j] && dp[i+1][j] > 0) {
                    dp[i][j] = 1
                }
                if (j < n && s2[j] == s3[i+j] && dp[i][j+1] > 0) {
                    dp[i][j] = 1
                }
            }
        }
        return dp[0][0] > 0
    }
}