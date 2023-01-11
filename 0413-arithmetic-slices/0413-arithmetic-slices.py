class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        
        n = len(nums)
        
        dp = [0] * n
        res = 0
        
        for i in range(2, n):
            if nums[i-2] - nums[i-1] == nums[i-1] - nums[i]:
                dp[i] = 1 + dp[i-1]
                res += dp[i]
        
        return res