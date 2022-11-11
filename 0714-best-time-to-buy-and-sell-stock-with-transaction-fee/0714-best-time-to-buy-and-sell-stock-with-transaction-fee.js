/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let profit = 0
    let buyPrice = prices[0]
    for (let i=1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i]-buyPrice-fee)
        buyPrice = Math.min(buyPrice, prices[i]-profit)
    }
    return profit
};