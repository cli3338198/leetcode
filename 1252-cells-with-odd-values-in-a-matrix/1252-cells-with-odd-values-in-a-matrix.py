class Solution:
    def oddCells(self, m: int, n: int, indices: List[List[int]]) -> int:
        grid = [[0] * n for _ in range(0, m)]
        for r, c in indices:
            for row in range(0, m):
                grid[row][c] += 1
            for col in range(0, n):
                grid[r][col] += 1
        return sum([1 if cell % 2 != 0 else 0 for row in grid for cell in row])
        return sum([1 for row in grid for cell in row if cell % 2 != 0])