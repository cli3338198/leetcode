class Solution:
    def knightDialer(self, n: int) -> int:
        
        mod = 1000000007
        moves = [[4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]]
        dp = [[0] * 10 for _ in range(n+1)]
        
        for i in range(10):
            dp[1][i] = 1
            
        for i in range(2, n+1):
            for j in range(0, 10):
                for next in moves[j]:
                    dp[i][j] += dp[i-1][next] % mod
                    
        return sum(dp[n]) % mod
        