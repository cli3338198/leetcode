class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1: return s
        
        res = [""] * numRows
        flip = True
        idx = 0
        
        for c in s:
            res[idx] += c
            if idx == 0 or idx == numRows-1:
                flip = not flip
            if flip:
                idx -= 1
            else:
                idx += 1
                
        return "".join(res)
    