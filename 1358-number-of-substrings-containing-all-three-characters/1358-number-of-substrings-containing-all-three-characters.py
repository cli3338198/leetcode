class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        res = l = 0
        mp = {c: 0 for c in 'abc'}
        for r, c in enumerate(s):
            mp[c] += 1
            while mp['a'] > 0 and mp['c'] > 0 and mp['b'] > 0:
                mp[s[l]] -= 1
                l += 1
            res += l
        return res