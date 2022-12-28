class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        
        min_so_far = max_so_far = res = nums[0]
        
        for i in range(1, len(nums)):
            temp = max_so_far
            
            max_so_far = max(nums[i], max_so_far * nums[i], min_so_far * nums[i])
            min_so_far = min(nums[i], temp * nums[i], min_so_far * nums[i])
            res = max(res, max_so_far)
        
        return res