class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        duplicates = []
        for n in nums:
            idx = abs(n) - 1
            if nums[idx] < 0:
                duplicates.append(abs(n))
            else:
                nums[idx] *= -1
        return duplicates