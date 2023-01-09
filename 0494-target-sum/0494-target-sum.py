class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        
        n = len(nums)
        total_sum = sum(nums)
        
        if abs(target) > total_sum or (total_sum + target) % 2 != 0: 
            return 0
        
        s1 = (total_sum + target) // 2
        dp = [[0] * (s1 + 1) for _ in range(n + 1)]
        dp[0][0] = 1
        
        for i in range(1, n+1):
            for j in range(s1 + 1):
                dp[i][j] += dp[i-1][j]
                
                if nums[i-1] <= j:
                    dp[i][j] += dp[i-1][j-nums[i-1]]
        
        return dp[n][s1]
        
        