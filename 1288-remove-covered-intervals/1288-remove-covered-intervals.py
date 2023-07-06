class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: x[0])
        res, start, end = 0, -1, -1 
        for cS, cE in intervals:
            print(cS, cE)
            if cS > start and cE > end:
                start = cS
                res += 1
            end = max(end, cE)
        return res