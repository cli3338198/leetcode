class Solution:
    def calculateMinimumHP(self, dungeon: List[List[int]]) -> int:
        
        rows = len(dungeon)
        cols = len(dungeon[0])
        
        dp = [[inf] * cols for _ in range(rows)]
        
        for r in range(rows-1, -1, -1):
            for c in range(cols-1, -1, -1):
                if r == rows-1 and c == cols-1:
                    dp[r][c] = min(0, dungeon[r][c])
                elif r == rows-1:
                    dp[r][c] = min(0, dungeon[r][c] + dp[r][c+1])
                elif c == cols-1:
                    dp[r][c] = min(0, dungeon[r][c] + dp[r+1][c])
                else:
                    dp[r][c] = min(0, dungeon[r][c] + max(dp[r][c+1], dp[r+1][c]))
                
        return abs(dp[0][0]) + 1