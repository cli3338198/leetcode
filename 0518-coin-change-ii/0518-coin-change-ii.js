/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = Array(coins.length+1).fill(0).map(() => Array(amount+1).fill(0))
    for (let i=0; i <= coins.length; i++) {
        dp[i][0] = 1
    }
    for (let i=1; i <= coins.length; i++) {
        for (let j=1; j <= amount; j++) {
            dp[i][j] += dp[i-1][j]
            if (coins[i-1] <= j) {
                dp[i][j] += dp[i][j-coins[i-1]]
            }
        }
    }
    return dp[coins.length][amount]
};

change = function(amount, coins) {
    const dp = Array(amount+1).fill(0)
    dp[0] = 1
    for (const coin of coins) {
        for (let i=1; i <= amount; i++) {
            if (coin <= i) {
                dp[i] += dp[i-coin]
            }
        }
    }
    return dp[amount]
}

change = function(amount, coins) {
    const dp = {}
    return helper(0, amount)
    
    function helper(idx, amount) {
        const key = `${idx} ${amount}`
        if (key in dp) return dp[key]
        if (amount === 0) return 1
        if (idx >= coins.length) return 0
        if (coins[idx] > amount) return helper(idx+1, amount)
        return dp[key] = helper(idx, amount-coins[idx]) + helper(idx+1, amount)
    }
}