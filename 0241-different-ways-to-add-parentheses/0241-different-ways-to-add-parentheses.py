class Solution:
    def diffWaysToCompute(self, exp: str) -> List[int]:
        
        n = len(exp)
        
        dp = [[[0]] * (n+1) for _ in range(n+1)]
        
        for length in range(1, n+1):
            for i in range(0, n - length + 1):
                
                j = i + length - 1
                res = []
                
                for k in range(i, j+1):
                    c = exp[k]
                    
                    if c in '-+*':
                        
                        left = dp[i][k-1]
                        right = dp[k+1][j]
                        
                        for l in left:
                            for r in right:
                                
                                if c == '-':
                                    res.append(l - r)
                                    
                                elif c == '+':
                                    res.append(l + r)
                                    
                                else:
                                    res.append(l * r)
                                
                if not res:
                    res.append(int(exp[i:j+1:]))
                    
                dp[i][j] = res
        
        return dp[0][n-1]