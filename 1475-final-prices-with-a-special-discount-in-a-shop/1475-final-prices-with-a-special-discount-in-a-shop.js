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

finalPrices = function(prices) {
    const stack = []
    const res = []
    for (let i=prices.length-1; i >= 0; i--) {
        while (stack.length && stack[stack.length-1] > prices[i]) {
            stack.pop()
        }
        res[i] = stack.length ? prices[i] - stack[stack.length-1] : prices[i]
        stack.push(prices[i])
    }
    return res
}