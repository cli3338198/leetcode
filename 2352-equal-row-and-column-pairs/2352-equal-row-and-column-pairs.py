class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        n, cnt, res = len(grid), {}, 0
        for row in grid:
            key = "|" + "|".join([str(c) for c in row])
            cnt[key] = cnt.get(key, 0) + 1
        for c in range(0, n):
            key = ""
            for r in range(0, n):
                key += "|" + str(grid[r][c])
            res += cnt.get(key, 0)
        return res
        