class Solution:
#     def splitArray(self, nums: List[int], k: int) -> int:
#         n = len(nums)
#         suffix_sums = [0] * (n+1)
        
#         for i in range(n-1, -1, -1):
#             suffix_sums[i] = suffix_sums[i+1] + nums[i]
        
#         @lru_cache(None)
#         def helper(i: int, k: int) -> int:
#             if k == 1:
#                 return suffix_sums[i]
            
#             cur_sum = 0
#             res = [inf]
            
#             for j in range(i, n-1):
#                 cur_sum += nums[j]
#                 max_sum = max(cur_sum, helper(j+1, k-1))
#                 res[0] = min(res[0], max_sum)
                
#                 if cur_sum > res[0]:
#                     break
        
#             return res[0]
        
#         return helper(0, k)
    
#     def splitArray(self, nums: List[int], k: int) -> int:
#         n = len(nums)
        
#         sums = [0] * (n+1)
        
#         for i in range(n):
#             sums[i+1] = sums[i] + nums[i]
            
#         dp = [[inf] * (n) for _ in range(k)]
        
#         for i in range(n):
#             dp[0][i] = sums[n] - sums[i]
        
#         for s in range(1, k):
#             for i in range(n):
#                 for j in range(i+1, n):
#                     dp[s][i] = min(dp[s][i], max(dp[s-1][j], sums[j]-sums[i]))
        
#         return dp[k-1][0]

#     def splitArray(self, nums: List[int], k: int) -> int:
#         n = len(nums)
        
#         sums = [0] * (n+1)
        
#         for i in range(n):
#             sums[i+1] = sums[i] + nums[i]
            
#         dp = [0] * n
        
#         for i in range(n):
#             dp[i] = sums[n] - sums[i]
            
#         for s in range(1, k):
#             for i in range(n):
#                 for j in range(i+1, n):
#                     dp[i] = min(dp[i], max(dp[j], sums[j]-sums[i]))
        
#         return dp[0]
        
    def splitArray(self, nums: List[int], k: int) -> int:
        
        l, r, res = max(nums), sum(nums), sum(nums)
        
        def can_split(largest: int) -> bool:
            
            cur_sum = 0
            num_arrays = 0
            
            for n in nums:
                cur_sum += n
                if cur_sum > largest:
                    cur_sum = n
                    num_arrays += 1
            
            return num_arrays + 1 <= k
        
        while l <= r:
            m = (l + r) // 2
            
            if can_split(m):
                res = m
                r = m - 1
            else:
                l = m + 1
        
        return res
                
        

