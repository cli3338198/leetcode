class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)
        dp = [[0 for _ in range(0, n+1)] for _ in range(0, m+1)]
        for i in range(1, m+1):
            dp[i][0] = i
        for j in range(1, n+1):
            dp[0][j] = j
        for i in range(1, m+1):
            for j in range(1, n+1):
                if word1[i-1] == word2[j-1]:
                    dp[i][j] = dp[i-1][j-1]
                else:
                    dp[i][j] = 1 + min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])
        return dp[m][n]
        
        #
        
        @lru_cache(None)
        def rec(a: str, b: str) -> int:
            if not a:
                return len(b)
            if not b:
                return len(a)
            if a[0] == b[0]:
                return rec(a[1::], b[1::])
            return 1 + min(rec(a[1::], b[1::]), rec(a[1::], b), rec(a, b[1::]))
        
        return rec(word1, word2)
        
        #
        
        rows = len(word1)
        cols = len(word2)
        
        dp = [[0] * (cols+1) for _ in range(rows+1)]
        
        for r in range(1, rows+1):
            dp[r][0] = 1 + dp[r-1][0]
            
        for c in range(1, cols+1):
            dp[0][c] = 1 + dp[0][c-1]
            
        for r in range(1, rows+1):
            for c in range(1, cols+1):
                if word1[r-1] == word2[c-1]:
                    dp[r][c] = dp[r-1][c-1]
                else:
                    dp[r][c] = 1 + min(dp[r-1][c-1], dp[r-1][c], dp[r][c-1])
        
        return dp[rows][cols]
