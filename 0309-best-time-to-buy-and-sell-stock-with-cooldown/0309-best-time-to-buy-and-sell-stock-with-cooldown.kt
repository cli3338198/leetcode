class Solution {
    fun maxProfit(prices: IntArray): Int {
        var buy = -1000
        var sell = 0
        var rest = 0
        for (price in prices) {
            val buying = Math.max(buy, rest - price)
            val selling = buy + price
            val resting = Math.max(rest, sell)
            buy = buying
            sell = selling
            rest = resting
        }
        return Math.max(sell, rest)
    }
}