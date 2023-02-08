class Solution:
    def lenLongestFibSubseq(self, arr: List[int]) -> int:
        
        dp = [[2] * len(arr) for _ in range(len(arr))]
        m = {}
        res = 0
        
        for i in range(len(arr)):
            m[arr[i]] = i
            
            for j in range(i):
                if arr[i] - arr[j] < arr[j] and arr[i] - arr[j] in m:
                    k = m[arr[i] - arr[j]]
                    dp[j][i] = max(dp[j][i], 1 + dp[k][j])
                    
                res = max(res, dp[j][i])
        
        return res if res > 2 else 0
                    
        