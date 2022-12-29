class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        
        dp = []
        
        def binary_search(dp: List[int], n: int) -> int:
            
            l, r = 0, len(dp)-1
            
            while l < r:
                m = (l + r) // 2
                
                if dp[m] < n:
                    l = m + 1
                
                else:
                    r = m
            
            return l
        
        for n in nums:
            if not dp or dp[-1] < n:
                dp.append(n)
            
            else:
                idx = binary_search(dp, n)
                dp[idx] = n
                
        return len(dp)
    
    