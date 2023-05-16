class Solution:
    def minOperations(self, nums: List[int]) -> int:
        res = 0
        for i in range(1, len(nums)):
            if nums[i-1] < nums[i]: 
                continue
            diff = abs(nums[i] - nums[i-1]) + 1
            nums[i] += diff
            res += diff
        return res