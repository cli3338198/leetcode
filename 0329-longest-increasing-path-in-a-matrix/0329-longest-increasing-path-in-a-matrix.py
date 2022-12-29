class Solution:
    def longestIncreasingPath(self, mat: List[List[int]]) -> int:
        
        dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
        
        rows = len(mat)
        cols = len(mat[0])
        
        out_degrees = [[0] * cols for _ in range(rows)]
        
        for r in range(rows):
            for c in range(cols):
                for rr, cc in dirs:
                    
                    rrr = rr + r
                    ccc = cc + c
                    
                    if rrr >= 0 and rrr < rows and ccc >= 0 and ccc < cols and mat[r][c] > mat[rrr][ccc]:
                        out_degrees[r][c] += 1
        
        q = []
        
        for r in range(rows):
            for c in range(cols):
                if out_degrees[r][c] == 0:
                    q.append([r, c])
                    
        res = 0
                    
        while q:
            res += 1
            length = len(q)
            
            for i in range(length):
                r, c = q.pop(0)
                
                for rr, cc in dirs:
                    rrr = rr + r
                    ccc = cc + c
                    
                    if rrr >= 0 and rrr < rows and ccc >= 0 and ccc < cols and mat[r][c] < mat[rrr][ccc]:
                        out_degrees[rrr][ccc] -= 1
                        
                        if out_degrees[rrr][ccc] == 0:
                            q.append([rrr, ccc])
            
        return res
                