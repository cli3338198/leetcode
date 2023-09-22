class Solution:
    def lcs(self, s: str, t: str) -> int:
        n = len(s)
        dp = [[0] * (n+1) for _ in range(0, n+1)]
        for i in range(1, n+1):
            for j in range(1, n+1):
                if s[i-1] == t[j-1]:
                    dp[i][j] = 1 + dp[i-1][j-1]
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        return dp[n][n]
    
    def longestPalindromeSubseq(self, s: str) -> int:
        # run lcs on s and the reverse of s !!
        # clever solution
        return self.lcs(s, s[::-1])
        
        #
        
        n = len(s)
        dp = [[0] * n for _ in range(0, n)]
        for i in range(0, n):
            dp[i][i] = 1
        for i in range(0, n-1):
            if s[i] == s[i+1]:
                dp[i][i+1] = 2
            else:
                dp[i][i+1] = 1
        for l in range(3, n+1):
            for i in range(0, n-l+1):
                j = i+l-1
                if s[i] == s[j]:
                    dp[i][j] = 2 + dp[i+1][j-1]
                else:
                    dp[i][j] = max(dp[i+1][j], dp[i][j-1])
        return dp[0][n-1]