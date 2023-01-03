class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        
        n = len(nums)
        total_sum = sum(nums)
        half_sum = total_sum // 2
        
        if total_sum / 2 != half_sum:
            return False
        
        nums.sort()
        
        dp = [[False] * (half_sum + 1) for _ in range(n + 1)]
        
        for i in range(n + 1):
            for j in range(half_sum + 1):
                if j == 0:
                    dp[i][j] = True
                    
        for i in range(1, n + 1):
            for j in range(1, half_sum + 1):
                dp[i][j] = dp[i-1][j]
                
                if nums[i-1] <= j:
                    dp[i][j] = dp[i][j] or dp[i-1][j-nums[i-1]]
                    
                if j == half_sum and dp[i][j] == True:
                    return True
        
        return False
        
        
