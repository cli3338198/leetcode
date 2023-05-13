class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        mx = ht = 0
        for g in gain:
            ht += g
            mx = max(mx, ht)
        return mx