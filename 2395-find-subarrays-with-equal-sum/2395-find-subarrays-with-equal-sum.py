class Solution:
    def findSubarrays(self, nums: List[int]) -> bool:
        
        dp = set()
        
        for r in range(len(nums) - 1):
            cur_sum = nums[r] + nums[r+1]
            
            if cur_sum in dp:
                return True
            
            dp.add(cur_sum)
            
        return False