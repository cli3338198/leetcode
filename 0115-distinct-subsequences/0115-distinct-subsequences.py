class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        m = len(s)
        n = len(t)
        
        dp = [[1 if c == 0 else 0 for c in range(n+1)] for _ in range(m+1)]
        
        for r in range(1, m+1):
            for c in range(1, n+1):
                dp[r][c] = dp[r-1][c]
                if s[r-1] == t[c-1]:
                    dp[r][c] += dp[r-1][c-1]
        
        return dp[m][n]