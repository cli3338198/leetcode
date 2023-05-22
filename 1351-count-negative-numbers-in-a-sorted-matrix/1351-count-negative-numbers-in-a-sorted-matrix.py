class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        res = 0
        for row in grid:
            l, r = 0, len(row)-1
            while l <= r:
                m = (l+r) // 2
                if row[m] < 0:
                    r = m - 1
                else:
                    l = m + 1
            res += len(row) - l
        return res