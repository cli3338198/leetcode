/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = Array(amount+1).fill(Infinity)
    dp[0] = 0
    for (let a = 1; a <= amount; a++) {
        for (let coin of coins) {
            if (coin <= a) {
                dp[a] = Math.min(dp[a], 1 + dp[a-coin])
            }
        }
    }
    return dp[amount] !== Infinity ? dp[amount] : -1
};