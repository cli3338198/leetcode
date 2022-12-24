class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        def k_transactions(k: int, prices: List[int]) -> int:
        
            dp = [[0] * len(prices) for _ in range(k+1)]
            
            for i in range(1, k+1):
                temp = -inf
                for j in range(1, len(prices)):
                    temp = max(temp, dp[i-1][j-1] - prices[j-1])
                    dp[i][j] = max(dp[i][j-1], temp + prices[j])
                    
            return dp[k][len(prices)-1]
        
        return k_transactions(2, prices)