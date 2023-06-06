class Solution:
    def checkXMatrix(self, grid: List[List[int]]) -> bool:
        neg, pos = 0, len(grid)-1
        for r in range(0, len(grid)):
            for c in range(0, len(grid[r])):
                if r - c == neg or r + c == pos:
                    if not grid[r][c] > 0:
                        return False
                else:
                    if grid[r][c] != 0:
                        return False
        return True