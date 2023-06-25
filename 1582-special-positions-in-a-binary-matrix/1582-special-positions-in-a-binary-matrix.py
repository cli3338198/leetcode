class Solution:
    def numSpecial(self, mat: List[List[int]]) -> int:
        rows = [0] * len(mat)
        cols = [0] * len(mat[0])
        res = 0
        for r in range(0, len(mat)):
            for c in range(0, len(mat[r])):
                if mat[r][c] == 1:
                    rows[r] += 1
                    cols[c] += 1
        for r in range(0, len(mat)):
            for c in range(0, len(mat[r])):
                if mat[r][c] == 1 and rows[r] == 1 and cols[c] == 1:
                    res += 1
        return res