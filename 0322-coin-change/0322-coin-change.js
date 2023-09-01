/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = Array(amount+1).fill(Infinity)
    dp[0] = 0
    for (let amt=1; amt <= amount; amt++) {
        for (const coin of coins) {
            if (coin <= amt) {
                dp[amt] = Math.min(dp[amt], 1 + (amt-coin < 0 ? Infinity : dp[amt-coin]))
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};