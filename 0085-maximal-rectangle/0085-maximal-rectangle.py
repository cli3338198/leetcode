class Solution:
    def maximalRectangle(self, mat: List[List[str]]) -> int:
        rows = len(mat)
        cols = len(mat[0])
        
        for r in range(rows):
            for c in range(cols):
                mat[r][c] = int(mat[r][c])
        
        for r in range(1, rows):
            for c in range(cols):
                if mat[r][c] > 0:
                    mat[r][c] += mat[r-1][c]
                    
        def max_histogram(row):
            stack = []
            left = [0] * len(row)
            right = [0] * len(row)
                
            for i in range(len(row)):
                while stack and row[stack[-1]] >= row[i]: stack.pop()
                left[i] = stack[-1] + 1 if stack else 0
                stack.append(i)
                
            stack = []
                
            for i in range(len(row)-1, -1, -1):
                while stack and row[stack[-1]] >= row[i]: stack.pop()
                right[i] = stack[-1] - 1 if stack else len(row) - 1
                stack.append(i)
            
            ans = 0
            for i in range(len(row)):
                ans = max(ans, row[i] * (right[i] - left[i] + 1))
            
            return ans
        
        res = 0
        for row in mat:
            res = max(res, max_histogram(row))
        return res