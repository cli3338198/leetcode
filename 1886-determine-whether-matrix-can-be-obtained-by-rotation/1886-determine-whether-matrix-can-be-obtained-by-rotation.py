class Solution:
    def findRotation(self, mat: List[List[int]], target: List[List[int]]) -> bool:
        rot = [1] * 4
        w = len(mat)
        for r in range(0, w):
            for c in range(0, w):
                if mat[r][c] != target[r][c]:
                    rot[0] = 0
                if mat[r][c] != target[w-c-1][r]:
                    rot[1] = 0
                if mat[r][c] != target[w-r-1][w-c-1]:
                    rot[2] = 0
                if mat[r][c] != target[c][w-r-1]:
                    rot[3] = 0                
        return sum(rot) > 0