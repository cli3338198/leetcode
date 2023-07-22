class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        o = c = 0
        for paren in s:
            if paren == '(':
                o += 1
            else:
                if o > 0:
                    o -= 1
                else:
                    c += 1
        return o + c