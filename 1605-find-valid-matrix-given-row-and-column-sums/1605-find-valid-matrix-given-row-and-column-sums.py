class Solution:
    def restoreMatrix(self, rowSum: List[int], colSum: List[int]) -> List[List[int]]:
        rows, cols, r, c = len(rowSum), len(colSum), 0, 0
        mat = [[0 for _ in range(0, cols)] for _ in range(0, rows)]
        while r < rows and c < cols:
            mat[r][c] = min(rowSum[r], colSum[c])
            rowSum[r] -= mat[r][c]
            colSum[c] -= mat[r][c]
            if rowSum[r] == 0:
                r += 1
            if colSum[c] == 0:
                c += 1
        return mat