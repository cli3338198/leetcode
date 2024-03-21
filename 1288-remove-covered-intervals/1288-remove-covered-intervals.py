class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: x[0])
        res, prev = 1, intervals[0]
        for i in range(1, len(intervals)):
            start, end = intervals[i]
            if start > prev[0] and end > prev[1]:
                res += 1
                prev[0] = start
            prev[1] = max(prev[1], end)
        return res