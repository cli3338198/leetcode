class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        l = cur_cost = res = 0
        for r in range(0, len(s)):
            cur_cost += abs(ord(s[r]) - ord(t[r]))
            while l <= r and cur_cost > maxCost:
                cur_cost -= abs(ord(s[l]) - ord(t[l]))
                l += 1
            res = max(res, r - l + 1)
        return res