class Solution:
    def longestSubsequence(self, arr: List[int], difference: int) -> int:
        dp, res = {}, 1
        for n in arr:
            dp[n] = 1 + dp.get(n-difference, 0)
            res = max(res, dp[n])
        return res