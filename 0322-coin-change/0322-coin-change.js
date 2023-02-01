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

coinChange = function(coins, amount) {
    const dp = Array(amount+1).fill(Infinity)
    dp[0] = 0
    for (let i=1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i-coin])
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}