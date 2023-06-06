class Solution:
    def rowAndMaximumOnes(self, mat: List[List[int]]) -> List[int]:
        res = [None, 0]
        for r, row in enumerate(mat):
            sm = sum(row)
            if res[0] == None or sm > res[1]:
                res[0] = r
                res[1] = sm
        return res
        
        res = [None, 0]
        for r in range(0, len(mat)):
            sm = 0
            for c in range(0, len(mat[r])):
                sm += mat[r][c]
            if res[0] == None or sm > res[1]:
                res[0] = r
                res[1] = sm
        return res