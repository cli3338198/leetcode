class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        @lru_cache(None)
        def rec(m: int, n: int) -> int:
            if m == 1 or n == 1:
                return 1
            return rec(m-1, n) + rec(m, n-1)
        
        return rec(m, n)
        
        #
        
        dp = [[1 for _ in range(0, n)] for _ in range(0, m)]
        for i in range(m-2, -1, -1):
            for j in range(n-2, -1, -1):
                dp[i][j] = dp[i+1][j] + dp[i][j+1]
        return dp[0][0]

        #
        
        dp = [[1] * n for _ in range(m)]
        
        for i in range(1, m):
            for j in range(1, n):
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
        
        return dp[-1][-1]
