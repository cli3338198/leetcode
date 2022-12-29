function maxProfit(prices: number[]): number {
    let buy = -Infinity
    let sell = 0
    let rest = 0
    for (const p of prices) {
        const nextBuy = Math.max(buy, rest - p)
        const nextSell = buy + p
        const nextRest = Math.max(rest, sell)
        buy = nextBuy
        sell = nextSell
        rest = nextRest
    }
    return Math.max(sell, rest)
};