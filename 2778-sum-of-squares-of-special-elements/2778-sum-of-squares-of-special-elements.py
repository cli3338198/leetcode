class Solution:
    def sumOfSquares(self, nums: List[int]) -> int:
        n = len(nums)
        return sum([num * num for i, num in enumerate(nums) if n % (i + 1) == 0])