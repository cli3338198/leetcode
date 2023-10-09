class Solution:
    def countSubstrings(self, s: str) -> int:
        n = len(s)
        dp = [[0] * n for _ in range(0, n)]
        for i in range(0, n):
            dp[i][i] = 1
        for i in range(0, n-1):
            if s[i] == s[i+1]:
                dp[i][i+1] = 1
        for l in range(3, n+1):
            for i in range(0, n-l+1):
                j = i+l-1
                if s[i] == s[j] and dp[i+1][j-1]:
                    dp[i][j] = 1
        return sum(map(sum, dp))