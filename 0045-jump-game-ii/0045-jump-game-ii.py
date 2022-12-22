class Solution:
    def jump(self, nums: List[int]) -> int:
        n = len(nums)
        
        dp = [inf] * n
        
        dp[0] = 0
        
        for i in range(n):
            for j in range(i+1, i+nums[i]+1):
                if j < n:
                    dp[j] = min(dp[j], 1 + dp[i])
        
        return dp[n-1]