/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    let min = Infinity
    for (let price of prices) {
        if (price <= min) {
            min = price
        } else {
            profit += price - min
            min = price
        }
    }
    return profit
};