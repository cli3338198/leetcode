class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        m, n, rows, cols = len(matrix), len(matrix[0]), set(), set()
        for r in range(0, m):
            for c in range(0, n):
                if matrix[r][c] == 0:
                    rows.add(r)
                    cols.add(c)
        for r in range(0, m):
            for c in range(0, n):
                if r in rows or c in cols:
                    matrix[r][c] = 0