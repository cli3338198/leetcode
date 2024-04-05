class Solution:
    def maxSubarrayLength(self, nums: List[int], k: int) -> int:
        freq = {}
        l = res = 0
        for r in range(0, len(nums)):
            freq[nums[r]] = freq.get(nums[r], 0) + 1
            while l < r and freq[nums[r]] > k:
                freq[nums[l]] -= 1
                l += 1
            res = max(res, r - l + 1)
        return res