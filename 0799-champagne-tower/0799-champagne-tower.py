class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        dp = [poured]
        for r in range(0, query_row):
            next_dp = [0] * (len(dp) + 1)
            for c in range(0, len(dp)):
                if dp[c] > 1:
                    next_dp[c] += (dp[c] - 1) / 2
                    next_dp[c+1] += (dp[c] - 1) / 2
            dp = next_dp
        return min(1, dp[query_glass])