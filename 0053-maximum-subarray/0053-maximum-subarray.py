class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        
        cur_max = -inf
        max_ = -inf
        
        for n in nums:
            cur_max = max(cur_max + n, n)
            max_ = max(max_, cur_max)
        
        return max_