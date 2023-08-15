class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        rows, cols, q = len(mat), len(mat[0]), deque()
        dp = [[float("inf") for _ in range(0, cols)] for _ in range(0, rows)]
        for r in range(0, rows):
            for c in range(0, cols):
                if mat[r][c] == 0:
                    dp[r][c] = 0
                    q.append([r, c, 0])
        while q:
            r, c, d = q.popleft()
            for rr, cc in [[1, 0], [0, 1], [-1, 0], [0, -1]]:
                rrr = rr + r
                ccc = cc + c
                if rrr < 0 or rrr >= rows or ccc < 0 or ccc >= cols or 1 + d >= dp[rrr][ccc]:
                    continue
                dp[rrr][ccc] = 1 + d
                q.append([rrr, ccc, 1 + d])
        return dp