class Solution:
    def minMoves2(self, nums: List[int]) -> int:
        nums.sort()
        candidate = nums[len(nums)//2]
        res = 0
        for n in nums:
            res += abs(candidate - n)
        return res