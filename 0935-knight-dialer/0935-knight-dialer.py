class Solution:
    def knightDialer(self, n: int) -> int:
        mod = pow(10, 9) + 7
        moves = [[4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]]
        dp = [1] * 10
        for move in range(2, n+1):
            next_dp = [0] * 10 
            for i in range(0, 10):
                for next in moves[i]:
                    next_dp[i] += dp[next] % mod
            dp = next_dp
        return sum(dp) % mod
    
        #
        
        mod = pow(10, 9) + 7
        moves = [[4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]]
        dp = [[0] * 10 for _ in range(0, n+1)]
        dp[1] = [1] * 10
        for move in range(2, n+1):
            for i in range(0, 10):
                for next in moves[i]:
                    dp[move][i] += dp[move-1][next] % mod
        return sum(dp[-1]) % mod