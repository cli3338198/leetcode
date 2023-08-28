class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        sorted_nums, lo, hi = sorted(nums), len(nums), 0
        for i in range(0, len(nums)):
            if sorted_nums[i] != nums[i]:
                lo = min(lo, i)
                hi = max(hi, i)
        return hi - lo + 1 if hi - lo > 0 else 0
        