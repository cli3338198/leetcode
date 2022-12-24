/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity
    let profit = 0
    for (const p of prices) {
        profit = Math.max(profit, p - min)
        min = Math.min(min, p)
    }
    return profit
};