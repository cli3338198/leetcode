class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        if not nums:
            return [[]]
        res = []
        for i in range(0, len(nums)):
            for sub in self.permute(nums[0:i:] + nums[i+1::]):
                res.append([nums[i]] + sub)
        return res