class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        @lru_cache(None)
        def dfs(r: int, c: int) -> int:
            if r == len(triangle):
                return 0
            return triangle[r][c] + min(dfs(r+1, c), dfs(r+1, c+1))
        
        return dfs(0, 0)
        
        # 
        
        for i in range(len(triangle)-2, -1, -1):
            for j in range(0, len(triangle[i])):
                triangle[i][j] += min(triangle[i+1][j], triangle[i+1][j+1])
        return triangle[0][0]