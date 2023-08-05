class Solution:
    def findMaxFish(self, grid: List[List[int]]) -> int:
        visited = [[False for col in row] for row in grid]
        mx = 0
        
        def dfs(r: int, c: int) -> int:
            nonlocal visited
            if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[r]) or grid[r][c] == 0 or visited[r][c] == True:
                return 0
            visited[r][c] = True
            return grid[r][c] + dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1)           
        
        for r in range(0, len(grid)):
            for c in range(0, len(grid[r])):
                if grid[r][c] > 0 and visited[r][c] == False:
                    mx = max(mx, dfs(r, c))
        return mx