class Solution {
    fun change(amount: Int, coins: IntArray): Int {
        val dp = Array(coins.size+1){IntArray(amount+1){0}}
        for (i in 0..coins.size) {
            dp[i][0] = 1
        }
        for (i in 1..coins.size) {
            for (j in 1..amount) {
                dp[i][j] += dp[i-1][j]
                if (coins[i-1] <= j) {
                    dp[i][j] += dp[i][j-coins[i-1]]
                }
            }
        }
        return dp[coins.size][amount]
    }
}