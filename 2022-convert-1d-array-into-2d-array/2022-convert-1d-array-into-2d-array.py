class Solution:
    def construct2DArray(self, original: List[int], m: int, n: int) -> List[List[int]]:
        if m * n != len(original):
            return []
        res = [[None for _ in range(0, n)] for _ in range(0, m)]
        i = 0
        for r in range(0, m):
            for c in range(0, n):
                res[r][c] = original[i]
                i += 1
        return res