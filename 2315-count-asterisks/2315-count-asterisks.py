class Solution:
    def countAsterisks(self, s: str) -> int:
        is_between, cnt = True, 0
        for c in s:
            if c == "|":
                is_between = not is_between
            if is_between and c == "*":
                cnt += 1
        return cnt