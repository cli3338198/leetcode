class Solution:
    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:
        
        moves = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, -1], [2, 1], [-1, -2], [1, -2]]
        dp = [[0] * n for _ in range(n)]
        dp[row][column] = 1
        
        for i in range(1, k+1):
            new_dp = [[0] * n for _ in range(n)]
            
            for r in range(n):
                for c in range(n):
                    for rr, cc in moves:
                        rrr = rr + r
                        ccc = cc + c
                        
                        if rrr < 0 or rrr >= n or ccc < 0 or ccc >= n:
                            continue
                        
                        new_dp[r][c] += dp[rrr][ccc]
            
            dp = new_dp
        
        res = 0
        for r in range(n):
            for c in range(n):
                res += dp[r][c]
        
        return res / pow(8, k)
            