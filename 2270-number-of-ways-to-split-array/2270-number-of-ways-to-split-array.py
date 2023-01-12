class Solution:
    def waysToSplitArray(self, nums: List[int]) -> int:
        
        n = len(nums)
        total_sum = sum(nums)
        prefix_sum = 0
        res = 0
        
        for n in nums[:-1:]:
            prefix_sum += n
            
            if prefix_sum >= total_sum - prefix_sum:
                res += 1
        
        return res