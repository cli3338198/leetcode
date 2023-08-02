function coinChange(coins: number[], amount: number): number {
    const dp = {}
    const min = helper(amount)
    return min === Infinity ? -1 : min
    
    function helper(amount: number): number {
        if (amount === 0) return 0
        if (amount in dp) return dp[amount]
        let res = Infinity
        for (const coin of coins) {
            if (coin <= amount) {
                res = Math.min(res, 1 + helper(amount-coin))
            }
        }
        return dp[amount] = res
    }
};