class Solution:
    def longestArithSeqLength(self, nums: List[int]) -> int:
        n = len(nums)
        dp, res = [{} for _ in range(n)], 0
        for i in range(1, n):
            for j in range(0, i):
                diff = nums[i] - nums[j]
                dp[i][diff] = max(dp[i].get(diff, 0), 1 + dp[j].get(diff, 0))
                res = max(res, 1 + dp[i][diff])
        return res