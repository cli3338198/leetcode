class Solution:
    def minTimeToType(self, word: str) -> int:
        res, cur = len(word), "a"
        for c in word:
            diff = abs(ord(c) - ord(cur)) % 26
            res += min(diff, 26 - diff)
            cur = c
        return res