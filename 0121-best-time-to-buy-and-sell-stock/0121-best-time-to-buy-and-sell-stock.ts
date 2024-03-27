function maxProfit(prices: number[]): number {
    let min = Infinity, profit = 0
    for (const p of prices) {
        min = Math.min(min, p)
        profit = Math.max(profit, p - min)
    }
    return profit
};