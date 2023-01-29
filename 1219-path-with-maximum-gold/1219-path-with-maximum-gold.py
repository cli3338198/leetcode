class Solution:
    def getMaximumGold(self, grid: List[List[int]]) -> int:
        
        rows = len(grid)
        cols = len(grid[0])
        
        res = 0
        
        def dfs(r: int, c: int) -> int:
            
            cur = grid[r][c]
            grid[r][c] = 0
            res = 0
            
            for rr, cc in [[1, 0], [0, 1], [-1, 0], [0, -1]]:
                rrr = rr + r
                ccc = cc + c
                
                if rrr >= 0 and rrr < rows and ccc >= 0 and ccc < cols and grid[rrr][ccc] > 0:
                    res = max(res, dfs(rrr, ccc))
                    
            grid[r][c] = cur
            return cur + res
            
        
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] > 0:
                    res = max(res, dfs(r, c))
        
        return res