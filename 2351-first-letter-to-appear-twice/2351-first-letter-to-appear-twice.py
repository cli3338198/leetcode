class Solution:
    def repeatedCharacter(self, s: str) -> str:
        chars = set()
        for c in s:
            if c in chars:
                return c
            chars.add(c)