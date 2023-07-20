class Solution:
    def toLowerCase(self, s: str) -> str:
        return s.lower()
        return "".join([c.lower() for c in s])