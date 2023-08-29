class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        lo, hi = 1, max(piles)
        while lo < hi:
            m, hrs = (lo+hi)//2, 0
            for p in piles:
                hrs += ceil(p/m)
            if hrs <= h:
                hi = m
            else:
                lo = m + 1
        return lo