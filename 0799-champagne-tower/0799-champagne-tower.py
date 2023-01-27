class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        
        dp = [poured]
        
        for _ in range(query_row):
            dp_ = [0] * (len(dp) + 1)
            
            for glass in range(len(dp)):
                remaining = max(0, dp[glass] - 1) / 2
                
                dp_[glass] += remaining
                dp_[glass + 1] += remaining
                
            dp = dp_
        
        return min(1, dp[query_glass])