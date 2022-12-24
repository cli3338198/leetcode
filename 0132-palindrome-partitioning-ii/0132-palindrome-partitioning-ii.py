class Solution:
    def minCut(self, s: str) -> int:
        
        n = len(s)
        
        dp = [[False] * n for _ in range(n)]
        
        for i in range(n):
            dp[i][i] = True
            
        for i in range(n-1):
            if s[i] == s[i+1]:
                dp[i][i+1] = True
                
        for length in range(3, n+1):
            for i in range(n-length+1):
                j = i + length - 1
                if s[i] == s[j] and dp[i+1][j-1]:
                    dp[i][j] = True
                    
        cuts = [inf] * n
        cuts[0] = 0
        
        for i in range(1, n):
            if dp[0][i]:
                cuts[i] = 0
            else:
                for j in range(i):
                    if dp[j+1][i]:
                        cuts[i] = min(cuts[i], 1 + cuts[j])
        
        return cuts[n-1]