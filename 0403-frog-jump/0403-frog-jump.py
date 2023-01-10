class Solution:
    def canCross(self, stones: List[int]) -> bool:
        
        n = len(stones)
        
        dp = [[False] * n for _ in range(n)]
        dp[0][1] = True
        
        for i in range(1, n):
            for j in range(i):
                jump = stones[i] - stones[j]
                
                if jump >= n or dp[j][jump] == False:
                    continue
                    
                dp[i][jump] = True
                    
                if jump + 1 < n:
                    dp[i][jump+1] = True
                    
                if jump - 1 >= 0:
                    dp[i][jump-1] = True
                    
                if i == n-1:
                    return True
        
        return False