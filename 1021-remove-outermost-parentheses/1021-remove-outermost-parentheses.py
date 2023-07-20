class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        res, opened = "", 0
        for c in s:
            if c == "(" and opened > 0:
                res += c
            if c == ")" and opened > 1:
                res += c
            opened += 1 if c == "(" else -1
        return res