class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        for i in range(0, len(nums)-1):
            if nums[i] == nums[i+1]:
                nums[i] *= 2
                nums[i+1] = 0
        non_zeroes = []
        zeroes = []
        for n in nums:
            if n == 0:
                zeroes.append(n)
            else:
                non_zeroes.append(n)
        return [*non_zeroes, *zeroes]