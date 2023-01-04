class Solution:
    def findSubarrays(self, nums: List[int]) -> bool:
        
        dp = set()
        l = 0
        cur_sum = 0
        
        for r in range(len(nums)):
            cur_sum += nums[r]
            
            if r - l + 1 == 2:
                if cur_sum in dp:
                    return True
                
                dp.add(cur_sum)
                cur_sum -= nums[l]
                l += 1
                
        return False
            