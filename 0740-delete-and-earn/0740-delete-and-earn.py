class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        
        max_ = max(nums)
        dp = [0] * (max_ + 1)
        freq = [0] * (max_ + 1)
        
        for n in nums:
            freq[n] += 1
            
        dp[1] = 1 * freq[1]
            
        for i in range(2, max_ + 1):
            dp[i] = max(dp[i-1], dp[i-2] + i * freq[i])
            
        return dp[max_]