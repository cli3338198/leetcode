class Solution:
    
    dp = [0]
    
    def numSquares(self, n: int) -> int:
        
        dp = self.dp

        perfect_squares = [pow(i, 2) for i in range(1, int(sqrt(n)) + 1)]
        
        while len(dp) < n + 1:
            
            res = inf
            
            for sqr in perfect_squares:
                if len(dp) < sqr:
                    break
                
                res = min(res, 1 + dp[-sqr])
            
            dp.append(res)

        return dp[n]