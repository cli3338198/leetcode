class Solution:
    def divisorGame(self, n: int) -> bool:
        dp = [False] * (n + 1)
        if len(dp) > 2: 
            dp[2] = True
        for m in range(3, n+1):
            for x in range(1, m):
                if m % x == 0 and not dp[m - x]:
                    dp[m] = True
                    break
        return dp[n]
        
        
        @lru_cache(None)
        def helper(n: int) -> bool:
            if n == 2: 
                return True
            if n < 2:
                return False
            for x in range(1, n):
                if n % x == 0 and not helper(n - x):
                    return True
            return False
        
        return helper(n)