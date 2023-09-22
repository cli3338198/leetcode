class Solution:
    def minFallingPathSum(self, matrix: List[List[int]]) -> int:
        for r in range(1, len(matrix)):
            for c in range(0, len(matrix[r])):
                matrix[r][c] += min((matrix[r-1][c-1] if c-1 >= 0 else inf), matrix[r-1][c], (matrix[r-1][c+1] if c+1 < len(matrix[r]) else inf)) 
        return min(matrix[-1])