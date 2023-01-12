class Solution:
    def canIWin(self, max: int, total: int) -> bool:
        
        sum_ = max * (max + 1) // 2
        dp = {}
        
        if sum_ < total:
            return False
        
        if max >= total:
            return True
    
        if sum == total:
            return max % 2
        
        def helper(total: int, k: int) -> bool:
            
            if k in dp:
                return dp[k]
            
            for i in range(1, max+1):
                if not k & (1 << i):
                    if total - i <= 0 or not helper(total-i, (k | (1 << i))):
                        dp[k] = True
                        return True
            
            dp[k] = False
            return dp[k]
    
        return helper(total, 0)