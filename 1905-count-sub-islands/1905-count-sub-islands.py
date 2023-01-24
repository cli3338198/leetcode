class Solution:
    def countSubIslands(self, grid1: List[List[int]], grid2: List[List[int]]) -> int:
        
        rows = len(grid1)
        cols = len(grid1[0])
        
        def dfs(r: int, c: int) -> int:
            
            if r < 0 or r == rows or c < 0 or c == cols or grid2[r][c] == 0:
                return 1
            
            grid2[r][c] = 0
            mask = 1
            
            mask = mask & dfs(r+1, c)
            mask = mask & dfs(r-1, c)
            mask = mask & dfs(r, c-1)
            mask = mask & dfs(r, c+1)
            
            return mask & grid1[r][c]
        
        res = 0
        
        for r in range(rows):
            for c in range(cols):
                if grid2[r][c] == 1:
                    res += dfs(r, c)
                    
        return res
            