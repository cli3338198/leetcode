class Solution:
    def deleteGreatestValue(self, grid: List[List[int]]) -> int:
        for row in grid:
            row.sort(reverse=True)
        res = 0
        for c in range(0, len(grid[0])):
            res += max(map(lambda x: x[c], grid))
        return res