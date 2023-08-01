class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        res = []
        for n in nums:
            idx = abs(n)-1
            if nums[idx] > 0:
                nums[idx] *= -1
        for i in range(0, len(nums)):
            if nums[i] > 0:
                res.append(i+1)
        return res