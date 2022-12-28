class Solution:
    def maximalSquare(self, mat: List[List[str]]) -> int:
        
        rows = len(mat)
        cols = len(mat[0])
        
        dp = [[0] * cols for _ in range(rows)]
        
        res = 0
        
        for r in range(rows):
            for c in range(cols):
                if not r or not c:
                    if mat[r][c] == '1':
                        dp[r][c] = 1
                elif mat[r][c] == '1':
                    dp[r][c] = 1 + min(dp[r-1][c-1], dp[r][c-1], dp[r-1][c])
                    
                res = max(res, dp[r][c] * dp[r][c])
                
        return res