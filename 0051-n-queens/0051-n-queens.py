class Solution(object):
    def solveNQueens(self, n):
        """
        :type n: int
        :rtype: List[List[str]]
        """
        def convert(arr):
            return ["".join(row) for row in arr]
        
        res, arr = [], [["."] * n for _ in range(0, n)]

        def dfs(r, arr, col, pos, neg):
            if r == n:
                res.append(convert(arr))
                return
            for c in range(0, n):
                if c not in col and r + c not in pos and r - c not in neg:
                    col.add(c)
                    pos.add(r + c)
                    neg.add(r - c)
                    arr[r][c] = "Q"
                    dfs(r+1, arr, col, pos, neg)
                    col.remove(c)
                    pos.remove(r + c)
                    neg.remove(r - c)
                    arr[r][c] = "."
            
        dfs(0, arr, set(), set(), set())
        return res