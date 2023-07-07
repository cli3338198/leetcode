class Solution:
    def matrixSum(self, nums: List[List[int]]) -> int:
        nums, res = [sorted(row) for row in nums], 0
        for i in range(0, len(nums[0])):
            mx = float("-inf")
            for row in nums:
                mx = max(mx, row[i])
            res += mx
        return res