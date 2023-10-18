class Solution:
    def minExtraChar(self, s: str, dictionary: List[str]) -> int:
        n = len(s)
        dp = [0] * (n+1)
        for i in range(1, n+1):
            dp[i] = 1 + dp[i-1]
            for j in range(0, i):
                if s[j:i:] in dictionary:
                    dp[i] = min(dp[i], dp[j])
        return dp[n]