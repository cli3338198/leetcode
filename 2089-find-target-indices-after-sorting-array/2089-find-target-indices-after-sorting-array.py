class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        nums.sort()
        res = []
        for i in range(0, len(nums)):
            if nums[i] == target:
                res.append(i)
        return res