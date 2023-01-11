class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        
        n = len(intervals)
        
        intervals.sort(key=lambda a: a[0])
        
        dp = [0] * n
        last_end = intervals[0][1]
        
        for i in range(1, n):
            s, e = intervals[i]
            
            if s < last_end:
                last_end = min(last_end, e)
                dp[i] = 1 + dp[i-1]
                
            else:
                last_end = e
                dp[i] = dp[i-1]
        
        return dp[-1]
        