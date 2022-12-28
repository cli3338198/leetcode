class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        
        dp = [inf] * (amount + 1)
        dp[0] = 0
        
        for i in range(amount+1):
            for j in coins:
                if j <= i:
                    dp[i] = min(dp[i], 1 + dp[i-j])
        
        return dp[amount] if dp[amount] != inf else -1