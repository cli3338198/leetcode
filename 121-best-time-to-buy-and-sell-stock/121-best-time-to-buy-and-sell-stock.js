/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity
    let profit = 0
    for (let price of prices) {
        profit = Math.max(profit, price - min)
        min = Math.min(min, price)
    }
    return profit
};