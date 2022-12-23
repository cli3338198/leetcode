class Solution:
    def uniquePathsWithObstacles(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        
        if grid[rows-1][cols-1] == 1 or grid[0][0] == 1:
            return 0
        
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1:
                    grid[r][c] *= -1
                    
        grid[rows-1][cols-1] = 1
        
        for r in range(rows-1, -1, -1):
            for c in range(cols-1, -1, -1):
                if grid[r][c] == -1 or (r == rows-1 and c == cols-1): 
                    continue
                if r == rows-1:
                    right = 0 if grid[r][c+1] == -1 else grid[r][c+1]
                    grid[r][c] += right
                elif c == cols-1:
                    bottom = 0 if grid[r+1][c] == -1 else grid[r+1][c]
                    grid[r][c] += bottom
                else:
                    right = 0 if grid[r][c+1] == -1 else grid[r][c+1]
                    bottom = 0 if grid[r+1][c] == -1 else grid[r+1][c]
                    grid[r][c] += right + bottom
        
        return grid[0][0]
                    