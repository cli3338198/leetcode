class Solution:
    def maxIncreaseKeepingSkyline(self, grid: List[List[int]]) -> int:
        
        rows, cols, row, col, res = len(grid), len(grid[0]), [0] * len(grid), [0] * len(grid[0]), 0
        
        for r in range(rows):
            for c in range(cols):
                row[r] = max(grid[r][c], row[r])
                col[c] = max(grid[r][c], col[c])
                
        for r in range(rows):
            for c in range(cols):
                res += min(row[r], col[c]) - grid[r][c]
                
        return res
                