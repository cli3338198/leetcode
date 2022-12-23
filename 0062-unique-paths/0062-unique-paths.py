class Solution:
    def uniquePaths(self, rows: int, cols: int) -> int:
        dp = [[0] * cols for _ in range(rows)]
        
        for r in range(rows-1, -1, -1):
            dp[r][cols-1] = 1
            
        for c in range(cols-1, -1, -1):
            dp[rows-1][c] = 1
            
        for r in range(rows-2, -1, -1):
            for c in range(cols-2, -1, -1):
                dp[r][c] += dp[r+1][c] + dp[r][c+1]
        
        return dp[0][0]