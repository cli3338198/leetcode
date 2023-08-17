class Solution:
    def partitionString(self, s: str) -> int:
        seen, res = set(), 0
        for c in s:
            if c in seen:
                seen = set()
                res += 1
            seen.add(c)
        return res + 1