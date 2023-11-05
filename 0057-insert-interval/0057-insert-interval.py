class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        lo, hi, i = 0, len(intervals)-1, len(intervals)
        while lo <= hi:
            mid = floor(lo + hi) // 2
            if intervals[mid][1] < newInterval[0]:
                lo = mid + 1
            else:
                i = mid
                hi = mid - 1
        while i < len(intervals) and intervals[i][0] <= newInterval[1]:
            newInterval = [min(intervals[i][0], newInterval[0]), max(intervals[i][1], newInterval[1])]
            del intervals[i]
        intervals.insert(i, newInterval)
        return intervals
        
        #
        
        intervals, res = sorted(intervals + [newInterval]), []
        for interval in intervals:
            if res and interval[0] <= res[-1][1]:
                res[-1][1] = max(res[-1][1], interval[1])
            else:
                res.append(interval)
        return res