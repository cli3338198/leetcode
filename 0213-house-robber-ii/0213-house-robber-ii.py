class Solution:
    def rob(self, nums: List[int]) -> int:
        
        def helper(nums: List[int]) -> int:
            
            n = len(nums)
            
            rob1 = 0
            rob2 = 0
            
            for r in nums:
                temp = max(rob1 + r, rob2)
                rob1 = rob2
                rob2 = temp
                
            return rob2
        
        if len(nums) == 1: return nums[0]
        
        return max(helper(nums[:-1:]), helper(nums[1::]))
            