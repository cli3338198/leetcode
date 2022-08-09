/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = {}
    return helper(0, true)
    
    function helper(idx, buying) {
        // buy -> idx + 1
        // sell -> idx + 2
        if (idx >= prices.length) {
            return 0
        }
        if ([idx, buying] in dp) {
            return dp[[idx, buying]]
        }
        const cooldown = helper(idx+1, buying)
        if (buying) {
            const buy = helper(idx+1, !buying) - prices[idx]
            dp[[idx, buying]] = Math.max(buy, cooldown)
        } else {
            const sell = helper(idx+2, !buying) + prices[idx]
            dp[[idx, buying]] = Math.max(sell, cooldown)
        }
        return dp[[idx, buying]]
    }
};