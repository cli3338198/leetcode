/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0
    for (let i=1; i < prices.length; i++) {
        if (prices[i-1] < prices[i]) {
            res += prices[i] - prices[i-1]
        }
    }
    return res
};