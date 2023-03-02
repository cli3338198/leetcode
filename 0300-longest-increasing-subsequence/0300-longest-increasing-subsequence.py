class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        
        def binary_search(n: int, dp: List[List[int]]) -> int:
            l, r = 0, len(dp) - 1
            
            while l < r:
                m = (l + r) // 2
                num = dp[m][-1]
                
                if num < n:
                    l = m + 1
                
                else:
                    r = m
            
            return l
        
        dp = []
        
        for n in nums:
            if not dp or dp[-1][-1] < n:
                dp.append([n])
            
            else:
                idx = binary_search(n, dp)
                dp[idx].append(n)
        
        return len(dp)