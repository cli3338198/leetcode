class Solution:
    def maxSumDivThree(self, nums: List[int]) -> int:
        dp = [[0] * 3 for _ in range(0, len(nums)+1)]
        for i in range(1, len(nums)+1):
            dp[i] = dp[i-1][0::]
            for j in range(0, 3):
                cur_sum = dp[i-1][j] + nums[i-1]
                mod = cur_sum % 3
                dp[i][mod] = max(dp[i][mod], cur_sum)
        return dp[len(nums)][0]