class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy, sell, rest = float("-inf"), 0, 0
        for price in prices:
            buy, sell, rest = max(buy, rest-price), buy + price, max(rest, sell)
        return max(sell, rest)
        
        #
        
        n = len(prices)
        buy = [0] * n
        sell = [0] * n
        buy[0] = -prices[0]
        for i in range(1, n):
            buy[i] = max(buy[i-1], (sell[i-2] if i-2 >= 0 else 0) - prices[i])
            sell[i] = max(sell[i-1], buy[i-1] + prices[i])
        return sell[-1]