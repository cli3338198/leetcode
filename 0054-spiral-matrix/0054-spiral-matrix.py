class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        res = []
        rows, cols = len(matrix), len(matrix[0])
        l, r, u, d = 0, cols-1, 0, rows-1
        while l <= r and u <= d:
            for i in range(l, r+1):
                res.append(matrix[u][i])
            u += 1
            for i in range(u, d+1):
                res.append(matrix[i][r])
            r -= 1
            if u > d:
                break
            for i in range(r, l-1, -1):
                res.append(matrix[d][i])
            d -= 1
            if l > r:
                break
            for i in range(d, u-1, -1):
                res.append(matrix[i][l])
            l += 1
        return res
        