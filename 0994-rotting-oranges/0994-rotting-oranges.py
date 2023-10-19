class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        q, time, fresh = deque([]), -1, 0
        for r in range(0, len(grid)):
            for c in range(0, len(grid[r])):
                if grid[r][c] == 2:
                    q.append((r, c))
                if grid[r][c] == 1:
                    fresh += 1
        if not len(q) and not fresh > 0:
            return 0
        if not len(q) and fresh > 0:
            return -1
        while q:
            l = len(q)
            for _ in range(0, l):
                r, c = q.popleft()
                grid[r][c] = 0
                for rr, cc in [[1, 0], [0, 1], [-1, 0], [0, -1]]:
                    rrr, ccc = rr + r, cc + c
                    if rrr >= 0 and rrr < len(grid) and ccc >= 0 and ccc < len(grid[rrr]) and grid[rrr][ccc] == 1 and (rrr, ccc) not in q:
                        q.append((rrr, ccc))
            time += 1
        return time if sum(map(sum, grid)) == 0 else -1