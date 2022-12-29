class Solution:
    def integerBreak(self, n: int) -> int:
        
        if n < 2:
            return 0
        
        if n == 2:
            return 1
        
        dp = [0] * (n + 1)
        
        dp[2] = 1
        dp[3] = 2
        
        for i in range(4, n + 1):
            for j in range(2, i + 1):
                dp[i] = max(dp[i], max(j, dp[j]) * max(i - j, dp[i - j]))
        
        return dp[n]