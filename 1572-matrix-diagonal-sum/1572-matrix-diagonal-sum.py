class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        left, right, res = 0, len(mat)-1, 0
        for r in range(0, len(mat)):
            if left == right:
                res += mat[r][left]
            else:
                res += mat[r][left] + mat[r][right]
            left += 1
            right -= 1
        return res