/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let hold = -Infinity
    let sold = 0
    let rest = 0
    for (let i=0; i < prices.length; i++) {
        const nextHold = Math.max(hold, rest - prices[i])
        const nextSold = hold + prices[i]
        const nextRest = Math.max(rest, sold)
        hold = nextHold
        sold = nextSold
        rest = nextRest
    }
    return Math.max(sold, rest)
};