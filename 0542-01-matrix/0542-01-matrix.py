class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        m, n = len(mat), len(mat[0])
        for r in range(0, m):
            for c in range(0, n):
                if mat[r][c] != 0:
                    left = mat[r][c-1] if c > 0 else float("inf")
                    up = mat[r-1][c] if r > 0 else float("inf")
                    mat[r][c] = 1 + min(left, up)
        for r in range(m-1, -1, -1):
            for c in range(n-1, -1, -1):
                if mat[r][c] != 0:
                    right = mat[r][c+1] if c < n-1 else float("inf")
                    down = mat[r+1][c] if r < m-1 else float("inf")
                    mat[r][c] = min(mat[r][c], 1 + min(right, down))
        return mat
        
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