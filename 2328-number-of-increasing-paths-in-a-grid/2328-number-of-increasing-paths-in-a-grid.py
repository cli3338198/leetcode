class Solution:
    def countPaths(self, grid: List[List[int]]) -> int:
        mod, rows, cols = pow(10, 9) + 7, len(grid), len(grid[0])
        dp = [[0] * cols for _ in range(0, rows)]
        
        def dfs(r: int, c: int) -> int:
            nonlocal grid, rows, cols
            if dp[r][c] != 0:
                return dp[r][c]
            dp[r][c] = 1
            for rr, cc in [[1, 0], [0, 1], [-1, 0], [0, -1]]:
                rrr, ccc = rr + r, cc + c
                if rrr >= 0 and rrr < rows and ccc >= 0 and ccc < cols and grid[r][c] < grid[rrr][ccc]:
                    dp[r][c] += dfs(rrr, ccc)
            return dp[r][c]
        
        for r in range(0, rows):
            for c in range(0, cols):
                dp[r][c] = dfs(r, c)
        return sum(map(sum, dp)) % mod
        