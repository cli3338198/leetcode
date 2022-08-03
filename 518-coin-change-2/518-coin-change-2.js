/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = Array(amount+1).fill(0)
    dp[0] = 1
    for (let coin of coins) {
        for (let i=1; i <= amount; i++) {
            if (coin <= i) {
                dp[i] += dp[i - coin]
            }
        }
    }
    return dp[amount]
};