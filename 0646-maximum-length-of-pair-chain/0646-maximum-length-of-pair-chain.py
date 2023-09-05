class Solution:
    def findLongestChain(self, pairs: List[List[int]]) -> int:
        pairs.sort(key=lambda x: x[0])
        n = len(pairs)
        dp, res = [1] * n, 1
        for i in range(1, n):
            for j in range(0, i):
                a, b = pairs[j]
                c, d = pairs[i]
                if b < c:
                    dp[i] = max(dp[i], 1 + dp[j])
            res = max(res, dp[i])
        return res