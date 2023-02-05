class Solution:
    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:
        
        moves = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, -1], [2, 1], [-1, -2], [1, -2]]
        dp = [[[0] * n for _ in range(n)] for _ in range(k+1)]
        dp[0][row][column] = 1
        
        for i in range(1, k+1):
            for r in range(n):
                for c in range(n):
                    for rr, cc in moves:
                        rrr = rr + r
                        ccc = cc + c
                        
                        if rrr < 0 or rrr >= n or ccc < 0 or ccc >= n:
                            continue
                            
                        dp[i][r][c] += dp[i-1][rrr][ccc] / 8
                        
        return sum(map(sum, dp[k]))