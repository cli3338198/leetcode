class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        
        dp = [[1, 1] for _ in range(len(arr))]
        res = 1
        
        for i in range(1, len(arr)):
            if arr[i] < arr[i-1]:
                dp[i][0] = dp[i-1][1] + 1
            
            if arr[i] > arr[i-1]:
                dp[i][1] = dp[i-1][0] + 1
                
            res = max(res, max(*dp[i]))
            
        return res
        