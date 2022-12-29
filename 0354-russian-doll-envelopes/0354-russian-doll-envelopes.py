class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        envelopes.sort(key=lambda e: (e[0], -e[1]))
        
        dp = []
        
        def binary_search(dp: List[List[int]], e: List[int]) -> int:
            
            l, r, res = 0, len(dp) - 1, -1
            
            while l <= r:
                m = (l + r) // 2
                
                if dp[m][1] >= e[1]:
                    res = m
                    r = m - 1
                    
                else:
                    l = m + 1
            
            return res
        
        for e in envelopes:
            idx = binary_search(dp, e)
            
            if idx == -1:
                dp.append(e)
            
            else:
                dp[idx] = e
        
        return len(dp)