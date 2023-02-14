class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        
        start = [None, None]
        cnt = 1
        
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 0:
                    cnt += 1
                
                if grid[r][c] == 1:
                    start[0] = r
                    start[1] = c
                    
        def dfs(r: int, c: int) -> int:
            nonlocal cnt
            
            if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] < 0:
                return 0
            
            if grid[r][c] == 2:
                return 1 if cnt == 0 else 0
            
            res = 0
            
            grid[r][c] = -2
            cnt -= 1      
            res += dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1)
            grid[r][c] = 0
            cnt += 1
            
            return res
        
        return dfs(start[0], start[1])
            