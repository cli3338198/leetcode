class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        first, last, seen, res = [float("inf")] * 26, [float("inf")] * 26, set(), 0
        for i, c in enumerate(s):
            first[ord(c)-97] = min(first[ord(c)-97], i)
            last[ord(c)-97] = i
        for i in range(0, 26):
            if first[i] != last[i]:
                seen = set()
                for j in range(first[i]+1, last[i]):
                    seen.add(s[j])
                res += len(seen)
        return res
        