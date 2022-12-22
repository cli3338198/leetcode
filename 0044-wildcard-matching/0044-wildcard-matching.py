class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        rows = len(s)
        cols = len(p)
        
        dp = [[False] * (cols + 1) for _ in range(rows + 1)]
        
        dp[0][0] = True
        
        for c in range(1, cols+1):
            if p[c-1] == '*':
                dp[0][c] = dp[0][c-1]
        
        for r in range(1, rows+1):
            for c in range(1, cols+1):
                if s[r-1] == p[c-1] or p[c-1] == '?':
                    dp[r][c] = dp[r-1][c-1]
                elif p[c-1] == '*':
                    dp[r][c] = dp[r-1][c] or dp[r][c-1]
        
        return dp[rows][cols]