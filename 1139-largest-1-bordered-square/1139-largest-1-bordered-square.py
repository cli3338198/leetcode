class Solution:
    def largest1BorderedSquare(self, grid: List[List[int]]) -> int:
        rows, cols, mx = len(grid), len(grid[0]), 0
        horizontal, vertical = [[col for col in row] for row in grid], [[col for col in row] for row in grid]
        for r in range(0, rows):
            for c in range(0, cols):
                if grid[r][c] > 0:
                    if r > 0 and vertical[r-1][c] > 0:
                        vertical[r][c] += vertical[r-1][c]
                    if c > 0 and horizontal[r][c-1] > 0:
                        horizontal[r][c] += horizontal[r][c-1]
        for r in range(rows-1, -1, -1):
            for c in range(cols-1, -1, -1):
                mn = min(horizontal[r][c], vertical[r][c])
                while mn > mx:
                    if horizontal[r-mn+1][c] >= mn and vertical[r][c-mn+1] >= mn:
                        mx = max(mx, mn)
                        break
                    mn -= 1
        return mx * mx