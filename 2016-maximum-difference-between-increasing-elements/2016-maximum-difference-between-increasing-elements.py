class Solution:
    def maximumDifference(self, nums: List[int]) -> int:
        mn, res = nums[0], -1
        for i in range(1, len(nums)):
            mn = min(mn, nums[i])
            res = max(res, nums[i] - mn)
        return res if res != 0 else -1