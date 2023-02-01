/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = {}
    const res = helper(amount)
    return res === Infinity ? -1 : res
    
    function helper(amount) {
        if (amount === 0) return 0
        if (amount in dp) return dp[amount]
        let res = Infinity
        for (const coin of coins) {
            if (coin <= amount) {
                res = Math.min(res, 1 + helper(amount - coin))
            }
        }
        return dp[amount] = res
    }
};