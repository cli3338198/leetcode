class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        cursum, totalsum = 0, sum(nums)
        for i in range(0, len(nums)):
            if cursum == totalsum - nums[i] - cursum:
                return i
            cursum += nums[i]
        return -1