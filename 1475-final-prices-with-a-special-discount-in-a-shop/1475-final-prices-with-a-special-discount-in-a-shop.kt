class Solution {
    fun finalPrices(prices: IntArray): IntArray {
        val res = IntArray(prices.size){0}
        for (i in 0..(prices.size-1)) {
            res[i] = prices[i]
            for (j in (i+1)..(prices.size-1)) {
                if (prices[j] <= prices[i]) {
                    res[i] -= prices[j]
                    break
                }
            }
        }
        return res
    }
}