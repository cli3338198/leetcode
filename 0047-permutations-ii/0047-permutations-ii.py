class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        
        def permute(nums: List[int]) -> List[List[int]]:
            if len(nums) == 1:
                return [nums]
            res = []
            for i in range(0, len(nums)):
                if i > 0 and nums[i] == nums[i-1]:
                    continue
                for sub in permute(nums[0:i:] + nums[i+1::]):
                    res.append([nums[i], *sub])
            return res
        
        return permute(nums)