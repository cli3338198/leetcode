class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        _max = max(nums)
        freq, dp = [0] * (_max + 1), [0] * (_max + 1)
        for n in nums:
            freq[n] += 1
        for i in range(1, _max+1):
            dp[i] = max(dp[i-1], dp[i-2] + i * freq[i])
        return dp[_max]