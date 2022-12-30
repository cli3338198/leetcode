class Solution:
    def mergeStones(self, stones: List[int], k: int) -> int:
        
        n = len(stones)
        
        if (n - 1) % (k - 1) != 0:
            return -1
        
        prefix_sums = [0]
        
        for i in range(n):
            prefix_sums.append(prefix_sums[i] + stones[i])
            
        dp = [[0] * n for _ in range(n)]
        
        for length in range(k, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                dp[i][j] = inf
                
                for mid in range(i, j, k-1):
                    dp[i][j] = min(dp[i][j], dp[i][mid] + dp[mid+1][j])
                    
                if (j - i) % (k - 1) == 0:
                    dp[i][j] += prefix_sums[j+1] - prefix_sums[i]
                    
        return dp[0][n-1]