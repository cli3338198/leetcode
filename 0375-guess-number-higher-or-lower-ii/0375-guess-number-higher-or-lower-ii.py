class Solution:
    def getMoneyAmount(self, n: int) -> int:
    
        dp = [[0] * (n+2) for _ in range(n+2)]
        
        for l in range(2, n+1):
            for i in range(n-l+2):
                j = i+l-1
                res = inf
                
                for k in range(i, j+1):
                    res = min(res, k + max(dp[i][k-1], dp[k+1][j]))
                    
                dp[i][j] = res
        
        return dp[1][n]