class Solution {
    fun uniquePaths(m: Int, n: Int): Int {
        val dp = Array(m){IntArray(n){0}}
        for (i in 0..n-1) {
            dp[m-1][i] = 1
        }
        for (i in 0..m-1) {
            dp[i][n-1] = 1
        }
        for (r in m-2 downTo 0) {
            for (c in n-2 downTo 0) {
                dp[r][c] = dp[r+1][c] + dp[r][c+1]
            }
        }
        return dp[0][0]
    }
}