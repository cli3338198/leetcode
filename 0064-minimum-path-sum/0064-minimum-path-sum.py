class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        
        for r in range(rows-1, -1, -1):
            for c in range(cols-1, -1, -1):
                if r == rows-1 and c == cols-1:
                    continue
                if r == rows-1:
                    grid[r][c] += grid[r][c+1]
                elif c == cols-1:
                    grid[r][c] += grid[r+1][c]
                else:
                    grid[r][c] += min(grid[r+1][c], grid[r][c+1])
        
        return grid[0][0]