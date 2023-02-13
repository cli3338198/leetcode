class Solution:
    def minPathCost(self, grid: List[List[int]], moveCost: List[List[int]]) -> int:
        
        rows = len(grid)
        cols = len(grid[0])
        
        dp = [[inf] * cols for _ in range(rows)]
        dp[0] = grid[0]
        
        for r in range(1, rows):
            for c in range(cols):
                for k in range(cols):
                    dp[r][c] = min(dp[r][c], grid[r][c] + dp[r-1][k] + moveCost[grid[r-1][k]][c])
        
        return min(*dp[-1])
        