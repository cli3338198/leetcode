class Solution:
    def subArrayRanges(self, nums: List[int]) -> int:
        res = 0
        for i in range(0, len(nums)):
            mn, mx = inf, -inf
            for j in range(i, len(nums)):
                mn, mx = min(mn, nums[j]), max(mx, nums[j])
                res += mx - mn
        return res
        
        #
        
        res = 0
        for i in range(0, len(nums)):
            for j in range(0, i):
                mn, mx = inf, -inf
                for k in range(j, i+1):
                    mn, mx = min(mn, nums[k]), max(mx, nums[k])
                res += mx - mn
        return res