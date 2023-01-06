class Solution:
    def splitArray(self, nums: List[int], k: int) -> int:
        n = len(nums)
        suffix_sums = [0] * (n+1)
        
        for i in range(n-1, -1, -1):
            suffix_sums[i] = suffix_sums[i+1] + nums[i]
        
        @lru_cache(None)
        def helper(i: int, k: int) -> int:
            if k == 1:
                return suffix_sums[i]
            
            cur_sum = 0
            res = [inf]
            
            for j in range(i, n-1):
                cur_sum += nums[j]
                max_sum = max(cur_sum, helper(j+1, k-1))
                res[0] = min(res[0], max_sum)
                
                if cur_sum > res[0]:
                    break
        
            return res[0]
        
        return helper(0, k)