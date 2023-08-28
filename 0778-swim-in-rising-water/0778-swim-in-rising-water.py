class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        n = len(grid)
        dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
        visited = set()
        visited.add((0, 0))
        hp = [(grid[0][0], 0, 0)]
        heapq.heapify(hp)
        while hp:
            cur_max, r, c = heapq.heappop(hp)
            if r == n-1 and c == n-1:
                return cur_max
            for rr, cc in dirs:
                rrr, ccc = rr + r, cc + c
                if rrr >= 0 and rrr < n and ccc >= 0 and ccc < n and (rrr, ccc) not in visited:
                    visited.add((rrr, ccc))
                    heapq.heappush(hp, (max(cur_max, grid[rrr][ccc]), rrr, ccc))