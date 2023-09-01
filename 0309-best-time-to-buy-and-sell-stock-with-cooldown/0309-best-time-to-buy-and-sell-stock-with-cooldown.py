class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        buy = [0] * n
        sell = [0] * n
        buy[0] = -prices[0]
        for i in range(1, n):
            buy[i] = max(buy[i-1], (sell[i-2] if i-2 >= 0 else 0) - prices[i])
            sell[i] = max(sell[i-1], buy[i-1] + prices[i])
        return sell[-1]