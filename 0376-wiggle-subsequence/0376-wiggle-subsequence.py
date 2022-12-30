class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
        
        n = len(nums)
        
        if n < 2:
            return n
        
        dp = [[1, 1] for _ in range(n)]
        
        for i in range(1, n):
            for j in range(i):
                if nums[j] < nums[i]:
                    dp[i][0] = max(dp[i][0], 1 + dp[j][1])
                
                elif nums[j] > nums[i]:
                    dp[i][1] = max(dp[i][1], 1 + dp[j][0])
                    
        return max(*dp[n-1])