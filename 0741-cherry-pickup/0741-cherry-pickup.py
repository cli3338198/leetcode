class Solution:
    def cherryPickup(self, grid: List[List[int]]) -> int:
        n = len(grid)
        
        @lru_cache(None)
        def dfs(r0: int, c0: int, r1: int, c1: int) -> int or -inf:
            if r0 == n or r1 == n or c0 == n or c1 == n or grid[r0][c0] == -1 or grid[r1][c1] == -1:
                return -inf
            if r0 == r1 == c0 == c1 == n-1:
                return grid[r0][c0]
            cur = 0
            if c0 == c1:
                cur = grid[r0][c0]
            else:
                cur = grid[r0][c0] + grid[r1][c1]
            next = -inf
            for r2, c2 in [[1, 0], [0, 1]]:
                for r3, c3 in [[1, 0], [0, 1]]:
                    r4, c4, r5, c5 = r0 + r2, c0 + c2, r1 + r3, c1 + c3
                    next = max(next, dfs(r4, c4, r5, c5))
            return cur + next
        
        res = dfs(0, 0, 0, 0)
        return res if res != -inf else 0