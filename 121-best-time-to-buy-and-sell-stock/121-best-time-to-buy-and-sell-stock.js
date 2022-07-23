/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity
    let maxProfit = 0
    for (let price of prices) {
        maxProfit = Math.max(maxProfit, price - min)
        min = Math.min(min, price)
    }
    return maxProfit
};