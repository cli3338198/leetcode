class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        
        def helper(nums: List[int]) -> List[int]:
            res = []
            
            if len(nums) == 1:
                return [nums]
            
            for i in range(len(nums)):
                for sub in helper(nums[0:i:] + nums[i+1::]):
                    res.append([*sub, nums[i]])
                    
            return res
        
        return helper(nums)