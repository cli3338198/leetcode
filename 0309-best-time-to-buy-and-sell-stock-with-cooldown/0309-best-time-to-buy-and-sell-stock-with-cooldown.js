/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buying = -Infinity
    let selling = 0
    let resting = 0
    for (const price of prices) {
        const nextBuying = Math.max(buying, resting - price)
        const nextSelling = buying + price
        const nextResting = Math.max(resting, selling)
        buying = nextBuying
        selling = nextSelling
        resting = nextResting
    }
    return Math.max(selling, resting)
};