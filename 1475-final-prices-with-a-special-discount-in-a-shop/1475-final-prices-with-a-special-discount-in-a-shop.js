/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const discounts = Array(prices.length).fill(0)
    for (let i=0; i < prices.length; i++) {
        for (let j=i+1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                discounts[i] = prices[j]
                break
            }
        }
    }
    return prices.map((p, i) => p - discounts[i])
};