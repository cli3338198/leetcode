class Solution:
    def replaceDigits(self, s: str) -> str:
        def shift(c: str, n: int) -> str:
            abc = [c for c in "abcdefghijklmnopqrstuvwxyz"]
            idx = abc.index(c)
            return abc[idx + n]
        res = ''
        for i in range(len(s)):
            if i % 2 != 0:
                res += shift(s[i-1], int(s[i]))
            else:
                res += s[i]
        return res