class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        n = len(prices)
        
        dp = [[0] * n for _ in range(k + 1)]
        
        for i in range(1, k + 1):
            temp = -inf
            
            for j in range(1, n):
                temp = max(temp, dp[i-1][j-1] - prices[j-1])
                dp[i][j] = max(dp[i][j-1], temp + prices[j])
                
        return dp[k][n-1]