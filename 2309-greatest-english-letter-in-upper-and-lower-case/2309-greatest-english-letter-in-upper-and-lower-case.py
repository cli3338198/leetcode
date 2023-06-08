class Solution:
    def greatestLetter(self, s: str) -> str:
        seen, res = set(), ""
        for c in s:
            seen.add(c)
            up = c.upper()
            low = c.lower()
            if up in seen and low in seen:
                if res == "" or res < up:
                    res = up
        return res