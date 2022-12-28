/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = Array(amount+1).fill(Infinity)
    dp[0] = 0
    for (let i=1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i-coin])
            }
        }
    }
    return dp[amount] !== Infinity ? dp[amount] : -1
};