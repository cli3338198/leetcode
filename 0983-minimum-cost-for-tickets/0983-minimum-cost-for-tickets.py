class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        
        last_day = days[-1]
        dp = [inf] * (last_day + 1)
        dp[0] = 0
        days = set(days)
        
        for i in range(1, last_day+1):
            if i not in days:
                dp[i] = dp[i-1]
                continue
            
            dp[i] = min(dp[i], costs[0] + dp[max(0, i-1)]) 
            dp[i] = min(dp[i], costs[1] + dp[max(0, i-7)])
            dp[i] = min(dp[i], costs[2] + dp[max(0, i-30)])
        
        return dp[last_day]
        