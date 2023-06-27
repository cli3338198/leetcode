class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        res = 0
        for i in range(0, len(s)-2):
            if s[i] != s[i+1] and s[i+1] != s[i+2] and s[i] != s[i+2]:
                res += 1
        return res