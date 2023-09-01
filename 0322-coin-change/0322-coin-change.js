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
                dp[amt] = Math.min(dp[amt], 1 + dp[amt-coin])
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};

coinChange = function(coins, amount) {
    const dp = {}
    const res = helper(amount)
    return res === Infinity ? -1 : res
    
    function helper(amount) {
        if (amount in dp) return dp[amount]
        if (amount === 0) return 0
        let res = Infinity
        for (const coin of coins) {
            if (coin <= amount) {
                res = Math.min(res, 1 + helper(amount-coin))
            }
        }
        return dp[amount] = res
    }
}